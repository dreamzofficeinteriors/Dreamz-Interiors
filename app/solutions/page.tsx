import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import SolutionCard from "@/components/SolutionCard";
import CommitmentList from "@/components/CommitmentList";
import CTABand from "@/components/CTABand";
import { homeContent } from "@/content/home";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Commercial Workspace Solutions",
  description:
    "Explore Dreamz's 3 core solution lines: Commercial Furniture, Modular Systems, and Turnkey Handover. Planned, delivered, and assembled across India.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Solution Architecture
            </span>
            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              Workspaces engineered for longevity and uptime.
            </RevealTitle>
            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              We specify, source, deliver and assemble three distinct solution lines across India. Every deployment is managed under single-point accountability.
            </p>
          </div>
        </Container>
      </Section>

      <Section surface="stone">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeContent.solutions.map((sol, idx) => (
              <SolutionCard key={sol.id} solution={sol} priority={idx === 0} />
            ))}
          </div>
        </Container>
      </Section>

      <CommitmentList />
      <CTABand />
    </div>
  );
}

