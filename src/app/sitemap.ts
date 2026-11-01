import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { hiddenPaths, pages } from "@/data/pages";

const priority: Record<string, number> = { core: 1, sub: 0.9, location: 0.7, blog: 0.6, basic: 0.4 };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, priority: 1 },
    // Calculators and the two cost-guide pages are hidden (404), so they're excluded here too.
    ...pages
      .filter((p) => p.pageType !== "calculator" && !hiddenPaths.includes(p.path))
      .map((p) => ({
        url: absoluteUrl(p.path),
        lastModified,
        priority: p.path === "/foundation-leak-repair-desoto/" ? 1 : (priority[p.pageType] ?? 0.5),
      })),
  ];
}
