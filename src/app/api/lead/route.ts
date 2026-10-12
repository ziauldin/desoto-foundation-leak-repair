import { NextResponse } from "next/server";
import { validateLead, type LeadInput } from "@/lib/lead";

/**
 * Receives contact form leads.
 * Set LEAD_WEBHOOK_URL in Vercel (Zapier, Make, a CRM, or an email service) to forward each lead.
 * Without it, leads are only written to the server log. That's the placeholder until a buyer is connected.
 */
export async function POST(request: Request) {
  let body: Partial<LeadInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (body.company) return NextResponse.json({ ok: true });

  const errors = validateLead(body);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const lead = {
    name: body.name?.trim(),
    phone: body.phone?.trim(),
    email: body.email?.trim() || null,
    zip: body.zip?.trim() || null,
    issue: body.issue,
    message: body.message?.trim().slice(0, 2000) || null,
    sourcePath: body.sourcePath ?? null,
    receivedAt: new Date().toISOString(),
    site: "desotofoundationleakrepair.com",
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.info("[lead] LEAD_WEBHOOK_URL not set; lead logged only", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[lead] forwarding failed", err, lead);
    return NextResponse.json({ ok: false, error: "We couldn't send your request. Please call us instead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
