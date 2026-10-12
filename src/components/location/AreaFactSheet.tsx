import { site } from "@/config/site";
import type { LocationContent } from "@/types/content";
import type { SiteImage as SiteImageData } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

/** Intro copy + definition-list fact sheet. */
export function AreaFactSheet({ content, image }: { content: LocationContent; image: SiteImageData }) {
  const facts: [string, string][] = [
    ["Area", content.areaName],
    ["City", `${site.city}, ${site.state} (${site.county})`],
    ["ZIP", content.kind === "zip" ? content.areaName : "75115"],
    ["Housing", content.housingNote],
    ["Reference points", content.landmarks.join(", ")],
  ];
  return (
    <section aria-labelledby="overview-heading" className="py-14 sm:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div data-reveal>
          <h2 id="overview-heading">Foundation and leak repair in {content.areaName}</h2>
          <div className="prose-site mt-5 space-y-4 text-lg">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="space-y-6 self-start">
          <figure data-reveal="scale" className="overflow-hidden rounded-xl bg-surface ring-1 ring-border">
            <SiteImage image={image} sizes="(min-width: 1024px) 40vw, 100vw" />
          </figure>
        <aside data-reveal="right" aria-label="Area facts" className="overflow-hidden rounded-lg border-2 border-primary-dark bg-surface shadow-[var(--shadow-lift)]">
          <p className="bg-primary-dark px-5 py-3 font-display text-lg font-semibold text-white">Area fact sheet</p>
          <dl className="divide-y divide-border">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 px-5 py-3 text-[0.95rem] transition-colors hover:bg-accent-soft/50">
                <dt className="font-semibold text-primary-dark">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
        </div>
      </div>
    </section>
  );
}
