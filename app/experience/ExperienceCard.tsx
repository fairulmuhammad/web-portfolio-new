"use client";

import { Experience as ExperienceType } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

interface ExperienceCardProps {
  experience: ExperienceType;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { language } = useLanguage();

  return (
    <div className="relative border-l-2 border-white/[0.1] pl-6 py-3 hover:border-accent/50 transition-colors group">
      {/* Constellation node on the timeline line */}
      <div className="absolute -left-[5px] top-4 w-2 h-2 rounded-full bg-dark-900 border border-gray-600 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(180,167,214,0.8)] transition-all duration-300" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
          {experience.role[language]}
        </h3>
        <span className="text-sm text-gray-500 font-mono">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>
      <p className="text-accent mb-2 font-medium">{experience.organization}</p>
      <p className="text-gray-400 leading-relaxed">{experience.description[language]}</p>
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-dark-700/80 text-gray-300 text-xs rounded border border-white/[0.06] font-mono group-hover:border-accent/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
