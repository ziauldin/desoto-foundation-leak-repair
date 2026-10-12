import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType, Crumb } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export function ServiceHero({
  h1,
  label,
  summary,
  crumbs,
  ctaType,
  urgent,
  formTitle,
}: {
  h1: string;
  label: string;
  summary: string;
  crumbs: Crumb[];
  ctaType: CtaType;
  urgent?: boolean;
  formTitle: string;
}) {
  const cta = ctaCopy[ctaType];
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="container-site relative grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div className="hero-enter border-l-4 border-accent pl-5 sm:pl-8">
          <Breadcrumbs crumbs={crumbs} />
          <p className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-2.5 py-1 font-display text-sm font-semibold uppercase tracking-wider text-white">
            {label}
          </p>
          <h1 className="mt-4">{h1}</h1>
          <p className="mt-4 max-w-2xl text-xl text-muted">{summary}</p>
          {urgent && (
            <p className="mt-5 max-w-2xl rounded-md bg-accent-soft px-4 py-3 text-[0.95rem] text-text">
              <strong>Water on the floor right now?</strong> Shut off the main valve at the meter, then call{" "}
              <a href={site.phoneHref} className="font-semibold text-primary underline">
                {site.phoneDisplay}
              </a>
              .
            </p>
          )}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ctaHref(ctaType, site.phoneHref)} variant="primary">
              {cta.label}
            </ButtonLink>
            <ButtonLink href={cta.secondaryHref} variant="outline">
              {cta.secondary}
            </ButtonLink>
          </div>
        </div>
        <div className="animate-fade-up rounded-xl bg-surface-alt p-2 shadow-[var(--shadow-lift)] [animation-delay:250ms] sm:p-3">
          <ContactForm compact title={formTitle} />
        </div>
      </div>
    </section>
  );
}
