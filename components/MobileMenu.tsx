"use client";

import React, { useEffect, useRef } from "react";
import { TransitionLink } from "@/components/PageTransition";
import { usePathname } from "next/navigation";
import { brandContent } from "@/content/brand";
import { contactContent } from "@/content/contact";
import Button from "@/components/Button";

interface NavLinkItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className={`fixed inset-0 z-30 flex flex-col justify-between bg-charcoal text-paper transition-all duration-500 ease-wipe md:hidden ${
        isOpen
          ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_calc(100%_-_32px)_32px)]"
          : "pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%_-_32px)_32px)]"
      }`}
    >
      {/* Top Header spacer */}
      <div className="pt-24 px-6 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-silver font-semibold mb-6">
          Navigation
        </p>

        <nav className="flex flex-col space-y-5" aria-label="Mobile menu links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <TransitionLink
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`font-heading text-3xl font-bold tracking-tight transition-colors py-1 flex items-center justify-between ${
                  isActive
                    ? "text-orange"
                    : "text-paper hover:text-orange focus:text-orange"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-orange" />
                )}
              </TransitionLink>
            );
          })}

          <TransitionLink
            href="/faqs"
            onClick={onClose}
            className="font-heading text-xl text-silver hover:text-paper transition-colors pt-2"
          >
            Frequently Asked Questions
          </TransitionLink>
        </nav>
      </div>

      {/* Direct Contact Action Panel */}
      <div className="bg-charcoal/80 border-t border-paper/10 p-6 sm:p-8 space-y-4">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-silver font-medium">
            Direct Reach & Callback
          </p>
          <p className="text-sm text-paper/80 font-mono">
            {contactContent.phone.display}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button
            href={`tel:${contactContent.phone.e164}`}
            variant="secondary"
            size="md"
            className="w-full text-center border-paper/40 text-paper hover:bg-paper hover:text-charcoal"
          >
            Call Now
          </Button>

          <Button
            href={contactContent.whatsapp.link}
            isExternal
            variant="secondary"
            size="md"
            className="w-full text-center border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-charcoal"
          >
            WhatsApp
          </Button>
        </div>

        <Button
          href="/contact#callback"
          onClick={onClose}
          variant="primary"
          size="md"
          className="w-full text-center"
        >
          Request a Callback
        </Button>

        <p className="text-xs text-silver/70 pt-2 text-center">
          {brandContent.tagline}
        </p>
      </div>
    </div>
  );
}

