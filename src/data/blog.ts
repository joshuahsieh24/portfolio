import { formatDate } from "@/lib/utils";

export interface BlogPost {
  title: string;
  publishedAt: string;
  url: string;
  summary: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Example Blog Post",
    publishedAt: "2024-03-20",
    url: "https://dev.to/yourusername/example-post",
    summary: "An example blog post on dev.to",
  },
];

export function getBlogPosts() {
  return blogPosts.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}
