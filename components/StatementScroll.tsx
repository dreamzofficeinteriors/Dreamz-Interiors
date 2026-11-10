"use client";

import React, { useRef } from "react";
import Container from "@/components/Container";
import { homeContent } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";

interface StatementScrollProps {
  quote?: string;
  leadIn?: string;
  attribution?: string;
  className?: string;
}

export default function StatementScroll({
  quote = homeContent.statement.quote,
  leadIn = homeContent.statement.leadIn,
  attribution = homeContent.statement.attribution,
  className = "",
}: StatementScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const words = quote.split(" ");

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current || typeof window === "undefined") return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wordSpans = textRef.current?.querySelectorAll<HTMLElement>(".statement-word");
        if (!wordSpans || wordSpans.length === 0) return;

        gsap.fromTo(
          wordSpans,
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`py-24 md:py-36 lg:py-44 bg-paper relative overflow-hidden ${className}`}
      aria-label="Brand Philosophy Statement"
    >
      <Container>
        <div className="max-w-5xl">
          {leadIn && (
            <p className="text-xs uppercase tracking-widest font-semibold text-orange mb-6 md:mb-8">
              {leadIn}
            </p>
          )}

          <p
            ref={textRef}
            className="font-heading text-title-1 font-bold tracking-tight text-charcoal leading-[1.1] selection:bg-orange selection:text-white"
          >
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="statement-word inline-block mr-[0.28em] opacity-20"
              >
                {word}
              </span>
            ))}
          </p>

          {attribution && (
            <div className="mt-8 md:mt-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-charcoal/30 inline-block" />
              <p className="text-xs md:text-sm uppercase tracking-wider text-charcoal/60 font-semibold">
                {attribution}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
