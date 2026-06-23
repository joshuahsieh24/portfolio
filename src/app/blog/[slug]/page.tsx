import { getBlogPosts, getPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import { RawJournal } from "@/components/raw-journal";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: post.metadata.cover
      ? { images: [{ url: post.metadata.cover }] }
      : undefined,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const isScrapbook = post.metadata.type === "scrapbook";
  const images = post.metadata.images ?? [];
  const galleryCols =
    images.length === 1
      ? "columns-1 max-w-md mx-auto"
      : images.length === 2
        ? "columns-2"
        : "columns-2 md:columns-3";

  return (
    <article>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/blog"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Journal
        </Link>
      </BlurFade>

      {/* Header — kept in a readable column even for wide scrapbooks */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <header className="mt-6 mb-10 max-w-2xl">
          {isScrapbook && (
            <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/70 uppercase">
              Scrapbook
            </span>
          )}
          <h1 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            {post.metadata.title}
          </h1>
          <p className="mt-3 text-xs text-muted-foreground/70">
            {formatDate(post.metadata.publishedAt)}
          </p>
          {isScrapbook && post.metadata.summary && (
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {post.metadata.summary}
            </p>
          )}
        </header>
      </BlurFade>

      {/* Original reflection — collapsed by default; the article stays the focus */}
      {!isScrapbook && post.rawHtml && (
        <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
          <RawJournal html={post.rawHtml} date={post.metadata.publishedAt} />
        </BlurFade>
      )}

      {/* Main article — the polished, showcased body */}
      {post.html && (
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div
            className={cn(
              "prose prose-neutral dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-h2:mt-10 prose-a:text-primary prose-pre:rounded-xl prose-pre:border prose-pre:border-border",
              isScrapbook ? "max-w-2xl mb-10" : "max-w-2xl"
            )}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </BlurFade>
      )}

      {/* Closing photo — the emotional payoff to the "kid in me" line */}
      {!isScrapbook && post.metadata.cover && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <figure className="mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={post.metadata.cover}
                alt={post.metadata.coverCaption ?? post.metadata.title}
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
            {post.metadata.coverCaption && (
              <figcaption className="mt-3 text-xs text-muted-foreground/80 leading-relaxed">
                {post.metadata.coverCaption}
              </figcaption>
            )}
          </figure>
        </BlurFade>
      )}

      {/* Scrapbook gallery — masonry */}
      {isScrapbook && images.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className={cn(galleryCols, "gap-3 [column-fill:_balance]")}>
            {images.map((img, i) => (
              <figure key={i} className="mb-3 break-inside-avoid">
                <a
                  href={img.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-border group"
                >
                  <img
                    src={img.src}
                    alt={img.caption ?? post.metadata.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                {img.caption && (
                  <figcaption className="mt-1.5 text-[11px] text-muted-foreground/80 leading-relaxed">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </BlurFade>
      )}
    </article>
  );
}
