import { getBlogPosts } from "@/data/blog";
import BlurFade from "@/components/magicui/blur-fade";
import { JournalFeed } from "@/components/journal-feed";

export const metadata = {
  title: "Journal",
  description: "Pictures.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <JournalFeed posts={posts} />
      </BlurFade>
    </section>
  );
}
