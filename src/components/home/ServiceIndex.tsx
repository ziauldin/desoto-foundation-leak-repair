import Link from "next/link";
import { linkLabel, linkSummary } from "@/data/pages";
import { servicePopupAttrs } from "@/lib/lead";
import { Section } from "@/components/home/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";

/** Numbered two-column service index on navy. Clicking a service opens the popup form for it. */
export function ServiceIndex({ id, eyebrow, title, services }: { id: string; eyebrow: string; title: string; services: string[] }) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} tone="dark" className="[&_.eyebrow]:text-accent!">
      <ol className="grid border-t border-white/15 md:grid-cols-2 md:gap-x-12">
        {services.map((path, i) => {
          const label = linkLabel(path);
          return (
            <li key={path} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-b border-white/15">
              <Link
                href={path}
                {...servicePopupAttrs(path, label)}
                className="group grid grid-cols-[3rem_1fr_auto] items-start gap-3 py-5 transition-colors"
              >
                <span className="font-display text-2xl font-bold text-accent/70 transition-colors group-hover:text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg text-white! transition-colors group-hover:text-accent!">{label}</h3>
                  <p className="mt-1 line-clamp-1 text-[0.95rem] text-white/70 sm:line-clamp-2">{linkSummary(path)}</p>
                </div>
                <span className="mt-1 grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white transition-[translate,background-color,border-color,color] duration-300 group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-primary-dark">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="mt-8">
        <ButtonLink href="/foundation-repair-desoto-tx/" variant="outline-light">
          All foundation repair services
        </ButtonLink>
      </div>
    </Section>
  );
}
