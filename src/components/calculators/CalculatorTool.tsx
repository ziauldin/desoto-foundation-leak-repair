"use client";

import { useMemo, useState } from "react";
import type { CalcField, CalculatorContent, ChecklistItem } from "@/types/content";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { CalculatorShell, Meter, NumberField, RangeField, SelectField, money } from "./CalculatorShell";

/** Picks the right engine for a calculator's data. All config comes from src/data/content/calculators.ts. */
export function CalculatorTool({ calculator }: { calculator: CalculatorContent }) {
  const { tool, shortName, disclaimer } = calculator;
  switch (tool.kind) {
    case "cost":
      return <CostCalculator title={shortName} disclaimer={disclaimer} {...tool} />;
    case "checklist":
      return <ChecklistTool title={shortName} disclaimer={disclaimer} items={tool.items} />;
    case "crack-width":
      return <CrackWidthTool title={shortName} disclaimer={disclaimer} />;
    case "drainage-slope":
      return <DrainageSlopeTool title={shortName} disclaimer={disclaimer} />;
  }
}

// ---- Cost ------------------------------------------------------------------------

function CostCalculator({
  title,
  disclaimer,
  baseLow,
  baseHigh,
  minimum,
  fields,
}: {
  title: string;
  disclaimer: string;
  baseLow: number;
  baseHigh: number;
  minimum: number;
  fields: CalcField[];
}) {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, f.type === "select" ? (f.defaultIndex ?? 0) : f.defaultValue])),
  );

  const estimate = useMemo(() => {
    let low = baseLow;
    let high = baseHigh;
    let multiplier = 1;
    for (const f of fields) {
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
    return { low: Math.max(minimum, round(low * multiplier)), high: Math.max(minimum, round(high * multiplier)) };
  }, [values, fields, baseLow, baseHigh, minimum]);

  const set = (id: string, v: number) => setValues((prev) => ({ ...prev, [id]: v }));

  return (
    <CalculatorShell
      title={title}
      disclaimer={disclaimer}
      ctaLabel="Get Your Exact Price"
      inputs={fields.map((f) =>
        f.type === "select" ? (
          <SelectField
            key={f.id}
            id={`calc-${f.id}`}
            label={f.label}
            help={f.help}
            value={values[f.id]}
            options={f.options.map((o) => o.label)}
            onChange={(v) => set(f.id, v)}
          />
        ) : (
          <RangeField
            key={f.id}
            id={`calc-${f.id}`}
            label={f.label}
            help={f.help}
            value={values[f.id]}
            min={f.min}
            max={f.max}
            step={f.step}
            unit={f.unit}
            onChange={(v) => set(f.id, v)}
          />
        ),
      )}
      result={
        <>
          <p className="eyebrow text-accent!">Estimated range</p>
          <p className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            <AnimatedNumber value={estimate.low} format={money} /> <span className="text-white/60">–</span>{" "}
            <AnimatedNumber value={estimate.high} format={money} />
          </p>
          <p className="mt-3 text-white/80">
            Typical range for a DeSoto home with these inputs. Most of the spread comes from what an inspection finds under the house.
          </p>
        </>
      }
    />
  );
}

// ---- Checklist ---------------------------------------------------------------------

function ChecklistTool({ title, disclaimer, items }: { title: string; disclaimer: string; items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const areas = [...new Set(items.map((i) => i.area))];
  const score = items.filter((i) => checked.has(i.id)).reduce((sum, i) => sum + i.weight, 0);
  const plumbing = items.some((i) => i.area === "Plumbing" && checked.has(i.id));

  const level = score === 0 ? "none" : score <= 4 ? "low" : score <= 9 ? "moderate" : "high";
  const verdict = {
    none: { label: "Nothing checked yet", text: "Walk the outside first, then each room, and check what you see." },
    low: { label: "Low concern", text: "Keep an eye on it. Mark crack ends with a date, keep downspouts extended, and re-check after the next big rain or dry spell." },
    moderate: { label: "Worth an inspection", text: "Several signs together usually mean the foundation is moving. Schedule an inspection so you know how much and why." },
    high: { label: "Book an inspection soon", text: "This combination of signs is consistent with active foundation movement. Waiting usually makes the repair bigger." },
  }[level];

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <CalculatorShell
      title={title}
      disclaimer={disclaimer}
      ctaLabel="Schedule an Inspection"
      inputs={areas.map((area) => (
        <fieldset key={area}>
          <legend className="font-display text-lg font-semibold text-primary-dark">{area}</legend>
          <ul className="mt-2 space-y-2">
            {items
              .filter((i) => i.area === area)
              .map((item) => (
                <li key={item.id}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-md border border-border p-3 transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-200 hover:-translate-y-px hover:bg-background active:scale-[0.99] has-[:checked]:border-primary has-[:checked]:bg-accent-soft has-[:checked]:shadow-sm">
                    <input
                      type="checkbox"
                      checked={checked.has(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 h-4 w-4 accent-[var(--color-primary)]"
                    />
                    <span>{item.label}</span>
                  </label>
                </li>
              ))}
          </ul>
        </fieldset>
      ))}
      result={
        <>
          <p className="eyebrow text-accent!">Your result</p>
          <p key={verdict.label} className="mt-2 animate-pop font-display text-3xl font-bold">{verdict.label}</p>
          <Meter value={Math.min(1, score / 14)} label="Concern level" />
          <p className="mt-1 text-white/70">
            {checked.size} sign{checked.size === 1 ? "" : "s"} checked · score {score}
          </p>
          <p className="mt-4 text-white/85">{verdict.text}</p>
          {plumbing && (
            <p className="mt-4 rounded-md bg-accent/15 p-3 text-sm text-accent">
              You checked a plumbing sign. Ask for a leak test first, since water under the slab makes foundation problems worse.
            </p>
          )}
        </>
      }
    />
  );
}

// ---- Crack width -------------------------------------------------------------------

const crackTypes = [
  { label: "Vertical", score: 0 },
  { label: "Diagonal (from a door or window corner)", score: 1 },
  { label: "Stair-step in brick", score: 2 },
  { label: "Horizontal", score: 2 },
];
const crackLocations = ["Exterior brick", "Exposed slab edge", "Interior drywall", "Floor or tile"];

function CrackWidthTool({ title, disclaimer }: { title: string; disclaimer: string }) {
  const [unit, setUnit] = useState<"in" | "mm">("in");
  const [width, setWidth] = useState(0.125);
  const [type, setType] = useState(0);
  const [location, setLocation] = useState(0);
  const [displaced, setDisplaced] = useState(0);
  const [growing, setGrowing] = useState(0);

  const inches = unit === "in" ? width : width / 25.4;
  const valid = Number.isFinite(inches) && inches >= 0;
  const widthScore = inches < 1 / 16 ? 0 : inches < 1 / 8 ? 1 : inches <= 1 / 4 ? 2 : 3;
  const score = widthScore + crackTypes[type].score + (displaced === 1 ? 3 : 0) + (growing === 1 ? 2 : growing === 2 ? 1 : 0);
  const band =
    score <= 1
      ? { label: "Likely cosmetic", text: "Usually shrinkage or minor seasonal movement. Seal it if it lets water in, mark the ends, and re-check in 30 days." }
      : score <= 4
        ? { label: "Monitor and consider sealing", text: "Not an emergency, but worth tracking. If it grows or doors nearby start sticking, schedule an inspection." }
        : { label: "Possible structural movement", text: "Width, direction or displacement point to the foundation moving. Have it inspected with elevation readings before sealing." };

  const fraction = inches >= 1 / 4 ? "1/4 in or more" : inches >= 1 / 8 ? "1/8 to 1/4 in" : inches >= 1 / 16 ? "1/16 to 1/8 in" : "under 1/16 in (hairline)";

  return (
    <CalculatorShell
      title={title}
      disclaimer={disclaimer}
      ctaLabel="Have This Crack Inspected"
      inputs={
        <>
          <SelectField id="crack-unit" label="Measure in" value={unit === "in" ? 0 : 1} options={["Inches", "Millimeters"]} onChange={(i) => {
            const next = i === 0 ? "in" : "mm";
            if (next !== unit) setWidth((w) => (next === "mm" ? Math.round(w * 25.4 * 10) / 10 : Math.round((w / 25.4) * 1000) / 1000));
            setUnit(next);
          }} />
          <NumberField
            id="crack-width"
            label="Crack width at the widest point"
            help={unit === "in" ? "Example: 0.0625 = 1/16 in, 0.125 = 1/8 in, 0.25 = 1/4 in" : "Example: 1.6 mm ≈ 1/16 in, 3.2 mm ≈ 1/8 in, 6.4 mm ≈ 1/4 in"}
            value={width}
            min={0}
            step={unit === "in" ? 0.0625 : 0.5}
            suffix={unit}
            onChange={setWidth}
          />
          <SelectField id="crack-type" label="Crack direction" value={type} options={crackTypes.map((t) => t.label)} onChange={setType} />
          <SelectField id="crack-location" label="Where is it?" value={location} options={crackLocations} onChange={setLocation} />
          <SelectField id="crack-displaced" label="Is one side higher or pushed out?" value={displaced} options={["No, both sides are flush", "Yes, there's an offset"]} onChange={setDisplaced} />
          <SelectField id="crack-growing" label="Has it changed?" value={growing} options={["Not that I know of", "Yes, it's getting bigger", "Opens and closes with the seasons"]} onChange={setGrowing} />
        </>
      }
      result={
        valid ? (
          <>
            <p className="eyebrow text-accent!">Width band</p>
            <p className="mt-1 text-white/85">{fraction} · {crackLocations[location].toLowerCase()}</p>
            <p className="mt-5 eyebrow text-accent!">Assessment</p>
            <p key={band.label} className="mt-2 animate-pop font-display text-3xl font-bold">{band.label}</p>
            <Meter value={Math.min(1, score / 10)} label="Severity" />
            <p className="mt-3 text-white/85">{band.text}</p>
          </>
        ) : (
          <p className="text-white/85">Enter a crack width to see the assessment.</p>
        )
      }
    />
  );
}

// ---- Drainage slope ----------------------------------------------------------------

function DrainageSlopeTool({ title, disclaimer }: { title: string; disclaimer: string }) {
  const [distance, setDistance] = useState(10);
  const [drop, setDrop] = useState(3);
  const [surface, setSurface] = useState(0);

  const valid = Number.isFinite(distance) && distance > 0 && Number.isFinite(drop);
  const percent = valid ? (drop / 12 / distance) * 100 : 0;
  const target = surface === 0 ? 5 : 2;
  const per10 = valid ? (drop / distance) * 10 : 0;
  const neededDrop = (target / 100) * distance * 12;

  const status =
    !valid
      ? null
      : percent < 0
        ? { label: "Slopes toward the house", tone: "bad", text: "Water is being directed at the foundation. This needs regrading or a drain." }
        : percent < target
          ? { label: "Below recommended slope", tone: "warn", text: `You need about ${neededDrop.toFixed(1)} in of drop over ${distance} ft to reach ${target}%. Regrading, downspout extensions, or a French drain usually fixes it.` }
          : { label: "Meets recommended slope", tone: "good", text: "Grading looks right. Make sure downspouts discharge at least 5 feet out and flower beds don't trap water against the slab." };

  return (
    <CalculatorShell
      title={title}
      disclaimer={disclaimer}
      ctaLabel="Request a Drainage Check"
      inputs={
        <>
          <SelectField id="slope-surface" label="Surface next to the foundation" value={surface} options={["Soil, lawn or beds (target 5%)", "Concrete or pavers (target 2%)"]} onChange={setSurface} />
          <NumberField id="slope-distance" label="Distance measured away from the foundation" help="Code guidance measures the first 10 feet." value={distance} min={1} step={1} suffix="ft" onChange={setDistance} />
          <NumberField id="slope-drop" label="Drop over that distance" help="Use a negative number if the ground rises away from the house." value={drop} step={0.5} suffix="in" onChange={setDrop} />
        </>
      }
      result={
        status ? (
          <>
            <p className="eyebrow text-accent!">Your slope</p>
            <p className="mt-2 font-display text-5xl font-bold">
              <AnimatedNumber value={percent} format={(n) => `${n.toFixed(1)}%`} />
            </p>
            <Meter value={Math.max(0, Math.min(1, percent / (target * 1.6)))} label="Slope vs target" marker={1 / 1.6} />
            <p className="mt-1 text-white/75">{per10.toFixed(1)} in of fall per 10 ft · target {target}%</p>
            <p className={`mt-5 font-display text-2xl font-bold ${status.tone === "good" ? "text-[#8fd3a8]" : "text-accent"}`}>{status.label}</p>
            <p className="mt-2 text-white/85">{status.text}</p>
          </>
        ) : (
          <p className="text-white/85">Enter a distance greater than zero.</p>
        )
      }
    />
  );
}
