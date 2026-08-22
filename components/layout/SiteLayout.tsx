"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { site, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { SmoothScroll } from "./SmoothScroll";
import { BuildInfoClient } from "../build-info/BuildInfoClient";
import type { BuildInfo } from "@/lib/build-info";

interface SiteLayoutProps {
  children: React.ReactNode;
  buildInfo: BuildInfo;
}

export const SiteLayout = ({
  children,
  buildInfo,
}: SiteLayoutProps) => {
  const [navRef, navInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const { language, setLanguage } = useLanguage();

  return (
    <>
      <SmoothScroll />
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md transition-all duration-300 border-b ${
          navInView
            ? "bg-dark-800/85 border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "bg-dark-900/60 border-transparent"
        }`}
      >
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-xl font-bold font-sans text-accent hover:text-white transition-colors"
            aria-label="Back to top"
          >
            {site.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-mono text-gray-400">
            <a href="#about" className="glow-hover hover:text-accent transition-colors">
              {uiTranslations.nav.about[language]}
            </a>
            <a href="#experience" className="glow-hover hover:text-accent transition-colors">
              {uiTranslations.nav.experience[language]}
            </a>
            <a href="#projects" className="glow-hover hover:text-accent transition-colors">
              {uiTranslations.nav.projects[language]}
            </a>
            <a href="#skills" className="glow-hover hover:text-accent transition-colors">
              {uiTranslations.nav.skills[language]}
            </a>
            <a href="#contact" className="glow-hover hover:text-accent transition-colors">
              {uiTranslations.nav.contact[language]}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher Toggle */}
          <div className="flex items-center p-0.5 rounded-lg bg-dark-800/80 border border-white/[0.08] backdrop-blur-sm">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                language === "en"
                  ? "bg-accent text-dark-900 font-semibold shadow-[0_0_10px_rgba(180,167,214,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                language === "id"
                  ? "bg-accent text-dark-900 font-semibold shadow-[0_0_10px_rgba(180,167,214,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Ganti ke Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-sm">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-gray-400 hover:text-accent transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover text-gray-400 hover:text-accent transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-40 py-8 px-6">
        <BuildInfoClient buildInfo={buildInfo} />
      </footer>
    </>
  );
};
