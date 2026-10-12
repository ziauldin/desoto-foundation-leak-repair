import type { PageRecord, ServiceContent } from "@/types/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { InternalLinksSection } from "@/components/sections/InternalLinksSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaSection } from "@/components/sections/CtaSection";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { ContactForm } from "@/components/forms/ContactForm";

/** Core + sub service pages. Everything page-specific comes from the page record and its ServiceContent. */
export function ServicePageTemplate({ page, content }: { page: PageRecord; content: ServiceContent }) {
  const name = content.shortName;
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({ name: page.h1, description: page.metaDescription, path: page.path, serviceType: name }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <Hero
        h1={page.h1}
        eyebrow={page.pageType === "core" ? "DeSoto, TX" : `${page.parentSilo} · DeSoto, TX`}
        lead={<p>{content.summary}</p>}
        crumbs={page.breadcrumbs}
        ctaType={content.ctaType}
        urgent={content.urgent}
        points={content.signs.slice(0, 4).map((s) => s.title)}
        aside={<ContactForm compact title={`Request ${name.toLowerCase()} help`} />}
      />

      <ServiceDetailSection
        id="overview"
        eyebrow={name}
        title={`${name} for DeSoto homes`}
        paragraphs={content.intro}
        aside={<QuickLinks title="Next steps" paths={page.internalLinks} />}
      />

      <ServiceDetailSection
        id="signs"
        eyebrow="Warning signs"
        title={`Signs you may need ${name.toLowerCase()}`}
        items={content.signs}
        tone="surface"
      />

      <ServiceDetailSection id="why-it-matters" eyebrow="Why it matters" title="Why this matters on DeSoto clay soil" paragraphs={content.whyItMatters} />

      <ServiceDetailSection id="included" eyebrow="What's included" title="Repair methods and what's included" items={content.included} tone="alt" />

      <CtaSection type={content.ctaType} />
      <ProcessSection steps={content.process} title={`How ${name.toLowerCase()} works`} tone="surface" />
      <TrustSection />
      <InternalLinksSection services={page.relatedServices} supporting={page.relatedPages} />
      <TestimonialSection />
      <FaqAccordion faqs={content.faqs} title={`${name} questions`} />
      <CtaSection type={content.ctaType} />
    </>
  );
}
