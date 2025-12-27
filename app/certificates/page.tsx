
import React from 'react';
import { certificates } from '../../lib/data/certificates';
import CertificateCard from '../../components/cards/CertificateCard';
import { FadeIn } from '../../components/motion/Motion';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Các chứng chỉ và thành tựu của tôi.",
};

const CertificatesPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thành tựu & Chứng chỉ</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Ghi nhận những nỗ lực học tập và các cột mốc trong sự nghiệp của tôi.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CertificatesPage;
