export interface StatItem {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface SolutionSummaryItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tag: string;
  bulletPoints: string[];
  href: string;
  image: string;
}

export interface ClientProfile {
  title: string;
  description: string;
  deliverables: string[];
}

export const homeContent = {
  loader: {
    brandName: "Dreamz",
    descriptor: "Commercial, Modular and Turnkey Workspace Solutions",
  },
  hero: {
    headline: "Your vision. Our responsibility.",
    subline:
      "Commercial, modular and turnkey workspaces, planned, delivered and assembled across India.",
    primaryCta: {
      label: "Talk to us",
      href: "/contact",
    },
    secondaryCta: {
      label: "See our projects",
      href: "/projects",
    },
    video: {
      src: "/placeholders/hero-reel.mp4",
      poster: "/placeholders/hero-poster.jpg",
      ariaLabel: "Finished commercial workspace floor delivered across India",
    },
  },
  statBar: [
    {
      id: "projects",
      value: "200+",
      numericValue: 200,
      suffix: "+",
      label: "Projects delivered",
      description: "Across developer assets, tech campuses and regional offices.",
    },
    {
      id: "geography",
      value: "Pan-India",
      label: "Delivery reach",
      description: "Coordinated logistics and assembly teams across major metros.",
    },
    {
      id: "solutions",
      value: "3",
      numericValue: 3,
      label: "Solution lines",
      description: "Commercial furniture, modular workstations, and turnkey handover.",
    },
    {
      id: "warranty",
      value: "1-year",
      label: "Warranty",
      description: "Direct coverage. Water damage and fire damage are not covered.",
    },
  ] satisfies StatItem[],
  statement: {
    leadIn: "Our Standard",
    quote: "We don't hand over furniture. We hand over a workspace that works.",
    attribution: "Dreamz Operating Principle",
  },
  solutions: [
    {
      id: "commercial-furniture",
      slug: "commercial-furniture",
      title: "Commercial Furniture",
      tag: "Primary Focus",
      summary:
        "Furniture specified for how your teams actually work, delivered and assembled on site.",
      bulletPoints: [
        "Ergonomic task chairs & executive seating",
        "Conference tables, acoustic booths & breakout lounge",
        "High-density cafeteria & training room systems",
      ],
      href: "/solutions/commercial-furniture",
      image: "/placeholders/solution-commercial.jpg",
    },
    {
      id: "modular",
      slug: "modular",
      title: "Modular Systems",
      tag: "Flexible Workstations",
      summary:
        "Modular workspace systems planned around your layout, cable management and headcount.",
      bulletPoints: [
        "Linear, back-to-back & 120-degree cluster workstations",
        "Demountable acoustic screens & privacy panels",
        "Integrated raceways, cable routing & power access",
      ],
      href: "/solutions/modular",
      image: "/placeholders/solution-modular.jpg",
    },
    {
      id: "turnkey",
      slug: "turnkey",
      title: "Turnkey Handover",
      tag: "Single Accountability [CONFIRM: exact turnkey scope]",
      summary:
        "One team from brief to handover. We plan, source, deliver and assemble.",
      bulletPoints: [
        "Space planning and BOQ validation",
        "Consolidated vendor sourcing and staging",
        "Site supervision, scheduled assembly & final punch-list handover",
      ],
      href: "/solutions/turnkey",
      image: "/placeholders/solution-turnkey.jpg",
    },
  ] satisfies SolutionSummaryItem[],
  featuredProjectsHeading: {
    eyebrow: "Selected Deployments",
    title: "Commercial spaces delivered without compromise.",
    description:
      "A selection of completed workspaces across India. Every deployment measured against brief, timeline, and final handoff quality.",
  },
  processHeading: {
    eyebrow: "The 5-Step Process",
    title: "How we eliminate friction from brief to handover.",
    description:
      "A structured delivery pipeline so project managers and developers never have to chase five different vendors.",
  },
  commitments: [
    {
      id: "schedule",
      title: "A committed schedule",
      body: "We set a delivery and assembly schedule at the start and keep you updated through handover.",
      confirmFlag: "[CONFIRM: this reflects actual practice]",
    },
    {
      id: "poc",
      title: "One point of contact",
      body: "One team answers for the whole project. No vendor finger-pointing between transport, supply, and assembly.",
      confirmFlag: "[CONFIRM: single point of contact practice]",
    },
    {
      id: "warranty",
      title: "A clear warranty",
      body: "1-year warranty on all furniture and assembly. Water and fire damage are not covered.",
      confirmFlag: null,
    },
  ],
  audience: {
    eyebrow: "Client Partners",
    title: "Built for teams accountable for workspace outcomes.",
    groups: [
      {
        title: "Real Estate Developers & Project Teams",
        description:
          "For asset owners and project directors preparing multi-floor commercial plates for tenant handover or immediate occupancy.",
        deliverables: [
          "Volume batching & floor-by-floor phased assembly",
          "Dedicated site lead coordinating with MEP and base-build schedules",
          "Comprehensive warranty certificates for asset management files",
        ],
      },
      {
        title: "Corporate Occupiers & Facilities Leads",
        description:
          "For expanding enterprises and mid-market organizations setting up headquarters or regional branches across Indian metros.",
        deliverables: [
          "Ergonomic seating matched to department shift patterns",
          "Modular desks supporting headcount reconfigurations",
          "Minimal business interruption during on-site staging",
        ],
      },
      {
        title: "Architects & Interior Designers",
        description:
          "For design practices seeking an accountable procurement and assembly partner to honor specifications accurately.",
        deliverables: [
          "Precise material, finish, and fabric adherence",
          "Value engineering without compromising design intent",
          "Zero guesswork on structural tolerance and stability",
        ],
      },
    ] satisfies ClientProfile[],
    note: "Client references and project photography shown with client consent. [CONFIRM: client logos approval]",
  },
  ctaBand: {
    eyebrow: "Start Your Project",
    headline: "Tell us the brief. We'll take it from here.",
    subline:
      "Share your floor plan, timeline, or headcount. Connect directly with our team or let our AI calling agent capture your initial specs.",
    primaryCta: {
      label: "Request a callback",
      href: "/contact#callback",
    },
    whatsappCta: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/917498061700?text=Hi%20Dreamz,%20I'd%20like%20to%20discuss%20a%20workspace%20project.",
    },
    callCta: {
      label: "Call Dreamz",
      href: "tel:+917498061700",
    },
  },
};

