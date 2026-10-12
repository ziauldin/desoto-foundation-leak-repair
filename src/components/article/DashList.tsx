

export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((b) => (
        <li key={b} className="relative pl-6 before:absolute before:left-0 before:top-[0.8em] before:h-0.5 before:w-3 before:bg-accent">
          {b}
        </li>
      ))}
    </ul>
  );
}
