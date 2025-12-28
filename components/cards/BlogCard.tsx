"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/Motion";
import type { BlogPost } from "@/types";
import { hrefSlash } from "@/lib/utils/asset";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <FadeIn className="group h-full">
      <Link
        href={hrefSlash(`/blog/${post.slug}`)}
        className="flex flex-col h-full bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] overflow-hidden hover:border-indigo-500/30 hover:bg-zinc-900/60 transition-all duration-500 shadow-xl hover:shadow-indigo-500/5"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.imageUrl}   // ✅ dùng imageUrl
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-zinc-950/80 backdrop-blur-md text-indigo-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/5">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-zinc-500 text-xs mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> 5 min read
            </span>
          </div>

          <h3 className="text-xl font-bold mb-4 leading-snug text-zinc-100 group-hover:text-indigo-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-zinc-400 text-sm mb-8 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4 flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
            <span>Đọc chi tiết</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};

export default BlogCard;
