import Link from "next/link";
import { calculatorPaths, linkLabel, linkSummary, resourcePaths, resourcesByPath } from "@/data/pages";
import { breadcrumbSchema } from "@/lib/schema";
import type { ResourceCategory } from "@/types/content";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiteImage } from "@/components/ui/SiteImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { PageRecord } from "@/types/content";

const categories: { id: ResourceCategory; title: string }[] = [
  { id: "problems", title: "Foundation problems" },
  { id: "cost", title: "Cost and pricing" },
  { id: "comparisons", title: "Comparisons" },
];

const FEATURED = "/signs-of-foundation-leak/";

/** Magazine index: featured story, category columns and a tools rail. Used only by this hub. */
export function ResourcesMagazine({ page }: { page: PageRecord }) {
  const rest = resourcePaths.filter((p) => p !== FEATURED);
  return (
    <>
      <JsonLd data={[breadcrumbSchema(page.breadcrumbs)]} />
      <header className="container-site pt-10 sm:pt-14">
        <Breadcrumbs crumbs={page.breadcrumbs} />
        <div className="mt-6 flex flex-col justify-between gap-4 border-b-2 border-primary-dark pb-6 md:flex-row md:items-end">
          <h1 className="text-[clamp(2.4rem,1.6rem+3vw,4rem)]!">{page.h1}</h1>
          <p className="max-w-sm text-muted">Plain-English guides to foundation leaks, cracks, drainage and repair costs on North Texas clay.</p>
        </div>
      </header>

      <section aria-label="Featured guide" className="container-site py-10">
        <Link href={FEATURED} data-reveal="scale" className="card-lift group grid overflow-hidden rounded-2xl bg-primary-dark text-white md:grid-cols-[1.2fr_1fr]">
          <div className="p-8 sm:p-10">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">Start here</p>
            <h2 className="mt-3 text-white! group-hover:underline">{linkLabel(FEATURED)}</h2>
            <p className="mt-4 text-lg text-white/80">{linkSummary(FEATURED)}</p>
            <p className="mt-6 font-display font-semibold text-accent">Read the guide →</p>
          </div>
          <div className="bg-surface-alt">
            <SiteImage image={imageForPath(FEATURED)} sizes="(min-width: 768px) 45vw, 100vw" className="h-full object-cover" />
          </div>
        </Link>
      </section>

      <div className="container-site grid gap-12 pb-16 lg:grid-cols-[1fr_18rem]">
        <div className="grid gap-10 md:grid-cols-3">
          {categories.map((cat) => (
            <section key={cat.id} data-reveal id={cat.id} aria-labelledby={`${cat.id}-h`} className="scroll-mt-28">
              <h2 id={`${cat.id}-h`} className="border-t-4 border-accent pt-3 text-xl!">
                {cat.title}
              </h2>
              <ul className="mt-4 space-y-5">
                {rest
                  .filter((p) => resourcesByPath.get(p)?.category === cat.id)
                  .map((p) => (
                    <li key={p}>
                      <Link href={p} className="font-display text-lg font-semibold leading-snug text-primary-dark hover:text-primary hover:underline">
                        {linkLabel(p)}
                      </Link>
                      <p className="mt-1 line-clamp-3 text-sm text-muted">{linkSummary(p)}</p>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
        <aside aria-labelledby="tools-h" className="self-start rounded-lg bg-surface-alt p-6">
          <h2 id="tools-h" className="text-xl!">
            Free tools
          </h2>
          <ul className="mt-4 space-y-2.5">
            {calculatorPaths.map((p) => (
              <li key={p}>
                <Link href={p} className="text-primary hover:underline">
                  {linkLabel(p)}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact/" className="mt-6 block rounded-md bg-primary px-4 py-3 text-center font-display font-semibold text-white hover:bg-primary-dark">
            Request an inspection
          </Link>
        </aside>
      </div>
    </>
  );
}
