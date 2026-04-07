"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

interface DepthSection {
  title: string;
  body: string;
}

export interface ProjectDepth {
  label: string;
  sections: DepthSection[];
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
    target?: string;
    rel?: string;
  }[];
  className?: string;
  impact?: string;
  depth?: ProjectDepth;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  impact,
  depth,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300",
        className
      )}
    >
      {/* ── Media — full bleed, no background ── */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none w-full h-44 object-cover object-top"
        />
      )}
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Subtle fade from image into card body */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
        {/* Title + date */}
        <div>
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/title"
            >
              <h3 className="text-sm font-semibold text-white group-hover/title:text-gray-200 transition-colors leading-snug">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-sm font-semibold text-white leading-snug">{title}</h3>
          )}
          <time className="text-[11px] text-gray-600 mt-0.5 block">{dates}</time>
        </div>

        {/* Description */}
        <Markdown className="prose max-w-full font-sans text-xs text-gray-400 dark:prose-invert prose-headings:text-white prose-a:text-white leading-relaxed">
          {description}
        </Markdown>

        {/* Impact — always visible, subtle */}
        {impact && (
          <p className="text-[11px] text-gray-600 italic leading-relaxed">{impact}</p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium bg-white/[0.05] text-gray-400 border border-white/[0.1] hover:bg-white/[0.08] transition-colors rounded-md"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-1.5">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target={link.target || "_blank"}
                rel={link.rel || "noopener noreferrer"}
              >
                <Badge className="flex gap-1.5 px-2 py-1 text-[10px] font-medium bg-white/[0.05] text-gray-400 border border-white/[0.1] hover:bg-white/[0.08] transition-colors rounded-md">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {/* ── Expandable depth — consistent across all cards ── */}
        {depth && (
          <div className="border-t border-white/[0.06] pt-3 mt-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-gray-300 transition-colors duration-200 select-none"
            >
              <svg
                className={cn(
                  "w-3 h-3 transition-transform duration-200 shrink-0",
                  expanded && "rotate-90"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {expanded ? `Hide ${depth.label.toLowerCase()}` : depth.label}
            </button>

            {expanded && (
              <div className="mt-4 space-y-4">
                {depth.sections.map((section) => (
                  <div key={section.title}>
                    <h5 className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
                      {section.title}
                    </h5>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
