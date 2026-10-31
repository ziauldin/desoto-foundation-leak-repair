import type { ReactNode } from "react";
import { site } from "@/config/site";
import { calculatorForService } from "@/data/content/calculators";
import { defaultValues, estimateCost } from "@/lib/estimate";
import { CalcIcon, ClipboardIcon, ClockIcon, PhoneIcon } from "@/components/ui/Icons";

const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * Navy strip of quick facts directly under the service hero. The cost figure is the service's own
 * calculator at its default inputs, so it always matches what the embedded calculator shows first.
 */
export function QuickFacts({ path }: { path: string }) {
  const calculator = calculatorForService(path);
  const tool = calculator?.tool;
  const costFact =
    tool?.kind === "cost"
      ? (() => {
          const { low, high } = estimateCost(tool, defaultValues(tool.fields));
          return { label: "Typical cost", value: `${money(low)} – ${money(high)}` };
        })()
      : { label: "Free tool", value: calculator?.shortName.replace(/ Calculator$/, "") ?? "Cost calculators" };

  const facts: { icon: ReactNode; label: string; value: string; href?: string }[] = [
    { icon: <CalcIcon className="h-5 w-5" />, ...costFact, href: "#estimate" },
    { icon: <ClockIcon className="h-5 w-5" />, label: "Inspections", value: "Usually within 1–2 business days" },
    { icon: <ClipboardIcon className="h-5 w-5" />, label: "Before work starts", value: "Written findings and estimate" },
    { icon: <PhoneIcon className="h-5 w-5" />, label: "Leak emergencies", value: `24/7 · ${site.phoneDisplay}`, href: site.phoneHref },
  ];

  return (
    <div className="bg-primary text-white">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-4 py-5 lg:grid-cols-4">
        {facts.map((f, i) => {
          const body = (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary-dark">{f.icon}</span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-white/60">{f.label}</span>
                <span className="block font-display font-semibold leading-snug">{f.value}</span>
              </span>
            </>
          );
          return (
            <li key={f.label} data-reveal style={{ "--i": i } as React.CSSProperties}>
              {f.href ? (
                <a href={f.href} className="flex items-center gap-3 rounded-md transition-colors hover:text-accent">
                  {body}
                </a>
              ) : (
                <div className="flex items-center gap-3">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
