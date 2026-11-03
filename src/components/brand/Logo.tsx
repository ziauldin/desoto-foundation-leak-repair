import Link from "next/link";

// "D" monogram geometry (100×100), shared with app/icon.svg. The amber swoosh sits in a transparent gap,
// so the mark works on any background. Masks only hold geometry, so repeated ids render identically.
const OUTER = "M10 8h40a42 42 0 0 1 0 84H10Z";
const COUNTER = "M10 23 46 30a22 22 0 0 1 4 44H31V30H10Z";
const SWOOSH = "M2 98C30 74 60 62 99 44";

/** D monogram with an amber water swoosh. `tile` puts it in a rounded navy square (favicon style). */
export function LogoMark({ className = "h-10 w-10", tile = false, tone = "navy" }: { className?: string; tile?: boolean; tone?: "navy" | "white" }) {
  const d = tile || tone === "white" ? "fill-background" : "fill-primary";
  return (
    <svg viewBox={tile ? "-14 -14 128 128" : "0 0 100 100"} className={className} aria-hidden="true">
      <defs>
        <mask id="dm-body" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <path d={OUTER} fill="#fff" />
          <path d={COUNTER} fill="#000" />
          <path d={SWOOSH} fill="none" stroke="#000" strokeWidth="21" />
        </mask>
        <mask id="dm-outer" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <path d={OUTER} fill="#fff" />
        </mask>
      </defs>
      {tile && <rect x="-14" y="-14" width="128" height="128" rx="28" className="fill-primary" />}
      <rect width="100" height="100" mask="url(#dm-body)" className={d} />
      <path d={SWOOSH} mask="url(#dm-outer)" fill="none" strokeWidth="11" className="stroke-accent" />
    </svg>
  );
}

/** Mark, amber divider and two-line wordmark. "light" sits on light backgrounds (header), "dark" on the navy footer. */
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="DeSoto Foundation Leak Repair, home">
      <LogoMark tone={dark ? "white" : "navy"} className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
      <span aria-hidden="true" className="h-9 w-0.5 rounded-full bg-accent" />
      <span className="font-display leading-none">
        <span className={`block text-[1.5rem] font-bold tracking-tight ${dark ? "text-white" : "text-primary-dark"}`}>DeSoto</span>
        <span className={`mt-0.5 block whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/80" : "text-primary-dark"}`}>
          Foundation Leak Repair
        </span>
      </span>
    </Link>
  );
}
