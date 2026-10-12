import { calculatorPaths } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { BookIcon, CalcIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CtaSection } from "@/components/sections/CtaSection";

// Hub for the "Calculators" breadcrumb level. Not a topical map row, so its SEO fields live here.
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Calculators", path: "/calculators/" },
];

export const metadata = buildMetadata({
  title: "Foundation Repair Calculators for DeSoto TX | Cost, Crack & Drainage Tools",
  description: "Free foundation repair, leak repair, crack and slab leak cost calculators plus a crack width tool, drainage slope calculator and inspection checklist.",
  path: "/calculators/",
});

export default function CalculatorsHub() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <Hero
        h1="Foundation Repair Calculators and Checklists"
        eyebrow="Free tools · DeSoto, TX"
        lead={<p>Estimate repair costs with typical North Texas pricing, size up a crack, check your yard&apos;s drainage, or walk your house with the inspection checklist.</p>}
        crumbs={crumbs}
        ctaType="cost-check"
      />
      <Section id="tools" eyebrow="Calculators" title="Pick a tool">
        <LinkCardGrid items={calculatorPaths} icon={<CalcIcon />} />
      </Section>
      <Section id="guides" eyebrow="Guides" title="Pair a tool with a guide" tone="surface">
        <LinkCardGrid
          items={["/foundation-repair-cost-desoto-tx/", "/foundation-leak-repair-cost-desoto-tx/", "/signs-of-foundation-leak/"]}
          icon={<BookIcon />}
        />
      </Section>
      <CtaSection type="cost-check" />
    </>
  );
}
