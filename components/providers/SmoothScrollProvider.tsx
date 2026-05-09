"use client";

import { useEffect, useRef } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    (async () => {
      const LenisModule = await import("lenis");
      const LenisClass = LenisModule.default;

      lenis = new LenisClass({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.8,
        infinite: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      }) as { raf: (time: number) => void; destroy: () => void };

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      // Expose to GSAP ScrollTrigger
      (window as unknown as Record<string, unknown>).__lenis__ = lenis;
    })();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
