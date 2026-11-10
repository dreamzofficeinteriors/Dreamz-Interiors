export interface ProcessStep {
  stepNumber: string;
  name: string;
  shortSummary: string;
  headline: string;
  whatDreamzHandles: string[];
  whatTheClientAvoids: string[];
  deliverables: string[];
}

export const processContent = {
  eyebrow: "Operating Protocol",
  title: "Accountability at every phase.",
  subline:
    "We specify, source, deliver and assemble. Here is exactly what Dreamz takes ownership of so you never have to chase vendors.",
  steps: [
    {
      stepNumber: "01",
      name: "Brief",
      shortSummary: "We listen, ask the right questions about people, space and purpose.",
      headline: "Understanding how your team works before specifying a single chair.",
      whatDreamzHandles: [
        "Analyzing floor plans, circulation paths, and headcount forecasts",
        "Clarifying operational requirements: ergonomics, collaboration density, and acoustic zoning",
        "Documenting electrical, data, and building management constraints",
      ],
      whatTheClientAvoids: [
        "Navigating confusing vendor catalogs without expert guidance",
        "Specifying mismatched sizes that fail building code or egress clearances",
        "Unbudgeted surprises during procurement",
      ],
      deliverables: [
        "Validated workspace requirement summary",
        "Preliminary bill of quantities (BOQ)",
        "Schedule roadmap with key delivery milestones",
      ],
    },
    {
      stepNumber: "02",
      name: "Plan and spec",
      shortSummary: "We propose layouts and specifications, flag issues early.",
      headline: "Value-engineering and technical specifications aligned with your floor plate.",
      whatDreamzHandles: [
        "Recommending materials, mechanisms, and finishes built for commercial longevity",
        "Reconciling furniture layouts against MEP and underfloor cabling runs",
        "Highlighting long lead-time items or potential site clashes well in advance",
      ],
      whatTheClientAvoids: [
        "Trial-and-error procurement with unknown durability standards",
        "Chasing multiple suppliers for product dimensions and finish samples",
        "Last-minute layout revisions on the delivery dock",
      ],
      deliverables: [
        "Finalized technical furniture specification sheet",
        "Finish and fabric sample boards for approval",
        "Firm consolidated commercial proposal",
      ],
    },
    {
      stepNumber: "03",
      name: "Source and deliver",
      shortSummary: "We source and manage delivery to site.",
      headline: "Aggregated procurement and precision freight logistics.",
      whatDreamzHandles: [
        "Vetting quality and structural compliance across certified suppliers",
        "Staging, packaging inspection, and multi-supplier freight consolidation",
        "Scheduling site deliveries strictly around tower freight elevator slots",
      ],
      whatTheClientAvoids: [
        "Coordinating five separate transport trucks arriving at once",
        "Disputes over in-transit damage or missing components",
        "Traffic and dock congestion holding up building management",
      ],
      deliverables: [
        "Dispatch tracking updates and milestone confirmations",
        "Dock clearance and site access protocol documentation",
        "Consolidated delivery manifest",
      ],
    },
    {
      stepNumber: "04",
      name: "Assemble and handover",
      shortSummary: "We assemble on site and hand over a working workspace.",
      headline: "Professional on-site assembly, levelling, and punch-list completion.",
      whatDreamzHandles: [
        "Deploying dedicated Dreamz assembly teams with supervisory leads",
        "Laser-levelled framing, desk mounting, and ergonomic mechanism testing",
        "Packaging material clearance and final room-by-room punch list review",
      ],
      whatTheClientAvoids: [
        "Hiring local unvetted labor who lack assembly drawings knowledge",
        "Wobbly workstations and improperly mounted cable raceways",
        "Debris and waste left behind on tenant floors",
      ],
      deliverables: [
        "Fully assembled, wipe-down cleaned, and operational workspaces",
        "Completed joint punch-list sign-off document",
        "Floor handover certificate",
      ],
    },
    {
      stepNumber: "05",
      name: "Support",
      shortSummary: "1-year warranty. Water and fire damage not covered.",
      headline: "Direct post-handover backing and clear warranty accountability.",
      whatDreamzHandles: [
        "Direct single-point warranty coverage for 1 full year",
        "Swift dispatch of repair or replacement components for mechanical failures",
        "Ongoing support for future floor reconfigurations and expansions",
      ],
      whatTheClientAvoids: [
        "Suppliers blaming manufacturers and manufacturers blaming installers",
        "Prolonged downtime when a mechanism needs adjustment",
        "Unclear warranty terms with hidden exceptions",
      ],
      deliverables: [
        "Formal 1-year warranty documentation (water & fire damage excluded)",
        "Direct account manager contact for post-handover requests",
        "Maintenance guidance documentation for facilities staff",
      ],
    },
  ] satisfies ProcessStep[],
  guaranteeNote: {
    heading: "Our Commitment to Delivery",
    body: "We set a realistic delivery and assembly schedule at project kickoff and provide transparent milestone tracking throughout. We believe in honest accountability rather than exaggerated marketing promises.",
    confirmFlag: "[CONFIRM: schedule commitment reflects actual practice]",
  },
};

