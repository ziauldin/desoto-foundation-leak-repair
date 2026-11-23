/** Renders one or more JSON-LD blocks. Null entries are skipped. "<" is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: (Record<string, unknown> | null)[] }) {
  return (
    <>
      {data.filter(Boolean).map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
