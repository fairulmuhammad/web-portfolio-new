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
    <div className="group relative border border-white/[0.08] rounded-xl p-5 sm:p-6 bg-dark-800/60 backdrop-blur-sm hover:border-accent/40 hover:bg-dark-800/90 transition-all duration-300 flex flex-col h-full justify-between">
      {/* Subtle corner starlight node */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(180,167,214,0.8)] transition-all duration-300" />

      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-mono mt-0.5">
              {project.year} • {project.category}
            </p>
          </div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description[language]}</p>

        {project.images && project.images.length > 0 && (
          <div className="mb-4 grid grid-cols-2 gap-2">
            {project.images.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative aspect-video overflow-hidden rounded-lg border border-white/[0.06]">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Structured Problem / Solution / Result blocks */}
        {project.problem && (
          <div className="mb-3 p-2.5 sm:p-3 bg-dark-900/40 rounded-lg border border-white/[0.04]">
            <h4 className="text-[11px] font-mono text-accent tracking-wider mb-0.5 font-bold uppercase">
              {uiTranslations.projects.problem[language]}
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.problem[language]}</p>
          </div>
        )}
        {project.solution && (
          <div className="mb-3 p-2.5 sm:p-3 bg-dark-900/40 rounded-lg border border-white/[0.04]">
            <h4 className="text-[11px] font-mono text-accent tracking-wider mb-0.5 font-bold uppercase">
              {uiTranslations.projects.solution[language]}
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.solution[language]}</p>
          </div>
        )}
        {project.result && (
          <div className="mb-4 p-2.5 sm:p-3 bg-dark-900/40 rounded-lg border border-white/[0.04]">
            <h4 className="text-[11px] font-mono text-accent tracking-wider mb-0.5 font-bold uppercase">
              {uiTranslations.projects.result[language]}
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.result[language]}</p>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-dark-700/80 text-gray-300 text-xs rounded border border-white/[0.06] font-mono group-hover:border-accent/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2 border-t border-white/[0.04]">
          {project.repositoryUrl && (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-accent hover:underline text-xs sm:text-sm font-mono py-1 flex items-center gap-1"
            >
              <span>{uiTranslations.projects.github[language]}</span>
              <span>↗</span>
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-accent hover:underline text-xs sm:text-sm font-mono py-1 flex items-center gap-1"
            >
              <span>{uiTranslations.projects.liveDemo[language]}</span>
              <span>↗</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
