import type { PageRecord, ServiceContent } from "@/types/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import {
  MethodsTable,
  ProcessTimeline,
  ServiceCtaBand,
  ServiceEstimator,
  ServiceFaq,
  ServiceHero,
  ServiceOverview,
  ServiceRelated,
  ServiceReviews,
  QuickFacts,
  SignsChecklist,
  SoilExplainer,
} from "@/components/service";

/** Core + sub service pages ("spec sheet" layout). */
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
      <ServiceHero
        h1={page.h1}
        label={page.pageType === "core" ? "DeSoto, TX service" : `${page.parentSilo} · DeSoto, TX`}
        summary={content.summary}
        crumbs={page.breadcrumbs}
        ctaType={content.ctaType}
        urgent={content.urgent}
        formTitle={`Request ${name.toLowerCase()} help`}
      />
      <QuickFacts path={page.path} />
      <ServiceOverview
        title={`${name} for DeSoto homes`}
        paragraphs={content.intro}
        nextSteps={page.internalLinks}
        image={imageForPath(page.path)}
      />
      <SignsChecklist title={`Signs you may need ${name.toLowerCase()}`} signs={content.signs} />
      <SoilExplainer paragraphs={content.whyItMatters} />
      <MethodsTable items={content.included} />
      <ServiceEstimator path={page.path} name={name} />
      <ServiceCtaBand type={content.ctaType} />
      <ProcessTimeline title={`How ${name.toLowerCase()} works`} steps={content.process} />
      <ServiceRelated services={page.relatedServices} supporting={page.relatedPages} />
      <WhyChooseUs />
      <ServiceReviews />
      <ServiceFaq title={`${name} questions`} faqs={content.faqs} />
      <ServiceCtaBand type={content.ctaType} />
    </>
  );
}
