export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "operations" | "warranty";
  confirmFlag?: string;
}

export const faqsContent: FAQItem[] = [
  {
    id: "what-do-you-deliver",
    question: "What does Dreamz deliver?",
    answer:
      "Dreamz delivers commercial, modular, and turnkey furniture and workspace solutions across India. Our primary focus is commercial furniture—including ergonomic task seating, executive furniture, workstation clusters, meeting suites, and breakout areas—delivered and assembled on site.",
    category: "general",
  },
  {
    id: "do-you-manufacture",
    question: "Do you manufacture furniture in-house?",
    answer:
      "No. Dreamz does not manufacture in-house. We specify, source from verified manufacturing partners, manage freight logistics, and handle complete on-site assembly. This vendor-agnostic model allows us to curate the highest-quality components for your exact brief and take full accountability for the finished installation.",
    category: "operations",
  },
  {
    id: "warranty-coverage",
    question: "What does your warranty cover?",
    answer:
      "We provide a 1-year warranty on all furniture and assembly delivered by Dreamz. If any mechanical part or structural component fails under normal commercial use during that period, we repair or replace it. Please note: water damage and fire damage are strictly not covered.",
    category: "warranty",
  },
  {
    id: "where-do-you-work",
    question: "Where do you operate across India?",
    answer:
      "Dreamz operates Pan-India. With over 200 projects completed, we regularly coordinate site deliveries and deployment crews across major commercial centers including Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, and tier-2 business hubs.",
    category: "operations",
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer:
      "Most commercial furniture and modular workstation deployments take between 3 to 6 weeks from final BOQ approval to on-site assembly, while comprehensive turnkey projects typically range from 6 to 10 weeks depending on floor plate size and finish selections. [CONFIRM: exact typical timelines with operations team]",
    category: "operations",
    confirmFlag: "[CONFIRM: typical timeline duration]",
  },
  {
    id: "minimum-project-size",
    question: "Is there a minimum project size or order value?",
    answer:
      "We primarily focus on commercial and institutional workspaces—ranging from 20-seat branch offices to multi-floor 1,000+ workstation corporate campuses and developer amenity suites. Contact our team with your floor requirements to review feasibility. [CONFIRM: minimum project size]",
    category: "services",
    confirmFlag: "[CONFIRM: minimum project size threshold]",
  },
  {
    id: "how-to-get-started",
    question: "How do we get started on a project?",
    answer:
      "Reach out through whichever channel suits you best: call our phone line to speak directly with our AI assistant for an immediate brief intake, start a chat on WhatsApp, or submit the callback form with your floor plan. A Dreamz project lead will review your specifications and schedule a consultation.",
    category: "general",
  },
  {
    id: "developer-amenities",
    question: "Do you work with real estate developers on spec suites?",
    answer:
      "Yes. A significant portion of our 200+ projects are for commercial developers preparing speculative suites, display floors, and tenant amenities that need rapid, dependable delivery without coordinating fragmented vendors.",
    category: "services",
  },
];

