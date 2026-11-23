import type { ResourceContent } from "@/types/content";

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Id of a NumberedSection. The table of contents uses the same function, so its links always match. */
export const sectionId = (heading: string) => slugify(heading);

/** Fixed ids of the non-numbered article sections (WhenToCall, ComparisonTable, ArticleFaq). */
export const ARTICLE_IDS = { whenToCall: "when-to-call", comparison: "comparison", faq: "faq" } as const;

export const categoryLabel = { cost: "Cost & Pricing", problems: "Foundation Problems", comparisons: "Comparison" } as const;

/** Rough reading time from all article text. */
export function readingMinutes(content: ResourceContent) {
  const words = [
    ...content.intro,
    ...content.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]),
    ...content.faqs.map((f) => f.answer),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}
