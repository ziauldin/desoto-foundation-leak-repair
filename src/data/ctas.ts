import type { CtaType } from "@/types/content";

/** Copy for each CTA type. Every commercial page renders one near the top and one at the bottom. */
export const ctaCopy: Record<
  CtaType,
  { label: string; heading: string; text: string; secondary: string; secondaryHref: string }
> = {
  inspection: {
    label: "Request Foundation Inspection",
    heading: "Get a clear answer on what your foundation is doing",
    text: "Tell us what you're seeing. We'll schedule an on-site inspection in DeSoto and give you written findings and a price.",
    secondary: "Check Repair Cost",
    secondaryHref: "/foundation-repair-cost-calculator/",
  },
  "leak-estimate": {
    label: "Get Leak Repair Estimate",
    heading: "Water under the slab gets worse, not better",
    text: "Find the leak, fix it the right way, and check the foundation after. Request an estimate for your DeSoto home.",
    secondary: "Estimate Leak Repair Cost",
    secondaryHref: "/foundation-leak-repair-cost-calculator/",
  },
  emergency: {
    label: "Call Now",
    heading: "Active leak or water coming through the floor?",
    text: "Shut off the main water valve if you can, then call. Urgent leak calls in DeSoto are prioritized.",
    secondary: "Request Emergency Help",
    secondaryHref: "/contact/",
  },
  "cost-check": {
    label: "Check Repair Cost",
    heading: "Turn your estimate into a real number",
    text: "Calculators give a range. An on-site inspection gives you a written price for your house.",
    secondary: "Request Foundation Inspection",
    secondaryHref: "/contact/",
  },
  schedule: {
    label: "Schedule Inspection",
    heading: "Schedule a foundation inspection in DeSoto",
    text: "Elevation readings, drainage check, and a plumbing test if leak signs are present, written up in plain English.",
    secondary: "Use the Inspection Checklist",
    secondaryHref: "/foundation-inspection-checklist/",
  },
};

/** Primary CTA destination: emergency calls go to the phone, everything else to the contact form. */
export const ctaHref = (type: CtaType, phoneHref: string) => (type === "emergency" ? phoneHref : "/contact/");
