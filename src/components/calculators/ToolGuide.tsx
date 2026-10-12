import type { TitledText } from "@/types/content";
import type { SiteImage as SiteImageData } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";
import { ArrowIcon } from "@/components/ui/Icons";

/** Intro copy beside a horizontal "how to read it" stepper. */
export function ToolGuide({ intro, steps, image }: { intro: string[]; steps: TitledText[]; image: SiteImageData }) {
  return (
    <section aria-labelledby="guide-heading" className="py-14 sm:py-16">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="guide-heading">About this tool</h2>
            <div className="mt-4 space-y-3 text-muted">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <figure data-reveal="scale" className="mt-6 overflow-hidden rounded-xl bg-surface ring-1 ring-border">
              <SiteImage image={image} sizes="(min-width: 1024px) 30vw, 100vw" />
            </figure>
          </div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="card-lift relative rounded-lg bg-surface p-5 ring-1 ring-border">
                <span className="font-mono text-xs font-bold text-accent-dark">STEP {i + 1}</span>
                <h3 className="mt-1 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowIcon className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-background text-accent-dark sm:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
