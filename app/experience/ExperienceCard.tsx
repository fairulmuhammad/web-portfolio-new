"use client";

import { Experience as ExperienceType } from "@/data";

interface ExperienceCardProps {
  experience: ExperienceType;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="border-l-2 border-gray-800 pl-6 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
        <span className="text-sm text-gray-500 font-mono">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>
      <p className="text-accent mb-2">{experience.organization}</p>
      <p className="text-gray-400">{experience.description}</p>
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
