import Link from "next/link";

/** House roofline over a cracked slab, with a water drop: "find the water, then fix the foundation". Mirrors app/icon.svg. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" className="fill-primary" />
      <path d="M7.5 19.5 20 9.5l12.5 10" className="fill-none stroke-white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 17v7M28.5 17v7" className="stroke-white/70" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 14.5s3.6 3.8 3.6 6.4a3.6 3.6 0 0 1-7.2 0c0-2.6 3.6-6.4 3.6-6.4Z" className="fill-accent" />
      <rect x="5.5" y="26" width="29" height="5" rx="1.2" className="fill-white" />
      <path d="m21.2 26-2.1 2.3 2.4.7-1.7 2" className="fill-none stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Mark + two-line wordmark. "light" sits on light backgrounds (header), "dark" on the navy footer. */
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="DeSoto Foundation Leak Repair, home">
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="font-display leading-none">
        <span className={`block text-[1.4rem] font-bold tracking-tight ${variant === "dark" ? "text-white" : "text-primary-dark"}`}>
          DeSoto
        </span>
        <span className={`mt-0.5 block whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${variant === "dark" ? "text-accent" : "text-accent-dark"}`}>
          Foundation Leak Repair
        </span>
      </span>
    </Link>
  );
}
