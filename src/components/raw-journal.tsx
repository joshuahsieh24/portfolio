"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, PenLine } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

/**
 * A subtle, collapsible disclosure for the original journal entry that sits
 * above a polished article. Starts collapsed; the main article stays the focus.
 */
export function RawJournal({ html, date }: { html: string; date?: string }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="mb-12 max-w-2xl overflow-hidden rounded-2xl border border-border/60 bg-muted/30">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={contentId}
        className={cn(
          "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors",
          "hover:bg-muted/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        )}
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border/70 bg-background/60 text-muted-foreground">
          <PenLine className="h-3.5 w-3.5" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-foreground">
            Original Reflection
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            The unfiltered version behind this piece.
          </span>
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            id={contentId}
            key="raw-journal-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/50 px-5 pb-7 pt-5">
              {date && (
                <p className="mb-5 text-[11px] uppercase tracking-widest text-muted-foreground/60">
                  Written {formatDate(date)}
                </p>
              )}
              <div
                className={cn(
                  "prose prose-neutral dark:prose-invert max-w-none",
                  "border-l-2 border-primary/20 pl-5",
                  "font-serif text-[0.95rem] text-muted-foreground",
                  "prose-p:my-4 prose-p:leading-[1.85] prose-p:text-muted-foreground"
                )}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
