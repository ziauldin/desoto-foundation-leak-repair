import Link from "next/link";
import { calculatorPaths, linkLabel } from "@/data/pages";

/** Tab-style switcher across every calculator, current one highlighted. */
export function ToolSwitcher({ current, guides }: { current: string; guides: string[] }) {
  return (
    <section aria-labelledby="tools-heading" className="py-14">
      <div className="container-site">
        <h2 id="tools-heading" className="text-2xl!">
          Other free tools
        </h2>
        <ul className="mt-5 flex gap-2 overflow-x-auto pb-2" role="list">
          {calculatorPaths.map((p) => (
            <li key={p} className="shrink-0">
              {p === current ? (
                <span aria-current="page" className="block rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white">
                  {linkLabel(p)}
                </span>
              ) : (
                <Link href={p} className="block rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-primary-dark transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-md">
                  {linkLabel(p)}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {guides.length > 0 && (
          <p className="mt-6 text-muted">
            Related reading:{" "}
            {guides.map((p, i) => (
              <span key={p}>
                <Link href={p} className="font-semibold text-primary underline">
                  {linkLabel(p)}
                </Link>
                {i < guides.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
