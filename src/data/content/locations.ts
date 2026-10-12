import type { LocationContent } from "@/types/content";

// Starter copy for DeSoto-only location pages. Every path matches a "Location"
// row in data-source/page-index.txt. Keep all copy inside DeSoto TX.

export const locationContent: LocationContent[] = [
  // ---------------------------------------------------------------------------
  // City
  // ---------------------------------------------------------------------------
  {
    path: "/service-area/desoto-tx-foundation-repair/",
    kind: "city",
    // The map's H1 matches /foundation-repair-desoto-tx/; this hub gets its own.
    h1Override: "DeSoto TX Foundation Repair Service Area",
    areaName: "DeSoto TX",
    shortName: "DeSoto TX",
    summary:
      "Foundation repair, leak detection and drainage work for homes and buildings across DeSoto TX, from the I-35E side of town to the west side along Westmoreland Rd.",
    intro: [
      "DeSoto sits in southern Dallas County on the same expansive clay that causes foundation trouble across North Texas. That clay swells after heavy spring and fall rain, then shrinks and cracks through long, hot summers. A slab that rides on it moves a little every year, and over time that movement shows up as cracked brick, sticking doors, gaps around windows and floors that are no longer level.",
      "This page is the starting point for DeSoto homeowners and property owners who think something is wrong with their foundation but are not sure what. We work only in DeSoto, so every inspection, leak test and repair plan is built around local soil, local drainage patterns and the kinds of houses that were built here, mostly brick on slab from the 1970s through the 1990s, with some older pier-and-beam homes and newer 2000s builds.",
      "If you see a new crack, notice water where it should not be or hear water running when every faucet is off, start with an inspection. Finding the cause first, whether that is soil movement, a plumbing leak under the slab or water draining toward the house, is what keeps a repair from failing a few seasons later.",
    ],
    localFactors: [
      {
        title: "Expansive clay soil",
        text: "DeSoto's clay soils swell when wet and shrink in drought. That seasonal cycle lifts and drops parts of a slab unevenly, which is the most common driver of cracks and settlement here.",
      },
      {
        title: "Wet springs, dry summers",
        text: "Heavy spring and fall storms followed by months of heat put the soil through big moisture swings. Damage often shows up right after the first hard rain following a dry stretch.",
      },
      {
        title: "Under-slab plumbing",
        text: "Most DeSoto homes have water and drain lines running under the slab. A leak there softens the soil in one spot and can lift or undermine that section of the foundation.",
      },
      {
        title: "Grading and downspouts",
        text: "Flat lots, settled flower beds and downspouts that empty at the slab edge let water collect against the foundation. Fixing drainage is often part of a lasting repair.",
      },
      {
        title: "Trees near the house",
        text: "Mature trees pull large amounts of moisture from the soil during summer, which can cause the slab to drop on the side closest to the tree.",
      },
    ],
    landmarks: [
      "Hampton Rd",
      "Belt Line Rd",
      "Pleasant Run Rd",
      "I-35E",
      "DeSoto Town Center",
      "Windmill Hill Nature Preserve",
    ],
    housingNote:
      "Most DeSoto homes are 1970s-1990s brick on slab, with a smaller share of older pier-and-beam houses and newer 2000s subdivisions built on post-tension slabs.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/foundation-crack-repair-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do you serve all of DeSoto TX?",
        answer:
          "Yes. We work only in DeSoto, which means every neighborhood in the city is inside our service area, from the subdivisions near I-35E on the east side to the homes out toward Westmoreland Rd and Cockrell Hill Rd on the west side. If your property has a DeSoto street address, we can schedule an inspection there.",
      },
      {
        question: "Why do so many DeSoto homes have foundation problems?",
        answer:
          "The main reason is the soil. DeSoto is built on expansive clay that swells when it gets wet and shrinks when it dries out. That movement pushes and pulls on slabs year after year. Add poor drainage, large trees near the house or a plumbing leak under the slab, and the movement becomes uneven enough to crack walls and tilt floors.",
      },
      {
        question: "What should I do first if I find a crack?",
        answer:
          "Take a dated photo, measure the width if you can and note whether doors or windows nearby have started sticking. Then schedule an inspection. Many small cracks are cosmetic, but a crack that is growing, uneven from one side to the other or paired with other symptoms usually points to movement that should be checked before it gets worse.",
      },
      {
        question: "Can a plumbing leak cause foundation damage?",
        answer:
          "Yes. A leak in a water or drain line under the slab keeps the soil in that area wet, which can make the clay swell and lift the slab or wash out soil and let it settle. Signs include a higher water bill, warm spots on the floor, damp flooring or the sound of running water when nothing is on.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // City + service (local / service-area versions of the root service pages)
  // ---------------------------------------------------------------------------
  {
    path: "/service-area/desoto-tx-foundation-leak-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Leak Repair Coverage",
    seoTitleOverride: "DeSoto TX Foundation Leak Repair Service Area | Local Crews",
    h1Override: "Foundation Leak Repair Coverage Across DeSoto TX",
    summary:
      "Where foundation leaks tend to show up in DeSoto, which homes are most exposed and how leak calls are handled anywhere in the city.",
    intro: [
      "Foundation leaks in DeSoto follow the age of the housing. Neighborhoods built in the late 1960s and 1970s, such as Hampton Place Estates, are more likely to have original drain lines under the slab that have been in the ground for decades. Homes from the 1980s and 1990s, like much of Meadowbrook Estates, Thorntree and Silver Creek Crossing, can still develop supply-line leaks as the slab and soil move around the pipes.",
      "Newer subdivisions are not exempt. In places like Elerson Ranch, leaks are less about old pipe and more about shifting clay putting stress on lines and fittings. Wherever the house sits, the pattern is the same: water under the slab changes the soil, and the soil moves the foundation.",
      "This page covers how we handle leak calls across DeSoto. For a full explanation of the leak repair process itself, see our main foundation leak repair page. If water is actively coming up through a floor or the meter is spinning with everything off, call right away so the water can be shut off and the leak located.",
    ],
    localFactors: [
      {
        title: "Older drain lines in 1960s-70s homes",
        text: "Homes from the late 1960s and 1970s may still have original drain piping under the slab. Age, soil movement and root intrusion can all lead to cracks or separated joints.",
      },
      {
        title: "Clay movement around pipes",
        text: "As DeSoto's clay swells and shrinks, it shifts the slab and the pipes below it. Fittings and joints are common failure points, even in newer homes.",
      },
      {
        title: "Long service runs on large lots",
        text: "Bigger lots, like the estate properties in Frost Farms, mean longer water and sewer runs between the street and the house, and more line that can leak out of sight.",
      },
      {
        title: "Summer pressure on the ground",
        text: "During long dry spells, a leak may be the only wet spot under the house. That contrast can make one section of the slab swell while the rest stays dry.",
      },
    ],
    landmarks: ["Hampton Rd", "Pleasant Run Rd", "Belt Line Rd", "Polk St", "Ten Mile Creek"],
    housingNote:
      "DeSoto's mix of 1960s-70s slabs, 1980s-90s brick homes and 2000s post-tension builds means leak causes vary from old drain piping to stress on newer lines.",
    serviceFocus: [
      "/foundation-leak-repair-desoto/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/emergency-foundation-leak-repair-desoto-tx/",
      "/water-line-leak-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Which DeSoto homes are most likely to have foundation leaks?",
        answer:
          "Older homes with original under-slab plumbing carry the most risk, especially houses from the late 1960s and 1970s. That said, any slab home in DeSoto can develop a leak because the clay soil moves the slab and the pipes beneath it. We see leak questions from all over the city, not just from older neighborhoods.",
      },
      {
        question: "Do you take leak calls in every part of DeSoto?",
        answer:
          "Yes. Our service area is DeSoto only, so a home off Hampton Rd in the middle of town gets the same coverage as one near I-35E or out toward Westmoreland Rd. If you think there is an active leak, tell us when you call so we can prioritize getting the water shut off and the source found.",
      },
      {
        question: "How is this page different from your main leak repair page?",
        answer:
          "Our main foundation leak repair page explains the repair process, the methods and what to expect. This page focuses on DeSoto itself: where leaks tend to show up, how housing age changes the risk and how we cover the whole city. Use whichever one answers your question, then reach out for an inspection.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-foundation-crack-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Crack Repair Coverage",
    seoTitleOverride: "DeSoto TX Foundation Crack Repair Service Area | Local Crews",
    h1Override: "Foundation Crack Repair Across DeSoto TX Neighborhoods",
    summary:
      "How foundation cracks show up in different DeSoto neighborhoods and housing types, and how crack inspections are handled across the city.",
    intro: [
      "Cracks look different depending on where you live in DeSoto. In the brick homes that make up much of the city, the first sign is often a stair-step crack in the mortar near a corner or above a window. In older slab homes, you may see cracks in tile or a hairline crack running across the garage floor. In newer homes, small drywall cracks over doorways are common in the first years as the house settles in.",
      "Timing matters too. Many DeSoto homeowners notice new cracks after the first heavy rain that follows a dry summer, when the clay swells quickly against a slab that had dropped during the drought. A crack that opens and closes with the seasons tells a different story than one that keeps widening.",
      "This is the local version of our crack repair information. For repair methods and what a crack repair includes, see the main foundation crack repair page. Here we focus on what we see across DeSoto and how to decide whether a crack needs a professional look.",
    ],
    localFactors: [
      {
        title: "Brick veneer shows movement early",
        text: "Most DeSoto homes have brick exteriors. Brick does not flex, so even small slab movement shows up as stair-step cracks in the mortar joints.",
      },
      {
        title: "Rain after drought",
        text: "Cracks often appear or widen when heavy rain hits dry, shrunken clay. The soil swells unevenly and pushes up on parts of the slab.",
      },
      {
        title: "Corner and tree-side cracks",
        text: "Corners of the house and the side nearest a large tree tend to move the most, so cracks often cluster there.",
      },
      {
        title: "Garage slab cracks",
        text: "Garage floors in many older DeSoto homes have shrinkage cracks that are not structural. Telling them apart from movement cracks is part of the inspection.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Wintergreen Rd", "Westmoreland Rd", "Grimes Park"],
    housingNote:
      "DeSoto's brick-on-slab homes from the 1970s-1990s show crack patterns early because brick veneer cannot flex with the soil.",
    serviceFocus: [
      "/foundation-crack-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/foundation-repair-desoto-tx/",
      "/slab-foundation-repair-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
    ],
    faqs: [
      {
        question: "Are foundation cracks common in DeSoto?",
        answer:
          "Yes. Because DeSoto is built on expansive clay, most homes go through some seasonal movement, and brick exteriors tend to show it as cracks. Many are minor, but cracks that keep growing, run in a stair-step pattern through brick or come with sticking doors and uneven floors should be inspected.",
      },
      {
        question: "Why did a crack show up right after it rained?",
        answer:
          "When heavy rain follows a dry period, the clay under and around the house absorbs water and swells. If one side swells faster than another, the slab is pushed unevenly and a crack can open or widen. That is common in DeSoto in spring and fall. Note the date and width so changes can be tracked.",
      },
      {
        question: "Do you inspect cracks in every DeSoto neighborhood?",
        answer:
          "Yes. We serve DeSoto only, so every neighborhood in the city is covered, whether your home is in an older subdivision near the center of town or a newer one on the edges. A crack inspection looks at the crack itself plus floor levels, doors, windows and drainage around the house.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-house-foundation-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "House Repair Coverage",
    seoTitleOverride: "DeSoto TX House Foundation Repair Service Area | Home Help",
    h1Override: "House Foundation Repair for DeSoto TX Homes by Era",
    summary:
      "A local look at house foundation repair in DeSoto: which home styles and building eras see which problems, and how residential repairs are covered citywide.",
    intro: [
      "Residential foundation problems in DeSoto tend to line up with when a house was built. Midsize homes from the late 1960s and 1970s, like those in Hampton Place Estates, often have conventionally reinforced slabs and older plumbing. Larger brick homes from the late 1970s through the 1990s, found in areas such as Meadowbrook Estates, Thorntree and Creek Tree Estates, have had decades of clay movement to show wear. Homes built in the 2000s, like Elerson Ranch and Candle Meadow, usually sit on post-tension slabs.",
      "Each of those groups calls for a slightly different approach. A 1970s house may need leak testing and leveling. A 1990s two-story may need attention at heavy corners. A newer home may mostly need drainage corrected before small movement becomes a bigger issue.",
      "For details on how residential foundation repair works, see our main house foundation repair page. This page is about DeSoto's homes specifically and how we cover them across the city.",
    ],
    localFactors: [
      {
        title: "Housing age",
        text: "The year a DeSoto home was built tells a lot about its slab design, plumbing materials and how long it has been exposed to soil movement.",
      },
      {
        title: "Two-story and larger homes",
        text: "Larger brick homes put more load on certain parts of the slab. Uneven movement under those areas can show up as cracks on the second floor.",
      },
      {
        title: "Additions and patios",
        text: "Room additions and patio slabs poured later often move differently than the original slab, which leaves cracks where they meet.",
      },
      {
        title: "Yard drainage",
        text: "Flower beds, flat yards and short downspouts send water toward the house. Many residential repairs in DeSoto include drainage fixes.",
      },
    ],
    landmarks: ["Hampton Rd", "Pleasant Run Rd", "Parkerville Rd", "Cockrell Hill Rd", "Moseley Park"],
    housingNote:
      "DeSoto homes range from late 1960s slabs to 1980s-90s brick homes and 2000s post-tension builds, with a small number of older pier-and-beam houses.",
    serviceFocus: [
      "/house-foundation-repair-desoto-tx/",
      "/home-foundation-repair-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
      "/house-leveling-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Does the age of my DeSoto home change the repair approach?",
        answer:
          "Often, yes. Older homes from the 1960s and 1970s are more likely to need plumbing checked along with the foundation. Homes from the 1980s and 1990s have had longer exposure to clay movement. Newer homes on post-tension slabs usually need a different kind of evaluation. An inspection takes the home's age and construction into account.",
      },
      {
        question: "Can an addition or patio cause foundation cracks?",
        answer:
          "It can. A room addition or patio poured after the original house often sits on soil that was disturbed or compacted differently, so it moves on its own schedule. Cracks along the joint between old and new sections are common in DeSoto. Some are cosmetic and some point to settlement that needs repair.",
      },
      {
        question: "Do you handle residential repairs anywhere in DeSoto?",
        answer:
          "Yes. Our service area covers all of DeSoto, so any home with a DeSoto street address is included. That covers older neighborhoods near the center of town and newer subdivisions on the edges of the city.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-foundation-repair-company/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Local Company",
    seoTitleOverride: "Local DeSoto TX Foundation Repair Company | Service Area",
    h1Override: "Choosing a Local Foundation Repair Company in DeSoto TX",
    summary:
      "What it means to hire a foundation repair company that works only in DeSoto, and the questions DeSoto homeowners should ask before signing anything.",
    intro: [
      "When you compare foundation repair companies in DeSoto, local knowledge matters. A crew that works only in DeSoto sees the same clay soil, the same drainage patterns and the same types of houses over and over. That makes it easier to recognize when a crack is seasonal, when a leak is the real cause and when a home actually needs piers.",
      "We focus on DeSoto and nowhere else. That keeps the service area simple: if your property is in DeSoto, from the neighborhoods near I-35E to the homes along Westmoreland Rd and Cockrell Hill Rd, it is covered. It also means inspections can be scheduled around the city without long drive times eating into the day.",
      "This page is about choosing a provider, not the repair itself. For the full overview of how we work, see our main foundation repair company page. Below are local factors worth asking any company about.",
    ],
    localFactors: [
      {
        title: "Does the company check for leaks?",
        text: "In DeSoto, under-slab plumbing leaks are a common cause of movement. A company that only quotes piers without considering leaks may miss the source.",
      },
      {
        title: "Does the plan address drainage?",
        text: "Water collecting against the slab keeps clay moving. A good repair plan in DeSoto usually covers grading, downspouts or drains where needed.",
      },
      {
        title: "Is the explanation specific to your house?",
        text: "Ask for floor elevation readings and a clear reason for each recommended repair, not a generic package.",
      },
      {
        title: "How far away are they?",
        text: "A company that works locally can come back to check on a repair after a wet season without a long trip.",
      },
    ],
    landmarks: ["DeSoto Town Center", "Hampton Rd", "Pleasant Run Rd", "I-35E"],
    housingNote:
      "Most DeSoto homes are brick on slab from the 1970s-1990s, so a local company should be comfortable diagnosing slab movement and under-slab leaks.",
    serviceFocus: [
      "/foundation-repair-company-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/foundation-repair-desoto-tx/",
      "/foundation-leak-repair-desoto/",
    ],
    faqs: [
      {
        question: "Why choose a foundation company that only works in DeSoto?",
        answer:
          "A company focused on one city sees the same soil and housing conditions every day, which helps with diagnosis. It also makes scheduling and follow-up visits easier because travel time is short. You still should ask questions, compare written recommendations and make sure the plan addresses the cause, not just the symptom.",
      },
      {
        question: "What should I ask before hiring a foundation repair company?",
        answer:
          "Ask how they determined the cause, whether they tested for plumbing leaks, what floor elevation readings showed and how drainage will be handled. Ask for the scope of work and warranty terms in writing. A clear explanation tied to your house is a better sign than a quote that looks the same for every home.",
      },
      {
        question: "Do you serve businesses as well as homes in DeSoto?",
        answer:
          "Yes. Along with homes, we look at small commercial buildings in DeSoto, such as shops and offices in the central part of town. Commercial work has its own considerations, so see our commercial foundation repair page for details.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-slab-leak-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Slab Leak Coverage",
    seoTitleOverride: "DeSoto TX Slab Leak Repair Service Area | Local Leak Crews",
    h1Override: "Slab Leak Repair Coverage for DeSoto TX Homes",
    summary:
      "Where slab leaks show up across DeSoto, what local conditions make them worse and how slab leak calls are covered citywide.",
    intro: [
      "Nearly every DeSoto home built on a slab has water and drain lines running underneath it. When one of those lines leaks, the water has nowhere to go but into the clay. In DeSoto, that can mean one section of the slab swells and lifts while the rest of the house stays put, or soil washes away and lets that section drop.",
      "Slab leak symptoms in DeSoto homes often show up in summer, when the rest of the yard is dry and a leak under the house stands out. Homeowners notice a warm spot on the floor, a higher water bill, a musty smell or a crack that seems to come from nowhere. In older neighborhoods with original plumbing, leaks can come from aging drain lines as well as supply lines.",
      "For the slab leak repair process, rerouting options and what is involved, see our main slab leak repair page. This page focuses on DeSoto conditions and coverage.",
    ],
    localFactors: [
      {
        title: "Plumbing age by neighborhood",
        text: "Homes from the late 1960s and 1970s are more likely to have aging under-slab drain lines than homes built in the 2000s.",
      },
      {
        title: "Soil movement stresses pipes",
        text: "When clay swells and shrinks, the slab and the pipes below it shift. Joints and fittings under the slab take that stress.",
      },
      {
        title: "Hot water line leaks",
        text: "A leak on a hot water line under the slab can create a warm spot on the floor, one of the more recognizable slab leak signs.",
      },
      {
        title: "Dry season contrast",
        text: "In a dry DeSoto summer, a leak keeps one area of soil wet and swollen while the rest shrinks, which increases uneven movement.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Wintergreen Rd", "Ten Mile Creek"],
    housingNote:
      "DeSoto's slab homes span the late 1960s through the 2000s, so slab leaks range from aging drain lines in older houses to stressed fittings in newer ones.",
    serviceFocus: [
      "/slab-leak-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/underground-leak-detection-desoto-tx/",
      "/emergency-foundation-leak-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "How do I know if my DeSoto home has a slab leak?",
        answer:
          "Common signs include a water bill that jumps without explanation, a warm or damp spot on the floor, the sound of running water when nothing is on, a musty smell and new cracks in flooring. You can also turn off every fixture and watch the water meter. If it keeps moving, there may be a leak.",
      },
      {
        question: "Are slab leaks more common in older DeSoto neighborhoods?",
        answer:
          "Older homes do carry more risk because their pipes have been in the ground longer, and some still have original drain lines. But clay movement can stress pipes in homes of any age, so slab leaks show up in newer DeSoto subdivisions too. Leak detection is the only reliable way to know.",
      },
      {
        question: "Can a slab leak damage my foundation?",
        answer:
          "It can. Water from a slab leak soaks into the clay under the house. Clay that gets wet swells and can lift that part of the slab, and steady flow can also wash soil away and leave a void. Either one can lead to cracks and uneven floors if the leak goes on long enough.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-foundation-inspection/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Inspection Coverage",
    seoTitleOverride: "DeSoto TX Foundation Inspection Service Area | Local Checks",
    h1Override: "Foundation Inspections Anywhere in DeSoto TX",
    summary:
      "Who in DeSoto typically asks for a foundation inspection, what local conditions an inspection looks for and how inspections are scheduled across the city.",
    intro: [
      "DeSoto homeowners ask for foundation inspections for a lot of different reasons. Some just bought an older home and want a baseline. Some are getting ready to sell and want to know what a buyer's inspector will find. Others noticed a crack after a storm or a door that no longer latches. An inspection is the lowest-pressure way to get a clear answer.",
      "Inspections in DeSoto are shaped by local conditions. We look for the classic signs of clay movement, check floor elevations, look at grading and downspouts and watch for signs of an under-slab leak. In older homes, plumbing gets more attention. In newer homes on post-tension slabs, the focus is often on drainage and early movement.",
      "For details on what a foundation inspection includes, see our main inspection page. This page covers DeSoto-specific situations and how we reach every part of the city.",
    ],
    localFactors: [
      {
        title: "Buying or selling",
        text: "Many DeSoto homes are 30 to 50 years old. A pre-purchase or pre-listing inspection helps set expectations before negotiations start.",
      },
      {
        title: "After a weather swing",
        text: "The first heavy rain after a dry summer is a common time for new cracks. That is a good time to check what changed.",
      },
      {
        title: "Drainage review",
        text: "An inspection here includes grading, gutters and downspouts because water control is tied so closely to clay movement.",
      },
      {
        title: "Leak screening",
        text: "Signs of an under-slab leak, such as damp floors or a high water bill, are noted so leak detection can follow if needed.",
      },
    ],
    landmarks: ["Hampton Rd", "Pleasant Run Rd", "Parkerville Rd", "Westmoreland Rd", "DeSoto Town Center"],
    housingNote:
      "Inspections in DeSoto cover everything from late 1960s slabs and older pier-and-beam homes to 2000s post-tension builds.",
    serviceFocus: [
      "/foundation-inspection-desoto-tx/",
      "/foundation-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/foundation-crack-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Should I get a foundation inspection before buying a DeSoto home?",
        answer:
          "It is a good idea, especially for homes built before 2000. A general home inspector will note obvious issues, but a foundation-focused inspection looks closer at floor elevations, crack patterns, drainage and possible leaks. That gives you better information before you commit, and it can help with negotiations if repairs are needed.",
      },
      {
        question: "What does an inspection look at in a DeSoto home?",
        answer:
          "We check interior and exterior cracks, doors and windows, floor levels, the grading around the house, gutters and downspouts and signs of plumbing leaks. In pier-and-beam homes, we also look at the crawl space. The goal is to find out whether there is movement, what is causing it and whether it needs repair.",
      },
      {
        question: "Is every DeSoto neighborhood covered for inspections?",
        answer:
          "Yes. We work only in DeSoto, so any property in the city can be scheduled, whether it is near I-35E on the east side, in the middle of town along Hampton Rd or out toward Westmoreland Rd on the west side.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-foundation-leveling/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Leveling Coverage",
    seoTitleOverride: "DeSoto TX Foundation Leveling Service Area | Settling Repair",
    h1Override: "Foundation Leveling for Settling Homes in DeSoto TX",
    summary:
      "Where settlement shows up in DeSoto homes, what drives it locally and how leveling work is covered across the city.",
    intro: [
      "Settlement in DeSoto usually happens slowly. A floor starts to slope toward one corner, a door drifts out of square, or a gap opens between the baseboard and the floor. In many homes, the low side is the one closest to a large tree, a poorly drained corner or the spot where an old plumbing leak softened the soil.",
      "Leveling is most common in DeSoto homes that have been through decades of wet-dry cycles. Brick homes from the 1970s through the 1990s often reach a point where seasonal movement has added up to a noticeable slope. Older pier-and-beam houses can sag as piers shift or wood supports wear. Even newer slabs can need leveling if drainage has been poor since the home was built.",
      "See our main foundation leveling page for methods and what a leveling job involves. This page focuses on why DeSoto homes settle and how we cover leveling across the city.",
    ],
    localFactors: [
      {
        title: "Years of seasonal cycles",
        text: "Each summer drought and wet season moves the clay. Over decades, small shifts can add up to a measurable slope.",
      },
      {
        title: "Tree moisture draw",
        text: "Large trees pull water from the soil in summer, which can cause the nearest part of the slab to drop.",
      },
      {
        title: "Past leaks",
        text: "An old or current under-slab leak can soften or wash out soil, leaving one area lower than the rest.",
      },
      {
        title: "Low, wet corners",
        text: "Corners where water collects after storms often settle differently than drier sides of the house.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Cockrell Hill Rd", "Parkerville Rd"],
    housingNote:
      "Settlement in DeSoto shows up most in 1970s-1990s brick-on-slab homes and older pier-and-beam houses, with some newer homes affected by poor drainage.",
    serviceFocus: [
      "/foundation-leveling-desoto-tx/",
      "/house-leveling-desoto-tx/",
      "/slab-foundation-repair-desoto-tx/",
      "/pier-and-beam-foundation-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Why do DeSoto homes settle unevenly?",
        answer:
          "Most of it comes back to the clay soil. Parts of the ground under a house get wetter or drier than others because of trees, drainage, shade or plumbing leaks. The clay swells and shrinks by different amounts in those spots, so one part of the slab ends up lower than the rest over time.",
      },
      {
        question: "How do I know if my floor slope needs leveling?",
        answer:
          "Signs include doors that swing open or closed on their own, gaps under doors or baseboards, cracks in tile and a marble that rolls to one side of the room. An inspection with floor elevation readings shows how much the floor has moved and where, which is how leveling decisions are made.",
      },
      {
        question: "Do you level pier-and-beam homes in DeSoto too?",
        answer:
          "Yes. Pier-and-beam homes are leveled differently from slabs, usually by adjusting or adding piers and shimming or replacing wood supports in the crawl space. Our pier and beam repair page has more detail on that work.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-foundation-drainage-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Drainage Coverage",
    seoTitleOverride: "DeSoto TX Foundation Drainage Service Area | Water Control",
    h1Override: "Foundation Drainage Fixes for DeSoto TX Yards and Lots",
    summary:
      "Common drainage problems on DeSoto lots, how they lead to foundation movement and how drainage repair is covered across the city.",
    intro: [
      "Many DeSoto lots are fairly flat, and after decades of landscaping, flower beds and settled soil, water often ends up flowing toward the house instead of away from it. Downspouts that empty right at the slab, beds edged with borders that trap water and low spots along the side yard are all common here.",
      "On DeSoto's expansive clay, that water does real damage. Clay right against the foundation swells after every storm and shrinks again in the heat, while soil farther out stays more stable. That difference is what pushes and pulls on the slab edge. Properties near creek areas and low ground, including parts of the city around Ten Mile Creek, can see heavier runoff during spring and fall storms.",
      "For drainage repair methods, see our main foundation drainage repair page. This page covers DeSoto conditions and the yard problems we look for across the city.",
    ],
    localFactors: [
      {
        title: "Flat lots",
        text: "Many DeSoto yards have little natural slope, so water does not move away from the house on its own.",
      },
      {
        title: "Downspouts at the slab",
        text: "Downspouts that dump water at the foundation soak the clay right where it does the most harm.",
      },
      {
        title: "Heavy storm runoff",
        text: "Intense spring and fall storms can overwhelm gutters and swales, especially on lots near creeks or low ground.",
      },
      {
        title: "Raised flower beds",
        text: "Beds built up against the house can hold water and slope it back toward the slab.",
      },
    ],
    landmarks: ["Ten Mile Creek", "Windmill Hill Nature Preserve", "Grimes Park", "Wintergreen Rd"],
    housingNote:
      "Drainage problems affect DeSoto homes of every era, from 1970s brick homes with settled yards to 2000s builds with builder-grade grading.",
    serviceFocus: [
      "/foundation-drainage-repair-desoto-tx/",
      "/french-drain-foundation-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Can poor drainage really damage a DeSoto foundation?",
        answer:
          "Yes. DeSoto's clay swells when it gets wet. If water collects against the slab after every storm, the soil along that edge goes through bigger swings than the rest, which pushes and pulls the foundation unevenly. Correcting drainage is often one of the most cost-effective ways to slow foundation movement.",
      },
      {
        question: "What drainage fixes are common in DeSoto?",
        answer:
          "Common fixes include extending downspouts, regrading soil so it slopes away from the house, reshaping flower beds, adding surface drains and installing French drains where water collects. The right fix depends on where the water comes from and where it can be sent.",
      },
      {
        question: "Do you check drainage as part of a foundation inspection?",
        answer:
          "Yes. In DeSoto, drainage and foundation movement are closely linked, so every inspection includes a look at grading, gutters, downspouts and low spots around the house. If drainage is part of the problem, the repair plan will say so.",
      },
    ],
  },
  {
    path: "/service-area/desoto-tx-pier-and-beam-foundation-repair/",
    kind: "city-service",
    areaName: "DeSoto TX",
    shortName: "Pier & Beam Coverage",
    seoTitleOverride: "DeSoto TX Pier and Beam Repair Service Area | Older Homes",
    h1Override: "Pier and Beam Repair for Older DeSoto TX Homes",
    summary:
      "Where pier-and-beam homes are found in DeSoto, the local conditions that affect crawl spaces and how pier-and-beam work is covered citywide.",
    intro: [
      "Most DeSoto homes are built on slabs, but the city also has older pier-and-beam houses, often on larger or older lots and in the older parts of town. These homes sit on piers with wood beams and joists over a crawl space, which means their problems look different from slab homes.",
      "In DeSoto, pier-and-beam problems usually come from the same clay soil that moves slabs, plus moisture in the crawl space. Piers can shift or sink as the soil swells and shrinks. Poor ventilation or standing water under the house can lead to wood rot, sagging floors and soft spots. Bouncy or sloping floors are often the first thing homeowners notice.",
      "See our main pier and beam repair page for the full repair process. This page focuses on DeSoto's older homes and how we cover pier-and-beam work across the city.",
    ],
    localFactors: [
      {
        title: "Older housing stock",
        text: "Pier-and-beam homes in DeSoto tend to be older than the city's typical slab homes, so wood supports have had more time to wear.",
      },
      {
        title: "Crawl space moisture",
        text: "Rain and poor drainage can leave water under the house. Moisture in the crawl space leads to rot and soft soil under piers.",
      },
      {
        title: "Clay movement under piers",
        text: "Piers sitting on clay can rise and drop with the seasons, leaving floors uneven from room to room.",
      },
      {
        title: "Plumbing access",
        text: "Pier-and-beam homes allow direct access to plumbing, which makes leaks easier to find but also easier to miss without a look underneath.",
      },
    ],
    landmarks: ["Hampton Rd", "Polk St", "Pleasant Run Rd", "Parkerville Rd"],
    housingNote:
      "Pier-and-beam homes are a small share of DeSoto housing, generally older houses rather than the 1970s-1990s slab homes that make up most of the city.",
    serviceFocus: [
      "/pier-and-beam-foundation-repair-desoto-tx/",
      "/crawl-space-foundation-repair-desoto-tx/",
      "/house-leveling-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Are there many pier-and-beam homes in DeSoto?",
        answer:
          "Not compared to slab homes. Most DeSoto houses built from the 1970s on are slab foundations. Pier-and-beam homes are more common among older houses and some properties on larger lots. If your home has a crawl space access door or vents along the base of the exterior wall, it is likely pier-and-beam.",
      },
      {
        question: "What are signs of pier-and-beam trouble?",
        answer:
          "Look for bouncy or soft floors, floors that slope toward the middle or one side, gaps at baseboards, doors that stick and musty odors coming from below. Outside, check for standing water near vents or along the base of the house. Any of these are worth having inspected.",
      },
      {
        question: "Can drainage affect a pier-and-beam home?",
        answer:
          "Yes. Water that drains under the house raises moisture in the crawl space, which can rot wood and soften soil under piers. Fixing grading and gutters is often part of a pier-and-beam repair plan in DeSoto.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // ZIP codes
  // ---------------------------------------------------------------------------
  {
    path: "/service-area/75115-foundation-repair/",
    kind: "zip",
    areaName: "75115",
    shortName: "75115",
    summary:
      "Foundation repair, leak detection and drainage service for properties in the 75115 ZIP code, which covers essentially every street address in DeSoto.",
    intro: [
      "If your home or building has a DeSoto street address, it is almost certainly in 75115. That ZIP code covers essentially the whole city, from neighborhoods near I-35E to homes along Westmoreland Rd, Cockrell Hill Rd and everything between. It includes older subdivisions near the center of town and newer ones on the edges.",
      "Because 75115 covers so much ground, the foundation problems inside it vary. Older 1960s and 1970s homes may need plumbing leaks ruled out. Brick homes from the 1980s and 1990s often show stair-step cracks from years of clay movement. Newer homes on post-tension slabs tend to need drainage and early movement checked.",
      "What ties them together is the soil. Every home in 75115 sits on North Texas expansive clay, which moves with the weather. Our service area is the same as this ZIP code, so any property in 75115 can be scheduled for an inspection.",
    ],
    localFactors: [
      {
        title: "Citywide clay soil",
        text: "All of 75115 sits on expansive clay that swells in wet seasons and shrinks in drought, the root cause of most foundation movement here.",
      },
      {
        title: "Range of housing ages",
        text: "The ZIP includes late 1960s homes, 1980s-90s brick homes and 2000s subdivisions, so the likely causes differ by house.",
      },
      {
        title: "Creek and low areas",
        text: "Ten Mile Creek and other low areas collect runoff during storms, so drainage is a bigger factor on some lots than others.",
      },
      {
        title: "Under-slab plumbing",
        text: "Slab homes throughout 75115 have plumbing under the foundation, and leaks there are a common trigger for movement.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Pleasant Run Rd", "I-35E", "Westmoreland Rd", "Ten Mile Creek"],
    housingNote:
      "75115 includes nearly all DeSoto housing: late 1960s slabs, 1980s-1990s brick on slab, 2000s post-tension builds and some older pier-and-beam homes.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/house-foundation-repair-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Is my address in 75115?",
        answer:
          "If you have a DeSoto street address, it is very likely 75115. That ZIP covers essentially all residential and business street addresses in the city. You can confirm on a utility bill or tax statement. Either way, if the property is in DeSoto, it is in our service area.",
      },
      {
        question: "What foundation problems are most common in 75115?",
        answer:
          "Cracks in brick and drywall, sticking doors, uneven floors and under-slab plumbing leaks are the most common. Nearly all of them trace back to clay soil moving with the weather, made worse by poor drainage, nearby trees or a leak keeping one area of soil wet.",
      },
      {
        question: "Do you cover the whole 75115 ZIP code?",
        answer:
          "Yes. Our service area is DeSoto, and 75115 covers essentially all of DeSoto, so any property in the ZIP can be scheduled for an inspection, leak test or repair estimate.",
      },
    ],
  },
  {
    path: "/service-area/75123-foundation-repair/",
    kind: "zip",
    areaName: "75123",
    shortName: "75123",
    summary:
      "75123 is DeSoto's PO Box ZIP code. If you get mail at a 75123 box, we can still inspect and repair your actual DeSoto property at its street address.",
    intro: [
      "75123 is a PO Box ZIP code tied to the DeSoto post office on S Hampton Rd. No homes or buildings use 75123 as a street address. If you use a 75123 box for mail, your house or business still has a physical DeSoto street address, which is almost always in 75115.",
      "We set up this page because many DeSoto residents and small businesses list 75123 on forms, invoices and online searches out of habit. If that is you, there is nothing extra to sort out. We serve all of DeSoto, so the property you own or rent is covered for inspections, leak detection and foundation repair.",
      "When you contact us, give the street address of the property that needs to be looked at, not the PO Box. That is where the inspection happens, and it is what we use for scheduling.",
    ],
    localFactors: [
      {
        title: "PO Box only",
        text: "75123 is used for post office boxes, not street addresses. Your property itself is in DeSoto's street-address ZIP.",
      },
      {
        title: "Same soil, same risks",
        text: "Whatever ZIP you use for mail, a DeSoto property sits on the same expansive clay that drives foundation movement across the city.",
      },
      {
        title: "Small businesses",
        text: "Many small businesses use PO boxes. If your building in DeSoto has foundation concerns, we can inspect it at its street address.",
      },
      {
        title: "Leak checks",
        text: "Under-slab leaks are a common cause of foundation movement in DeSoto. A leak check can be part of any inspection.",
      },
    ],
    landmarks: ["S Hampton Rd", "DeSoto Town Center", "Pleasant Run Rd"],
    housingNote:
      "No homes are addressed in 75123. The properties owned by 75123 box holders are regular DeSoto homes and buildings, mostly 1970s-1990s brick on slab.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/commercial-foundation-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "My mail goes to a 75123 PO Box. Can you still help?",
        answer:
          "Yes. 75123 is only used for PO boxes at the DeSoto post office. Your home or building has its own DeSoto street address, and that is the property we inspect. As long as the property is in DeSoto, it is in our service area. Just give us the street address when you reach out.",
      },
      {
        question: "Are there homes in the 75123 ZIP code?",
        answer:
          "No. 75123 is a PO Box ZIP, so no homes or buildings have it as their street address. Homes in DeSoto use the 75115 ZIP for their street address. If you see 75123 on your paperwork, it is for mail delivery to a post office box.",
      },
      {
        question: "Do you inspect small commercial properties for 75123 box holders?",
        answer:
          "Yes. Plenty of small businesses use a PO box for mail. If your shop, office or rental building is in DeSoto, we can inspect it at its physical address. Our commercial foundation repair page explains how commercial inspections work.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Neighborhoods
  // ---------------------------------------------------------------------------
  {
    path: "/service-area/meadowbrook-estates-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Meadowbrook Estates",
    shortName: "Meadowbrook Estates",
    summary:
      "Foundation inspection and repair for Meadowbrook Estates, an established DeSoto neighborhood of larger brick homes built from about 1978 to 1985.",
    intro: [
      "Meadowbrook Estates is one of DeSoto's well-established neighborhoods, made up mostly of larger brick homes built between roughly 1978 and 1985. Many are in the 2,300 to 3,100 square foot range. Homes this size spread a lot of weight across a big slab, and after more than 40 years on DeSoto clay, many have gone through dozens of wet and dry cycles.",
      "That history tends to show up in predictable ways. Stair-step cracks in the brick near corners, drywall cracks over interior doors and doors that rub at the top are common in homes of this age and size. A larger footprint also means more distance between the high and low points of a slab, so small movement can turn into a noticeable slope.",
      "Plumbing under these slabs has also been in place for four decades. When a crack or slope appears, ruling out an under-slab leak is a sensible part of the inspection before any repair is planned.",
    ],
    localFactors: [
      {
        title: "Four decades of soil movement",
        text: "Homes built around 1978 to 1985 have been through many drought and wet seasons, and the cumulative movement often shows in brick and drywall.",
      },
      {
        title: "Large slab footprints",
        text: "At 2,300 to 3,100 square feet, these slabs are big enough that uneven movement between corners can be significant.",
      },
      {
        title: "Aging under-slab plumbing",
        text: "Original plumbing from the late 1970s and early 1980s is old enough that leak testing is worth considering.",
      },
      {
        title: "Mature landscaping",
        text: "Established yards often have large trees and beds that were planted decades ago, both of which affect soil moisture near the slab.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Pleasant Run Rd"],
    housingNote:
      "Meadowbrook Estates homes were built roughly 1978-1985, mostly larger brick-on-slab houses of about 2,300-3,100 square feet.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/foundation-crack-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
    ],
    faqs: [
      {
        question: "Are foundation cracks normal in Meadowbrook Estates homes?",
        answer:
          "Some cracking is common in homes that have spent 40 years on DeSoto clay, and not all of it is structural. The cracks worth checking are ones that are widening, running in a stair-step pattern through brick or showing up with sticking doors and sloping floors. An inspection can tell the difference.",
      },
      {
        question: "Does a bigger house mean more foundation risk?",
        answer:
          "Not necessarily more risk, but bigger slabs can show movement more clearly. On a 2,500 or 3,000 square foot home, the distance between corners is large, so if one side drops slightly the slope across the house can be noticeable. Floor elevation readings help show how much movement there really is.",
      },
      {
        question: "Should I check for a slab leak in a 1980s Meadowbrook Estates home?",
        answer:
          "If you have signs like a rising water bill, damp or warm floors or new cracks without an obvious cause, yes. Plumbing installed around 1978 to 1985 has been under the slab for a long time, and clay movement can stress pipes. Leak detection rules it in or out before a repair plan is set.",
      },
    ],
  },
  {
    path: "/service-area/silver-creek-crossing-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Silver Creek Crossing",
    shortName: "Silver Creek Crossing",
    summary:
      "Foundation leak repair, drainage work and inspections for Silver Creek Crossing, a DeSoto neighborhood of larger homes that began around 1985.",
    intro: [
      "Silver Creek Crossing dates back to about 1985 and kept growing in phases after that, so the neighborhood has a mix of homes built over several years. Most are larger homes, and many have seen steady upkeep from owners who have been here a long time. Even well-kept homes, though, sit on the same DeSoto clay as everywhere else in the city.",
      "Because the homes were built in phases, two houses on the same street can be at different points in their life. An earlier home may have plumbing nearing 40 years old, while a later one may still be on its original drainage setup from the builder. Both can show foundation problems, just for different reasons.",
      "For many Silver Creek Crossing homeowners, the main concerns are water-related: leaks under the slab and yard drainage that sends rainwater toward the house. Fixing those early is usually less disruptive than waiting until the slab needs major work.",
    ],
    localFactors: [
      {
        title: "Built in phases",
        text: "With construction starting around 1985 and continuing after, home ages vary, and so do plumbing age and slab condition.",
      },
      {
        title: "Larger homes, larger slabs",
        text: "Bigger footprints mean more slab area exposed to uneven soil moisture, especially along long exterior walls.",
      },
      {
        title: "Drainage on established lots",
        text: "Decades of landscaping can change how water moves across a lot. Beds and patios added over the years sometimes direct water toward the slab.",
      },
      {
        title: "Under-slab leak risk",
        text: "Earlier homes in the neighborhood have plumbing old enough that leaks are worth ruling out when movement appears.",
      },
    ],
    landmarks: ["Hampton Rd", "Belt Line Rd", "Ten Mile Creek"],
    housingNote:
      "Silver Creek Crossing started around 1985 and developed in phases, with mostly larger homes on slab foundations.",
    serviceFocus: [
      "/foundation-leak-repair-desoto/",
      "/foundation-drainage-repair-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/french-drain-foundation-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Why would two Silver Creek Crossing homes have different foundation issues?",
        answer:
          "The neighborhood was built over a stretch of years starting around 1985, so homes differ in age, plumbing and how the lots were graded. Owners have also made different landscaping changes over time. One home may have an aging plumbing line, while the house next door has a drainage problem along one side.",
      },
      {
        question: "Can yard drainage cause foundation problems in my neighborhood?",
        answer:
          "Yes. If rain collects along the foundation, the clay there swells and shrinks more than the rest, which stresses the slab edge. Common fixes include extending downspouts, regrading beds and adding drains. Correcting water flow is often the first step for homes with early signs of movement.",
      },
      {
        question: "How much does foundation leak repair cost in Silver Creek Crossing?",
        answer:
          "It depends on where the leak is, how it is repaired and whether the foundation needs work afterward. Our foundation leak repair cost calculator gives a rough range to start with. An inspection and leak test are needed to give an actual estimate for your home.",
      },
    ],
  },
  {
    path: "/service-area/elerson-ranch-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Elerson Ranch",
    shortName: "Elerson Ranch",
    summary:
      "Foundation inspections and slab repair for Elerson Ranch, one of DeSoto's newer neighborhoods, dating to about 2005, where even newer slabs move on clay.",
    intro: [
      "Elerson Ranch is one of the newer neighborhoods in DeSoto, dating to around 2005, with mostly larger homes. A newer home does not mean a foundation is immune to movement. These houses sit on the same expansive clay as the rest of the city, and that clay starts moving the slab from the first wet and dry season after construction.",
      "Most homes from this era were built on post-tension slabs, which use steel cables tightened inside the concrete. They handle soil movement better than older designs, but they still move. Cracks in drywall, small gaps at trim and doors that start to stick are common early signs.",
      "Drainage is a frequent factor. Builder-grade grading and short downspouts often worked when the lot was new but lose their effectiveness as soil settles and landscaping is added. Catching that early can head off bigger problems later.",
    ],
    localFactors: [
      {
        title: "Post-tension slabs",
        text: "Many 2000s homes use post-tension slabs. They resist cracking better, but the slab can still tilt or bow as clay moves, and the cables should not be cut or drilled.",
      },
      {
        title: "Builder-grade drainage",
        text: "Original grading and downspouts were designed for a new, bare lot. Settling soil and new beds can reverse the slope over time.",
      },
      {
        title: "Fill soil settling",
        text: "Lots in newer subdivisions may have fill soil that settles in the first years, which can show up as cracks in patios and flatwork.",
      },
      {
        title: "Early signs get missed",
        text: "Owners of newer homes often assume small cracks are normal settling. Some are, but tracking them helps catch real movement.",
      },
    ],
    landmarks: ["Parkerville Rd", "Wintergreen Rd", "Hampton Rd"],
    housingNote:
      "Elerson Ranch dates to about 2005, with mostly larger homes built on post-tension slab foundations.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/slab-foundation-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Can a 2000s home in Elerson Ranch have foundation problems?",
        answer:
          "Yes. Newer construction helps, but every home in DeSoto sits on expansive clay that moves with the weather. Post-tension slabs resist cracking well, yet they can still tilt or bow if the soil under one side gets much wetter or drier than the rest. Drainage problems are a common cause in newer neighborhoods.",
      },
      {
        question: "What is a post-tension slab, and does it change repairs?",
        answer:
          "A post-tension slab has steel cables inside the concrete that are tightened after it cures. It helps the slab resist cracking. It also means nobody should drill or cut into the slab without knowing where the cables are, since a cut cable is dangerous and costly. Repairs on these slabs need to account for that.",
      },
      {
        question: "Should I get an inspection even if my home is fairly new?",
        answer:
          "If you see cracks that keep growing, doors that start sticking or water pooling near the slab, it is worth having it looked at. Early inspections often catch drainage issues that are simple to fix and can keep minor movement from turning into a bigger repair.",
      },
    ],
  },
  {
    path: "/service-area/candle-meadow-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Candle Meadow",
    shortName: "Candle Meadow",
    summary:
      "Drainage, leak and foundation help for Candle Meadow, a well-kept DeSoto neighborhood dating to about 2001 with a community park and nearby schools.",
    intro: [
      "Candle Meadow is a well-kept DeSoto neighborhood that dates to about 2001, in the southwest part of the city. It has its own community park and sits near schools, which makes it popular with families. Homes here are now old enough to have been through two decades of DeSoto weather, long enough for soil and water problems to start showing.",
      "Water is the main theme for foundations in Candle Meadow. Homes from the early 2000s often still have their original builder drainage, and over 20 years soil settles, beds get built up and patios are added. Rain that once ran off cleanly may now collect along the slab.",
      "Under-slab plumbing in these homes is newer than in much of DeSoto, but clay movement still puts stress on pipes and fittings. If you notice cracks along with signs of water, a combined drainage and leak check is a good place to start.",
    ],
    localFactors: [
      {
        title: "Twenty years of settling",
        text: "Homes from around 2001 have been through enough seasons for the soil around them to settle and change how water drains.",
      },
      {
        title: "Original builder drainage",
        text: "Gutters, downspouts and grading from the original build may no longer move water far enough from the slab.",
      },
      {
        title: "Added patios and beds",
        text: "Patios, walkways and beds added since the homes were built can block or redirect water toward the foundation.",
      },
      {
        title: "Stress on newer plumbing",
        text: "Even with newer pipes, clay movement can stress under-slab fittings, so leaks are still possible.",
      },
    ],
    landmarks: ["Westmoreland Rd", "Wintergreen Rd", "Parkerville Rd"],
    housingNote:
      "Candle Meadow dates to about 2001, with well-maintained slab homes that are now around two decades old.",
    serviceFocus: [
      "/foundation-drainage-repair-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/french-drain-foundation-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Why are drainage problems showing up in Candle Meadow now?",
        answer:
          "Homes built around 2001 have had about 20 years for soil to settle and for owners to add beds, patios and other landscaping. Those changes can reverse the slope that originally carried water away. Once water starts collecting at the slab, the clay there moves more, and cracks can follow.",
      },
      {
        question: "Can a 2000s home have an under-slab leak?",
        answer:
          "Yes. Newer plumbing is less likely to leak from age, but DeSoto's clay still moves the slab and the pipes beneath it. Joints and fittings can fail under that stress. A higher water bill, warm or damp spots on the floor or the sound of running water are signs to get a leak check.",
      },
      {
        question: "What drainage fixes work for Candle Meadow yards?",
        answer:
          "It depends on the lot. Common fixes include longer downspout extensions, regrading soil away from the slab, reworking flower beds and installing French drains or surface drains where water collects. The goal is to keep the soil next to the foundation at a steadier moisture level.",
      },
    ],
  },
  {
    path: "/service-area/hampton-place-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Hampton Place",
    shortName: "Hampton Place",
    summary:
      "Crack repair and inspections for Hampton Place Estates, one of DeSoto's older neighborhoods, with midsize homes built roughly 1967 to 1979.",
    intro: [
      "Hampton Place, often listed as Hampton Place Estates in real estate records, is one of DeSoto's older neighborhoods. Most homes were built between about 1967 and 1979 and are midsize, roughly 1,700 to 2,400 square feet. That puts many of these slabs past the 45-year mark, older than most of the housing in the city.",
      "Age shapes the foundation picture here. Slabs from this era were built before post-tension designs were common, so cracks in tile, brick and drywall are a frequent concern. Some homes may still have original cast-iron drain lines under the slab, which can crack, corrode or separate over time and let water into the soil.",
      "If you own a home in Hampton Place Estates and see cracks, an inspection that looks at both the foundation and the plumbing gives the clearest picture. Treating the crack without checking for a leak or drainage problem can leave the cause in place.",
    ],
    localFactors: [
      {
        title: "Older slab construction",
        text: "Homes from about 1967 to 1979 were built with older slab methods that tend to show cracking more readily than newer post-tension slabs.",
      },
      {
        title: "Possible cast-iron drain lines",
        text: "Homes of this age may still have original cast-iron drain lines, which can deteriorate under the slab over decades.",
      },
      {
        title: "Decades of movement",
        text: "Close to 50 years of wet and dry seasons can leave homes with noticeable crack patterns and sloping floors.",
      },
      {
        title: "Mature trees",
        text: "Trees planted when the neighborhood was new are now large and can pull significant moisture from the soil near the slab.",
      },
    ],
    landmarks: ["Hampton Rd", "Pleasant Run Rd", "Belt Line Rd"],
    housingNote:
      "Hampton Place Estates has midsize homes, about 1,700-2,400 square feet, built roughly 1967-1979 on older slab foundations, some with original cast-iron drain lines.",
    serviceFocus: [
      "/foundation-crack-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do Hampton Place Estates homes have cast-iron plumbing?",
        answer:
          "Some may. Homes built in the late 1960s and 1970s often used cast-iron drain lines under the slab, and some were never replaced. Cast iron can corrode or crack over time. A camera inspection of the drain line can show its material and condition, which is useful to know before any foundation repair.",
      },
      {
        question: "Why does my older Hampton Place home have so many cracks?",
        answer:
          "Slabs from this era have been through close to 50 years of DeSoto clay swelling and shrinking. Older construction methods also tend to show cracks more readily. Many cracks are minor, but ones that widen, spread through brick or come with sticking doors and sloping floors should be inspected.",
      },
      {
        question: "Can you check the foundation and plumbing in one visit?",
        answer:
          "A foundation inspection includes looking for signs of plumbing leaks, such as damp floors or unexplained cracks. If those signs are present, we recommend leak detection or a drain line check as a next step so the repair plan covers the real cause.",
      },
    ],
  },
  {
    path: "/service-area/creek-tree-estates-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Creek Tree Estates",
    shortName: "Creek Tree Estates",
    summary:
      "Leak detection and slab repair for Creek Tree Estates and Creek Tree Estates East, established DeSoto subdivisions with homes mostly from the 1970s to 1990s.",
    intro: [
      "Creek Tree Estates is an established DeSoto subdivision, along with the neighboring Creek Tree Estates East section. Most homes were built between the 1970s and 1990s and are typically three or four bedrooms. That range of ages means some homes are close to 50 years old while others are closer to 30, with plumbing and slabs to match.",
      "As the name suggests, creeks and drainage are part of the picture in this part of DeSoto. Lots near creek areas or low ground can see more water during heavy storms, and soil that stays wet longer moves more when it eventually dries out. That can make drainage and soil moisture a bigger factor than on higher, drier lots.",
      "For homes here, leak detection is often a good first step when cracks or floor changes appear. Under-slab leaks and storm runoff can look similar from inside the house, and knowing which one you are dealing with changes the repair.",
    ],
    localFactors: [
      {
        title: "Mixed home ages",
        text: "With homes built from the 1970s through the 1990s, plumbing age and slab design vary a lot from one house to the next.",
      },
      {
        title: "Creek-area drainage",
        text: "Lots closer to creeks or low ground can take on more runoff during heavy rain, keeping soil wet longer.",
      },
      {
        title: "Under-slab leaks",
        text: "Older homes in the subdivision have plumbing that has been under the slab for decades, which raises leak risk.",
      },
      {
        title: "Wet-to-dry swings",
        text: "Soil that stays saturated after storms can shrink sharply in summer heat, which adds to slab movement.",
      },
    ],
    landmarks: ["Ten Mile Creek", "Hampton Rd", "Belt Line Rd"],
    housingNote:
      "Creek Tree Estates and Creek Tree Estates East are made up mostly of 3-4 bedroom slab homes built from the 1970s through the 1990s.",
    serviceFocus: [
      "/foundation-leak-detection-desoto-tx/",
      "/slab-foundation-repair-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
      "/foundation-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Does being near a creek affect my foundation?",
        answer:
          "It can. Lots closer to creeks or low areas often get more runoff during storms, and the soil can stay wet longer. When it finally dries in summer, the clay shrinks more. That bigger swing can mean more movement under the slab. Good grading and drainage help reduce the effect.",
      },
      {
        question: "How do I tell a slab leak from a drainage problem?",
        answer:
          "From inside, they can look alike: cracks, damp spots or uneven floors. A slab leak often shows up as a rising water bill, a running meter with everything off or warm spots on the floor. Drainage problems usually show up after storms. Leak detection and a drainage check together sort it out.",
      },
      {
        question: "What does foundation repair cost in Creek Tree Estates?",
        answer:
          "Cost depends on the cause and the repair. Drainage fixes and leak repairs are usually less expensive than piers or leveling. Our DeSoto foundation repair cost guide explains the typical ranges and what affects price. An inspection is needed for a real estimate on your home.",
      },
    ],
  },
  {
    path: "/service-area/frost-farms-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Frost Farms",
    shortName: "Frost Farms",
    summary:
      "Foundation repair for Frost Farms, a DeSoto area of custom estate homes on oversized lots, where mature trees and long utility runs affect the slab.",
    intro: [
      "Frost Farms is known for custom estate homes on oversized lots with mature trees. Those big lots and old trees are a large part of the appeal, and they also shape how foundations behave. Large trees pull a lot of water from the soil, especially in a DeSoto summer, and their roots can reach well beyond the canopy toward the house.",
      "When a tree draws moisture from the clay on one side of a home, that side of the slab can drop while the rest stays steady. The result is often uneven floors, cracks on the tree side and doors that stop closing properly. In custom homes, where floor plans and foundations vary, the pattern can be harder to read.",
      "Oversized lots also mean longer water and sewer lines between the street and the house. A leak along that run can go unnoticed for a while and add water to the soil in places you would not expect.",
    ],
    localFactors: [
      {
        title: "Mature trees",
        text: "Large, established trees draw heavy moisture from the clay in summer, which can cause the nearest part of the slab to settle.",
      },
      {
        title: "Oversized lots",
        text: "Bigger lots mean longer service lines. A leak in a long water or sewer run can soak soil far from where you would look.",
      },
      {
        title: "Custom construction",
        text: "Custom homes vary in layout and foundation design, so each one needs its own evaluation rather than a standard approach.",
      },
      {
        title: "Uneven floors",
        text: "Settlement on one side of a large home can show up as noticeable slopes across long rooms.",
      },
    ],
    landmarks: ["Westmoreland Rd", "Cockrell Hill Rd", "Wintergreen Rd"],
    housingNote:
      "Frost Farms has custom estate homes on oversized lots, with mature trees and longer utility runs than typical DeSoto subdivisions.",
    serviceFocus: [
      "/foundation-repair-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
      "/underground-leak-detection-desoto-tx/",
      "/water-line-leak-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Can trees really affect a Frost Farms foundation?",
        answer:
          "Yes. Large trees can pull a lot of water from the soil, and DeSoto clay shrinks as it dries. If a big tree is close to the house, the slab on that side can drop during summer. Options include root barriers, watering plans and drainage changes, along with foundation repair if settlement has already happened.",
      },
      {
        question: "Why are my floors uneven in only part of the house?",
        answer:
          "Uneven floors in one area usually point to a local cause, such as a tree drawing moisture on that side, poor drainage at one corner or a leak under that part of the slab. Floor elevation readings show where the low point is, which helps narrow down the cause. Our uneven floors guide covers this in more detail.",
      },
      {
        question: "Do long water lines on big lots cause foundation problems?",
        answer:
          "They can if they leak. On an oversized lot, the line from the street to the house may be long, and a leak along it can keep soil wet for a long time before anyone notices. If that wet area is near the house, it can cause movement. Underground leak detection can locate it.",
      },
    ],
  },
  {
    path: "/service-area/thorntree-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Thorntree",
    shortName: "Thorntree",
    summary:
      "Foundation inspections, leak repair and crack repair for Thorntree, the upscale DeSoto community around Thorntree Golf Club that dates to about 1987.",
    intro: [
      "Thorntree, also known as Thorntree Estates, is an upscale DeSoto community built around Thorntree Golf Club. The neighborhood dates to about 1987 and is known for stately brick homes, many of them large, on well-kept lots. Homes like these are a significant investment, and owners tend to want problems caught early.",
      "Homes here have been through more than 35 years of DeSoto's clay soil cycles. In large brick homes, movement often shows first in the brick itself, as stair-step cracks near corners or above windows, and inside as cracks over doorways. Big footprints and two-story layouts can make small differences in slab movement more visible.",
      "Irrigation is another local factor. Golf-course-adjacent lots and well-watered landscaping keep some areas of soil wetter than others. Uneven watering, combined with an under-slab leak or poor drainage, can cause one part of the slab to move differently than the rest.",
    ],
    localFactors: [
      {
        title: "Large brick homes",
        text: "Brick veneer shows slab movement clearly, so stair-step cracks are often the first visible sign in Thorntree homes.",
      },
      {
        title: "35+ years on clay",
        text: "Homes from about 1987 onward have had decades of seasonal soil movement, and plumbing of the same age.",
      },
      {
        title: "Irrigation and watering",
        text: "Heavily irrigated landscaping can keep soil on one side of a house wetter than the other, leading to uneven movement.",
      },
      {
        title: "Value of early detection",
        text: "In higher-value homes, catching a leak or small movement early limits damage to finishes like stone, tile and hardwood.",
      },
    ],
    landmarks: ["Thorntree Golf Club", "Wintergreen Rd", "Hampton Rd"],
    housingNote:
      "Thorntree, also called Thorntree Estates, dates to about 1987 and has stately brick homes on slab foundations around Thorntree Golf Club.",
    serviceFocus: [
      "/foundation-inspection-desoto-tx/",
      "/foundation-leak-repair-desoto/",
      "/foundation-crack-repair-desoto-tx/",
      "/slab-foundation-repair-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do homes near Thorntree Golf Club have special foundation concerns?",
        answer:
          "The soil is the same DeSoto clay as the rest of the city, but irrigation can play a bigger role. Well-watered lawns and landscaping can keep soil wetter on some sides of a house than others. Uneven moisture leads to uneven movement, which can show up as cracks in brick and drywall.",
      },
      {
        question: "I see a stair-step crack in my brick. Is that serious?",
        answer:
          "It depends on the size and whether it is growing. Stair-step cracks in mortar are a common sign that the slab under that wall has moved. A narrow crack that has not changed may be minor. One that is widening, or that comes with sticking doors or sloping floors, should be inspected.",
      },
      {
        question: "Why check for leaks in a Thorntree home?",
        answer:
          "Homes in Thorntree date to about 1987 and later, so under-slab plumbing has been in place for decades. A leak there can soften or swell the soil in one area and cause movement. Ruling out a leak before repairing the foundation helps make sure the repair lasts and protects interior finishes.",
      },
    ],
  },
  {
    path: "/service-area/downtown-desoto-foundation-repair/",
    kind: "neighborhood",
    areaName: "Downtown DeSoto",
    shortName: "Downtown DeSoto",
    summary:
      "Foundation repair for homes and small commercial buildings in Downtown DeSoto, around DeSoto Town Center, Hampton Rd and Pleasant Run Rd.",
    intro: [
      "Downtown DeSoto is the city's central civic and commercial area, around DeSoto Town Center near Hampton Rd and Pleasant Run Rd. It has a mix of older homes and small commercial buildings, which means foundation calls here can be for a family house one day and a storefront or office the next.",
      "Older homes near the center of town may have older slab designs, original plumbing or, in some cases, pier-and-beam foundations. Small commercial buildings bring different concerns: parking lots and paved areas that send runoff toward the building, heavier loads and the need to keep a business running while repairs happen.",
      "Whether the property is a home or a business, the soil is the same DeSoto clay. Inspections downtown focus on drainage from paved surfaces, possible plumbing leaks and how the building has moved over time.",
    ],
    localFactors: [
      {
        title: "Mix of homes and businesses",
        text: "The central area has both older residences and small commercial buildings, each with different foundation needs.",
      },
      {
        title: "Paved surfaces and runoff",
        text: "Parking lots, sidewalks and roof runoff can concentrate water at the edge of a building's foundation.",
      },
      {
        title: "Older construction",
        text: "Some downtown properties are older than surrounding subdivisions and may have aging plumbing or older foundation types.",
      },
      {
        title: "Keeping businesses open",
        text: "For commercial properties, repair plans need to account for access, customers and daily operations.",
      },
    ],
    landmarks: ["DeSoto Town Center", "Hampton Rd", "Pleasant Run Rd", "Polk St"],
    housingNote:
      "Downtown DeSoto mixes older homes, some on older slabs or pier-and-beam, with small commercial buildings on slab foundations.",
    serviceFocus: [
      "/commercial-foundation-repair-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
      "/foundation-repair-desoto-tx/",
      "/pier-and-beam-foundation-repair-desoto-tx/",
      "/foundation-drainage-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do you inspect commercial buildings in Downtown DeSoto?",
        answer:
          "Yes. We inspect small commercial buildings such as shops and offices in the central part of DeSoto, along with homes. Commercial inspections pay extra attention to drainage from paved areas, heavier loads and how repairs can be scheduled around business hours. See our commercial foundation repair page for more.",
      },
      {
        question: "Why do paved areas cause foundation problems?",
        answer:
          "Pavement does not absorb rain, so water runs off and often collects at the edge of the nearest building. On DeSoto clay, that concentrated water makes the soil along the foundation swell and shrink more than elsewhere. Redirecting runoff with drains or grading is often part of the fix.",
      },
      {
        question: "Are older downtown homes more likely to need repair?",
        answer:
          "Older homes have had more years of soil movement and may have aging plumbing, so they often show more wear. Age alone does not mean a home needs repair. An inspection looks at what is actually happening, including floor levels, cracks, drainage and possible leaks.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Directional areas
  // ---------------------------------------------------------------------------
  {
    path: "/service-area/west-desoto-foundation-repair/",
    kind: "direction",
    areaName: "West DeSoto",
    shortName: "West DeSoto",
    summary:
      "Foundation leak repair and drainage work for homes on the west side of DeSoto, toward Westmoreland Rd and Cockrell Hill Rd.",
    intro: [
      "West DeSoto covers the part of the city toward Westmoreland Rd and Cockrell Hill Rd. Housing on this side of town ranges from established subdivisions to newer neighborhoods and some larger lots. That variety means foundation questions here range from aging plumbing to drainage on newer, builder-graded lots.",
      "Like the rest of DeSoto, the west side sits on expansive clay. Open areas and larger lots can see more wind and sun exposure, which dries soil faster in summer. When heavy storms follow, the clay swells quickly. Homes with poor grading or downspouts that empty at the slab feel that swing the most.",
      "For West DeSoto homeowners, the most common requests involve leaks under the slab and water collecting around the house. Both are worth addressing before they lead to larger structural repairs.",
    ],
    localFactors: [
      {
        title: "Mixed neighborhood ages",
        text: "The west side has both established and newer subdivisions, so plumbing age and slab design vary widely.",
      },
      {
        title: "Larger, open lots",
        text: "Bigger lots with more sun exposure can dry out faster in summer, increasing the seasonal swing in the clay.",
      },
      {
        title: "Drainage on graded lots",
        text: "Newer lots may rely on original builder grading that loses effectiveness as soil settles.",
      },
      {
        title: "Under-slab leaks",
        text: "Leaks under the slab are a common trigger for movement in older homes on this side of town.",
      },
    ],
    landmarks: ["Westmoreland Rd", "Cockrell Hill Rd", "Belt Line Rd", "Wintergreen Rd"],
    housingNote:
      "West DeSoto includes established brick-on-slab subdivisions alongside newer homes and some larger lots.",
    serviceFocus: [
      "/foundation-leak-repair-desoto/",
      "/foundation-drainage-repair-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/french-drain-foundation-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do you serve homes near Westmoreland Rd and Cockrell Hill Rd?",
        answer:
          "Yes. The west side of DeSoto, including homes toward Westmoreland Rd and Cockrell Hill Rd, is fully inside our service area. We work only in DeSoto, so every neighborhood on this side of town can be scheduled for inspections, leak detection and repair.",
      },
      {
        question: "What foundation problems are common in West DeSoto?",
        answer:
          "Under-slab leaks and drainage problems are two of the most common. Larger, more open lots can dry out faster in summer, and heavy storms then swell the clay quickly. Homes where water collects along the slab tend to show cracks and uneven floors first.",
      },
      {
        question: "Is a French drain a good fix for a West DeSoto yard?",
        answer:
          "It can be, if water collects in a spot that cannot be fixed with grading or downspout extensions alone. A French drain collects water below the surface and carries it away from the foundation. Whether it is the right choice depends on the lot, the slope and where the water can be discharged.",
      },
    ],
  },
  {
    path: "/service-area/east-desoto-foundation-repair/",
    kind: "direction",
    areaName: "East DeSoto",
    shortName: "East DeSoto",
    summary:
      "Slab foundation repair and crack repair for homes on the east side of DeSoto, toward I-35E.",
    intro: [
      "East DeSoto covers the side of the city toward I-35E, which runs along DeSoto's eastern edge. Neighborhoods on this side include a range of brick-on-slab homes, many from the 1970s through the 1990s, along with newer construction in some areas.",
      "Slab homes on the east side face the same clay soil challenges as the rest of DeSoto. Cracks in brick, drywall and tile are the most common signs homeowners report, usually after a hot summer or the first heavy rain that follows one. Where homes have had additions or patios poured later, cracks at the joints are common too.",
      "For slab homes in East DeSoto, the first step is finding out whether movement is ongoing and what is driving it, whether that is soil moisture, drainage or a leak. That determines whether the answer is a crack repair, leveling or a fix to the water source.",
    ],
    localFactors: [
      {
        title: "Brick-on-slab homes",
        text: "Many east side homes are brick on slab from the 1970s-1990s, where movement shows clearly as cracks in mortar and drywall.",
      },
      {
        title: "Seasonal crack timing",
        text: "Cracks often appear after a long dry summer or the first big storm afterward, when clay shrinks or swells quickly.",
      },
      {
        title: "Additions and patios",
        text: "Sections poured later than the original slab often move independently and crack at the joint.",
      },
      {
        title: "Runoff from paved areas",
        text: "Driveways and paved surfaces can send water toward the slab, especially on lots with little natural slope.",
      },
    ],
    landmarks: ["I-35E", "Belt Line Rd", "Pleasant Run Rd", "Parkerville Rd"],
    housingNote:
      "East DeSoto is largely 1970s-1990s brick-on-slab housing, with some newer construction.",
    serviceFocus: [
      "/slab-foundation-repair-desoto-tx/",
      "/foundation-crack-repair-desoto-tx/",
      "/foundation-leveling-desoto-tx/",
      "/foundation-inspection-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do you cover the neighborhoods near I-35E?",
        answer:
          "Yes. East DeSoto, including the neighborhoods closer to I-35E, is part of our service area. We serve only DeSoto, so any home on the east side of the city can be scheduled for an inspection or repair estimate.",
      },
      {
        question: "Why do slab homes in East DeSoto crack?",
        answer:
          "The main cause is the clay soil swelling and shrinking with the seasons. When one part of the slab gets wetter or drier than another, the slab moves unevenly and brick or drywall cracks. Drainage problems, trees and under-slab leaks can make the movement worse in specific areas.",
      },
      {
        question: "Does every crack mean my slab needs repair?",
        answer:
          "No. Small, stable cracks are common and often cosmetic. Cracks that widen over time, run diagonally from door and window corners or come with uneven floors and sticking doors are more likely to point to active movement. An inspection with floor elevation readings shows whether repair is needed.",
      },
    ],
  },
  {
    path: "/service-area/north-desoto-foundation-repair/",
    kind: "direction",
    areaName: "North DeSoto",
    shortName: "North DeSoto",
    summary:
      "Foundation inspections and house foundation repair for homes in the northern part of DeSoto, around Pleasant Run Rd and Belt Line Rd.",
    intro: [
      "North DeSoto covers the northern part of the city, including areas around Pleasant Run Rd and Belt Line Rd. Much of the housing here is established, with many brick homes that have been in place for decades. Homeowners on this side of town often have lived in their homes a long time, or are buying an older house and want to know what they are getting.",
      "For established homes, the questions usually center on how much the house has moved over the years and whether it is still moving. Cracks that have been there for a while may be stable. New cracks, doors that recently started sticking and floors that feel different than they used to are signs worth a closer look.",
      "An inspection is the best starting point for North DeSoto homes. It gives a baseline of floor levels, notes existing cracks and checks drainage and possible leaks, which makes it easier to see changes over time.",
    ],
    localFactors: [
      {
        title: "Established housing",
        text: "Many homes in the north part of the city are decades old, so cumulative soil movement is a common concern.",
      },
      {
        title: "Old cracks vs. new movement",
        text: "Telling stable older cracks apart from new, active movement is a key part of inspections here.",
      },
      {
        title: "Home purchases",
        text: "Buyers of older homes often want a foundation-specific inspection before closing.",
      },
      {
        title: "Mature trees",
        text: "Established yards often have large trees that draw moisture from the soil near the house.",
      },
    ],
    landmarks: ["Pleasant Run Rd", "Belt Line Rd", "Hampton Rd", "DeSoto Town Center"],
    housingNote:
      "North DeSoto has many established brick-on-slab homes, much of it from the 1970s-1990s building period.",
    serviceFocus: [
      "/foundation-inspection-desoto-tx/",
      "/house-foundation-repair-desoto-tx/",
      "/home-foundation-repair-desoto-tx/",
      "/foundation-crack-repair-desoto-tx/",
      "/foundation-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "How do I know if old cracks in my North DeSoto home are still moving?",
        answer:
          "Mark the ends of the crack with a pencil and write the date, then check it every few weeks and after big storms. If it grows, the movement is active. An inspection with floor elevation readings also helps, because it shows the current shape of the slab and gives a baseline to compare later.",
      },
      {
        question: "Should I get a foundation inspection before buying in North DeSoto?",
        answer:
          "For an older home, it is a good idea. A foundation inspection looks closer than a general home inspection at floor levels, cracks, drainage and signs of leaks. It can help you plan for repairs or negotiate if problems turn up.",
      },
      {
        question: "What does house foundation repair cost on the north side?",
        answer:
          "Cost depends on the cause and the repair method, not the part of town. Drainage fixes cost less than leveling or piers. Our foundation repair cost calculator gives a starting range, and an inspection provides a real estimate based on your home.",
      },
    ],
  },
  {
    path: "/service-area/south-desoto-foundation-repair/",
    kind: "direction",
    areaName: "South DeSoto",
    shortName: "South DeSoto",
    summary:
      "Foundation leveling and leak detection for homes in the southern part of DeSoto, toward Parkerville Rd and Wintergreen Rd.",
    intro: [
      "South DeSoto covers the southern part of the city, toward Parkerville Rd and Wintergreen Rd. This side of town includes a mix of established neighborhoods and newer development, so housing ranges from 1980s and 1990s brick homes to 2000s construction on post-tension slabs.",
      "Settlement and leaks are two of the most common concerns here. In older homes, years of clay movement can leave floors sloping toward one corner. In newer homes, early settlement is often tied to drainage. In both, an under-slab leak can soften soil in one area and cause that part of the house to drop or lift.",
      "If a floor feels uneven or doors have started to drift, finding the cause first matters. Leveling a slab without fixing a leak or drainage problem underneath it can mean doing the work twice.",
    ],
    localFactors: [
      {
        title: "Range of building eras",
        text: "South DeSoto mixes established homes with newer construction, so slab types and plumbing ages differ.",
      },
      {
        title: "Settlement over time",
        text: "Older homes may have floors that have gradually sloped after years of seasonal soil movement.",
      },
      {
        title: "Hidden leaks",
        text: "Under-slab leaks can cause localized settlement or heave, and they are often found only through testing.",
      },
      {
        title: "Drainage on newer lots",
        text: "Builder grading on newer lots can lose effectiveness as soil settles, leading to water at the slab.",
      },
    ],
    landmarks: ["Parkerville Rd", "Wintergreen Rd", "Hampton Rd", "Westmoreland Rd"],
    housingNote:
      "South DeSoto includes 1980s-1990s brick-on-slab homes along with 2000s homes built on post-tension slabs.",
    serviceFocus: [
      "/foundation-leveling-desoto-tx/",
      "/foundation-leak-detection-desoto-tx/",
      "/house-leveling-desoto-tx/",
      "/slab-leak-repair-desoto-tx/",
      "/foundation-repair-desoto-tx/",
    ],
    faqs: [
      {
        question: "Do you serve homes near Parkerville Rd and Wintergreen Rd?",
        answer:
          "Yes. South DeSoto, including the areas toward Parkerville Rd and Wintergreen Rd, is fully covered. We serve only DeSoto, so any home in the southern part of the city can be scheduled for an inspection, leak detection or leveling estimate.",
      },
      {
        question: "Should I check for a leak before leveling my foundation?",
        answer:
          "Yes, especially if the low or high spot is in one area of the house. An under-slab leak can soften soil or make clay swell in a specific spot. If the leak is not fixed first, the slab may keep moving after leveling. Leak detection is a quick way to rule that out.",
      },
      {
        question: "Can newer homes in South DeSoto need leveling?",
        answer:
          "It is less common, but it happens. Newer homes on post-tension slabs can still settle or heave if drainage is poor or a leak develops. Often the fix is correcting drainage before movement goes too far. An inspection shows whether leveling is needed or if a drainage repair is enough.",
      },
    ],
  },
];
