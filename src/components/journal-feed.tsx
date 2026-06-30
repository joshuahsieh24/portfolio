"use client";

import type { BlogPost } from "@/data/blog";

/**
 * A wordless photo wall. Every scrapbook image, flattened into one masonry
 * grid — no titles, captions, dates, or tabs. Just pictures.
 */
export function JournalFeed({ posts }: { posts: BlogPost[] }) {
  const images = posts
    .filter((p) => (p.metadata.type ?? "essay") === "scrapbook")
    .flatMap((p) => p.metadata.images ?? []);

  if (images.length === 0) {
    return <p className="text-sm text-muted-foreground py-8">Nothing here yet.</p>;
  }

  return (
    <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
      {images.map((img, i) => (
        <a
          key={`${img.src}-${i}`}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-3 block break-inside-avoid overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-foreground/25"
        >
          <img
            src={img.src}
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </a>
      ))}
    </div>
  );
}
