import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import Button from "@/components/Button";
import CallbackForm from "@/components/CallbackForm";
import CTABand from "@/components/CTABand";
import { solutionsData } from "@/content/solutions";
import { projectsData } from "@/content/projects";
import { constructMetadata } from "@/lib/seo";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionsData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return {};

  return constructMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const relatedProject = projectsData.find((p) => p.slug === solution.relatedProjectSlug);

  return (
    <div className="pt-24 md:pt-32">
      {/* 1. Header */}
      <Section surface="paper" className="pt-8 md:pt-16 pb-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-[2px] border border-orange/20">
                {solution.badge}
              </span>
              <span className="text-xs font-mono text-charcoal/50">
                Pan-India Delivery & Assembly
              </span>
            </div>

            <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
              {solution.title}
            </RevealTitle>

            <p className="text-body-lg text-charcoal/85 max-w-2xl leading-relaxed">
              {solution.tagline}
            </p>

            <p className="text-sm md:text-base text-charcoal/75 max-w-3xl leading-relaxed">
              {solution.heroSummary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#quote-form" variant="primary" size="lg">
                Request Specifications & Quote
              </Button>
              <Button href="/projects" variant="secondary" size="lg">
                View Related Deployments
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. What it is & Who it's for */}
      <Section surface="stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* What it is */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                Scope Definition
              </span>
              <RevealTitle as="h2" className="font-heading text-title-2 font-bold text-charcoal">
                What it is.
              </RevealTitle>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed pt-2">
                {solution.whatItIs}
              </p>

              {/* Typical Timeline box */}
              <div className="mt-8 bg-paper border border-charcoal/15 p-6 rounded-[2px] space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal/50">
                  Typical Lead Timeline
                </span>
                <p className="font-heading text-2xl font-bold text-charcoal">
                  {solution.typicalTimeline.range}
                </p>
                <p className="text-xs text-charcoal/70">
                  {solution.typicalTimeline.note}
                </p>
                <p className="text-[10px] font-mono text-charcoal/40 pt-1">
                  {solution.typicalTimeline.confirmFlag}
                </p>
              </div>
            </div>

            {/* Who it's for */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                Target Environments
              </span>
              <h3 className="font-heading text-2xl font-bold text-charcoal">
                {solution.whoItsFor.headline}
              </h3>

              <div className="space-y-4 pt-2">
                {solution.whoItsFor.audiences.map((aud) => (
                  <div
                    key={aud.title}
                    className="bg-paper border border-charcoal/10 p-6 rounded-[2px] space-y-2"
                  >
                    <h4 className="font-heading text-lg font-bold text-charcoal">
                      {aud.title}
                    </h4>
                    <p className="text-sm text-charcoal/75 leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. What's Included */}
      <Section surface="paper">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Deliverables Matrix
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
              What is included in this scope.
            </RevealTitle>
            <p className="text-xs font-mono text-charcoal/40">
              {solution.whatsIncluded.confirmFlag}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {solution.whatsIncluded.categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-stone/40 border border-charcoal/10 p-6 sm:p-8 rounded-[2px] space-y-4"
              >
                <h3 className="font-heading text-xl font-bold text-charcoal border-b border-charcoal/10 pb-3">
                  {cat.name}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-charcoal/80">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-orange font-bold text-sm leading-none mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. How It Works (Step-by-step) */}
      <Section surface="charcoal">
        <Container>
          <div className="max-w-3xl space-y-4 mb-12 md:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Execution Architecture
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-paper">
              How the deployment progresses.
            </RevealTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-paper/10 pt-10">
            {solution.howItWorks.map((step) => (
              <div key={step.stepNumber} className="space-y-3">
                <span className="font-mono text-xs font-bold text-orange">
                  {step.stepNumber}
                </span>
                <h3 className="font-heading text-lg font-bold text-paper tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-silver leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Related Project Highlight */}
      {relatedProject && (
        <Section surface="stone">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                  Proven Execution
                </span>
                <RevealTitle as="h2" className="font-heading text-title-2 font-bold text-charcoal">
                  Related Project Deployment
                </RevealTitle>
              </div>
              <Button href={`/projects/${relatedProject.slug}`} variant="secondary" size="md">
                Read Full Case Study →
              </Button>
            </div>

            <div className="bg-paper border border-charcoal/10 rounded-[2px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] w-full bg-stone">
                <Image
                  src={relatedProject.heroImage}
                  alt={relatedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-6 lg:p-8 space-y-4">
                <span className="text-xs font-mono text-charcoal/60">
                  {relatedProject.location}
                </span>
                <h3 className="font-heading text-2xl font-bold text-charcoal">
                  {relatedProject.title}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  {relatedProject.brief.overview}
                </p>
                <div className="pt-2 border-t border-charcoal/10 flex items-baseline gap-4">
                  {relatedProject.metrics[0] && (
                    <div>
                      <span className="font-heading text-3xl font-bold text-charcoal block">
                        {relatedProject.metrics[0].value}
                      </span>
                      <span className="text-xs text-charcoal/60">
                        {relatedProject.metrics[0].label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Form Quote Section */}
      <Section surface="paper" id="quote-form">
        <Container>
          <div className="max-w-3xl mx-auto">
            <CallbackForm
              defaultProjectType={solution.id as any}
              className="shadow-sm"
            />
          </div>
        </Container>
      </Section>

      <CTABand />
    </div>
  );
}
