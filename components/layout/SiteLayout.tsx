"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site, uiTranslations } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { SmoothScroll } from "./SmoothScroll";
import { BackToTop } from "./BackToTop";
import { BuildInfoClient } from "../build-info/BuildInfoClient";
import type { BuildInfo } from "@/lib/build-info";

interface SiteLayoutProps {
  children: React.ReactNode;
  buildInfo: BuildInfo;
}

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];

export const SiteLayout = ({
  children,
  buildInfo,
}: SiteLayoutProps) => {
  const { language, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const cvHref = language === "id" ? "/cv-id.html" : "/cv-en.html";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy detection
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of SECTIONS) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SmoothScroll />
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? "bg-dark-800/90 border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-dark-900/60 border-transparent"
        }`}
      >
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-lg md:text-xl font-bold font-sans text-accent hover:text-white transition-colors flex items-center gap-2"
            aria-label="Back to top"
          >
            <span>{site.name}</span>
          </a>

          {/* Desktop Navigation with Wayfinding Star Dot */}
          <nav className="hidden md:flex gap-6 text-sm font-mono text-gray-400">
            {SECTIONS.map((sectionId) => {
              const isActive = activeSection === sectionId;
              const label =
                uiTranslations.nav[sectionId as keyof typeof uiTranslations.nav][
                  language
                ];

              return (
                <a
                  key={sectionId}
                  href={`#${sectionId}`}
                  className={`glow-hover transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-accent font-semibold"
                      : "hover:text-accent"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_rgba(180,167,214,0.9)]" />
                  )}
                  {label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header CV Button */}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-lg border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 transition-all font-semibold"
          >
            <span>CV</span>
            <span>↗</span>
          </a>

          {/* Language Switcher Toggle */}
          <div className="flex items-center p-0.5 rounded-lg bg-dark-800/80 border border-white/[0.08] backdrop-blur-sm">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 sm:px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                language === "en"
                  ? "bg-accent text-dark-900 font-bold shadow-[0_0_10px_rgba(180,167,214,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("id")}
              className={`px-2 sm:px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                language === "id"
                  ? "bg-accent text-dark-900 font-bold shadow-[0_0_10px_rgba(180,167,214,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Ganti ke Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-gray-400">
            <Link
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover hover:text-accent transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover hover:text-accent transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-dark-800 border border-white/[0.08] text-gray-300 hover:text-white text-sm font-mono min-w-[38px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Backdrop & Content */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden animate-fade-in"
          />
          <div className="fixed inset-x-0 top-[56px] z-40 bg-dark-900/95 border-b border-white/[0.08] p-5 sm:p-6 backdrop-blur-xl md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-3 font-mono text-sm">
              {SECTIONS.map((sectionId) => {
                const isActive = activeSection === sectionId;
                const label =
                  uiTranslations.nav[sectionId as keyof typeof uiTranslations.nav][
                    language
                  ];

                return (
                  <a
                    key={sectionId}
                    href={`#${sectionId}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-dark-800 text-accent font-semibold border border-accent/30"
                        : "text-gray-300 hover:bg-dark-800 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-accent text-dark-900 font-semibold text-xs flex items-center gap-1 font-mono shadow-[0_0_10px_rgba(180,167,214,0.3)]"
                >
                  <span>{language === "id" ? "Lihat CV ATS" : "View ATS CV"}</span>
                  <span>↗</span>
                </a>
                <div className="flex gap-4 text-xs text-gray-400">
                  <Link href={site.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Link>
                  <Link href={site.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}

      <main className="relative z-10">{children}</main>

      <BackToTop />

      <footer className="relative z-40 py-8 px-4 sm:px-6">
        <BuildInfoClient buildInfo={buildInfo} />
      </footer>
    </>
  );
};
