"use client";

import React, { useState } from "react";
import { FAQItem } from "@/content/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-charcoal/15 border-y border-charcoal/15 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-6 sm:py-8 transition-colors">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-[2px]"
              >
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-orange font-bold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-charcoal group-hover:text-orange transition-colors">
                    {item.question}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-[2px] border border-charcoal/20 text-charcoal group-hover:border-orange group-hover:text-orange transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="1" x2="6" y2="11" />
                    <line x1="1" y1="6" x2="11" y2="6" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4 sm:mt-5"
                  : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden pl-8 sm:pl-12 pr-4 sm:pr-8">
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
                {item.confirmFlag && (
                  <p className="text-[11px] font-mono text-charcoal/40 mt-3">
                    {item.confirmFlag}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

