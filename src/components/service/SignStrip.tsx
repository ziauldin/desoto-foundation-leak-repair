import type { TitledText } from "@/types/content";
import { CheckIcon } from "@/components/ui/Icons";

/** Navy strip listing the top warning signs, directly under the hero. */
export function SignStrip({ signs }: { signs: TitledText[] }) {
  return (
    <div className="bg-primary text-white">
      <ul className="container-site grid gap-x-8 gap-y-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {signs.slice(0, 4).map((s, i) => (
          <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex items-center gap-2.5 text-[0.95rem]">
            <span className="grid h-6 w-6 shrink-0 animate-pop place-items-center rounded-full bg-accent text-primary-dark">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            {s.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
