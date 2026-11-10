"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

export default function BridgeSection({ src, alt, children }: Props) {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const imgWrapper = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
          tl.fromTo(
            frame.current,
            { clipPath: "inset(14% 42% 14% 6%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
            0
          )
            .fromTo(
              imgWrapper.current,
              { xPercent: -10, scale: 1.2 },
              { xPercent: 0, scale: 1, duration: 1 },
              0
            )
            .fromTo(
              next.current,
              { yPercent: 100 },
              { yPercent: 0, duration: 0.6 },
              1
            );
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bridge">
      <div className="bridge-sticky">
        <div ref={frame} className="bridge-frame">
          <div ref={imgWrapper} className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              priority={false}
              className="object-cover"
            />
          </div>
        </div>
        <div
          ref={next}
          className="bridge-next grid place-items-center bg-[var(--charcoal)] p-8 text-[var(--paper)]"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

