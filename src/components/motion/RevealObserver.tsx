"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Turns on scroll-reveal animations site-wide. Adds .motion-ready to <html> (so content is
 * visible without JS), then marks [data-reveal] elements .is-in as they enter the viewport.
 * Re-scans on client-side navigation. Does nothing when the user prefers reduced motion.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px 10% 0px", threshold: 0 },
    );

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    targets.forEach((el) => {
      // Anything already on screen shows immediately, so there's no flash on load.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("is-in");
      else observer.observe(el);
    });
    root.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
