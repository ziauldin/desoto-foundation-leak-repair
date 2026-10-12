import Link from "next/link";
import { linkLabel, linkSummary } from "@/data/pages";
import { ArrowIcon } from "@/components/ui/Icons";

/** Related services as a ruled link list + supporting tools as chips. */
export function ServiceRelated({ services, supporting }: { services: string[]; supporting: string[] }) {
  return (
    <section aria-labelledby="related-heading" className="bg-surface py-14 sm:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 id="related-heading">Related services in DeSoto</h2>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {services.map((p, i) => (
              <li key={p} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <Link href={p} className="group flex items-start justify-between gap-6 py-4 transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:pl-2">
                  <span>
                    <span className="block font-display text-lg font-semibold text-primary-dark group-hover:text-primary">{linkLabel(p)}</span>
                    <span className="mt-0.5 line-clamp-1 block text-sm text-muted">{linkSummary(p)}</span>
                  </span>
                  <ArrowIcon className="mt-1.5 h-5 w-5 shrink-0 text-accent-dark transition group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl!">Tools and guides</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {supporting.map((p) => (
              <li key={p}>
                <Link href={p} className="inline-block rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md">
                  {linkLabel(p)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
