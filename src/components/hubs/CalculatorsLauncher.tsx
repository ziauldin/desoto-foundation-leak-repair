import Link from "next/link";
import { calculatorPaths, calculatorsByPath, linkLabel } from "@/data/pages";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CalcIcon } from "@/components/ui/Icons";
import type { Crumb } from "@/types/content";

const kindLabel = { cost: "Cost estimate", checklist: "Checklist", "crack-width": "Measurement", "drainage-slope": "Measurement" } as const;

/** App-launcher grid of tools. Used only by this hub. */
export function CalculatorsLauncher({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="bg-primary-dark text-white">
        <div className="hero-enter container-site py-10 text-center sm:py-14">
          <div className="flex justify-center">
            <Breadcrumbs crumbs={crumbs} tone="dark" />
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-white!">Foundation Repair Calculators and Checklists</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Estimate repair costs with typical North Texas pricing, size up a crack, check your yard&apos;s drainage, or walk your house with the checklist.
          </p>
        </div>
      </section>
      <section aria-label="Tools" className="container-site -mt-6 pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculatorPaths.map((p, i) => {
            const calc = calculatorsByPath.get(p);
            return (
              <li key={p} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <Link href={p} className="card-lift group flex h-full flex-col rounded-xl bg-surface p-6 ring-1 ring-border hover:ring-2 hover:ring-accent">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent-dark transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <CalcIcon />
                    </span>
                    {calc && <span className="rounded-full bg-background px-2.5 py-1 font-mono text-xs text-muted">{kindLabel[calc.tool.kind]}</span>}
                  </div>
                  <h2 className="mt-5 text-xl!">{linkLabel(p)}</h2>
                  <p className="mt-2 flex-1 text-muted">{calc?.summary}</p>
                  <span className="mt-5 rounded-md bg-primary py-2.5 text-center font-display font-semibold text-white group-hover:bg-primary-dark">Open tool</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-center text-muted">
          Want the numbers explained? Read the{" "}
          <Link href="/foundation-repair-cost-desoto-tx/" className="font-semibold text-primary underline">
            DeSoto foundation repair cost guide
          </Link>{" "}
          or{" "}
          <Link href="/contact/" className="font-semibold text-primary underline">
            request an inspection
          </Link>
          .
        </p>
      </section>
    </>
  );
}
