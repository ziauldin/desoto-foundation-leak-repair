import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "primary" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  accent: "btn-shine bg-accent text-primary-dark shadow-[0_6px_18px_-6px_rgb(217_146_46/0.7)] hover:bg-accent-dark hover:text-white",
  primary: "btn-shine bg-primary text-white shadow-[0_6px_18px_-8px_rgb(19_38_54/0.6)] hover:bg-primary-dark",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white hover:text-primary-dark",
};

export const buttonClass = (variant: Variant = "accent", extra = "") =>
  `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-display text-base font-semibold tracking-wide transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${extra}`;

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
