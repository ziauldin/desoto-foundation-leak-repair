import type { ResourceContent } from "@/types/content";

export function ComparisonTable({ comparison }: { comparison: NonNullable<ResourceContent["comparison"]> }) {
  return (
    <section data-reveal aria-labelledby="comparison-heading">
      <h2 id="comparison-heading">At a glance</h2>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-primary-dark">
              {comparison.columns.map((c) => (
                <th key={c} scope="col" className="py-3 pr-4 font-display text-lg font-semibold text-primary-dark">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row[0]} className="border-b border-border align-top transition-colors hover:bg-accent-soft/50">
                <th scope="row" className="py-3 pr-4 font-semibold text-primary-dark">
                  {row[0]}
                </th>
                <td className="py-3 pr-4">{row[1]}</td>
                <td className="py-3">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
