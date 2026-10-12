import type { PageRecord, ResourceContent } from "@/types/content";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { linkLabel } from "@/data/pages";
import { JsonLd } from "@/components/ui/JsonLd";
import { CheckIcon } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { InternalLinksSection } from "@/components/sections/InternalLinksSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { ArticleLayout, ArticleSection } from "./ArticleLayout";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const categoryLabel = { cost: "Cost & Pricing", problems: "Foundation Problems", comparisons: "Comparisons" } as const;

/** Problem, cost-guide and comparison articles. */
export function ProblemPageTemplate({ page, content }: { page: PageRecord; content: ResourceContent }) {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: page.h1, description: page.metaDescription, path: page.path }),
          breadcrumbSchema(page.breadcrumbs),
          faqSchema(content.faqs),
        ]}
      />
      <Hero
        h1={page.h1}
        eyebrow={`${categoryLabel[content.category]} · DeSoto, TX`}
        lead={<p>{content.summary}</p>}
        crumbs={page.breadcrumbs}
        ctaType={content.ctaType}
      />

      <ArticleLayout
        sidebar={
          <>
            <nav aria-label="On this page" className="hidden rounded-lg border border-border bg-surface p-5 lg:block">
              <p className="font-display text-lg font-semibold text-primary-dark">On this page</p>
              <ol className="mt-3 space-y-2 text-[0.95rem]">
                {content.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-primary hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#when-to-call" className="text-primary hover:underline">
                    When to call a professional
                  </a>
                </li>
              </ol>
            </nav>
            <CtaSection type={content.ctaType} variant="inline" />
            <QuickLinks title="Related service & tool" paths={[content.primaryService, content.primaryCalculator]} />
          </>
        }
      >
        <div className="prose-site space-y-4 text-lg">
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {content.sections.map((section) => (
          <ArticleSection key={section.heading} id={slugify(section.heading)} heading={section.heading}>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-accent-dark" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </ArticleSection>
        ))}

        {content.comparison && (
          <section aria-labelledby="comparison-heading">
            <h2 id="comparison-heading">Side-by-side comparison</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[34rem] border-collapse bg-surface text-left">
                <thead className="bg-primary text-white">
                  <tr>
                    {content.comparison.columns.map((c) => (
                      <th key={c} scope="col" className="px-4 py-3 font-display font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.comparison.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-border even:bg-background">
                      <th scope="row" className="px-4 py-3 font-semibold text-primary-dark">
                        {row[0]}
                      </th>
                      <td className="px-4 py-3">{row[1]}</td>
                      <td className="px-4 py-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <ArticleSection id="when-to-call" heading="When to call a professional">
          <ul className="space-y-2">
            {content.whenToCall.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckIcon className="mt-1.5 h-4 w-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={content.primaryService} variant="primary">
              See {linkLabel(content.primaryService)}
            </ButtonLink>
            <ButtonLink href={content.primaryCalculator} variant="outline">
              Try the {linkLabel(content.primaryCalculator)}
            </ButtonLink>
          </div>
        </ArticleSection>
      </ArticleLayout>

      <InternalLinksSection
        services={page.relatedServices}
        supporting={page.relatedPages}
        servicesTitle="DeSoto services for this problem"
        supportingTitle="Keep reading"
      />
      <FaqAccordion faqs={content.faqs} />
      <CtaSection type={content.ctaType} />
    </>
  );
}
