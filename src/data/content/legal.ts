import type { ContentSection } from "@/types/content";
import { site } from "@/config/site";

// Starter legal copy. NEEDS LEGAL REVIEW before launch: have the site owner's attorney approve both pages.
const provider = site.parentCompany.legalName;
const contactLine = `Email ${site.email}, call ${site.phoneDisplay}, or write to ${provider}, ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`;

export const legalContent: Record<string, { updated: string; intro: string; sections: ContentSection[] }> = {
  "/privacy-policy/": {
    updated: "November 23, 2026",
    intro: `This policy explains what information ${site.name} collects through ${site.domain}, how it is used and shared, and the choices you have.`,
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "When you submit the inspection request form, we collect the details you enter and a little context about the request:",
        ],
        bullets: [
          "Your name and phone number (required)",
          "Your email address and ZIP code (optional)",
          "The type of problem you select and any message you write",
          "The page of this website you submitted the form from, and the date and time it was sent",
        ],
      },
      {
        heading: "Information collected automatically",
        paragraphs: [
          "Like most websites, the servers that host this site record basic technical data such as IP address, browser type, pages visited and referring site. We may also use analytics tools that collect similar data.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: ["We use your information to respond to your request and arrange service."],
        bullets: [
          "To call or email you about your inspection or estimate",
          `To pass your request to ${provider}, the company that performs the work booked through this website`,
          "To improve the website and understand which pages are useful",
          "To meet legal obligations",
        ],
      },
      {
        heading: "How form submissions are delivered",
        paragraphs: [
          `When you press submit, the form details are sent from this website to ${provider} through a webhook, an automated connection to the email or lead-management tool the company uses to receive requests. The hosting provider may keep a short-lived server log of the submission for troubleshooting.`,
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          `Your request is shared with ${provider} so it can contact you and perform the work. We do not sell your personal information. We share data with vendors that host the site or process form submissions only as needed to run the service.`,
        ],
      },
      {
        heading: "Calls and messages",
        paragraphs: [
          "By submitting a form you agree to be contacted by phone or email about your request. You can ask us to stop contacting you at any time.",
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
        heading: "Removing or correcting your information",
        paragraphs: [
          `To see, correct or delete the information you sent us, or to stop all contact, ${contactLine.charAt(0).toLowerCase()}${contactLine.slice(1)} We will act on the request across this website's records and ${provider}'s lead records.`,
          "This site is intended for adults and does not knowingly collect information from children under 13.",
        ],
      },
    ],
  },
  "/terms-and-conditions/": {
    updated: "November 23, 2026",
    intro: `These terms apply to your use of ${site.domain}. By using the site or submitting a request through it, you agree to them. If you don't agree, please don't use the site.`,
    sections: [
      {
        heading: "Who provides the service",
        paragraphs: [
          `${site.name} provides information about foundation leak repair, slab leak repair and foundation repair for properties in ${site.city}, ${site.state}. Inspections, estimates and repair work requested through this site are performed by ${provider}, an independent service provider.`,
          `Any repair work is governed by a separate written agreement between you and ${provider}. That agreement, not this website, sets the scope, price, schedule and any warranty for the work.`,
        ],
      },
      {
        heading: "Use of this website",
        paragraphs: ["You may use the site to learn about foundation problems and to request an inspection for a property you own or manage in DeSoto. You agree not to:"],
        bullets: [
          "Submit false information or requests on someone else's behalf without their permission",
          "Use the site to send spam, advertising or malicious code",
          "Attempt to interfere with, scrape or overload the site or its forms",
        ],
      },
      {
        heading: "Submitting a request",
        paragraphs: [
          "Sending the form or calling is a request to be contacted. It does not create a contract or obligate you to buy anything, and it does not guarantee that an appointment time is available.",
        ],
      },
      {
        heading: "Estimates are not quotes",
        paragraphs: [
          "Articles, checklists, typical price ranges and any calculators on this site are general information for planning only. They are not quotes, engineering advice or a structural evaluation. Pricing and recommendations are provided only after an on-site inspection, in a written estimate.",
        ],
      },
      {
        heading: "Information only, no guarantee of results",
        paragraphs: [
          "Foundation conditions vary with soil, weather, plumbing and construction. Content on this site does not guarantee any outcome. For decisions about your property, rely on an on-site inspection and, where appropriate, a licensed structural engineer.",
        ],
      },
      {
        heading: "Links to other websites",
        paragraphs: [
          "The site links to other websites, such as social media profiles and the service provider's own site. We don't control those sites and aren't responsible for their content or privacy practices.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: ["Site content, design, illustrations and tools are owned by the site operator and may not be copied for commercial use without permission."],
      },
      {
        heading: "Disclaimer of warranties",
        paragraphs: [
          "The website and its content are provided \"as is\" and \"as available\", without warranties of any kind, express or implied, to the fullest extent allowed by law. This disclaimer covers the website only, not any written warranty you receive for repair work.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent allowed by law, the site operator is not liable for any indirect, incidental or consequential damages arising from use of this website or reliance on its content.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: ["These terms are governed by the laws of the State of Texas, without regard to its conflict-of-law rules."],
      },
      {
        heading: "Changes to these terms",
        paragraphs: ["We may update these terms by posting a new version on this page. The date at the top shows when they last changed."],
      },
      {
        heading: "Contact",
        paragraphs: [`Questions about these terms? ${contactLine}`],
      },
    ],
  },
};
