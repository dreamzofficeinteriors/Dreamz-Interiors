import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { DUR, EASE } from "./motion";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Reusable title effect (same idea as the reference's revealTitle)
gsap.registerEffect({
  name: "revealTitle",
  effect: (
    targets: gsap.TweenTarget,
    config: { duration: number; stagger: number }
  ) =>
    gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: config.duration,
        stagger: config.stagger,
        ease: EASE.reveal,
        paused: true,
      }
    ),
  defaults: { duration: DUR.title, stagger: DUR.stagger },
});

export { gsap, ScrollTrigger, SplitText, useGSAP };
