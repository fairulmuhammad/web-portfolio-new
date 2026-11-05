"use client";

import { Certification as CertificationType } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

interface CertificationCardProps {
  certification: CertificationType;
}

export const CertificationCard = ({ certification }: CertificationCardProps) => {
  const { language } = useLanguage();

  return (
    <div className="group relative border border-white/[0.08] rounded-xl overflow-hidden bg-dark-800/60 backdrop-blur-sm hover:border-accent/40 hover:bg-dark-800/90 transition-all duration-300 h-full flex flex-col">
      {/* Subtle corner starlight node */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(180,167,214,0.8)] transition-all duration-300 z-10" />

      {certification.image && (
        <div className="relative w-full h-40 overflow-hidden border-b border-white/[0.06]">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-accent-light transition-colors mb-1">
          {certification.title}
        </h3>
        <p className="text-accent text-sm mb-2 font-medium">{certification.issuer}</p>
        <p className="text-xs text-gray-400 font-mono mb-2">{certification.date}</p>
        {certification.description && (
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-auto">
            {certification.description[language]}
          </p>
        )}
      </div>
    </div>
  );
};
