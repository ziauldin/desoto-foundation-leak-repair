import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { linkLabel, linkSummary } from "@/data/pages";
import { imageForPath } from "@/data/images";
import { servicePopupAttrs } from "@/lib/lead";
import { Section } from "@/components/home/Section";
import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowIcon } from "@/components/ui/Icons";

/**
 * Featured service + compact list. Clicking a service opens the popup form for it
 * (the popup links on to the service page for people who are still researching).
 */
export function ServiceShowcase({
  id,
  eyebrow,
  title,
  intro,
  services,
  icon,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  services: string[];
  icon: ReactNode;
}) {
  const [featured, ...rest] = services;
  const featuredLabel = linkLabel(featured);
  return (
    <Section id={id} eyebrow={eyebrow} title={title} intro={intro} tone="surface">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <Link
          href={featured}
          {...servicePopupAttrs(featured, featuredLabel)}
          data-reveal="left"
          className="group relative flex flex-col overflow-hidden rounded-2xl bg-primary-dark text-white shadow-[var(--shadow-lift)]"
        >
          <div className="bg-surface-alt p-4 sm:p-6">
            <SiteImage image={imageForPath(featured)} sizes="(min-width: 1024px) 40vw, 100vw" className="mx-auto max-h-72 w-auto! transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <p className="eyebrow text-accent!">Most requested</p>
            <h3 className="mt-2 text-2xl text-white! sm:text-3xl">{featuredLabel}</h3>
            <p className="mt-3 flex-1 text-white/80">{linkSummary(featured)}</p>
            <span className="mt-6 inline-flex items-center gap-2 self-start rounded-md bg-accent px-5 py-3 font-display font-semibold text-primary-dark transition-colors group-hover:bg-white">
              Get help with this <ArrowIcon />
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-4">
          <ul className="grid gap-4">
            {rest.map((path, i) => {
              const label = linkLabel(path);
              return (
                <li key={path} data-reveal="right" style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={path}
                    {...servicePopupAttrs(path, label)}
                    className="group flex h-full items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[var(--shadow-lift)]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-soft text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-primary-dark">
                      {icon}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg">{label}</h3>
                        <ArrowIcon className="h-5 w-5 shrink-0 text-accent-dark transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                      <p className="mt-1 line-clamp-2 text-[0.95rem] text-muted">{linkSummary(path)}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div data-reveal="right" className="hidden flex-1 flex-col justify-center rounded-xl border-2 border-dashed lg:flex border-accent/50 bg-accent-soft/50 p-5">
            <p className="font-display text-lg font-semibold text-primary-dark">Not sure which one you need?</p>
            <p className="mt-1 text-muted">
              Most jobs start with leak detection. Call{" "}
              <a href={site.phoneHref} className="font-semibold text-primary underline">
                {site.phoneDisplay}
              </a>{" "}
              and describe what you&apos;re seeing.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
