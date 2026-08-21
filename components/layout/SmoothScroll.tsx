"use client";

import { useEffect, useRef } from "react";

// Minimal structural type for the Lenis instance we use.
interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

export const SmoothScroll = () => {
  const lenisRef = useRef<LenisInstance | null>(null);
  const rafId = useRef<number>(0);
  const cancelled = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled.current) return;
      lenisRef.current = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        syncTouch: false,
      });

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafId.current = requestAnimationFrame(raf);
      };
      rafId.current = requestAnimationFrame(raf);
    });

    return () => {
      cancelled.current = true;
      cancelAnimationFrame(rafId.current);
      lenisRef.current?.destroy();
    };
  }, []);

  return null;
};
