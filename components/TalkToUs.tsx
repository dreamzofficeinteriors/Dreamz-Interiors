"use client";

import React, { useState } from "react";
import { contactContent } from "@/content/contact";
import Button from "@/components/Button";

export default function TalkToUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Pill on Mobile/Tablet */}
      <div className="fixed bottom-6 right-4 z-30 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Talk to Dreamz — Call, WhatsApp or Callback"
          className="flex items-center gap-2 bg-orange text-white font-heading font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-lg border border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>Talk to us</span>
        </button>
      </div>

      {/* Floating Drawer / Sheet on Mobile */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Direct contact channels"
          className="fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-paper border border-charcoal/20 rounded-[2px] p-6 space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Talk to Dreamz
                </h3>
                <p className="text-xs text-charcoal/60">
                  Select your preferred channel
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-charcoal/50 hover:text-charcoal text-xl leading-none p-1 focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5">
              <Button
                href={`tel:${contactContent.phone.e164}`}
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Call AI Line: {contactContent.phone.display}
              </Button>

              <Button
                href={contactContent.whatsapp.link}
                isExternal
                variant="secondary"
                size="md"
                className="w-full text-center border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-charcoal"
              >
                Chat on WhatsApp
              </Button>

              <Button
                href="/contact#callback"
                onClick={() => setIsOpen(false)}
                variant="dark"
                size="md"
                className="w-full text-center"
              >
                Request a Callback
              </Button>
            </div>

            <p className="text-[10px] text-charcoal/50 text-center leading-normal pt-1">
              Calls answered by AI assistant • 1-year warranty on all furniture
            </p>
          </div>
        </div>
      )}
    </>
  );
}

