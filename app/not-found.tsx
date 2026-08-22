import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold font-mono text-accent mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8 font-mono">Page not found in this constellation.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-accent text-dark-900 font-semibold font-mono hover:bg-accent-light transition-all"
      >
        ← Return to Orbit
      </Link>
    </div>
  );
}
