import type { ReactNode } from "react";
import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType, Crumb } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";

/** Page hero with H1, intro, primary + phone CTAs and optional quick points. Used by every template. */
export function Hero({
  h1,
  eyebrow,
  lead,
  crumbs,
  ctaType = "inspection",
  points,
  urgent,
  aside,
}: {
  h1: string;
  eyebrow?: string;
  lead: ReactNode;
  crumbs?: Crumb[];
  ctaType?: CtaType;
  points?: string[];
  urgent?: boolean;
  aside?: ReactNode;
}) {
  const cta = ctaCopy[ctaType];
  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      {/* Subtle survey-grid texture, a nod to elevation surveys. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className={`container-site relative grid gap-10 py-10 sm:py-14 lg:py-16 ${aside ? "lg:grid-cols-[1.4fr_1fr] lg:items-center" : ""}`}
      >
        <div className="hero-enter">
          {crumbs && <Breadcrumbs crumbs={crumbs} tone="dark" />}
          {urgent && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" /> Active leak? Urgent calls are
              prioritized
            </p>
          )}
          {eyebrow && <p className="eyebrow mt-5 text-accent!">{eyebrow}</p>}
          <h1 className="mt-3 max-w-4xl text-white!">{h1}</h1>
          <div className="mt-4 max-w-2xl text-lg text-white/85">{lead}</div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctaHref(ctaType, site.phoneHref)}>{cta.label}</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline-light">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </ButtonLink>
          </div>
          {points && points.length > 0 && (
            <ul className="mt-7 grid max-w-2xl gap-2 text-white/85 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" /> {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        {aside && <div className="animate-fade-up [animation-delay:300ms]">{aside}</div>}
      </div>
    </section>
  );
}
