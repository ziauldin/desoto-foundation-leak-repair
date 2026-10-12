import Link from "next/link";
import type { ReactNode } from "react";
import { linkLabel, linkSummary } from "@/data/pages";
import { ArrowIcon } from "@/components/ui/Icons";

export interface LinkCard {
  href: string;
  title?: string;
  text?: string;
}

/**
 * Card grid for services, problems, calculators and locations.
 * Pass paths and the titles/summaries are looked up from page data.
 */
export function LinkCardGrid({
  items,
  icon,
  columns = 3,
}: {
  items: (string | LinkCard)[];
  icon?: ReactNode;
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <ul className={`grid gap-4 ${cols}`}>
      {items.map((item, i) => {
        const card = typeof item === "string" ? { href: item } : item;
        const title = card.title ?? linkLabel(card.href);
        const text = card.text ?? linkSummary(card.href);
        return (
          <li key={card.href} data-reveal style={{ "--i": i } as React.CSSProperties}>
            <Link
              href={card.href}
              className="card-lift group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface p-5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 hover:border-primary/40 hover:after:scale-x-100"
            >
              {icon && (
                <span className="mb-3 grid h-11 w-11 place-items-center rounded-lg bg-accent-soft text-primary transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-white">
                  {icon}
                </span>
              )}
              <h3 className="text-lg group-hover:text-primary">{title}</h3>
              {text && <p className="mt-2 line-clamp-3 flex-1 text-[0.95rem] text-muted">{text}</p>}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                Learn more <ArrowIcon />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
