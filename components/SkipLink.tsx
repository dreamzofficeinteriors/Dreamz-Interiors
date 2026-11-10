import React from "react";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-charcoal focus:text-paper focus:font-heading focus:font-semibold focus:text-sm focus:rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange"
    >
      Skip to main content
    </a>
  );
}

