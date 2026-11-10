import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import BridgeSection from "@/components/BridgeSection";
import Button from "@/components/Button";
import ClipImage from "@/components/ClipImage";
import StatBar from "@/components/StatBar";
import StatementScroll from "@/components/StatementScroll";
import SolutionCard from "@/components/SolutionCard";
import PinnedHorizontalGallery from "@/components/PinnedHorizontalGallery";
import PinnedProcess from "@/components/PinnedProcess";
import CommitmentList from "@/components/CommitmentList";
import CTABand from "@/components/CTABand";
import { homeContent } from "@/content/home";
import { projectsData } from "@/content/projects";
import { brandContent } from "@/content/brand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-end pt-32 pb-16 md:pb-24 bg-paper overflow-hidden">
        <Container className="relative z-10 w-full">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-charcoal/70">
                {brandContent.descriptor}
              </span>
            </div>

            <RevealTitle
              as="h1"
              className="text-display font-extrabold tracking-tight text-charcoal"
            >
              {homeContent.hero.headline}
            </RevealTitle>

            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              {homeContent.hero.subline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href={homeContent.hero.primaryCta.href} variant="primary" size="lg">
                {homeContent.hero.primaryCta.label}
              </Button>
              <Button href={homeContent.hero.secondaryCta.href} variant="secondary" size="lg">
                {homeContent.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Hero Visual Staging with scrubbed ClipImage reveal */}
          <div className="mt-12 md:mt-16 relative w-full rounded-[2px] overflow-hidden border border-charcoal/15 bg-stone shadow-sm">
            <ClipImage
              src="/placeholders/hero-poster.jpg"
              alt="Dreamz Commercial Workspace Overview"
              priority
              aspectRatio="aspect-[16/9]"
              sizes="100vw"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span className="text-[11px] font-mono text-paper bg-charcoal/80 px-2.5 py-1 rounded-[2px] backdrop-blur-sm">
                Pan-India Workspace Deployments
              </span>
              <span className="text-[11px] font-mono text-paper/80 bg-charcoal/60 px-2 py-1 rounded-[2px] backdrop-blur-sm hidden sm:inline-block">
                Brief to Handover
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Proof Bar (StatBar) with Count-Up */}
      <StatBar />

      {/* 4. Statement (StatementScroll) with Word Scrubbing */}
      <StatementScroll />

      {/* 5. Section Bridge: Narrative shift into Solutions */}
      <BridgeSection
        src="/placeholders/solution-commercial.jpg"
        alt="Commercial workspace environment executed by Dreamz"
      >
        <div className="max-w-2xl text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange">
            Single Point of Responsibility
          </span>
          <h2 className="text-title-1 font-bold text-paper tracking-tight">
            We don&apos;t hand over furniture. We hand over a workspace that works.
          </h2>
          <p className="text-body-lg text-silver leading-relaxed">
            Specification, sourcing, delivery and assembly across India under one single point of contact.
          </p>
        </div>
      </BridgeSection>

      {/* 6. Solutions Section */}
      <Section surface="stone" id="solutions">
        <Container>
          <div className="max-w-2xl space-y-4 mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Core Capabilities
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
              Three solution lines. One accountable partner.
            </RevealTitle>
            <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
              We specify, source, deliver and assemble commercial furniture, modular desks, and turnkey fit-outs without passing responsibility to subcontractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeContent.solutions.map((solution, idx) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                priority={idx === 0}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Featured Projects Pinned Horizontal Gallery */}
      <PinnedHorizontalGallery projects={projectsData} />

      {/* 7. Process Overview with Step Pinning and Swapping */}
      <PinnedProcess />

      {/* 8. Commitments */}
      <CommitmentList />

      {/* 9. Who We Work With */}
      <Section surface="paper" id="clients">
        <Container>
          <div className="max-w-2xl space-y-4 mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              {homeContent.audience.eyebrow}
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
              {homeContent.audience.title}
            </RevealTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeContent.audience.groups.map((group) => (
              <div
                key={group.title}
                className="bg-stone/40 border border-charcoal/10 rounded-[2px] p-6 sm:p-8 space-y-5"
              >
                <h3 className="font-heading text-xl font-bold tracking-tight text-charcoal">
                  {group.title}
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  {group.description}
                </p>
                <div className="border-t border-charcoal/10 pt-4 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-charcoal/50">
                    What we handle:
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal/80">
                    {group.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-charcoal/50 font-mono">
              {homeContent.audience.note}
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. CTA Band */}
      <CTABand />
    </>
  );
}
