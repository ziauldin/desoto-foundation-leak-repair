import Link from "next/link";
import { site } from "@/config/site";
import { linkLabel } from "@/data/pages";
import type { SiteImage as SiteImageData } from "@/data/images";
import { PhoneIcon } from "@/components/ui/Icons";
import { SiteImage } from "@/components/ui/SiteImage";

export function ServiceOverview({
  title,
  paragraphs,
  nextSteps,
  image,
}: {
  title: string;
  paragraphs: string[];
  nextSteps: string[];
  image: SiteImageData;
}) {
  return (
    <section aria-labelledby="overview-heading" className="py-14 sm:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem]">
        <div data-reveal>
          <h2 id="overview-heading">{title}</h2>
          <div className="prose-site mt-5 space-y-4 text-lg">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl text-text first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-accent-dark" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-5 self-start lg:sticky lg:top-28">
          <figure data-reveal="scale" className="overflow-hidden rounded-xl bg-surface ring-1 ring-border">
            <SiteImage image={image} sizes="(min-width: 1024px) 352px, 100vw" />
          </figure>
        {nextSteps.length > 0 && (
          <aside data-reveal="right" className="rounded-lg bg-primary-dark p-6 text-white shadow-[var(--shadow-lift)]">
            <p className="font-display text-lg font-semibold text-accent">Next steps</p>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((p, i) => (
                <li key={p}>
                  <Link href={p} className="group flex gap-3 text-white/90 hover:text-white">
                    <span className="font-display text-accent">{i + 1}.</span>
                    <span className="link-grow">{linkLabel(p)}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <a href={site.phoneHref} className="mt-6 flex items-center gap-2 border-t border-white/15 pt-4 font-display text-lg font-semibold text-accent">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </aside>
        )}
        </div>
      </div>
    </section>
  );
}
