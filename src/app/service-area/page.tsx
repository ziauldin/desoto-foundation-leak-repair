import { getPageOrThrow, locationsByPath, locationPaths } from "@/data/pages";
import { footerServices } from "@/data/navigation";
import { generalFaqs } from "@/data/faqs";
import { metadataForPage } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { HouseIcon, PinIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";

const page = getPageOrThrow("/service-area/");
// The map's title/description mention "nearby cities"; overridden to keep the site DeSoto-only.
export const metadata = metadataForPage(page, {
  title: "DeSoto TX Foundation Repair Service Area | Neighborhoods & ZIP Codes",
  description: "Foundation leak and foundation repair across DeSoto TX: every neighborhood, both ZIP codes, and each part of the city. DeSoto only, no outside cities.",
});

const groups = [
  { id: "desoto", title: "DeSoto, TX services", kinds: ["city", "city-service"] },
  { id: "zip", title: "ZIP codes", kinds: ["zip"] },
  { id: "neighborhoods", title: "Neighborhoods", kinds: ["neighborhood"] },
  { id: "sub-areas", title: "Parts of DeSoto", kinds: ["direction"] },
] as const;

export default function ServiceAreaHub() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs), faqSchema(generalFaqs.slice(0, 3))]} />
      <Hero
        h1={page.h1}
        eyebrow="Service area"
        lead={
          <p>
            We cover DeSoto and only DeSoto. Find your neighborhood or part of town below to see the local conditions that affect
            foundations there and the services we provide.
          </p>
        }
        crumbs={page.breadcrumbs}
      />
      {groups.map((group, i) => {
        const items = locationPaths.filter((p) => (group.kinds as readonly string[]).includes(locationsByPath.get(p)?.kind ?? ""));
        if (!items.length) return null;
        return (
          <Section key={group.id} id={group.id} title={group.title} tone={i % 2 ? "surface" : "default"}>
            <LinkCardGrid items={items} icon={<PinIcon />} columns={items.length > 6 ? 4 : 3} />
          </Section>
        );
      })}
      <Section id="services" eyebrow="Services" title="Foundation services available across DeSoto" tone="alt">
        <LinkCardGrid items={footerServices.map((l) => l.href)} icon={<HouseIcon />} />
      </Section>
      <FaqAccordion faqs={generalFaqs.slice(0, 3)} />
      <CtaSection type="inspection" />
    </>
  );
}
