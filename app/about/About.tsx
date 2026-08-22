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
      className="py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {uiTranslations.about.heading[language]}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {site.description[language]}
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed mt-6 border-l-2 border-accent/40 pl-4 italic"
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
