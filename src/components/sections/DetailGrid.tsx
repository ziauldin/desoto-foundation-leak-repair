import type { TitledText } from "@/types/content";

/** Grid of titled points (signs, repair methods, local factors). */
export function DetailGrid({ items, columns = 3 }: { items: TitledText[]; columns?: 2 | 3 }) {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-5 ${cols}`}>
      {items.map((item) => (
        <li key={item.title} className="rounded-lg border border-border bg-surface p-5">
          <h3>{item.title}</h3>
          <p className="mt-2 text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
