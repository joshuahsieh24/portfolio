import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

export type PostType = "essay" | "scrapbook";

export interface GalleryImage {
  src: string;
  caption?: string;
  /** optional aspect hint for nicer masonry: "tall" | "wide" | "square" */
  span?: "tall" | "wide" | "square";
}

export interface PostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  type?: PostType;
  /** image used on the index card (falls back to first gallery image) */
  cover?: string;
  /** photo-dump / scrapbook images */
  images?: GalleryImage[];
}

export interface BlogPost {
  slug: string;
  metadata: PostMetadata;
}

export interface FullPost extends BlogPost {
  html: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function readContentFiles() {
  return fs.readdirSync(CONTENT_DIR).filter((file) => /\.mdx?$/.test(file));
}

function normalizeMetadata(data: Record<string, unknown>): PostMetadata {
  const meta = data as PostMetadata;
  return {
    ...meta,
    type: meta.type ?? "essay",
    cover: meta.cover ?? meta.images?.[0]?.src,
  };
}

export function getBlogPosts(): BlogPost[] {
  return readContentFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, metadata: normalizeMetadata(data) };
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "vitesse-dark",
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}

export async function getPost(slug: string): Promise<FullPost | null> {
  const candidates = [
    path.join(CONTENT_DIR, `${slug}.mdx`),
    path.join(CONTENT_DIR, `${slug}.md`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const html = content.trim() ? await markdownToHtml(content) : "";
  return { slug, metadata: normalizeMetadata(data), html };
}
