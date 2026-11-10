export const introPending = () =>
  typeof document !== "undefined" && document.documentElement.dataset.intro === "play";

export function whenIntroDone(): Promise<void> {
  if (!introPending()) return Promise.resolve();
  return new Promise((res) => window.addEventListener("dz:intro-done", () => res(), { once: true }));
}

