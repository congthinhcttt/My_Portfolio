
import React from 'react';
import { projects } from '../../lib/data/projects';
import ProjectCard from '../../components/cards/ProjectCard';
import { FadeIn } from '../../components/motion/Motion';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Danh sách các dự án tôi đã thực hiện.",
};

const ProjectsPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sản phẩm của tôi</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Danh sách các dự án tôi đã thực hiện, bao gồm cả dự án cá nhân và dự án cộng tác với các tổ chức.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
