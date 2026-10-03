"use client";

import { useEffect, useRef } from "react";

const WHEEL_IDLE_MS = 180;
const WHEEL_ENTRY_PX = 56;
const TOUCH_ENTRY_PX = 40;
const EDGE_TOLERANCE = 2;

/** Native scrolling, with one deliberate extra gesture to discover the corner. */
export function HomeScenes({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const professional = root?.querySelector<HTMLElement>(".home-professional");
    const corner = root?.querySelector<HTMLElement>(".corner-content");
    const entry = root?.querySelector<HTMLButtonElement>("[data-corner-entry]");
    if (!root || !professional || !corner || !("onscrollend" in document))
      return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let state: "closed" | "entering" | "draining" | "open" = "open";
    let top = 0;
    let cornerTop = 0;
    let mainBottom = 0;
    let previousY = window.scrollY;
    let direction = 0;
    let settling = false;
    let entryStartY = 0;
    let entryHasMoved = false;
    let entryVersion = 0;
    let entryEndFrame = 0;
    let entryTimer: number | undefined;
    let lastWheel = -Infinity;
    let wheelBurst = 0;
    let entryBurst = -1;
    let wheelEligible = false;
    let wheelDistance = 0;
    let wheelListening = false;
    let wheelTimer: number | undefined;
    let restoreFrame = 0;
    let restoring = true;
    let touch: { id: number; x: number; y: number; distance: number } | null =
      null;

    const atBoundary = () => window.scrollY >= mainBottom - EDGE_TOLERANCE;
    const measure = () => {
      // The professional section keeps the same geometry while the corner is
      // collapsed. Never read layout from a scroll, wheel, or touch handler.
      const rect = professional.getBoundingClientRect();
      top = window.scrollY + rect.top;
      cornerTop = window.scrollY + rect.bottom;
      mainBottom = Math.max(top, cornerTop - window.innerHeight);
    };
    const syncWheelListener = () => {
      const needed =
        state === "entering" ||
        state === "draining" ||
        (state === "closed" && atBoundary());
      if (needed === wheelListening) return;
      wheelListening = needed;
      if (needed)
        window.addEventListener("wheel", gateWheel, { passive: false });
      else window.removeEventListener("wheel", gateWheel);
    };
    const changeState = (next: typeof state) => {
      state = next;
      root.dataset.corner = next;
      corner.inert = next === "closed";
      entry?.setAttribute("aria-expanded", String(next !== "closed"));
      syncWheelListener();
    };
    const resetDirection = () => {
      previousY = window.scrollY;
      direction = 0;
    };
    const clearEntryCompletion = () => {
      window.cancelAnimationFrame(entryEndFrame);
      window.clearTimeout(entryTimer);
    };
    const close = () => {
      if (window.scrollY > mainBottom + EDGE_TOLERANCE) return;
      // Return focus before hiding its containing section from the focus tree.
      const returnFocus = corner.contains(document.activeElement);
      if (returnFocus) {
        root.querySelector<HTMLElement>("#main-content")?.focus({
          preventScroll: true,
        });
      }
      wheelEligible = false;
      wheelDistance = 0;
      // An outgoing gesture must finish before it can become an entry gesture.
      lastWheel = performance.now();
      changeState("closed");
      // The entry button becomes focusable only in the closed scene.
      if (returnFocus) entry?.focus({ preventScroll: true });
    };
    const cancelAutomatic = () => {
      clearEntryCompletion();
      if (settling || state === "entering") {
        settling = false;
        window.scrollTo({ top: window.scrollY, behavior: "instant" });
      }
      if (state === "entering" || state === "draining") {
        window.clearTimeout(wheelTimer);
        changeState("open");
        if (!restoring) close();
      }
      resetDirection();
    };
    const finishEntry = () => {
      if (state !== "entering") return;
      clearEntryCompletion();
      resetDirection();
      changeState(
        entryBurst === wheelBurst &&
          performance.now() - lastWheel < WHEEL_IDLE_MS
          ? "draining"
          : "open",
      );
    };
    const enter = (focusHeading: boolean, fromWheel = false) => {
      if (state !== "closed") return;
      restoring = false;
      settling = false;
      entryStartY = window.scrollY;
      entryHasMoved = false;
      entryVersion += 1;
      entryBurst = fromWheel ? wheelBurst : -1;
      changeState("entering");
      // A browser-aborted/hidden-tab scroll must never leave input suppressed.
      entryTimer = window.setTimeout(() => {
        if (state === "entering") cancelAutomatic();
      }, 1500);
      if (focusHeading) {
        corner.querySelector<HTMLElement>("#corner-heading")?.focus({
          preventScroll: true,
        });
      }
      resetDirection();
      window.scrollTo({
        top: cornerTop,
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
      if (reducedMotion.matches) finishEntry();
    };
    const normalizedWheelY = (event: WheelEvent) =>
      event.deltaY *
      (event.deltaMode === 1
        ? 16
        : event.deltaMode === 2
          ? window.innerHeight
          : 1);
    const isVerticalWheel = (event: WheelEvent) =>
      !event.ctrlKey && Math.abs(event.deltaY) > Math.abs(event.deltaX);
    const isMomentum = (event: WheelEvent) =>
      (event as WheelEvent & { momentum?: boolean }).momentum === true;

    const observeWheel = (event: WheelEvent) => {
      const now = performance.now();
      const fresh = now - lastWheel >= WHEEL_IDLE_MS;
      const vertical = isVerticalWheel(event);
      if (fresh) {
        wheelBurst += 1;
        wheelDistance = 0;
        // Eligibility is fixed here, before native scrolling. Reaching the
        // footer later in this same wheel/momentum burst cannot unlock it.
        wheelEligible =
          state === "closed" &&
          atBoundary() &&
          vertical &&
          event.deltaY > 0 &&
          !isMomentum(event);
      }
      lastWheel = now;
      if (state === "entering" && vertical && event.deltaY > 0) {
        // Forward input can reinforce the reveal, but cannot cancel it halfway
        // through or overshoot its landing, even if it starts another burst.
        entryBurst = wheelBurst;
      }
      if (
        settling ||
        ((state === "entering" || state === "draining") &&
          (entryBurst !== wheelBurst || !vertical || event.deltaY <= 0))
      ) {
        cancelAutomatic();
        wheelEligible = false;
      }
      if (!vertical || event.deltaY <= 0) wheelEligible = false;
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        wheelEligible = false;
        wheelDistance = 0;
        if (state === "draining") changeState("open");
      }, WHEEL_IDLE_MS);
      syncWheelListener();
    };
    function gateWheel(event: WheelEvent) {
      if (
        !isVerticalWheel(event) ||
        event.deltaY <= 0 ||
        !event.cancelable ||
        event.defaultPrevented
      )
        return;
      if (
        (state === "entering" || state === "draining") &&
        entryBurst === wheelBurst
      ) {
        // Consume only the gesture that opened the corner, including its tail
        // after landing. A fresh gesture or opposite input is native again.
        event.preventDefault();
      } else if (
        state === "closed" &&
        wheelEligible &&
        !isMomentum(event) &&
        atBoundary()
      ) {
        event.preventDefault();
        wheelDistance += normalizedWheelY(event);
        if (wheelDistance >= WHEEL_ENTRY_PX) enter(false, true);
      }
    }

    const clearTouch = () => {
      touch = null;
      window.removeEventListener("touchmove", gateTouch);
    };
    const startTouch = (event: TouchEvent) => {
      cancelAutomatic();
      clearTouch();
      if (state !== "closed" || !atBoundary() || event.touches.length !== 1)
        return;
      const point = event.touches[0];
      touch = {
        id: point.identifier,
        x: point.clientX,
        y: point.clientY,
        distance: 0,
      };
      window.addEventListener("touchmove", gateTouch, { passive: false });
    };
    function gateTouch(event: TouchEvent) {
      if (!touch) return;
      const point = Array.from(event.touches).find(
        (item) => item.identifier === touch?.id,
      );
      if (!point || event.touches.length !== 1) {
        clearTouch();
        return;
      }
      const dx = Math.abs(point.clientX - touch.x);
      const dy = touch.y - point.clientY;
      if (dy < -8 || (dx > 8 && dx > Math.abs(dy))) {
        clearTouch();
        return;
      }
      if (dy <= 0 || dy < dx) return;
      if (!event.cancelable) {
        clearTouch();
        return;
      }
      event.preventDefault();
      touch.distance = dy;
    }
    const endTouch = (event: TouchEvent) => {
      const qualifies =
        touch && event.touches.length === 0 && touch.distance >= TOUCH_ENTRY_PX;
      clearTouch();
      if (qualifies) enter(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const downward = ["ArrowDown", "PageDown", " ", "End"].includes(
        event.key,
      );
      const unmodified =
        !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
      if (state === "entering" && downward && unmodified) {
        // Further downward input must not cancel the landing and scroll past it.
        event.preventDefault();
        return;
      }
      cancelAutomatic();
      if (
        event.defaultPrevented ||
        event.repeat ||
        !unmodified ||
        target?.closest(
          "a, button, input, textarea, select, summary, [role='button'], [contenteditable]:not([contenteditable='false'])",
        ) ||
        state !== "closed" ||
        !atBoundary() ||
        !downward
      )
        return;
      event.preventDefault();
      enter(true);
    };
    const handleClick = (event: MouseEvent) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest("[data-corner-entry]")
      )
        return;
      event.preventDefault();
      cancelAutomatic();
      enter(true);
    };

    const trackDirection = (event: Event) => {
      if (event.target !== document) return;
      const y = window.scrollY;
      if (state === "entering" && Math.abs(y - entryStartY) > EDGE_TOLERANCE)
        entryHasMoved = true;
      if (
        !settling &&
        state !== "entering" &&
        state !== "draining" &&
        y !== previousY
      ) {
        direction = Math.sign(y - previousY);
      }
      previousY = y;
      if (!restoring && state === "open" && y <= mainBottom + EDGE_TOLERANCE)
        close();
      syncWheelListener();
    };
    const settle = (event: Event) => {
      if (event.target !== document) return;
      if (state === "entering") {
        if (Math.abs(window.scrollY - cornerTop) <= EDGE_TOLERANCE)
          finishEntry();
        else if (entryHasMoved) {
          const y = window.scrollY;
          const version = entryVersion;
          window.cancelAnimationFrame(entryEndFrame);
          entryEndFrame = window.requestAnimationFrame(() => {
            if (
              state === "entering" &&
              version === entryVersion &&
              Math.abs(window.scrollY - y) < 1 &&
              Math.abs(window.scrollY - cornerTop) > EDGE_TOLERANCE
            ) cancelAutomatic();
          });
        }
        return;
      }
      if (settling) {
        settling = false;
        resetDirection();
        return;
      }
      const travel = direction;
      direction = 0;
      if (
        restoring ||
        state === "draining" ||
        !travel ||
        reducedMotion.matches ||
        root.querySelector(":focus-visible")
      )
        return;
      const y = window.scrollY;
      const reach = Math.min(160, window.innerHeight * 0.2);
      const candidates =
        state === "closed" ? [top, mainBottom] : [top, mainBottom, cornerTop];
      const target = candidates
        .filter(
          (value) => (value - y) * travel > 1 && Math.abs(value - y) <= reach,
        )
        .sort((a, b) => Math.abs(a - y) - Math.abs(b - y))[0];
      if (target === undefined) return;
      settling = true;
      window.scrollTo({ top: target, behavior: "smooth" });
    };

    const hashTarget = () => {
      try {
        return document.getElementById(
          decodeURIComponent(window.location.hash.slice(1)),
        );
      } catch {
        return null;
      }
    };
    const restore = (event?: Event) => {
      cancelAutomatic();
      restoring = true;
      // Keep content available while the browser restores a hash, focus, or
      // history position. This is a one-off lifecycle frame, not an animation.
      changeState("open");
      window.cancelAnimationFrame(restoreFrame);
      restoreFrame = window.requestAnimationFrame(() => {
        measure();
        const target = hashTarget();
        const savedPosition =
          event?.type === "pageshow" &&
          (event as PageTransitionEvent).persisted;
        const cornerHash =
          !!target && corner.contains(target) && !savedPosition;
        if (
          cornerHash &&
          (event?.type === "hashchange" || window.scrollY <= mainBottom)
        )
          target.scrollIntoView({ behavior: "instant" });
        restoring = false;
        if (!corner.contains(document.activeElement) && !cornerHash) close();
        resetDirection();
      });
    };
    const resize = () => {
      measure();
      cancelAutomatic();
      syncWheelListener();
    };
    const observer = new ResizeObserver(resize);
    measure();
    root.dataset.snapping = "directional";
    observer.observe(professional);
    document.addEventListener("scroll", trackDirection, { passive: true });
    document.addEventListener("scrollend", settle);
    window.addEventListener("wheel", observeWheel, {
      passive: true,
      capture: true,
    });
    window.addEventListener("pointerdown", cancelAutomatic, { passive: true });
    window.addEventListener("touchstart", startTouch, { passive: true });
    window.addEventListener("touchend", endTouch, { passive: true });
    window.addEventListener("touchcancel", clearTouch, { passive: true });
    window.addEventListener("keydown", handleKey);
    root.addEventListener("click", handleClick);
    window.addEventListener("resize", resize);
    window.addEventListener("pageshow", restore);
    window.addEventListener("hashchange", restore);
    restore();
    return () => {
      cancelAutomatic();
      clearTouch();
      observer.disconnect();
      window.cancelAnimationFrame(restoreFrame);
      window.clearTimeout(wheelTimer);
      document.removeEventListener("scroll", trackDirection);
      document.removeEventListener("scrollend", settle);
      window.removeEventListener("wheel", observeWheel, true);
      window.removeEventListener("wheel", gateWheel);
      window.removeEventListener("pointerdown", cancelAutomatic);
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchend", endTouch);
      window.removeEventListener("touchcancel", clearTouch);
      window.removeEventListener("keydown", handleKey);
      root.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pageshow", restore);
      window.removeEventListener("hashchange", restore);
      corner.inert = false;
      entry?.setAttribute("aria-expanded", "false");
      delete root.dataset.corner;
      delete root.dataset.snapping;
    };
  }, []);

  return (
    <div className="home-page" ref={rootRef}>
      {children}
    </div>
  );
}
