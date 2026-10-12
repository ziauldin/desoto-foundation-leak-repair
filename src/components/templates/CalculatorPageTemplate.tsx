import type { CalculatorContent, PageRecord } from "@/types/content";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  CalculatorTool,
  MatchingService,
  ToolCtaBar,
  ToolFaq,
  ToolGuide,
  ToolHeader,
  ToolSwitcher,
} from "@/components/calculators";

/** Calculator / checklist pages (app layout: the tool comes first). */
export function CalculatorPageTemplate({ page, content }: { page: PageRecord; content: CalculatorContent }) {
  const otherServices = page.relatedServices.filter((p) => p !== content.primaryService).slice(0, 4);
  const guides = page.relatedPages.filter((p) => !p.endsWith("-calculator/") && !p.endsWith("-checklist/"));
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({ name: content.shortName, description: page.metaDescription, path: page.path }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <ToolHeader h1={page.h1} crumbs={page.breadcrumbs} summary={content.summary} />
      <section aria-label={content.shortName} className="py-8 sm:py-10">
        <div className="container-site">
          <CalculatorTool calculator={content} />
        </div>
      </section>
      <ToolGuide intro={content.intro} steps={content.howItWorks} image={imageForPath(page.path)} />
      <MatchingService path={content.primaryService} others={otherServices} />
      <ToolSwitcher current={page.path} guides={guides} />
      <ToolFaq faqs={content.faqs} />
      <ToolCtaBar />
    </>
  );
}
