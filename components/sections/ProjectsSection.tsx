import React from "react";
import Link from "next/link";

import { projects } from "../../lib/data/projects";
import ProjectCard from "../cards/ProjectCard";
import { FadeIn } from "../motion/Motion";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              Dự án tiêu biểu
            </h2>
            <p className="mt-4 leading-relaxed text-white/55">
              Một số sản phẩm thực tế tôi đã xây dựng từ ý tưởng cho đến khi vận
              hành.
            </p>
          </FadeIn>

          <FadeIn>
            <Link
              href="/projects"
              className="text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Xem tất cả dự án &rarr;
            </Link>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
