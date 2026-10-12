import type { ContentSection, PageRecord } from "@/types/content";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

/** Plain text pages (privacy, terms). Deliberately simple: no sales sections. */
export function BasicPageTemplate({
  page,
  intro,
  updated,
  sections,
}: {
  page: PageRecord;
  intro: string;
  updated: string;
  sections: ContentSection[];
}) {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(page.breadcrumbs)]} />
      <div className="border-b border-border bg-surface">
        <div className="container-site py-10 sm:py-14">
          <Breadcrumbs crumbs={page.breadcrumbs} />
          <h1 className="mt-4">{page.h1}</h1>
          <p className="mt-2 text-muted">Last updated {updated}</p>
        </div>
      </div>
      <div className="container-site py-12">
        <div className="prose-site space-y-8 text-lg">
          <p>{intro}</p>
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl!">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
