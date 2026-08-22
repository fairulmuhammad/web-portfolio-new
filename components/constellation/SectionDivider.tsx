"use client";

import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 flex items-center justify-center pointer-events-none">
      {/* Ethereal constellation gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Center glowing starlight node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        whileInView={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(180,167,214,0.9)]"
      />

      {/* Tiny constellation companion dots */}
      <div className="absolute left-[35%] w-1 h-1 rounded-full bg-accent/40" />
      <div className="absolute right-[35%] w-1 h-1 rounded-full bg-accent/40" />
    </div>
  );
};
