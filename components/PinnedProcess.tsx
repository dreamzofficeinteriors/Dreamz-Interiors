"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import { processContent } from "@/content/process";
import { homeContent } from "@/content/home";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function PinnedProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = processContent.steps;

  useGSAP(
    () => {
      if (!containerRef.current || !cardsWrapperRef.current || typeof window === "undefined") return;

      const mm = gsap.matchMedia();

      // Desktop pinned steps swapping on scroll (1024px and up)
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stepCards = cardsWrapperRef.current?.querySelectorAll<HTMLElement>(".pinned-step-card");
          if (!stepCards || stepCards.length === 0) return;

          const totalSteps = stepCards.length;
          const scrollDistance = totalSteps * 700;

          // Set all cards except first to opacity 0, y: 40
          stepCards.forEach((card, i) => {
            if (i !== 0) {
              gsap.set(card, { opacity: 0, y: 40, pointerEvents: "none" });
            } else {
              gsap.set(card, { opacity: 1, y: 0, pointerEvents: "auto" });
            }
          });

          const st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              const progress = self.progress;
              const newIndex = Math.min(
                Math.floor(progress * totalSteps),
                totalSteps - 1
              );
              setActiveStepIndex(newIndex);

              // Cross-fade the cards
              stepCards.forEach((card, i) => {
                if (i === newIndex) {
                  gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    overwrite: "auto",
                  });
                } else {
                  gsap.to(card, {
                    opacity: 0,
                    y: i < newIndex ? -30 : 30,
                    duration: 0.3,
                    overwrite: "auto",
                  });
                }
              });
            },
          });

          return () => {
            st.kill();
          };
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-charcoal text-paper py-20 md:py-28 relative overflow-hidden min-h-screen flex flex-col justify-center"
      aria-label="The 5-step delivery process"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Fixed Stage Context */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              {homeContent.processHeading.eyebrow}
            </span>

            <RevealTitle as="h2" className="text-title-2 font-bold text-paper">
              {homeContent.processHeading.title}
            </RevealTitle>

            <p className="text-body-lg text-silver max-w-md leading-relaxed">
              {homeContent.processHeading.description}
            </p>

            {/* Desktop Step Nav Indicator */}
            <div className="hidden lg:flex flex-col space-y-2 pt-4 border-t border-paper/10">
              {steps.map((s, idx) => (
                <div
                  key={s.stepNumber}
                  className={`flex items-center gap-3 text-xs font-mono transition-colors duration-200 ${
                    idx === activeStepIndex
                      ? "text-orange font-bold font-heading text-sm"
                      : "text-silver/50"
                  }`}
                >
                  <span className="w-5">{s.stepNumber}</span>
                  <span className="font-heading tracking-tight">{s.name}</span>
                  {idx === activeStepIndex && (
                    <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse ml-auto" />
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-orange hover:underline"
              >
                <span>Full Process Specifications</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Step Cards Swapper (Desktop stack, Mobile vertical flow) */}
          <div
            ref={cardsWrapperRef}
            className="lg:col-span-7 relative min-h-[460px] flex items-center"
          >
            {steps.map((step, index) => (
              <div
                key={step.stepNumber}
                className="pinned-step-card lg:absolute lg:inset-0 bg-paper/5 border border-paper/15 rounded-[2px] p-6 sm:p-8 space-y-6 flex flex-col justify-between w-full mb-6 lg:mb-0"
              >
                <div className="flex items-center justify-between border-b border-paper/10 pb-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-orange">
                      {step.stepNumber}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-paper">
                      {step.name}
                    </h3>
                  </div>
                  <span className="text-xs text-silver/60 font-mono hidden sm:inline-block">
                    Step {index + 1} of {steps.length}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading text-base sm:text-lg font-bold text-paper">
                    {step.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-silver leading-relaxed">
                    {step.shortSummary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-charcoal/70 p-4 rounded-[2px] border border-paper/10 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-orange block">
                      What Dreamz Handles
                    </span>
                    <ul className="space-y-1.5 text-xs text-silver">
                      {step.whatDreamzHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-charcoal/50 p-4 rounded-[2px] border border-paper/10 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-silver/60 block">
                      What You Avoid
                    </span>
                    <ul className="space-y-1.5 text-xs text-silver/80">
                      {step.whatTheClientAvoids.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-silver/40">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {step.stepNumber === "05" && (
                  <p className="text-[11px] text-silver/60 font-mono border-t border-paper/10 pt-2">
                    Direct 1-year warranty coverage. Water and fire damage not covered.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
