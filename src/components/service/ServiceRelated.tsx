import Link from "next/link";
import { calculatorPaths, linkLabel, linkSummary } from "@/data/pages";
import { ArrowIcon, BookIcon, CalcIcon, WrenchIcon } from "@/components/ui/Icons";

/** Related services as a card grid, with tools and guides in a dark band underneath. */
export function ServiceRelated({ services, supporting }: { services: string[]; supporting: string[] }) {
  return (
    <section aria-labelledby="related-heading" className="bg-surface py-14 sm:py-20">
      <div className="container-site">
        <p className="eyebrow mb-2">Keep exploring</p>
        <h2 id="related-heading">Related services in DeSoto</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((p, i) => (
            <li key={p} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <Link
                href={p}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-primary-dark">
                  <WrenchIcon className="h-5 w-5" />
                </span>
                <span className="mt-4 font-display text-lg font-semibold text-primary-dark">{linkLabel(p)}</span>
                <span className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted">{linkSummary(p)}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-danger">
                  View service <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {supporting.length > 0 && (
          <div data-reveal className="mt-12 rounded-2xl bg-primary-dark p-6 text-white sm:p-8">
            <h3 className="text-2xl text-white">Tools and guides</h3>
            <p className="mt-1 text-white/70">Estimate costs and check the signs before you call.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supporting.map((p) => {
                const Icon = calculatorPaths.includes(p) ? CalcIcon : BookIcon;
                return (
                  <li key={p}>
                    <Link
                      href={p}
                      className="group flex h-full items-center gap-3 rounded-xl bg-white/10 p-4 font-semibold ring-1 ring-white/15 transition-colors duration-300 hover:bg-accent hover:text-primary-dark"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-accent transition-colors group-hover:text-primary-dark" />
                      <span className="flex-1">{linkLabel(p)}</span>
                      <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
