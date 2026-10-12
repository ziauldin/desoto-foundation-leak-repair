import type { PageRecord, ResourceContent } from "@/types/content";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import {
  ArticleClosingCta,
  ArticleFaq,
  ArticleHeader,
  ArticleInlineCta,
  ComparisonTable,
  ContinueReading,
  DashList,
  NumberedSection,
  QuickAnswer,
  TocPills,
  WhenToCall,
} from "@/components/article";

/** Problem, cost-guide and comparison articles (editorial layout). */
export function ProblemPageTemplate({ page, content }: { page: PageRecord; content: ResourceContent }) {
  const [lead, ...restIntro] = content.intro;
  const midpoint = Math.ceil(content.sections.length / 2);
  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: page.h1, description: page.metaDescription, path: page.path }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <ScrollProgress />
      <ArticleHeader h1={page.h1} crumbs={page.breadcrumbs} content={content} image={imageForPath(page.path)} />

      <article className="py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-[44rem] space-y-12">
            <QuickAnswer text={lead} />
            {restIntro.length > 0 && (
              <div className="space-y-4 text-lg leading-relaxed">
                {restIntro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            <TocPills headings={[...content.sections.map((s) => s.heading), "When to call a professional"]} />

            {content.sections.map((section, i) => (
              <div key={section.heading} className="space-y-12">
                <NumberedSection index={i + 1} heading={section.heading}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {section.bullets && <DashList items={section.bullets} />}
                </NumberedSection>
                {i + 1 === midpoint && <ArticleInlineCta type={content.ctaType} />}
              </div>
            ))}

            {content.comparison && <ComparisonTable comparison={content.comparison} />}
            <WhenToCall items={content.whenToCall} service={content.primaryService} calculator={content.primaryCalculator} />
            <ArticleFaq faqs={content.faqs} />
          </div>
        </div>
      </article>

      <ContinueReading services={page.relatedServices} supporting={page.relatedPages} />
      <ArticleClosingCta type={content.ctaType} />
    </>
  );
}
