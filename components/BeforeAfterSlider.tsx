"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before workspace fit-out",
  afterAlt = "After Dreamz workspace handover",
  caption,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        ref={containerRef}
        role="region"
        aria-label="Interactive before and after comparison slider"
        className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-stone border border-charcoal/15 select-none cursor-ew-resize"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Background: After Image (Full width) */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-white bg-charcoal/80 backdrop-blur-sm px-2.5 py-1 rounded-[2px]">
              After Handover
            </span>
          </div>
        </div>

        {/* Foreground: Before Image (Clipped by sliderPosition) */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-charcoal bg-paper/90 backdrop-blur-sm px-2.5 py-1 rounded-[2px]">
              Before Fit-Out
            </span>
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-paper shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal text-paper border-2 border-paper flex items-center justify-center shadow-lg">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Accessible Range Input for Screen Readers and Keyboard navigation */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label="Comparison slider position"
          className="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-20"
        />
      </div>

      {caption && (
        <p className="text-xs sm:text-sm text-charcoal/70 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}

