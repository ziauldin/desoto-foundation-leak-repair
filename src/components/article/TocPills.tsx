export interface TocItem {
  label: string;
  /** Id of the element the pill jumps to. Must match an id rendered on the page. */
  id: string;
}

export function TocPills({ items }: { items: TocItem[] }) {
  return (
    <nav data-reveal aria-label="In this guide">
      <p className="text-sm font-semibold uppercase tracking-wider text-muted">In this guide</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="inline-block rounded-full bg-surface-alt px-3.5 py-1.5 text-sm text-primary-dark transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
