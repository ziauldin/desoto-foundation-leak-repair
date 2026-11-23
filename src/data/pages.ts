// Builds the resolved page registry from the topical map + content files.
// Templates read everything through getPage(); nothing here renders UI.

import type { CtaType, Crumb, PageRecord, PageType, TopicalMapRow } from "@/types/content";
import { topicalMap } from "./topical-map";
import { resolveAlias } from "./link-aliases";
import { serviceContent } from "./content/services";
import { resourceContent } from "./content/resources";
import { locationContent } from "./content/locations";
import { calculatorContent } from "./content/calculators";

const byPath = <T extends { path: string }>(items: T[]) =>
  new Map(items.map((item) => [item.path, item]));

export const servicesByPath = byPath(serviceContent);
export const resourcesByPath = byPath(resourceContent);
export const locationsByPath = byPath(locationContent);
export const calculatorsByPath = byPath(calculatorContent);

/** Hub pages built as their own routes (not from a topical map row, or with custom layouts). */
export const STATIC_PATHS = ["/", "/calculators/", "/resources/", "/service-area/", "/about/", "/contact/", "/sitemap/"];

const rowsByPath = new Map(topicalMap.map((row) => [row.path, row]));

const pathsOfType = (...types: PageType[]) =>
  topicalMap.filter((row) => types.includes(row.pageType)).map((row) => row.path);

export const servicePaths = pathsOfType("core", "sub");
export const calculatorPaths = pathsOfType("calculator");
export const resourcePaths = pathsOfType("blog");
export const locationPaths = pathsOfType("location");

// ---- Hidden pages (single source of truth) ----------------------------------
// Hidden pages return 404, are left out of the sitemap, and are never linked. Every route, the
// sitemap and every component that picks a link target goes through isHidden() / isLivePath().
//
// To un-hide a page: remove it from hiddenPaths. To un-hide calculators: set CALCULATORS_LIVE = true
// (that also brings back the /calculators/ hub).

/** Individually hidden pages that are not an entire page type. */
export const hiddenPaths: readonly string[] = ["/foundation-repair-cost-desoto-tx/", "/foundation-leak-repair-cost-desoto-tx/"];

/** Calculators (and their /calculators/ hub) are hidden site-wide until their content pass is finished. */
export const CALCULATORS_LIVE = false;
const CALCULATOR_HUB = "/calculators/";

const stripHash = (path: string) => path.split("#")[0].split("?")[0];

/** True when a page exists in the map but must not be served or linked. */
export function isHidden(path: string): boolean {
  const p = stripHash(path);
  if (hiddenPaths.includes(p)) return true;
  if (!CALCULATORS_LIVE && (p === CALCULATOR_HUB || calculatorPaths.includes(p))) return true;
  return false;
}

/** True when a link target is a real, served page (hash/query ignored). Use it wherever a link target is chosen. */
export function isLivePath(path: string): boolean {
  const p = stripHash(path);
  return (rowsByPath.has(p) || STATIC_PATHS.includes(p)) && !isHidden(p);
}

const isService = (p: string) => servicePaths.includes(p);
// Supporting links: live guides, plus calculators once CALCULATORS_LIVE is on.
const isSupporting = (p: string) => (resourcePaths.includes(p) || calculatorPaths.includes(p)) && isLivePath(p);

// ---- Internal links ----------------------------------------------------------

/** "Link to Foundation Repair, Crack Repair, ..." -> resolved paths. Unknown names are dropped. */
export function parseLinkSuggestions(raw: string): string[] {
  const list = raw.replace(/^link (to|from)\s+/i, "");
  return list
    .split(",")
    .map((name) => resolveAlias(name))
    .filter((p): p is string => Boolean(p));
}

/** Names in the map that don't resolve (used by the validation script). */
export function unresolvedLinkNames(row: TopicalMapRow): string[] {
  if (/footer link only|every location page|all bofu pages|calculators, cost guides/i.test(row.internalLinkingSuggestions)) return [];
  return row.internalLinkingSuggestions
    .replace(/^link (to|from)\s+/i, "")
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n && !resolveAlias(n));
}

/** De-duplicates, drops self-links and drops anything that isn't a live page. */
const unique = (paths: string[], exclude: string) => [...new Set(paths)].filter((p) => p !== exclude && isLivePath(p));

/** Fallback related guides per silo, so every page has 2-4 supporting links. */
const siloSupport: Record<string, string[]> = {
  "Leak Repair": [
    "/signs-of-foundation-leak/",
    "/slab-leak-vs-foundation-leak/",
    "/water-pooling-near-foundation/",
  ],
  "Foundation Problems": ["/water-pooling-near-foundation/", "/foundation-cracks-after-rain/"],
  "Foundation Repair": [
    "/uneven-floors-foundation-problem/",
    "/sticking-doors-foundation-problem/",
    "/foundation-settlement-repair/",
    "/foundation-cracks-after-rain/",
  ],
  Calculators: ["/signs-of-foundation-leak/", "/foundation-repair-vs-replacement/"],
  "Cost & Pricing": ["/signs-of-foundation-leak/", "/foundation-repair-vs-replacement/", "/diy-foundation-crack-repair-vs-professional/"],
  "Problems & Use Cases": ["/signs-of-foundation-leak/", "/uneven-floors-foundation-problem/"],
  Comparisons: ["/foundation-repair-vs-replacement/", "/diy-foundation-crack-repair-vs-professional/"],
  default: ["/signs-of-foundation-leak/", "/foundation-cracks-after-rain/"],
};

const siloServices: Record<string, string[]> = {
  "Leak Repair": [
    "/foundation-leak-repair-desoto/",
    "/slab-leak-repair-desoto-tx/",
    "/foundation-leak-detection-desoto-tx/",
    "/water-line-leak-repair-desoto-tx/",
    "/emergency-foundation-leak-repair-desoto-tx/",
  ],
  "Foundation Problems": [
    "/foundation-drainage-repair-desoto-tx/",
    "/french-drain-foundation-desoto-tx/",
    "/foundation-leak-repair-desoto/",
    "/foundation-inspection-desoto-tx/",
  ],
  "Foundation Repair": [
    "/foundation-repair-desoto-tx/",
    "/foundation-inspection-desoto-tx/",
    "/crawl-space-foundation-repair-desoto-tx/",
    "/commercial-foundation-repair-desoto-tx/",
    "/foundation-leveling-desoto-tx/",
  ],
  default: [
    "/foundation-leak-repair-desoto/",
    "/foundation-repair-desoto-tx/",
    "/foundation-crack-repair-desoto-tx/",
    "/slab-leak-repair-desoto-tx/",
    "/foundation-inspection-desoto-tx/",
    "/foundation-repair-company-desoto-tx/",
    "/foundation-leveling-desoto-tx/",
  ],
};

// ---- Breadcrumbs -------------------------------------------------------------

function buildBreadcrumbs(row: TopicalMapRow): Crumb[] {
  const names = row.breadcrumbStructure.split(">").map((s) => s.trim()).filter(Boolean);
  const crumbs: Crumb[] = [{ name: "Home", path: "/" }];
  names.slice(1, -1).forEach((name) => {
    // "Foundation Problems" has no hub page; it sits under Foundation Repair.
    const label = name === "Foundation Problems" ? "Foundation Repair" : name;
    const path = resolveAlias(label);
    if (path && isLivePath(path) && path !== row.path && !crumbs.some((c) => c.path === path)) crumbs.push({ name: label, path });
  });
  crumbs.push({ name: names[names.length - 1] ?? row.h1, path: row.path });
  return crumbs;
}

// ---- CTA defaults ------------------------------------------------------------

function defaultCta(row: TopicalMapRow): CtaType {
  if (row.pageType === "calculator") return "cost-check";
  if (row.parentSilo === "Leak Repair") return "leak-estimate";
  return "inspection";
}

// ---- Registry ---------------------------------------------------------------

function buildPage(row: TopicalMapRow): PageRecord {
  // unique() drops hidden pages, so nothing downstream can link to them.
  const internalLinks = unique(parseLinkSuggestions(row.internalLinkingSuggestions), row.path);
  const service = servicesByPath.get(row.path);
  const resource = resourcesByPath.get(row.path);
  const location = locationsByPath.get(row.path);
  const calculator = calculatorsByPath.get(row.path);

  const contentServices = [
    resource?.primaryService,
    calculator?.primaryService,
    ...(location?.serviceFocus ?? []),
  ].filter((p): p is string => Boolean(p));
  const contentSupport = [resource?.primaryCalculator].filter((p): p is string => Boolean(p));

  const relatedServices = unique(
    [
      ...contentServices,
      ...internalLinks.filter(isService),
      ...(siloServices[row.parentSilo] ?? []),
      ...siloServices.default,
    ],
    row.path,
  ).filter(isService).slice(0, 6);

  const relatedPages = unique(
    [
      ...contentSupport,
      ...internalLinks.filter(isSupporting),
      ...(siloSupport[row.parentSilo] ?? []),
      ...siloSupport.default,
    ],
    row.path,
  ).filter(isSupporting).slice(0, 4);

  const h1 = location?.h1Override ?? row.h1;
  const seoTitle = location?.seoTitleOverride ?? row.seoTitle;

  return {
    ...row,
    h1,
    seoTitle,
    breadcrumbs: buildBreadcrumbs({ ...row, h1 }),
    internalLinks,
    relatedServices,
    relatedPages,
    ctaType: service?.ctaType ?? resource?.ctaType ?? calculator?.ctaType ?? defaultCta(row),
  };
}

export const pages: PageRecord[] = topicalMap.map(buildPage);
const pagesByPath = new Map(pages.map((p) => [p.path, p]));

export const getPage = (path: string) => pagesByPath.get(path);
export const getPageOrThrow = (path: string) => {
  const page = pagesByPath.get(path);
  if (!page) throw new Error(`No topical map row for ${path}`);
  return page;
};

// ---- Service <-> DeSoto coverage pages ----------------------------------------
// Each service page links to its matching /service-area/desoto-tx-* page, and location pages link to
// the whole set, so the city x service pages aren't orphaned behind the /service-area/ directory.

/** Anchor text for each city x service coverage page. */
export const coverageAnchors: Record<string, string> = {
  "/service-area/desoto-tx-foundation-repair/": "Foundation repair coverage across DeSoto TX",
  "/service-area/desoto-tx-foundation-leak-repair/": "Foundation leak repair coverage across DeSoto TX",
  "/service-area/desoto-tx-foundation-crack-repair/": "Foundation crack repair across DeSoto TX neighborhoods",
  "/service-area/desoto-tx-house-foundation-repair/": "House foundation repair for DeSoto TX homes by era",
  "/service-area/desoto-tx-foundation-repair-company/": "Choosing a foundation repair company in DeSoto TX",
  "/service-area/desoto-tx-slab-leak-repair/": "Slab leak repair coverage across DeSoto TX",
  "/service-area/desoto-tx-foundation-inspection/": "Foundation inspections anywhere in DeSoto TX",
  "/service-area/desoto-tx-foundation-leveling/": "Foundation leveling for settling DeSoto TX homes",
  "/service-area/desoto-tx-foundation-drainage-repair/": "Foundation drainage fixes for DeSoto TX yards",
  "/service-area/desoto-tx-pier-and-beam-foundation-repair/": "Pier and beam repair for older DeSoto TX homes",
};

/** Service page -> its matching DeSoto coverage page. */
const serviceCoverage: Record<string, string> = {
  "/foundation-leak-repair-desoto/": "/service-area/desoto-tx-foundation-leak-repair/",
  "/foundation-repair-desoto-tx/": "/service-area/desoto-tx-foundation-repair/",
  "/foundation-repair-company-desoto-tx/": "/service-area/desoto-tx-foundation-repair-company/",
  "/house-foundation-repair-desoto-tx/": "/service-area/desoto-tx-house-foundation-repair/",
  "/home-foundation-repair-desoto-tx/": "/service-area/desoto-tx-house-foundation-repair/",
  "/foundation-crack-repair-desoto-tx/": "/service-area/desoto-tx-foundation-crack-repair/",
  "/slab-foundation-repair-desoto-tx/": "/service-area/desoto-tx-foundation-leveling/",
  "/slab-leak-repair-desoto-tx/": "/service-area/desoto-tx-slab-leak-repair/",
  "/foundation-leak-detection-desoto-tx/": "/service-area/desoto-tx-foundation-leak-repair/",
  "/underground-leak-detection-desoto-tx/": "/service-area/desoto-tx-slab-leak-repair/",
  "/water-line-leak-repair-desoto-tx/": "/service-area/desoto-tx-slab-leak-repair/",
  "/foundation-inspection-desoto-tx/": "/service-area/desoto-tx-foundation-inspection/",
  "/foundation-leveling-desoto-tx/": "/service-area/desoto-tx-foundation-leveling/",
  "/house-leveling-desoto-tx/": "/service-area/desoto-tx-foundation-leveling/",
  "/pier-and-beam-foundation-repair-desoto-tx/": "/service-area/desoto-tx-pier-and-beam-foundation-repair/",
  "/crawl-space-foundation-repair-desoto-tx/": "/service-area/desoto-tx-pier-and-beam-foundation-repair/",
  "/foundation-drainage-repair-desoto-tx/": "/service-area/desoto-tx-foundation-drainage-repair/",
  "/french-drain-foundation-desoto-tx/": "/service-area/desoto-tx-foundation-drainage-repair/",
  "/commercial-foundation-repair-desoto-tx/": "/service-area/desoto-tx-foundation-repair/",
  "/emergency-foundation-leak-repair-desoto-tx/": "/service-area/desoto-tx-foundation-leak-repair/",
};

/** The coverage page a service page should link to, with its anchor text. */
export function coverageForService(path: string): { path: string; label: string } | undefined {
  const target = serviceCoverage[path];
  if (!target || !isLivePath(target)) return undefined;
  return { path: target, label: coverageAnchors[target] ?? linkLabel(target) };
}

/** The city hub plus every city x service page, in topical-map order. */
export const cityServicePaths = locationPaths.filter((p) => {
  const kind = locationsByPath.get(p)?.kind;
  return (kind === "city" || kind === "city-service") && isLivePath(p);
});

/**
 * Coverage links for a location page: ZIP, neighborhood and directional pages (and the city hub) get the
 * whole city x service set; each city x service page gets 4 rotating siblings.
 */
export function coverageLinksFor(path: string): string[] {
  const others = cityServicePaths.filter((p) => p !== path);
  if (locationsByPath.get(path)?.kind !== "city-service") return others;
  const start = Math.max(0, cityServicePaths.indexOf(path));
  const rotated = [...cityServicePaths.slice(start + 1), ...cityServicePaths.slice(0, start)];
  return rotated.slice(0, 4);
}

/** Short label for a link card: menu item name or the content shortName. */
export function linkLabel(path: string): string {
  return (
    servicesByPath.get(path)?.shortName ??
    resourcesByPath.get(path)?.shortName ??
    calculatorsByPath.get(path)?.shortName ??
    locationsByPath.get(path)?.shortName ??
    pagesByPath.get(path)?.menuItemName ??
    path
  );
}

/** One-line description for a link card. */
export function linkSummary(path: string): string {
  return (
    servicesByPath.get(path)?.summary ??
    resourcesByPath.get(path)?.summary ??
    calculatorsByPath.get(path)?.summary ??
    locationsByPath.get(path)?.summary ??
    pagesByPath.get(path)?.metaDescription ??
    ""
  );
}

/** Every live page in the topical map (hidden pages excluded). */
export const livePages = pages.filter((p) => isLivePath(p.path));

/** Root-level slugs served by app/[slug] (services, resources, legal pages, live calculators). */
export const rootSlugPages = livePages.filter((p) => p.pageType !== "location" && !STATIC_PATHS.includes(p.path));

export const slugFromPath = (path: string) => path.split("/").filter(Boolean).pop() ?? "";
