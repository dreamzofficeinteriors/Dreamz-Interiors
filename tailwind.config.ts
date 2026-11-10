import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        stone: "var(--stone)",
        charcoal: "var(--charcoal)",
        silver: "var(--silver)",
        orange: "var(--orange)",
        "charcoal-subtle": "rgba(28, 28, 30, 0.08)",
        "silver-light": "rgba(168, 171, 175, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-archivo)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
        xl: "4px",
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        section: "120px",
        "section-mobile": "72px",
      },
      transitionTimingFunction: {
        wipe: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

