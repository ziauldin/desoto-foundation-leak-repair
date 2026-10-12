import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

/** Ochre band CTA (service pages only). */
export function ServiceCtaBand({ type }: { type: CtaType }) {
  const cta = ctaCopy[type];
  return (
    <section aria-label="Request service" className="bg-accent py-10">
      <div data-reveal="scale" className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl font-bold text-primary-dark sm:text-3xl">{cta.heading}</p>
          <p className="mt-1 text-primary-dark/80">{cta.text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink href={ctaHref(type, site.phoneHref)} variant="primary">
            {cta.label}
          </ButtonLink>
          <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 px-2 font-display text-lg font-bold text-primary-dark">
            <span className="grid h-9 w-9 pulse-ring place-items-center rounded-full bg-primary-dark text-accent"><PhoneIcon className="h-4 w-4" /></span> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
