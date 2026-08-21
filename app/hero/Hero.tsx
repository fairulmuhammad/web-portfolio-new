"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site } from "@/data";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-3xl">
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-gray-400 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {site.tagline}
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#about"
            className="px-6 py-3 bg-accent text-dark-900 font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
