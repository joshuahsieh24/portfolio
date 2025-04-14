import { formatDate } from "@/lib/utils";

export interface BlogPost {
  title: string;
  publishedAt: string;
  url: string;
  summary: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Welcome to my Blog!",
    publishedAt: "2024-04-14",
    url: "https://dev.to/josh_hsiehh/welcome-to-my-blog-3j1p",
    summary: "My first blog post on dev.to introducing myself and my journey.",
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

// Add a dummy getPost function to satisfy type checking during build
export async function getPost() {
  return null;
}
