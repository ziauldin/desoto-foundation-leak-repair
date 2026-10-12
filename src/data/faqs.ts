import type { FAQ } from "@/types/content";

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
