import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import CallbackForm from "@/components/CallbackForm";
import Button from "@/components/Button";
import { contactContent } from "@/content/contact";
import { brandContent } from "@/content/brand";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Dreamz — Start Your Workspace Project",
  description:
    "Contact Dreamz for commercial furniture, modular desks, or turnkey fit-outs across India. AI-assisted phone line, WhatsApp, or request a callback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* 1. Header */}
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Start The Conversation
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              Tell us the brief. We&apos;ll take it from here.
            </RevealTitle>
            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              Connect with our team through whichever channel is fastest for you: speak to our AI voice assistant, chat on WhatsApp, or request a structured callback.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Contact Channels & Callback Form */}
      <Section surface="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Reach Options */}
            <div className="lg:col-span-5 space-y-8">
              {/* Phone Line with AI note */}
              <div className="bg-paper border border-charcoal/15 p-6 sm:p-8 rounded-[2px] space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-orange block">
                  AI-Assisted Phone Line (24/7)
                </span>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-charcoal font-mono">
                  {contactContent.phone.display}
                </p>
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {contactContent.phone.description}
                </p>
                <p className="text-[11px] text-charcoal/50 leading-normal border-t border-charcoal/10 pt-3">
                  {contactContent.phone.aiNotice}
                </p>
                <div className="pt-2">
                  <Button
                    href={`tel:${contactContent.phone.e164}`}
                    variant="primary"
                    size="md"
                    className="w-full text-center"
                  >
                    Call Phone Line
                  </Button>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="bg-paper border border-charcoal/15 p-6 sm:p-8 rounded-[2px] space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#25D366] block">
                  Direct WhatsApp Chat
                </span>
                <h3 className="font-heading text-2xl font-bold text-charcoal">
                  Message Our Project Lead
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  Send your drawings, floor requirements, or initial questions directly over WhatsApp for rapid consultation.
                </p>
                <div className="pt-2">
                  <Button
                    href={contactContent.whatsapp.link}
                    isExternal
                    variant="secondary"
                    size="md"
                    className="w-full text-center border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-charcoal"
                  >
                    Start WhatsApp Chat →
                  </Button>
                </div>
              </div>

              {/* Corporate Inquiries & Hours */}
              <div className="bg-paper/70 border border-charcoal/10 p-6 rounded-[2px] space-y-4 text-xs text-charcoal/80">
                <div className="space-y-1">
                  <span className="font-semibold text-charcoal uppercase tracking-wider text-[11px] block">
                    Operating Hours
                  </span>
                  <p>{contactContent.hours.days}: {contactContent.hours.timeWindow}</p>
                  <p className="text-charcoal/60">{contactContent.hours.aiAvailability}</p>
                </div>

                <div className="space-y-1 border-t border-charcoal/10 pt-3">
                  <span className="font-semibold text-charcoal uppercase tracking-wider text-[11px] block">
                    Pan-India Registered Office
                  </span>
                  {contactContent.office.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <p>{contactContent.office.cityStateZip}, {contactContent.office.country}</p>
                </div>

                <div className="space-y-1 border-t border-charcoal/10 pt-3">
                  <span className="font-semibold text-charcoal uppercase tracking-wider text-[11px] block">
                    Warranty Reference
                  </span>
                  <p>{brandContent.warranty.statement}</p>
                  <p className="text-orange font-medium">{brandContent.warranty.exclusions}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Callback Form */}
            <div className="lg:col-span-7">
              <CallbackForm className="bg-paper shadow-sm" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

