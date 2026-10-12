import type { ContentSection } from "@/types/content";
import { site } from "@/config/site";

// Starter legal copy. Have the site owner (or their attorney) review before launch.
export const legalContent: Record<string, { updated: string; intro: string; sections: ContentSection[] }> = {
  "/privacy-policy/": {
    updated: "October 12, 2026",
    intro: `This policy explains what information ${site.name} collects through ${site.domain}, how it is used, and the choices you have.`,
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "When you submit a form or call, we collect the details you choose to give us: your name, phone number, email, ZIP code, and a description of the problem at your property.",
          "Like most websites, we also collect basic technical data automatically, such as browser type, pages visited and referring site, through server logs and analytics tools.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: ["We use your information to respond to your request and arrange service."],
        bullets: [
          "To call or email you about your inspection or estimate",
          "To pass your request to the foundation or plumbing professional who will perform the work in DeSoto, TX",
          "To improve the website and understand which pages are useful",
          "To meet legal obligations",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Your request may be shared with the independent service provider that handles work booked through this website. We do not sell your personal information. We may share data with vendors that host the site or process form submissions, only as needed to run the service.",
        ],
      },
      {
        heading: "Calls and messages",
        paragraphs: [
          "By submitting a form you agree to be contacted by phone, text or email about your request. You can ask us to stop contacting you at any time. Message and data rates may apply to texts.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "We may use cookies and similar tools to measure traffic and form performance. You can block cookies in your browser settings; the site will still work.",
        ],
      },
      {
        heading: "Data retention and security",
        paragraphs: [
          "We keep lead information only as long as needed to handle your request and keep business records. We use reasonable safeguards, but no website or transmission is completely secure.",
        ],
      },
      {
        heading: "Your choices and contact",
        paragraphs: [
          `To access, correct or delete the information you sent us, email ${site.email} or call ${site.phoneDisplay}. This site is intended for adults and does not knowingly collect information from children under 13.`,
        ],
      },
    ],
  },
  "/terms-and-conditions/": {
    updated: "October 12, 2026",
    intro: `These terms apply to your use of ${site.domain}. By using the site, you agree to them.`,
    sections: [
      {
        heading: "About this website",
        paragraphs: [
          `${site.name} provides information about foundation leak repair, slab leak repair and foundation repair for properties in DeSoto, TX, and connects property owners with a local service provider. Work is performed under a separate written agreement between you and the provider.`,
        ],
      },
      {
        heading: "Estimates and calculators",
        paragraphs: [
          "Calculators, checklists, price ranges and articles on this site are general information for planning only. They are not quotes, engineering advice or a structural evaluation. Actual pricing and recommendations are provided only after an on-site inspection.",
        ],
      },
      {
        heading: "No guarantee of results",
        paragraphs: [
          "Foundation conditions vary with soil, weather, plumbing and construction. Content on this site does not guarantee any outcome. Consult a licensed professional or structural engineer for decisions about your property.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: ["Don't submit false information, use the site for spam, or attempt to interfere with its operation."],
      },
      {
        heading: "Intellectual property",
        paragraphs: ["Site content, design and tools are owned by the site operator and may not be copied for commercial use without permission."],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent allowed by law, the site operator is not liable for any indirect or consequential damages arising from use of this website or reliance on its content.",
        ],
      },
      {
        heading: "Changes and governing law",
        paragraphs: [
          "We may update these terms at any time by posting a new version on this page. These terms are governed by the laws of the State of Texas.",
          `Questions? Email ${site.email} or call ${site.phoneDisplay}.`,
        ],
      },
    ],
  },
};
