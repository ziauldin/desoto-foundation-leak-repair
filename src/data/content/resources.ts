import type { ResourceContent } from "@/types/content";

// Starter copy for the 11 Blog pages (cost guides, problem guides, comparisons).
// DeSoto, TX only. Prices are typical North Texas ranges, not quotes.

export const resourceContent: ResourceContent[] = [
  // ---------------------------------------------------------------------------
  // COST
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-repair-cost-desoto-tx/",
    shortName: "Foundation Repair Cost",
    category: "cost",
    summary:
      "Typical foundation repair price ranges for DeSoto homes, what pushes a job up or down, and how to compare estimates without getting burned.",
    intro: [
      "Most DeSoto homeowners start looking up foundation repair cost the week they notice a new crack over a doorway or a door that suddenly won't latch. The honest answer is that the price depends on what is actually moving under the house, how much of the house is affected, and what caused it. A few hairline cracks and a drainage fix cost far less than lifting a sunken corner of a slab.",
      "This guide lays out typical North Texas price ranges for the repairs we see most often in DeSoto, explains the factors that drive cost, and covers what insurance usually will and will not pay for. Treat every number here as a typical range. Final pricing comes after an on-site inspection, because two houses on the same street off Hampton Rd or Belt Line Rd can need very different work.",
    ],
    sections: [
      {
        heading: "Typical Foundation Repair Price Ranges in DeSoto",
        paragraphs: [
          "These are typical ranges for North Texas residential work. They are a starting point for budgeting and for judging whether an estimate is in the normal range, not a quote for your house. The final price for your home is set after an on-site inspection that measures floor elevations, checks for plumbing leaks, and looks at drainage around the slab or crawl space, since all three change the scope of the job.",
          "General foundation repair for a typical DeSoto brick home on a slab often lands between $4,000 and $15,000. Minor jobs, such as a few piers under one settled corner, can start around $1,800. Large jobs that need piers around most of the perimeter plus interior piers under the middle of the house can run $25,000 or more. Most homes fall somewhere in the middle, depending on how much of the slab has moved.",
        ],
        bullets: [
          "General foundation repair: often $4,000 to $15,000 (minor jobs from about $1,800; large jobs $25,000+)",
          "Exterior piers: roughly $400 to $1,000 per pier",
          "Interior piers: more per pier than exterior, because the slab has to be broken out and patched",
          "Foundation crack injection: about $300 to $800 per crack",
          "Pier and beam shimming or adjustment: about $1,000 to $5,000",
          "French drain installation: about $25 to $60 per linear foot",
          "Structural engineer's report: about $400 to $800",
        ],
      },
      {
        heading: "What Drives the Price Up or Down",
        paragraphs: [
          "The biggest single factor is the number of piers. Each pier is a fixed cost in labor and material, so a repair that needs 8 piers on one side of the house costs a fraction of one that needs 25 around the whole perimeter. Interior piers add cost because the crew has to cut through flooring and concrete, set the pier, and patch the slab afterward, and the flooring above may need replacing too.",
          "Access matters as well. Tight side yards, mature landscaping, patios, and driveways poured against the foundation all slow the work and may need to be cut and replaced. If a plumbing leak under the slab helped cause the movement, the leak has to be found and fixed before lifting, which adds detection and plumbing costs to the total. Drainage corrections and root barriers are sometimes included and sometimes priced separately, so ask.",
        ],
        bullets: [
          "Number and location of piers (exterior vs. interior)",
          "Foundation type: slab, pier and beam, or a combination",
          "How far the slab has dropped and how much lift is needed",
          "Access around the house: fences, flatwork, landscaping, trees",
          "Whether a plumbing leak, drainage problem, or tree roots need to be fixed first",
          "Engineer's report, permits, and post-repair plumbing tests if required",
        ],
      },
      {
        heading: "Why DeSoto Homes See Foundation Movement",
        paragraphs: [
          "DeSoto sits on the expansive clay soils common across North Texas. That clay swells when it soaks up water and shrinks and cracks when it dries out. Long, hot summers followed by heavy spring and fall storms keep the soil under a slab moving through the year, and the edges of the house move more than the shaded, more stable middle. Over decades, that back-and-forth adds up to real settlement.",
          "Much of DeSoto's housing is 1970s through 1990s brick on slab, with some older pier and beam homes and newer 2000s subdivisions. Older slabs may still have cast-iron drain lines that corrode over time and can leak into the soil. Add downspouts that dump right at the slab, flat or negative grading, and large trees close to the house, and you have the usual recipe for settlement in this part of Dallas County.",
        ],
      },
      {
        heading: "Does Homeowners Insurance Pay for Foundation Repair?",
        paragraphs: [
          "Usually not for the settlement itself. Most standard homeowners policies exclude foundation movement caused by soil shrinkage, settling, or poor drainage. Where coverage sometimes applies is a sudden plumbing leak. Some policies will pay to access and tear out the area around a burst or leaking pipe, and for resulting water damage, even if they do not pay to repair the pipe itself or the foundation movement that followed.",
          "Policies vary a lot, so read your declarations page and exclusions or call your agent before you file anything. If a plumbing leak is involved, keep the documentation from the leak detection visit, photos of the damage, and itemized invoices. It also helps to have the plumbing repair and the structural repair priced as separate line items, since an insurer may treat them very differently.",
        ],
      },
      {
        heading: "How to Compare Foundation Repair Estimates",
        paragraphs: [
          "Two estimates for the same house can look far apart until you line them up. Ask each contractor for the number of piers, pier type and depth, where each pier goes, whether interior piers are included, and what happens if more lift is needed than planned. A low bid with half the piers is not a cheaper version of the same job. It is a different, smaller job that may not fix the problem.",
          "Ask whether the estimate includes a plumbing test after lifting, cleanup, and any drainage corrections. Get the warranty terms in writing, read them, and check whether they transfer to a future buyer. If the numbers or the recommended scope are very different between contractors, an independent engineer's report for $400 to $800 gives everyone the same plan to bid against and usually settles the question.",
        ],
        bullets: [
          "Pier count, type, and layout drawing",
          "Interior work and slab patching included or not",
          "Plumbing test before and after lifting",
          "Drainage or root barrier work included or separate",
          "Written warranty terms and whether they transfer to a buyer",
        ],
      },
    ],
    whenToCall: [
      "A crack wider than 1/8 inch, or one that has grown since you first noticed it",
      "Stair-step cracks in the brick or mortar on an exterior wall",
      "Doors or windows that suddenly stick, swing open, or won't latch",
      "Floors that slope enough to notice when you walk or set down a marble",
      "Gaps opening between walls and the ceiling, or trim pulling away",
      "You are buying or selling a home and need a documented condition report",
    ],
    primaryService: "/foundation-repair-desoto-tx/",
    primaryCalculator: "/foundation-repair-cost-calculator/",
    faqs: [
      {
        question: "What is the average foundation repair cost in DeSoto, TX?",
        answer:
          "For a typical DeSoto brick home on a slab, general foundation repair often falls between $4,000 and $15,000. Small jobs with a few piers can start around $1,800, and whole-perimeter work with interior piers can pass $25,000. Final pricing comes after an on-site inspection that measures how much the slab has moved.",
      },
      {
        question: "Why are interior piers more expensive than exterior piers?",
        answer:
          "Exterior piers are installed by digging beside the foundation. Interior piers require cutting through flooring and breaking out a section of the slab, installing the pier, then patching the concrete and often the flooring. That extra demolition and restoration is why interior piers typically cost more than the $400 to $1,000 range for exterior piers.",
      },
      {
        question: "Do I need a structural engineer before foundation repair?",
        answer:
          "Not always, but it helps when estimates disagree, when you are buying or selling, or when the movement is severe. An engineer's report typically costs $400 to $800 and gives you an independent repair plan that contractors can bid against, so you are comparing the same scope of work.",
      },
      {
        question: "Can fixing drainage lower my foundation repair cost?",
        answer:
          "It can keep the problem from getting bigger. Gutters that drain at the slab and soil that slopes toward the house keep the clay cycling between wet and dry. Correcting grading and adding drains will not lift a slab that has already dropped, but it often limits how many piers are needed and protects the repair afterward.",
      },
    ],
    ctaType: "cost-check",
  },
  {
    path: "/foundation-leak-repair-cost-desoto-tx/",
    shortName: "Foundation Leak Repair Cost",
    category: "cost",
    summary:
      "What it typically costs to find and fix a leak under a DeSoto slab, from detection to spot repair, tunneling, and rerouting, plus what insurance may cover.",
    intro: [
      "A leak under a slab is two problems at once. There is the plumbing repair, and there is the question of whether the water has already softened the clay and moved the foundation. The cost of a foundation leak repair depends on where the leak is, what kind of pipe failed, how the plumber reaches it, and whether the slab needs structural work once the leak is fixed.",
      "Below are typical North Texas price ranges for each step, from leak detection through spot repair, tunneling, rerouting, and full repiping. These ranges help you budget and spot an estimate that seems off, but final pricing comes after an on-site inspection. A leak under the kitchen of a 1980s DeSoto slab home can be a very different job from one under a garage or near an outside wall.",
    ],
    sections: [
      {
        heading: "Typical Foundation Leak Repair Price Ranges",
        paragraphs: [
          "These are typical ranges for North Texas homes and are meant for planning, not as a quote. The actual cost depends on the pipe material, the leak's location, the access method, the flooring on top, and what the inspection finds about the slab. Final pricing is set after an on-site inspection and leak detection visit, once the leak has been located and the condition of the surrounding pipe is known.",
        ],
        bullets: [
          "Leak detection (pressure test, acoustic and thermal location): about $250 to $600",
          "Slab leak spot repair through the floor: about $1,500 to $4,000",
          "Tunneling under the slab: about $150 to $350 per linear foot",
          "Partial reroute of the affected line: about $2,000 to $6,000",
          "Whole-home repipe: about $4,500 to $12,000",
          "Foundation repair if the leak caused movement: often $4,000 to $15,000",
          "Structural engineer's report, if needed: about $400 to $800",
        ],
      },
      {
        heading: "Spot Repair, Tunneling, or Reroute: How the Access Method Changes Cost",
        paragraphs: [
          "A spot repair means cutting a small opening in the slab right over the leak, fixing the pipe, and patching the concrete. It is usually the least expensive option when the leak is pinpointed accurately. The catch is that it means tearing up whatever flooring sits on top, which becomes a real added cost if it is tile or hardwood that cannot be matched or patched cleanly.",
          "Tunneling goes under the slab from outside, so the floors stay intact and there is no indoor dust. It is priced by the foot, which makes it expensive for leaks near the center of the house. Rerouting abandons the leaking section and runs new pipe through the walls or attic. When a line has more than one leak, or the pipe is old and corroded, rerouting or repiping often makes more sense than chasing repairs one at a time.",
        ],
      },
      {
        heading: "What Makes a Foundation Leak Repair Cost More",
        paragraphs: [
          "The longer a leak runs, the more it tends to cost. Water under a slab saturates the clay, which swells and can heave part of the floor, or washes out soil and leaves voids. Either way, the repair can grow from a plumbing job into a plumbing job plus foundation work, drying, and flooring replacement. Catching a leak while it is small is the most reliable way to keep the total down.",
          "Pipe material matters as well. Many DeSoto homes from the 1970s and 1980s have cast-iron drain lines under the slab, and cast iron corrodes and cracks with age. A camera inspection of the drains often turns up more than one weak spot, which pushes the job toward a larger reroute or replacement. Supply line leaks are usually easier to isolate, while drain problems can be spread out along a run.",
        ],
        bullets: [
          "Leak location: near an exterior wall vs. under the middle of the house",
          "Supply line (pressurized) vs. drain line (cast iron or PVC)",
          "Flooring type over the leak: carpet, tile, or hardwood",
          "Number of leaks found and the overall age of the piping",
          "Whether the slab has already heaved, cracked, or settled",
          "Water damage cleanup, drying, and any mold remediation",
        ],
      },
      {
        heading: "Insurance and Foundation Leaks",
        paragraphs: [
          "Many homeowners policies treat a sudden plumbing leak differently than gradual settlement. Some will pay for access and tear-out, meaning the cost to break the slab or open walls to reach the pipe, plus resulting water damage. The pipe repair itself and any foundation settlement are often excluded, and slow leaks that went on for months may be denied as wear and tear.",
          "Check your policy wording or call your agent before work starts, so you know what to document. Keep the leak detection report, dated photos, and itemized invoices. If foundation movement is involved, the structural repair is usually your cost, so it helps to get the leak repair and the foundation repair priced as separate line items that an adjuster can review on their own.",
        ],
      },
    ],
    whenToCall: [
      "Your water bill jumped and nothing in the house explains it",
      "You can hear water running when every fixture is off",
      "A warm spot on the floor, or damp carpet with no visible source",
      "The water meter's leak indicator moves with all water turned off",
      "New cracks in tile or the slab near a bathroom or kitchen",
      "A sewer smell or slow drains in a slab home with original cast-iron lines",
    ],
    primaryService: "/foundation-leak-repair-desoto/",
    primaryCalculator: "/foundation-leak-repair-cost-calculator/",
    faqs: [
      {
        question: "How much does slab leak detection cost in DeSoto?",
        answer:
          "Leak detection in North Texas typically runs about $250 to $600. That usually covers a pressure test to confirm the leak and electronic location using acoustic or thermal equipment. Drain line problems may need a camera inspection as well. Final pricing comes after an on-site visit.",
      },
      {
        question: "Is tunneling better than breaking through the floor?",
        answer:
          "Tunneling saves your flooring and avoids indoor dust, but at roughly $150 to $350 per linear foot it gets expensive when the leak is far from an outside wall. A spot repair through the slab is often cheaper for leaks near the edge or under inexpensive flooring. The right choice depends on location and what sits on top.",
      },
      {
        question: "Will my insurance pay for a slab leak?",
        answer:
          "Some policies cover access and tear-out for a sudden plumbing leak, plus resulting water damage, but not the pipe repair or foundation settlement. Coverage varies by policy and by how long the leak was running. Review your policy or ask your agent before scheduling work, and keep all detection reports and photos.",
      },
      {
        question: "Should I repipe instead of repairing one leak?",
        answer:
          "If the home has had more than one slab leak, or the inspection finds corroded or failing pipe in several places, a partial reroute ($2,000 to $6,000) or whole-home repipe ($4,500 to $12,000) can cost less over time than repeated spot repairs. For a single leak in otherwise sound pipe, a spot repair is usually reasonable.",
      },
    ],
    ctaType: "cost-check",
  },

  // ---------------------------------------------------------------------------
  // PROBLEMS
  // ---------------------------------------------------------------------------
  {
    path: "/signs-of-foundation-leak/",
    shortName: "Signs of a Foundation Leak",
    category: "problems",
    summary:
      "The warning signs that water is leaking under or around your foundation, how to check for them yourself, and when to call for leak detection.",
    intro: [
      "A foundation leak rarely announces itself with a puddle. Water from a broken supply line or cracked drain under a slab goes straight into the soil, so the first clues are usually indirect: a higher water bill, a warm patch of floor, a musty smell in one room, or new cracks that show up faster than normal. Many homeowners only connect the dots after several of these appear at once.",
      "In DeSoto, where most homes sit on slabs over expansive clay, a hidden leak can do double damage. The plumbing keeps wasting water, and the wet clay swells or washes out under the foundation. This guide walks through the signs to watch for inside and outside, a meter check you can do today, and the point where it is time to bring in professional leak detection.",
    ],
    sections: [
      {
        heading: "Inside the House: Floors, Walls, and Fixtures",
        paragraphs: [
          "Start with the floors. Hot water line leaks often show up as a warm spot on tile or a section of floor that feels noticeably warmer than the rest of the room, sometimes warm enough that pets like to lie on it. Carpet that stays damp, wood flooring that cups or buckles, and grout lines that darken without any spill are all worth a closer look.",
          "Listen too. With every faucet, toilet, and appliance off, a quiet hiss or the sound of running water in a wall or under the floor points to a pressurized line. A water heater that runs more than usual is another clue on hot lines. Slow drains, gurgling toilets, or a sewer smell in a slab home can mean a drain line under the slab has cracked or separated.",
        ],
        bullets: [
          "Warm spots on tile or concrete floors",
          "Damp carpet or padding with no visible source",
          "Cupping, buckling, or lifting hardwood or laminate",
          "Running water sounds when all fixtures are off",
          "Musty odors or mildew in one area of the house",
          "New cracks in floor tile near kitchens or bathrooms",
        ],
      },
      {
        heading: "Outside the House: Soil, Slab Edges, and the Yard",
        paragraphs: [
          "Walk the perimeter after a stretch of dry weather. If one section of soil along the slab stays soft or dark while the rest of the yard is dry and cracked, water is coming from somewhere. A patch of grass that grows greener and faster than the rest, especially between the house and the street, can mark a leaking water service line between the meter and the house.",
          "Look at the slab edge and brick veneer too. Efflorescence, a white powdery residue on the foundation or lower brick, shows water moving through the concrete or masonry and leaving minerals behind. Soil pulling away from one side of the house while another side stays wet is a sign that moisture under the slab is uneven, and uneven moisture is what makes clay move a foundation.",
        ],
      },
      {
        heading: "The Water Meter Test You Can Do Today",
        paragraphs: [
          "The simplest check uses your water meter, usually in a box near the street. Turn off every fixture and appliance that uses water, including the ice maker, the washing machine, and the irrigation system. Then look at the meter's leak indicator, often a small triangle or dial. If it is turning while nothing in the house is running, water is flowing somewhere it should not be.",
          "For a more careful test, write down the meter reading, avoid using any water for one to two hours, and read it again. Any change points to a leak. If closing the main shutoff at the house stops the movement, the leak is inside the home or under the slab. If the meter still moves with the house shutoff closed, the leak is likely in the service line between the meter and the house.",
        ],
        bullets: [
          "Turn off all water-using fixtures and appliances",
          "Check the meter's leak indicator for movement",
          "Record the reading, wait 1 to 2 hours, and compare",
          "Close the house shutoff to narrow down where the leak is",
          "Compare this month's water bill with the same month last year",
        ],
      },
      {
        heading: "How a Leak Turns Into Foundation Damage",
        paragraphs: [
          "North Texas clay swells when it gets wet. A steady leak under one part of a slab can push that area up, which shows up as a hump in the floor, doors that bind, and cracks radiating out from one room. A drain leak can also wash fine soil away and leave a void, so that section of slab drops instead of rising. Both create the uneven movement that damages a house.",
          "Either way, the foundation starts moving unevenly, and the longer the leak runs the larger the affected area gets. That is why the order of repair matters: find and fix the leak first, let the soil stabilize, then evaluate whether the slab needs leveling. Lifting a foundation over an active leak just sets up the same problem again a few months later.",
        ],
      },
    ],
    whenToCall: [
      "The water meter moves with every fixture turned off",
      "Your water bill rose without a change in how you use water",
      "You feel a warm spot on the floor or hear water running in the slab",
      "Soil along one side of the house stays wet in dry weather",
      "New floor or wall cracks are appearing near plumbing fixtures",
    ],
    primaryService: "/foundation-leak-detection-desoto-tx/",
    primaryCalculator: "/foundation-leak-repair-cost-calculator/",
    faqs: [
      {
        question: "What is the most common sign of a foundation leak?",
        answer:
          "An unexplained rise in the water bill is the most common early sign, followed by warm spots on the floor from a hot water line leak. Many homeowners never see water at all, because it drains into the soil under the slab. A meter test is the quickest way to confirm whether water is flowing when nothing is on.",
      },
      {
        question: "Can a foundation leak cause cracks in my walls?",
        answer:
          "Yes. Water under a slab can make expansive clay swell and lift part of the foundation, or wash soil out and let a section sink. Both create uneven movement, which shows up as drywall cracks above doors and windows, sticking doors, and cracks in tile or brick near the affected area.",
      },
      {
        question: "How do professionals find a leak under a slab?",
        answer:
          "Leak detection usually starts with a pressure test to confirm which line is leaking. Technicians then use acoustic listening equipment and thermal imaging to pinpoint the spot, and a camera inspection for drain lines. The goal is to locate the leak closely enough that the repair opening is small.",
      },
      {
        question: "Is a foundation leak an emergency?",
        answer:
          "It can be. If water is surfacing indoors, the meter is spinning quickly, or you have no hot water and a warm floor, shut off the main valve and call right away. A slow leak is less urgent but should still be located soon, because every week of saturation gives the clay more time to move the slab.",
      },
    ],
    ctaType: "leak-estimate",
  },
  {
    path: "/foundation-cracks-after-rain/",
    shortName: "Foundation Cracks After Rain",
    category: "problems",
    summary:
      "Why new foundation and wall cracks often show up after heavy rain in DeSoto, which ones are normal, and which ones need an inspection.",
    intro: [
      "It surprises a lot of homeowners: after weeks of drought, a few days of heavy rain, and suddenly there are new cracks in the drywall, a gap at the brick, or a door that won't close. Rain did not break the foundation on its own. It changed the soil under it, and the soil moved the house. Understanding that chain makes it much easier to decide what to do next.",
      "DeSoto homes sit on expansive North Texas clay that shrinks and cracks in dry weather and swells hard when it gets wet. When a big spring or fall storm follows a long hot summer, the soil around the slab edges can rise quickly and unevenly. This guide explains what is happening, how to tell cosmetic cracks from structural ones, and what to fix first.",
    ],
    sections: [
      {
        heading: "Why Clay Soil Moves Your Foundation After a Storm",
        paragraphs: [
          "Expansive clay acts a bit like a sponge. During a dry summer it shrinks, pulls away from the slab, and opens deep cracks in the yard that you can sometimes slide a hand into. When heavy rain arrives, water runs straight down those cracks to the soil under the foundation edge, and the clay swells back up, often more on one side of the house than the other.",
          "The edges of a slab feel this the most, because the center stays shaded and its moisture stays more stable. A corner that gets the downspout runoff, or a side where the yard slopes toward the house, can heave while the rest of the slab stays put. That uneven push is what opens cracks in drywall, brick, and tile in the days after a storm.",
        ],
      },
      {
        heading: "Reading the Crack: Width, Shape, and Direction",
        paragraphs: [
          "Hairline cracks thinner than 1/16 inch are usually concrete shrinkage or minor seasonal movement, and they often open and close a little with the weather. Cracks 1/8 to 1/4 inch wide or wider, cracks that keep growing from one storm to the next, and cracks where one side sits higher than the other deserve an inspection, because they point to the foundation actually shifting.",
          "Shape matters as much as width. Stair-step cracks following the mortar joints in brick, diagonal cracks running from the corners of doors and windows, and horizontal cracks in the slab edge all point to movement rather than simple shrinkage. A pencil mark and date at each end of a crack, plus a photo with a ruler in the frame, makes it easy to tell whether it is getting longer.",
        ],
        bullets: [
          "Under 1/16 inch (hairline): usually shrinkage, monitor it",
          "1/8 to 1/4 inch or wider: have it inspected",
          "Stair-step cracks in brick: a common sign of differential movement",
          "Diagonal cracks at door and window corners: frame is shifting",
          "Displacement, where one side is higher: needs prompt attention",
          "Any crack that grows over a few weeks: document and call",
        ],
      },
      {
        heading: "Drainage Problems That Make It Worse",
        paragraphs: [
          "Most rain-related cracking comes back to water collecting at the foundation. Gutters that empty right at the slab, downspouts with no extensions, flower beds edged so they hold water, and soil that slopes toward the house all feed the clay along one wall. The more water that soaks in at one spot, the more that section swells compared to the rest of the house.",
          "Building code guidance calls for the ground to slope away from the house at least 6 inches over the first 10 feet, roughly a 5 percent grade. Many older DeSoto lots have settled over the years until the yard is flat or slopes back toward the slab. Fixing the grade and moving roof water away is often the least expensive way to slow future cracking.",
        ],
        bullets: [
          "Extend downspouts at least 5 to 10 feet from the slab",
          "Regrade so soil falls at least 6 inches in the first 10 feet",
          "Clear clogged gutters before storm season",
          "Avoid bed edging that traps water against the foundation",
          "Consider a French drain where water collects along a wall",
        ],
      },
      {
        heading: "What to Do in the Days After Heavy Rain",
        paragraphs: [
          "Take photos of every new crack with a ruler or tape measure in the frame, and write the date on a piece of painter's tape next to it. Check whether doors and windows that worked before the storm now stick or won't latch. Then walk outside and note where water is still standing a day or two later, since those spots usually line up with the worst cracking inside.",
          "After that, watch for a few weeks. Some cracks close partly as the soil settles into a new balance. Ones that stay open, widen, or come with sticking doors and sloping floors mean the foundation is moving more than normal seasonal cycling explains. That is the time to schedule an inspection rather than patching and waiting for the next storm.",
        ],
      },
    ],
    whenToCall: [
      "A new crack is wider than 1/8 inch or one side sits higher than the other",
      "Stair-step cracks appear in exterior brick after a storm",
      "Doors or windows that worked fine now stick or won't latch",
      "Water stands against the foundation for more than a day after rain",
      "Cracks reopen or grow every time there is a heavy storm",
    ],
    primaryService: "/foundation-crack-repair-desoto-tx/",
    primaryCalculator: "/foundation-crack-width-calculator/",
    faqs: [
      {
        question: "Is it normal to see new cracks after heavy rain?",
        answer:
          "Small hairline cracks that open and close with the seasons are common on North Texas clay. New cracks wider than 1/8 inch, stair-step cracks in brick, or cracks paired with sticking doors are not just normal settling and should be checked, especially if they appear after every big storm.",
      },
      {
        question: "Can too much rain damage a foundation?",
        answer:
          "Rain itself is not the problem. Water that collects against the slab is. When clay soaks up a lot of water quickly, it swells and can lift one side of the house more than the other. Good grading and gutters that carry water away reduce how much the soil moves.",
      },
      {
        question: "Should I seal a crack that appeared after rain?",
        answer:
          "Sealing a hairline crack keeps out moisture and insects, but it does not stop the movement that caused it. Before patching anything wider, measure it and watch it for a few weeks. If it keeps growing, the cause needs to be diagnosed, or the patch will simply crack again.",
      },
      {
        question: "Why do cracks sometimes close up again?",
        answer:
          "Expansive clay keeps moving as it wets and dries. A crack that opens during drought may close partway after rain, and the reverse can happen too. That back-and-forth is why a single measurement is not enough. Tracking a crack over several weeks shows whether it is seasonal or getting worse.",
      },
    ],
    ctaType: "inspection",
  },
  {
    path: "/water-pooling-near-foundation/",
    shortName: "Water Pooling Near Foundation",
    category: "problems",
    summary:
      "What standing water next to your slab means, why it matters on DeSoto clay, and practical fixes from downspout extensions to French drains.",
    intro: [
      "Water that sits against your house after a storm is more than a soggy flower bed. On DeSoto's expansive clay, every puddle along the slab feeds the soil under one edge of the foundation, and that edge swells and shrinks more than the rest of the house. Over a few seasons, that uneven movement shows up as cracks, sticking doors, and sloping floors.",
      "The good news is that pooling water is one of the most fixable foundation risks, and fixing it early is far cheaper than repairing the damage later. Most causes are visible from the yard: gutters, downspouts, grading, and landscaping. This guide covers how to find where the water comes from, how much slope you need, and when a drainage system makes sense.",
    ],
    sections: [
      {
        heading: "Where the Water Is Coming From",
        paragraphs: [
          "Go outside during a steady rain with an umbrella and watch what the water does. Roof runoff is usually the biggest source. A single downspout can dump hundreds of gallons in a storm, and if it empties onto a splash block right at the slab, that water soaks straight down along the foundation instead of moving away. Overflowing gutters do the same thing along a whole wall.",
          "Next, watch the ground. Water that runs toward the house instead of away tells you the grade is wrong. Look for low spots by the patio, the driveway edge, and side yards where neighboring lots drain onto yours. Also check sprinkler heads aimed at the foundation or leaking near it, which can keep one side wet even through a dry summer.",
        ],
        bullets: [
          "Downspouts emptying at or near the slab",
          "Overflowing or clogged gutters",
          "Soil that slopes toward the house or has settled flat",
          "Flower bed edging or mulch piled high against the wall",
          "Sprinkler heads spraying or leaking along the foundation",
          "Runoff from a neighbor's yard, driveway, or patio",
        ],
      },
      {
        heading: "How Much Slope Your Yard Needs",
        paragraphs: [
          "Building code guidance calls for the finished grade to drop at least 6 inches within the first 10 feet away from the foundation, about a 5 percent slope. On older lots, years of settling, added mulch, and new flower beds often erase that slope, leaving the yard flat or tilted back toward the house. Many 1970s and 1980s DeSoto homes have lost their original grade this way.",
          "You can check it with a string line, a line level, and a tape measure. Tie the string to a stake at the foundation, run it out 10 feet to a second stake, level it, and measure from the string to the ground at the far end. If the drop is less than 6 inches, water is not being moved away from the slab fast enough.",
        ],
      },
      {
        heading: "Fixes From Simple to Structural",
        paragraphs: [
          "Start with the low-cost items. Clean the gutters, add downspout extensions that discharge at least 5 to 10 feet from the slab, and pull back mulch and soil so the top edge of the foundation is visible. Point sprinklers away from the house. These steps alone fix a surprising number of pooling problems and cost little more than a weekend of work.",
          "If the yard itself is the problem, regrading adds fill near the house and shapes a swale to carry water around it. Where space is tight or a slope cannot be built, a French drain, a gravel trench with perforated pipe, collects water and carries it to a lower discharge point. French drains typically cost about $25 to $60 per linear foot in North Texas, with final pricing after an on-site look at the lot.",
        ],
        bullets: [
          "Clean gutters and add downspout extensions or buried drain lines",
          "Pull mulch and soil below the top of the slab",
          "Regrade to restore the 6-inches-in-10-feet slope",
          "Add a swale between houses to carry side-yard runoff",
          "Install a French drain where water collects against a wall",
          "Adjust or move sprinklers that hit the foundation",
        ],
      },
      {
        heading: "Signs the Pooling Has Already Affected the Foundation",
        paragraphs: [
          "If water has been collecting on one side for years, look for damage concentrated on that side. Stair-step cracks in the brick, gaps where the trim meets the brick, and doors on that wall that stick or swing on their own are common. Inside, check for diagonal drywall cracks and floors that slope toward or away from the wet side of the house.",
          "Fixing drainage is still worth doing in that case, because it protects any structural repair and slows further movement. But if the slab has already moved, drainage alone will not bring it back to level. An inspection with floor elevation readings shows how much movement has happened and whether piers or leveling are needed in addition to the drainage work.",
        ],
      },
    ],
    whenToCall: [
      "Water stands against the slab more than 24 hours after rain",
      "The yard slopes toward the house or sits flat along a wall",
      "Cracks or sticking doors are concentrated on the wet side",
      "Soil has washed out and exposed the bottom of the slab edge",
      "You have tried extensions and regrading and water still collects",
    ],
    primaryService: "/foundation-drainage-repair-desoto-tx/",
    primaryCalculator: "/foundation-drainage-slope-calculator/",
    faqs: [
      {
        question: "Is a little water near the foundation a problem?",
        answer:
          "Brief puddles that drain within a few hours are usually fine. Water that stands for a day or more, or that collects in the same spot every storm, keeps the clay along that wall wetter than the rest. Over time that difference causes uneven foundation movement, so it is worth fixing early.",
      },
      {
        question: "How far should downspouts discharge from the house?",
        answer:
          "A common recommendation is at least 5 to 10 feet from the foundation, onto ground that slopes away. In tight side yards, buried drain pipe can carry roof water to the front or back of the lot. The goal is to keep roof runoff from soaking the soil right next to the slab.",
      },
      {
        question: "Do I need a French drain or just regrading?",
        answer:
          "If you have room to build a proper slope away from the house, regrading is often enough. French drains make sense where the yard cannot be sloped, such as narrow side yards, areas next to patios, or spots that collect a neighbor's runoff. A drainage evaluation can tell you which applies to your lot.",
      },
      {
        question: "Can watering the foundation help in summer?",
        answer:
          "Keeping soil moisture steady during long droughts can reduce shrinkage, and some homeowners use soaker hoses a foot or two from the slab. The key word is steady. Overwatering or letting water pool creates the same problem in reverse, so use timers and check the soil before adding more.",
      },
    ],
    ctaType: "inspection",
  },
  {
    path: "/uneven-floors-foundation-problem/",
    shortName: "Uneven Floors",
    category: "problems",
    summary:
      "How to tell whether sloping or uneven floors in a DeSoto home point to slab settlement, pier and beam problems, or something less serious.",
    intro: [
      "Uneven floors are one of the clearer signs that a foundation has moved. You might notice a ball rolling to one side of a room, furniture that rocks, a dip near the middle of the house, or a hump in a hallway. In a slab home, it usually means part of the slab has settled or heaved. In a pier and beam home, it can mean piers have sunk or beams have sagged.",
      "Not every sloping floor is a structural emergency. Some older DeSoto homes settled a little decades ago and then stopped. What matters is how much the floor is off, whether it is getting worse, and what else is happening around it. This guide explains how to check your floors, what usually causes the problem, and what the repair options look like for each foundation type.",
    ],
    sections: [
      {
        heading: "Simple Ways to Check How Uneven Your Floors Are",
        paragraphs: [
          "A marble or golf ball is a quick first check, but it only tells you that a slope exists, not how much. A 4-foot level laid on the floor in several spots, with a tape measure under the low end, gives a rough number you can write down and compare later. Note the rooms and directions where the slope is worst, since the pattern says a lot about the cause.",
          "Also look at how the rest of the house is reacting. Doors that stick or swing open on their own, gaps under baseboards, cabinets pulling away from walls, and cracked floor tile all line up with floor movement. A professional inspection uses a manometer or laser level to map elevations across the whole floor, which shows the overall pattern of movement, not just one spot.",
        ],
        bullets: [
          "Roll a marble or ball in several directions in each room",
          "Lay a 4-foot level and measure the gap at the low end",
          "Look for gaps under baseboards or between floor and trim",
          "Check whether cracked tile lines up with the slope",
          "Note doors that drift open or shut on their own",
        ],
      },
      {
        heading: "Slab Homes: Settlement, Heave, and Plumbing Leaks",
        paragraphs: [
          "Most DeSoto homes from the 1970s through the 1990s are brick on a slab. When the clay under one corner dries and shrinks, that corner drops, and the floors slope toward it. When the soil under part of the slab gets wet, from a plumbing leak or poor drainage, it can swell and push the floor up into a hump, often near a bathroom or kitchen where pipes run.",
          "The fix depends on which one it is. Settlement is usually corrected with piers that lift the low section back toward level. Heave from a leak means the leak comes first, then time for the soil to stabilize, and only then any leveling. Lifting a slab without knowing which direction it moved can make the problem worse, which is why an elevation survey comes before any repair plan.",
        ],
      },
      {
        heading: "Pier and Beam Homes: Sagging and Sinking Supports",
        paragraphs: [
          "Older pier and beam homes have a crawl space under the floor. Floors in these homes go out of level when piers sink into soft soil, when wood shims shrink or rot, or when beams and joists sag because they are undersized, spaced too far apart, or damaged by moisture. Standing water or poor ventilation in the crawl space speeds up all of these problems.",
          "These problems are often easier to fix than slab movement, because the crawl space gives direct access to the supports. Repairs commonly include re-shimming with steel or composite shims, adding piers under sagging beams, and replacing damaged wood. Shimming and adjustment typically costs about $1,000 to $5,000 in North Texas, with final pricing after an on-site inspection of the crawl space.",
        ],
      },
      {
        heading: "When Uneven Floors Need a Professional",
        paragraphs: [
          "A small, stable slope in an older home may be something you can live with. A slope that is getting worse, one that comes with new cracks and sticking doors, or one that appeared suddenly deserves an inspection. Floors that feel soft or bouncy in a pier and beam home also need attention, because that can be moisture damage to the framing rather than a support problem.",
          "An inspection should give you an elevation map, a likely cause, and a repair plan you can understand. If you are considering a large repair, a structural engineer's report, typically $400 to $800, gives you an independent opinion before you commit. That report is also useful paperwork if you plan to sell the house in the next few years, since buyers and their inspectors will ask about the floors.",
        ],
      },
    ],
    whenToCall: [
      "A level shows more than a small slope across a room",
      "The slope has gotten noticeably worse within a season or two",
      "Uneven floors come with new wall cracks or sticking doors",
      "Tile is cracking along a line across the floor",
      "Floors feel soft, bouncy, or springy in a pier and beam home",
      "You see standing water or damp soil in the crawl space",
    ],
    primaryService: "/house-leveling-desoto-tx/",
    primaryCalculator: "/foundation-inspection-checklist/",
    faqs: [
      {
        question: "How much floor slope is too much?",
        answer:
          "There is no single number that applies to every house, but a slope you can feel when walking, or one that grows over time, deserves a closer look. Engineers usually look at the overall pattern of elevation differences across the floor rather than one spot. An inspection with an elevation survey gives you a clear answer.",
      },
      {
        question: "Can uneven floors be fixed without lifting the house?",
        answer:
          "Sometimes. In pier and beam homes, re-shimming and adding supports can level floors without major lifting. In slab homes, a low area caused by settlement usually needs piers. If the floor is humped from a plumbing leak, fixing the leak and letting the soil stabilize may be part of the solution.",
      },
      {
        question: "Are sloping floors common in older DeSoto homes?",
        answer:
          "Some settlement is common in older homes built on North Texas clay, particularly 1970s and 1980s slabs and older pier and beam houses. Many have shifted a little over decades and then stabilized. The concern is active movement, which shows up as new cracks, worsening slopes, and doors that change how they close.",
      },
      {
        question: "Will leveling my floors cause new cracks?",
        answer:
          "Lifting a foundation can open or close existing drywall and brick cracks as the house moves back toward level. That is normal and usually cosmetic. A careful contractor lifts gradually and checks plumbing before and after, since lifting can stress pipes under a slab.",
      },
    ],
    ctaType: "inspection",
  },
  {
    path: "/sticking-doors-foundation-problem/",
    shortName: "Sticking Doors",
    category: "problems",
    summary:
      "Why doors and windows start sticking when a foundation moves, how to tell foundation causes from humidity, and what to check before calling.",
    intro: [
      "A door that starts rubbing at the top corner, won't latch without a shove, or swings open by itself is often one of the first signs that a foundation is moving. The door itself didn't change. The frame around it did, because the floor or wall it sits in shifted slightly out of square. It is an early warning that is easy to brush off as an annoyance.",
      "That said, not every sticking door is a foundation problem. Humidity, loose hinges, and paint buildup cause plenty of them. This guide shows how to tell the difference, which door and window symptoms line up with foundation movement in DeSoto homes, and why it is worth checking early instead of just planing the door and moving on. A few minutes of checking now can save a much bigger repair later.",
    ],
    sections: [
      {
        heading: "How Foundation Movement Throws a Door Out of Square",
        paragraphs: [
          "Door frames are built square, with even gaps on all sides. When one side of the foundation drops or heaves, the wall above it racks slightly and the frame becomes a parallelogram instead of a rectangle. The door then rubs on one top corner and leaves a wider gap on the opposite side or at the bottom, and the latch stops lining up with the strike plate.",
          "On DeSoto clay, this often follows the seasons. Doors stick in late summer as the soil shrinks and one corner of the slab drops, then loosen up after fall rains bring the moisture back. If the same doors come and go every year by about the same amount, that is seasonal movement. If they get a little worse each year, the foundation is trending in one direction.",
        ],
      },
      {
        heading: "Foundation or Humidity? How to Tell",
        paragraphs: [
          "Humidity makes wood doors swell fairly evenly, so they tend to rub along a whole edge, especially exterior doors and bathroom doors, and they ease up when the air dries out or the AC runs for a few days. Foundation movement creates uneven gaps instead: tight at one top corner, open at the other, with the latch no longer lining up with the strike plate.",
          "Check the gap around the door with a flashlight. A slanted or tapered gap at the top, a strike plate you have already had to move, or a diagonal crack running from the corner of the door frame up toward the ceiling all point to structural movement. Several doors sticking in the same part of the house at the same time is another strong clue.",
        ],
        bullets: [
          "Tapered gap at the top of the door (wide on one side, tight on the other)",
          "Latch hits above or below the strike plate",
          "Diagonal drywall cracks from the corners of the frame",
          "Several doors on the same side of the house affected",
          "Windows that are hard to open or show gaps at one corner",
          "Interior doors that swing open or shut on their own",
        ],
      },
      {
        heading: "Quick Fixes That Hide the Real Problem",
        paragraphs: [
          "Tightening hinge screws is reasonable, and sometimes it is all a door needs. Planing the door, moving the strike plate, or shimming a hinge, though, only adjusts the door to fit a frame that is out of square. If the foundation keeps moving, the door will stick again, and each adjustment makes it harder to get a clean fit once the foundation is eventually repaired.",
          "Before you trim anything, take a photo of the gaps and mark the date on a piece of tape inside the frame. Check again in a few weeks and after the next big change in weather. That record is useful for an inspector, and it helps show whether the problem is stable, seasonal, or steadily getting worse over time. Note which doors are affected, too, since the pattern points to the part of the slab that is moving.",
        ],
      },
      {
        heading: "Other Early Warning Signs to Look For",
        paragraphs: [
          "Sticking doors rarely show up alone. Walk the house and look for cracks above door frames and at window corners, gaps between the ceiling and the top of interior walls, and baseboards separating from the floor. Outside, check the brick for stair-step cracks and look for gaps where window frames meet the masonry. Write down what you find and where.",
          "Catching movement at this stage is useful. Repairs are usually smaller and cheaper when the cause, often drainage or a plumbing leak, is found before the slab settles further. A foundation inspection checklist can help you organize what you see room by room before scheduling a visit, so the inspection focuses on the right areas from the start and nothing you noticed gets missed.",
        ],
      },
    ],
    whenToCall: [
      "Several doors in one area of the house start sticking at the same time",
      "Door gaps are tapered or the latch no longer lines up",
      "Diagonal cracks run from door or window corners",
      "Doors you adjusted last year are sticking again",
      "Sticking doors come with sloping floors or exterior brick cracks",
    ],
    primaryService: "/foundation-inspection-desoto-tx/",
    primaryCalculator: "/foundation-inspection-checklist/",
    faqs: [
      {
        question: "Do sticking doors always mean foundation problems?",
        answer:
          "No. Humidity, loose hinges, and thick paint cause many sticking doors. Foundation movement is more likely when the gap around the door is uneven, the latch no longer lines up, several doors in one area are affected, or there are diagonal cracks at the corners of the frame.",
      },
      {
        question: "Why do my doors stick in summer but not in winter?",
        answer:
          "On North Texas clay, the soil shrinks during hot, dry summers and swells when the rains return. A slab can drop a little at the edges in late summer and recover in fall, which pulls frames out of square and then back. Seasonal sticking is common, but it should not get worse each year.",
      },
      {
        question: "Should I plane a sticking door?",
        answer:
          "Only after you know why it is sticking. If the cause is foundation movement, planing makes the door fit a frame that is out of square, and once the foundation is repaired the door may leave a gap. Tighten hinges first, document the gaps, and get an inspection if the problem is spreading.",
      },
      {
        question: "Will foundation repair fix my sticking doors?",
        answer:
          "Often, but not always completely. Leveling the foundation moves frames back toward square, and many doors start working again. Doors that were planed or had strike plates moved may need readjusting afterward. Expect a carpenter's touch-up as part of finishing a foundation repair.",
      },
    ],
    ctaType: "schedule",
  },
  {
    path: "/foundation-settlement-repair/",
    shortName: "Foundation Settlement",
    category: "problems",
    summary:
      "What foundation settlement is, why it happens on North Texas clay, the difference between normal and damaging settlement, and how it is repaired.",
    intro: [
      "Every house settles a little after it is built. Foundation settlement becomes a problem when one part of the house sinks more than another. That differential settlement is what cracks brick, racks door frames, and tilts floors, and it is the most common reason DeSoto homeowners end up calling for foundation repair. The good news is that it is also one of the best understood problems to fix.",
      "In this area, settlement is driven mostly by the expansive clay under the slab losing moisture, along with poor drainage, large trees, and the occasional plumbing leak that washes soil away. This guide explains what is happening under the house, how settlement is measured and repaired, and what you can do afterward to keep it from coming back, including the simple drainage habits that matter most on clay soil.",
    ],
    sections: [
      {
        heading: "Uniform vs. Differential Settlement",
        paragraphs: [
          "If a whole house sank evenly by an inch, you would probably never notice. Walls would stay square, doors would still close, and the brick would not crack. That is uniform settlement, and it is usually harmless. Some uniform settlement happens in the first years after construction as the soil adjusts to the weight of the house, and then it slows down or stops.",
          "Differential settlement is when one section drops more than the rest, often a corner or one side of the house. The structure has to bend to follow it, so cracks open where the stress concentrates: above doors and windows, in brick mortar joints, and in floor tile. Repair is aimed at differential settlement, bringing the low area back up and supporting it so it does not drop again.",
        ],
      },
      {
        heading: "What Causes Settlement in DeSoto Homes",
        paragraphs: [
          "North Texas clay shrinks as it dries. During long summers, the soil under the edges of a slab gives up moisture and pulls back, and that edge loses some of its support. Large trees close to the house make this worse, because their roots draw water out of the soil around the foundation, especially in the hottest months when the clay is already dry.",
          "Water in the wrong place causes settlement too. A drain line leak under the slab can wash out fine soil and leave a void. Downspouts and poor grading can soften the soil on one side, which then shrinks hard in the next drought. Many DeSoto homes are now 30 to 50 years old, and decades of these wet and dry cycles add up to measurable settlement.",
        ],
        bullets: [
          "Clay shrinkage during drought, especially at slab edges and corners",
          "Large trees within about one mature canopy width of the house",
          "Poor grading or downspouts that keep one side wet",
          "Under-slab plumbing leaks that wash out soil",
          "Fill soil that was not compacted well during construction",
        ],
      },
      {
        heading: "How Settlement Is Repaired",
        paragraphs: [
          "Most settlement repair on slab homes uses piers. Steel push piers or concrete pressed pilings are driven down through the active clay toward more stable soil, then the slab is lifted with hydraulic jacks and set on the piers. Exterior piers are installed by digging along the outside of the foundation. Interior piers require breaking through the slab and cost more because of the extra demolition and patching.",
          "Typical North Texas pricing is roughly $400 to $1,000 per exterior pier, with overall repairs often in the $4,000 to $15,000 range, and final pricing after an on-site inspection. A good repair plan also deals with the cause, such as drainage corrections, a root barrier near large trees, or a plumbing repair, so the new support is not fighting the same conditions that caused the settlement.",
        ],
      },
      {
        heading: "Keeping Settlement From Coming Back",
        paragraphs: [
          "Piers support the parts of the house they sit under, but the rest of the slab still rests on clay that reacts to moisture. The goal after repair is to keep the soil moisture around the house as even as possible through the year. That means good grading, gutters with extensions, and not letting flower beds or sprinklers drown one side of the house.",
          "During long dry spells, steady watering a foot or two from the foundation can limit shrinkage, as long as it does not create puddles. Keep new trees well away from the house. And keep watching the same signs that brought you to repair in the first place: new cracks, sticking doors, and changes in the floor. Catching a new problem early keeps it small.",
        ],
      },
    ],
    whenToCall: [
      "One corner or side of the house looks lower than the rest",
      "Stair-step cracks in brick or gaps at window frames are widening",
      "Floors slope toward one area of the house",
      "Soil has pulled away from the slab, leaving a visible gap",
      "A large tree sits close to the side of the house showing damage",
    ],
    primaryService: "/foundation-leveling-desoto-tx/",
    primaryCalculator: "/foundation-repair-cost-calculator/",
    faqs: [
      {
        question: "How do I know if my house is still settling?",
        answer:
          "Mark the ends of a few cracks with a pencil and the date, and take photos with a ruler in the frame. Check them every few weeks. Cracks that lengthen or widen, and doors that keep getting worse, mean the house is still moving. An elevation survey repeated over time gives a precise answer.",
      },
      {
        question: "Can settlement stop on its own?",
        answer:
          "Sometimes. A house on stable fill may settle early and then stop. On expansive clay, though, movement tends to follow the weather year after year. If the cause is drainage, a tree, or a leak, fixing that cause can slow or stop further settlement, but it will not lift areas that already dropped.",
      },
      {
        question: "Is settlement covered by homeowners insurance?",
        answer:
          "Usually not. Most standard policies exclude settling, soil shrinkage, and earth movement. If a sudden plumbing leak caused the soil washout, some policies may cover access and tear-out or water damage. Check your policy or talk with your agent before assuming either way.",
      },
      {
        question: "Do trees really cause foundation settlement?",
        answer:
          "Large trees pull a lot of water from the soil, and on shrink-swell clay that can dry out the ground under the nearest part of the slab. That side then drops more than the rest. Root barriers and careful watering can help. Removing a large tree suddenly can also cause the soil to swell, so get advice first.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // COMPARISONS
  // ---------------------------------------------------------------------------
  {
    path: "/slab-leak-vs-foundation-leak/",
    shortName: "Slab Leak vs Foundation Leak",
    category: "comparisons",
    summary:
      "The difference between a slab leak and a foundation leak, how each shows up, who fixes what, and why the two often happen together in DeSoto homes.",
    intro: [
      "Homeowners use slab leak and foundation leak almost interchangeably, and contractors sometimes do too. The distinction matters, though, because it changes who you call first and what the repair involves. A slab leak is a plumbing failure in a pipe under or inside the concrete slab. A foundation leak usually means outside water getting into or under the foundation, through cracks, poor drainage, or saturated soil.",
      "In a DeSoto slab home, the two often overlap. A slab leak soaks the clay, the clay moves the foundation, and the foundation cracks, which then lets in outside water. This guide breaks down the difference between the two, the signs of each, who handles which repair, and the right order to fix them when both are present, so you do not pay for the same problem twice.",
    ],
    sections: [
      {
        heading: "What a Slab Leak Is",
        paragraphs: [
          "A slab leak is a leak in a water supply line or drain line that runs under or through the concrete slab. Supply lines are pressurized, so a leak there runs constantly and shows up as a higher water bill, a moving meter, warm spots on the floor if it is a hot line, or the faint sound of running water when everything in the house is turned off.",
          "Drain line leaks only run when water goes down the drain, so they are slower and harder to spot. In 1970s and 1980s DeSoto homes, cast-iron drain lines under the slab are a common source as they corrode and crack with age. Slab leaks are found with pressure testing, acoustic and thermal equipment, and camera inspection, and the pipe repair itself is plumbing work.",
        ],
      },
      {
        heading: "What a Foundation Leak Usually Means",
        paragraphs: [
          "Foundation leak is a broader term. Most often it means water from outside, such as rain, roof runoff, or irrigation, getting into or under the foundation. On a slab home, that might be water seeping through a crack at the slab edge, water entering at the base of a wall, or soil that stays saturated along one side of the house because of poor grading or downspouts.",
          "In pier and beam homes, it can mean water collecting in the crawl space after storms, which softens the soil under the piers and rots wood framing. The repair focus is drainage and structure: regrading, gutters, French drains, sealing cracks, crawl space moisture control, and leveling if the foundation has already moved. The plumbing itself may be perfectly fine, and a pressure test can confirm that before any money goes into plumbing work.",
        ],
      },
      {
        heading: "Why the Two Often Show Up Together",
        paragraphs: [
          "North Texas clay reacts to water no matter where it comes from. A slab leak saturates the soil from below, and that soil can swell and lift part of the slab or wash out and let it sink. The result looks exactly like a foundation problem, with cracks, sticking doors, and uneven floors, even though it started as a plumbing failure under one room.",
          "It can also run the other way. Foundation movement can stress and crack pipes under the slab, especially brittle old cast iron, and a crack in the slab can open a path for outside water. That is why a good inspection checks both the plumbing and the structure. Fixing only one side often means paying for the other a year or two later.",
        ],
      },
      {
        heading: "The Right Order of Repairs",
        paragraphs: [
          "When both problems exist, fix the leak first. Leveling a foundation over an active leak puts the new piers on soil that is still changing, and the lift may not hold. After the plumbing repair, give the soil time to dry and stabilize, then re-check floor elevations before deciding on structural work. Sometimes the movement turns out to be smaller than it first looked.",
          "If you are not sure which problem you have, start with a meter test and a visual check of drainage around the house. A leak detection visit, typically $250 to $600 in North Texas, answers the plumbing question. An inspection with elevation readings answers the structural one. Together they give you a plan that fixes the cause instead of just the symptoms.",
        ],
        bullets: [
          "Step 1: Confirm or rule out a plumbing leak with a meter test and leak detection",
          "Step 2: Repair the leak by spot repair, tunneling, or reroute",
          "Step 3: Correct drainage around the slab",
          "Step 4: Let the soil stabilize and re-measure floor elevations",
          "Step 5: Level or pier the foundation only if movement remains",
        ],
      },
    ],
    comparison: {
      columns: ["Factor", "Slab Leak", "Foundation Leak"],
      rows: [
        ["Source of water", "Supply or drain pipe under or in the slab", "Rain, runoff, irrigation, or groundwater from outside"],
        ["Common first sign", "Higher water bill, moving meter, warm floor spots", "Water at the slab edge, damp crawl space, cracks after rain"],
        ["How it is found", "Pressure test, acoustic and thermal location, camera", "Visual inspection, grading check, crack and elevation survey"],
        ["Who repairs it", "Plumber, often with a foundation contractor's input", "Foundation and drainage contractor"],
        ["Typical repair", "Spot repair, tunneling, reroute, or repipe", "Drainage fixes, crack sealing, French drains, leveling"],
        ["Typical cost range", "Detection $250-$600; spot repair $1,500-$4,000", "French drain $25-$60/ft; foundation repair often $4,000-$15,000"],
        ["Insurance", "Access and tear-out may be covered for a sudden leak", "Settlement and drainage damage usually excluded"],
      ],
    },
    whenToCall: [
      "Your water meter moves with every fixture off",
      "Warm floor spots or running-water sounds inside the house",
      "Water seeps in at the slab edge or collects in the crawl space",
      "New foundation cracks appear near bathrooms or the kitchen",
      "You have both a high water bill and new structural cracks",
    ],
    primaryService: "/slab-leak-repair-desoto-tx/",
    primaryCalculator: "/slab-leak-repair-cost-calculator/",
    faqs: [
      {
        question: "Is a slab leak the same as a foundation leak?",
        answer:
          "Not exactly. A slab leak is a pipe leaking under or inside the slab. A foundation leak usually refers to outside water getting into or under the foundation. They are often connected, since a slab leak can move the foundation and foundation movement can crack pipes, but the repairs are different.",
      },
      {
        question: "Who should I call first, a plumber or a foundation company?",
        answer:
          "If the meter shows water flowing with everything off, or you feel warm floor spots, start with leak detection. If the plumbing checks out and you see drainage problems or cracks after rain, start with a foundation inspection. When both signs are present, the leak gets fixed first.",
      },
      {
        question: "Can a slab leak cause foundation damage?",
        answer:
          "Yes. Water from a slab leak saturates the clay under the house. Expansive clay can swell and lift part of the slab, or the flow can wash soil away and leave a void. Either one creates uneven movement that shows up as cracks, sticking doors, and sloping floors.",
      },
      {
        question: "Does insurance treat the two differently?",
        answer:
          "Often, yes. Some policies cover access and tear-out for a sudden plumbing leak, plus resulting water damage. Damage from settlement, poor drainage, or groundwater is usually excluded. Policies vary, so check yours and keep leak detection reports and photos if a pipe is involved.",
      },
    ],
    ctaType: "leak-estimate",
  },
  {
    path: "/foundation-repair-vs-replacement/",
    shortName: "Foundation Repair vs Replacement",
    category: "comparisons",
    summary:
      "When a damaged foundation can be repaired, when replacement is on the table, and how cost, disruption, and long-term results compare.",
    intro: [
      "When a foundation problem looks serious, it is natural to wonder whether the whole thing needs to be replaced. For most homes, the answer is no. Piers, leveling, drainage fixes, and targeted repairs handle the large majority of foundation problems in North Texas, at a fraction of the cost and disruption of tearing out and rebuilding a foundation under an occupied house.",
      "Replacement does come up in a few situations, mostly older pier and beam homes with badly deteriorated supports, or slabs with structural failures that cannot be corrected by lifting. This guide compares the two approaches on cost, timeline, and results, and lists the questions to ask before you accept a recommendation either way. A clear understanding of both options makes it much easier to judge any estimate you receive.",
    ],
    sections: [
      {
        heading: "What Foundation Repair Covers",
        paragraphs: [
          "Repair means keeping the existing foundation and correcting what went wrong with it. On slab homes that usually means installing piers under the settled areas and lifting the slab back toward level, sealing cracks, and fixing the drainage or plumbing problems that caused the movement in the first place. The concrete itself is usually sound. It just lost support underneath.",
          "On pier and beam homes, repair can include re-shimming, replacing failed piers, adding supports under sagging beams, and replacing rotted sills or joists. Typical North Texas foundation repair runs about $4,000 to $15,000, with minor jobs from around $1,800 and large jobs $25,000 or more. Final pricing comes after an on-site inspection of the specific house, because pier count, access, and the condition of the framing vary so much from one home to the next.",
        ],
      },
      {
        heading: "When Replacement Comes Into the Picture",
        paragraphs: [
          "Full replacement means supporting or lifting the house and building a new foundation under it. It is a major construction project that involves temporary support, disconnecting utilities, engineering, permits, and often months of work. Because each project is so different, it is priced individually and usually costs many times more than a typical repair, before counting the cost of living elsewhere during the work.",
          "It is generally considered only when the existing foundation cannot carry the house anymore: a slab with widespread structural cracking and failed concrete, or a pier and beam structure where most piers, beams, and framing have deteriorated. Even then, partial replacement of the worst sections is often an option worth pricing before committing to replacing everything. Ask for both options in writing so you can compare them side by side.",
        ],
        bullets: [
          "Widespread structural failure of the concrete, not just cracks",
          "Pier and beam framing with extensive rot or insect damage",
          "Foundation that was badly under-built and cannot be reinforced",
          "Previous repairs that failed repeatedly in many locations",
          "Major remodel or addition where the old foundation is inadequate",
        ],
      },
      {
        heading: "How to Decide Between the Two",
        paragraphs: [
          "Start with a full inspection that includes floor elevations, a plumbing test, and a look at drainage. If a contractor recommends replacement, ask exactly why repair will not work, which specific failures they found, and get it in writing. For a decision this large, an independent structural engineer's report, typically $400 to $800, is worth the cost and protects you from being oversold.",
          "Compare the long-term picture too. A well-done repair with drainage corrections can hold for many years. Replacement resets the foundation, but the new one still sits on the same expansive clay as the old one, so drainage and moisture control around the house matter either way. Neither option removes the need for good maintenance afterward, including gutters, grading, and steady soil moisture during drought.",
        ],
      },
      {
        heading: "Insurance, Resale, and Paperwork",
        paragraphs: [
          "Standard homeowners policies usually do not cover settlement-related repair or replacement, since soil movement and settling are common exclusions. Some policies do cover access and tear-out for a sudden plumbing leak, which may apply if a leak contributed to the damage. Check your policy or ask your agent before planning either path, so you know what is likely to be out of pocket.",
          "For resale, buyers and their inspectors want documentation: the engineer's report, the repair plan, before and after elevation readings, permits if required, and written warranty terms that state whether they transfer to a new owner. Keeping a complete file helps whichever route you choose and makes the conversation with a future buyer much easier. Store copies digitally so they are easy to share when the time comes.",
        ],
      },
    ],
    comparison: {
      columns: ["Factor", "Foundation Repair", "Foundation Replacement"],
      rows: [
        ["Typical use", "Settlement, cracks, uneven floors, most movement", "Severe structural failure or deteriorated supports"],
        ["Typical cost", "Often $4,000-$15,000; large jobs $25,000+", "Priced per project; usually many times a typical repair"],
        ["Timeline", "Often a few days to a couple of weeks", "Weeks to months, with temporary support"],
        ["Disruption", "Mostly outside work; interior piers need slab breakout", "Major: utilities disconnected, house may be vacated"],
        ["What stays", "Existing slab or framing is kept and supported", "Foundation is removed and rebuilt"],
        ["Engineer involvement", "Recommended for large or disputed jobs", "Required for design and permitting"],
        ["Drainage still matters", "Yes, to protect the repair", "Yes, the new foundation sits on the same clay"],
      ],
    },
    whenToCall: [
      "A contractor has recommended replacement and you want a second look",
      "Cracks run through the slab with large displacement or crumbling concrete",
      "Pier and beam floors are soft and framing looks rotted",
      "Previous foundation repairs have failed in several places",
      "You are planning an addition or major remodel on an older foundation",
    ],
    primaryService: "/foundation-repair-desoto-tx/",
    primaryCalculator: "/foundation-repair-cost-calculator/",
    faqs: [
      {
        question: "Can most foundations be repaired instead of replaced?",
        answer:
          "Yes. On North Texas clay, most problems come from soil movement, and piers, leveling, and drainage corrections address that without replacing the foundation. Replacement is generally reserved for severe structural failure or pier and beam systems where most of the supports and framing have deteriorated.",
      },
      {
        question: "How do I know if a replacement recommendation is legitimate?",
        answer:
          "Ask the contractor to explain in writing why repair will not work and what specific failures they found. Then get an independent structural engineer's report, typically $400 to $800 in North Texas. If the engineer's plan calls for repair, you can have contractors bid on that scope.",
      },
      {
        question: "Does a repaired foundation hurt resale value?",
        answer:
          "A documented, professional repair is usually far better for resale than an unrepaired problem. Buyers want to see the inspection, repair plan, elevation readings, and any transferable warranty. Unrepaired movement tends to create bigger price negotiations than a repair with clear paperwork.",
      },
      {
        question: "Is partial replacement an option?",
        answer:
          "Often, especially with pier and beam homes. Failed piers, beams, or sections of framing can be replaced while the rest of the structure stays in place. On slabs, a badly damaged section can sometimes be removed and repoured. An inspection shows whether a targeted approach will work.",
      },
    ],
    ctaType: "inspection",
  },
  {
    path: "/diy-foundation-crack-repair-vs-professional/",
    shortName: "DIY vs Professional Crack Repair",
    category: "comparisons",
    summary:
      "Which foundation cracks you can safely patch yourself, which need a professional, and how the cost and results compare.",
    intro: [
      "Hardware stores sell epoxy and polyurethane crack kits, and for some cracks they work well. A hairline shrinkage crack in a slab edge or a garage floor is a reasonable weekend project. The trouble starts when a DIY patch is used on a crack caused by active movement. The patch hides the symptom while the foundation keeps moving underneath it, and the crack usually comes back.",
      "This guide helps you sort cracks into the ones you can handle and the ones that need a professional look. It explains what a DIY patch can and cannot do, what a professional inspection adds, and how the cost and results compare, so you can make a sensible call for your DeSoto home instead of guessing. A few simple measurements usually make the answer clear.",
    ],
    sections: [
      {
        heading: "Cracks That Are Usually Safe to Patch Yourself",
        paragraphs: [
          "Concrete shrinks as it cures, so most slabs develop a few fine cracks in their first years. Hairline cracks under 1/16 inch wide, with both sides level and no sign of growth over several months, are usually cosmetic. Sealing them keeps out water and insects and makes them easier to monitor. They are common on garage floors, patios, and the exposed edge of a slab.",
          "Before patching, measure the crack, photograph it with a ruler in the frame, and note the date. If it has not changed over a few months and there are no other signs of movement in the house, a DIY sealant is a reasonable choice. Clean the crack, follow the product directions closely, and keep checking the area after the repair.",
        ],
        bullets: [
          "Hairline cracks under 1/16 inch wide",
          "No height difference between the two sides of the crack",
          "No growth over several months of tracking",
          "No sticking doors, sloping floors, or brick cracks elsewhere",
          "Vertical shrinkage cracks in a slab edge or garage floor",
        ],
      },
      {
        heading: "Cracks That Need a Professional",
        paragraphs: [
          "Cracks 1/8 to 1/4 inch wide or wider point to movement rather than shrinkage. So do stair-step cracks in brick, horizontal cracks, cracks noticeably wider at one end than the other, and any crack where one side sits higher than the other. These are symptoms of the foundation shifting, and sealing them does nothing about the soil, drainage, or plumbing problem that is causing it.",
          "Professionals look at the whole house, not just the crack. An inspection measures floor elevations, checks for plumbing leaks and drainage problems, and works out why the crack formed. The repair might be crack injection, but it might also be piers, drainage work, or a leak repair, with the crack sealed at the end once the movement behind it has been stopped.",
        ],
        bullets: [
          "Cracks 1/8 inch or wider, or growing over time",
          "Stair-step cracks in brick or block",
          "Horizontal cracks or cracks wider at one end",
          "Displacement, where one side sits higher than the other",
          "Water coming through the crack",
          "Cracks along with sticking doors or uneven floors",
        ],
      },
      {
        heading: "What DIY Kits Can and Cannot Do",
        paragraphs: [
          "Epoxy kits bond the two sides of a crack together and can restore some strength to a stable crack. Polyurethane kits stay flexible and are better at sealing out water in cracks that move slightly with the seasons. Both work best on clean, dry cracks with injection that reaches the full depth of the concrete, which is harder to get right at home than the packaging suggests.",
          "Neither will stop a foundation from settling or heaving. On expansive clay, a rigid epoxy repair over an active crack often just moves the crack a few inches over. A professional crack injection typically costs about $300 to $800 per crack in North Texas, which is worth it when the crack needs proper preparation, deeper injection, or written documentation of the repair.",
        ],
      },
      {
        heading: "The Real Cost Comparison",
        paragraphs: [
          "A DIY kit costs far less up front, often under a hundred dollars. If the crack is cosmetic and stable, that is the better deal and there is no reason to pay more. The math changes when the crack is a symptom. Patching it can delay finding a plumbing leak or a drainage problem, and the foundation repair later can be larger than it would have been if caught early.",
          "A sensible middle path is to measure the crack with the crack width calculator, fix obvious drainage issues like downspouts and grading, and keep tracking. If anything grows or new symptoms appear, schedule an inspection before patching further. Final pricing for any professional repair always comes after an on-site inspection, not from photos alone, because the cause of a crack is rarely visible from the crack itself.",
        ],
      },
    ],
    comparison: {
      columns: ["Factor", "DIY Crack Repair", "Professional Repair"],
      rows: [
        ["Best for", "Stable hairline cracks under 1/16 inch", "Cracks 1/8 inch or wider, growing, or displaced"],
        ["Typical cost", "Kit and supplies, often under $100", "About $300-$800 per crack; more if piers are needed"],
        ["Diagnosis", "Visual check only", "Elevation survey, plumbing and drainage check"],
        ["Addresses the cause", "No, seals the surface only", "Yes, finds and fixes the underlying movement"],
        ["Materials", "Retail epoxy or polyurethane kits", "Pro-grade injection, plus structural repair if needed"],
        ["Risk if wrong", "Hides active movement; damage grows", "Higher up-front cost for minor cracks"],
        ["Documentation", "Your own photos and notes", "Written findings useful for resale"],
      ],
    },
    whenToCall: [
      "A crack is 1/8 inch or wider, or has grown since you first measured it",
      "One side of the crack sits higher than the other",
      "A crack you patched has reopened or moved",
      "Stair-step cracks appear in exterior brick",
      "Water seeps through a crack after rain",
      "Cracks come with sticking doors or sloping floors",
    ],
    primaryService: "/foundation-crack-repair-desoto-tx/",
    primaryCalculator: "/foundation-crack-width-calculator/",
    faqs: [
      {
        question: "Can I fix foundation cracks myself?",
        answer:
          "For stable hairline cracks under 1/16 inch with no displacement and no other signs of movement, a DIY sealant is usually fine. Wider cracks, stair-step cracks in brick, and cracks that grow or have one side higher than the other point to movement and should be inspected before anything is patched.",
      },
      {
        question: "Does epoxy injection fix a foundation?",
        answer:
          "Epoxy bonds a crack and can restore strength to a stable section of concrete, but it does not stop soil movement. On North Texas clay, if the foundation is still settling or heaving, an epoxy-filled crack often cracks again nearby. The cause has to be addressed for the repair to last.",
      },
      {
        question: "How do I measure a foundation crack?",
        answer:
          "Use a crack width gauge, or compare the gap against a set of coins or feeler gauges. Measure at the widest point, take a photo with a ruler in frame, and mark the ends with a pencil and the date. Repeat every few weeks so you can see whether it is changing.",
      },
      {
        question: "Will a DIY patch cause problems when I sell?",
        answer:
          "A neat, documented repair of a hairline crack usually is not a concern. A patch over a structural crack can raise questions if an inspector finds signs of movement around it. Keeping photos and measurements from before and after the patch helps show what the crack was and that it has stayed stable.",
      },
    ],
    ctaType: "inspection",
  },
];
