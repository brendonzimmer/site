"use client";

import { useEffect, useRef } from "react";

/** Native scrolling with directional settling after the gesture has finished. */
export function HomeScenes({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const corner = root?.querySelector<HTMLElement>(".corner-content");
    if (!root || !corner || !("onscrollend" in document)) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let previousY = window.scrollY;
    let direction = 0;
    let settling = false;
    const reset = () => {
      previousY = window.scrollY;
      direction = 0;
      settling = false;
    };

    const trackDirection = (event: Event) => {
      if (event.target !== document) return;
      const y = window.scrollY;
      if (!settling && y !== previousY) direction = Math.sign(y - previousY);
      previousY = y;
    };

    const settle = (event: Event) => {
      if (event.target !== document) return;
      if (settling) {
        settling = false;
        direction = 0;
        return;
      }

      const travel = direction;
      direction = 0;
      if (
        !travel ||
        reducedMotion.matches ||
        root.querySelector(":focus-visible")
      ) {
        return;
      }

      // Geometry is read only after scrolling ends, never on every frame.
      const y = window.scrollY;
      const top = y + root.getBoundingClientRect().top;
      const cornerTop = y + corner.getBoundingClientRect().top;
      const mainBottom = Math.max(top, cornerTop - window.innerHeight);
      const reach = Math.min(160, window.innerHeight * 0.2);
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      const candidates = Array.from(new Set([top, mainBottom, cornerTop]))
        .filter((target) => target >= 0 && target <= maxY)
        .filter((target) => (target - y) * travel > 1)
        .filter((target) => Math.abs(target - y) <= reach)
        .sort((a, b) => Math.abs(a - y) - Math.abs(b - y));
      const target = candidates[0];
      if (target === undefined) return;

      settling = true;
      window.scrollTo({ top: target, behavior: "smooth" });
    };

    // CSS proximity snapping can undo a small gesture away from a snap target.
    // Replace it only where scrollend is supported. Inputs remain untouched:
    // the browser handles wheel, touch momentum, keys and smooth-scroll easing.
    root.dataset.snapping = "directional";
    document.addEventListener("scroll", trackDirection, { passive: true });
    document.addEventListener("scrollend", settle);
    window.addEventListener("pageshow", reset);
    return () => {
      document.removeEventListener("scroll", trackDirection);
      document.removeEventListener("scrollend", settle);
      window.removeEventListener("pageshow", reset);
      delete root.dataset.snapping;
    };
  }, []);

  return (
    <div className="home-page" ref={rootRef}>
      {children}
    </div>
  );
}
