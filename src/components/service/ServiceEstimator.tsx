import Link from "next/link";
import { calculatorForService } from "@/data/content/calculators";
import { CalculatorTool } from "@/components/calculators/CalculatorTool";
import { ArrowIcon } from "@/components/ui/Icons";

const heading = {
  cost: (name: string) => `Estimate your ${name.toLowerCase()} cost`,
  checklist: () => "Check your warning signs",
  "crack-width": () => "Check how serious a crack is",
  "drainage-slope": () => "Check your yard's drainage slope",
} as const;

/** The service's matching calculator, embedded in the page (mapping: serviceCalculator in calculators.ts). */
export function ServiceEstimator({ path, name }: { path: string; name: string }) {
  const calculator = calculatorForService(path);
  if (!calculator) return null;
  return (
    <section id="estimate" aria-labelledby="estimate-heading" className="bg-surface-alt py-14 sm:py-20">
      <div className="container-site">
        <div data-reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">Free tool</p>
            <h2 id="estimate-heading">{heading[calculator.tool.kind](name)}</h2>
            <p className="mt-3 text-lg text-muted">{calculator.summary}</p>
          </div>
          <Link href={calculator.path} className="inline-flex shrink-0 items-center gap-1 font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">
            How this calculator works <ArrowIcon />
          </Link>
        </div>
        <CalculatorTool calculator={calculator} nested />
      </div>
    </section>
  );
}
