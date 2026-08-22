"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { projects, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "./ProjectCard";

type FilterType = "featured" | "all" | "application" | "learning" | "experiment";

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("featured");

  const filterLabels = {
    featured: { en: "Featured", id: "Unggulan" },
    all: { en: "All Projects", id: "Semua Proyek" },
    application: { en: "Applications", id: "Aplikasi" },
    learning: { en: "DevOps & Labs", id: "DevOps & Lab" },
    experiment: { en: "Experiments", id: "Eksperimen" },
  };

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "featured") return p.featured;
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {uiTranslations.projects.heading[language]}
            </motion.h2>
          </div>

          {/* Minimalist Filter Pill Group */}
          <div className="flex flex-wrap gap-2 p-1 bg-dark-800/80 border border-white/[0.08] rounded-xl backdrop-blur-sm">
            {(["featured", "all", "application", "learning", "experiment"] as FilterType[]).map((filter) => {
              const count =
                filter === "featured"
                  ? projects.filter((p) => p.featured).length
                  : filter === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === filter).length;

              if (count === 0) return null;

              const isSelected = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-accent text-dark-900 font-semibold shadow-[0_0_12px_rgba(180,167,214,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-dark-700/50"
                  }`}
                >
                  <span>{filterLabels[filter][language]}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-dark-900/20 text-dark-900"
                        : "bg-dark-700 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
