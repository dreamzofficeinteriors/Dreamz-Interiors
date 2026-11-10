"use client";

import React, { useRef } from "react";
import { TransitionLink } from "@/components/PageTransition";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import RevealTitle from "@/components/RevealTitle";
import { CaseStudy } from "@/content/projects";
import { homeContent } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";

interface PinnedHorizontalGalleryProps {
  projects: CaseStudy[];
}

export default function PinnedHorizontalGallery({
  projects,
}: PinnedHorizontalGalleryProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!targetRef.current || !trackRef.current || typeof window === "undefined") return;

      const mm = gsap.matchMedia();

      // Desktop pinned horizontal gallery (1024px and up, no-preference for reduced motion)
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          const container = targetRef.current;
          if (!track || !container) return;

          const getDistance = () => Math.max(track.scrollWidth - window.innerWidth + 120, 1200);

          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${getDistance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Per-card inner parallax
          const images = track.querySelectorAll<HTMLElement>("[data-parallax-img]");
          images.forEach((img) => {
            gsap.fromTo(
              img,
              { xPercent: -10 },
              {
                xPercent: 10,
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  start: "top top",
                  end: () => `+=${getDistance()}`,
                  scrub: 1,
                },
              }
            );
          });

          return () => {
            tween.kill();
          };
        }
      );
    },
    { scope: targetRef }
  );

  return (
    <section
      ref={targetRef}
      className="relative bg-paper py-16 md:py-24 overflow-hidden border-t border-charcoal/10"
      aria-label="Featured projects horizontal gallery"
    >
      {/* Header bar */}
      <Container className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange">
            {homeContent.featuredProjectsHeading.eyebrow}
          </span>
          <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
            {homeContent.featuredProjectsHeading.title}
          </RevealTitle>
          <p className="text-sm md:text-base text-charcoal/75 leading-relaxed">
            {homeContent.featuredProjectsHeading.description}
          </p>
        </div>

        <Button href="/projects" variant="secondary" size="md">
          All 200+ Projects →
        </Button>
      </Container>

      {/* Horizontal Track for Desktop / Vertical Grid for Mobile */}
      <div className="w-full">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-8 lg:px-12 w-full lg:w-max"
        >
          {projects.map((project, idx) => {
            const primaryMetric = project.metrics[0];

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between bg-stone/40 border border-charcoal/15 rounded-[2px] overflow-hidden w-full lg:w-[480px] xl:w-[520px] flex-shrink-0 hover:border-charcoal/40 transition-colors"
              >
                {/* Visual Frame */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone">
                  <div
                    data-parallax-img
                    className="absolute inset-0 h-full w-full scale-110"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal bg-paper/90 backdrop-blur-sm px-2.5 py-1 rounded-[2px] border border-charcoal/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-charcoal/60">
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-charcoal group-hover:text-orange transition-colors">
                      <TransitionLink href={`/projects/${project.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                      </TransitionLink>
                    </h3>

                    <p className="text-sm text-charcoal/75 line-clamp-2 leading-relaxed">
                      {project.brief.overview}
                    </p>
                  </div>

                  {/* Metrics bar */}
                  {primaryMetric && (
                    <div className="border-t border-charcoal/10 pt-4 flex items-baseline justify-between">
                      <div>
                        <span className="block font-heading text-2xl font-bold text-charcoal tracking-tight">
                          {primaryMetric.value}
                        </span>
                        <span className="text-xs text-charcoal/65">
                          {primaryMetric.label}
                        </span>
                      </div>
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider text-charcoal group-hover:text-orange flex items-center gap-1 transition-colors">
                        Case Study →
                      </span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}

          {/* End CTA Card on the track */}
          <div className="hidden lg:flex flex-col justify-between bg-charcoal text-paper p-8 rounded-[2px] w-[360px] flex-shrink-0 border border-charcoal/30">
            <div className="space-y-4">
              <span className="text-xs font-mono text-orange uppercase tracking-wider font-semibold">
                Pan-India Reach
              </span>
              <h3 className="font-heading text-2xl font-bold text-paper">
                200+ Projects Completed Across India
              </h3>
              <p className="text-xs text-silver leading-relaxed">
                From tech campuses in Bengaluru to commercial spec suites in Mumbai.
              </p>
            </div>
            <div className="pt-6">
              <Button href="/projects" variant="primary" size="md" className="w-full text-center">
                Browse All Case Studies →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
