import Link from "next/link";
import { site } from "@/config/site";
import { defaultProcess } from "@/data/trust";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { images } from "@/data/images";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiteImage } from "@/components/ui/SiteImage";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { TeamSection } from "@/components/hubs/TeamSection";
import { CredentialBadges, OurStory, TeamPhotos, WhatWeDo } from "@/components/about/AboutSections";
import { AboutContact } from "@/components/about/AboutContact";
import type { PageRecord } from "@/types/content";

// Approach, not unverifiable claims. Confirmed history (site.foundedYear / site.aboutStory) is added above it.
const story = [
  "Foundation work around DeSoto is mostly about water: expansive clay that swells after a storm and shrinks in August, plumbing lines under slabs, and yards that drain toward the house instead of away from it.",
  "Working in one city means we know how DeSoto homes were built, from the 1970s brick ranches near Hampton Rd to the newer subdivisions, and we can get to you without a long drive.",
  "Our approach is simple: check for leaks and drainage problems first, measure the slab instead of guessing, write down what we found, and recommend the smallest repair that actually solves the problem.",
];

/** About page: who we are, what we do, story, trust, team, contact details and outside profiles. */
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
          <section id="who-we-are" aria-labelledby="who-we-are-h" className="space-y-5 text-lg leading-relaxed">
            <h2 id="who-we-are-h">Who we are</h2>
            <p>
              {site.name} handles foundation leak repair and foundation repair for homes and small buildings in {site.city},{" "}
              {site.state}, and nowhere else. Both of our ZIP codes, {site.zips.join(" and ")}, sit inside {site.county}.
            </p>
            <p>
              The work booked through this site is carried out by{" "}
              <a href={site.parentCompany.url} target="_blank" rel="noopener" className="font-semibold text-primary underline">
                {site.parentCompany.legalName}
              </a>
              , a local foundation repair company based at {site.address.street} in {site.address.city}. Inspections, written
              estimates and repairs all come from that one company.
            </p>
            <p>
              Questions before you book? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-primary underline">
                {site.phoneDisplay}
              </a>{" "}
              or see{" "}
              <a href="#contact-details" className="font-semibold text-primary underline">
                where to reach us
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <WhatWeDo />
      <OurStory paragraphs={story} />
      <WhyChooseUs title="Why homeowners trust us" extra={<CredentialBadges />} />
      <TeamSection />
      <TeamPhotos />
      <TestimonialSection />

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

      <AboutContact />

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
            . Every page is listed on the{" "}
            <Link href="/sitemap/" className="font-semibold text-primary underline">
              site map
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
