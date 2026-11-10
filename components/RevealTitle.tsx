"use client";

import { createElement, useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { whenIntroDone } from "@/lib/intro";

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  start?: string;
};

export default function RevealTitle({
  as = "h2",
  className,
  children,
  start = "top 90%",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current!;
      const mm = gsap.matchMedia();

      mm.add(
        {
          ok: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          if (ctx.conditions?.reduce) {
            el.classList.add("is-ready");
            return;
          }

          let cancelled = false;
          let split: SplitText | undefined;
          let st: ScrollTrigger | undefined;
          let played = false;

          Promise.all([document.fonts.ready, whenIntroDone()]).then(() => {
            if (cancelled) return;
            split = SplitText.create(el, {
              type: "lines",
              mask: "lines",
              autoSplit: true, // re-splits on resize / font load
              onSplit(self) {
                st?.kill();
                const tween = gsap.effects.revealTitle(self.lines);
                if (played) {
                  tween.progress(1);
                  return tween;
                }
                st = ScrollTrigger.create({
                  trigger: el,
                  start,
                  once: true,
                  animation: tween,
                  onEnter: () => {
                    played = true;
                  },
                });
                return tween;
              },
            });
            el.classList.add("is-ready");
          });

          return () => {
            cancelled = true;
            st?.kill();
            split?.revert();
          };
        }
      );
    },
    { scope: ref }
  );

  return createElement(as, { ref, className, "data-reveal": "" }, children);
}
