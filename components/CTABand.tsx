import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { homeContent } from "@/content/home";
import { contactContent } from "@/content/contact";
import RevealTitle from "@/components/RevealTitle";

interface CTABandProps {
  className?: string;
  headline?: string;
  subline?: string;
}

export default function CTABand({
  className = "",
  headline = homeContent.ctaBand.headline,
  subline = homeContent.ctaBand.subline,
}: CTABandProps) {
  return (
    <section
      className={`py-20 md:py-32 bg-charcoal text-paper relative overflow-hidden border-t border-charcoal/30 ${className}`}
      aria-label="Contact and project consultation"
    >
      <Container>
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange">
            {homeContent.ctaBand.eyebrow}
          </span>

          <RevealTitle as="h2" className="text-title-1 font-bold text-paper">
            {headline}
          </RevealTitle>

          <p className="text-body-lg text-silver max-w-2xl leading-relaxed">
            {subline}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <Button
              href="/contact#callback"
              variant="primary"
              size="lg"
            >
              {homeContent.ctaBand.primaryCta.label}
            </Button>

            <WhatsAppButton
              size="lg"
              variant="whatsapp"
              label={homeContent.ctaBand.whatsappCta.label}
            />

            <CallButton
              variant="ghost"
              size="lg"
              className="text-silver hover:text-paper"
            />
          </div>

          <p className="text-xs text-silver/60 pt-4">
            {contactContent.phone.aiNotice}
          </p>
        </div>
      </Container>
    </section>
  );
}
