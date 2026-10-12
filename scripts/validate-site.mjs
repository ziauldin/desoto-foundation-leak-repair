// Post-build SEO + link validation. Run after `next build`:  npm run validate
// Scans prerendered HTML in .next/server/app and checks:
//   - every internal <a href> resolves to a generated page
//   - unique <title>, meta description and exactly one <h1> per page
//   - canonical, Open Graph and BreadcrumbList JSON-LD present (except home)
//   - FAQPage schema whenever an FAQ section renders
//   - no other DFW city names in page copy (DeSoto-only rule)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = join(process.cwd(), ".next", "server", "app");
const OTHER_CITIES = [
  "Dallas, TX", "Cedar Hill", "Lancaster", "Duncanville", "Glenn Heights", "Red Oak", "Ovilla",
  "Grand Prairie", "Arlington", "Mansfield", "Midlothian", "Waxahachie", "Fort Worth", "Irving",
  "Garland", "Mesquite", "Plano", "Frisco", "Hutchins", "Wilmer", "Ferris",
];

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

const pages = new Map();
for (const file of walk(root)) {
  const route = toRoute(file);
  if (route) pages.set(route, readFileSync(file, "utf8"));
}

const errors = [];
const warn = [];
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const STATIC_FILES = new Set(["/sitemap.xml", "/robots.txt", "/og-default.png", "/favicon.ico"]);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

for (const [route, html] of pages) {
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "").trim());

  if (!title) errors.push(`${route}: missing <title>`);
  if (!desc) errors.push(`${route}: missing meta description`);
  if (h1Count !== 1) errors.push(`${route}: expected 1 <h1>, found ${h1Count}`);
  if (!/<link rel="canonical"/.test(html)) errors.push(`${route}: missing canonical`);
  if (!/property="og:title"/.test(html)) errors.push(`${route}: missing og:title`);
  if (route !== "/" && !/"BreadcrumbList"/.test(html)) errors.push(`${route}: missing BreadcrumbList schema`);
  if (/id="faq"/.test(html) && !/"FAQPage"/.test(html)) errors.push(`${route}: FAQ section without FAQPage schema`);

  (titles.get(title) ?? titles.set(title, []).get(title)).push(route);
  (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(route);
  (h1s.get(h1) ?? h1s.set(h1, []).get(h1)).push(route);

  // Internal links
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const path = href.split("#")[0].split("?")[0];
    if (!path || STATIC_FILES.has(path)) continue;
    if (!pages.has(path)) errors.push(`${route}: broken link -> ${href}`);
  }

  // Visible text only (strip scripts/styles/tags) for the city check.
  const text = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
  for (const city of OTHER_CITIES) {
    if (new RegExp(`\\b${city}\\b`).test(text)) errors.push(`${route}: mentions other city "${city}"`);
  }
  if (/\bDallas\b(?! County)/.test(text)) warn.push(`${route}: mentions "Dallas" (not "Dallas County")`);
}

for (const [label, map] of [["title", titles], ["meta description", descs], ["h1", h1s]]) {
  for (const [value, routes] of map) if (value && routes.length > 1) errors.push(`duplicate ${label} "${value}" on ${routes.join(", ")}`);
}

console.log(`Checked ${pages.size} pages.`);
warn.forEach((w) => console.warn(`warn: ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`error: ${e}`));
  console.error(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log("All checks passed: links resolve, titles/descriptions/H1s unique, schema present, DeSoto-only copy.");
