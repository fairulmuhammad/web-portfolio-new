"use client";

import { Project as ProjectType, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language } = useLanguage();

  return (
    <div className="group relative border border-white/[0.08] rounded-xl p-6 bg-dark-800/60 backdrop-blur-sm hover:border-accent/40 hover:bg-dark-800/90 transition-all duration-300">
      {/* Subtle corner starlight node */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(180,167,214,0.8)] transition-all duration-300" />
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 font-mono mt-1">
            {project.year} • {project.category}
          </p>
        </div>
      </div>
      <p className="text-gray-400 mb-4 leading-relaxed">{project.description[language]}</p>
      {project.problem && (
        <div className="mb-4">
          <h4 className="text-xs font-mono text-accent/80 tracking-wider mb-1">
            {uiTranslations.projects.problem[language]}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.problem[language]}</p>
        </div>
      )}
      {project.solution && (
        <div className="mb-4">
          <h4 className="text-xs font-mono text-accent/80 tracking-wider mb-1">
            {uiTranslations.projects.solution[language]}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.solution[language]}</p>
        </div>
      )}
      {project.result && (
        <div className="mb-4">
          <h4 className="text-xs font-mono text-accent/80 tracking-wider mb-1">
            {uiTranslations.projects.result[language]}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.result[language]}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-dark-700/80 text-gray-300 text-xs rounded border border-white/[0.06] font-mono group-hover:border-accent/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.repositoryUrl && (
          <Link
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover text-accent hover:underline text-sm font-mono"
          >
            {uiTranslations.projects.github[language]} ↗
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover text-accent hover:underline text-sm font-mono"
          >
            {uiTranslations.projects.liveDemo[language]} ↗
          </Link>
        )}
      </div>
    </div>
  );
};
