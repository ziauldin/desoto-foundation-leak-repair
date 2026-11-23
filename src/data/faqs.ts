import type { FAQ } from "@/types/content";
import { site } from "@/config/site";

/** Site-wide FAQs used on the home, contact and service-area hub pages. Page-specific FAQs live with each page's content. */
export const generalFaqs: FAQ[] = [
  {
    question: "Do you only work in DeSoto?",
    answer:
      "Yes. This site and its crews are focused on DeSoto, TX, including every neighborhood in the 75115 ZIP code. Staying in one city keeps scheduling tight and lets us learn the soil, drainage and housing quirks street by street.",
  },
  {
    question: "What's the difference between a foundation leak and a slab leak?",
    answer:
      "A slab leak is a plumbing pipe leaking under or inside the concrete slab. A foundation leak is any water getting into or under the foundation, which also includes poor drainage, pooling and cracks that let water in. Both can cause foundation movement on North Texas clay.",
  },
  {
    question: "How fast can someone look at my house?",
    answer:
      "Send the form or call and we'll set a time for an on-site inspection. Active leaks with water on the floor are treated as urgent. For routine cracks and sticking doors, we schedule a full inspection at a time that works for you.",
  },
  {
    question: "Will I get a written estimate?",
    answer:
      "Yes. After the inspection you get a written summary of what was found, the recommended repair, and the price. If the problem is minor or just needs drainage changes and monitoring, we'll say so.",
  },
  {
    question: "Is foundation movement normal in DeSoto?",
    answer:
      "Some seasonal movement is normal on expansive clay. Hairline cracks and a door that sticks in August are common. Cracks that keep growing, sloping floors, and separated brick are not, and those are worth an inspection.",
  },
];

/** Questions about getting in touch, used on the contact page (with FAQPage schema). */
export const contactFaqs: FAQ[] = [
  {
    question: "How soon will someone get back to me?",
    answer: `We call back to confirm a time for the on-site inspection. ${site.responseNote} Active leaks with water on the floor get priority.`,
  },
  {
    question: "Do you serve my address?",
    answer:
      `If your property is inside DeSoto city limits, yes. That covers the ${site.zips.join(" and ")} ZIP codes. We don't take jobs outside DeSoto, so if you're unsure, call and we'll check your address.`,
  },
  {
    question: "Should I send photos before the visit?",
    answer:
      "It helps. Photos of the cracks, gaps or wet spots let us bring the right equipment and ask better questions on the phone. They don't replace the inspection, because elevation readings and a plumbing test are what confirm the cause.",
  },
  {
    question: "Do I need to be home for the inspection?",
    answer:
      "Yes, an adult needs to be there. The visit covers the inside and outside of the house, and we'll walk you through what we found before we leave. Plan on clear access to the exterior walls, the water meter and the rooms where you've noticed problems.",
  },
];
