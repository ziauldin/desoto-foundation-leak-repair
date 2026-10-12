import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { buttonClass } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

/** Shared calculator frame: inputs | result, then CTA and disclaimer. Every tool renders inside this. */
export function CalculatorShell({
  title,
  inputs,
  result,
  ctaLabel = "Get an Exact Price",
  disclaimer,
}: {
  title: string;
  inputs: ReactNode;
  result: ReactNode;
  ctaLabel?: string;
  disclaimer: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
      <div className="border-b border-border bg-surface-alt px-5 py-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl">{title}</h2>
      </div>
      <div className="grid lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-6 p-5 sm:p-6">{inputs}</div>
        <div className="flex flex-col bg-primary-dark p-5 text-white sm:p-6" aria-live="polite">
          <div className="flex-1">{result}</div>
          <div className="mt-6 space-y-2 border-t border-white/15 pt-5">
            <p className="text-sm text-white/80">Want a real number for your house? An inspection turns this range into a written price.</p>
            <Link href="/contact/" className={buttonClass("accent", "w-full")}>
              {ctaLabel}
            </Link>
            <a href={site.phoneHref} className={buttonClass("outline-light", "w-full")}>
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-border bg-background px-5 py-4 text-sm text-muted sm:px-6">
        <strong className="text-text">Disclaimer:</strong> {disclaimer}
      </p>
    </div>
  );
}

const fieldLabel = "block font-semibold text-primary-dark";
const control =
  "mt-1.5 block w-full rounded-md border border-border bg-surface px-3 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function SelectField({
  id,
  label,
  help,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  help?: string;
  value: number;
  options: string[];
  onChange: (index: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      {help && (
        <p id={`${id}-help`} className="text-sm text-muted">
          {help}
        </p>
      )}
      <select
        id={id}
        className={control}
        value={value}
        aria-describedby={help ? `${id}-help` : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((label, i) => (
          <option key={label} value={i}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function RangeField({
  id,
  label,
  help,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  id: string;
  label: string;
  help?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className={fieldLabel}>
          {label}
        </label>
        <output htmlFor={id} className="font-display text-lg font-bold text-primary">
          {value} {unit}
        </output>
      </div>
      {help && (
        <p id={`${id}-help`} className="text-sm text-muted">
          {help}
        </p>
      )}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-describedby={help ? `${id}-help` : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-primary)]"
      />
      <div className="flex justify-between text-xs text-muted" aria-hidden="true">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

export function NumberField({
  id,
  label,
  help,
  value,
  min,
  step,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  help?: string;
  value: number;
  min?: number;
  step?: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      {help && (
        <p id={`${id}-help`} className="text-sm text-muted">
          {help}
        </p>
      )}
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          aria-describedby={help ? `${id}-help` : undefined}
          onChange={(e) => onChange(e.target.value === "" ? NaN : Number(e.target.value))}
          className={`${control} pr-16`}
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted">{suffix}</span>
      </div>
    </div>
  );
}

export const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
