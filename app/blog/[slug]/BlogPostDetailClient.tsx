"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blog";
import { ArrowLeft, Calendar, Tag, Share2, Clock, ChevronRight, User } from "lucide-react";
import { FadeIn } from "@/components/motion/Motion";
import { motion, useScroll, useSpring } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";

type BlogPost = (typeof blogPosts)[number];

function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  let i = 0;

  const pushText = (t: string) => {
    if (t) parts.push(t);
  };

  while (i < text.length) {
    if (text[i] === "`") {
      const j = text.indexOf("`", i + 1);
      if (j !== -1) {
        parts.push(
          <code
            key={`code-${i}`}
            className="px-2 py-1 rounded-lg bg-zinc-900/70 border border-zinc-800 text-zinc-100 text-sm"
          >
            {text.slice(i + 1, j)}
          </code>
        );
        i = j + 1;
        continue;
      }
    }

    if (text[i] === "*" && text[i + 1] === "*") {
      const j = text.indexOf("**", i + 2);
      if (j !== -1) {
        parts.push(
          <strong key={`b-${i}`} className="text-zinc-100 font-extrabold">
            {text.slice(i + 2, j)}
          </strong>
        );
        i = j + 2;
        continue;
      }
    }

    const nextTick = text.indexOf("`", i);
    const nextBold = text.indexOf("**", i);
    const next = [nextTick, nextBold].filter((x) => x !== -1).sort((a, b) => a - b)[0];

    if (next === undefined) {
      pushText(text.slice(i));
      break;
    } else {
      pushText(text.slice(i, next));
      i = next;
    }
  }

  return parts;
}

function renderMarkdown(md: string) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");

  const out: React.ReactElement[] = [];
  let list: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];

  const flushList = (key: string) => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${key}`} className="list-disc pl-6 space-y-3 my-6">
        {list.map((t, idx) => (
          <li key={`li-${key}-${idx}`} className="text-zinc-300 leading-relaxed text-lg md:text-xl">
            {renderInline(t)}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  const flushCode = (key: string) => {
    if (!codeLines.length) return;
    out.push(
      <pre
        key={`pre-${key}`}
        className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 overflow-x-auto my-8"
      >
        <code className="text-zinc-200 text-sm">{codeLines.join("\n")}</code>
      </pre>
    );
    codeLines = [];
  };

  for (let idx = 0; idx < lines.length; idx++) {
    const raw = lines[idx];

    if (raw.trim().startsWith("```")) {
      flushList(String(idx));
      if (!inCode) inCode = true;
      else {
        inCode = false;
        flushCode(String(idx));
      }
      continue;
    }

    if (inCode) {
      codeLines.push(raw);
      continue;
    }

    const line = raw.trimEnd();

    if (!line.trim()) {
      flushList(String(idx));
      continue;
    }

    if (line.startsWith("# ")) {
      flushList(String(idx));
      out.push(
        <h2 key={`h1-${idx}`} className="text-3xl md:text-4xl font-black text-white mt-10 mb-4">
          {renderInline(line.slice(2))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList(String(idx));
      out.push(
        <h3 key={`h2-${idx}`} className="text-2xl md:text-3xl font-extrabold text-white mt-8 mb-3">
          {renderInline(line.slice(3))}
        </h3>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList(String(idx));
      out.push(
        <h4 key={`h3-${idx}`} className="text-xl font-bold text-white mt-6 mb-2">
          {renderInline(line.slice(4))}
        </h4>
      );
      continue;
    }

    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }

    flushList(String(idx));
    out.push(
      <p key={`p-${idx}`} className="text-zinc-300 leading-[1.9] text-lg md:text-xl my-4">
        {renderInline(line)}
      </p>
    );
  }

  flushList("end");
  flushCode("end");

  return out;
}

export default function BlogPostDetailClient({
  slug,
  post,
}: {
  slug: string;
  post: BlogPost | null;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post?.id && p.category === post?.category)
    .slice(0, 2);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900/50 p-12 rounded-[3rem] border border-zinc-800"
        >
          <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400">
            <User size={40} />
          </div>
          <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">
            Không tìm thấy bài viết
          </h2>
          <p className="text-zinc-500 mb-8 max-w-sm mx-auto">
            Có thể nội dung này đã được gỡ bỏ hoặc đường dẫn không chính xác.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
          >
            <ArrowLeft size={20} /> Quay lại danh sách Blog
          </Link>
        </motion.div>
      </div>
    );
  }

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

          {/* Author block bạn đã comment lại rồi */}

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative aspect-[16/9] mb-24 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60" />
          </motion.div>

          <article className="max-w-none">
            <div className="space-y-2">{renderMarkdown(contentText)}</div>
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
