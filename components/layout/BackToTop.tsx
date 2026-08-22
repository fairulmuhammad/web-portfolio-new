"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 z-40 w-9 h-9 rounded-full bg-dark-800/90 border border-white/[0.1] hover:border-accent backdrop-blur-md flex items-center justify-center text-accent hover:text-white shadow-[0_0_15px_rgba(180,167,214,0.25)] hover:shadow-[0_0_20px_rgba(180,167,214,0.6)] transition-all duration-300 group"
          aria-label="Back to top"
          title="Return to top"
        >
          {/* Starlight icon */}
          <span className="text-sm font-bold font-mono transition-transform duration-300 group-hover:-translate-y-0.5">
            ↑
          </span>
          {/* Outer starlight pulse on hover */}
          <span className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
