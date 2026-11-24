"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
  priority?: boolean;
  animateOnLoad?: boolean;
};

export default function ClipImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  animateOnLoad = false,
}: Props) {
  const box = useRef<HTMLDivElement>(null);
  const imgWrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = box.current;
      const img = imgWrapper.current;
      if (!el || !img) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          if (ctx.conditions?.reduce) {
            gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
            gsap.set(img, { xPercent: 0, scale: 1 });
            return;
          }

          if (animateOnLoad || priority) {
            // Ensure image is visible, then animate smoothly
            gsap.fromTo(
              el,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.2,
                ease: "power3.out",
                delay: 0.1,
                clearProps: "clipPath",
              }
            );
            gsap.fromTo(
              img,
              { xPercent: -6, scale: 1.08 },
              {
                xPercent: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.1,
              }
            );
            return;
          }

          // For below-the-fold images: trigger once on scroll into view and stay visible!
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.2,
              ease: "power3.out",
              clearProps: "clipPath",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                once: true,
              },
            }
          );
          gsap.fromTo(
            img,
            { xPercent: -10, scale: 1.15 },
            {
              xPercent: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      );
    },
    { scope: box }
  );

  return (
    <div
      ref={box}
      className={`relative overflow-hidden bg-stone/40 ${aspectRatio} ${className}`}
      style={{ clipPath: "inset(0 0% 0 0)" }}
    >
      <div ref={imgWrapper} className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
