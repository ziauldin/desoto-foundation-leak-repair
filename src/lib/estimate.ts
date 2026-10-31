import type { CalcField } from "@/types/content";

type CostTool = { baseLow: number; baseHigh: number; minimum: number; fields: CalcField[] };

/** Starting input values: each select's default option, each range's default value. */
export const defaultValues = (fields: CalcField[]): Record<string, number> =>
  Object.fromEntries(fields.map((f) => [f.id, f.type === "select" ? (f.defaultIndex ?? 0) : f.defaultValue]));

/** Conditional fields (e.g. tunnel length) only show and count while their trigger option is selected. */
export const visibleFields = (fields: CalcField[], values: Record<string, number>) =>
  fields.filter((f) => f.type === "select" || !f.showIf || values[f.showIf.field] === f.showIf.option);

/**
 * Low/high estimate for a cost calculator: base + option and per-unit additions, times option multipliers,
 * rounded to $50 and floored at the minimum job size. Shared by the calculator UI and the service-page quick facts.
 */
export function estimateCost(tool: CostTool, values: Record<string, number>) {
  let low = tool.baseLow;
  let high = tool.baseHigh;
  let multiplier = 1;
  for (const f of visibleFields(tool.fields, values)) {
    const v = values[f.id];
    if (f.type === "select") {
      const opt = f.options[v];
      low += opt?.low ?? 0;
      high += opt?.high ?? 0;
      multiplier *= opt?.multiplier ?? 1;
    } else {
      low += v * f.perUnitLow;
      high += v * f.perUnitHigh;
    }
  }
  const round = (n: number) => Math.round(n / 50) * 50;
  return { low: Math.max(tool.minimum, round(low * multiplier)), high: Math.max(tool.minimum, round(high * multiplier)) };
}
