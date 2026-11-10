export interface BrandPrinciple {
  trait: string;
  meaning: string;
  manifestation: string;
}

export interface BrandConfig {
  name: string;
  legalName: string;
  tagline: string;
  descriptor: string;
  positioning: string;
  promise: string;
  philosophy: string;
  operatingModel: {
    summary: string;
    details: string;
    manufacturingStatement: string;
  };
  warranty: {
    term: string;
    statement: string;
    exclusions: string;
  };
  trackRecord: {
    projectsCompleted: string;
    geography: string;
    solutionLinesCount: number;
    deliveryModel: string;
  };
  personality: {
    archetype: string;
    tone: string;
    principles: BrandPrinciple[];
  };
}

export const brandContent: BrandConfig = {
  name: "Dreamz",
  legalName: "Dreamz Interiors",
  tagline: "Your Vision, Our Responsibility.",
  descriptor: "Commercial, Modular and Turnkey Workspace Solutions",
  positioning:
    "Dreamz is the accountable partner for commercial workspaces across India, covering furniture, modular and turnkey, with 200+ projects delivered.",
  promise:
    "One team owns your workspace from brief to handover, so you don't have to chase anyone.",
  philosophy:
    "The client brings the purpose for the space. Dreamz owns everything between the idea and the finished floor: the thinking, the delivery and the follow-through.",
  operatingModel: {
    summary:
      "We specify, source, deliver and assemble, and stay accountable for the result.",
    details:
      "Dreamz acts as an accountable procurement and execution partner. We do not manufacture in-house; we curate from verified production lines, inspect tolerances, orchestrate logistics to site, and manage complete assembly.",
    manufacturingStatement:
      "Dreamz does not manufacture in-house. We specify, source, deliver and assemble, taking sole accountability for the final result.",
  },
  warranty: {
    term: "1-year warranty",
    statement: "1-year warranty on all delivered and assembled furniture.",
    exclusions: "Water damage and fire damage are not covered.",
  },
  trackRecord: {
    projectsCompleted: "200+",
    geography: "Pan-India",
    solutionLinesCount: 3,
    deliveryModel: "Planned, delivered and assembled on site",
  },
  personality: {
    archetype: "The Thoughtful Authority",
    tone: "Bold, confident, ownership-driven.",
    principles: [
      {
        trait: "Intelligent",
        meaning: "Demonstrates understanding rather than making claims.",
        manifestation:
          "Case studies state the brief, constraint, and decision, not just photographs.",
      },
      {
        trait: "Thoughtful",
        meaning: "Considers the people, space and purpose behind every decision.",
        manifestation:
          "Copy names who a space is for and why it is engineered that way.",
      },
      {
        trait: "Confident",
        meaning: "Conviction without exaggeration.",
        manifestation:
          "Short declarative sentences, verifiable metrics instead of superlatives.",
      },
      {
        trait: "Proactive",
        meaning: "Anticipates requirements.",
        manifestation:
          "Process outlines what Dreamz handles before the client ever has to ask.",
      },
      {
        trait: "Dependable",
        meaning: "Accountability and follow-through.",
        manifestation:
          "Visible commitments: scheduled delivery, single point of contact, 1-year warranty.",
      },
      {
        trait: "Approachable",
        meaning: "Makes complex workspace decisions feel simpler.",
        manifestation:
          "Plain language, three clear solution lines, low-effort channels to start.",
      },
    ],
  },
};

