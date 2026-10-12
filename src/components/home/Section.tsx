import type { ReactNode } from "react";

type Tone = "default" | "surface" | "alt" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-background",
  surface: "bg-surface",
  alt: "bg-surface-alt",
  dark: "bg-primary-dark text-white [&_h2]:text-white [&_h3]:text-white",
};

/** Vertical rhythm + optional eyebrow/heading/intro. Every page section goes through this. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  const headingId = id && title ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-14 sm:py-20 ${tones[tone]} ${className}`}>
      <div className="container-site">
        {(eyebrow || title || intro) && (
          <header data-reveal className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
            {title && <h2 id={headingId}>{title}</h2>}
            {intro && (
              <div className={`mt-3 text-lg ${tone === "dark" ? "text-white/80" : "text-muted"}`}>{intro}</div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
