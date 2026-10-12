import type { ReactNode } from "react";
import type { TitledText } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { DetailGrid } from "./DetailGrid";

/** Prose column with optional sidebar, followed by an optional detail grid. */
export function ServiceDetailSection({
  id,
  eyebrow,
  title,
  paragraphs,
  items,
  aside,
  tone = "default",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  items?: TitledText[];
  aside?: ReactNode;
  tone?: "default" | "surface" | "alt";
}) {
  const hasProse = Boolean(paragraphs?.length);
  return (
    <Section id={id} eyebrow={eyebrow} title={title} tone={tone}>
      {(hasProse || aside) && (
        <div className={aside ? "grid gap-10 lg:grid-cols-[1fr_22rem]" : ""}>
          <div className="prose-site text-lg">
            {paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      )}
      {items && items.length > 0 && (
        <div className={hasProse ? "mt-10" : ""}>
          <DetailGrid items={items} />
        </div>
      )}
    </Section>
  );
}
