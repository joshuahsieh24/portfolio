import { getBlogPosts } from "@/data/blog";
import BlurFade from "@/components/magicui/blur-fade";
import { JournalFeed } from "@/components/journal-feed";

export const metadata = {
  title: "Journal",
  description:
    "A creative outlet — writing, notes, and photo dumps from what I'm building and living.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase block mb-3">
          Journal
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
          A little of everything
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          Part notebook, part scrapbook. Writing on software and the things
          I&apos;m building, plus photo dumps from life outside the screen.
        </p>
      </BlurFade>

      <div className="mt-12">
        <JournalFeed posts={posts} />
      </div>
    </section>
  );
}
