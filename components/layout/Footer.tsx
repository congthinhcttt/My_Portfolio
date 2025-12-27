"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data/profile";

const Footer: React.FC = () => {
  const socials = [
    { label: "GitHub", href: profile.socials?.github ?? "#", Icon: Github },
    { label: "LinkedIn", href: profile.socials?.linkedin ?? "#", Icon: Linkedin },
    { label: "Twitter", href: profile.socials?.twitter ?? "#", Icon: Twitter },
    { label: "Email", href: profile.email ? `mailto:${profile.email}` : "#", Icon: Mail },
  ];

  const explore = [
    { name: "Trang chủ", href: "/" },
    { name: "Dự án", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Chứng chỉ", href: "/certificates" },
    { name: "Về tôi", href: "/about" },
  ];

  // Nếu bạn chưa có trang service thì giữ kiểu text (không link)
  const services = ["Web Development", "UI/UX Design", "Mobile Solutions", "AI Integration"];

  const contact = [
    { Icon: MapPin, text: profile.location ?? "Hồ Chí Minh, Việt Nam" },
    { Icon: Phone, text: profile.phone ?? "+84 333 787 207" },
    { Icon: Mail, text: profile.email ?? "congthinh1504@gmail.com" },
  ];

  const year = new Date().getFullYear();

  const isExternal = (href: string) => href.startsWith("http");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950">
      {/* nền glow nhẹ giống hình */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-30%] h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* TOP */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 relative z-10">
              {/* ✅ FIX: dùng entity để chắc chắn hiển thị */}
              <span className="text-indigo-300 text-xl font-black tracking-tight">&lt;/&gt;</span>
              <span className="text-white font-black text-xl">DEV.THINH</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Tạo ra những trải nghiệm kỹ thuật số xuất sắc thông qua sự kết hợp giữa tư duy thiết kế
              và kỹ thuật lập trình hiện đại.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal(href) ? "_blank" : undefined}
                  rel={isExternal(href) ? "noreferrer" : undefined}
                  aria-label={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-white/15 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">Khám phá</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/50 transition hover:text-indigo-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">Dịch vụ</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/50">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/70">Liên hệ</h4>

            <ul className="mt-5 space-y-4">
              {contact.map(({ Icon, text }, idx) => {
                const mailHref = text.includes("@") ? `mailto:${text}` : "";
                const telHref = text.trim().startsWith("+") ? `tel:${text.replace(/\s/g, "")}` : "";

                return (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                      <Icon size={16} />
                    </span>

                    {text.includes("@") ? (
                      <a className="transition hover:text-indigo-300" href={mailHref}>
                        {text}
                      </a>
                    ) : text.trim().startsWith("+") ? (
                      <a className="transition hover:text-indigo-300" href={telHref}>
                        {text}
                      </a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {year} <span className="font-semibold text-white/70">{profile.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 transition hover:text-indigo-300">
              Bảo mật
            </Link>
            <Link href="/terms" className="text-xs text-white/40 transition hover:text-indigo-300">
              Điều khoản
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition hover:bg-white/10 hover:text-white"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
