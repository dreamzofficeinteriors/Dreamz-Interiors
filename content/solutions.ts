export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  heroSummary: string;
  whatItIs: string;
  whoItsFor: {
    headline: string;
    audiences: Array<{
      title: string;
      description: string;
    }>;
  };
  whatsIncluded: {
    note: string;
    confirmFlag: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  howItWorks: Array<{
    stepNumber: string;
    title: string;
    description: string;
  }>;
  typicalTimeline: {
    range: string;
    note: string;
    confirmFlag: string;
  };
  relatedProjectSlug: string;
  meta: {
    title: string;
    description: string;
  };
}

export const solutionsData: SolutionDetail[] = [
  {
    id: "commercial-furniture",
    slug: "commercial-furniture",
    title: "Commercial Furniture",
    tagline: "Specified for how teams work. Delivered and assembled on site.",
    badge: "Primary Focus",
    heroSummary:
      "High-performance commercial seating, executive furniture, conference suites, and breakout lounges. Sourced to exact ergonomic and durability standards, shipped to site, and assembled by dedicated Dreamz crews.",
    whatItIs:
      "Our commercial furniture service covers the full lifecycle of office furniture procurement. We help clients choose the right specifications for durability, ergonomic performance, and aesthetic alignment, coordinate scheduled logistics, and handle complete on-site assembly.",
    whoItsFor: {
      headline: "Engineered for organizations that prioritize uptime and employee comfort.",
      audiences: [
        {
          title: "Corporate Occupiers",
          description:
            "Workplaces requiring ergonomic chairs with BIFMA-grade mechanisms and durable desking that withstand heavy daily usage.",
        },
        {
          title: "Commercial Real Estate Developers",
          description:
            "Asset owners outfitting managed floors, executive suites, and tenant amenities looking for cohesive commercial aesthetics.",
        },
        {
          title: "Architectural & Interior Specifiers",
          description:
            "Design firms seeking an accountable partner who strictly follows finish schedules, fabrics, and hardware tolerances.",
        },
      ],
    },
    whatsIncluded: {
      note: "Standard commercial packages configured to project floor plans and headcount.",
      confirmFlag: "[CONFIRM: solution inclusions and typical timelines]",
      categories: [
        {
          name: "Task & Executive Seating",
          items: [
            "Ergonomic mesh & upholstered task chairs with multi-lock synchro mechanisms",
            "Executive leather and high-back seating with adjustable lumbar",
            "Conference room chairs with auto-return swivel bases",
          ],
        },
        {
          name: "Meeting & Collaboration",
          items: [
            "Modular boardroom tables with built-in cable connectivity pop-ups",
            "Acoustic phone booths and private focus pods",
            "Casual collaborative high-tables with bar stools",
          ],
        },
        {
          name: "Breakout & Cafeteria",
          items: [
            "High-traffic cafeteria dining tables and stackable poly chairs",
            "Soft seating modular sofas and lounge armchairs",
            "Mobile whiteboards and acoustic partition screens",
          ],
        },
      ],
    },
    howItWorks: [
      {
        stepNumber: "01",
        title: "Specification Audit",
        description:
          "We analyze your headcount, departmental use cases, and budget parameters to formulate the bill of quantities (BOQ).",
      },
      {
        stepNumber: "02",
        title: "Material Sourcing & Staging",
        description:
          "We source from vetted manufacturing partners with proven structural certifications and stage components for delivery.",
      },
      {
        stepNumber: "03",
        title: "Site Delivery & Logistics",
        description:
          "Scheduled dispatch timed to your elevator and freight access windows to prevent dock congestion.",
      },
      {
        stepNumber: "04",
        title: "On-Site Assembly",
        description:
          "Our trained assembly crew builds every workstation, levels each desk, and tests chair mechanisms.",
      },
      {
        stepNumber: "05",
        title: "Handover & Warranty",
        description:
          "Complete room-by-room punch list review followed by our 1-year warranty coverage (excluding water and fire damage).",
      },
    ],
    typicalTimeline: {
      range: "3 to 6 weeks",
      note: "Varies depending on total volume, custom fabric selections, and site readiness.",
      confirmFlag: "[CONFIRM: typical timeline for commercial furniture]",
    },
    relatedProjectSlug: "fintech-hub-gurugram",
    meta: {
      title: "Commercial Furniture Solutions | Dreamz",
      description:
        "Commercial office furniture specified, delivered, and assembled across India. 1-year warranty. 200+ projects delivered.",
    },
  },
  {
    id: "modular",
    slug: "modular",
    title: "Modular Workspace Systems",
    tagline: "Flexible workstation systems planned around headcount and layout.",
    badge: "Scalable Systems",
    heroSummary:
      "Intelligent modular workstations, desking clusters, and privacy screening designed for spatial adaptability. Engineered with integrated cable trays and modular wire management for seamless team scaling.",
    whatItIs:
      "Modular furniture allows modern floor plates to expand, reconfigure, and adapt over time. Dreamz specifies and delivers modular systems with precision frame structures, wire raceways, and demountable screens that simplify future layout reorganizations.",
    whoItsFor: {
      headline: "Ideal for agile companies and enterprise plates that evolve over time.",
      audiences: [
        {
          title: "Technology & Engineering Teams",
          description:
            "Squad-based layouts requiring linear or 120-degree benching with high electrical and data routing capacity.",
        },
        {
          title: "Co-Working & Shared Spaces",
          description:
            "Operators needing durable, interchangeable desking units that can be quickly added or reconfigured.",
        },
        {
          title: "Facilities & Operations Heads",
          description:
            "Managers who value standardized parts and modular components that simplify maintenance across multiple floors.",
        },
      ],
    },
    whatsIncluded: {
      note: "Modular components engineered for repeated reconfiguration.",
      confirmFlag: "[CONFIRM: exact modular components and specifications]",
      categories: [
        {
          name: "Workstation Configurations",
          items: [
            "Linear back-to-back benching systems with shared central raceways",
            "120-degree collaborative 3-person workstation clusters",
            "Single executive and private pod desks with modesty screens",
          ],
        },
        {
          name: "Screening & Acoustic Privacy",
          items: [
            "Fabric-wrapped pinnable acoustic divider screens",
            "Frosted acrylic and acoustic PET felt modesty panels",
            "Magnetic whiteboard clamp screens for agile workgroups",
          ],
        },
        {
          name: "Integrated Wire Management",
          items: [
            "Under-desk metal cable trays with flip-open wire basket access",
            "Vertical cable spines connecting floor grommets to raceways",
            "Pre-routed switch plate mounting brackets for data and power",
          ],
        },
      ],
    },
    howItWorks: [
      {
        stepNumber: "01",
        title: "Density & Circulation Study",
        description:
          "We examine AutoCAD floor plans to maximize seat count while preserving required egress clearance and sightlines.",
      },
      {
        stepNumber: "02",
        title: "Modular Component Spec",
        description:
          "Selection of leg geometries (O-leg, loop leg, goalpost) and cable raceway depth according to IT infrastructure needs.",
      },
      {
        stepNumber: "03",
        title: "Batch Staging & Delivery",
        description:
          "Parts flat-packed and labelled by floor zone to streamline vertical transport inside commercial towers.",
      },
      {
        stepNumber: "04",
        title: "Precision Framing & Levelling",
        description:
          "Structural undercarriages assembled, levelled across floor laser lines, and locked before surfaces are secured.",
      },
      {
        stepNumber: "05",
        title: "Inspection & Handover",
        description:
          "Rigid stability testing, grommet inspection, and handover backed by 1-year warranty coverage.",
      },
    ],
    typicalTimeline: {
      range: "4 to 7 weeks",
      note: "Timeline depends on linear run quantities and specialized surface finishes.",
      confirmFlag: "[CONFIRM: typical timeline for modular systems]",
    },
    relatedProjectSlug: "tech-campus-bengaluru",
    meta: {
      title: "Modular Workstation Systems | Dreamz",
      description:
        "High-density modular desking and acoustic workstation systems planned, delivered, and assembled across India.",
    },
  },
  {
    id: "turnkey",
    slug: "turnkey",
    title: "Turnkey Workspace Handover",
    tagline: "One team from brief to handover. We plan, source, deliver and assemble.",
    badge: "End-to-End Ownership [CONFIRM: exact turnkey scope]",
    heroSummary:
      "A consolidated procurement and installation service for complete workspace interiors. We coordinate the full furniture and loose fittings envelope from preliminary BOQ to final punch-list handover.",
    whatItIs:
      "Turnkey service gives developers and corporate tenants one accountable partner for the entire loose and modular workspace fit-out. We do not manufacture; we specify, source from qualified suppliers, manage freight logistics, and orchestrate turnkey on-site assembly.",
    whoItsFor: {
      headline: "For teams who cannot afford to coordinate multiple fragmented vendors.",
      audiences: [
        {
          title: "Real Estate Developers",
          description:
            "Asset managers creating ready-to-move-in speculative office suites to accelerate tenant leasing velocity.",
        },
        {
          title: "Expanding Corporate Enterprises",
          description:
            "Companies launching new branch offices in unfamiliar cities without permanent regional facilities staff.",
        },
        {
          title: "Project Management Consultants (PMCs)",
          description:
            "PMCs requiring a single contract vehicle with verified milestone adherence and transparent scheduling.",
        },
      ],
    },
    whatsIncluded: {
      note: "Turnkey package scope covering loose furniture, workstations, storage, and acoustic zones.",
      confirmFlag: "[CONFIRM: exact turnkey scope]",
      categories: [
        {
          name: "Complete Furniture Envelope",
          items: [
            "All workstation clusters, task seating, and private office setups",
            "Conference tables, credenzas, and audiovisual integration housing",
            "Cafeteria, lounge, reception, and training room assemblies",
          ],
        },
        {
          name: "Ancillary & Acoustic Elements",
          items: [
            "Demountable phone booths and quiet conversation alcoves",
            "Freestanding storage pedestals, credenzas, and tambour units",
            "Planter box dividers and decorative spatial partitions",
          ],
        },
        {
          name: "Execution & Handover Management",
          items: [
            "Single dedicated Dreamz Project Lead on site",
            "Consolidated shipping schedules coordinated with freight elevators",
            "Punch-list resolution and 1-year warranty documentation",
          ],
        },
      ],
    },
    howItWorks: [
      {
        stepNumber: "01",
        title: "Comprehensive Brief & Scope",
        description:
          "We review architectural plans, mechanical and electrical points, target move-in dates, and milestone dependencies.",
      },
      {
        stepNumber: "02",
        title: "Consolidated Procurement Spec",
        description:
          "We aggregate all furniture and modular components into a unified Bill of Quantities with transparent line-item pricing.",
      },
      {
        stepNumber: "03",
        title: "Staged Logistics & Freight",
        description:
          "Consolidated deliveries timed to site readiness phases, eliminating clutter and job site damage risk.",
      },
      {
        stepNumber: "04",
        title: "Assembly & Placement",
        description:
          "Dedicated Dreamz installation supervisors manage complete assembly, layout alignment, and packaging removal.",
      },
      {
        stepNumber: "05",
        title: "Turnkey Walkthrough & Handover",
        description:
          "Joint floor inspection with client project team, formal sign-off, and initiation of our 1-year warranty.",
      },
    ],
    typicalTimeline: {
      range: "6 to 10 weeks",
      note: "Structured along base-build handover dates and freight scheduling.",
      confirmFlag: "[CONFIRM: typical timeline for turnkey handover]",
    },
    relatedProjectSlug: "developer-commercial-tower-mumbai",
    meta: {
      title: "Turnkey Workspace Solutions | Dreamz",
      description:
        "End-to-end commercial workspace fit-out. Specified, sourced, delivered, and assembled under single accountability.",
    },
  },
];

