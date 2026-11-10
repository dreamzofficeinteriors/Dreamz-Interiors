import React from "react";
import { TransitionLink } from "@/components/PageTransition";
import Container from "@/components/Container";
import { brandContent } from "@/content/brand";
import { contactContent } from "@/content/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-paper border-t border-charcoal/40 pt-16 md:pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-paper/10">
          {/* Brand & Positioning Column */}
          <div className="md:col-span-5 space-y-4">
            <TransitionLink
              href="/"
              className="inline-block font-heading text-2xl font-bold tracking-tight text-paper group"
            >
              <span>{brandContent.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-orange ml-1 translate-y-[-2px]" />
            </TransitionLink>

            <p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-paper/90 max-w-md">
              {brandContent.tagline}
            </p>

            <p className="text-sm text-silver leading-relaxed max-w-md pt-1">
              {brandContent.operatingModel.manufacturingStatement}
            </p>

            {/* Clear warranty disclaimer */}
            <div className="pt-3">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-[2px] border border-orange/20">
                1-Year Direct Warranty
              </span>
              <p className="text-xs text-silver mt-1.5">
                {brandContent.warranty.exclusions}
              </p>
            </div>
          </div>

          {/* Solution Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <TransitionLink
                  href="/solutions/commercial-furniture"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Commercial Furniture
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/solutions/modular"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Modular Systems
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/solutions/turnkey"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Turnkey Handover
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/solutions"
                  className="text-paper/50 hover:text-paper transition-colors"
                >
                  All Solutions & Overview
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Navigation & Company Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <TransitionLink
                  href="/projects"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Projects & Case Studies
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/process"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Our 5-Step Process
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/about"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  About Dreamz
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/faqs"
                  className="text-paper/80 hover:text-orange transition-colors"
                >
                  Frequently Asked Questions
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Inquiries */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-silver">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${contactContent.phone.e164}`}
                  className="text-paper/80 hover:text-orange transition-colors block font-mono text-xs"
                >
                  {contactContent.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={contactContent.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline transition-colors block font-mono text-xs flex items-center gap-1.5"
                >
                  <span className="font-sans">WhatsApp:</span> {contactContent.whatsapp.display}
                </a>
              </li>
              <li>
                <TransitionLink
                  href="/contact"
                  className="text-orange hover:underline font-medium block pt-1"
                >
                  Request a Callback →
                </TransitionLink>
              </li>
            </ul>

            <div className="pt-2 text-xs text-silver/60">
              <span className="block font-medium text-silver/80">Coverage:</span>
              Pan-India Commercial Deployments
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-silver">
          <div>
            © {currentYear} {brandContent.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <TransitionLink
              href="/privacy"
              className="hover:text-paper transition-colors"
            >
              Privacy Policy
            </TransitionLink>
            <TransitionLink
              href="/terms"
              className="hover:text-paper transition-colors"
            >
              Terms of Service
            </TransitionLink>
            <span className="text-silver/40">
              [CONFIRM: catalogue available?]
            </span>
          </div>
        </div>
      </Container>

      {/* Massive Editorial / Architectural Footer Wordmark Band (Faithful to Congrue Reference) */}
      <div className="mt-16 pt-16 md:pt-24 pb-12 border-t border-charcoal/20 footer-blueprint-grid text-charcoal relative overflow-hidden select-none">
        {/* Subtle schematic circuit & blueprint symbols background pattern (just like reference) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='164' height='82' viewBox='0 0 164 82' fill='none' stroke='%231C1C1E' stroke-width='1'%3E%3C!-- Hexagon at (20, 20) --%3E%3Cpolygon points='20,13 26,16.5 26,23.5 20,27 14,23.5 14,16.5' /%3E%3C!-- Box with X at (61, 20) --%3E%3Crect x='55' y='14' width='12' height='12' /%3E%3Cline x1='55' y1='14' x2='67' y2='26' /%3E%3Cline x1='67' y1='14' x2='55' y2='26' /%3E%3C!-- Ground symbol at (102, 20) --%3E%3Cline x1='102' y1='13' x2='102' y2='21' /%3E%3Cline x1='96' y1='21' x2='108' y2='21' /%3E%3Cline x1='98' y1='24' x2='106' y2='24' /%3E%3Cline x1='100' y1='27' x2='104' y2='27' /%3E%3C!-- Diode / Arrow at (143, 20) --%3E%3Cline x1='136' y1='20' x2='150' y2='20' /%3E%3Cpolygon points='140,16 140,24 146,20' fill='%231C1C1E' /%3E%3Cline x1='146' y1='16' x2='146' y2='24' /%3E%3C!-- Alternate Row --%3E%3C!-- Ground at (20, 61) --%3E%3Cline x1='20' y1='54' x2='20' y2='62' /%3E%3Cline x1='14' y1='62' x2='26' y2='62' /%3E%3Cline x1='16' y1='65' x2='24' y2='65' /%3E%3C!-- Circle search at (61, 61) --%3E%3Ccircle cx='61' cy='61' r='5' /%3E%3Cline x1='64.5' y1='64.5' x2='68' y2='68' /%3E%3C!-- Hexagon at (102, 61) --%3E%3Cpolygon points='102,54 108,57.5 108,64.5 102,68 96,64.5 96,57.5' /%3E%3C!-- Box with X at (143, 61) --%3E%3Crect x='137' y='55' width='12' height='12' /%3E%3Cline x1='137' y1='55' x2='149' y2='67' /%3E%3Cline x1='149' y1='55' x2='137' y2='67' /%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "164px 82px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full px-2 sm:px-4 md:px-8 text-center flex flex-col items-center justify-center">
          {/* Capital letters, ultra-heavy extended geometric wordmark */}
          <span
            className="block w-full font-wordmark-heavy uppercase leading-[0.82] text-[clamp(3.8rem,16.5vw,22rem)] text-charcoal hover:text-orange transition-colors duration-500 tracking-[-0.03em]"
            style={{
              fontFeatureSettings: '"salt" on, "ss01" on',
            }}
            aria-label={brandContent.name}
          >
            DREAMZ
          </span>

          {/* Clean centered monospace copyright matching the reference */}
          <div className="mt-8 md:mt-12 text-[11px] md:text-[13px] font-mono-tight tracking-[0.08em] text-charcoal/70">
            © {currentYear} {brandContent.legalName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

