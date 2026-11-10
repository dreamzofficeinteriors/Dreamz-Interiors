"use client";

import React, { useRef } from "react";
import { homeContent, StatItem } from "@/content/home";
import Container from "@/components/Container";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface StatBarProps {
  stats?: StatItem[];
  className?: string;
}

export default function StatBar({
  stats = homeContent.statBar,
  className = "",
}: StatBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || typeof window === "undefined") return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counters = containerRef.current?.querySelectorAll<HTMLElement>("[data-counter-target]");
        if (!counters || counters.length === 0) return;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 88%",
          once: true,
          onEnter: () => {
            counters.forEach((el) => {
              const target = parseFloat(el.getAttribute("data-counter-target") || "0");
              const suffix = el.getAttribute("data-counter-suffix") || "";
              if (!isNaN(target) && target > 0) {
                const countObj = { val: 0 };
                gsap.to(countObj, {
                  val: target,
                  duration: 1.6,
                  ease: "power2.out",
                  onUpdate: () => {
                    el.innerText = `${Math.floor(countObj.val)}${suffix}`;
                  },
                });
              }
            });
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`border-y border-charcoal/15 bg-stone/40 py-10 md:py-14 ${className}`}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/10">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`space-y-1.5 ${
                idx > 1 ? "pt-6 lg:pt-0" : ""
              } ${idx > 0 ? "lg:pl-8" : ""}`}
            >
              <div className="flex items-baseline gap-1">
                <span
                  data-counter-target={stat.numericValue || undefined}
                  data-counter-suffix={stat.suffix || ""}
                  className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal"
                >
                  {stat.value}
                </span>
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-charcoal tracking-tight">
                {stat.label}
              </h3>
              <p className="text-xs text-charcoal/70 leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
