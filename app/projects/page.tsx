import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import ProjectsClient from "@/app/projects/ProjectsClient";
import CTABand from "@/components/CTABand";
import { projectsData } from "@/content/projects";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Commercial Projects & Case Studies (200+ Delivered)",
  description:
    "Explore case studies of 200+ commercial furniture, modular workstations, and turnkey workspace deployments delivered across India by Dreamz.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-[2px] border border-orange/20">
                Track Record
              </span>
              <span className="text-xs font-mono text-charcoal/60">
                200+ Workspaces Delivered Pan-India
              </span>
            </div>

            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              Delivered without excuses.
            </RevealTitle>

            <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
              Every case study below details the brief, the operational constraints, what Dreamz specified and delivered, and verifiable floor outcomes.
            </p>
          </div>
        </Container>
      </Section>

      <Section surface="stone">
        <Container>
          <ProjectsClient initialProjects={projectsData} />
        </Container>
      </Section>

      <CTABand />
    </div>
  );
}

