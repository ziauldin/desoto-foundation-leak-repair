import Link from "next/link";
import { linkLabel } from "@/data/pages";
import { ArrowIcon } from "@/components/ui/Icons";

/** Compact sidebar list of the topical map's internal-link suggestions for this page. */
export function QuickLinks({ title = "Related on this site", paths }: { title?: string; paths: string[] }) {
  if (!paths.length) return null;
  return (
    <nav aria-label={title} className="rounded-lg border border-border bg-surface p-5">
      <p className="font-display text-lg font-semibold text-primary-dark">{title}</p>
      <ul className="mt-3 space-y-2">
        {paths.map((p) => (
          <li key={p}>
            <Link href={p} className="group flex items-center justify-between gap-3 text-primary hover:underline">
              {linkLabel(p)}
              <ArrowIcon className="h-4 w-4 shrink-0 text-accent-dark transition group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
