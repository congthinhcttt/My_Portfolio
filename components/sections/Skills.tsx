"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/Motion";

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="relative bg-black/40 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Kỹ năng công nghệ</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/45">
            Bộ công cụ tôi sử dụng để giải quyết các bài toán kỹ thuật từ Front-end đến Back-end.
          </p>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
                {cat}
              </h3>

              <StaggerContainer className="space-y-8">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div className="group">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-semibold text-white/85 transition-colors group-hover:text-indigo-300">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-white/40">{skill.level}%</span>
                        </div>

                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                          />
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
