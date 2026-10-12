import Link from "next/link";
import { site } from "@/config/site";
import { PhoneIcon } from "@/components/ui/Icons";

/** Fixed bottom bar on mobile/tablet: call + inspection request. Slides up on load; call button pulses. */
export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 animate-slide-up border-t border-border bg-surface p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] [animation-delay:600ms] lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="flex pulse-ring items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 font-display font-semibold text-white active:scale-[0.98]"
        >
          <PhoneIcon className="h-4 w-4" /> Call Now
        </a>
        <Link
          href="/contact/"
          className="btn-shine flex items-center justify-center rounded-md bg-accent px-3 py-3 font-display font-semibold text-primary-dark active:scale-[0.98]"
        >
          Free Inspection
        </Link>
      </div>
    </div>
  );
}
