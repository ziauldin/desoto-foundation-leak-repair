import Link from "next/link";
import { linkLabel, linkSummary } from "@/data/pages";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon, CalcIcon } from "@/components/ui/Icons";

/** Split band: pitch on the left, compact tool launcher rows on the right. */
export function ToolsBand({ tools }: { tools: string[] }) {
  return (
    <section id="calculators" aria-labelledby="calculators-heading" className="bg-accent-soft py-14 sm:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div data-reveal="left">
          <p className="eyebrow mb-2">Free tools</p>
          <h2 id="calculators-heading">Estimate the cost before anyone visits</h2>
          <p className="mt-3 text-lg text-text/80">
            Typical North Texas price ranges and quick checks for how urgent your signs are. No sign-up, no phone number needed.
          </p>
          <div className="mt-6">
            <ButtonLink href="/calculators/" variant="primary">
              See all calculators
            </ButtonLink>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {tools.map((path, i) => (
            <li key={path} data-reveal="right" style={{ "--i": i } as React.CSSProperties}>
              <Link href={path} className="group flex h-full flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-card)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-accent">
                    <CalcIcon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-lg font-semibold leading-tight text-primary-dark">{linkLabel(path).replace(/ Calculator$/, "")}</span>
                </span>
                <span className="mt-3 flex-1 text-[0.95rem] text-muted">{linkSummary(path)}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                  Open calculator <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
