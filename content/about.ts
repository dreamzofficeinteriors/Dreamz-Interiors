import { brandContent } from "@/content/brand";

export interface TeamPrinciple {
  trait: string;
  statement: string;
  application: string;
}

export const aboutContent = {
  hero: {
    eyebrow: "About Dreamz",
    headline: "Your vision. Our responsibility.",
    subline:
      "We bridge the gap between architectural intent and completed workspace floors across India. No manufacturing claims, no vendor finger-pointing—just single-point accountability from brief to handover.",
  },
  story: {
    eyebrow: "Our Grounding",
    title: "Why Dreamz was built.",
    paragraphs: [
      "Commercial workspace delivery across India has historically been fragmented. Developers and corporate tenants found themselves negotiating between furniture factories, freight logistics handlers, and temporary site laborers—with nobody owning the final result.",
      "Dreamz was established to eliminate that friction [CONFIRM: founding story, year, founders]. Instead of manufacturing in-house, we built an agile, vendor-agnostic procurement and execution network. We specify the right products for how teams work, source from proven production lines, coordinate freight to the site, and deploy trained assembly crews to build every desk and chair.",
      "Over 200+ projects later, our operating principle remains unchanged: the client brings the purpose and vision for the space; Dreamz takes full responsibility for delivering it on the floor.",
    ],
    confirmFlag: "[CONFIRM: founding story, year, founders]",
  },
  philosophy: {
    eyebrow: "The Philosophy",
    title: "One team between the brief and the finished floor.",
    quote: brandContent.philosophy,
    description:
      "Workspace procurement shouldn't feel like managing a supply chain. By maintaining a single line of accountability, our clients never have to chase five different suppliers to understand when their floors will be ready.",
  },
  operatingPillars: [
    {
      title: "Specify",
      description:
        "We audit space requirements, headcount density, and structural MEP constraints to select durable, ergonomic commercial furniture.",
    },
    {
      title: "Source",
      description:
        "We procure from vetted production facilities with proven structural certifications, ensuring uniform finishes and batch consistency.",
    },
    {
      title: "Deliver",
      description:
        "We manage freight, warehouse staging, and elevator logistics to coordinate dock deliveries with building management.",
    },
    {
      title: "Assemble",
      description:
        "Dedicated Dreamz installation crews construct, laser-level, test mechanisms, and wipe down every workstation.",
    },
    {
      title: "Handover & Warranty",
      description:
        "Joint punch-list verification followed by our direct 1-year warranty. Water and fire damage are strictly not covered.",
    },
  ],
  principles: [
    {
      trait: "Intelligent",
      statement: "We demonstrate understanding rather than making exaggerated claims.",
      application:
        "Every recommendation is grounded in headcount data, circulation requirements, and real spatial constraints.",
    },
    {
      trait: "Thoughtful",
      statement: "We consider the people, space and purpose behind every decision.",
      application:
        "We specify seating and workstation heights for the physical wellbeing of the people who occupy them daily.",
    },
    {
      trait: "Confident",
      statement: "Conviction without exaggeration.",
      application:
        "We speak through declarative facts: 200+ projects completed across India, not meaningless superlatives.",
    },
    {
      trait: "Proactive",
      statement: "We anticipate requirements before they become job-site bottlenecks.",
      application:
        "Dock clearances, elevator scheduling, and cable routing ducts are resolved before components ever reach the building.",
    },
    {
      trait: "Dependable",
      statement: "Accountability and follow-through on every floor.",
      application:
        "We provide a committed schedule, a single point of contact, and a clear 1-year warranty.",
    },
    {
      trait: "Approachable",
      statement: "We make complex workspace decisions feel straightforward.",
      application:
        "Plain communication, transparent BOQs, and responsive communication channels without corporate bureaucracy.",
    },
  ] satisfies TeamPrinciple[],
  scale: {
    eyebrow: "Pan-India Scale",
    title: "200+ projects delivered with zero excuses.",
    description:
      "From single-floor corporate headquarters in Bengaluru to multi-level developer spec suites in Mumbai and tech campuses in Delhi NCR, Dreamz deploys consistent execution standards nationwide.",
    stats: [
      { value: "200+", label: "Completed Projects" },
      { value: "Pan-India", label: "Delivery Capabilities" },
      { value: "3", label: "Core Solution Lines" },
      { value: "1 Year", label: "Direct Warranty" },
    ],
  },
};

