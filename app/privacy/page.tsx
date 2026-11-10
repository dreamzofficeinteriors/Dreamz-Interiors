import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import { brandContent } from "@/content/brand";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and data protection commitments for Dreamz website visitors and client inquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section surface="paper">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Legal Disclosures
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              Privacy Policy
            </RevealTitle>
            <p className="text-sm text-charcoal/60 font-mono">
              Last updated: March 2026 • {brandContent.legalName}
            </p>

            <div className="space-y-6 pt-6 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/15">
              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">1. Information We Collect</RevealTitle>
                <p>
                  When you submit an inquiry through our callback form or initiate contact via telephone or WhatsApp, we collect information necessary to respond to your project request. This includes your name, corporate email address, telephone number, organization name, project location, and spatial requirements.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">2. AI Voice Line & Call Recording</RevealTitle>
                <p>
                  Calls made to our primary phone number are answered by an AI voice coordinator designed to record specification details accurately. Calls may be recorded and transcribed for quality assurance and handover to our project management team [CONFIRM: recording and consent wording with the business].
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">3. How Your Data Is Used</RevealTitle>
                <p>
                  We use your contact and project data solely to evaluate your requirements, provide architectural furniture specifications, prepare BOQs, and follow up regarding scheduled site consultations. We do not sell or rent your information to third-party marketers.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">4. Data Security</RevealTitle>
                <p>
                  We maintain appropriate technical and administrative safeguards to protect your personal information against unauthorized access, disclosure, or misuse.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">5. Contact Information</RevealTitle>
                <p>
                  For questions concerning this Privacy Policy or your stored information, please reach out to us at contact@dreamzworkspaces.com [CONFIRM].
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

