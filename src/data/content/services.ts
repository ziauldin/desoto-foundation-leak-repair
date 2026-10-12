// Starter copy for core + sub service pages (DeSoto, TX only).
// Paths must match src/data/topical-map.ts exactly.
import type { ServiceContent } from "@/types/content";

export const serviceContent: ServiceContent[] = [
  // ---------------------------------------------------------------------------
  // CORE: Foundation Leak Repair (primary money page)
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-leak-repair-desoto/",
    shortName: "Foundation Leak Repair",
    summary:
      "Water under or around your slab, from a broken pipe or from runoff, can move a DeSoto foundation fast. We find the source, stop it, and repair the damage it caused.",
    intro: [
      "A foundation leak is any steady source of water that ends up under or against your foundation. In DeSoto that usually means one of two things: a pressurized supply line or a drain line leaking beneath the slab, or surface water from roofs, gutters and poor grading soaking the soil along one side of the house. Either way, the clay under the home takes on water unevenly, swells in one area, and pushes or drops part of the slab out of level.",
      "Foundation leak repair is two jobs done in the right order. First the water source has to be found and stopped, whether that is a cracked cast-iron drain, a pinhole in a copper line, or a downspout dumping against the slab. Then the structure is checked for movement and repaired if needed. Leveling a foundation while a leak is still feeding the soil underneath is wasted money, because the soil keeps moving after the crew leaves.",
      "If you are seeing water where it should not be, a jump in your water bill, or cracks that appeared quickly, call us before the problem spreads. We will tell you what we think the source is, what testing is needed to confirm it, and what the repair options look like, in writing, before any work starts.",
    ],
    signs: [
      {
        title: "Water bill climbing with no change in use",
        text: "A steady increase in usage often points to a supply line leaking under the slab, where you will never see the water.",
      },
      {
        title: "Warm or damp spots on the floor",
        text: "A warm patch on tile or a damp section of carpet can mean a hot water line is leaking directly beneath it.",
      },
      {
        title: "Sound of running water with fixtures off",
        text: "Hissing or trickling inside a wall or under a floor when nothing is running is a common sign of a pressurized leak.",
      },
      {
        title: "New cracks that showed up quickly",
        text: "Drywall or brick cracks that appear over weeks rather than years often follow a sudden change in soil moisture, such as a leak.",
      },
      {
        title: "Wet soil or pooling along one side of the house",
        text: "Soggy ground near the slab that never dries out can come from a leak below grade or from water draining toward the foundation.",
      },
      {
        title: "Musty odor or mildew at baseboards",
        text: "Moisture wicking up through the slab or into wall cavities often shows up as smell and staining before you see standing water.",
      },
    ],
    whyItMatters: [
      "DeSoto homes sit on highly expansive North Texas clay. When that clay gets wet it swells, and when it dries it shrinks and pulls away from the slab. A leak creates a permanent wet zone in one spot, so one part of the foundation heaves while the rest moves with the seasons. That uneven movement is what cracks slabs, brick and drywall.",
      "Much of DeSoto's housing was built from the 1970s through the 1990s on slab foundations. Many of those homes still have original cast-iron drain lines under the slab, which corrode and crack with age, and supply lines that can wear through where they rub against concrete or gravel. Newer homes are not immune either, since poor grading and short downspouts are common across the city.",
      "The longer a leak runs, the larger the affected soil area gets and the more the repair costs. Catching it early often means a plumbing repair and some minor patching instead of a plumbing repair plus foundation piers.",
    ],
    included: [
      {
        title: "Leak source testing",
        text: "Water meter checks, static pressure tests on supply lines and hydrostatic tests on drain lines to confirm whether a leak is under the slab.",
      },
      {
        title: "Electronic leak location",
        text: "Acoustic listening equipment and line tracing to pinpoint where the leak is so the repair opening is as small as possible.",
      },
      {
        title: "Line repair or reroute",
        text: "Spot repair through the slab, rerouting the line through the attic or walls, or tunneling under the slab, depending on the location and condition of the pipe.",
      },
      {
        title: "Foundation evaluation after the leak is stopped",
        text: "An elevation survey and crack review to see if the slab moved, followed by pier work only if the readings show it is needed.",
      },
      {
        title: "Exterior water control",
        text: "Downspout extensions, regrading or drainage work where surface water is part of the problem.",
      },
    ],
    process: [
      {
        title: "Call and describe what you are seeing",
        text: "Tell us about the water bill, wet spots, sounds or cracks. We will help you decide if you should shut off the water before we arrive.",
      },
      {
        title: "Test and locate the leak",
        text: "We run pressure or hydrostatic tests to confirm the leak, then use electronic location to find it under the slab.",
      },
      {
        title: "Stop the water",
        text: "We review spot repair, reroute and tunneling options with you, with pricing in writing, and repair the line you choose.",
      },
      {
        title: "Check the foundation and plan next steps",
        text: "Once the soil is no longer being fed, we measure the slab and tell you whether structural repair is needed now, later, or not at all.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a foundation leak and a slab leak?",
        answer:
          "A slab leak is a plumbing leak in a pipe that runs under or inside the slab. Foundation leak is a broader term that also covers water from outside, like runoff, poor grading or downspouts, that soaks the soil around the foundation. Both put extra water into DeSoto's clay soil, and both can lead to foundation movement if they are not stopped.",
      },
      {
        question: "How much does foundation leak repair cost in DeSoto?",
        answer:
          "It depends on what is leaking and where. Typical North Texas ranges are $250 to $600 for leak detection, $1,500 to $4,000 for a slab leak spot repair, and $2,000 to $6,000 for a partial reroute. If the slab has moved, pier work is priced separately. Final pricing is set after testing and inspection.",
      },
      {
        question: "Should I shut off my water if I suspect a leak under the slab?",
        answer:
          "If you hear running water, see water coming up through the floor, or your meter is spinning with everything off, shutting off the main valve limits damage until the leak is found. If the only sign is a higher bill, you can usually keep using water normally until testing is done. Call us and we can walk you through it.",
      },
      {
        question: "Will fixing the leak also fix my foundation?",
        answer:
          "Sometimes the soil dries out and the slab settles back close to where it was, especially if the leak is caught early. In other cases the movement is permanent and piers are needed. We recommend waiting until the leak is repaired and the soil has had time to stabilize, then taking new elevation readings before deciding on structural work.",
      },
    ],
    ctaType: "leak-estimate",
    urgent: true,
  },

  // ---------------------------------------------------------------------------
  // CORE: Foundation Repair (broad)
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-repair-desoto-tx/",
    shortName: "Foundation Repair",
    summary:
      "Slab and pier and beam foundation repair for DeSoto homes, from minor crack work to full pier installation, based on measured readings and a clear written plan.",
    intro: [
      "Foundation repair covers a wide range of work, and the right fix depends on what is actually moving under your home. Some DeSoto houses need a few exterior piers along one corner that dropped after a dry summer. Others need interior piers where the center of the slab heaved, a plumbing leak fixed first, or simply better drainage and a crack sealed. The goal of a good repair is to stabilize the foundation, not to sell the most piers possible.",
      "We work on both slab-on-grade foundations, which most homes in DeSoto have, and older pier and beam foundations with a crawl space. Every job starts with an elevation survey of the floors, a look at the exterior grading and drainage, and a check for signs of plumbing leaks. That information tells us whether the slab is settling, heaving, or both, and which areas actually need support.",
      "After the inspection you get a written explanation of what we found, what we recommend, and why. If the problem is minor, we will tell you that too, and explain what to watch for so you know when it is time to call back.",
    ],
    signs: [
      {
        title: "Doors that stick or will not latch",
        text: "Frames racked out of square by foundation movement are often the first thing homeowners notice, especially on interior doors.",
      },
      {
        title: "Stair-step cracks in brick",
        text: "Cracks that follow the mortar joints in a stair pattern usually mean one part of the foundation has moved relative to another.",
      },
      {
        title: "Sloping or uneven floors",
        text: "A marble that rolls, tile that cracks, or a floor that feels like it dips toward one wall can point to settlement or heave.",
      },
      {
        title: "Gaps around windows and exterior trim",
        text: "Separation between brick and window frames, or trim pulling away from the wall, often shows up where the slab has dropped.",
      },
      {
        title: "Cracks in drywall above doors and windows",
        text: "Diagonal cracks running from the corners of openings are a common sign that the structure is moving.",
      },
    ],
    whyItMatters: [
      "North Texas clay is some of the most expansive soil in the country. In DeSoto it can swell noticeably during a wet spring and shrink and crack open during a long, hot summer. A foundation sitting on that soil moves up and down with it, and when one side of the house dries faster than another, the slab bends.",
      "Many homes along Hampton Rd, Belt Line Rd, Pleasant Run Rd and the neighborhoods off I-35E were built between the 1970s and 1990s. After decades of seasonal cycles, mature trees and settling, it is common for these slabs to have some movement. Newer subdivisions see problems too, usually from grading and drainage that were never corrected after construction.",
      "Small movements are normal and do not always need repair. The point of an inspection is to separate normal seasonal movement from the kind that keeps getting worse, so you are not paying for work you do not need or waiting too long on work you do.",
    ],
    included: [
      {
        title: "Pressed concrete piers",
        text: "Stacked concrete cylinders hydraulically pressed into the soil until they reach resistance, a common method for residential slabs in North Texas.",
      },
      {
        title: "Steel piers",
        text: "Steel pipe driven deeper to reach firmer soil or bedrock, used where deeper support is needed or soil conditions call for it.",
      },
      {
        title: "Pier and beam adjustment",
        text: "Shimming, replacing failed piers and adding support beams for homes with a crawl space.",
      },
      {
        title: "Crack repair",
        text: "Epoxy or polyurethane injection and brick or drywall crack repair once the foundation is stable.",
      },
      {
        title: "Drainage and moisture control",
        text: "Regrading, gutter extensions, French drains and root barriers to reduce the soil moisture swings that caused the movement.",
      },
    ],
    process: [
      {
        title: "Inspection and elevation survey",
        text: "We measure floor elevations throughout the house, document cracks and check drainage, trees and plumbing for causes.",
      },
      {
        title: "Written repair plan",
        text: "You get a layout showing where piers or other repairs are recommended, the method we suggest, and the price.",
      },
      {
        title: "Repair work",
        text: "Our crew installs piers or completes the approved repair, and adjusts the foundation toward level where it can be done safely.",
      },
      {
        title: "Final readings and cleanup",
        text: "We take new elevation readings to document the result, backfill and clean the work areas, and go over maintenance with you.",
      },
    ],
    faqs: [
      {
        question: "How much does foundation repair cost in DeSoto, TX?",
        answer:
          "Typical North Texas foundation repair runs about $4,000 to $15,000. Minor jobs can start around $1,800, and large jobs with many interior piers can reach $25,000 or more. Exterior piers usually run about $400 to $1,000 each, and interior piers cost more because the slab has to be opened. Final pricing comes after inspection.",
      },
      {
        question: "How long does foundation repair take?",
        answer:
          "Most residential pier jobs take one to three days once work starts. Interior piers, plumbing testing or permits can add time. Drainage work and crack repair are often finished in a day. We will give you an expected schedule with the written plan so you know what to plan around.",
      },
      {
        question: "Can foundation movement fix itself?",
        answer:
          "Some movement is seasonal. Cracks may open in a dry August and close up after fall rain. That kind of movement often does not need piers. Settlement that keeps getting worse each year, or damage caused by a leak or drainage problem, will not correct itself. Elevation readings over time are the best way to tell the difference.",
      },
      {
        question: "Do I need an engineer's report?",
        answer:
          "Not always. For straightforward repairs many homeowners proceed on the contractor's inspection. An independent engineer's report, typically $400 to $800, is useful if you are buying or selling, if the damage is severe, or if you want a second opinion on the repair plan. We are happy to work from an engineer's recommendations.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // CORE: Foundation Repair Company
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-repair-company-desoto-tx/",
    shortName: "Foundation Repair Company",
    summary:
      "How to compare foundation repair companies in DeSoto, what to ask before you sign, and how we handle inspections, pricing and repair plans.",
    intro: [
      "If you are comparing foundation repair companies, you probably already know something is wrong and want to get it fixed by someone you can trust. The hard part is that foundation bids can look very different. One company recommends 8 piers, another recommends 22, and a third says you need drainage work instead. Knowing what to ask makes it much easier to see which plan actually fits your house.",
      "A good contractor should be able to explain why they recommend each pier, show you the elevation readings that support it, and tell you whether a plumbing leak or drainage problem needs to be handled first. They should also tell you what the repair will not fix. Leveling rarely gets a house back to perfectly flat, and cosmetic cracks often need separate repair.",
      "We focus only on DeSoto, TX. That means we see the same soil, the same housing eras and the same drainage patterns over and over, and we can be on site without a long drive. We put our findings and pricing in writing, explain the options rather than pushing one, and are fine with you getting other opinions before deciding.",
    ],
    signs: [
      {
        title: "You got bids that do not agree",
        text: "Very different pier counts or methods usually mean someone did not measure carefully or is guessing. Ask each company to show their readings.",
      },
      {
        title: "A company quoted without measuring",
        text: "A price given without an elevation survey of the floors is a guess. Any serious bid should be based on measurements taken inside your home.",
      },
      {
        title: "No one mentioned plumbing or drainage",
        text: "If nobody checked for leaks, downspouts or grading, the cause of the movement may still be there after the piers go in.",
      },
      {
        title: "High-pressure sales tactics",
        text: "Same-day-only pricing or claims that your house is about to fail are red flags. Real foundation problems rarely need a decision on the spot.",
      },
      {
        title: "Vague warranty language",
        text: "Ask exactly what is covered, for how long, and whether it transfers if you sell. Get it in writing before work starts.",
      },
    ],
    whyItMatters: [
      "Foundation repair is one of the larger checks most DeSoto homeowners will ever write for their house, and it affects resale. Buyers and their inspectors will ask what was done, who did it, and whether there is paperwork. Choosing a contractor who documents the job with before-and-after readings and a pier layout protects you later.",
      "Local experience matters because DeSoto's conditions are specific. Expansive clay, 1970s to 1990s slabs with aging cast-iron drains, older pier and beam homes, and mature trees near the house all show up again and again. A company that knows these patterns is more likely to check for the real cause instead of only treating the symptoms.",
    ],
    included: [
      {
        title: "Measured inspection",
        text: "A full floor elevation survey, exterior walkaround, drainage review and crack documentation before any recommendation is made.",
      },
      {
        title: "Plain-language written plan",
        text: "A pier layout or repair scope, the method we recommend and why, and a price you can compare against other bids.",
      },
      {
        title: "Leak and drainage check first",
        text: "We look for plumbing leaks and water problems that would undermine a structural repair, and tell you if they need to be handled first.",
      },
      {
        title: "Before and after documentation",
        text: "Elevation readings taken before and after the repair so you have a record for your files, your insurer or a future buyer.",
      },
    ],
    process: [
      {
        title: "Ask your questions up front",
        text: "Call or send a request. We will answer what we can over the phone and set a time to look at the house.",
      },
      {
        title: "On-site evaluation",
        text: "We measure, photograph and explain what we see while we are there, including anything that does not need repair.",
      },
      {
        title: "Compare our plan with others",
        text: "Take the written plan and compare it to other bids. We are glad to go over differences in method or pier count with you.",
      },
      {
        title: "Schedule and complete the work",
        text: "If you choose us, we set a date, handle the repair, take final readings and walk you through the results.",
      },
    ],
    faqs: [
      {
        question: "What should I ask a foundation repair company before hiring them?",
        answer:
          "Ask to see the elevation readings behind their recommendation, what pier method they use and how deep, whether they checked for plumbing leaks and drainage problems, what the warranty covers and whether it transfers, and whether permits are needed. Also ask what the repair will not fix, so your expectations match the result.",
      },
      {
        question: "Why do foundation repair bids vary so much?",
        answer:
          "Bids vary because companies use different pier types and depths, measure differently, and sometimes include or leave out interior piers, plumbing testing, or drainage work. A low bid may skip the areas that are actually moving. A high bid may include more piers than readings support. Comparing the pier layouts side by side usually explains the difference.",
      },
      {
        question: "Do you charge for an inspection?",
        answer:
          "You can request a free inspection through our site. For some situations, such as a detailed report for a real estate transaction, a typical North Texas range is free to about $400 for an inspection and elevation survey, and $400 to $800 for an engineer's report. We will tell you any cost before the visit.",
      },
      {
        question: "Do you only work in DeSoto?",
        answer:
          "Yes. We focus on homes and buildings in DeSoto, TX, including ZIP code 75115 and the neighborhoods throughout the city. Staying in one city lets us respond quickly and learn the local soil and drainage patterns well, rather than spreading our crews across the region.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // CORE: House Foundation Repair (structure / house types)
  // ---------------------------------------------------------------------------
  {
    path: "/house-foundation-repair-desoto-tx/",
    shortName: "House Foundation Repair",
    summary:
      "Foundation repair matched to how your house is built: brick-veneer slab homes, older pier and beam houses, two-story plans and additions.",
    intro: [
      "The right foundation repair depends a lot on what kind of house is sitting on it. A one-story brick ranch on a slab, a two-story home with heavy point loads, an older frame house on pier and beam, and a house with a slab addition tied onto an original foundation all move differently and fail in different places. House foundation repair starts with understanding the structure, not just the cracks.",
      "Most DeSoto houses built from the 1970s through the 1990s are brick veneer over wood framing on a post-tensioned or conventionally reinforced slab. Brick shows movement quickly, so stair-step cracks and gaps at windows are common. Older pier and beam houses tend to show sagging floors and bouncy spots instead. Houses with additions often crack right at the joint where the new foundation meets the old one.",
      "We look at the house as a whole: where the load-bearing walls are, where the roof drains, where the plumbing runs under the slab, and how the lot drains. That tells us where support is needed and which method fits the structure, whether that is exterior piers, interior piers, shimming, or a drainage fix.",
    ],
    signs: [
      {
        title: "Cracks where an addition meets the original house",
        text: "Two foundations poured at different times often move independently, opening a crack at the joint in brick, drywall or the slab.",
      },
      {
        title: "Brick separating at corners",
        text: "On brick-veneer houses, a corner that has dropped often shows vertical or stair-step cracks and gaps at the frieze board.",
      },
      {
        title: "Second-floor doors and cracks",
        text: "In two-story houses, movement is often more noticeable upstairs, with doors that swing open or cracks at ceiling corners.",
      },
      {
        title: "Garage slab cracks and separation",
        text: "Attached garages often sit on a lower slab section that can crack or pull away from the main house foundation.",
      },
      {
        title: "Soft or sagging floors in older houses",
        text: "Pier and beam houses show movement through bouncy floors, sloping hallways and gaps under baseboards.",
      },
    ],
    whyItMatters: [
      "DeSoto has a broad mix of housing: established brick neighborhoods from the 1970s to 1990s, some older pier and beam houses closer to the original town center around Polk St and Belt Line Rd, and 2000s subdivisions with larger two-story plans. Each type responds to the area's expansive clay in its own way, so a repair that suits one house may be wrong for another.",
      "Heavy brick veneer, long rooflines that dump water at a few corners, and mature trees planted close to the house are common across the city. These features concentrate moisture changes in specific spots around the foundation, which is why damage often shows up at one corner or one side rather than evenly.",
    ],
    included: [
      {
        title: "Structure-specific pier layout",
        text: "Piers placed under load-bearing walls, corners and point loads based on how your house is framed, not a generic spacing.",
      },
      {
        title: "Exterior and interior piers",
        text: "Pressed concrete or steel piers around the perimeter, and interior piers where the center of the slab needs support.",
      },
      {
        title: "Pier and beam shimming and support",
        text: "Re-shimming, new pier pads and added beams for crawl space houses.",
      },
      {
        title: "Addition and garage joint repair",
        text: "Support and crack repair where two foundation sections meet.",
      },
    ],
    process: [
      {
        title: "Walk the house inside and out",
        text: "We note how the house is built, where the bearing walls and additions are, and where the damage is concentrated.",
      },
      {
        title: "Measure the foundation",
        text: "An elevation survey of every room shows the high and low points and how the structure has moved.",
      },
      {
        title: "Match the method to the house",
        text: "We recommend slab piers, pier and beam adjustment, drainage work, or a mix, and explain why it suits your structure.",
      },
      {
        title: "Repair and verify",
        text: "After the work, we re-measure and check doors, windows and cracks to confirm the house responded as expected.",
      },
    ],
    faqs: [
      {
        question: "Does a two-story house need more piers than a one-story?",
        answer:
          "Not always more, but the layout is different. Two-story houses carry more weight on certain walls and corners, so piers need to be placed under those loads. Total pier count depends on how much of the foundation has moved. Typical exterior piers run about $400 to $1,000 each in North Texas, with final pricing after inspection.",
      },
      {
        question: "My house has an addition and there is a crack at the joint. Is that a foundation problem?",
        answer:
          "It is common and not always serious. Additions sit on a separate foundation that can settle or heave differently from the original. If the crack is stable, sealing it may be enough. If it keeps widening, or doors near the joint stop closing, piers on one or both sides may be needed to tie the movement together.",
      },
      {
        question: "Can you repair the foundation on a brick house without damaging the brick?",
        answer:
          "Exterior piers are installed by digging next to the beam, not by removing brick. Lifting a section can close some brick cracks, but older cracks may not close fully because mortar has filled in or shifted. Brick and mortar repair is usually done after the foundation is stabilized, so it does not crack again.",
      },
      {
        question: "Is pier and beam or slab easier to repair?",
        answer:
          "Pier and beam houses are usually easier and less expensive to adjust because the crew can work in the crawl space and re-shim. Typical shimming and adjustment runs about $1,000 to $5,000. Slab houses need piers driven under the beam, and interior piers require breaking through the floor, which adds cost.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // CORE: Home Foundation Repair (homeowner experience)
  // ---------------------------------------------------------------------------
  {
    path: "/home-foundation-repair-desoto-tx/",
    shortName: "Home Foundation Repair",
    summary:
      "What foundation repair is like as a homeowner: living at home during the work, what gets disturbed, what it costs, and how it affects selling your home.",
    intro: [
      "Finding out your home needs foundation repair raises a lot of practical questions. Can you stay in the house during the work? Will the crew tear up your floors? What happens to the landscaping? Will this hurt your home's value when you sell? This page is about what the process is actually like for a DeSoto homeowner, from the first inspection to the day the crew leaves.",
      "For most homes, you can stay put. Exterior pier work happens outside along the foundation, with digging next to the beam and some noise from hydraulic equipment. Interior piers are more disruptive, because the crew has to cut through flooring and concrete in specific rooms, but we plan those openings with you ahead of time and tell you which furniture to move.",
      "We also talk through the money side honestly. Repair is a real expense, but a documented, completed repair is usually much easier to explain to a buyer than an unrepaired problem. Whether you plan to stay for years or sell next spring, we help you choose a repair that fits your plans and your budget.",
    ],
    signs: [
      {
        title: "Doors and windows that stopped working right",
        text: "Bedroom doors that will not latch or windows that are hard to open are often the first everyday sign homeowners notice.",
      },
      {
        title: "Cracks you keep patching",
        text: "If you have filled and painted the same drywall crack more than once, the movement behind it is still happening.",
      },
      {
        title: "Tile or flooring cracking",
        text: "Cracked tile lines running across a room or wood floors separating can follow cracks in the slab beneath.",
      },
      {
        title: "A buyer's inspection flagged the foundation",
        text: "Many homeowners first learn about movement when an inspector notes it during a sale. Getting a clear repair plan quickly keeps the deal on track.",
      },
      {
        title: "Gaps between walls and ceilings or cabinets",
        text: "Kitchen cabinets pulling away from walls or crown molding separating are common signs inside a lived-in home.",
      },
    ],
    whyItMatters: [
      "A lot of DeSoto homeowners have lived in the same 1970s to 1990s brick home for years and have watched cracks open and close with the seasons. That is normal to a point, because the city's clay soil swells and shrinks with rain and drought. The question is whether the movement is getting worse year over year.",
      "Foundation condition matters at resale. Buyers' inspectors in Dallas County check for foundation movement as a matter of routine, and an unexplained problem can lower offers or stall a sale. Having elevation readings, a repair invoice and documentation of what was done puts you in a much stronger position than leaving buyers to guess.",
    ],
    included: [
      {
        title: "Planning around your household",
        text: "We schedule work, identify which rooms will be affected, and tell you what to move before the crew arrives.",
      },
      {
        title: "Exterior pier installation",
        text: "Pressed concrete or steel piers along the outside of the home, with soil and landscaping set aside and replaced as closely as practical.",
      },
      {
        title: "Interior piers with floor protection",
        text: "Targeted openings through flooring and slab where needed, with floor coverings and dust control in work areas.",
      },
      {
        title: "Paperwork for your records",
        text: "Before and after elevation readings, a pier layout and a written scope you can keep for insurance or a future sale.",
      },
    ],
    process: [
      {
        title: "Talk about your plans for the home",
        text: "Staying long term, refinancing or selling soon all affect which repair makes sense. We start there.",
      },
      {
        title: "Inspect and explain",
        text: "We measure the floors, check outside drainage and walk you through what we found in plain terms.",
      },
      {
        title: "Prepare the home",
        text: "We confirm the schedule, mark sprinkler lines and utilities, and tell you which rooms and yard areas to clear.",
      },
      {
        title: "Repair, clean up and hand off documents",
        text: "The crew completes the work, cleans up, and you receive final readings and the repair record.",
      },
    ],
    faqs: [
      {
        question: "Can I live in my home during foundation repair?",
        answer:
          "Yes, most homeowners stay in the home. Exterior work is outside and mostly noisy during the day. If interior piers are needed, a few rooms will be off limits while the floor is open, and there may be dust. Plumbing is sometimes tested after lifting, so there could be a short period without water. We tell you ahead of time.",
      },
      {
        question: "Will foundation repair hurt my home's resale value?",
        answer:
          "A properly documented repair usually helps more than it hurts compared with an untreated problem. Buyers worry most about unknown movement. Having elevation readings, a pier layout and a written scope shows the issue was addressed. Ask whether your warranty transfers to a new owner, since that matters to buyers.",
      },
      {
        question: "Will my landscaping and sprinklers be damaged?",
        answer:
          "Exterior piers require digging along the foundation, so plants in those spots usually need to be moved or replaced. We set soil aside and backfill when done. Mark your sprinkler lines if you can, and we will do our best to avoid them, but heads and lines near pier locations sometimes need repair afterward.",
      },
      {
        question: "What does home foundation repair usually cost?",
        answer:
          "Most North Texas home foundation repairs fall between about $4,000 and $15,000. Smaller jobs can start near $1,800, and homes needing many interior piers can exceed $25,000. The number of piers, interior access, and any plumbing or drainage work drive the price. Final pricing is set after inspection.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Foundation Crack Repair
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-crack-repair-desoto-tx/",
    shortName: "Foundation Crack Repair",
    summary:
      "Crack evaluation and repair for slabs, brick and walls in DeSoto, from simple injection on stable cracks to piers when a crack is a sign of ongoing movement.",
    intro: [
      "Not every foundation crack is a structural problem. Concrete shrinks as it cures, and most slabs develop hairline cracks within the first few years. What matters is the width of the crack, whether one side is higher than the other, whether it lets water in, and whether it is still growing. Those details decide whether the right fix is a sealant, an injection, or support under the foundation.",
      "We see a lot of visible damage in DeSoto: stair-step cracks in brick, diagonal cracks above doors, cracks in garage floors, and cracks at the corners of the slab where the beam meets the soil. Each type tells a different story about what the foundation is doing. A vertical hairline in the slab is usually cosmetic. A crack wider than about a quarter inch, or one with offset, deserves a closer look.",
      "Our crack repair visits include measuring the crack, taking floor elevations to see if the slab has moved, and checking nearby drainage and plumbing. If the crack is stable, we seal or inject it so water and pests stay out. If it is moving, we explain the structural repair needed first.",
    ],
    signs: [
      {
        title: "Stair-step cracks in brick or mortar",
        text: "A crack that zigzags along mortar joints usually means differential movement in the foundation below.",
      },
      {
        title: "Cracks wider than 1/4 inch",
        text: "Wider cracks are more likely to be structural, especially if they have grown since you first noticed them.",
      },
      {
        title: "Offset or uneven crack edges",
        text: "If one side of a slab crack sits higher than the other, the slab has moved vertically, not just shrunk.",
      },
      {
        title: "Water or soil coming through a crack",
        text: "Cracks at the slab edge or garage that let in water, soil or insects need sealing even if they are not structural.",
      },
      {
        title: "Cracks that open and close with the seasons",
        text: "Cracks that widen in summer and tighten after rain are a sign of soil moisture swings, which may call for moisture control.",
      },
    ],
    whyItMatters: [
      "DeSoto's clay soil expands and shrinks with each wet and dry season, which puts repeated stress on slabs and brick. A crack that starts small during a dry summer can widen over several years as the cycle repeats, especially on the side of the house that gets the most afternoon sun or sits nearest a large tree.",
      "Cracks also let water in. A gap at the slab edge or in a brick veneer near a downspout can channel water along the foundation, which adds to the soil moisture problem that caused the crack. Sealing cracks and fixing drainage together is often more effective than doing either one alone.",
    ],
    included: [
      {
        title: "Crack measurement and monitoring",
        text: "Width and offset measurements, photos, and crack gauges where tracking over time will help decide on repair.",
      },
      {
        title: "Epoxy injection",
        text: "Structural epoxy injected into stable slab or wall cracks to bond the concrete back together.",
      },
      {
        title: "Polyurethane injection",
        text: "Flexible polyurethane foam for cracks that leak water, since it expands to fill voids and seals out moisture.",
      },
      {
        title: "Brick and mortar repair",
        text: "Repointing cracked mortar joints and replacing broken brick after the foundation is stable.",
      },
      {
        title: "Pier support when cracks are structural",
        text: "Pressed concrete or steel piers where the crack is caused by settlement that needs to be stopped first.",
      },
    ],
    process: [
      {
        title: "Measure and photograph the cracks",
        text: "We record width, length, offset and location so the crack can be compared over time.",
      },
      {
        title: "Check whether the foundation is moving",
        text: "Floor elevations and a look at doors, windows and drainage tell us if the crack is active or settled.",
      },
      {
        title: "Recommend the right repair",
        text: "Stable cracks get injection or sealing. Active cracks get structural repair first, then cosmetic repair.",
      },
      {
        title: "Repair and recheck",
        text: "We complete the crack work and can come back after a season to confirm it is holding.",
      },
    ],
    faqs: [
      {
        question: "How do I know if a foundation crack is serious?",
        answer:
          "Warning signs include cracks wider than about 1/4 inch, cracks with one side higher than the other, stair-step cracks in brick, cracks that keep growing, and cracks along with sticking doors or sloping floors. Hairline vertical cracks in a slab are usually shrinkage. Our crack width calculator can help you sort them before an inspection.",
      },
      {
        question: "How much does foundation crack repair cost?",
        answer:
          "Typical North Texas pricing for epoxy or polyurethane crack injection is about $300 to $800 per crack, depending on length and access. If the crack is caused by settlement and needs piers, the cost moves into general foundation repair ranges, often $4,000 to $15,000. Final pricing comes after inspection.",
      },
      {
        question: "Can I just fill the crack myself?",
        answer:
          "For a fine, stable hairline crack, a DIY sealant can keep out moisture and bugs. The risk is covering up a crack that is still moving, which hides the warning sign without fixing anything. If the crack is wider than a credit card, offset, or growing, have it looked at before you seal it.",
      },
      {
        question: "Why do my foundation cracks get worse in summer?",
        answer:
          "During long, hot, dry stretches, DeSoto's clay soil shrinks and pulls away from the foundation, so the slab loses support at the edges and cracks open. When fall rain returns, the soil swells and cracks may partly close. Consistent soil moisture and good drainage can reduce this seasonal cycle.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Slab Foundation Repair
  // ---------------------------------------------------------------------------
  {
    path: "/slab-foundation-repair-desoto-tx/",
    shortName: "Slab Foundation Repair",
    summary:
      "Pier-based repair for slab-on-grade homes in DeSoto, including exterior and interior piers, plumbing checks and drainage fixes that keep the slab stable.",
    intro: [
      "Most homes in DeSoto sit on a concrete slab poured directly on the ground. A slab foundation is strong and practical, but it depends completely on the soil beneath it. When the clay under one part of the slab dries out and shrinks, that part drops. When the clay under another part gets wet and swells, that part rises. The slab is stiff, so instead of flexing evenly, it cracks and tilts.",
      "Slab foundation repair usually means driving piers beneath the perimeter beam and any interior beams that have moved, then lifting the slab back toward its original elevation. In DeSoto we also have to think about what runs under the slab. Many 1970s to 1990s homes have cast-iron drain lines and copper supply lines embedded below the concrete, and lifting can stress older pipes.",
      "That is why our slab repairs include a look at the plumbing before and after lifting, and why we pay attention to whether the slab is settling at the edges, heaving in the middle, or doing both. The answer changes where piers go and how much lift is safe.",
    ],
    signs: [
      {
        title: "Cracks in tile or slab running across rooms",
        text: "Long cracks in tile or exposed concrete often follow a crack in the slab below.",
      },
      {
        title: "Corners of the house dropping",
        text: "A corner that has settled shows up as brick cracks, gaps at windows, and a low reading on that side of the house.",
      },
      {
        title: "Center of the house rising",
        text: "Interior walls with cracks at the top, doors that rub at the head, and a hump in the floor can mean the center of the slab heaved.",
      },
      {
        title: "Slab edge exposed or cracked",
        text: "Visible gaps between soil and the slab edge, or chipped and cracked beams at the corners, point to soil shrinkage and movement.",
      },
      {
        title: "Plumbing problems after cracks appear",
        text: "Slow drains or a leak showing up after foundation cracks can mean movement has stressed pipes under the slab.",
      },
    ],
    whyItMatters: [
      "Slab-on-grade is the most common foundation type in DeSoto's 1970s to 1990s neighborhoods and in the newer subdivisions built since. These slabs were designed for expansive clay, but decades of drought and heavy rain cycles, along with trees and drainage changes, can push them past their limits.",
      "Slab heave is just as common as settlement in North Texas. Water from a leaking drain line or poor grading can swell the clay under the middle of the house. Putting perimeter piers under a slab that is actually heaving in the center does not fix the problem, so it is important to read the elevations correctly before deciding on the repair.",
      "Because so much plumbing runs under DeSoto slabs, slab repair and plumbing health go hand in hand. A drain line test before lifting can save you from finding a broken pipe after the job is done.",
    ],
    included: [
      {
        title: "Exterior pressed concrete piers",
        text: "Concrete pier sections pressed beneath the perimeter beam to resistance, then used to lift and support the slab.",
      },
      {
        title: "Steel piers for deeper support",
        text: "Steel pipe piers driven deeper where soil conditions or loads call for it.",
      },
      {
        title: "Interior piers",
        text: "Access holes cut through flooring and concrete to support interior beams that have dropped, then patched after the work.",
      },
      {
        title: "Plumbing tests before and after lifting",
        text: "Hydrostatic drain tests and supply pressure tests to catch leaks the movement caused or the lift may affect.",
      },
      {
        title: "Heave management",
        text: "Drainage, leak repair and moisture control where the slab has risen rather than settled.",
      },
    ],
    process: [
      {
        title: "Elevation survey and slab assessment",
        text: "We map the high and low points of the slab and identify whether you are dealing with settlement, heave or both.",
      },
      {
        title: "Plumbing check",
        text: "We recommend or perform a drain and supply test so any leak can be repaired as part of the plan.",
      },
      {
        title: "Pier installation and lift",
        text: "Piers are installed at the planned locations and the slab is lifted gradually while we monitor readings.",
      },
      {
        title: "Patch, backfill and re-measure",
        text: "Access holes are patched, soil is backfilled and compacted, and final elevations are recorded.",
      },
    ],
    faqs: [
      {
        question: "What is the most common repair for a slab foundation in DeSoto?",
        answer:
          "Pressed concrete piers under the perimeter beam are the most common residential repair in North Texas. Steel piers are used where deeper support is needed. Interior piers are added when interior beams have dropped. The right choice depends on your elevation readings and soil conditions, not on a one-size approach.",
      },
      {
        question: "How much does slab foundation repair cost?",
        answer:
          "Typical exterior piers in North Texas run about $400 to $1,000 each, and interior piers cost more because the slab must be opened and patched. Most slab repairs fall in the $4,000 to $15,000 range, with larger jobs above $25,000. Final pricing comes after an inspection and elevation survey.",
      },
      {
        question: "Can lifting my slab break pipes underneath?",
        answer:
          "It can, especially with older cast-iron drains. That is why we recommend a plumbing test before lifting and again afterward. If a leak shows up, it is far better to find it while the crew is on site than months later when it has soaked the soil again.",
      },
      {
        question: "Will my slab be perfectly level after repair?",
        answer:
          "Usually not perfectly. Slabs are rarely poured perfectly level, and lifting too far can crack the slab or damage finishes. The goal is to stabilize the foundation and bring it back as close to level as the structure safely allows. We will give you a realistic target before the work starts.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Slab Leak Repair
  // ---------------------------------------------------------------------------
  {
    path: "/slab-leak-repair-desoto-tx/",
    shortName: "Slab Leak Repair",
    summary:
      "Locate and repair leaking pipes under your slab, then check whether the water has moved the foundation. Spot repair, reroute and tunneling options explained.",
    intro: [
      "A slab leak is a leak in a water supply or drain line that runs beneath or inside your concrete foundation. Because the pipe is buried, the first signs are often indirect: a higher water bill, a warm spot on the floor, the sound of water when nothing is on, or a crack that showed up out of nowhere. It is both a plumbing problem and a potential foundation problem, and it should be treated as both.",
      "Supply line leaks are under constant pressure, so they can push a lot of water into the soil quickly. Drain line leaks are slower and only leak when you use water, but they can run for months before anyone notices, often from cracked or separated cast-iron pipe in older homes. Either kind can soften or swell the clay under part of the slab.",
      "Our slab leak repair starts with confirming the leak and finding its exact location, then choosing the least disruptive way to fix it. After the repair, we look at the foundation to see whether the leak caused movement, so you are not left with a fixed pipe and a slab that is still shifting.",
    ],
    signs: [
      {
        title: "Unexplained jump in the water bill",
        text: "A bill that rises month after month with no change in usage is the most common early sign of a supply line slab leak.",
      },
      {
        title: "Water meter moving with everything off",
        text: "If the leak indicator on your meter spins with all fixtures and appliances off, water is going somewhere you cannot see.",
      },
      {
        title: "Warm floor spots",
        text: "A hot water line leaking under the slab can make tile or flooring feel warm in one area.",
      },
      {
        title: "Damp carpet or warped flooring",
        text: "Moisture coming up through the slab can soak carpet pad, cup wood floors, or loosen tile.",
      },
      {
        title: "Slow drains or sewer odor",
        text: "Cracked or separated drain lines under the slab can cause slow drains, gurgling and sewer smells.",
      },
      {
        title: "Low water pressure",
        text: "A significant supply leak can reduce pressure at fixtures throughout the house.",
      },
    ],
    whyItMatters: [
      "Many DeSoto homes from the 1970s through the 1990s still have their original plumbing under the slab. Cast-iron drain pipes corrode from the inside and can crack or separate, and copper supply lines can develop pinholes where they rub against concrete or gravel. Seasonal movement in the clay soil adds stress to those pipes every year.",
      "Water from a slab leak is especially hard on DeSoto foundations because it lands directly under the house, in soil that normally stays fairly stable. Swelling clay in that spot can lift part of the slab, while surrounding areas stay put. The longer the leak runs, the larger the wet area becomes.",
    ],
    included: [
      {
        title: "Leak confirmation",
        text: "Meter isolation, supply pressure testing and hydrostatic drain testing to confirm which system is leaking.",
      },
      {
        title: "Electronic leak location",
        text: "Acoustic and line tracing equipment to pinpoint the leak under the slab before any concrete is cut.",
      },
      {
        title: "Spot repair through the slab",
        text: "A small opening cut directly over the leak to repair the damaged section, then patched.",
      },
      {
        title: "Reroute",
        text: "Abandoning the leaking line and running new pipe through walls or the attic, often a good choice when the old line has several weak spots.",
      },
      {
        title: "Tunneling under the slab",
        text: "Digging from outside the house to reach drain lines without breaking interior floors, useful for long drain runs.",
      },
    ],
    process: [
      {
        title: "Confirm there is a leak",
        text: "We isolate the meter and test supply and drain systems to confirm a slab leak and which line it is on.",
      },
      {
        title: "Pinpoint the location",
        text: "Electronic location narrows the leak down so the repair opening goes in the right place.",
      },
      {
        title: "Pick the repair method",
        text: "We compare spot repair, reroute and tunneling for your situation and give you written pricing for each.",
      },
      {
        title: "Repair, retest and check the slab",
        text: "After the repair is retested, we take elevation readings to see if the leak moved the foundation.",
      },
    ],
    faqs: [
      {
        question: "How much does slab leak repair cost in DeSoto?",
        answer:
          "Typical North Texas ranges are $250 to $600 for leak detection, $1,500 to $4,000 for a spot repair through the slab, $2,000 to $6,000 for a partial reroute, and about $150 to $350 per linear foot for tunneling. The location of the leak and the condition of the pipe drive the final price, which is set after testing.",
      },
      {
        question: "Is it better to spot repair or reroute a slab leak?",
        answer:
          "A spot repair makes sense when the pipe is in good shape and the leak is a single failure. If the line is old, has leaked before, or runs under expensive flooring, a reroute through the walls or attic can avoid breaking the slab and future leaks on that line. We explain both with pricing so you can decide.",
      },
      {
        question: "Does homeowners insurance cover slab leaks?",
        answer:
          "Policies vary. Many cover the cost of accessing the leak and repairing resulting water damage, but not the pipe itself. Foundation movement caused by a leak is often treated differently. Check your policy and call your agent. We can provide documentation of the leak location and repair to support a claim.",
      },
      {
        question: "Can a slab leak cause foundation damage?",
        answer:
          "Yes. Water from the leak soaks the clay under the slab, which can swell and lift part of the foundation or wash out support. Small leaks caught early often cause little movement. Leaks that run for months can lead to cracks and uneven floors. That is why we check the foundation after the plumbing repair.",
      },
    ],
    ctaType: "leak-estimate",
    urgent: true,
  },

  // ---------------------------------------------------------------------------
  // SUB: Foundation Leak Detection
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-leak-detection-desoto-tx/",
    shortName: "Foundation Leak Detection",
    summary:
      "Not sure if you have a leak? Testing that tells you whether water is getting under your DeSoto foundation, where it is coming from, and what to do next.",
    intro: [
      "Many homeowners call us with a hunch rather than a clear problem. The water bill seems high, a crack looks new, or a corner of the yard stays wet. Foundation leak detection is for that stage: before you commit to any repair, find out whether there is actually a leak, which system it is in, and whether it is affecting the foundation.",
      "Testing follows a logical order. We start with the water meter to see if supply lines are losing water, pressure-test individual lines if needed, and run a hydrostatic test on the drain system to check for leaks in the sewer lines under the slab. If outside water is the suspect, we look at grading, downspouts and sprinklers. Then we use electronic equipment to pinpoint any leak found.",
      "At the end you get a straight answer. Sometimes the answer is no leak, and the problem is drainage or normal seasonal movement. Sometimes it is a specific pipe at a specific location. Either way you will know what you are dealing with before spending money on repairs.",
    ],
    signs: [
      {
        title: "Higher water bill without an obvious cause",
        text: "No new appliances, no guests, no extra irrigation, but the bill keeps going up.",
      },
      {
        title: "New cracks with no other explanation",
        text: "Cracks appearing during a wet stretch or in a normally stable area can point to a leak under the slab.",
      },
      {
        title: "A spot in the yard that never dries",
        text: "Persistent wet ground near the foundation can be a supply line, a sprinkler leak or drainage.",
      },
      {
        title: "Odors or slow drains",
        text: "Sewer smells or recurring slow drains can come from a broken drain line under the house.",
      },
      {
        title: "Buying or selling a home",
        text: "Leak testing alongside a foundation inspection gives a clearer picture of an older DeSoto slab home.",
      },
    ],
    whyItMatters: [
      "DeSoto's expansive clay reacts quickly to new water. A leak that would be a minor nuisance in sandy soil can swell clay and move part of a slab here. Finding a leak early keeps the affected soil area small and the repair simpler.",
      "Leak detection is also how you avoid paying for the wrong repair. Installing piers to correct movement caused by a leaking drain line, without fixing the leak, often leads to the same symptoms coming back. Testing first is cheaper than repeating work.",
    ],
    included: [
      {
        title: "Water meter and supply pressure test",
        text: "Isolating the supply system and holding it under pressure to see whether it loses water.",
      },
      {
        title: "Hydrostatic drain test",
        text: "Plugging the drain system and filling it with water to see whether the level drops, indicating a leak under the slab.",
      },
      {
        title: "Electronic leak location",
        text: "Acoustic listening and line tracing to find where a confirmed leak is.",
      },
      {
        title: "Exterior moisture review",
        text: "Checking grading, downspouts, sprinkler zones and pooling areas as possible water sources.",
      },
    ],
    process: [
      {
        title: "Tell us what made you suspicious",
        text: "Your bill history, cracks and wet spots help us decide which tests to run first.",
      },
      {
        title: "Run the tests",
        text: "Meter checks, supply pressure tests and drain tests confirm or rule out leaks in each system.",
      },
      {
        title: "Locate any leak found",
        text: "Electronic equipment narrows the leak to a specific spot under the slab or yard.",
      },
      {
        title: "Review results and options",
        text: "We explain what we found and, if a repair is needed, outline the methods and pricing in writing.",
      },
    ],
    faqs: [
      {
        question: "How much does foundation leak detection cost?",
        answer:
          "Typical North Texas leak detection runs about $250 to $600, depending on how many systems need testing and whether electronic location is needed. A hydrostatic drain test on a larger home may be at the higher end. We will tell you what testing we recommend and its cost before we start.",
      },
      {
        question: "How do I check for a leak myself?",
        answer:
          "Turn off every faucet, appliance and the irrigation system, then look at your water meter. If the leak indicator or dial is moving, water is escaping somewhere on the supply side. This does not check drain lines, which only leak when water flows through them, so a drain test is still needed if you suspect one.",
      },
      {
        question: "Will you have to break my floor to find a leak?",
        answer:
          "No. Testing and electronic location are done without breaking concrete. Openings are only made during the repair, and only if a spot repair is the chosen method. Rerouting or tunneling can avoid opening interior floors entirely.",
      },
      {
        question: "What if no leak is found?",
        answer:
          "That is useful information. It points the investigation toward drainage, grading, trees or normal seasonal soil movement. We will tell you what else we saw and whether a foundation inspection or drainage work makes sense next.",
      },
    ],
    ctaType: "leak-estimate",
  },

  // ---------------------------------------------------------------------------
  // SUB: Underground Leak Detection
  // ---------------------------------------------------------------------------
  {
    path: "/underground-leak-detection-desoto-tx/",
    shortName: "Underground Leak Detection",
    summary:
      "Find hidden leaks in buried water service lines, irrigation lines and yard plumbing on DeSoto properties before they soak the soil around your foundation.",
    intro: [
      "Not every hidden leak is under the house. The water service line running from the meter at the street to your home, irrigation lines, and buried lines to pools or outbuildings can all leak underground for a long time without obvious signs. Underground leak detection covers the whole property, not just the slab.",
      "These leaks matter for the foundation when they are close to the house. A service line leak near where the pipe enters the slab, or a broken sprinkler line along the foundation, can keep the clay on that side wet and swollen. Further out in the yard, they mainly waste water and money, but they can still create soft spots, sinkholes in the lawn, and unusually green patches.",
      "We trace buried lines, use acoustic equipment to listen for escaping water, and check the meter and sprinkler zones separately. The goal is to find the leak with as little digging as possible, then explain how far it is from the foundation and whether it is likely affecting it.",
    ],
    signs: [
      {
        title: "Soggy lawn or a patch that stays green",
        text: "A wet or unusually green strip in a dry summer often follows the path of a leaking buried line.",
      },
      {
        title: "Water meter running with the house shut off",
        text: "If the meter moves with the home's main valve closed, the leak is likely on the service line in the yard.",
      },
      {
        title: "Sunken or soft ground",
        text: "Settling soil, depressions or small sinkholes can form where water is washing soil away around a pipe.",
      },
      {
        title: "Sprinkler zones losing pressure",
        text: "A zone with weak heads or soggy ground nearby can have a broken lateral line.",
      },
      {
        title: "Water at the curb or driveway edge",
        text: "Water seeping from the ground near the meter or along the driveway can point to a service line leak.",
      },
    ],
    whyItMatters: [
      "DeSoto lots often have long service lines from the meter to the house and irrigation systems that run right along the foundation beds. When either leaks near the house, the water goes straight into the expansive clay that supports the slab, and one side of the foundation can begin to heave.",
      "In hot, dry North Texas summers, a leak is sometimes easier to spot because one area stays green while the rest of the lawn browns. In wet seasons, it can hide completely. Testing removes the guesswork regardless of the weather.",
    ],
    included: [
      {
        title: "Meter and valve isolation",
        text: "Separating the house, yard service line and irrigation so each can be tested on its own.",
      },
      {
        title: "Pipe and line tracing",
        text: "Locating buried lines so we know where to listen and where to dig if needed.",
      },
      {
        title: "Acoustic leak detection",
        text: "Ground microphones that pick up the sound of water escaping from a pressurized pipe.",
      },
      {
        title: "Irrigation zone checks",
        text: "Running zones individually to find broken heads, cracked laterals and leaking valves near the foundation.",
      },
    ],
    process: [
      {
        title: "Isolate the systems",
        text: "We shut off and test the house, service line and irrigation separately to see which one is losing water.",
      },
      {
        title: "Trace the buried line",
        text: "We map the route of the leaking line across the property.",
      },
      {
        title: "Listen and pinpoint",
        text: "Acoustic equipment narrows the leak to a small area so any excavation is targeted.",
      },
      {
        title: "Report the foundation risk",
        text: "We tell you where the leak is, how close it is to the slab, and whether a foundation check is recommended.",
      },
    ],
    faqs: [
      {
        question: "Who is responsible for the water line between the meter and my house?",
        answer:
          "In most cases the homeowner is responsible for the service line from the meter to the house, and the city is responsible for the meter and the line on the street side. If you are unsure, contact the City of DeSoto water department. We can locate the leak so you know which side it is on.",
      },
      {
        question: "How much does underground leak detection cost?",
        answer:
          "Typical North Texas leak detection runs about $250 to $600, depending on the length of the lines, the number of irrigation zones and how hard the leak is to pinpoint. We give you the cost up front. Repair is priced separately once the leak is found.",
      },
      {
        question: "Can a sprinkler leak really affect my foundation?",
        answer:
          "Yes, if it is close to the house. Many beds run right against the slab, and a broken line or head there can keep the clay saturated. That side of the foundation may heave while the rest moves normally. Moving sprinkler heads away from the foundation and fixing leaks quickly helps.",
      },
      {
        question: "Do you need to dig up my yard?",
        answer:
          "Only at the leak. Line tracing and acoustic detection let us find the leak first, so the repair excavation is usually small. Larger digging is only needed if the line has failed in several places or needs to be replaced.",
      },
    ],
    ctaType: "leak-estimate",
  },

  // ---------------------------------------------------------------------------
  // SUB: Water Line Leak Repair
  // ---------------------------------------------------------------------------
  {
    path: "/water-line-leak-repair-desoto-tx/",
    shortName: "Water Line Leak Repair",
    summary:
      "Repair or replace leaking water service and supply lines in DeSoto, with attention to how close the leak is to your foundation and how much soil it has soaked.",
    intro: [
      "Water line leaks are pressurized, which means they push water into the ground constantly, day and night. A small pinhole can release a surprising amount over a month. When the leak is in the service line near the house or in a supply line under the slab, all of that water ends up in the clay that supports your foundation.",
      "Water line leak repair focuses on the supply side: the main service line from the meter, the lines that branch under the slab to kitchens and bathrooms, and the hot water lines that run from the water heater. Depending on the material and age of the pipe, we may repair a single section, replace the service line, or reroute supply lines overhead so they no longer run under the slab at all.",
      "Because these leaks can move a foundation, we look at both sides of the problem. We stop the water first, then check the area around the leak for soil saturation and signs of slab movement, and tell you whether any foundation follow-up is needed.",
    ],
    signs: [
      {
        title: "High water bill",
        text: "Pressurized leaks run constantly, so they tend to show up on the bill faster than drain leaks.",
      },
      {
        title: "Hissing or running water sound",
        text: "A faint hiss in a wall, floor or near the water heater with everything off is a common clue.",
      },
      {
        title: "Wet area between the meter and the house",
        text: "Pooling or soft ground along the service line path points to a leak in that line.",
      },
      {
        title: "Drop in water pressure",
        text: "A noticeable loss of pressure at several fixtures can mean water is escaping before it reaches them.",
      },
      {
        title: "Water heater running more than usual",
        text: "A hot water line leak makes the heater cycle more often and can create warm floor spots.",
      },
    ],
    whyItMatters: [
      "Supply lines in many DeSoto homes from the 1970s through the 1990s are copper running under the slab, while newer homes often use PEX. Copper can develop pinholes from water chemistry and abrasion against concrete. Service lines from the meter can be damaged by tree roots and soil movement. Each type has its own weak points.",
      "A constant leak next to or under the foundation keeps the clay swollen in that area. Even after the leak is fixed, it can take weeks or months for the soil to dry back out, and the slab may move again as it does. Stopping the leak quickly limits how much soil gets saturated in the first place.",
    ],
    included: [
      {
        title: "Service line repair or replacement",
        text: "Repairing a damaged section or replacing the line from the meter to the house.",
      },
      {
        title: "Under-slab supply repair",
        text: "Spot repair of a leaking copper or PEX line under the slab once it is located.",
      },
      {
        title: "Supply line reroute",
        text: "New supply lines run through the attic or walls so the old under-slab line can be abandoned.",
      },
      {
        title: "Pressure testing after repair",
        text: "Holding the system under pressure to confirm the repair and check for other leaks.",
      },
    ],
    process: [
      {
        title: "Confirm and locate the leak",
        text: "Meter checks and pressure testing confirm a supply leak, then electronic location finds it.",
      },
      {
        title: "Choose repair or replacement",
        text: "We look at pipe age, material and leak history to recommend a section repair, line replacement or reroute.",
      },
      {
        title: "Fix and pressure-test",
        text: "We complete the repair and test the whole supply system to make sure there are no other leaks.",
      },
      {
        title: "Check the foundation area",
        text: "We look at soil and slab around the leak and tell you if monitoring or an elevation survey is recommended.",
      },
    ],
    faqs: [
      {
        question: "How much does water line leak repair cost?",
        answer:
          "It depends on where the leak is. In North Texas, a spot repair under the slab typically runs $1,500 to $4,000, and a partial supply reroute $2,000 to $6,000. Yard service line repairs are often less if the leak is easy to reach. Leak detection, typically $250 to $600, is usually needed first. Final pricing follows testing.",
      },
      {
        question: "Should I repair the section or replace the whole line?",
        answer:
          "If the pipe is in good condition and this is the first leak, a section repair is usually fine. If the line has leaked before, shows corrosion, or is an older material that tends to fail, replacing or rerouting it often costs less over time than repeated repairs and repeated soil saturation.",
      },
      {
        question: "Is a water line leak an emergency?",
        answer:
          "If water is coming up through a floor, pooling quickly in the yard, or you cannot shut it off, treat it as urgent and close the main valve. A slow leak found by a high bill is less urgent but should still be fixed promptly, since it keeps soaking the soil around the foundation.",
      },
      {
        question: "Why check the foundation after a water line repair?",
        answer:
          "Clay soil that has been soaked for weeks may have swollen and lifted part of the slab. As it dries, the slab can settle back unevenly. A quick look, and an elevation survey if there are new cracks, tells you whether the leak left any lasting movement.",
      },
    ],
    ctaType: "leak-estimate",
    urgent: true,
  },

  // ---------------------------------------------------------------------------
  // SUB: Foundation Inspection
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-inspection-desoto-tx/",
    shortName: "Foundation Inspection",
    summary:
      "A measured, no-pressure look at your foundation: elevation survey, crack review and drainage check, with a written summary of what we found.",
    intro: [
      "You do not need to be sure you have a foundation problem to ask for an inspection. Many DeSoto homeowners call because a crack caught their eye, a door started sticking, they are buying or selling, or they simply want a baseline on an older home. An inspection gives you facts so you can decide what, if anything, to do.",
      "Our inspection includes an elevation survey with a digital level throughout the main floor, a walk around the exterior to check the slab edge, brick, grading and downspouts, and a review of cracks inside and out. We look for signs of plumbing leaks and note trees close to the house. For pier and beam homes, we look in the crawl space if it is accessible.",
      "You get a plain-language summary of what we found. If the foundation is within a normal range, we will say so and explain what to watch. If repair makes sense, we explain the options and pricing in writing, and there is no obligation to book anything that day.",
    ],
    signs: [
      {
        title: "A crack you are not sure about",
        text: "An inspection tells you whether it is cosmetic, seasonal or a sign of ongoing movement.",
      },
      {
        title: "Doors or windows changed how they close",
        text: "Sticking, swinging or gaps at the top of doors are worth measuring before they get worse.",
      },
      {
        title: "You are buying or selling",
        text: "A foundation-specific inspection gives more detail than a general home inspection's notes.",
      },
      {
        title: "After a major leak or drought",
        text: "Big moisture changes are a good time to check if the slab moved.",
      },
      {
        title: "You want a baseline",
        text: "Readings taken now make it easy to see real change in future years.",
      },
    ],
    whyItMatters: [
      "In DeSoto, some foundation movement is expected because the clay soil swells and shrinks with the seasons. Without measurements, it is hard to tell normal movement from a problem that needs attention. An elevation survey turns guesswork into numbers.",
      "Inspections are also how you avoid unnecessary work. A foundation that is a bit out of level but stable may only need drainage improvements or monitoring. Knowing that can save thousands of dollars, and it gives you something concrete to show a buyer or lender.",
    ],
    included: [
      {
        title: "Elevation survey",
        text: "Floor readings across the home to map high and low points and measure the overall deflection.",
      },
      {
        title: "Interior and exterior crack review",
        text: "Documenting crack locations, widths and patterns in drywall, brick and slab.",
      },
      {
        title: "Drainage and grading check",
        text: "Looking at downspouts, slope, pooling areas, sprinklers and trees near the foundation.",
      },
      {
        title: "Leak indicators",
        text: "Noting signs that suggest plumbing testing should be done before any repair decision.",
      },
      {
        title: "Written summary",
        text: "Our findings and any recommended next steps, with pricing if repair is advised.",
      },
    ],
    process: [
      {
        title: "Book a time",
        text: "Pick a time that works for you. The visit usually takes about an hour, depending on the size of the home.",
      },
      {
        title: "We measure and look",
        text: "Elevation readings inside, then a full exterior walk, with notes and photos.",
      },
      {
        title: "We explain what we found",
        text: "We go over the readings with you on site and answer questions.",
      },
      {
        title: "You decide what is next",
        text: "Monitor, improve drainage, test plumbing or repair. You get a written summary either way.",
      },
    ],
    faqs: [
      {
        question: "How much does a foundation inspection cost in DeSoto?",
        answer:
          "You can request a free inspection through our site. Across North Texas, foundation inspections with an elevation survey typically range from free to about $400, and an independent structural engineer's report is usually $400 to $800. We tell you about any fee before scheduling.",
      },
      {
        question: "What is the difference between your inspection and an engineer's report?",
        answer:
          "Our inspection measures the foundation, identifies likely causes and gives repair options and pricing. A structural engineer's report is an independent evaluation and stamped recommendation, often requested in real estate transactions or for permits. Both are useful, and we can work from an engineer's report if you have one.",
      },
      {
        question: "How long does an inspection take?",
        answer:
          "Most single-family homes take about 45 minutes to an hour and a half. Larger homes, pier and beam crawl spaces, or homes with many cracks to document can take longer. We go over the results with you before we leave.",
      },
      {
        question: "What does an out-of-level reading mean?",
        answer:
          "Almost no slab is perfectly level. What matters is how much difference there is across a given distance and where it is. A gradual slope across the house may be normal, while a sharp drop at one corner is more concerning. We explain your readings in context, not just as a single number.",
      },
    ],
    ctaType: "schedule",
  },

  // ---------------------------------------------------------------------------
  // SUB: Foundation Leveling (technical)
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-leveling-desoto-tx/",
    shortName: "Foundation Leveling",
    summary:
      "Elevation-survey-driven leveling for settled slabs and pier and beam foundations in DeSoto, using pressed concrete piers, steel piers and shimming.",
    intro: [
      "Foundation leveling is the process of lifting settled sections of a foundation back toward a consistent elevation and holding them there with permanent support. It is not the same as stabilizing. Stabilizing stops further settlement. Leveling also recovers some of the movement that has already happened, which is what closes gaps, frees doors and reduces floor slope.",
      "The work is driven by the elevation survey. We take readings across the floor with a digital level, establish a reference point, and produce a map showing how far each area has dropped or risen. That map determines pier placement, the sequence of lifting, and the realistic target elevation. On slabs, hydraulic jacks lift the beam off newly installed piers. On pier and beam homes, the beams are jacked and shimmed on new or existing supports.",
      "Leveling has limits. A slab that has been settled for many years may crack if it is forced back too quickly or too far. Our goal is a stable, measurably improved foundation without creating new damage, and we tell you before work starts what change in elevation we expect to achieve.",
    ],
    signs: [
      {
        title: "Measurable floor slope",
        text: "A noticeable drop across a room or hallway, often over an inch, that you can feel when walking.",
      },
      {
        title: "Doors out of square",
        text: "Gaps at the top corner of a door, or doors that swing on their own, point to settlement under one side.",
      },
      {
        title: "Separation at windows and frieze boards",
        text: "Exterior gaps where brick or trim has moved away from the frame or roofline.",
      },
      {
        title: "Wide stair-step cracks",
        text: "Brick cracks that have grown wider over several seasons, often near a corner.",
      },
      {
        title: "Previous repair that has moved again",
        text: "Areas outside an older pier layout that have since settled may need additional piers and re-leveling.",
      },
    ],
    whyItMatters: [
      "Severe settlement in DeSoto is usually the result of years of seasonal drying in the expansive clay, often made worse by large trees drawing moisture near one side of the house or by long-running drainage problems. Once the slab has dropped significantly, drainage fixes alone will not bring it back up.",
      "Older slab homes from the 1970s to 1990s and pier and beam homes with original supports are the most likely to have reached the point where leveling, not just monitoring, is the right move. Leveling done correctly takes the stress off framing, brick and plumbing and gives a stable base for cosmetic repairs.",
    ],
    included: [
      {
        title: "Elevation survey and pier plan",
        text: "A full floor elevation map, a reference point, and a pier layout tied to the readings.",
      },
      {
        title: "Pressed concrete piers",
        text: "Concrete cylinders hydraulically pressed to refusal, then used as the bearing point for lifting the beam.",
      },
      {
        title: "Steel piers",
        text: "Driven steel pipe piers for deeper bearing where soil conditions call for them.",
      },
      {
        title: "Shimming and beam adjustment",
        text: "Steel shims and adjusted supports to set final elevation on piers and on pier and beam framing.",
      },
      {
        title: "Post-lift plumbing test",
        text: "A drain and supply test after leveling to make sure the lift did not damage under-slab lines.",
      },
    ],
    process: [
      {
        title: "Survey and set a target",
        text: "We map elevations, choose a reference point and agree with you on a realistic leveling target.",
      },
      {
        title: "Install piers to resistance",
        text: "Piers are driven at the planned locations until they reach load-bearing resistance.",
      },
      {
        title: "Lift in stages",
        text: "Jacks raise the foundation gradually and evenly while we watch readings, cracks and doors.",
      },
      {
        title: "Shim, lock off and re-survey",
        text: "Final shims set the elevation, piers are capped, and a post-lift survey documents the result.",
      },
    ],
    faqs: [
      {
        question: "How much does foundation leveling cost?",
        answer:
          "Leveling cost depends mostly on the number and type of piers. In North Texas, exterior piers typically run $400 to $1,000 each, with interior piers costing more. Many leveling jobs fall between $4,000 and $15,000, and large homes needing many interior piers can exceed $25,000. Final pricing follows an elevation survey.",
      },
      {
        question: "How close to level can you get my foundation?",
        answer:
          "It depends on how long the foundation has been out of level, how it was built, and how stiff the slab is. Most foundations can be improved significantly, but forcing them perfectly flat risks cracking the slab or finishes. We set a realistic target from the survey and explain it before starting.",
      },
      {
        question: "What is the difference between pressed concrete and steel piers?",
        answer:
          "Pressed concrete piers are stacked concrete cylinders pushed into the soil until they meet resistance. They are common and cost-effective for residential slabs. Steel piers are driven deeper and are often used where firmer bearing is further down or loads are heavier. The soil and structure determine which fits.",
      },
      {
        question: "Will leveling crack my walls?",
        answer:
          "Lifting can open or close existing cracks, and some small new drywall cracks may appear as the structure moves back. That is why we lift gradually and monitor as we go. Cosmetic repair is best done after leveling is complete and the house has had time to settle into its new position.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: House Leveling (homeowner-friendly)
  // ---------------------------------------------------------------------------
  {
    path: "/house-leveling-desoto-tx/",
    shortName: "House Leveling",
    summary:
      "If your floors slope, doors stick and cracks keep coming back, house leveling can bring your home back closer to even. Here is how it works in plain terms.",
    intro: [
      "If you can feel the floor tilt when you walk down the hall, your doors will not close right, and a ball on the kitchen floor rolls to one side, your house has probably settled unevenly. House leveling is the fix: we put new supports under the low spots and gently raise those areas back up so the house sits more evenly again.",
      "You do not need to know the technical terms to get this done. What matters is that the supports go deep enough to stay put, that the house is raised slowly so nothing breaks, and that you know ahead of time what to expect. Most homeowners notice the difference right away in how doors and windows work.",
      "We explain everything in everyday language. We will show you on a simple floor map where your house is low, tell you how many supports it needs and why, and give you a written price. If your house does not need leveling, we will tell you that too.",
    ],
    signs: [
      {
        title: "Floors that feel like they slope",
        text: "You notice a tilt walking across a room, or furniture leans and rocks.",
      },
      {
        title: "Doors that stick, drag or swing open",
        text: "Doors that used to work fine now rub, will not latch, or drift open by themselves.",
      },
      {
        title: "Cracks that come back after you patch them",
        text: "The same wall crack reappears after painting, which means the house is still moving.",
      },
      {
        title: "Gaps you can see daylight through",
        text: "Light showing around door frames or between trim and walls.",
      },
      {
        title: "Kitchen cabinets or counters pulling away",
        text: "Cabinets separating from the wall or counters that are no longer level.",
      },
    ],
    whyItMatters: [
      "The ground under DeSoto homes is a sticky clay that gets bigger when it is wet and smaller when it dries out. After years of hot summers and heavy rains, many houses end up lower on one side or at one corner. Big trees close to the house make it worse because their roots pull water out of the soil.",
      "Leveling the house does more than make floors feel better. It takes pressure off walls, doors, plumbing and the roof framing, and it stops small problems, like a sticking door, from turning into bigger ones over the next few years.",
    ],
    included: [
      {
        title: "A simple floor map of your house",
        text: "We measure every room and show you where the house is low and by how much.",
      },
      {
        title: "New supports under the low spots",
        text: "Concrete or steel piers pushed deep into the ground under the edges or middle of the house.",
      },
      {
        title: "Gentle lifting",
        text: "The house is raised a little at a time so walls and floors can adjust without damage.",
      },
      {
        title: "Shimming for raised-floor homes",
        text: "For homes with a crawl space, adding or adjusting supports and shims under the floor beams.",
      },
    ],
    process: [
      {
        title: "We come see the house",
        text: "We look at your doors, cracks and floors and take measurements in each room.",
      },
      {
        title: "We show you the plan",
        text: "You see where the supports go, what it costs, and how long it will take, all in writing.",
      },
      {
        title: "We level the house",
        text: "The crew installs supports and raises the low areas slowly while checking doors and walls.",
      },
      {
        title: "We show you the before and after",
        text: "We re-measure, compare the numbers with you, and clean up the work areas.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to level a house?",
        answer:
          "For most North Texas homes, leveling falls somewhere between $4,000 and $15,000. Small jobs can start around $1,800, and larger homes with supports needed inside can go over $25,000. Raised-floor homes that only need shimming are often $1,000 to $5,000. You get a firm price after we measure.",
      },
      {
        question: "Will my doors work normally after leveling?",
        answer:
          "Most doors work much better right after the house is leveled. Some may still need a small adjustment, like moving a strike plate or planing an edge, because doors and frames sometimes get trimmed over the years to fit a settled house.",
      },
      {
        question: "How long does house leveling take?",
        answer:
          "Most homes are done in one to three days. Homes that need supports inside, or a lot of supports, can take a bit longer. You can usually stay home while we work.",
      },
      {
        question: "Will my house sink again?",
        answer:
          "The supports we install go deep into the ground, below the soil that swells and shrinks the most, so the leveled areas should stay put. Other parts of the house that did not get supports can still move with the seasons, which is why good drainage and steady soil moisture around the house matter after leveling.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Pier and Beam Foundation Repair
  // ---------------------------------------------------------------------------
  {
    path: "/pier-and-beam-foundation-repair-desoto-tx/",
    shortName: "Pier & Beam Repair",
    summary:
      "Repair for older DeSoto homes built on piers and beams: shimming, pier replacement, beam and joist support, and moisture fixes in the crawl space.",
    intro: [
      "A pier and beam foundation holds the house up off the ground on a grid of piers, with wood beams running across them and floor joists on top. There is a crawl space underneath instead of a slab. You find this type in some of DeSoto's older homes, and it behaves differently from a slab when the soil moves.",
      "Common problems include piers that have sunk or tilted, shims that have dried out, crushed or slipped, wood beams that have sagged or rotted, and floor joists spaced too far apart for the load. Because everything is accessible from the crawl space, many repairs can be done without touching the inside of the house, which often makes pier and beam work faster and less disruptive than slab repair.",
      "We go into the crawl space, measure the floors, and check every pier, beam and joist we can reach. Then we recommend the specific fixes needed, from re-shimming a few spots to adding new piers and beams under a sagging section, and explain each one in writing.",
    ],
    signs: [
      {
        title: "Bouncy or soft floors",
        text: "Floors that flex when you walk often mean joists or beams have lost support or are undersized.",
      },
      {
        title: "Sagging in the middle of the house",
        text: "Interior piers that have settled cause the center of the floor to dip.",
      },
      {
        title: "Creaking and gaps under baseboards",
        text: "Floors pulling away from walls as the framing below shifts.",
      },
      {
        title: "Loose or crushed shims",
        text: "Wood shims that have dried out or split leave beams resting unevenly on the piers.",
      },
      {
        title: "Damp or musty crawl space",
        text: "Moisture under the house can rot wood framing and soften the soil the piers sit on.",
      },
    ],
    whyItMatters: [
      "Pier and beam homes in DeSoto are generally older, and their original supports were often wood or shallow concrete pads. Decades of expansive clay swelling and shrinking under those piers, plus moisture in the crawl space, slowly change how the floor framing is supported.",
      "The good news is that pier and beam foundations are adjustable. Unlike a slab, they can be re-shimmed and re-supported as conditions change, which makes regular maintenance a practical way to keep floors level. Ignoring them for too long, though, can lead to rot and framing repairs that cost more than the foundation work itself.",
    ],
    included: [
      {
        title: "Shimming and re-leveling",
        text: "Replacing failed shims with steel or durable shims and adjusting beams back toward level.",
      },
      {
        title: "Pier replacement and added piers",
        text: "Replacing sunken or tilted piers and adding piers where beam spans are too long.",
      },
      {
        title: "Beam and joist repair",
        text: "Sistering or replacing damaged beams and joists and adding support where floors sag.",
      },
      {
        title: "Perimeter beam support",
        text: "Pressed or steel piers under the outer grade beam when the perimeter has settled.",
      },
      {
        title: "Crawl space moisture control",
        text: "Ventilation, drainage and vapor barrier recommendations to protect the framing and soil.",
      },
    ],
    process: [
      {
        title: "Crawl space inspection",
        text: "We go under the house to check piers, shims, beams, joists, moisture and access.",
      },
      {
        title: "Floor elevation readings",
        text: "Readings from inside show where the floor is low and how it relates to what we saw underneath.",
      },
      {
        title: "Adjust and reinforce",
        text: "Our crew replaces shims, adds or replaces piers, and reinforces framing as planned.",
      },
      {
        title: "Recheck floors and moisture",
        text: "We re-measure the floors and go over crawl space moisture steps to keep the repair holding.",
      },
    ],
    faqs: [
      {
        question: "How much does pier and beam foundation repair cost?",
        answer:
          "Shimming and adjustment on a North Texas pier and beam home typically runs $1,000 to $5,000. Adding or replacing piers, repairing rotted beams or supporting a settled perimeter beam increases the cost, and larger jobs can reach general foundation repair ranges of $4,000 to $15,000. Final pricing follows a crawl space inspection.",
      },
      {
        question: "How often does a pier and beam house need adjustment?",
        answer:
          "It varies with soil, moisture and the condition of the supports. Many homes go years between adjustments, especially after old wood shims are replaced with steel. Homes with wet crawl spaces or original wood piers may need attention more often. Periodic checks catch problems before floors start sagging.",
      },
      {
        question: "Is pier and beam better than slab in North Texas?",
        answer:
          "Each has tradeoffs. Pier and beam is easier to access and adjust and keeps plumbing reachable. Slabs are stiffer and have no crawl space to maintain. Both move with expansive clay. For an existing pier and beam home, good maintenance usually makes more sense than worrying about which type is better.",
      },
      {
        question: "Do you need to come inside my house?",
        answer:
          "Mostly no. The work is done from the crawl space and outside. We come inside briefly to take floor readings and check doors and walls before and after the repair.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Crawl Space Foundation Repair
  // ---------------------------------------------------------------------------
  {
    path: "/crawl-space-foundation-repair-desoto-tx/",
    shortName: "Crawl Space Repair",
    summary:
      "Structural repair for problems inside the crawl space: wet soil, rotted sills and joists, failing supports and poor ventilation under DeSoto homes.",
    intro: [
      "The crawl space is where the structural problems in a raised-floor home actually happen. Standing water, damp soil, rotted wood, sagging joists, and supports that have shifted all start under the house, long before you see a crack or feel a soft spot in the floor above. Crawl space foundation repair focuses on fixing that environment and the framing in it.",
      "In many DeSoto crawl spaces, the main issue is water. Rain runs under the house because the grade slopes toward it, downspouts drain into the crawl space vents, or a plumbing line under the floor is leaking. Constant moisture softens the clay the piers sit on and feeds wood rot and mold in sill plates, beams and joists.",
      "We address both sides: the water getting in and the damage it caused. That can mean drainage corrections, a vapor barrier, better ventilation, and then structural repairs such as replacing rotted framing, adding support posts or setting new piers on firm footings.",
    ],
    signs: [
      {
        title: "Standing water or mud under the house",
        text: "Water collecting after rain is a sign that drainage around the home is sending water under it.",
      },
      {
        title: "Musty smell inside the home",
        text: "Damp crawl space air rises into the living space and carries odors and humidity.",
      },
      {
        title: "Soft, stained or rotted wood",
        text: "Sill plates, beams or joists that are dark, crumbly or easily punctured.",
      },
      {
        title: "Leaning or sinking support posts",
        text: "Supports that have tilted or sunk into soft soil no longer carry the floor evenly.",
      },
      {
        title: "Sagging floors over a specific area",
        text: "A soft spot in a bathroom or kitchen floor often lines up with rot or plumbing leaks below.",
      },
    ],
    whyItMatters: [
      "Heavy spring and fall rain in North Texas, combined with older lots that were never graded well, means many DeSoto crawl spaces take on water several times a year. The clay soil under those homes holds that water for a long time, which keeps humidity high and weakens footings.",
      "Hot summers then dry the soil out quickly, so piers sitting on damp clay can drop as it shrinks. That wet and dry cycle, plus rot in the framing, is what turns a minor crawl space issue into an uneven, bouncy floor.",
    ],
    included: [
      {
        title: "Crawl space drainage",
        text: "Correcting grading, downspouts and vent openings, and adding interior drainage where water keeps getting in.",
      },
      {
        title: "Vapor barrier",
        text: "A ground cover that reduces moisture rising from the soil into the crawl space.",
      },
      {
        title: "Framing repair",
        text: "Replacing or sistering rotted sill plates, beams and joists.",
      },
      {
        title: "New supports and footings",
        text: "Adjustable posts or new piers on proper footings to replace failing supports.",
      },
    ],
    process: [
      {
        title: "Inspect the crawl space",
        text: "We check moisture, wood condition, supports, ventilation and access points.",
      },
      {
        title: "Find where the water comes from",
        text: "We trace runoff, downspouts and any plumbing leaks that are wetting the crawl space.",
      },
      {
        title: "Dry it out, then repair",
        text: "We fix water entry first, then replace damaged framing and supports.",
      },
      {
        title: "Protect the space",
        text: "A vapor barrier and ventilation plan help keep the crawl space dry after the repair.",
      },
    ],
    faqs: [
      {
        question: "Can I fix a wet crawl space without structural repair?",
        answer:
          "Sometimes. If the wood and supports are still sound, correcting drainage and adding a vapor barrier may be all that is needed. If there is rot or settled supports, those need structural repair, but they should be fixed after the water problem, or the new work will face the same conditions.",
      },
      {
        question: "What does crawl space foundation repair cost?",
        answer:
          "It varies widely by what is needed. Typical North Texas shimming and support adjustment runs about $1,000 to $5,000. Framing repairs, new supports and drainage work add to that, and bigger jobs can fall into the $4,000 to $15,000 range. Final pricing follows an inspection of the crawl space.",
      },
      {
        question: "Should I seal my crawl space vents?",
        answer:
          "It depends on the home. Fully encapsulating a crawl space is a bigger project that also involves humidity control. For many DeSoto homes, fixing drainage, adding a ground vapor barrier and keeping vents clear and protected from runoff solves the problem. We recommend the approach that fits your crawl space.",
      },
      {
        question: "How do I know if the wood under my house is rotted?",
        answer:
          "Rotted wood is often dark, soft or crumbly, and a screwdriver will sink in easily. You may see fungus or white growth. Soft spots in the floor above, especially near bathrooms and kitchens, are another clue. An inspection checks the framing systematically.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Foundation Drainage Repair
  // ---------------------------------------------------------------------------
  {
    path: "/foundation-drainage-repair-desoto-tx/",
    shortName: "Foundation Drainage Repair",
    summary:
      "Grading, gutter, downspout and drain fixes that keep water from soaking the clay around your foundation, often the cheapest way to prevent bigger repairs.",
    intro: [
      "Most foundation problems in DeSoto trace back to water: too much in one place, too little in another, or big swings between the two. Drainage repair controls how water moves around your house so the soil under the foundation stays at a more even moisture level. It is often the first repair we recommend, and sometimes the only one needed.",
      "The usual problems are simple. Downspouts dump roof water right at the slab. Flower beds are built up higher than the lawn so they trap water against the foundation. The yard was graded years ago and has since settled so it slopes toward the house. Sprinklers spray the slab edge. Each of these keeps one side of the house wetter than the others.",
      "We walk the property after looking at the foundation, check slope with a level, and find where water collects and where it should go instead. Then we recommend practical fixes, from extending downspouts to regrading or installing a drain, and explain how each one ties to the movement we measured.",
    ],
    signs: [
      {
        title: "Water standing near the house after rain",
        text: "Puddles along the foundation that last more than a day after a storm.",
      },
      {
        title: "Downspouts emptying next to the slab",
        text: "Short or missing extensions that drop roof water right against the foundation.",
      },
      {
        title: "Soil washed out or eroded at the slab edge",
        text: "Exposed beams, gullies or washed-out mulch along the foundation.",
      },
      {
        title: "Beds or yard sloping toward the house",
        text: "Soil that slopes back toward the wall instead of away from it.",
      },
      {
        title: "Cracks or movement on one side only",
        text: "Damage concentrated on the side where water collects often points to drainage as the cause.",
      },
    ],
    whyItMatters: [
      "North Texas clay swells when it gets wet and shrinks when it dries. If one side of a DeSoto home gets roof water every time it rains while the other side stays dry, the foundation moves unevenly. Fixing drainage evens out that moisture and reduces the stress on the slab.",
      "Heavy spring and fall storms can drop a lot of rain in a short time, and many lots near Ten Mile Creek and other low areas in town handle a lot of runoff. Good drainage is also a way to protect any foundation repair you have already paid for. Piers support the areas they are under, but the rest of the foundation still responds to soil moisture.",
    ],
    included: [
      {
        title: "Regrading",
        text: "Reshaping soil so the ground slopes away from the foundation for at least the first several feet.",
      },
      {
        title: "Gutter and downspout extensions",
        text: "Carrying roof water well away from the slab, above ground or through buried lines.",
      },
      {
        title: "French drains and surface drains",
        text: "Collecting water from problem areas and moving it to a safe outlet.",
      },
      {
        title: "Root barriers",
        text: "Vertical barriers between large trees and the foundation to limit roots drawing moisture from under the slab.",
      },
      {
        title: "Foundation watering plan",
        text: "Guidance on keeping soil moisture more even during long dry spells.",
      },
    ],
    process: [
      {
        title: "Check the foundation and the yard together",
        text: "We match where the foundation has moved to where water collects or is missing.",
      },
      {
        title: "Measure slope and flow",
        text: "We check grade, downspout discharge points and where water goes during rain.",
      },
      {
        title: "Recommend the simplest effective fix",
        text: "Extensions, regrading, drains or root barriers, priced in writing, starting with what will have the most effect.",
      },
      {
        title: "Install and test",
        text: "We complete the work and run water through the system to confirm it drains where it should.",
      },
    ],
    faqs: [
      {
        question: "Can drainage problems really damage a foundation?",
        answer:
          "Yes. In expansive clay, uneven moisture is a leading cause of foundation movement. A side of the house that stays wet can heave, while a side that dries out can settle. Correcting drainage does not lift a foundation that has already moved, but it reduces further movement and protects any repair.",
      },
      {
        question: "How much does foundation drainage repair cost?",
        answer:
          "It depends on the fix. Downspout extensions can be fairly inexpensive. French drains typically run $25 to $60 per linear foot in North Texas, and regrading depends on the area and soil needed. We price the options separately so you can start with the most effective one. Final pricing follows a site visit.",
      },
      {
        question: "How far should downspouts discharge from my foundation?",
        answer:
          "A common recommendation is at least 5 feet away, on ground that continues to slope away from the house. On flat or poorly sloped lots, buried drain lines that carry water further are often the better choice. Water should not flow back toward the slab.",
      },
      {
        question: "Should I water my foundation in summer?",
        answer:
          "During long dry periods, keeping the soil around the foundation evenly moist can reduce shrinkage. The goal is consistent moisture, not saturation. A soaker hose a foot or two from the slab on a timer is a common approach. Avoid spraying water directly against the foundation.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: French Drains
  // ---------------------------------------------------------------------------
  {
    path: "/french-drain-foundation-desoto-tx/",
    shortName: "French Drains",
    summary:
      "French drains that collect water before it reaches your DeSoto foundation and carry it to a safe outlet, sized and routed for clay soil.",
    intro: [
      "A French drain is a trench lined with fabric, filled with gravel, with a perforated pipe in the bottom. Water from the surrounding soil and surface flows into the gravel, enters the pipe, and is carried by gravity to an outlet away from the house. Installed along the side of a foundation that stays wet, it intercepts water before it saturates the clay under the slab.",
      "French drains work best when the problem is water moving across or through the soil toward the house, such as runoff from a neighbor's yard, a slope that drains toward the foundation, or a low side yard that holds water. They are not the right fix for every drainage issue. If the problem is just downspouts, extending them may be enough.",
      "In clay soil, design matters. The trench depth, fabric, gravel and outlet all need to suit how slowly clay drains, and the pipe needs a steady fall to an outlet where water can actually leave the property. We size and route each drain for your lot and show you where the water will go.",
    ],
    signs: [
      {
        title: "A side yard that stays soggy",
        text: "Narrow side yards between houses often hold water against the foundation for days.",
      },
      {
        title: "Runoff from higher ground",
        text: "Water flowing from a neighbor's yard or a slope toward your house during rain.",
      },
      {
        title: "Water coming under a fence or across the patio",
        text: "Visible sheets of water crossing toward the slab during storms.",
      },
      {
        title: "Erosion trails along the foundation",
        text: "Channels in soil or mulch that show where water runs along the house.",
      },
      {
        title: "Downspout extensions not solving it",
        text: "If extending downspouts did not stop pooling, the water is likely coming from somewhere else.",
      },
    ],
    whyItMatters: [
      "DeSoto's clay soil drains slowly. When runoff collects along a foundation, it can stay there long after a storm, swelling the soil and pushing that side of the slab up. In summer, that same area may dry out and shrink faster than the rest, so the foundation moves both ways.",
      "Many neighborhoods have homes on slightly sloped lots and narrow side yards, where water from several roofs and yards ends up in the same place. A properly installed French drain gives that water a path away from the house so the soil stays more stable.",
    ],
    included: [
      {
        title: "Site layout and slope check",
        text: "Determining the trench route, depth and fall to a usable outlet.",
      },
      {
        title: "Trench, fabric and gravel",
        text: "A fabric-wrapped gravel trench that lets water in while keeping clay fines out of the pipe.",
      },
      {
        title: "Perforated drain pipe",
        text: "Pipe laid with continuous fall to move water to the outlet.",
      },
      {
        title: "Outlet and discharge",
        text: "A pop-up emitter, daylight outlet or tie-in that releases water safely away from the foundation.",
      },
    ],
    process: [
      {
        title: "Watch where the water goes",
        text: "We look at pooling, erosion and slope, and ask what you see during heavy rain.",
      },
      {
        title: "Design the route",
        text: "We lay out the trench, depth and outlet, mark utilities and sprinkler lines, and price it per linear foot.",
      },
      {
        title: "Install the drain",
        text: "We dig the trench, place fabric, gravel and pipe, and backfill.",
      },
      {
        title: "Flow test and restore",
        text: "We run water through the drain to confirm flow, then restore the surface.",
      },
    ],
    faqs: [
      {
        question: "How much does a French drain cost in DeSoto?",
        answer:
          "Typical North Texas pricing for a French drain is about $25 to $60 per linear foot, depending on depth, access, outlet type and how much surface restoration is needed. A short run along one side of a house may be a few hundred to a few thousand dollars. Final pricing follows a site visit.",
      },
      {
        question: "Do French drains work in clay soil?",
        answer:
          "Yes, when they are designed for it. Clay drains slowly, so the drain mainly works by intercepting surface and shallow water before it reaches the foundation. Filter fabric keeps clay fines from clogging the gravel, and the pipe needs steady fall to a working outlet.",
      },
      {
        question: "French drain or downspout extensions: which do I need?",
        answer:
          "If the water problem is mainly roof water from downspouts, extensions or buried downspout lines are simpler and cheaper. If water is coming from the yard, a slope or a neighbor's property, a French drain handles that better. Many homes need a combination.",
      },
      {
        question: "Where does the water go?",
        answer:
          "It goes to an outlet away from the foundation, usually a pop-up emitter in the lawn, a spot where the pipe can daylight on a slope, or toward the street where allowed. We plan the outlet first, because a drain without a good outlet just moves the problem.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Commercial Foundation Repair
  // ---------------------------------------------------------------------------
  {
    path: "/commercial-foundation-repair-desoto-tx/",
    shortName: "Commercial Foundation Repair",
    summary:
      "Foundation evaluation and repair for small commercial buildings, retail, offices and multifamily properties in DeSoto, planned around tenants and operations.",
    intro: [
      "Commercial foundations face the same expansive clay as homes, but the stakes and logistics are different. Retail storefronts, small office buildings, churches, multifamily properties and light industrial spaces in DeSoto often have larger slabs, heavier loads, and tenants or customers who need the building open while the work is done.",
      "Common commercial issues include cracked slabs in retail and warehouse floors, separation at storefront glass and door frames, settlement at building corners, and movement at joints between building sections. Parking lot and sidewalk drainage often contributes, sending water toward the building or ponding against the slab.",
      "We start with a site evaluation and elevation survey, review any existing drawings or engineering reports, and coordinate with your structural engineer when the project calls for it. Repair plans are written with phasing in mind so the work can be scheduled around business hours and occupied spaces where possible.",
    ],
    signs: [
      {
        title: "Storefront doors and glass binding",
        text: "Commercial doors that drag or glass frames that crack or separate often signal settlement.",
      },
      {
        title: "Floor cracks in retail or warehouse slabs",
        text: "Cracks that widen, telegraph through flooring, or show vertical offset.",
      },
      {
        title: "Exterior masonry cracks",
        text: "Stair-step or vertical cracks in brick, block or stone at corners and openings.",
      },
      {
        title: "Ponding against the building",
        text: "Parking lot or sidewalk water draining toward and collecting at the foundation.",
      },
      {
        title: "Separation at expansion joints or additions",
        text: "Gaps opening between building sections built at different times.",
      },
    ],
    whyItMatters: [
      "Commercial properties along corridors like Hampton Rd, Belt Line Rd, I-35E and near DeSoto Town Center and Hillside Village sit on the same North Texas clay that moves residential slabs. Larger buildings and paved lots concentrate runoff, which can make moisture differences under the slab more pronounced.",
      "For owners and property managers, foundation movement affects tenant satisfaction, accessibility at entrances, insurance, and property value. Addressing it with documentation and a clear scope makes it easier to budget, communicate with tenants, and show lenders or buyers what was done.",
    ],
    included: [
      {
        title: "Site evaluation and elevation survey",
        text: "Measured readings across the floor plan and a review of drainage, joints and visible damage.",
      },
      {
        title: "Engineer coordination",
        text: "Working from or alongside a structural engineer's design where the project requires it.",
      },
      {
        title: "Pier systems",
        text: "Pressed concrete or steel piers sized to the building loads and soil conditions.",
      },
      {
        title: "Slab crack and joint repair",
        text: "Epoxy or polyurethane injection and joint repair after the structure is stabilized.",
      },
      {
        title: "Site drainage corrections",
        text: "Downspout, grading and drain improvements to move runoff away from the building.",
      },
    ],
    process: [
      {
        title: "Site walk with the owner or manager",
        text: "We review the concerns, building history, drawings and any prior reports.",
      },
      {
        title: "Survey and scope",
        text: "We measure, document and prepare a written scope, coordinating with an engineer if needed.",
      },
      {
        title: "Phase and schedule",
        text: "We plan work areas, access and timing around tenants, customers and business hours.",
      },
      {
        title: "Repair and close out",
        text: "We complete the work, take final readings, and provide documentation for your records.",
      },
    ],
    faqs: [
      {
        question: "Do commercial foundation repairs require an engineer?",
        answer:
          "Many commercial projects do, because of building size, loads, permits or lender and insurer requirements. A structural engineer's report in North Texas is often $400 to $800 for simpler buildings and more for larger ones. We can work from an existing engineering design or coordinate with your engineer.",
      },
      {
        question: "Can the business stay open during repairs?",
        answer:
          "Often, yes. Exterior pier work can usually proceed while the building is open, with the work area fenced off. Interior work can be phased by area or scheduled after hours. We plan the sequence with you to limit disruption.",
      },
      {
        question: "How is commercial foundation repair priced?",
        answer:
          "Pricing depends on the number and type of piers, building loads, interior access, and any drainage or crack work. Commercial jobs vary widely, so we give a written scope and price after the site evaluation rather than a general range. Engineering, permits and after-hours work are listed separately.",
      },
      {
        question: "What types of commercial properties do you work on?",
        answer:
          "We focus on small to mid-size commercial buildings in DeSoto, such as retail, office, churches, multifamily and light industrial. If your property is larger or has special requirements, we will tell you after the initial visit whether it is a good fit.",
      },
    ],
    ctaType: "inspection",
  },

  // ---------------------------------------------------------------------------
  // SUB: Emergency Foundation Leak Repair
  // ---------------------------------------------------------------------------
  {
    path: "/emergency-foundation-leak-repair-desoto-tx/",
    shortName: "Emergency Leak Repair",
    summary:
      "Water coming up through the floor or a leak you cannot stop? Call now. We help you shut it down, find the source and plan the repair fast.",
    intro: [
      "Some foundation leaks cannot wait. Water coming up through the slab or flooring, a burst line flooding the yard next to the house, a sudden loud hiss under the floor, or a meter spinning fast with everything off all mean water is pouring into the soil under or around your home right now. The first goal is to stop the water. The second is to find out exactly where it is coming from.",
      "When you call, we will help you shut off the main water valve if you have not already, and tell you what to do about the water heater if a hot line is involved. We prioritize active leaks and get someone out to test and locate the problem as soon as we can.",
      "Once the source is confirmed, we explain the quickest safe repair, whether that is a spot repair, a temporary bypass to restore water, or a reroute, and give you written pricing. After the emergency is handled, we check whether the leak affected the foundation.",
    ],
    signs: [
      {
        title: "Water coming up through the floor",
        text: "Water seeping from tile grout, around baseboards or under flooring is an active slab leak.",
      },
      {
        title: "Sudden loud running water sound",
        text: "A burst line under the slab or in a wall can be loud enough to hear across the room.",
      },
      {
        title: "Water meter spinning quickly",
        text: "Fast movement on the meter with fixtures off means a large leak somewhere on the supply side.",
      },
      {
        title: "Flooding or bubbling soil near the house",
        text: "Water rising out of the ground near the foundation can be a broken service or supply line.",
      },
      {
        title: "Sudden loss of water pressure",
        text: "A major break can drop pressure throughout the house almost immediately.",
      },
    ],
    whyItMatters: [
      "A major pressurized leak can put a large amount of water into DeSoto's clay soil in a short time. Clay near the leak can swell, and fast-moving water can wash soil away from under the slab. The faster the water is shut off, the smaller the area affected.",
      "Many older DeSoto homes have copper supply lines and cast-iron drains under the slab that are decades old. When they fail, it is often without warning. Knowing where your main shutoff valve is, usually near the street at the meter or where the line enters the house, is one of the most useful things you can do before an emergency happens.",
    ],
    included: [
      {
        title: "Shutoff guidance by phone",
        text: "Help locating and closing the main valve and handling the water heater while help is on the way.",
      },
      {
        title: "Rapid leak testing and location",
        text: "Pressure testing and electronic location to pinpoint the break.",
      },
      {
        title: "Temporary bypass when needed",
        text: "Isolating the leaking line so water can be restored to the rest of the house where possible.",
      },
      {
        title: "Permanent repair options",
        text: "Spot repair, reroute or tunneling, explained with written pricing once the leak is found.",
      },
    ],
    process: [
      {
        title: "Call and shut off the water",
        text: "We walk you through closing the main valve and tell you what to protect inside the home.",
      },
      {
        title: "Arrive, test and locate",
        text: "We confirm which line failed and find the leak location.",
      },
      {
        title: "Stop the leak",
        text: "We make the repair or set up a temporary bypass, with your approval on written pricing.",
      },
      {
        title: "Follow up on the foundation",
        text: "After the emergency, we check for soil saturation and foundation movement and advise next steps.",
      },
    ],
    faqs: [
      {
        question: "What should I do first if water is coming up through my floor?",
        answer:
          "Shut off the main water valve. It is usually at the meter box near the street or where the line enters the house. If hot water is involved, turn off the water heater as well. Move valuables and electronics away from the water, take photos for insurance, and call us so we can test and locate the leak.",
      },
      {
        question: "How fast can you get to my home?",
        answer:
          "We prioritize active leaks and will give you an honest arrival estimate when you call. Response time depends on the time of day and current workload. If water is still flowing and you cannot shut it off, tell us right away so we can help by phone.",
      },
      {
        question: "Can you restore my water the same day?",
        answer:
          "In many cases, yes. If the leak is on one branch line, we can often isolate that line so the rest of the house has water while the permanent repair is planned. If the main supply line has failed, restoring water depends on how quickly the repair or reroute can be made.",
      },
      {
        question: "Is an emergency leak repair more expensive?",
        answer:
          "Emergency and after-hours work can carry additional charges, and we will tell you about any before work starts. The repair itself usually falls in typical North Texas ranges: $250 to $600 for detection, $1,500 to $4,000 for a spot repair, or $2,000 to $6,000 for a partial reroute. Final pricing follows testing.",
      },
    ],
    ctaType: "emergency",
    urgent: true,
  },
];
