"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Certificate } from "@/types";
import { ScaleIn } from "@/components/motion/Motion";
import { asset } from "@/lib/utils/asset";

type Props = {
  certificate: Certificate;
};

const CertificateCard: React.FC<Props> = ({ certificate }) => {
  const verifyHref = certificate.verifyUrl && certificate.verifyUrl !== "#" ? certificate.verifyUrl : "";
  const canVerify = Boolean(verifyHref);

  return (
    <ScaleIn className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-indigo-500/50">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={asset(certificate.imageUrl)}
         // ✅ dùng imageUrl
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
            {certificate.issuer}
          </span>
          <span className="text-xs text-zinc-500">{certificate.date}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-indigo-400 line-clamp-2">
          {certificate.title}
        </h3>

        <div className="mt-4 flex items-center gap-4">
          {/* ✅ giữ chỗ Verify luôn hiện */}
          {canVerify ? (
            <a
              href={verifyHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <ExternalLink size={16} /> Verify
            </a>
          ) : (
            <span className="flex items-center gap-1 text-sm font-medium text-zinc-500 opacity-60">
              <ExternalLink size={16} /> Verify
            </span>
          )}
        </div>
      </div>
    </ScaleIn>
  );
};

export default CertificateCard;
