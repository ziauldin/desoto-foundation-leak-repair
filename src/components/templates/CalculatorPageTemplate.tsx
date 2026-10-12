import type { CalculatorContent, PageRecord } from "@/types/content";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { DetailGrid } from "@/components/sections/DetailGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { InternalLinksSection } from "@/components/sections/InternalLinksSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CalculatorTool } from "@/components/calculators/CalculatorTool";

/** Calculator / checklist pages: hero, interactive tool, how it works, links back to the matching service. */
export function CalculatorPageTemplate({ page, content }: { page: PageRecord; content: CalculatorContent }) {
  const services = [content.primaryService, ...page.relatedServices.filter((p) => p !== content.primaryService)].slice(0, 6);
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({ name: content.shortName, description: page.metaDescription, path: page.path }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <Hero
        h1={page.h1}
        eyebrow="Free tool · DeSoto, TX"
        lead={
          <>
            {content.intro.map((p, i) => (
              <p key={i} className={i ? "mt-3" : ""}>
                {p}
              </p>
            ))}
          </>
        }
        crumbs={page.breadcrumbs}
        ctaType={content.ctaType}
      />

      <section aria-label={content.shortName} className="bg-background py-10 sm:py-14">
        <div className="container-site">
          <CalculatorTool calculator={content} />
        </div>
      </section>

      <Section id="how-it-works" eyebrow="How it works" title="How to read your result" tone="surface">
        <DetailGrid items={content.howItWorks} />
      </Section>

      <CtaSection type={content.ctaType} />
      <InternalLinksSection
        services={services}
        supporting={page.relatedPages}
        servicesTitle="Services this tool is built for"
        supportingTitle="More guides and calculators"
      />
      <FaqAccordion faqs={content.faqs} />
      <CtaSection type="inspection" />
    </>
  );
}
