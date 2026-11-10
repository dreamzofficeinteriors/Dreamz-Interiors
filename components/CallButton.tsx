"use client";

import React, { useState } from "react";
import { contactContent } from "@/content/contact";
import { trackEvent } from "@/lib/analytics";
import Button from "@/components/Button";

interface CallButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  label?: string;
}

export default function CallButton({
  className = "",
  variant = "primary",
  size = "md",
  label,
}: CallButtonProps) {
  const [showDesktopModal, setShowDesktopModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    trackEvent("call_click", { channel: "phone_line" });

    // On mobile screens, standard tel: link handles it
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return;
    }

    // On desktop, show clean modal with AI assistant notice and callback link
    e.preventDefault();
    setShowDesktopModal(true);
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(contactContent.phone.e164);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Button
        href={`tel:${contactContent.phone.e164}`}
        variant={variant}
        size={size}
        className={className}
        onClick={handleClick}
      >
        {label || `Call: ${contactContent.phone.display}`}
      </Button>

      {/* Desktop Call Helper Modal */}
      {showDesktopModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Direct Phone Line & AI Intake Coordinator"
          className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDesktopModal(false)}
        >
          <div
            className="w-full max-w-md bg-paper border border-charcoal/20 p-6 sm:p-8 rounded-[2px] shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-orange block">
                  Direct Line
                </span>
                <h3 className="font-heading text-xl font-bold text-charcoal">
                  Dreamz AI Voice Assistant
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDesktopModal(false)}
                className="text-charcoal/50 hover:text-charcoal p-1 text-lg font-bold"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="bg-stone/50 border border-charcoal/10 p-5 rounded-[2px] text-center space-y-2">
              <span className="text-xs uppercase tracking-wider text-charcoal/60 font-semibold block">
                Primary Intake Number
              </span>
              <p className="font-mono text-2xl sm:text-3xl font-bold text-charcoal">
                {contactContent.phone.display}
              </p>
              <div className="pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? "Copied to Clipboard ✓" : "Copy Phone Number"}
                </Button>
              </div>
            </div>

            <p className="text-xs text-charcoal/75 leading-relaxed">
              {contactContent.phone.aiNotice}
            </p>

            <div className="border-t border-charcoal/10 pt-4 flex flex-col gap-2.5">
              <Button
                href="/contact#callback"
                onClick={() => setShowDesktopModal(false)}
                variant="primary"
                size="md"
                className="w-full text-center"
              >
                Or Request a Structured Callback
              </Button>
              <Button
                href={contactContent.whatsapp.link}
                isExternal
                variant="ghost"
                size="sm"
                className="w-full text-center text-xs font-mono"
              >
                Or Message on WhatsApp →
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

