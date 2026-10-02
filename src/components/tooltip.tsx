"use client";

import { useEffect, useState } from "react";

export function Tooltip({
  trigger,
  content,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
}) {
  const [dismissed, setDismissed] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active || dismissed) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDismissed(true);
    };
    // Hover can open the hint while keyboard focus is somewhere else.
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [active, dismissed]);

  // The link already has a descriptive accessible name. This redundant visual
  // hint needs neither a positioning engine nor another keyboard stop.
  return (
    <span
      className="link-hint"
      data-dismissed={dismissed || undefined}
      onFocus={() => setActive(true)}
      onPointerEnter={() => setActive(true)}
      onBlur={(event) => {
        const stillActive = event.currentTarget.matches(":hover");
        setActive(stillActive);
        if (!stillActive) setDismissed(false);
      }}
      onPointerLeave={(event) => {
        const stillActive = event.currentTarget.matches(":focus-within");
        setActive(stillActive);
        if (!stillActive) setDismissed(false);
      }}
    >
      {trigger}
      <span className="link-hint-content" aria-hidden="true">
        {content}
      </span>
    </span>
  );
}
