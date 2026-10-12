import Link from "next/link";
import { site } from "@/config/site";
import { linkLabel, locationPaths, locationsByPath } from "@/data/pages";
import { footerServices } from "@/data/navigation";
import { generalFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { imageForPath } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiteImage } from "@/components/ui/SiteImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneIcon } from "@/components/ui/Icons";
import type { PageRecord } from "@/types/content";

const groups = [
  { id: "neighborhoods", title: "Neighborhoods", kinds: ["neighborhood"] },
  { id: "sub-areas", title: "Parts of town", kinds: ["direction"] },
  { id: "zip", title: "ZIP codes", kinds: ["zip"] },
  { id: "desoto", title: "DeSoto service pages", kinds: ["city", "city-service"] },
] as const;

const faqs = generalFaqs.slice(0, 3);

/** Directory layout: alphabetical index with a sticky jump list. Used only by this hub. */
export function ServiceAreaDirectory({ page }: { page: PageRecord }) {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs), faqSchema(faqs)]} />
      <header className="border-b-4 border-primary bg-surface">
        <div className="container-site py-10 sm:py-14">
          <Breadcrumbs crumbs={page.breadcrumbs} />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h1>{page.h1}</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                DeSoto, Texas and nowhere else. Find your neighborhood or part of town for local conditions and the services we provide there.
              </p>
            </div>
            <div>
              <figure className="overflow-hidden rounded-2xl bg-background ring-1 ring-border">
                <SiteImage image={imageForPath("/service-area/")} eager sizes="(min-width: 1024px) 40vw, 100vw" />
              </figure>
            <div className="mt-5 flex gap-6 font-display text-primary-dark">
              <p>
                <span className="block text-4xl font-bold">{locationPaths.length}</span>
                <span className="text-sm uppercase tracking-wider text-muted">area pages</span>
              </p>
              <p>
                <span className="block text-4xl font-bold">1</span>
                <span className="text-sm uppercase tracking-wider text-muted">city served</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-site grid gap-10 py-12 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Jump to" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="block rounded-md px-3 py-2 font-display font-semibold text-primary-dark hover:bg-surface-alt">
                  {g.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="block rounded-md px-3 py-2 font-display font-semibold text-primary-dark hover:bg-surface-alt">
                Services
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-14">
          {groups.map((group) => {
            const items = locationPaths
              .filter((p) => (group.kinds as readonly string[]).includes(locationsByPath.get(p)?.kind ?? ""))
              .sort((a, b) => linkLabel(a).localeCompare(linkLabel(b)));
            return (
              <section key={group.id} data-reveal id={group.id} aria-labelledby={`${group.id}-h`} className="scroll-mt-28">
                <h2 id={`${group.id}-h`} className="border-b border-border pb-3">
                  {group.title} <span className="font-normal text-muted">({items.length})</span>
                </h2>
                <ul className="mt-2 columns-1 gap-10 sm:columns-2">
                  {items.map((p) => (
                    <li key={p} className="break-inside-avoid border-b border-dashed border-border py-3">
                      <Link href={p} className="group block">
                        <span className="font-semibold text-primary group-hover:underline">{linkLabel(p)}</span>
                        <span className="mt-0.5 line-clamp-1 block text-sm text-muted">{locationsByPath.get(p)?.housingNote}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <section id="services" aria-labelledby="services-h" className="scroll-mt-28">
            <h2 id="services-h" className="border-b border-border pb-3">
              Services available everywhere in DeSoto
            </h2>
            <p className="mt-4 leading-loose">
              {footerServices.map((l, i) => (
                <span key={l.href}>
                  <Link href={l.href} className="font-semibold text-primary hover:underline">
                    {l.label}
                  </Link>
                  {i < footerServices.length - 1 && <span className="mx-2 text-border">/</span>}
                </span>
              ))}
            </p>
          </section>

          <section id="faq" aria-labelledby="faq-h" className="rounded-lg bg-surface-alt p-6 sm:p-8">
            <h2 id="faq-h" className="text-2xl!">
              Service area questions
            </h2>
            {faqs.map((f) => (
              <div key={f.question} className="mt-5">
                <h3 className="text-lg">{f.question}</h3>
                <p className="mt-1 text-muted">{f.answer}</p>
              </div>
            ))}
            <a href={site.phoneHref} className="mt-6 inline-flex items-center gap-2 font-display text-lg font-semibold text-primary">
              <PhoneIcon className="h-5 w-5" /> Not sure if you&apos;re covered? Call {site.phoneDisplay}
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
