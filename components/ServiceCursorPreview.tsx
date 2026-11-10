"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SolutionSummaryItem } from "@/content/home";
import { gsap } from "@/lib/gsap";

interface ServiceCursorPreviewProps {
  solutions: SolutionSummaryItem[];
}

export default function ServiceCursorPreview({
  solutions,
}: ServiceCursorPreviewProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isFinePointer = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    isFinePointer.current = window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX + 24,
        y: e.clientY - 90,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Floating Image Follower for Desktop */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-40 hidden lg:block overflow-hidden rounded-[2px] border border-charcoal/20 bg-stone shadow-2xl transition-opacity duration-300 w-64 h-40 ${
          activeImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Service Preview"
            fill
            sizes="256px"
            className="object-cover"
          />
        )}
      </div>

      {/* Services List Table / Rows */}
      <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
        {solutions.map((sol, index) => (
          <Link
            key={sol.id}
            href={sol.href}
            onMouseEnter={() => setActiveImage(sol.image)}
            onMouseLeave={() => setActiveImage(null)}
            className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6 transition-colors hover:bg-stone/30 px-4 sm:px-6 rounded-[2px]"
          >
            <div className="flex items-baseline gap-6 max-w-xl">
              <span className="font-mono text-xs font-bold text-orange">
                0{index + 1}
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-charcoal group-hover:text-orange transition-colors">
                    {sol.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-charcoal/50 bg-paper px-2 py-0.5 rounded-[2px] border border-charcoal/10">
                    {sol.tag}
                  </span>
                </div>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  {sol.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-heading font-semibold uppercase tracking-wider text-charcoal group-hover:text-orange transition-colors self-end md:self-auto">
              <span>View Specifications</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

