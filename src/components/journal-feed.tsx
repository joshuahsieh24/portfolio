"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { BlogPost, PostType } from "@/data/blog";

type Filter = "all" | PostType;

const TABS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "essay", label: "Writing" },
  { key: "scrapbook", label: "Scrapbooks" },
];

export function JournalFeed({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Writing (essays) first, then scrapbooks; newest within each group.
  const visible = useMemo(() => {
    const rank = (p: BlogPost) =>
      (p.metadata.type ?? "essay") === "essay" ? 0 : 1;
    const filtered =
      filter === "all"
        ? posts
        : posts.filter((p) => (p.metadata.type ?? "essay") === filter);
    return [...filtered].sort((a, b) => {
      const r = rank(a) - rank(b);
      if (r !== 0) return r;
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    });
  }, [filter, posts]);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-1 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200",
              filter === tab.key
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground py-8">
          Nothing here yet — check back soon.
        </p>
      ) : (
        // CSS-columns masonry → Pinterest-style stagger
        <div className="columns-1 sm:columns-2 gap-4 [column-fill:_balance]">
          {visible.map((post) =>
            (post.metadata.type ?? "essay") === "scrapbook" ? (
              <ScrapbookCard key={post.slug} post={post} />
            ) : (
              <EssayCard key={post.slug} post={post} />
            )
          )}
        </div>
      )}
    </div>
  );
}

function ScrapbookCard({ post }: { post: BlogPost }) {
  const { metadata, slug } = post;
  const count = metadata.images?.length ?? 0;
  return (
    <Link
      href={`/blog/${slug}`}
      className="group mb-4 block break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:border-foreground/25"
    >
      {metadata.cover && (
        <div className="relative overflow-hidden">
          <img
            src={metadata.cover}
            alt={metadata.title}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {count > 1 && (
            <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-foreground">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              {count}
            </span>
          )}
        </div>
      )}
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {metadata.title}
          </h2>
          <span className="text-[11px] text-muted-foreground/70 shrink-0">
            {formatDate(metadata.publishedAt)}
          </span>
        </div>
        {metadata.summary && (
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
            {metadata.summary}
          </p>
        )}
      </div>
    </Link>
  );
}

function EssayCard({ post }: { post: BlogPost }) {
  const { metadata, slug } = post;
  return (
    <Link
      href={`/blog/${slug}`}
      className="group mb-4 block break-inside-avoid rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:border-foreground/25"
    >
      <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/70 uppercase">
        Writing
      </span>
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
          {metadata.title}
        </h2>
        <span className="text-[11px] text-muted-foreground/70 shrink-0">
          {formatDate(metadata.publishedAt)}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {metadata.summary}
      </p>
    </Link>
  );
}
