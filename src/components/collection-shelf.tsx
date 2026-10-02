"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type CollectionItem = { title: string; image: string; author?: string };
export function CollectionShelf({
  title,
  description,
  items,
  kind,
}: {
  title: string;
  description: string;
  items: CollectionItem[];
  kind: "album" | "show";
}) {
  const [unavailable, setUnavailable] = useState<Record<string, boolean>>({});
  const shelf = useRef<HTMLUListElement>(null);
  const id = `collection-${description.toLowerCase()}`;
  function scroll(direction: number) {
    const element = shelf.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <div className="collection">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">{description}</p>
          <h3 id={`${id}-title`}>{title}</h3>
        </div>
        <div className="shelf-controls">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label={`Scroll ${description.toLowerCase()} left`}
            aria-controls={id}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label={`Scroll ${description.toLowerCase()} right`}
            aria-controls={id}
          >
            →
          </button>
        </div>
      </div>
      <ul
        className={`collection-shelf collection-${kind}`}
        ref={shelf}
        id={id}
        tabIndex={0}
        aria-labelledby={`${id}-title`}
      >
        {items.map((item) => (
          <li key={item.title}>
            {unavailable[item.image] ? (
              <div
                className="cover-fallback"
                role="img"
                aria-label={`Cover unavailable for ${item.title}`}
              >
                <span aria-hidden="true">{kind === "album" ? "♫" : "▤"}</span>
                <span>Cover unavailable</span>
              </div>
            ) : (
              <Image
                src={item.image}
                alt={`${item.title}${item.author ? ` by ${item.author}` : ""} cover`}
                width={240}
                height={kind === "album" ? 240 : 355}
                sizes="(max-width: 600px) 144px, 192px"
                unoptimized
                onError={() =>
                  setUnavailable((previous) => ({
                    ...previous,
                    [item.image]: true,
                  }))
                }
              />
            )}
            <p className="collection-item-title">{item.title}</p>
            {item.author && (
              <p className="collection-item-author">{item.author}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
