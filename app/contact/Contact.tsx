"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/data";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-32 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reach out if you have questions, opportunities, or just want to connect.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:underline text-xl font-mono"
          >
            {site.email}
          </a>
          <div className="flex gap-6 mt-4">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
