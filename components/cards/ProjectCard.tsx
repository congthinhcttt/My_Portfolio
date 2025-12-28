import React from "react";
import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/types";
import { ScaleIn } from "@/components/motion/Motion";
import { asset, href, isExternalUrl } from "@/lib/utils/asset";

interface ProjectCardProps {
  project: Project;
}

// fallback link để vẫn click được
const FALLBACK_DEMO = "/projects";
const FALLBACK_CODE = "/projects";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageSrc =
    project.imageUrl && project.imageUrl.trim() !== ""
      ? asset(project.imageUrl)
      : asset("/placeholder.jpg");

  // Demo link
  const demoHrefRaw =
    project.demoUrl && project.demoUrl.trim() !== "" ? project.demoUrl.trim() : FALLBACK_DEMO;

  const demoHref = isExternalUrl(demoHrefRaw) ? demoHrefRaw : href(demoHrefRaw);

  // Code link
  const codeHrefRaw =
    project.sourceUrl && project.sourceUrl.trim() !== "" ? project.sourceUrl.trim() : FALLBACK_CODE;

  const codeHref = isExternalUrl(codeHrefRaw) ? codeHrefRaw : href(codeHrefRaw);

  return (
    <ScaleIn className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-indigo-500/50">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        {/* Tech stack */}
        <div className="mb-3 flex flex-wrap gap-2">
          {(project.techStack ?? []).map((t) => (
            <span
              key={t}
              className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-indigo-400">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-zinc-400">{project.description}</p>

        {/* Demo + Code */}
        <div className="flex items-center gap-4">
          <a
            href={demoHref}
            target={isExternalUrl(demoHref) ? "_blank" : undefined}
            rel={isExternalUrl(demoHref) ? "noreferrer" : undefined}
            className="flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            <ExternalLink size={16} /> Demo
          </a>

          <a
            href={codeHref}
            target={isExternalUrl(codeHref) ? "_blank" : undefined}
            rel={isExternalUrl(codeHref) ? "noreferrer" : undefined}
            className="flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </ScaleIn>
  );
};

export default ProjectCard;
