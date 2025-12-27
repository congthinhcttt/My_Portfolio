"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

import { profile } from "@/lib/data/profile";
import { FadeIn } from "@/components/motion/Motion";
import { asset } from "@/lib/utils/asset";

// Chuẩn hoá src (trả về URL ngoài hoặc path bắt đầu bằng "/")
const normalizeImgSrc = (src?: string) => {
  if (!src || src.trim() === "") return "/image/profile/avatar.jpg";
  const s = src.trim();
  if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/")) return s;
  return `/${s}`;
};

const Hero: React.FC = () => {
  // ✅ ưu tiên avatarUrl (đúng kiểu bạn đang dùng ở data/profile)
  const rawAvatar = (profile as any).avatarUrl ?? (profile as any).avatar ?? "";
  const avatarSrc = asset(normalizeImgSrc(rawAvatar));

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px] -z-10 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px] -z-10 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-pink-600/10 blur-[80px] -z-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <FadeIn>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                Sẵn sàng cho các dự án mới
              </div>

              <h1 className="mb-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                Tạo ra{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  giá trị
                </span>{" "}
                thông qua mã nguồn.
              </h1>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
                Xin chào, tôi là{" "}
                <span className="font-semibold text-white/85">{profile.name}</span>.{" "}
                {(profile as any).shortBio ?? (profile as any).bio}
              </p>

              <div className="mb-12 flex flex-wrap items-center gap-5">
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-500 active:scale-95"
                >
                  Xem dự án
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>

                {/* ✅ cv.pdf cũng cần basePath khi deploy */}
                <a
                  href={asset("/cv.pdf")}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white/80 backdrop-blur transition-all hover:bg-white/10 active:scale-95"
                >
                  <Download size={20} />
                  Tải CV
                </a>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-white/35">Kết nối:</span>
                <div className="h-px w-8 bg-white/10" />
                <div className="flex gap-4">
                  <a
                    href={profile.socials?.github ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/35 transition-colors hover:text-indigo-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={profile.socials?.linkedin ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/35 transition-colors hover:text-indigo-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={profile.socials?.twitter ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/35 transition-colors hover:text-indigo-300"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Avatar */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute -inset-8 rounded-full border border-white/10" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 h-64 w-64 overflow-hidden rounded-[40px] border-2 border-white/10 bg-white/5 shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
              >
                <Image
                  src={avatarSrc}
                  alt={profile.name}
                  fill
                  className="object-cover scale-110 transition-transform duration-700 hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-bold text-lg text-white">
                    🎓
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-tighter text-white/40">
                      Thực tập sinh tại Cty Cổ phần Doli
                    </div>
                    <div className="text-sm font-bold text-white">Intern Frontend</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
