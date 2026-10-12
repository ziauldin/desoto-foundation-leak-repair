

/** "Short answer" box using the first intro paragraph. */
export function QuickAnswer({ text }: { text: string }) {
  return (
    <div data-reveal="scale" className="relative rounded-lg border-2 border-primary bg-surface p-6 shadow-[var(--shadow-card)]">
      <span aria-hidden="true" className="absolute -top-3 left-5 grid h-6 w-6 place-items-center rounded-full bg-accent font-display text-sm font-bold text-primary-dark">!</span>
      <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Short answer</p>
      <p className="mt-2 text-lg text-text">{text}</p>
    </div>
  );
}
