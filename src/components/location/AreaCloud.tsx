import Link from "next/link";
import { linkLabel } from "@/data/pages";
import { PinIcon } from "@/components/ui/Icons";

/** Other DeSoto areas as a chip cloud. */
export function AreaCloud({ areas }: { areas: string[] }) {
  return (
    <section aria-labelledby="areas-heading" className="py-14">
      <div className="container-site">
        <h2 id="areas-heading" className="text-2xl!">
          Other parts of DeSoto we cover
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {areas.map((p, i) => (
            <li key={p} data-reveal="scale" style={{ "--i": i } as React.CSSProperties}>
              <Link href={p} className="inline-flex items-center gap-1.5 rounded-md bg-surface px-3 py-2 text-sm text-primary-dark ring-1 ring-border transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-primary">
                <PinIcon className="h-4 w-4 text-accent-dark" /> {linkLabel(p)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/service-area/" className="inline-flex rounded-md px-3 py-2 text-sm font-semibold text-primary underline">
              Full service area
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
