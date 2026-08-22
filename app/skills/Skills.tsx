"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skillGroups, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {uiTranslations.skills.heading[language]}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category.en}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group border border-white/[0.08] rounded-xl p-6 bg-dark-800/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent group-hover:shadow-[0_0_6px_rgba(180,167,214,0.8)] transition-all"></span>
                {group.category[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-700/80 text-gray-300 text-sm rounded-md border border-white/[0.06] font-mono hover:border-accent/30 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
