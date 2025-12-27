"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

import { education } from "@/lib/data/education";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/Motion";

const EducationSection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white">
            Trình độ học vấn
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/45 leading-relaxed">
            Quá trình học tập và những điểm nổi bật liên quan đến định hướng Frontend.
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto max-w-4xl space-y-6">
          {education.map((edu) => (
            <StaggerItem key={edu.id}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur transition hover:border-indigo-500/20">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                      <GraduationCap size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white/90">
                        {edu.school}
                      </h3>
                      <p className="mt-1 text-white/55">
                        {edu.degree} • {edu.major}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/45">
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={16} />
                          {edu.start} — {edu.end}
                        </span>
                        {edu.location && (
                          <span className="inline-flex items-center gap-2">
                            <MapPin size={16} />
                            {edu.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {edu.highlights?.length ? (
                  <ul className="mt-6 space-y-2 text-white/55">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default EducationSection;
