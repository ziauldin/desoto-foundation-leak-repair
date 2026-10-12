import Link from "next/link";
import { linkLabel } from "@/data/pages";

/** Services available here, as large chips. */
export function ServiceChips({ areaName, focus, more }: { areaName: string; focus: string[]; more: string[] }) {
  return (
    <section aria-labelledby="services-heading" className="py-14 sm:py-20">
      <div className="container-site">
        <h2 id="services-heading">Services in {areaName}</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {focus.map((p, i) => (
            <li key={p} data-reveal="scale" style={{ "--i": i } as React.CSSProperties}>
              <Link href={p} className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-display font-semibold text-white shadow-md transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg">
                {linkLabel(p)} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
          {more.map((p) => (
            <li key={p}>
              <Link href={p} className="inline-flex items-center rounded-full border border-primary/40 px-5 py-3 font-display font-semibold text-primary transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-1 hover:bg-surface">
                {linkLabel(p)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
