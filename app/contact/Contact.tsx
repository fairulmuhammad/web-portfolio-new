"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { site, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {uiTranslations.contact.heading[language]}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {uiTranslations.contact.subtitle[language]}
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`mailto:${site.email}`}
            className="glow-hover shooting-star-hover text-accent hover:text-accent-light text-base sm:text-xl md:text-2xl font-mono px-5 py-3 rounded-xl bg-dark-800/80 border border-white/[0.08] hover:border-accent/40 shadow-[0_0_15px_rgba(180,167,214,0.15)] transition-all max-w-full break-all"
          >
            {site.email}
          </a>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 font-mono text-sm">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-gray-400 hover:text-accent transition-colors py-1 flex items-center gap-1"
            >
              <span>GitHub</span>
              <span>↗</span>
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-gray-400 hover:text-accent transition-colors py-1 flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </Link>
            <Link
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-gray-400 hover:text-accent transition-colors py-1 flex items-center gap-1"
            >
              <span>Resume PDF</span>
              <span>↗</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
