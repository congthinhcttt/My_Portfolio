import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import BlogPostDetailClient from "./BlogPostDetailClient";

type PageProps = {
  params: { slug: string };
};

export const dynamicParams = false; // ✅ static export only

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Không tìm thấy bài viết" };

  return {
    title: post.title,
    description: (post as any).excerpt ?? post.title,
  };
}

export default function Page({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  // ✅ nếu không có post thì trả 404 đúng chuẩn
  if (!post) notFound();

  return <BlogPostDetailClient post={post} />;
}
