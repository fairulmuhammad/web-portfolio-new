"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {uiTranslations.about.heading[language]}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {site.description[language]}
        </motion.p>
        <motion.p
          className="text-base sm:text-lg text-gray-200 leading-relaxed mt-6 border-l-2 border-accent/60 pl-4 italic bg-dark-800/40 p-3 sm:p-4 rounded-r-lg border-y border-r border-white/[0.04]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {site.aboutPhilosophy[language]}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
