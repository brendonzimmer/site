"use client";

import { useCallback, useEffect, useRef } from "react";

export function CollectionShelf({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const pressed = useRef<{ card: HTMLElement; pointerId: number } | null>(null);

  const release = useCallback(function releasePress() {
    pressed.current?.card.removeAttribute("data-pressed");
    pressed.current = null;
    window.removeEventListener("blur", releasePress);
    window.removeEventListener("pagehide", releasePress);
  }, []);

  useEffect(() => release, [release]);

  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="collection-shelf scrollbar-none"
      onPointerDownCapture={(event) => {
        if (!event.isPrimary) {
          release();
          return;
        }
        if (event.pointerType === "mouse") return;
        const card = (event.target as Element).closest<HTMLElement>(
          ".collection-card",
        );
        if (!card || !event.currentTarget.contains(card)) return;
        release();
        pressed.current = { card, pointerId: event.pointerId };
        card.setAttribute("data-pressed", "true");
        // Only listen during a press; interruption must never leave a card stuck.
        window.addEventListener("blur", release);
        window.addEventListener("pagehide", release);
      }}
      onPointerUpCapture={(event) => {
        if (event.pointerId === pressed.current?.pointerId) release();
      }}
      onPointerCancelCapture={(event) => {
        if (event.pointerId === pressed.current?.pointerId) release();
      }}
      onLostPointerCapture={release}
      onPointerLeave={release}
      onContextMenu={release}
      onScroll={release}
    >
      {children}
    </div>
  );
}
