# 07. Animation Plan

## Reference and principle
The motion language follows the technique used on the Telha Clarke site: a two-step wordmark loader, masked line-by-line title reveals triggered once at about 90% viewport, and clip-path plus translateX image transitions driven by scroll with GSAP and ScrollTrigger. Recreate the technique only; do not copy layout, assets or identity.
Feel: slow, calm, intentional. Long easing, small movement. Imagery leads.

## Animation inventory
| Where | Effect | Trigger | Timing / easing |
|---|---|---|---|
| Loader | Step 1 wordmark reveal; step 2 descriptor reveal; clip-path lift | Once per session | 2.5s max total; `power4.out` |
| Section headings | Masked line-by-line reveal (RevealTitle) | `top 90%`, once | 1.1s, stagger 0.08, `power4.out` |
| Images | Clip-path `inset(0 100% 0 0)` -> `inset(0)` with image counter-moving (xPercent -12 -> 0, scale 1.15 -> 1) | Scrubbed, `top 85%` to `top 25%` | `none` |
| Statement | Words go from 20% to 100% opacity | Scrubbed | `none` |
| Stat bar | Number count-up | Once on enter | 1.6s, `power2.out` |
| Projects | Pinned horizontal gallery with per-card image parallax | Scrubbed, pinned | `none` |
| Process | Pinned steps swapping on scroll | Scrubbed, pinned | `none` |
| Turnkey before/after | Clip-path wipe | Scrubbed | `none` |
| Services list | Image follows cursor on hover (desktop, fine pointer only) | Hover | lerp 0.15 |
| Page transitions | Soft clip-path wipe | Route change | 0.8s, `power3.inOut` |
| Buttons | Clip-path fill wipe | Hover / focus | 0.4s, `cubic-bezier(0.4, 0, 0.2, 1)` |
| Mobile menu | Clip-path circle expanding from button | Open / close | 0.6s, `power3.inOut` |

## Loader
Once per session via `sessionStorage` (wrapped in try/catch). Skipped for `prefers-reduced-motion`. Must not hide content from crawlers or break without JS. Never block interaction longer than ~2.5s.

## Fallbacks
- **Under 768px or touch:** replace pinned and horizontal sections with vertical stacks and simple fade/translate reveals; no cursor effects.
- **`prefers-reduced-motion`:** show final states immediately; disable Lenis, pinning and parallax.
- Use `gsap.matchMedia()` for all of this.

## Performance rules
- Animate only `transform`, `opacity`, `clip-path`. Never layout properties.
- Register only the GSAP plugins needed; split text after `document.fonts.ready`.
- Call `ScrollTrigger.refresh()` after images and fonts load.
- Clean up with `useGSAP` scope and `matchMedia`; no leaked triggers on route change.
- Keep Lenis synced to ScrollTrigger through the GSAP ticker.

## Core implementation
**lib/gsap.ts**
```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

gsap.registerEffect({
  name: "revealTitle",
  effect: (targets: gsap.TweenTarget, config: { duration: number; stagger: number }) =>
    gsap.fromTo(targets, { yPercent: 110 },
      { yPercent: 0, duration: config.duration, stagger: config.stagger, ease: "power4.out", paused: true }),
  defaults: { duration: 1.1, stagger: 0.08 },
});

export { gsap, ScrollTrigger, SplitText, useGSAP };
```

**RevealTitle**
```tsx
"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

export default function RevealTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      document.fonts.ready.then(() => {
        const split = SplitText.create(ref.current!, { type: "lines", mask: "lines" });
        ScrollTrigger.create({
          trigger: ref.current, start: "top 90%", once: true,
          animation: gsap.effects.revealTitle(split.lines),
        });
      });
    });
  }, { scope: ref });
  return <h2 ref={ref} className={className}>{children}</h2>;
}
```

**ClipImage** (use `next/image` in production)
```tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ClipImage({ src, alt }: { src: string; alt: string }) {
  const box = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = { trigger: box.current, start: "top 85%", end: "top 25%", scrub: true };
      gsap.fromTo(box.current, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", ease: "none", scrollTrigger: st });
      gsap.fromTo(img.current, { xPercent: -12, scale: 1.15 }, { xPercent: 0, scale: 1, ease: "none", scrollTrigger: st });
    });
  }, { scope: box });
  return (
    <div ref={box} className="overflow-hidden">
      <img ref={img} src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
```

**SmoothScroll** (mounted in layout)
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return null;
}
```
Check current GSAP license terms before shipping.

## Animation QA
Test on a low-end Android phone, with reduced motion on, with slow network, on route changes (no duplicate triggers), and at 320px, 768px and 1440px widths.
