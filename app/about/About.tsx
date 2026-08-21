"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { site } from "@/data";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          About
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {site.description}
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm comfortable not knowing something yet — the important part is that I want to understand it.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
