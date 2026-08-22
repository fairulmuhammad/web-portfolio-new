"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { uiTranslations } from "@/data";

interface EasterEggBadgeProps {
  activeEasterEgg: "cancer" | "moon" | null;
  onDismiss: () => void;
  onTriggerCancer: () => void;
}

export const EasterEggBadge = ({
  activeEasterEgg,
  onDismiss,
  onTriggerCancer,
}: EasterEggBadgeProps) => {
  const { language } = useLanguage();

  return (
    <>
      {/* Floating Easter Egg Discovery Alert */}
      <AnimatePresence>
        {activeEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] p-4 rounded-xl bg-dark-800/90 border border-accent/40 backdrop-blur-md shadow-[0_0_30px_rgba(180,167,214,0.25)] text-center"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold font-mono text-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                {activeEasterEgg === "cancer"
                  ? uiTranslations.easterEgg.cancerTitle[language]
                  : uiTranslations.easterEgg.moonTitle[language]}
              </span>
              <button
                onClick={onDismiss}
                className="text-xs text-gray-400 hover:text-white px-2 py-0.5 rounded bg-dark-700 font-mono transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-gray-300 mb-3 leading-relaxed">
              {activeEasterEgg === "cancer"
                ? uiTranslations.easterEgg.cancerDesc[language]
                : uiTranslations.easterEgg.moonDesc[language]}
            </p>
            <div className="flex justify-center gap-2">
              <button
                onClick={onDismiss}
                className="text-xs px-3 py-1 bg-accent/20 hover:bg-accent/30 text-accent rounded-md border border-accent/40 font-mono transition-all"
              >
                {uiTranslations.easterEgg.close[language]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Celestial Glyph in bottom-left */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={onTriggerCancer}
          title="♋ Reveal Constellation of Cancer"
          aria-label="Reveal Constellation of Cancer"
          className="group flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900/60 border border-white/[0.06] hover:border-accent/40 backdrop-blur-sm text-xs font-mono text-gray-500 hover:text-accent transition-all duration-300"
        >
          <span className="text-accent/70 group-hover:text-accent group-hover:scale-110 transition-transform">
            ♋
          </span>
          <span className="hidden sm:inline text-[11px] opacity-60 group-hover:opacity-100">
            Cancer 44°
          </span>
        </button>
      </div>
    </>
  );
};
