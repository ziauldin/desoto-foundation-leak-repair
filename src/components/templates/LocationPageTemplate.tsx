import type { LocationContent, PageRecord } from "@/types/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { locationPaths } from "@/data/pages";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { PinIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { InternalLinksSection } from "@/components/sections/InternalLinksSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { ContactForm } from "@/components/forms/ContactForm";

const kindEyebrow: Record<LocationContent["kind"], string> = {
  city: "DeSoto, TX service area",
  "city-service": "DeSoto, TX service area",
  zip: "ZIP code service area",
  neighborhood: "DeSoto neighborhood",
  direction: "DeSoto sub-area",
};

/** DeSoto-only location pages: city, city × service, ZIP, neighborhood and directional sub-areas. */
export function LocationPageTemplate({ page, content }: { page: PageRecord; content: LocationContent }) {
  // Sibling DeSoto areas (never other cities): the city hub plus a rotating window of
  // ZIP/neighborhood/directional pages, so link equity spreads across the whole cluster.
  const cityHub = "/service-area/desoto-tx-foundation-repair/";
  const areas = locationPaths.filter((p) => !p.includes("/desoto-tx-"));
  const start = Math.max(0, areas.indexOf(page.path)) + 1;
  const rotated = [...areas.slice(start), ...areas.slice(0, start)].filter((p) => p !== page.path);
  const siblings = [...(page.path === cityHub ? [] : [cityHub]), ...rotated].slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({
            name: page.h1,
            description: page.metaDescription,
            path: page.path,
            serviceType: page.primaryKeyword,
          }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <Hero
        h1={page.h1}
        eyebrow={kindEyebrow[content.kind]}
        lead={<p>{content.summary}</p>}
        crumbs={page.breadcrumbs}
        points={content.localFactors.slice(0, 4).map((f) => f.title)}
        aside={<ContactForm compact title={`Request an inspection in ${content.areaName}`} />}
      />

      <ServiceDetailSection
        id="overview"
        eyebrow={content.areaName}
        title={`Foundation and leak repair in ${content.areaName}`}
        paragraphs={content.intro}
        aside={
          <div className="space-y-5">
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="font-display text-lg font-semibold text-primary-dark">Local reference points</p>
              <ul className="mt-3 space-y-2">
                {content.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-muted">
                    <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" /> {l}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-border pt-4 text-sm text-muted">{content.housingNote}</p>
            </div>
            <QuickLinks title="Next steps" paths={page.internalLinks} />
          </div>
        }
      />

      <ServiceDetailSection
        id="local-factors"
        eyebrow="Local conditions"
        title={`What affects foundations in ${content.areaName}`}
        items={content.localFactors}
        tone="surface"
      />

      <Section id="services-here" eyebrow="Services" title={`Services we provide in ${content.areaName}`} tone="alt">
        <LinkCardGrid items={content.serviceFocus} />
      </Section>

      <CtaSection type="inspection" />
      <ProcessSection tone="surface" />
      <TrustSection />
      <InternalLinksSection
        services={page.relatedServices.filter((p) => !content.serviceFocus.includes(p)).slice(0, 3)}
        supporting={page.relatedPages}
        servicesTitle="More DeSoto foundation services"
      />
      <Section id="nearby-areas" eyebrow="Service area" title="Other DeSoto areas we cover">
        <LinkCardGrid items={siblings} icon={<PinIcon />} />
      </Section>
      <FaqAccordion faqs={content.faqs} title={`${content.areaName} foundation questions`} />
      <CtaSection type="inspection" />
    </>
  );
}
