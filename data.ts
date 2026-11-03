// Portfolio data — source of truth for all public content.
// Supports English (EN) and Indonesian (ID).

export interface BilingualText {
  en: string;
  id: string;
}

export const site = {
  name: "fairulmuhammad",
  fullName: "Muhammad Fairul Imron Jalayasi",
  title: "Software Engineer",
  tagline: {
    en: "Curious about how things work. Deliberate about how they're built.",
    id: "Penasaran bagaimana sesuatu bekerja. Terukur dalam bagaimana membangunnya.",
  },
  description: {
    en: "Software engineer exploring web development, infrastructure, and everything in between.",
    id: "Software engineer yang mendalami pengembangan web, infrastruktur sistem, dan segala hal di antaranya.",
  },
  aboutPhilosophy: {
    en: "I'm comfortable not knowing something yet — the important part is that I want to understand it.",
    id: "Saya nyaman jika belum mengetahui sesuatu — yang terpenting adalah tekad untuk memahaminya.",
  },
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
  description: BilingualText;
  problem?: BilingualText;
  solution?: BilingualText;
  result?: BilingualText;
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
  role: BilingualText;
  startDate: string;
  endDate: string;
  location?: string;
  description: BilingualText;
  technologies?: string[];
}

export interface SkillGroup {
  category: BilingualText;
  items: string[];
}

export const uiTranslations = {
  nav: {
    about: { en: "About", id: "Tentang" },
    experience: { en: "Experience", id: "Pengalaman" },
    projects: { en: "Projects", id: "Proyek" },
    skills: { en: "Skills", id: "Keahlian" },
    contact: { en: "Contact", id: "Kontak" },
  },
  hero: {
    aboutCta: { en: "About", id: "Tentang Saya" },
    projectsCta: { en: "Projects", id: "Lihat Proyek" },
  },
  about: {
    heading: { en: "About", id: "Tentang Saya" },
  },
  projects: {
    heading: { en: "Projects", id: "Proyek Pilihan" },
    problem: { en: "PROBLEM", id: "MASALAH" },
    solution: { en: "SOLUTION", id: "SOLUSI" },
    result: { en: "RESULT", id: "HASIL" },
    github: { en: "GitHub", id: "Kode Sumber" },
    liveDemo: { en: "Live Demo", id: "Demo Langsung" },
  },
  experience: {
    heading: { en: "Experience", id: "Pengalaman" },
    present: { en: "Present", id: "Sekarang" },
  },
  skills: {
    heading: { en: "Skills", id: "Keahlian" },
  },
  contact: {
    heading: { en: "Get In Touch", id: "Hubungi Saya" },
    subtitle: {
      en: "Reach out if you have questions, opportunities, or just want to connect.",
      id: "Silakan hubungi saya untuk diskusi peluang, pertanyaan, atau sekadar berjejaring.",
    },
  },
  easterEgg: {
    cancerTitle: {
      en: "♋ Constellation of Cancer Discovered!",
      id: "♋ Rasi Bintang Cancer Ditemukan!",
    },
    cancerDesc: {
      en: "The Celestial Crab & Praesepe Beehive Cluster (M44) illuminates the night sky.",
      id: "Sang Kepiting Langit & Gugus Bintang Praesepe (M44) menerangi langit malam.",
    },
    moonTitle: {
      en: "🌙 Lunar Eclipse Summoned!",
      id: "🌙 Gerhana Bulan Terpanggil!",
    },
    moonDesc: {
      en: "A starfall cascade streams across the cosmic sky.",
      id: "Hujan meteor mengalir melintasi angkasa kosmis.",
    },
    close: { en: "Dismiss", id: "Tutup" },
  },
};

export const projects: Project[] = [
  {
    id: "kabar-jogja",
    title: "Kabar Jogja — News Portal CMS",
    description: {
      en: "A full-stack news portal with a role-based editorial workflow for RBTV Jogja.",
      id: "Portal berita full-stack dengan alur kerja editorial berbasis peran untuk RBTV Jogja.",
    },
    problem: {
      en: "RBTV Jogja needed a modern news CMS with a structured editorial pipeline: writers draft, supervisors review, redaktur approves or archives.",
      id: "RBTV Jogja membutuhkan CMS berita modern dengan alur editorial terstruktur: jurnalis menulis draf, supervisor meninjau, redaktur menyetujui atau mengarsipkan.",
    },
    solution: {
      en: "Built a Laravel 12 application with a Filament admin panel. Implemented a 9-state editorial workflow as a state machine with policy-gated transitions. Each role controls only the transitions appropriate to their position — writers draft and revise, editors review and approve, redaktur performs final review and publish/archive decisions.",
      id: "Membangun aplikasi Laravel 12 dengan panel admin Filament. Mengimplementasikan 9-state editorial workflow sebagai state machine dengan transisi terproteksi policy. Tiap peran mengontrol transisi sesuai otoritasnya — penulis membuat draf, editor meninjau, dan redaktur mengambil keputusan publikasi.",
    },
    result: {
      en: "A working demo environment with RBAC, audit trail, multi-language support (EN/ID), 2FA, ad tracking, and performance indexing. Containerized with Docker Compose (dev + Octane/FrankenPHP production variant).",
      id: "Lingkungan demo fungsional dengan RBAC, jejak audit, dukungan multi-bahasa (EN/ID), 2FA, pelacakan iklan, dan pengindeksan performa. Dikonainerisasi dengan Docker Compose (varian dev + Octane/FrankenPHP).",
    },
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
    description: {
      en: "A web + mobile app for managing internship tasks and tracking progress.",
      id: "Aplikasi web dan mobile untuk mengelola tugas magang dan memantau progres harian.",
    },
    problem: {
      en: "Interns need a simple way to log tasks, track time, and journal reflections — both on desktop and on the go.",
      id: "Peserta magang membutuhkan cara praktis untuk mencatat tugas, pelacakan waktu, dan jurnal refleksi baik di desktop maupun ponsel.",
    },
    solution: {
      en: "Built a modular vanilla-JavaScript web dashboard backed by Firebase (Auth + Firestore) and a companion Expo React Native mobile app sharing the same backend. Implemented Google Sign-In with email/password account linking, plus handling the edge case of provider conflicts when accounts are merged.",
      id: "Membangun dashboard web vanilla JavaScript modular berbasis Firebase (Auth + Firestore) serta aplikasi mobile pendamping Expo React Native. Menerapkan Google Sign-In dengan penautan akun email/password dan penanganan konflik provider.",
    },
    result: {
      en: "Live on GitHub Pages (HTTP 200 verified). Both web and mobile apps are functional; the mobile app includes task management, progress charts, reflection journal, and push notifications.",
      id: "Aktif di GitHub Pages (terverifikasi HTTP 200). Aplikasi web dan mobile berfungsi penuh; aplikasi mobile mencakup manajemen tugas, grafik progres, jurnal refleksi, dan notifikasi push.",
    },
    category: "application",
    technologies: [
      "Vanilla JS",
      "Firebase Auth",
      "Firestore",
      "Expo SDK 54",
      "React Native",
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
    description: {
      en: "An 8-module DevOps learning laboratory executed on a live homelab server.",
      id: "Laboratorium pembelajaran DevOps 8-modul yang dieksekusi pada server homelab mandiri.",
    },
    problem: {
      en: "Learning DevOps in isolation is abstract — real understanding comes from running it on real infrastructure and hitting real problems.",
      id: "Mempelajari DevOps secara teori terasa abstrak — pemahaman sejati didapat dari pengoperasian pada infrastruktur nyata dan penyelesaian insiden riil.",
    },
    solution: {
      en: "Built a hands-on curriculum (Linux → shell → systemd → networking → Docker → CI/CD → monitoring → security) with 8 labs and a capstone. Each module is executed end-to-end on the ubuntu server (1.7 GB RAM) that hosts the entire homelab. The capstone deploys a Flask hello-app with a full CI/CD pipeline: GitHub-hosted runner for CI, self-hosted runner for CD via systemd-managed Docker Compose.",
      id: "Membangun kurikulum praktik (Linux → shell → systemd → networking → Docker → CI/CD → monitoring → security) dengan 8 lab dan proyek akhir. Tiap modul dijalankan langsung di server Ubuntu (1.7 GB RAM). Proyek akhir menerapkan pipeline CI/CD lengkap untuk aplikasi Flask.",
    },
    result: {
      en: "All 8 modules and labs completed. The OOM incident during the Docker lab — mysqld killed by the kernel under memory pressure — was documented as a troubleshooting case. Self-hosted runner is registered and active; capstone deploy is green.",
      id: "Seluruh 8 modul dan lab terselesaikan. Insiden OOM saat lab Docker (mysqld dimatikan kernel akibat batas memori) didokumentasikan sebagai studi kasus troubleshooting. Self-hosted runner aktif dan deployment sukses.",
    },
    category: "learning",
    technologies: [
      "Python",
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
    description: {
      en: "A DevOps-focused inventory microservice with full CI/CD, security scanning, and Kubernetes deployment.",
      id: "Layanan mikro inventaris berbasis DevOps dengan CI/CD lengkap, pemindaian keamanan, dan deployment Kubernetes.",
    },
    problem: {
      en: "An academic final project (UAS) requiring demonstration of a complete DevOps toolchain: CI, security scanning, monitoring, logging, and container orchestration.",
      id: "Proyek akhir akademik (UAS) yang mendemonstrasikan toolchain DevOps lengkap: CI, security scanning, monitoring, logging, dan orkestrasi kontainer.",
    },
    solution: {
      en: "Built a Python/Flask inventory API with a GitHub Actions pipeline that runs build, tests, security scans (Trivy, Bandit, SonarQube), and deploys to a Kubernetes cluster. Configured Prometheus/Grafana for metrics and Loki for log aggregation. Wrote k8s manifests for the deployment.",
      id: "Membangun API inventaris Python/Flask dengan pipeline GitHub Actions untuk build, pengujian, pemindaian keamanan (Trivy, Bandit, SonarQube), dan deployment ke klaster Kubernetes. Mengonfigurasi Prometheus/Grafana untuk metrik dan Loki untuk agregasi log.",
    },
    result: {
      en: "Complete toolchain demonstrated. Notable: resolved a Grafana data-source connectivity issue that blocked the dashboards.",
      id: "Toolchain lengkap berhasil didemonstrasikan dan menyelesaikan kendala konektivitas data source Grafana.",
    },
    category: "experiment",
    technologies: [
      "Python",
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
    description: {
      en: "An educational platform demonstrating how gambling algorithms work — RTP, house edge, and fraud detection.",
      id: "Platform edukasi yang mendemonstrasikan algoritma probabilitas permainan — RTP, house edge, dan deteksi anomali.",
    },
    problem: {
      en: "Understanding probability in games of chance is more intuitive when you can see the math in action.",
      id: "Memahami probabilitas permainan peluang lebih intuitif saat matematika di baliknya dapat diamati langsung secara transparan.",
    },
    solution: {
      en: "Built a FastAPI platform with a slot machine (96% RTP, weighted symbol distribution), blackjack (basic strategy matrix, 0.5% house edge), and European roulette. Added a fraud-detection module using z-score anomaly scoring on betting velocity, win-rate, and stake progression. Dockerized.",
      id: "Membangun platform FastAPI dengan mesin slot (96% RTP, distribusi bobot simbol), blackjack (matriks strategi dasar, 0.5% house edge), dan roulette Eropa. Menambahkan modul deteksi fraud berbasis skor anomali z-score.",
    },
    result: {
      en: "A working educational platform that demonstrates calibrated RNG, house-edge math, and anomaly detection — all in a single repo.",
      id: "Platform edukasi yang mendemonstrasikan RNG terkalibrasi, kalkulasi house-edge, dan deteksi anomali dalam satu repositori.",
    },
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
    role: {
      en: "Software Engineer (Intern)",
      id: "Software Engineer (Magang)",
    },
    startDate: "2025-10",
    endDate: "2026-06",
    location: "Yogyakarta, Indonesia",
    description: {
      en: "Designed and implemented a full-stack news portal CMS with a role-based editorial workflow. Handled backend engineering, database design, testing, Docker containerization, and CI/CD. Used AI as a development partner throughout — designed, directed, implemented, tested, debugged, and iterated.",
      id: "Merancang dan mengimplementasikan CMS portal berita full-stack dengan alur kerja editorial berbasis peran. Menangani rekayasa backend, perancangan basis data, pengujian, kontainerisasi Docker, dan CI/CD.",
    },
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
    role: {
      en: "Student — D3 Informatics",
      id: "Mahasiswa — D3 Teknik Informatika",
    },
    startDate: "2023",
    endDate: "2026",
    location: "Yogyakarta, Indonesia",
    description: {
      en: "Studied computer science with a focus on software engineering, databases, networking, and DevOps. The Kabar Jogja project became the basis for the final thesis (Tugas Akhir).",
      id: "Mempelajari ilmu komputer dengan fokus rekayasa perangkat lunak, basis data, jaringan, dan DevOps. Proyek Kabar Jogja menjadi dasar penyusunan Tugas Akhir.",
    },
    technologies: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Languages", id: "Bahasa Pemrograman" },
    items: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: { en: "Backend", id: "Backend" },
    items: ["Laravel", "FastAPI", "Express", "Filament"],
  },
  {
    category: { en: "Databases", id: "Basis Data" },
    items: ["MySQL", "SQLite", "Redis", "Firestore"],
  },
  {
    category: { en: "Infrastructure", id: "Infrastruktur" },
    items: ["Docker", "Docker Compose", "Kubernetes", "systemd", "Tailscale"],
  },
  {
    category: { en: "CI/CD & DevOps", id: "CI/CD & DevOps" },
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
    category: { en: "Frontend", id: "Frontend" },
    items: ["React", "Next.js", "Tailwind CSS", "Vanilla JS"],
  },
];
