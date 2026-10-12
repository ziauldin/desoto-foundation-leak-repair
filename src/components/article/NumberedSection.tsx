import type { ReactNode } from "react";
import { slugify } from "./utils";

export function NumberedSection({ index, heading, children }: { index: number; heading: string; children: ReactNode }) {
  const id = slugify(heading);
  return (
    <section data-reveal id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28">
      <p className="font-display text-sm font-bold tracking-widest text-accent-dark" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </p>
      <h2 id={`${id}-h`} className="mt-1">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
