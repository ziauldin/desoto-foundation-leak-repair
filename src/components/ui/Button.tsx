import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "primary" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-primary-dark hover:bg-accent-dark hover:text-white",
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white hover:text-primary-dark",
};

export const buttonClass = (variant: Variant = "accent", extra = "") =>
  `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-base font-semibold tracking-wide transition-colors ${variants[variant]} ${extra}`;

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  // tel: and mailto: links must be plain anchors.
  if (!href.startsWith("/")) {
    return (
      <a href={href} className={buttonClass(variant, className)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}
