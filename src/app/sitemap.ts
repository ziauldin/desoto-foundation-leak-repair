import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { livePages, STATIC_PATHS, isLivePath } from "@/data/pages";

const priority: Record<string, number> = { core: 1, sub: 0.9, location: 0.7, blog: 0.6, calculator: 0.6, basic: 0.4 };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Live map rows plus the hub routes that have no map row. Hidden pages (isHidden) never appear.
  const mapPaths = new Set(livePages.map((p) => p.path));
  const hubs = STATIC_PATHS.filter((p) => isLivePath(p) && !mapPaths.has(p));
  return [
    ...hubs.map((path) => ({ url: absoluteUrl(path), lastModified, priority: path === "/" ? 1 : 0.5 })),
    ...livePages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified,
      priority: p.path === "/foundation-leak-repair-desoto/" ? 1 : (priority[p.pageType] ?? 0.5),
    })),
  ];
}
