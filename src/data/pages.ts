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
export const STATIC_PATHS = ["/", "/calculators/", "/resources/", "/service-area/", "/about/", "/contact/"];

const rowsByPath = new Map(topicalMap.map((row) => [row.path, row]));

const pathsOfType = (...types: PageType[]) =>
  topicalMap.filter((row) => types.includes(row.pageType)).map((row) => row.path);

export const servicePaths = pathsOfType("core", "sub");
export const calculatorPaths = pathsOfType("calculator");
export const resourcePaths = pathsOfType("blog");
export const locationPaths = pathsOfType("location");

const isService = (p: string) => servicePaths.includes(p);
const isSupporting = (p: string) => calculatorPaths.includes(p) || resourcePaths.includes(p);

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

/** De-duplicates, drops self-links and drops anything that isn't a real page. */
const unique = (paths: string[], exclude: string) =>
  [...new Set(paths)].filter(
    (p) => p !== exclude && (rowsByPath.has(p) || STATIC_PATHS.includes(p)),
  );

/** Fallback related guides/tools per silo, so every page has 2-4 supporting links. */
const siloSupport: Record<string, string[]> = {
  "Leak Repair": [
    "/foundation-leak-repair-cost-calculator/",
    "/signs-of-foundation-leak/",
    "/slab-leak-vs-foundation-leak/",
    "/slab-leak-repair-cost-calculator/",
  ],
  "Foundation Problems": [
    "/foundation-drainage-slope-calculator/",
    "/water-pooling-near-foundation/",
    "/foundation-cracks-after-rain/",
  ],
  Calculators: ["/foundation-repair-cost-desoto-tx/", "/foundation-inspection-checklist/", "/signs-of-foundation-leak/"],
  "Cost & Pricing": ["/foundation-repair-cost-calculator/", "/foundation-leak-repair-cost-calculator/", "/foundation-repair-vs-replacement/"],
  "Problems & Use Cases": ["/foundation-inspection-checklist/", "/foundation-crack-width-calculator/", "/signs-of-foundation-leak/"],
  Comparisons: ["/foundation-repair-cost-calculator/", "/foundation-inspection-checklist/", "/foundation-repair-cost-desoto-tx/"],
  default: [
    "/foundation-repair-cost-calculator/",
    "/foundation-repair-cost-desoto-tx/",
    "/foundation-inspection-checklist/",
    "/signs-of-foundation-leak/",
  ],
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
  default: [
    "/foundation-leak-repair-desoto/",
    "/foundation-repair-desoto-tx/",
    "/foundation-crack-repair-desoto-tx/",
    "/slab-leak-repair-desoto-tx/",
    "/foundation-inspection-desoto-tx/",
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
    if (path && path !== row.path && !crumbs.some((c) => c.path === path)) crumbs.push({ name: label, path });
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

/** Root-level slugs served by app/[slug] (services, calculators, resources, legal pages). */
export const rootSlugPages = pages.filter(
  (p) => p.pageType !== "location" && !STATIC_PATHS.includes(p.path),
);

export const slugFromPath = (path: string) => path.split("/").filter(Boolean).pop() ?? "";
