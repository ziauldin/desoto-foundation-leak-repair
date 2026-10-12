import Link from "next/link";
import type { Crumb } from "@/types/content";

export function Breadcrumbs({ crumbs, tone = "light" }: { crumbs: Crumb[]; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-white/70" : "text-muted";
  const current = tone === "dark" ? "text-white" : "text-text";
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={`font-semibold ${current}`}>
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className={`${muted} hover:underline`}>
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true" className={muted}>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
