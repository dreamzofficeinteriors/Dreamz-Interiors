"use client";

import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DUR, EASE, IS_REDUCED } from "@/lib/motion";
import { lenisRef } from "@/lib/lenis";

const Ctx = createContext<(href: string) => void>(() => {});
export const useNavigate = () => useContext(Ctx);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const busy = useRef(false);
  const safety = useRef<ReturnType<typeof setTimeout>>(undefined);

  const reveal = useCallback(() => {
    clearTimeout(safety.current);
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    gsap.to(overlay.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: DUR.wipe,
      ease: EASE.wipe,
      delay: 0.1,
      onComplete: () => {
        gsap.set(overlay.current, { clipPath: "inset(100% 0 0 0)" });
        busy.current = false;
      },
    });
  }, []);

  const navigate = useCallback(
    (href: string) => {
      if (busy.current) return;
      const same = href === window.location.pathname + window.location.search;
      if (IS_REDUCED() || same) {
        router.push(href);
        return;
      }
      busy.current = true;
      gsap.fromTo(
        overlay.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: DUR.wipe,
          ease: EASE.wipe,
          onComplete: () => router.push(href),
        }
      );
      safety.current = setTimeout(() => {
        if (busy.current) reveal();
      }, 4000); // never trap the user
    },
    [router, reveal]
  );

  useEffect(() => {
    if (busy.current) reveal();
  }, [pathname, reveal]);

  return (
    <Ctx.Provider value={navigate}>
      {children}
      <div ref={overlay} className="pt-overlay" aria-hidden="true" />
    </Ctx.Provider>
  );
}

export function TransitionLink({
  href,
  children,
  ...rest
}: React.ComponentProps<typeof Link>) {
  const navigate = useNavigate();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        rest.onClick?.(e);
        const h = typeof href === "string" ? href : href.pathname ?? "/";
        const modified =
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
        if (e.defaultPrevented || modified) return;
        if (!h.startsWith("/") || h.startsWith("//") || h.includes("#")) return; // external and anchors: normal behavior
        e.preventDefault();
        navigate(h);
      }}
    >
      {children}
    </Link>
  );
}

