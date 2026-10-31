import type { TitledText } from "@/types/content";
import type { SiteImage as SiteImageData } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

/** Intro copy beside "how to read your result" cards. */
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
          <div>
            <p className="eyebrow">How to read your result</p>
            {/* Explanations, not a sequence: an unnumbered list. */}
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="card-lift rounded-lg border-t-4 border-accent bg-surface p-5 ring-1 ring-border">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
