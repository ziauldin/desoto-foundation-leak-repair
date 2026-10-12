import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

/** Full-width CTA band ("block") or compact card for use inside content ("inline"). */
export function CtaSection({ type = "inspection", variant = "block" }: { type?: CtaType; variant?: "block" | "inline" }) {
  const cta = ctaCopy[type];
  if (variant === "inline") {
    return (
      <aside className="rounded-lg border-l-4 border-accent bg-accent-soft p-5 sm:p-6">
        <p className="font-display text-xl font-bold text-primary-dark">{cta.heading}</p>
        <p className="mt-2 text-text">{cta.text}</p>
        <div className="mt-4 flex flex-col gap-2">
          <ButtonLink href={ctaHref(type, site.phoneHref)} variant="primary">
            {cta.label}
          </ButtonLink>
          <ButtonLink href={cta.secondaryHref} variant="outline">
            {cta.secondary}
          </ButtonLink>
        </div>
      </aside>
    );
  }
  return (
    <section aria-label="Request service" className="bg-primary py-14 text-white sm:py-16">
      <div data-reveal className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-white!">{cta.heading}</h2>
          <p className="mt-3 text-lg text-white/85">{cta.text}</p>
          <p className="mt-2 text-sm text-white/70">{site.responseNote}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink href={ctaHref(type, site.phoneHref)}>{cta.label}</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="outline-light">
            <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
