"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { lenisRef } from "@/lib/lenis";
import { IS_REDUCED } from "@/lib/motion";
import { introPending } from "@/lib/intro";

export default function SmoothScroll() {
  useEffect(() => {
    if (IS_REDUCED()) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;

    if (introPending()) {
      lenis.stop();
      window.addEventListener("dz:intro-done", () => lenis.start(), { once: true });
    }

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
