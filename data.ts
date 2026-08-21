// Portfolio data — source of truth for all public content.
// Do not hardcode in components; edit here to update CV.

export const site = {
  name: "Fairul",
  fullName: "Muhammad Fairul Imron Jalayasi",
  title: "Software Engineer",
  tagline:
    "Curious about how things work. Deliberate about how they're built.",
  description:
    "Software engineer exploring web development, infrastructure, and everything in between.",
  location: "Yogyakarta, Indonesia",
  email: "muhammadfairul13@gmail.com",
  github: "https://github.com/fairulmuhammad",
  linkedin: "https://www.linkedin.com/in/muhammad-fairul-b5aa37312/",
  cv: "/cv-muhammad-fairul.pdf",
  social: {
    github: "https://github.com/fairulmuhammad",
    linkedin: "https://www.linkedin.com/in/muhammad-fairul-b5aa37312/",
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  category: "application" | "infrastructure" | "learning" | "experiment";
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year?: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  technologies?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "kabar-jogja",
    title: "Kabar Jogja — News Portal CMS",
    description:
      "A full-stack news portal with a role-based editorial workflow for RBTV Jogja.",
    problem:
      "RBTV Jogja needed a modern news CMS with a structured editorial pipeline: writers draft, supervisors review, redaktur approves or archives.",
    solution:
      "Built a Laravel 12 application with a Filament admin panel. Implemented a 9-state editorial workflow as a state machine with policy-gated transitions. Each role controls only the transitions appropriate to their position — writers draft and revise, editors review and approve, redaktur performs final review and publish/archive decisions.",
    result:
      "A working demo environment with RBAC, audit trail, multi-language support (EN/ID), 2FA, ad tracking, and performance indexing. Containerized with Docker Compose (dev + Octane/FrankenPHP production variant).",
    category: "application",
    technologies: [
      "Laravel 12",
      "Filament 4.8",
      "PHP 8.2",
      "MySQL 8",
      "Redis 7",
      "Docker",
      "FrankenPHP",
      "Laravel Octane",
      "Tailwind CSS",
      "Pest/PHPUnit",
      "RBAC",
      "2FA",
      "i18n",
      "CI/CD",
    ],
    repositoryUrl: "https://github.com/fairulmuhammad/magang-rbtv",
    featured: true,
    year: "2025–2026",
  },
  {
    id: "internship-tracker",
    title: "Internship Progress Tracker",
    description:
      "A web + mobile app for managing internship tasks and tracking progress.",
    problem:
      "Interns need a simple way to log tasks, track time, and journal reflections — both on desktop and on the go.",
    solution:
      "Built a modular vanilla-JavaScript web dashboard backed by Firebase (Auth + Firestore) and a companion Expo React Native mobile app sharing the same backend. Implemented Google Sign-In with email/password account linking, plus handling the edge case of provider conflicts when accounts are merged.",
    result:
      "Live on GitHub Pages (HTTP 200 verified). Both web and mobile apps are functional; the mobile app includes task management, progress charts, reflection journal, and push notifications.",
    category: "application",
    technologies: [
      "Vanilla JS",
      "Firebase Auth",
      "Firestore",
      "Expo SDK 54",
      "React Native",
      "zustand",
      "GitHub Actions",
    ],
    repositoryUrl: "https://github.com/fairulmuhammad/internship-progres-tracker",
    liveUrl: "https://fairulmuhammad.github.io/internship-progres-tracker/",
    featured: true,
    year: "2025–2026",
  },
  {
    id: "devops-lab",
    title: "Test-Learn-Devops",
    description:
      "An 8-module DevOps learning laboratory executed on a live homelab server.",
    problem:
      "Learning DevOps in isolation is abstract — real understanding comes from running it on real infrastructure and hitting real problems.",
    solution:
      "Built a hands-on curriculum (Linux → shell → systemd → networking → Docker → CI/CD → monitoring → security) with 8 labs and a capstone. Each module is executed end-to-end on the ubuntu server (1.7 GB RAM) that hosts the entire homelab. The capstone deploys a Flask hello-app with a full CI/CD pipeline: GitHub-hosted runner for CI, self-hosted runner for CD via systemd-managed Docker Compose.",
    result:
      "All 8 modules and labs completed. The OOM incident during the Docker lab — mysqld killed by the kernel under memory pressure — was documented as a troubleshooting case. Self-hosted runner is registered and active; capstone deploy is green.",
    category: "learning",
    technologies: [
      "Python",
      "Flask",
      "Docker",
      "GitHub Actions",
      "systemd",
      "Tailscale",
      "Bash",
    ],
    repositoryUrl: "https://github.com/fairulmuhammad/Test-Learn-Devops",
    featured: true,
    year: "2026",
  },
  {
    id: "inventory-app",
    title: "Inventory App (DevOps UAS)",
    description:
      "A DevOps-focused inventory microservice with full CI/CD, security scanning, and Kubernetes deployment.",
    problem:
      "An academic final project (UAS) requiring demonstration of a complete DevOps toolchain: CI, security scanning, monitoring, logging, and container orchestration.",
    solution:
      "Built a Python/Flask inventory API with a GitHub Actions pipeline that runs build, tests, security scans (Trivy, Bandit, SonarQube), and deploys to a Kubernetes cluster. Configured Prometheus/Grafana for metrics and Loki for log aggregation. Wrote k8s manifests for the deployment.",
    result:
      "Complete toolchain demonstrated. Notable: resolved a Grafana data-source connectivity issue that blocked the dashboards.",
    category: "experiment",
    technologies: [
      "Python",
      "Flask",
      "Docker",
      "GitHub Actions",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Loki",
      "Trivy",
      "SonarQube",
      "Bandit",
    ],
    repositoryUrl: "https://github.com/fairulmuhammad/inventory-app",
    featured: false,
    year: "2025",
  },
  {
    id: "gamble",
    title: "Gamble — Gaming Algorithms",
    description:
      "An educational platform demonstrating how gambling algorithms work — RTP, house edge, and fraud detection.",
    problem:
      "Understanding probability in games of chance is more intuitive when you can see the math in action.",
    solution:
      "Built a FastAPI platform with a slot machine (96% RTP, weighted symbol distribution), blackjack (basic strategy matrix, 0.5% house edge), and European roulette. Added a fraud-detection module using z-score anomaly scoring on betting velocity, win-rate, and stake progression. Dockerized.",
    result:
      "A working educational platform that demonstrates calibrated RNG, house-edge math, and anomaly detection — all in a single repo.",
    category: "experiment",
    technologies: ["Python", "FastAPI", "SQLite", "WebSockets", "Docker"],
    repositoryUrl: "https://github.com/fairulmuhammad/gamble",
    featured: false,
    year: "2025",
  },
];

export const experiences: Experience[] = [
  {
    id: "rbtv",
    organization: "RBTV Jogja",
    role: "Software Engineer (Intern)",
    startDate: "2025-10",
    endDate: "2026-06",
    location: "Yogyakarta, Indonesia",
    description:
      "Designed and implemented a full-stack news portal CMS with a role-based editorial workflow. Handled backend engineering, database design, testing, Docker containerization, and CI/CD. Used AI as a development partner throughout — designed, directed, implemented, tested, debugged, and iterated.",
    technologies: [
      "Laravel 12",
      "Filament",
      "PHP 8.2",
      "MySQL",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    id: "amikom",
    organization: "Universitas Amikom Yogyakarta",
    role: "Student — D3 Teknik Informatika",
    startDate: "2023",
    endDate: "2026",
    location: "Yogyakarta, Indonesia",
    description:
      "Studied computer science with a focus on software engineering, databases, networking, and DevOps. The Kabar Jogja project became the basis for the final thesis (Tugas Akhir).",
    technologies: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Backend",
    items: ["Laravel", "FastAPI", "Flask", "Express", "Filament"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite", "Redis", "Firestore"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Docker Compose", "Kubernetes", "systemd", "Tailscale"],
  },
  {
    category: "CI/CD & DevOps",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Prometheus",
      "Grafana",
      "Loki",
      "Trivy",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vanilla JS"],
  },
];
