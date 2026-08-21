"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { site } from "@/data";
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

  return (
    <>
      <SmoothScroll />
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-sm transition-colors duration-300 ${navInView ? 'bg-dark-800/70' : 'bg-dark-900/50'}`}
        style={{
          boxShadow: navInView
            ? "0 4px 20px rgba(0, 0, 0, 0.2)"
            : "none",
        }}
      >
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="text-xl font-bold font-sans text-accent hover:text-white transition-colors"
            aria-label="Back to top"
          >
            {site.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-mono text-gray-400">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="relative z-40 py-8 px-6">
        <BuildInfoClient buildInfo={buildInfo} />
      </footer>
    </>
  );
};
