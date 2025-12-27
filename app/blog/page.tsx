import type { Metadata } from "next";
import BlogCard from "@/components/cards/BlogCard";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bài viết về JavaScript và kinh nghiệm làm dự án.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-28 pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-white text-4xl font-black mb-10">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
