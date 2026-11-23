import Link from "next/link";
import { coverageAnchors, linkLabel } from "@/data/pages";
import { ArrowIcon } from "@/components/ui/Icons";

/** Links to the DeSoto city x service coverage pages (coverageLinksFor in data/pages.ts). */
export function CoverageLinks({ heading, paths }: { heading: string; paths: string[] }) {
  if (!paths.length) return null;
  return (
    <section aria-labelledby="coverage-heading" className="border-t border-border bg-surface py-14">
      <div className="container-site">
        <h2 id="coverage-heading" className="text-2xl!">
          {heading}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p, i) => (
            <li key={p} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={p}
                className="group flex h-full items-center justify-between gap-3 rounded-lg bg-background px-4 py-3 font-semibold text-primary ring-1 ring-border transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-primary"
              >
                <span>{coverageAnchors[p] ?? linkLabel(p)}</span>
                <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
