import Link from "next/link";
import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType } from "@/types/content";
import { PhoneIcon } from "@/components/ui/Icons";

/** Centered closing CTA box. */
export function ArticleClosingCta({ type }: { type: CtaType }) {
  const cta = ctaCopy[type];
  return (
    <section aria-label="Get help" className="py-14">
      <div className="container-site">
        <div data-reveal="scale" className="mx-auto max-w-2xl rounded-2xl bg-primary-dark px-6 py-10 text-center text-white shadow-[var(--shadow-lift)]">
          <p className="font-display text-2xl font-bold sm:text-3xl">Still not sure what you&apos;re looking at?</p>
          <p className="mt-3 text-white/80">An inspection in DeSoto answers it with measurements, not guesses.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={ctaHref(type, site.phoneHref)} className="btn-shine rounded-md bg-accent px-5 py-3 font-display font-semibold text-primary-dark transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:text-white">
              {cta.label}
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 px-3 py-3 font-display font-semibold text-accent">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
