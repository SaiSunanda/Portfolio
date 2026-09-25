"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades `.reveal` elements in as they scroll into view. Fail-safe by design:
// nothing is hidden until this effect runs, elements already on screen are
// revealed in the same tick, and reduced-motion users never see the effect.
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.94;
      const pending = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add("in");
      });
      if (pending.length === 0) detach();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    root.classList.add("reveal-on");
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      detach();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
