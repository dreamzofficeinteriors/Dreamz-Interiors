export type ProjectCategory = "commercial-furniture" | "modular" | "turnkey";

export interface ProjectMetric {
  value: string;
  label: string;
  confirmFlag?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  clientType: string;
  location: string;
  locationConfirmFlag: string;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  metrics: ProjectMetric[];
  brief: {
    overview: string;
    spaceDetails: string;
    headcountTarget: string;
  };
  challenge: {
    summary: string;
    keyPoints: string[];
  };
  whatWeDid: {
    summary: string;
    executionPoints: string[];
  };
  outcome: {
    summary: string;
    keyPoints: string[];
  };
  turnkeyBeforeAfter?: {
    beforeImage: string;
    afterImage: string;
    caption: string;
  };
  warrantyNote: string;
}

export const projectsData: CaseStudy[] = [
  {
    id: "project-01",
    slug: "fintech-hub-gurugram",
    title: "Commercial Headquarters Fit-Out",
    category: "commercial-furniture",
    categoryLabel: "Commercial Furniture",
    clientType: "Fintech Enterprise [CONFIRM: actual client or anonymized profile]",
    location: "Gurugram, Haryana [CONFIRM: project location]",
    locationConfirmFlag: "[CONFIRM: project location]",
    featured: true,
    heroImage: "/placeholders/project-01.jpg",
    galleryImages: [
      "/placeholders/project-01.jpg",
      "/placeholders/project-01-detail-1.jpg",
      "/placeholders/project-01-detail-2.jpg",
    ],
    metrics: [
      {
        value: "450+",
        label: "Workstations & Chairs [CONFIRM: exact numbers]",
        confirmFlag: "[CONFIRM: project volume numbers]",
      },
      {
        value: "28 Days",
        label: "Site Delivery to Handover [CONFIRM: timeline]",
        confirmFlag: "[CONFIRM: execution timeline]",
      },
      {
        value: "100%",
        label: "Punch-list Resolution [CONFIRM]",
        confirmFlag: "[CONFIRM: outcome metric]",
      },
    ],
    brief: {
      overview:
        "The client required high-performance ergonomic task seating, meeting room suites, and agile collaborative zones for a 45,000 sq. ft. headquarters expansion.",
      spaceDetails: "45,000 sq. ft. commercial office floor plate [CONFIRM: space size]",
      headcountTarget: "450 team members across engineering and operations",
    },
    challenge: {
      summary:
        "A strict phased move-in schedule where the 4th floor had to become operational while the 5th floor was still undergoing mechanical commissioning.",
      keyPoints: [
        "Coordinating elevator access during restricted commercial tower hours",
        "Ensuring identical fabric dye-lots and finish tolerances across multiple procurement batches",
        "Rigorous ergonomic chair mechanism testing to avoid day-one warranty complaints",
      ],
    },
    whatWeDid: {
      summary:
        "Dreamz specified heavy-duty synchronized task chairs, modular conference tables with concealed cable channels, and breakout furniture staged in two precise deliveries.",
      executionPoints: [
        "Conducted ergonomic sampling session with client leadership prior to procurement sign-off",
        "Staged phased vertical transport after 8 PM to prevent building freight bottlenecks",
        "Dispatched dedicated Dreamz assembly team to assemble, inspect, and position every unit",
      ],
    },
    outcome: {
      summary:
        "Handover completed on schedule with complete floor readiness and zero disruption to the active 4th-floor workforce.",
      keyPoints: [
        "450 chairs and desks inspected and signed off by the facilities lead",
        "Full documentation packet and 1-year warranty coverage initiated upon handover",
      ],
    },
    warrantyNote:
      "Covered under Dreamz 1-year warranty. Water and fire damage are not covered.",
  },
  {
    id: "project-02",
    slug: "tech-campus-bengaluru",
    title: "Scalable Modular Engineering Workstations",
    category: "modular",
    categoryLabel: "Modular Systems",
    clientType: "Technology R&D Center [CONFIRM: actual client]",
    location: "Outer Ring Road, Bengaluru [CONFIRM: project location]",
    locationConfirmFlag: "[CONFIRM: project location]",
    featured: true,
    heroImage: "/placeholders/project-02.jpg",
    galleryImages: [
      "/placeholders/project-02.jpg",
      "/placeholders/project-02-detail-1.jpg",
      "/placeholders/project-02-detail-2.jpg",
    ],
    metrics: [
      {
        value: "600+",
        label: "Modular Seats [CONFIRM]",
        confirmFlag: "[CONFIRM: seat count]",
      },
      {
        value: "3 Floors",
        label: "Synchronized Deployment [CONFIRM]",
        confirmFlag: "[CONFIRM: deployment scale]",
      },
      {
        value: "1 Year",
        label: "Warranty Coverage",
      },
    ],
    brief: {
      overview:
        "An enterprise software campus needed modular linear benching systems capable of supporting dual-monitor arms, heavy desktop cabling, and demountable acoustic privacy screens.",
      spaceDetails: "60,000 sq. ft. across 3 contiguous floors [CONFIRM]",
      headcountTarget: "600 software engineers and product teams",
    },
    challenge: {
      summary:
        "Existing underfloor trench ducts were unevenly spaced, requiring adaptable modular cable trays to route clean power and Cat6 lines without tripping hazards.",
      keyPoints: [
        "Bridging varying floor raceway positions without custom re-drilling on site",
        "Strict acoustics requirements to keep ambient noise down in open-plan clusters",
        "Maintaining straight sightlines across 40-meter long open bays",
      ],
    },
    whatWeDid: {
      summary:
        "Dreamz engineered a custom modular raceway configuration with loop-leg steel frames and pinnable acoustic PET screens that clip securely to desking beams.",
      executionPoints: [
        "Laser-levelled all frame understructures before securing solid laminate worktops",
        "Supplied high-density vertical cable spines connecting floor boxes to desk troughs",
        "Implemented standardized modular components allowing future headcount additions",
      ],
    },
    outcome: {
      summary:
        "All three floors handed over ready for immediate IT patch cabling and employee occupancy.",
      keyPoints: [
        "Clean, wire-free floor aesthetic achieved across all 600 work positions",
        "Single point of contact maintained across procurement, logistics, and assembly",
      ],
    },
    warrantyNote:
      "Covered under Dreamz 1-year warranty. Water and fire damage are not covered.",
  },
  {
    id: "project-03",
    slug: "developer-commercial-tower-mumbai",
    title: "Turnkey Spec Suite Deployment",
    category: "turnkey",
    categoryLabel: "Turnkey Handover",
    clientType: "Commercial Real Estate Developer [CONFIRM: actual developer]",
    location: "Lower Parel, Mumbai [CONFIRM: project location]",
    locationConfirmFlag: "[CONFIRM: project location]",
    featured: true,
    heroImage: "/placeholders/project-03.jpg",
    galleryImages: [
      "/placeholders/project-03.jpg",
      "/placeholders/project-03-detail-1.jpg",
      "/placeholders/project-03-detail-2.jpg",
    ],
    metrics: [
      {
        value: "25,000",
        label: "Sq. Ft. Complete Fit-Out [CONFIRM]",
        confirmFlag: "[CONFIRM: square footage]",
      },
      {
        value: "1 Team",
        label: "Brief to Handover Ownership",
      },
      {
        value: "100%",
        label: "Developer Spec Adherence [CONFIRM]",
        confirmFlag: "[CONFIRM: spec compliance]",
      },
    ],
    brief: {
      overview:
        "A premium developer required two model speculative suites to showcase to prospective institutional tenants seeking immediate turnkey leases.",
      spaceDetails: "25,000 sq. ft. dual-suite floor plate [CONFIRM]",
      headcountTarget: "220 combined work positions plus executive suites",
    },
    challenge: {
      summary:
        "Short turnaround time to match scheduled leasing broker showcases, requiring tight coordination between loose furniture staging and finishing touches.",
      keyPoints: [
        "Multiple diverse categories required: executive desks, modular clusters, phone booths, lounge seating",
        "Zero manufacturing in-house means multi-supplier procurement had to be flawlessly aggregated",
        "Demanding developer quality standards for finish alignment and joint seams",
      ],
    },
    whatWeDid: {
      summary:
        "Dreamz took end-to-end accountability for specification consolidation, supplier logistics, and on-site assembly supervision.",
      executionPoints: [
        "Consolidated 12 distinct supplier categories at an off-site hub before unified delivery",
        "Provided dedicated site management to supervise off-loading and room-by-room build",
        "Conducted rigorous joint pre-handover walkthrough with the developer's PMC",
      ],
    },
    outcome: {
      summary:
        "Both speculative suites opened on schedule for the broker preview day, presenting finished commercial floors ready for tenant occupation.",
      keyPoints: [
        "Developer team praised the single-point accountability with zero vendor disputes",
        "Handover documented with complete asset registers and warranty certificates",
      ],
    },
    turnkeyBeforeAfter: {
      beforeImage: "/placeholders/project-03-before.jpg",
      afterImage: "/placeholders/project-03.jpg",
      caption: "From initial structural fit-out and biophilic staging to a fully finished, tenant-ready workspace floor.",
    },
    warrantyNote:
      "Covered under Dreamz 1-year warranty. Water and fire damage are not covered.",
  },
  {
    id: "project-04",
    slug: "regional-consulting-office-pune",
    title: "Executive & Collaborative Suite Fit-Out",
    category: "commercial-furniture",
    categoryLabel: "Commercial Furniture",
    clientType: "Management Consulting Firm [CONFIRM: actual client]",
    location: "Kalyani Nagar, Pune [CONFIRM: project location]",
    locationConfirmFlag: "[CONFIRM: project location]",
    featured: false,
    heroImage: "/placeholders/project-04.jpg",
    galleryImages: [
      "/placeholders/project-04.jpg",
      "/placeholders/project-04-detail-1.jpg",
    ],
    metrics: [
      {
        value: "180",
        label: "Executive & Task Seats [CONFIRM]",
        confirmFlag: "[CONFIRM: seat count]",
      },
      {
        value: "6",
        label: "Meeting & Boardrooms [CONFIRM]",
        confirmFlag: "[CONFIRM: room count]",
      },
      {
        value: "1-year",
        label: "Direct Warranty",
      },
    ],
    brief: {
      overview:
        "Procurement and assembly of executive office furniture, sound-isolated acoustic conversation pods, and boardroom tables with premium veneer finishes.",
      spaceDetails: "18,000 sq. ft. regional office [CONFIRM]",
      headcountTarget: "180 consulting professionals",
    },
    challenge: {
      summary:
        "Acoustic isolation criteria for partner offices and delicate surface finishes requiring white-glove assembly care.",
      keyPoints: [
        "Delicate veneer finishes susceptible to handling damage during freight",
        "Precise alignment required for concealed power docks in boardroom tables",
      ],
    },
    whatWeDid: {
      summary:
        "Curated premium furniture specifications, managed protective crated freight, and oversaw white-glove installation with certified assemblers.",
      executionPoints: [
        "Protective crating and individual piece tagging for zero-scratch transit",
        "Assembly supervised by senior Dreamz installation manager",
        "Full testing of integrated table electrics prior to handover",
      ],
    },
    outcome: {
      summary:
        "Delivered a polished consulting workspace meeting the firm's international workplace standards.",
      keyPoints: [
        "All boardrooms and private offices delivered defect-free",
        "Complete 1-year warranty documentation provided to regional administration team",
      ],
    },
    warrantyNote:
      "Covered under Dreamz 1-year warranty. Water and fire damage are not covered.",
  },
];

