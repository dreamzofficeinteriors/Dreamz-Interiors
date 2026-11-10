"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { DUR, EASE } from "@/lib/motion";

export default function Loader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const html = document.documentElement;
      if (html.dataset.intro !== "play") return;

      const tl = gsap.timeline({
        onComplete: () => {
          html.dataset.intro = "done";
        }, // hides loader via CSS
      });

      tl.fromTo(
        ".l-a",
        { yPercent: 110 },
        { yPercent: 0, duration: DUR.loaderStep, ease: EASE.reveal }
      )
        .fromTo(
          ".l-b",
          { yPercent: 110 },
          { yPercent: 0, duration: DUR.loaderStep, ease: EASE.reveal },
          "+=0.15"
        )
        .add(() => {
          // content may start while the loader lifts
          try {
            sessionStorage.setItem("dz-intro", "1");
          } catch {}
          window.dispatchEvent(new Event("dz:intro-done"));
        }, "+=0.35")
        .to(root.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: DUR.loaderStep,
          ease: EASE.wipe,
        });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="loader" aria-hidden="true">
      <div className="text-center font-heading leading-[1.05] text-[clamp(2.2rem,6vw,5rem)]">
        <div className="overflow-hidden">
          <span className="l-a block">Your vision.</span>
        </div>
        <div className="overflow-hidden">
          <span className="l-b block">Our responsibility.</span>
        </div>
      </div>
    </div>
  );
}
