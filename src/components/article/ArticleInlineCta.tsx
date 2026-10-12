import Link from "next/link";
import { site } from "@/config/site";
import { ctaCopy, ctaHref } from "@/data/ctas";
import type { CtaType } from "@/types/content";
import { PhoneIcon } from "@/components/ui/Icons";

/** Quiet mid-article CTA: a ruled text block, not a banner. */
export function ArticleInlineCta({ type }: { type: CtaType }) {
  const cta = ctaCopy[type];
  return (
    <aside data-reveal className="border-y-2 border-primary-dark py-6">
      <p className="font-display text-xl font-bold text-primary-dark">{cta.heading}</p>
      <p className="mt-1 text-muted">{cta.text}</p>
      <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
        <Link href={ctaHref(type, site.phoneHref)} className="text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-dark">
          {cta.label} →
        </Link>
        <a href={site.phoneHref} className="inline-flex items-center gap-1.5 text-accent-dark">
          <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
        </a>
      </p>
    </aside>
  );
}
