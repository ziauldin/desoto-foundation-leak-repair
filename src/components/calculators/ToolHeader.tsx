import type { Crumb } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CalcIcon } from "@/components/ui/Icons";

export function ToolHeader({ h1, crumbs, summary }: { h1: string; crumbs: Crumb[]; summary: string }) {
  return (
    <header className="border-b border-border bg-surface-alt">
      <div className="container-site flex flex-col gap-4 py-6 md:flex-row md:items-end md:justify-between">
        <div className="hero-enter">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-3 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 animate-pop place-items-center rounded-lg bg-primary text-white">
              <CalcIcon />
            </span>
            <h1 className="text-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)]!">{h1}</h1>
          </div>
          <p className="mt-2 max-w-2xl text-muted">{summary}</p>
        </div>
        <p className="shrink-0 text-sm text-muted">
          Free tool · No sign-up · <span className="font-semibold text-success">Built for DeSoto homes</span>
        </p>
      </div>
    </header>
  );
}
