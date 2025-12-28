"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { ArrowLeft, Calendar, Tag, Share2, Clock, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/Motion";
import { motion, useScroll, useSpring } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";
import { asset } from "@/lib/utils/asset";

type BlogPost = (typeof blogPosts)[number];

export default function BlogPostDetailClient({ post }: { post: BlogPost }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const contentText = typeof post.content === "string" ? post.content : "";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pt-32 pb-32 bg-zinc-950"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-500 origin-left z-[100] shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 text-zinc-500 hover:text-indigo-400 transition-all"
          >
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 transition-all">
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold text-xs uppercase tracking-[0.2em]">Danh sách Blog</span>
          </Link>

          <button className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
            <Share2 size={20} />
          </button>
        </div>

        <FadeIn>
          <div className="flex flex-wrap items-center gap-6 text-zinc-500 mb-10 text-[10px] font-black uppercase tracking-[0.25em]">
            <span className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> 5 phút đọc
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 leading-[1.05] tracking-tighter text-white">
            {post.title}
          </h1>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative aspect-[16/9] mb-24 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group"
          >
            <Image
              src={asset(post.imageUrl)} // ✅ thêm basePath cho GitHub Pages
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60" />
          </motion.div>

          <article className="max-w-none">
            <div className="space-y-2">{/* renderMarkdown(contentText) */}</div>
          </article>

          {relatedPosts.length > 0 && (
            <div className="mt-48 pt-24 border-t border-zinc-900">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">
                    Đọc tiếp bài khác
                  </h3>
                  <p className="text-zinc-500 font-medium text-lg">
                    Khám phá thêm các kiến thức chuyên sâu khác trong kho bài viết.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="group text-indigo-400 font-black text-xs hover:text-indigo-300 flex items-center gap-3 transition-all uppercase tracking-[0.3em]"
                >
                  Xem tất cả{" "}
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </motion.main>
  );
}
