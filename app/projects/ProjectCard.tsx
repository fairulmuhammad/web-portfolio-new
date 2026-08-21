"use client";

import { Project as ProjectType } from "@/data";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-gray-800 rounded-xl p-6 bg-dark-800 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-gray-500 font-mono mt-1">
            {project.year} • {project.category}
          </p>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      {project.problem && (
        <div className="mb-4">
          <h4 className="text-sm font-mono text-gray-500 mb-1">PROBLEM</h4>
          <p className="text-gray-400 text-sm">{project.problem}</p>
        </div>
      )}
      {project.solution && (
        <div className="mb-4">
          <h4 className="text-sm font-mono text-gray-500 mb-1">SOLUTION</h4>
          <p className="text-gray-400 text-sm">{project.solution}</p>
        </div>
      )}
      {project.result && (
        <div className="mb-4">
          <h4 className="text-sm font-mono text-gray-500 mb-1">RESULT</h4>
          <p className="text-gray-400 text-sm">{project.result}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded font-mono"
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
            className="text-accent hover:underline text-sm"
          >
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};
