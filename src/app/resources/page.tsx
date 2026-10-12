import { calculatorPaths, getPageOrThrow, resourcePaths, resourcesByPath } from "@/data/pages";
import { metadataForPage } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import type { ResourceCategory } from "@/types/content";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { BookIcon, CalcIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CtaSection } from "@/components/sections/CtaSection";

const page = getPageOrThrow("/resources/");
export const metadata = metadataForPage(page);

const categories: { id: ResourceCategory; title: string; intro: string }[] = [
  { id: "problems", title: "Foundation problems", intro: "Symptoms, what causes them, and when they're worth an inspection." },
  { id: "cost", title: "Cost and pricing", intro: "Typical DeSoto price ranges and what moves a bid up or down." },
  { id: "comparisons", title: "Comparisons", intro: "Side-by-side guides for decisions homeowners get stuck on." },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(page.breadcrumbs)]} />
      <Hero
        h1={page.h1}
        eyebrow="Resources"
        lead={<p>Plain-English guides to foundation leaks, cracks, drainage and repair costs on North Texas clay soil.</p>}
        crumbs={page.breadcrumbs}
        ctaType="cost-check"
      />
      {categories.map((cat, i) => (
        <Section key={cat.id} id={cat.id} eyebrow="Guides" title={cat.title} intro={cat.intro} tone={i % 2 ? "surface" : "default"}>
          <LinkCardGrid items={resourcePaths.filter((p) => resourcesByPath.get(p)?.category === cat.id)} icon={<BookIcon />} />
        </Section>
      ))}
      <Section id="calculators" eyebrow="Free tools" title="Calculators and checklists" tone="alt">
        <LinkCardGrid items={calculatorPaths} icon={<CalcIcon />} columns={4} />
      </Section>
      <CtaSection type="inspection" />
    </>
  );
}
