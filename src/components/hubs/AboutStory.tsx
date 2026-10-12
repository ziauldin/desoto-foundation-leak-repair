import Link from "next/link";
import { site } from "@/config/site";
import { defaultProcess, trustPoints } from "@/data/trust";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { images } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiteImage } from "@/components/ui/SiteImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import type { PageRecord } from "@/types/content";

const story = [
  `${site.name} exists for homeowners in DeSoto who want a straight answer about their foundation. Foundation work around here is mostly about water: expansive clay that swells after a storm and shrinks in August, plumbing lines under slabs, and yards that drain toward the house instead of away from it.`,
  "Working in one city means we know how DeSoto homes were built, from the 1970s brick ranches near Hampton Rd to the newer subdivisions, and we can get to you without a long drive across the metroplex.",
  "Our approach is simple: check for leaks and drainage problems first, measure the slab instead of guessing, write down what we found, and recommend the smallest repair that actually solves the problem.",
];

/** Long-form story layout with a pull quote and principles. Used only by this page. */
export function AboutStory({ page }: { page: PageRecord }) {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(page.breadcrumbs)]} />
      <div className="container-site py-10 sm:py-14">
        <Breadcrumbs crumbs={page.breadcrumbs} />
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h1>{page.h1}</h1>
            <blockquote className="mt-8 border-l-4 border-accent pl-5 font-display text-2xl font-semibold leading-snug text-primary">
              &ldquo;Find the water first. Measure before recommending. Put it in writing.&rdquo;
            </blockquote>
            <figure className="mt-8 overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
              <SiteImage image={images.brickHome} eager sizes="(min-width: 1024px) 40vw, 100vw" />
            </figure>
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <section aria-labelledby="principles-h" className="bg-surface py-14 sm:py-20">
        <div className="container-site">
          <h2 id="principles-h">What you can expect</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2">
            {trustPoints.map((t, i) => (
              <div key={t.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="rounded-lg border-l-4 border-accent bg-background p-5">
                <dt className="font-display text-xl font-semibold text-primary-dark">{t.title}</dt>
                <dd className="mt-1 text-muted">{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="visit-h" className="py-14 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <h2 id="visit-h">What a visit looks like</h2>
          <ol className="space-y-4 text-lg">
            {defaultProcess.map((s, i) => (
              <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <strong className="text-primary-dark">{s.title}.</strong> <span className="text-muted">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Next steps" className="border-t border-border bg-surface-alt py-12">
        <div className="container-site flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-xl text-lg text-text">
            Start with the{" "}
            <Link href="/foundation-leak-repair-desoto/" className="font-semibold text-primary underline">
              foundation leak repair
            </Link>{" "}
            or{" "}
            <Link href="/foundation-repair-desoto-tx/" className="font-semibold text-primary underline">
              foundation repair
            </Link>{" "}
            pages, or see the{" "}
            <Link href="/service-area/" className="font-semibold text-primary underline">
              DeSoto service area
            </Link>
            .
          </p>
          <ButtonLink href="/contact/" variant="primary">
            Request Foundation Inspection
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
