"use client";

import { BuildInfo as BuildInfoType } from "@/lib/build-info";
import Link from "next/link";
import { motion } from "framer-motion";

interface BuildInfoClientProps {
  buildInfo: BuildInfoType;
}

export const BuildInfoClient = ({ buildInfo }: BuildInfoClientProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-4 right-4 text-xs text-gray-600 font-mono z-50"
    >
      <div className="flex items-center gap-2 bg-dark-900/70 px-3 py-1 rounded-md backdrop-blur-sm">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        <span>{buildInfo.environment.toUpperCase()}</span>
        {buildInfo.commitSha && <span>• {buildInfo.commitSha.substring(0, 7)}</span>}
        {buildInfo.branch && <span>• {buildInfo.branch}</span>}
      </div>
      {buildInfo.repository && (
        <Link
          href={`https://github.com/${buildInfo.repository}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="block mt-1 text-center hover:text-gray-400 transition-colors"
        >
          {buildInfo.repository}
        </Link>
      )}
    </motion.div>
  );
};
