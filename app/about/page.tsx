import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import BridgeSection from "@/components/BridgeSection";
import StatBar from "@/components/StatBar";
import CTABand from "@/components/CTABand";
import { aboutContent } from "@/content/about";
import { brandContent } from "@/content/brand";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us — Your Vision, Our Responsibility",
  description:
    "Learn about Dreamz: 200+ commercial projects delivered across India. Accountable partner for commercial furniture, modular desks, and turnkey fit-outs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* 1. Hero */}
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              {aboutContent.hero.eyebrow}
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              {aboutContent.hero.headline}
            </RevealTitle>
            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              {aboutContent.hero.subline}
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. StatBar Proof */}
      <StatBar />

      {/* 3. Story & Operating Reality */}
      <Section surface="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                {aboutContent.story.eyebrow}
              </span>
              <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
                {aboutContent.story.title}
              </RevealTitle>
              <div className="pt-4 border-l-2 border-orange pl-4">
                <p className="font-heading text-lg font-bold text-charcoal">
                  {brandContent.operatingModel.manufacturingStatement}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-charcoal/85 leading-relaxed">
              {aboutContent.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="text-xs font-mono text-charcoal/40 pt-2">
                {aboutContent.story.confirmFlag}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Section Bridge into Execution & Principles */}
      <BridgeSection
        src="/placeholders/project-03.jpg"
        alt="Dreamz Commercial Workspace Execution"
      >
        <div className="max-w-2xl text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange">
            The Thoughtful Authority
          </span>
          <h2 className="text-title-1 font-bold text-paper tracking-tight">
            Built on conviction. Delivered with accountability.
          </h2>
          <p className="text-body-lg text-silver leading-relaxed">
            We don&apos;t just coordinate contractors. We take complete ownership from brief to handover across 200+ commercial projects.
          </p>
        </div>
      </BridgeSection>

      {/* 5. Five Pillars of Execution */}
      <Section surface="paper">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              How We Deliver
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
              The five pillars of workspace accountability.
            </RevealTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-charcoal/10 pt-10">
            {aboutContent.operatingPillars.map((pillar, idx) => (
              <div key={pillar.title} className="space-y-3">
                <span className="font-mono text-xs font-bold text-orange">
                  0{idx + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-charcoal tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Six Principles (The Thoughtful Authority) */}
      <Section surface="charcoal">
        <Container>
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Brand Principles
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-paper">
              How The Thoughtful Authority thinks and acts.
            </RevealTitle>
            <p className="text-sm md:text-base text-silver leading-relaxed">
              Six deliberate commitments written as real operating behaviors, not corporate buzzwords.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aboutContent.principles.map((p) => (
              <div
                key={p.trait}
                className="bg-paper/5 border border-paper/10 rounded-[2px] p-6 sm:p-8 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-orange tracking-tight">
                    {p.trait}
                  </h3>
                </div>
                <p className="font-heading text-sm font-semibold text-paper tracking-tight">
                  {p.statement}
                </p>
                <p className="text-xs text-silver leading-relaxed pt-2 border-t border-paper/10">
                  {p.application}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. CTA Band */}
      <CTABand />
    </div>
  );
}

