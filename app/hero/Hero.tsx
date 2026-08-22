"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 relative"
    >
      <div className="text-center max-w-3xl relative z-10">
        {/* Constellation decorative motif */}
        <motion.div
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.35 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Constellation nodes */}
            <circle cx="40" cy="60" r="1.5" fill="#B4A7D6" opacity="0.7" />
            <circle cx="80" cy="30" r="1.2" fill="#B4A7D6" opacity="0.5" />
            <circle cx="120" cy="50" r="2.0" fill="#B4A7D6" opacity="0.8" />
            <circle cx="100" cy="90" r="1.4" fill="#B4A7D6" opacity="0.6" />
            <circle cx="150" cy="70" r="1.2" fill="#B4A7D6" opacity="0.4" />
            <circle cx="60" cy="100" r="1.0" fill="#B4A7D6" opacity="0.5" />
            <circle cx="140" cy="110" r="1.5" fill="#B4A7D6" opacity="0.6" />
            {/* Constellation lines */}
            <line x1="40" y1="60" x2="80" y2="30" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
            <line x1="80" y1="30" x2="120" y2="50" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
            <line x1="120" y1="50" x2="100" y2="90" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
            <line x1="100" y1="90" x2="60" y2="100" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
            <line x1="120" y1="50" x2="150" y2="70" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
            <line x1="100" y1="90" x2="140" y2="110" stroke="#B4A7D6" strokeWidth="0.6" opacity="0.25" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tight text-white relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-inter)",
            textShadow:
              "0 0 40px rgba(180, 167, 214, 0.15), 0 0 80px rgba(180, 167, 214, 0.08)",
          }}
        >
          {site.name}
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {site.tagline[language]}
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <a
            href="#projects"
            className="shooting-star-hover px-6 py-3 bg-accent text-dark-900 font-semibold rounded-lg hover:bg-accent/90 shadow-[0_0_20px_rgba(180,167,214,0.3)] transition-all"
          >
            {uiTranslations.hero.projectsCta[language]}
          </a>
          <a
            href="#about"
            className="shooting-star-hover px-6 py-3 border border-white/[0.15] bg-dark-800/40 text-gray-200 rounded-lg hover:border-accent hover:text-accent backdrop-blur-sm transition-colors"
          >
            {uiTranslations.hero.aboutCta[language]}
          </a>
        </motion.div>

        {/* Subtle scroll hint */}
        <motion.div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
