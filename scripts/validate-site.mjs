// Post-build SEO + link validation. Run after `next build`:  npm run validate
// Scans prerendered HTML in .next/server/app. Errors fail the run (exit 1); warnings are printed only.
//
// Errors
//   - build output missing, or fewer pages than sitemap.xml lists (and never fewer than MIN_PAGES)
//   - sitemap.xml and the rendered pages disagree
//   - broken internal links, including #anchors that don't match an id on the target page
//   - missing/duplicate <title>, meta description or <h1>; more than one <title> or <title> outside <head>
//   - title over 60 chars or ~561px, or identical to the page's H1
//   - canonical not equal to SITE_URL + path; any rel="next"/"prev"
//   - missing og:title, BreadcrumbList (except home), FAQPage when an FAQ renders,
//     Organization + WebSite on home, complete Article on guides
//   - images without alt text or missing from /public; other city names (DeSoto-only rule)
// Warnings
//   - meta description outside 70-155 chars; same first H2 on several pages
//   - fewer than 3 pages linking to a page from body content (<main>); "Dallas" outside known names
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { MAX_TITLE_CHARS, MAX_TITLE_PX, titlePixelWidth } from "./title-width.mjs";

const root = join(process.cwd(), ".next", "server", "app");
// Canonicals always point at the production domain (the audit crawled the vercel.app preview, which is expected).
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://desotofoundationleakrepair.com").replace(/\/$/, "");
// Floor in case sitemap.xml itself is broken. 62 live pages as of Nov 2026.
const MIN_PAGES = 55;
const OTHER_CITIES = [
  "Dallas, TX", "Cedar Hill", "Lancaster", "Duncanville", "Glenn Heights", "Red Oak", "Ovilla",
  "Grand Prairie", "Arlington", "Mansfield", "Midlothian", "Waxahachie", "Fort Worth", "Irving",
  "Garland", "Mesquite", "Plano", "Frisco", "Hutchins", "Wilmer", "Ferris",
];
// Flags "Dallas" except inside these names (county and appraisal district that cover DeSoto).
const OTHER_DALLAS = /\bDallas\b(?! County| Central Appraisal District)/;

const fail = (msg) => {
  console.error(`error: ${msg}`);
  process.exit(1);
};

if (!existsSync(root)) fail(`no build output at ${root}. Run \`npm run build\` first.`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : full.endsWith(".html") ? [full] : [];
  });
}

const toRoute = (file) => {
  const rel = relative(root, file).split(sep).join("/").replace(/\.html$/, "");
  if (rel === "index") return "/";
  if (rel === "_not-found" || rel.startsWith("_")) return null;
  return `/${rel}/`;
};

// Pages that call notFound() (hidden pages, e.g. the /calculators/ hub) still emit an .html file;
// they render Next's error shell, so they're not live pages and links to them count as broken.
const isNotFoundShell = (html) => /<html[^>]*id="__next_error__"/.test(html);

const pages = new Map();
for (const file of walk(root)) {
  const route = toRoute(file);
  if (!route) continue;
  const html = readFileSync(file, "utf8");
  if (!isNotFoundShell(html)) pages.set(route, html);
}

// The expected page set is whatever sitemap.xml lists (it is generated from the live pages).
const sitemapFile = join(root, "sitemap.xml.body");
if (!existsSync(sitemapFile)) fail("sitemap.xml was not generated (.next/server/app/sitemap.xml.body missing).");
const sitemapPaths = new Set([...readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));
const expected = Math.max(sitemapPaths.size, MIN_PAGES);
if (pages.size < expected) fail(`found ${pages.size} pages, expected at least ${expected} (sitemap.xml lists ${sitemapPaths.size}).`);

// Element ids per page, for #anchor checks (same-page and cross-page).
const idsByRoute = new Map([...pages].map(([route, html]) => [route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));

// Incoming internal links per page, counted from links inside <main> only (header/footer links excluded).
const MIN_INCOMING = 3;
const incoming = new Map([...pages.keys()].map((r) => [r, new Set()]));

const errors = [];
const warn = [];
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const firstH2s = new Map();
const stripTags = (s) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const STATIC_FILES = new Set(["/sitemap.xml", "/robots.txt", "/og-default.png", "/favicon.ico", "/feed.xml", "/logo.png"]);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

for (const [route, html] of pages) {
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "").trim());

  if (!title) errors.push(`${route}: missing <title>`);
  // Static output check. The runtime equivalent (any user agent) is: curl -A "Mozilla/5.0" URL | grep -c "<title"
  const titleTags = (html.match(/<title[\s>]/g) ?? []).length;
  const headEnd = html.indexOf("</head>");
  if (titleTags > 1) errors.push(`${route}: ${titleTags} <title> tags (expected 1)`);
  if (titleTags && (headEnd === -1 || html.indexOf("<title") > headEnd)) errors.push(`${route}: <title> is outside <head>`);
  if (title.length > MAX_TITLE_CHARS) errors.push(`${route}: title is ${title.length} chars (max ${MAX_TITLE_CHARS}): "${title}"`);
  const px = titlePixelWidth(title);
  if (px > MAX_TITLE_PX) errors.push(`${route}: title is ~${px}px wide (max ${MAX_TITLE_PX}px, Arial 20px estimate): "${title}"`);
  if (title && h1 && title.toLowerCase() === h1.toLowerCase()) errors.push(`${route}: title is identical to the H1 ("${title}")`);
  if (!desc) errors.push(`${route}: missing meta description`);
  else if (desc.length < 70 || desc.length > 155) warn.push(`${route}: meta description is ${desc.length} chars (aim for 70-155)`);
  if (h1Count !== 1) errors.push(`${route}: expected 1 <h1>, found ${h1Count}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) errors.push(`${route}: missing canonical`);
  else if (canonical !== `${SITE_URL}${route}`) errors.push(`${route}: canonical ${canonical} should be ${SITE_URL}${route}`);
  // The site has no paginated listings; flag anything a crawler would read as pagination.
  if (/rel="(next|prev)"/.test(html)) errors.push(`${route}: unexpected rel="next"/"prev" pagination link`);
  if (!/property="og:title"/.test(html)) errors.push(`${route}: missing og:title`);
  if (route !== "/" && !/"BreadcrumbList"/.test(html)) errors.push(`${route}: missing BreadcrumbList schema`);
  // Structured data: Organization + WebSite on home (rendered site-wide by the layout); Article on guides.
  if (route === "/" && !(/"@type":"Organization"/.test(html) && /"@type":"WebSite"/.test(html))) errors.push(`/: missing Organization or WebSite JSON-LD`);
  if (/aria-label="In this guide"/.test(html)) {
    const article = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
      .find((j) => j?.["@type"] === "Article");
    if (!article) errors.push(`${route}: guide without Article JSON-LD`);
    else for (const key of ["publisher", "datePublished", "dateModified", "mainEntityOfPage", "image", "author"]) {
      if (!article[key]) errors.push(`${route}: Article JSON-LD missing ${key}`);
    }
  }
  if (/id="faq"/.test(html) && !/"FAQPage"/.test(html)) errors.push(`${route}: FAQ section without FAQPage schema`);

  // First H2 inside <main> (the footer's column headings are H2s too, so they're excluded).
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html;
  const firstH2 = decode(stripTags(main.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? ""));
  for (const [, href] of main.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) {
    if (href !== route && incoming.has(href)) incoming.get(href).add(route);
  }
  if (firstH2) (firstH2s.get(firstH2) ?? firstH2s.set(firstH2, []).get(firstH2)).push(route);

  (titles.get(title) ?? titles.set(title, []).get(title)).push(route);
  (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(route);
  (h1s.get(h1) ?? h1s.set(h1, []).get(h1)).push(route);

  // Internal links
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (href.startsWith("#")) {
      const id = decodeURIComponent(href.slice(1));
      if (id && !idsByRoute.get(route).has(id)) errors.push(`${route}: in-page link ${href} has no matching id`);
      continue;
    }
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const [beforeHash, hash] = href.split("#");
    const path = beforeHash.split("?")[0];
    if (!path || STATIC_FILES.has(path)) continue;
    if (!pages.has(path)) {
      errors.push(`${route}: broken link -> ${href}`);
      continue;
    }
    if (hash && !idsByRoute.get(path).has(decodeURIComponent(hash))) errors.push(`${route}: link ${href} points to a missing id on ${path}`);
  }

  // Every local image must exist in /public and have alt text
  for (const [tag] of html.matchAll(/<img[^>]*>/g)) {
    const src = tag.match(/src="([^"]+)"/)?.[1] ?? "";
    if (!/alt="[^"]+"/.test(tag)) errors.push(`${route}: image without alt text (${src})`);
    if (src.startsWith("/images/") && !existsSync(join(process.cwd(), "public", decodeURIComponent(src.split("?")[0])))) {
      errors.push(`${route}: missing image file ${src}`);
    }
  }

  // Visible text only (strip scripts/styles/tags) for the city check.
  const text = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  for (const city of OTHER_CITIES) {
    if (new RegExp(`\\b${city}\\b`).test(text)) errors.push(`${route}: mentions other city "${city}"`);
  }
  if (OTHER_DALLAS.test(text)) warn.push(`${route}: mentions "Dallas" outside "Dallas County" / "Dallas Central Appraisal District"`);
}

for (const path of sitemapPaths) if (!pages.has(path)) errors.push(`sitemap.xml lists ${path} but no page was rendered`);
for (const route of pages.keys()) if (!sitemapPaths.has(route)) errors.push(`${route} is rendered but missing from sitemap.xml`);

for (const [label, map] of [["title", titles], ["meta description", descs], ["h1", h1s]]) {
  for (const [value, routes] of map) if (value && routes.length > 1) errors.push(`duplicate ${label} "${value}" on ${routes.join(", ")}`);
}

for (const [route, sources] of incoming) {
  if (route !== "/" && sources.size < MIN_INCOMING) warn.push(`${route}: only ${sources.size} page(s) link to it from body content (want ${MIN_INCOMING}+)`);
}
for (const [value, routes] of firstH2s) if (routes.length > 1) warn.push(`same first H2 "${value}" on ${routes.join(", ")}`);

console.log(`Checked ${pages.size} pages (sitemap.xml lists ${sitemapPaths.size}).`);
if (warn.length) {
  console.warn(`
Warnings (${warn.length}):`);
  warn.forEach((w) => console.warn(`  warn: ${w}`));
}
if (errors.length) {
  console.error(`
Errors (${errors.length}):`);
  errors.forEach((e) => console.error(`  error: ${e}`));
  console.error(`
${errors.length} error(s), ${warn.length} warning(s).`);
  process.exit(1);
}
console.log(`
All checks passed with ${warn.length} warning(s).`);
