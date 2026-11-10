export interface ContactConfig {
  phone: {
    display: string;
    e164: string;
    description: string;
    isAiAssisted: boolean;
    aiNotice: string;
    confirmFlag: string;
  };
  whatsapp: {
    display: string;
    numberOnly: string;
    prefilledMessage: string;
    link: string;
    confirmFlag: string;
  };
  email: {
    general: string;
    projects: string;
    confirmFlag: string;
  };
  office: {
    addressLines: string[];
    cityStateZip: string;
    country: string;
    confirmFlag: string;
  };
  hours: {
    days: string;
    timeWindow: string;
    aiAvailability: string;
    confirmFlag: string;
  };
  form: {
    title: string;
    subline: string;
    projectTypes: Array<{
      value: string;
      label: string;
    }>;
    privacyNotice: string;
    aiConsentNote: string;
  };
}

export const contactContent: ContactConfig = {
  phone: {
    display: "+91 95527 04302",
    e164: "+919552704302",
    description:
      "Answered by our AI voice assistant for immediate brief intake and designer callback scheduling.",
    isAiAssisted: true,
    aiNotice:
      "Calls are answered by our AI assistant to capture your space requirements immediately, and may be recorded for quality and accurate specification handover. [CONFIRM: recording and consent wording with the business]",
    confirmFlag: "",
  },
  whatsapp: {
    display: "+91 74980 61700",
    numberOnly: "917498061700",
    prefilledMessage: "Hi Dreamz, I'd like to discuss a workspace project.",
    link: "https://wa.me/917498061700?text=Hi%20Dreamz,%20I'd%20like%20to%20discuss%20a%20workspace%20project.",
    confirmFlag: "",
  },
  email: {
    general: "contact@dreamzworkspaces.com [CONFIRM]",
    projects: "projects@dreamzworkspaces.com [CONFIRM]",
    confirmFlag: "[CONFIRM: official email addresses]",
  },
  office: {
    addressLines: [
      "Dreamz Interiors Headquarters [CONFIRM: exact street address]",
      "Commercial Tower, Floor 4 [CONFIRM]",
    ],
    cityStateZip: "Mumbai / Bengaluru / Gurugram [CONFIRM: primary registered office]",
    country: "India",
    confirmFlag: "[CONFIRM: registered corporate office address]",
  },
  hours: {
    days: "Monday – Saturday [CONFIRM]",
    timeWindow: "9:30 AM – 6:30 PM IST [CONFIRM]",
    aiAvailability: "AI Voice Line available 24/7 for requirement logging",
    confirmFlag: "[CONFIRM: official operating hours]",
  },
  form: {
    title: "Request a Project Callback",
    subline:
      "Share your requirements. An accountable Dreamz project lead will review your scope and get in touch within 1 business day.",
    projectTypes: [
      { value: "commercial-furniture", label: "Commercial Furniture" },
      { value: "modular", label: "Modular Systems" },
      { value: "turnkey", label: "Turnkey Handover" },
      { value: "not-sure", label: "Not sure / Multiple solutions" },
    ],
    privacyNotice:
      "Your contact details will only be used to respond to your inquiry and scope your project. We never share your data with external advertisers.",
    aiConsentNote:
      "By requesting a call, you agree that our AI voice assistant or a project lead may contact you at the provided number. [CONFIRM: consent wording]",
  },
};

