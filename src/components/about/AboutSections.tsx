import Link from "next/link";
import { site } from "@/config/site";
import { insurance, licenses, memberships, warranty, type Credential } from "@/data/trust";
import { jobSitePhotos } from "@/data/images";
import { linkLabel, linkSummary } from "@/data/pages";
import { Section } from "@/components/home/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { CheckIcon } from "@/components/ui/Icons";

/** Core services listed under "What we do" on the About page. */
const coreServices = [
  "/foundation-leak-repair-desoto/",
  "/slab-leak-repair-desoto-tx/",
  "/foundation-leak-detection-desoto-tx/",
  "/foundation-repair-desoto-tx/",
  "/foundation-crack-repair-desoto-tx/",
  "/foundation-inspection-desoto-tx/",
  "/foundation-leveling-desoto-tx/",
  "/foundation-drainage-repair-desoto-tx/",
  "/pier-and-beam-foundation-repair-desoto-tx/",
  "/crawl-space-foundation-repair-desoto-tx/",
  "/commercial-foundation-repair-desoto-tx/",
  "/foundation-repair-company-desoto-tx/",
];

export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What we do"
      title="Foundation leak and foundation repair, DeSoto only"
      intro="Every service starts with the same inspection: leaks and drainage first, then elevation readings across the slab."
      tone="surface"
    >
      <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((p) => (
          <li key={p}>
            <Link href={p} className="font-display text-lg font-semibold text-primary hover:underline">
              {linkLabel(p)}
            </Link>
            <p className="mt-1 line-clamp-2 text-sm text-muted">{linkSummary(p)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** "Our story": approach paragraphs plus the confirmed history fields from site.ts (if set). */
export function OurStory({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Section id="our-story" eyebrow="Our story" title="Why a DeSoto-only foundation service">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed">
        {site.foundedYear && (
          <p className="font-semibold text-primary-dark">
            {site.parentCompany.legalName} has been repairing foundations since {site.foundedYear}.
          </p>
        )}
        {[...site.aboutStory, ...paragraphs].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

const credentialGroups: { title: string; items: Credential[] }[] = [
  { title: "Licenses", items: licenses },
  { title: "Insurance", items: insurance },
  { title: "Warranty", items: warranty },
  { title: "Memberships", items: memberships },
];

/** Documented licenses, insurance, warranty and memberships. Renders nothing until trust.ts has entries. */
export function CredentialBadges() {
  const groups = credentialGroups.filter((g) => g.items.length);
  if (!groups.length) return null;
  return (
    <div data-reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-lg">{g.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {g.items.map((c) => {
              const body = (
                <>
                  <CheckIcon className="h-3.5 w-3.5" /> {c.label}
                  {c.detail && <span className="font-normal text-muted"> · {c.detail}</span>}
                </>
              );
              const chip = "inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-primary-dark";
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener" className={`${chip} underline`}>
                      {body}
                    </a>
                  ) : (
                    <span className={chip}>{body}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** Real job-site photos. Hidden while jobSitePhotos in data/images.ts is empty. */
export function TeamPhotos() {
  if (!jobSitePhotos.length) return null;
  return (
    <Section id="team-at-work" eyebrow="On the job" title="Our team at work">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobSitePhotos.map((img) => (
          <li key={img.src}>
            <figure className="overflow-hidden rounded-xl bg-surface ring-1 ring-border">
              <SiteImage image={img} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
              <figcaption className="px-4 py-3 text-sm text-muted">{img.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
