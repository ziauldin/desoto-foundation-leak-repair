"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { issueOptions, validateLead, type LeadErrors, type LeadInput } from "@/lib/lead";
import { buttonClass } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-1 block w-full rounded-md border border-border bg-surface px-3 py-2.5 text-text transition-[translate,scale,transform,opacity,color,background-color,border-color] duration-200 placeholder:text-muted/70 hover:border-secondary focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export function ContactForm({ title = "Request a foundation inspection", compact = false }: { title?: string; compact?: boolean }) {
  const pathname = usePathname();
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LeadErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as LeadInput;
    data.sourcePath = pathname;
    const found = validateLead(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="animate-fade-up rounded-lg border border-success/40 bg-surface p-6 text-center text-text shadow-sm">
        <span className="mx-auto grid h-14 w-14 animate-pop place-items-center rounded-full bg-success text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-4 font-display text-xl font-bold text-primary-dark">Thanks, we got your request.</p>
        <p className="mt-2 text-muted">
          We&apos;ll call you to set up a time. If water is actively leaking, call{" "}
          <a href={site.phoneHref} className="font-semibold text-primary underline">
            {site.phoneDisplay}
          </a>{" "}
          now.
        </p>
      </div>
    );
  }

  const field = (name: keyof LeadInput) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
  });
  const errorText = (name: keyof LeadInput) =>
    errors[name] ? (
      <p id={`${uid}-${name}-error`} className="mt-1 text-sm font-semibold text-warning">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg bg-surface p-5 text-text shadow-lg sm:p-6" aria-labelledby={`${uid}-title`}>
      <p id={`${uid}-title`} className="font-display text-xl font-bold text-primary-dark">
        {title}
      </p>
      <p className="mt-1 text-sm text-muted">DeSoto, TX homes and buildings only. We reply by phone.</p>

      <div className={`mt-5 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`${uid}-name`} className="text-sm font-semibold">
            Name <span aria-hidden="true">*</span>
          </label>
          <input {...field("name")} type="text" autoComplete="name" required className={inputClass} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="text-sm font-semibold">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input {...field("phone")} type="tel" autoComplete="tel" required className={inputClass} />
          {errorText("phone")}
        </div>
        {!compact && (
          <>
            <div>
              <label htmlFor={`${uid}-email`} className="text-sm font-semibold">
                Email <span className="font-normal text-muted">(optional)</span>
              </label>
              <input {...field("email")} type="email" autoComplete="email" className={inputClass} />
              {errorText("email")}
            </div>
            <div>
              <label htmlFor={`${uid}-zip`} className="text-sm font-semibold">
                ZIP code
              </label>
              <input {...field("zip")} type="text" inputMode="numeric" autoComplete="postal-code" defaultValue="75115" className={inputClass} />
              {errorText("zip")}
            </div>
          </>
        )}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={`${uid}-issue`} className="text-sm font-semibold">
            What do you need help with? <span aria-hidden="true">*</span>
          </label>
          <select {...field("issue")} required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            {issueOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {errorText("issue")}
        </div>
        {!compact && (
          <div className="sm:col-span-2">
            <label htmlFor={`${uid}-message`} className="text-sm font-semibold">
              What are you seeing? <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea {...field("message")} rows={4} className={inputClass} />
          </div>
        )}
        {/* Honeypot, hidden from people and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${uid}-company`}>Company</label>
          <input id={`${uid}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-semibold text-warning">
          {serverError} You can also call {site.phoneDisplay}.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={buttonClass("accent", "mt-5 w-full disabled:opacity-60")}>
        {status === "sending" ? (
          <>
            <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-primary-dark/30 border-t-primary-dark" />
            Sending…
          </>
        ) : (
          "Request Inspection"
        )}
      </button>
      <p className="mt-3 text-xs text-muted">
        By submitting, you agree to be contacted about your request. See our{" "}
        <Link href="/privacy-policy/" className="underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
