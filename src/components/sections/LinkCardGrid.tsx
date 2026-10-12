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
      {items.map((item) => {
        const card = typeof item === "string" ? { href: item } : item;
        const title = card.title ?? linkLabel(card.href);
        const text = card.text ?? linkSummary(card.href);
        return (
          <li key={card.href}>
            <Link
              href={card.href}
              className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              {icon && <span className="mb-3 text-primary">{icon}</span>}
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
