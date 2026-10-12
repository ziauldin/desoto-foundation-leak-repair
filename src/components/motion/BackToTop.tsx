"use client";

import { useEffect, useState } from "react";
import { onScrollChange } from "@/lib/scroll";

/** Floating "back to top" button that appears after scrolling down. Sits above the mobile CTA bar. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => onScrollChange(() => window.scrollY > 900, setVisible), []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-4 z-30 grid h-11 w-11 place-items-center rounded-full bg-primary-dark text-white shadow-lg transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-1 hover:bg-primary lg:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="m6 15 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
