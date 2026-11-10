import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import CommitmentList from "@/components/CommitmentList";
import CTABand from "@/components/CTABand";
import { processContent } from "@/content/process";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Our 5-Step Process — What Dreamz Handles",
  description:
    "Explore our structured 5-step delivery pipeline: Brief, Plan & Spec, Source & Deliver, Assemble & Handover, Support. 1-year warranty.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* 1. Header */}
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              {processContent.eyebrow}
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              {processContent.title}
            </RevealTitle>
            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              {processContent.subline}
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Deep 5-Step Breakdown */}
      <Section surface="stone">
        <Container>
          <div className="space-y-12">
            {processContent.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-paper border border-charcoal/10 rounded-[2px] p-8 md:p-12 space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-charcoal/10 pb-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-orange">
                      {step.stepNumber}
                    </span>
                    <RevealTitle as="h2" className="font-heading text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                      {step.name}
                    </RevealTitle>
                  </div>
                  <span className="text-xs sm:text-sm text-charcoal/60 font-medium">
                    {step.shortSummary}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {step.headline}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                  {/* What Dreamz Handles */}
                  <div className="space-y-3 bg-stone/40 p-6 rounded-[2px] border border-charcoal/10">
                    <span className="text-xs uppercase tracking-wider font-semibold text-orange block">
                      What Dreamz Handles
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-charcoal/80">
                      {step.whatDreamzHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What The Client Avoids */}
                  <div className="space-y-3 bg-paper p-6 rounded-[2px] border border-charcoal/10">
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal/50 block">
                      What You Avoid
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-charcoal/70">
                      {step.whatTheClientAvoids.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-charcoal/40 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concrete Deliverables */}
                  <div className="space-y-3 bg-paper p-6 rounded-[2px] border border-charcoal/10">
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-charcoal/85">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange font-bold text-xs">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Commitments */}
      <CommitmentList />

      {/* 4. CTA Band */}
      <CTABand />
    </div>
  );
}

