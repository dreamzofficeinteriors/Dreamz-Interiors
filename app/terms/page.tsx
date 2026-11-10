import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import { brandContent } from "@/content/brand";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms and conditions of website use and procurement overview for Dreamz Interiors.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section surface="paper">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Legal Disclosures
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              Terms of Service
            </RevealTitle>
            <p className="text-sm text-charcoal/60 font-mono">
              Last updated: March 2026 • {brandContent.legalName}
            </p>

            <div className="space-y-6 pt-6 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/15">
              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">1. Scope of Services</RevealTitle>
                <p>
                  {brandContent.operatingModel.manufacturingStatement} All deliverables, product specifications, lead times, and financial commitments are governed exclusively by formal written proposals and contracts executed directly with {brandContent.legalName}.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">2. Delivery & Schedules</RevealTitle>
                <p>
                  Delivery and installation dates represent planned milestones coordinated with building management, freight elevator reservations, and site readiness. Dreamz does not provide unconditional delivery guarantees.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">3. Warranty & Exclusions</RevealTitle>
                <p>
                  All commercial furniture and assembly delivered by Dreamz carries a 1-year direct warranty against mechanical and manufacturing defects under normal commercial usage conditions. Water damage and fire damage are strictly excluded from warranty coverage.
                </p>
              </section>

              <section className="space-y-3">
                <RevealTitle as="h2" className="font-heading text-xl font-bold text-charcoal">4. Intellectual Property</RevealTitle>
                <p>
                  All trademarks, branding marks, design documents, and case study documentation displayed on this website are the property of {brandContent.legalName} or reproduced with client consent.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

