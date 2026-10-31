"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { PhoneIcon } from "@/components/ui/Icons";
import { onScrollChange } from "@/lib/scroll";

/**
 * Fixed bottom bar on mobile/tablet: call + inspection request. Stays hidden on the first screen
 * (where the hero already shows both CTAs and its form would be covered), then slides up. Call button pulses.
 */
export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => onScrollChange(() => window.scrollY > window.innerHeight * 0.6, setVisible), []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="flex pulse-ring items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 font-display font-semibold text-white active:scale-[0.98]"
        >
          <PhoneIcon className="h-4 w-4" /> Call Now
        </a>
        <Link
          href="/contact/"
          data-contact-popup
          className="btn-shine flex items-center justify-center rounded-md bg-accent px-3 py-3 font-display font-semibold text-primary-dark active:scale-[0.98]"
        >
          Free Inspection
        </Link>
      </div>
    </div>
  );
}
