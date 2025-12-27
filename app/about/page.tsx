import React from "react";
import { profile } from "../../lib/data/profile";
import { FadeIn } from "../../components/motion/Motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Câu chuyện và hành trình của tôi.",
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 text-zinc-300 text-[18px] md:text-[19px] leading-[1.9]">
    <span className="text-indigo-300 font-black mt-[2px] drop-shadow-[0_0_10px_rgba(99,102,241,0.55)]">
      ✦
    </span>
    <span>{children}</span>
  </div>
);

const AboutPage: React.FC = () => {
  const avatarSrc =
    profile.avatarUrl?.startsWith("/") ? profile.avatarUrl : "/image/profile/avatar.jpg";

  return (
    <main className="pt-28 pb-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeIn className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Câu chuyện của tôi
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            Mình là sinh viên mới tốt nghiệp và hiện đang thực tập. Mình bắt đầu với Frontend (React/Next.js)
            và đang từng bước mở rộng sang Fullstack bằng cách học Backend, Database và cách triển khai sản phẩm
            từ đầu đến cuối.
          </p>
        </FadeIn>

        {/* 2 columns */}
        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
          {/* Text */}
          <FadeIn className="lg:col-span-7">
            <div
              className="prose prose-invert max-w-none text-zinc-300
              prose-p:text-[18px] md:prose-p:text-[19px]
              prose-p:leading-[1.9] prose-p:my-5"
            >
              <p className="indent-8">
                Trong quá trình học và làm dự án, mình rèn thói quen làm việc có hệ thống:{" "}
                <strong className="text-zinc-100">đọc yêu cầu kỹ</strong> →{" "}
                <strong className="text-zinc-100">chia nhỏ task</strong> →{" "}
                <strong className="text-zinc-100">làm phần “cốt lõi” trước</strong> rồi mới tối ưu UI/UX.
              </p>

              <div className="not-prose mt-5 space-y-3">
                <Bullet>
                  Mình hay viết <strong className="text-zinc-100">checklist</strong> để tránh thiếu case: validation,
                  empty state, error state.
                </Bullet>
                <Bullet>
                  Tự <strong className="text-zinc-100">test lại theo luồng người dùng</strong> trước khi bàn giao.
                </Bullet>
              </div>

              <p className="indent-8">
                Mình thích môi trường có <strong className="text-zinc-100">review code</strong> vì giúp tiến bộ nhanh và
                làm việc chuyên nghiệp hơn. Khi gặp lỗi, mình ưu tiên debug theo quy trình rõ ràng để tránh sửa mò.
              </p>

              <div className="not-prose mt-5 space-y-3">
                <Bullet>
                  Đặt tên biến/hàm theo <strong className="text-zinc-100">nghiệp vụ</strong>, tách component/hàm nhỏ để
                  dễ đọc.
                </Bullet>
                <Bullet>
                  Giữ code nhất quán bằng <strong className="text-zinc-100">lint/format</strong>.
                </Bullet>
                <Bullet>
                  Debug theo hướng:{" "}
                  <strong className="text-zinc-100">đọc log → khoanh vùng → tái hiện → sửa → test lại</strong>.
                </Bullet>
              </div>

              <p className="indent-8">
                Về kỹ thuật, ngoài React/Next.js, mình đang tập trung nâng cấp Fullstack với{" "}
                <strong className="text-zinc-100">PHP Laravel</strong> để hiểu sâu “phía sau” của sản phẩm.
              </p>

              <div className="not-prose mt-5 space-y-3">
                <Bullet>Thiết kế route/controller, validate dữ liệu, làm CRUD và auth cơ bản.</Bullet>
                <Bullet>
                  Tối ưu truy vấn với ORM, và thống nhất format <strong className="text-zinc-100">API response</strong> để
                  frontend xử lý dễ.
                </Bullet>
              </div>

              <p className="indent-8">
                Trong <strong className="text-zinc-100">3–6 tháng tới</strong>, mục tiêu của mình là hoàn thiện một mini
                product end-to-end: phân tích yêu cầu → thiết kế database → xây REST API → làm UI → phân quyền cơ bản → deploy.
                Mình tin “làm tốt” đến từ <strong className="text-zinc-100">kỷ luật</strong>,{" "}
                <strong className="text-zinc-100">cách tổ chức code</strong> và{" "}
                <strong className="text-zinc-100">học hỏi mỗi ngày</strong>.
              </p>

              {/* Highlight box để bớt đơn điệu */}
              <div className="not-prose mt-7 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-zinc-200 text-[16px] md:text-[17px] leading-[1.8] m-0">
                  <span className="font-black text-indigo-300">Tư duy của mình:</span>{" "}
                  làm đúng luồng nghiệp vụ, code rõ ràng, test kỹ — rồi mới tối ưu trải nghiệm.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Image - smaller & aligned with text */}
          <FadeIn transition={{ delay: 0.15 }} className="lg:col-span-5">
            <div className="lg:pl-4">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl bg-zinc-900/30 mx-auto lg:mx-0 w-full max-w-[360px]">
                <div className="aspect-[4/4]">
                  <img src={avatarSrc} alt={profile.name} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 w-full max-w-[360px] mx-auto lg:mx-0">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300/80">
                  Focus hiện tại
                </p>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  Frontend vững nền (React/Next.js) → mở rộng Backend (Laravel) và Database để làm Fullstack.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/10" />

        {/* Internship Section */}
        <div className="mt-14">
          <FadeIn className="max-w-3xl mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Thực tập
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Hiện tại mình đang thực tập tại{" "}
              <span className="text-white font-semibold">Công ty Cổ phần Doli</span>, tham gia phát triển dự án{" "}
              <span className="text-white font-semibold">MLink – Siêu kết nối kỹ thuật với AI &amp; Kỹ sư</span>{" "}
              phục vụ các nghiệp vụ{" "}
              <span className="text-white font-semibold">Mua hàng – Bán hàng – Dịch vụ kỹ thuật</span>. Dự án giúp mình
              nâng cấp từ Frontend lên Fullstack bằng cách làm việc trực tiếp với backend và luồng dữ liệu thực tế.
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300/80">
                  Công ty &amp; Dự án
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-white">Doli • MLink</h3>

                <div className="mt-5 space-y-3">
                  <Bullet>Tham gia phát triển tính năng theo yêu cầu nghiệp vụ.</Bullet>
                  <Bullet>Phối hợp team hoàn thiện luồng mua–bán–dịch vụ kỹ thuật.</Bullet>
                  <Bullet>Thực hành quy trình: nhận task → triển khai → test → bàn giao.</Bullet>
                </div>
              </div>
            </FadeIn>

            <FadeIn transition={{ delay: 0.1 }}>
              <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300/80">
                  Công việc chính
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-white">Feature • Fix bug • Tối ưu</h3>

                <div className="mt-5 space-y-3">
                  <Bullet>Xây dựng UI/logic theo yêu cầu, đảm bảo đúng luồng nghiệp vụ.</Bullet>
                  <Bullet>Fix bug, refactor và cải thiện tính ổn định của hệ thống.</Bullet>
                  <Bullet>Tối ưu trải nghiệm sử dụng, xử lý state/loading/error.</Bullet>
                </div>
              </div>
            </FadeIn>

            <FadeIn transition={{ delay: 0.2 }}>
              <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300/80">
                  Công nghệ sử dụng
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-white">PHP • Laravel • XAMPP</h3>

                <div className="mt-5 space-y-3">
                  <Bullet>Backend: Laravel (routing, controller, validation, ORM).</Bullet>
                  <Bullet>Local: XAMPP (Apache/MySQL) để chạy &amp; test nhanh.</Bullet>
                  <Bullet>Làm việc với database và các luồng nghiệp vụ thực tế.</Bullet>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
