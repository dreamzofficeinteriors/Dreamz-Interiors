export const EASE = {
  reveal: "power4.out",
  wipe: "power3.inOut",
  scrub: "none",
} as const;

export const DUR = {
  title: 1.1,
  stagger: 0.08,
  wipe: 0.7,
  loaderStep: 0.8,
} as const;

export const IS_REDUCED = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

