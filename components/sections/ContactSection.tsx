"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "../motion/Motion";
import { profile } from "../../lib/data/profile";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: xử lý gửi form (email service / API route) nếu bạn muốn
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              Hãy cùng thảo luận về ý tưởng của bạn!
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-white/55">
              Tôi luôn sẵn lòng hợp tác cho các dự án tự do hoặc cơ hội làm việc
              toàn thời gian. Hãy để lại tin nhắn và tôi sẽ phản hồi sớm nhất có
              thể.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Email
                  </h4>
                  <p className="text-base font-semibold text-white/80">
                    {profile.email ?? "contact@example.com"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Điện thoại
                  </h4>
                  <p className="text-base font-semibold text-white/80">
                    {profile.phone ?? "+84 (0)333 787 207"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Địa chỉ
                  </h4>
                  <p className="text-base font-semibold text-white/80">
                    {profile.location ?? "Thành phố Hồ Chí Minh, Việt Nam"}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn transition={{ delay: 0.2 }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/55">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/85 outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/55">
                    Địa chỉ Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/85 outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <label className="text-sm font-medium text-white/55">
                  Chủ đề
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/85 outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Hợp tác phát triển dự án"
                />
              </div>

              <div className="mb-8 space-y-2">
                <label className="text-sm font-medium text-white/55">
                  Lời nhắn
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/85 outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Chào bạn, tôi muốn thảo luận về..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600/90 py-4 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-600 active:scale-[0.99]"
              >
                Gửi lời nhắn
              </button>

              <p className="mt-4 text-center text-xs text-white/35">
                Form hiện tại chỉ demo UI. Khi bạn muốn gửi thật, mình sẽ nối API
                route / service email cho bạn.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
