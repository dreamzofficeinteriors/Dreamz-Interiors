import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TransitionLink } from "@/components/PageTransition";
import Image from "next/image";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import Button from "@/components/Button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { projectsData } from "@/content/projects";
import { constructMetadata } from "@/lib/seo";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: `${project.categoryLabel} deployment in ${project.location}. ${project.brief.overview}`,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_SITE_URL || "https://dreamzworkspaces.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://dreamzworkspaces.com"}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://dreamzworkspaces.com"}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pt-24 md:pt-32">
        {/* Header Section */}
        <Section surface="paper" className="pt-8 md:pt-16 pb-12">
          <Container>
            <div className="max-w-4xl space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <TransitionLink
                  href="/projects"
                  className="text-xs font-mono text-charcoal/60 hover:text-orange transition-colors"
                >
                  ← Back to Projects
                </TransitionLink>
                <span className="text-charcoal/30">/</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-[2px] border border-orange/20">
                  {project.categoryLabel}
                </span>
                <span className="text-xs font-mono text-charcoal/70">
                  {project.location}
                </span>
              </div>

              <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
                {project.title}
              </RevealTitle>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-charcoal/75">
                <div>
                  <span className="text-charcoal/50 block font-mono text-[11px] uppercase tracking-wider">
                    Client Profile
                  </span>
                  <span className="font-semibold text-charcoal">{project.clientType}</span>
                </div>
                <div className="h-6 w-[1px] bg-charcoal/15 hidden sm:block" />
                <div>
                  <span className="text-charcoal/50 block font-mono text-[11px] uppercase tracking-wider">
                    Location
                  </span>
                  <span className="font-semibold text-charcoal">{project.location}</span>
                </div>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-charcoal/15 py-8 bg-stone/40 px-6 sm:px-8 rounded-[2px]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-heading text-3xl sm:text-4xl font-bold text-charcoal block tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-charcoal/70 block">
                    {metric.label}
                  </span>
                  {metric.confirmFlag && (
                    <span className="text-[10px] font-mono text-charcoal/40 block">
                      {metric.confirmFlag}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="mt-12 relative aspect-[16/9] w-full rounded-[2px] overflow-hidden bg-stone border border-charcoal/15">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </Section>

        {/* Brief & Challenge */}
        <Section surface="stone">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Brief */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  01. The Brief
                </span>
                <RevealTitle as="h2" className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                  Space purpose & constraints.
                </RevealTitle>
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                  {project.brief.overview}
                </p>

                <div className="space-y-2 bg-paper border border-charcoal/10 p-5 rounded-[2px] text-xs">
                  <div className="flex justify-between border-b border-charcoal/10 pb-2">
                    <span className="text-charcoal/60">Floor Space:</span>
                    <span className="font-semibold text-charcoal">{project.brief.spaceDetails}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-charcoal/60">Headcount Scope:</span>
                    <span className="font-semibold text-charcoal">{project.brief.headcountTarget}</span>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  02. The Challenge
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                  Operational hurdles on site.
                </h3>
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                  {project.challenge.summary}
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal/80">
                  {project.challenge.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-orange font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Did & Outcome */}
        <Section surface="paper">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* What We Did */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  03. What Dreamz Did
                </span>
                <RevealTitle as="h2" className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                  Specification, delivery & assembly.
                </RevealTitle>
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                  {project.whatWeDid.summary}
                </p>
                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal/80">
                  {project.whatWeDid.executionPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-orange font-bold text-sm leading-none mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  04. The Outcome
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                  Floor handover & verification.
                </h3>
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                  {project.outcome.summary}
                </p>
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal/80">
                  {project.outcome.keyPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-orange font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Plain warranty reminder */}
                <div className="mt-8 bg-stone/50 border border-charcoal/15 p-5 rounded-[2px] space-y-1">
                  <span className="text-xs uppercase font-semibold text-charcoal/60 tracking-wider">
                    Warranty Status
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal font-medium">
                    {project.warrantyNote}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Turnkey Before/After (if applicable) */}
        {project.turnkeyBeforeAfter && (
          <Section surface="stone">
            <Container>
              <div className="max-w-3xl space-y-4 mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  Turnkey Transformation
                </span>
                <RevealTitle as="h2" className="font-heading text-title-2 font-bold text-charcoal">
                  From bare commercial shell to operational floor.
                </RevealTitle>
              </div>

              <div className="max-w-4xl mx-auto">
                <BeforeAfterSlider
                  beforeImage={project.turnkeyBeforeAfter.beforeImage}
                  afterImage={project.turnkeyBeforeAfter.afterImage}
                  caption={project.turnkeyBeforeAfter.caption}
                />
              </div>
            </Container>
          </Section>
        )}

        {/* Gallery Details */}
        {project.galleryImages.length > 1 && (
          <Section surface="paper">
            <Container>
              <div className="space-y-4 mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  Deployment Documentation
                </span>
                <RevealTitle as="h2" className="font-heading text-title-2 font-bold text-charcoal">
                  Detail photographs.
                </RevealTitle>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.galleryImages.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-stone border border-charcoal/15"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail photo ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* Bottom Case Study CTA */}
        <Section surface="charcoal">
          <Container>
            <div className="max-w-3xl space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                Similar Requirements?
              </span>
              <RevealTitle as="h2" className="text-title-1 font-bold text-paper">
                Discuss your workspace with our team.
              </RevealTitle>
              <p className="text-body-lg text-silver max-w-xl">
                Whether you have an architectural floor plan or an initial headcount target, we take full accountability from brief to finished floor.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact#callback" variant="primary" size="lg">
                  Request a Project Callback
                </Button>
                <Button href="/projects" variant="secondary" size="lg" className="border-paper text-paper hover:bg-paper hover:text-charcoal">
                  See More Case Studies
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
