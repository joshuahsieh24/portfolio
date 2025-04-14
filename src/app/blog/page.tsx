import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="prose prose-neutral dark:prose-invert">
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">my blog posts</h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Published</th>
              <th className="text-left p-2">Summary</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.url} className="border-t">
                <td className="p-2">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400"
                  >
                    {post.title}
                  </a>
                </td>
                <td className="p-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.publishedAt)}
                </td>
                <td className="p-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {post.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
