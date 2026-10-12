import Link from "next/link";
import { linkLabel, linkSummary } from "@/data/pages";

/** Numbered text list of related reading: services first, then guides/tools. */
export function ContinueReading({ services, supporting }: { services: string[]; supporting: string[] }) {
  const groups = [
    { title: "Services for this problem", items: services.slice(0, 4) },
    { title: "Keep reading", items: supporting },
  ];
  return (
    <section aria-label="Related reading" className="border-t border-border bg-surface py-14">
      <div className="container-site grid gap-12 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-2xl!">{g.title}</h2>
            <ol className="mt-5 space-y-5">
              {g.items.map((p, i) => (
                <li key={p} data-reveal style={{ "--i": i } as React.CSSProperties} className="group flex gap-4">
                  <span className="font-display text-2xl font-bold text-border transition-colors duration-300 group-hover:text-accent" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <Link href={p} className="font-display text-lg font-semibold text-primary hover:underline">
                      {linkLabel(p)}
                    </Link>
                    <p className="mt-0.5 line-clamp-2 text-sm text-muted">{linkSummary(p)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
