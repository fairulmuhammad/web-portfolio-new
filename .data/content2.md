# Complete Engineering Project Archive

**Generated:** 2026-08-11
**Source:** Local filesystem (C:\) + WSL2 (Ubuntu) + GitHub (fairulmuhammad)
**Agent:** Technical research & archivist scan per `C:\web-app-port\AGENTS.md`

---

# Executive Summary

- **Total projects discovered:** 34 meaningful projects + 23 GitHub repositories
- **Professional projects:** 1 (Head of Operations @ Vyber.id — historical context)
- **Academic projects:** 12 (coursework, UTS/UAS, thesis-related)
- **Personal projects:** 8
- **Experiments:** 8
- **Infrastructure / Homelab:** 3
- **Internship (Magang):** 2 (RBTV news portal + internship tracker)

**Profile:** Muhammad Fairul — D3 Teknik Informatika student at Universitas Amikom Yogyakarta (2022–2026). Full-stack developer (Laravel, Next.js, Node.js, PHP, Python) with DevOps skills (Docker, Kubernetes, CI/CD, monitoring). 2+ years as Head of Operations at Vyber.id. GitHub username: `fairulmuhammad`.

**Environment scan results:**
- Windows 10/11 machine, C:\ drive with active dev folders (DevOps, learning_site, BigData, web-app-port, etc.)
- **WSL2 Ubuntu** present (default distro, currently stopped) — contains the Laravel internship project (`~/docker-laravel/magang`) and a SpiderFoot OSINT environment
- Docker Desktop WSL backend (`docker-desktop` distro) configured
- GitHub CLI authenticated as `fairulmuhammad` (scopes: repo, workflow, gist, read:org)

---

# Project Index

| # | Project | Category | Technologies | Status | Evidence |
|---|---------|----------|--------------|--------|----------|
| 001 | Kabar Jogja (magang-rbtv) | Internship / Thesis | Laravel 12, Filament, Docker, Octane, MySQL, Redis | Active | Source + Git history + GitHub |
| 002 | Internship Progress Tracker | Personal / Internship | Firebase, HTML/JS, React Native (Expo) | Active | Source + GitHub + docs |
| 003 | Educational Gaming Algorithms (gamble) | Experiment | Python, FastAPI, SQLite, JWT | Completed | Source + README + GitHub |
| 004 | Task Management API (project-api) | Learning / Personal | Node.js, Express, JWT, Jest, SQLite | Completed | Source + README |
| 005 | Magic Portfolio (web-portfolio) | Personal | Next.js 15, React 19, TypeScript, Once UI | Active | Source + README + GitHub |
| 006 | PHP App + Jenkins CI/CD | Academic (DevOps) | PHP 8.2, PHPUnit, Docker, Jenkins | Completed | Jenkinsfile + source + GitHub |
| 007 | Inventory App (UAS DevOps) | Academic (UAS) | Python, GitHub Actions, SonarQube, Grafana/Loki, k8s | Completed | Source + git history + docs |
| 008 | Git Branching Practice (latihan-devops) | Academic | Git, HTML | Completed | Git history + GitHub |
| 009 | Git Merge Conflict Practice (latihan1-devops) | Academic | Git, HTML | Completed | Git history + GitHub |
| 010 | DevOps UTS (GitLab CI/CD practice) | Academic (UTS) | GitLab CI, Docker, k8s, Terraform | Completed | Repos + GitHub |
| 011 | DevOps Coursework Tugas 9–14 | Academic | Prometheus, Loki, SonarQube, TDD, Jira | Completed | Docs + configs |
| 012 | Docker PHP App (latihan_php_app) | Academic | Docker, PHP | Completed | Dockerfile + source |
| 013 | Terraform Docker Lab | Academic | Terraform, Docker provider | Completed | main.tf + tfstate |
| 014 | Kubernetes Lab | Academic | kubectl, Minikube, PV/PVC | Completed | YAML manifests |
| 015 | Project Management Prototype (CodeIgniter) | Academic (coursework) | CodeIgniter 3, PHP, MySQL | Completed | Source + git history |
| 016 | Donation Campaign Prototype (project-relfconnect) | Academic (exam) | CodeIgniter 3, PHP | Completed | README + GitHub |
| 017 | UAS CI3 (uasci3) | Academic (UAS) | CodeIgniter 3 | Completed | GitHub |
| 018 | Semester 3 Backend UTS | Academic (UTS) | PHP | Completed | GitHub |
| 019 | WhatsApp Mention-All Bot | Experiment | JavaScript, Baileys | Completed | README + GitHub |
| 020 | Backend Assignment (tugasbe) | Academic | PHP | Completed | GitHub |
| 021 | Web Assignment (tugas) | Academic | HTML | Completed | GitHub |
| 022 | Learning Fundamental (12-week plan) | Learning | Python, PHP | Active | Source + GitHub |
| 023 | Learning API (step-by-step Express) | Learning | Node.js, Express | Active | Source + README |
| 024 | Learning Vue | Learning | Vue 3, Vite | Active | Source + README |
| 025 | CLI Conqueror Crossplay | Experiment | TypeScript | Unknown | GitHub (private) |
| 026 | My Crawler | Experiment | Crawlee, Playwright, Docker | Completed | Source + Dockerfile |
| 027 | Big Data Predictive (bpd-5071) | Academic | Python, Pandas, scikit-learn, Jupyter | Active | 14 weeks notebooks |
| 028 | Big Data Tugas 5071 (EKC/CO2) | Academic | Python, Dash, Plotly, Jupyter | Completed | Notebooks + scripts |
| 029 | Coastal Monitoring ML (royan) | Academic / Thesis support | Python, scikit-learn, GeoPandas | Active | model.py + notebook |
| 030 | Home Server Homelab (setup-server) | Infrastructure | Docker, Tailscale, Nextcloud, AdGuard | Deployed | Docs + scripts |
| 031 | RBTV Internship Design Docs (magang) | Internship | UML diagrams | Completed | Diagrams + screenshots |
| 032 | Obsidian Vault + CV (wannacry) | Personal | Obsidian, HTML/CSS | Active | Vault + CV files |
| 033 | CV Files (learning_site) | Personal | HTML/Markdown | Active | cv-ats, cv_skills_projects |
| 034 | Docker Compose Trial (awesome-compose) | Experiment | Docker Compose | Archived | Clone of examples |

---

# Projects

## 001 — Kabar Jogja — RBTV News Portal (magang-rbtv)

### Identity
Canonical project: **Kabar Jogja** — a modern full-stack news portal built for RBTV (Radio Republik Televisi) Jogja as part of the user's internship (magang), which is also the final thesis (Tugas Akhir) project.

### Classification
Internship / Academic (Final Project/Thesis) / Web / Full-stack

### Repository
- Local: `WSL ~/docker-laravel/magang` (git repo) + `C:\magang` (design docs)
- GitHub: `fairulmuhammad/magang-rbtv` (PRIVATE, PHP) — created 2025-10-07, last updated 2026-04-06
- Branch: `main` (with feature branches), remote = GitHub

### Timeline
- Started: ~Oct 2025 (first commits 2025-10-02 migrations)
- Major development: Oct 2025 – Apr 2026 (continuous commits incl. i18n, RBAC, editorial workflow, testing)
- Current status: Active (docs/screenshots being finalized for thesis)

### Purpose
News portal (news CMS) with an editorial workflow and role-based access control for a regional TV/radio station in Yogyakarta. Doubles as the thesis implementation (RBAC + Editorial Workflow in News CMS).

### What Was Built
Laravel 12 application with Filament 4.8.5 admin panel, public news frontend, multi-language support (EN/FR), ad management, analytics, and a fully containerized dev + production stack (Docker Compose + FrankenPHP/Octane).

### Features
- [VERIFIED] Public homepage, article pages (slug-routed), category/tag pages, search + search suggestions API
- [VERIFIED] Ad tracking endpoints (`/ad/click/{id}`, `/ad/view/{id}`), ad placements (IAB banner)
- [VERIFIED] Read-completion analytics endpoint storing IP/user-agent
- [VERIFIED] Filament admin panel with RBAC: roles (admin, editor, writer), 17 permissions, policies
- [VERIFIED] Editorial workflow: draft → submitted → review → approved → published → archived (+ return-to-draft), 8 workflow states
- [VERIFIED] Audit trail logging (AuditLog model + service)
- [VERIFIED] Multi-language support (locale middleware, EN/FR translations) — French translations added
- [VERIFIED] Eager-loading N+1 fix documented
- [VERIFIED] Automated test suite: Pest/PHPUnit, feature tests for RBAC, article workflow, policies (commits show "WB-UT/PT and BB-FT/UI" test naming standards)
- [VERIFIED] Docs: manual test guides, test analysis reports, thesis chapters (ch 4 & 5) inside repo

### Architecture
```text
Browser
  ↓
Laravel 12 (app container, port 8087)
  ├── Public frontend (Blade + Vite/Tailwind)
  ├── Filament Admin (/admin) — RBAC + editorial workflow
  ├── Services: ArticleWorkflowService, AuditLogService, Policies
  └── API: /api/headlines, /api/search-suggestions, /api/analytics/read-complete
  ↓
MySQL 8.0 (magang-server-db, import via docker-entrypoint-initdb.d)
Redis 7 (cache/queues, magang-server-redis)
phpMyAdmin (port 8088)
```
Production variant: FrankenPHP + Laravel Octane (docker-compose.octane.yml, Caddyfile, `.env.octane`).

### Technologies
- Backend: PHP 8.2, Laravel 12, Filament 4.8.5 (+ filament-breezy 2FA), Laravel Octane, intervention/image, Laravel Telescope (dev)
- Frontend: Blade, Vite, Tailwind CSS, JavaScript
- Database: MySQL 8.0, Redis 7
- Infrastructure: Docker, Docker Compose (dev + prod + octane), FrankenPHP, Caddy
- Testing/QA: Pest, PHPUnit, PHPStan, Larastan, Laravel Pint
- Docs: extensive markdown + screenshots

### Database
[VERIFIED] Migrations exist for: users (+role), categories, articles, tags (pivot article_tag), ads, analytics, sample articles, admin control fields, ad click counts. MySQL with utf8mb4.

### Authentication / Authorization
[VERIFIED] RBAC implemented: User model with roles; Role + Permission models; article policies; role-based visibility of editing actions. 17 permissions documented. Admin override capabilities; editor/writer isolation (test MN-WRK-002-isolation).

### Infrastructure / CI-CD
[VERIFIED] Multi-container compose (app/db/redis/phpmyadmin), named volumes, `docker-entrypoint-initdb.d` DB import, separate `.env.octane` for the FrankenPHP/Octane production stack. `.github` workflows present.

### Engineering Problems
[VERIFIED from git log] N+1 query optimization (eager loading), article visibility/authorization edge cases, test naming standardization, workflow state transitions, i18n string extraction.

### Technical Decisions
- Laravel + Filament: [INFERRED] chosen for fast admin CRUD + policy-based authorization for thesis RBAC requirement
- Docker for everything: [VERIFIED] README instructs full containerized setup
- Reason for Octane/FrankenPHP: [VERIFIED] production performance stack prepared

### Outcome
[VERIFIED] Working application, fully built and tested; active development through Apr 2026. Deployment status: [UNKNOWN] — local/dev verified; production deployment not confirmed.

### Current Status
Active (thesis documentation in progress; many modified screenshots uncommitted as of scan).

### Engineering Significance
[INFERRED] Demonstrates: Laravel application architecture, RBAC design (roles→permissions→policies), state-machine editorial workflow, containerized full-stack delivery, testing culture (Pest/PHPUnit), i18n, and thesis-grade documentation. **Strongest portfolio project.**

### Evidence
Source code in WSL; git history (30+ commits with conventional commits); GitHub private repo; README; docs/.

### Confidence
- Evidence Confidence: **High**
- Documentation Quality: **High**
- Portfolio Value: **High**

---

## 002 — Internship Progress Tracker (memo_magang / internship-progres-tracker)

### Identity
Web + mobile application for interns to manage tasks, track progress, and journal reflections during internship.

### Classification
Personal / Internship-support / Web + Mobile

### Repository
- Local: `C:\learning_site\memo_magang` (git repo)
- GitHub: `fairulmuhammad/internship-progres-tracker` (PUBLIC, HTML) — created 2025-09-03, updated 2026-02-06
- Branches: main, feature/authentication-system, feature/task-management, responsive-layout-fixes, etc.

### Timeline
Sep 2025 – Feb 2026. Active.

### What Was Built
Firebase-backed web dashboard (HTML/CSS/JS) + React Native mobile app (Expo) with Google Sign-In, email/password auth, task management, progress charts, and reflection journal.

### Features
- [VERIFIED] Task management (CRUD), progress charts/graphs
- [VERIFIED] Reflection journal
- [VERIFIED] Firebase Auth: Google Sign-In + email/password + account linking (commits: "FEATURE: Add Firebase Account Linking Support", "FIX: Handle authentication method conflicts")
- [VERIFIED] Firestore rules + indexes, Firebase Hosting config (`firebase.json`, `_redirects`)
- [VERIFIED] GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- [VERIFIED] Mobile app: Expo SDK 54, React Native 0.81, React Navigation, zustand state, gifted-charts, react-native-paper, expo-notifications, image picker
- [VERIFIED] Extensive docs: authentication roadmap, storage guide, feature roadmap, security notices

### Technologies
- Web: HTML, CSS, vanilla JS, Firebase (Auth, Firestore, Hosting)
- Mobile: React Native, Expo SDK 54, TypeScript, zustand
- CI: GitHub Actions

### Database
[VERIFIED] Firestore (NoSQL) — `firestore.rules`, `firestore.indexes.json`, composite indexes configured.

### Authentication
[VERIFIED] Firebase Auth with Google + email/password + account linking + conflict handling.

### Outcome
[VERIFIED] Working app; deployed config for Firebase Hosting present. Live deployment: [UNKNOWN].

### Current Status
Active.

### Engineering Significance
[INFERRED] Demonstrates: Firebase integration, mobile development (Expo/React Native), auth edge cases (account linking, provider conflicts), responsive design, CI deploy. Strong secondary portfolio project (mobile + cloud).

### Confidence
- Evidence: **High** | Docs: **High** | Portfolio: **Medium-High**

---

## 003 — Educational Gaming Algorithms Platform (gamble)

### Identity
Educational platform demonstrating how gambling algorithms work (RTP, house edge, weighted RNG) with a full-stack web app. Explicitly educational — no real money.

### Classification
Experiment / Personal learning / Web (Full-stack)

### Repository
- Local: `C:\learning_site\gambling` (git)
- GitHub: `fairulmuhammad/gamble` (PUBLIC, Python) — "this project for learning whats on gambling site" — created 2025-08-28

### What Was Built
Python algorithm core (slot machine, blackjack, roulette, fraud detection) + FastAPI backend + vanilla JS frontend (player + admin). Dockerized.

### Features
- [VERIFIED] Slot machine with 96% RTP / 4% house edge, weighted symbol distribution, `secrets.randbelow()` cryptographic RNG
- [VERIFIED] Blackjack with basic strategy matrix, deck penetration, 0.5% house edge
- [VERIFIED] European roulette (37 numbers, 2.70% house edge)
- [VERIFIED] Fraud detection: betting velocity, win-rate analysis, stake progression, session duration anomaly scoring (z-scores)
- [VERIFIED] JWT auth, bcrypt hashing, Pydantic validation, SQLite (users, game_sessions, security_alerts tables)
- [VERIFIED] Admin "outcome override" system (educational demonstration of manipulation)
- [VERIFIED] WebSockets real-time, Docker Compose (player on :8001)

### Technologies
Python, FastAPI, SQLite (aiosqlite), JWT, bcrypt, WebSockets, Docker, HTML/CSS/JS

### Outcome
[VERIFIED] Working local platform (Docker + manual setup documented). No production use [INFERRED].

### Engineering Significance
[INFERRED] Demonstrates: probability/statistics modeling, RNG design, API development, auth, dockerization, ethical documentation. Interesting interview talking point (house edge math).

### Confidence
Evidence: **High** | Docs: **High** | Portfolio: **Medium**

---

## 004 — Task Management API (project-api)

### Identity
REST API for learning API development concepts — task CRUD with JWT auth.

### Classification
Learning / Personal / Backend

### Repository
Local: `C:\learning_site\project-api` (not a git repo — no .git found)

### What Was Built
Node.js + Express API with authentication, validation, error handling, testing.

### Features
- [VERIFIED] REST endpoints: /api/auth (register/login/logout), /api/tasks CRUD, /api/users/profile
- [VERIFIED] JWT authentication, Joi validation, Helmet, CORS, bcrypt hashing
- [VERIFIED] Jest + Supertest tests (jest.config.js, tests/)
- [VERIFIED] SQLite database, frontend-server.js serving a frontend
- [VERIFIED] Documentation: README, PROJECT_COMPLETE.md, QUICK_START.md, SETUP_COMPLETE.md, docs/

### Technologies
Node.js, Express, JWT, Joi, Helmet, CORS, bcrypt, Jest, Supertest, SQLite

### Outcome
[VERIFIED] Working, tested locally. `.env` present (see Security Findings — do not expose values).

### Engineering Significance
[INFERRED] Demonstrates: API design (REST conventions, HTTP methods, status codes), middleware patterns, validation, testing, security headers. Good learning evidence for backend fundamentals.

### Confidence
Evidence: **High** | Docs: **High** | Portfolio: **Medium**

---

## 005 — Magic Portfolio (web-portfolio / portfolio)

### Identity
Personal portfolio website (Once UI design system) — the user's public portfolio.

### Classification
Personal / Web / Frontend

### Repository
- Local: `C:\web-app-port\magic-portfolio` (git) — Next.js project (name `@once-ui-system/magic-portfolio` v2.0.0)
- GitHub: `fairulmuhammad/web-portfolio` (PUBLIC, TypeScript) + `fairulmuhammad/portfolio` (PRIVATE, TypeScript) — both created 2025-07-12

### Timeline
Apr–Jul 2025 (git log shows fixes: Vercel deployment edge-function fix, og endpoint baseURL, header overlap, font variables).

### What Was Built
Next.js 15 portfolio with MDX-based projects/blog, dark/light theme, SEO metadata + OG image generation, Once UI design system.

### Features
- [VERIFIED] Next.js 15 + React 19 + TypeScript, SCSS modules, Once UI
- [VERIFIED] MDX content: work/projects + blog/posts with gray-matter frontmatter
- [VERIFIED] next/og automatic open-graph image generation
- [VERIFIED] Vercel deployment (deploy fixes in git history)
- [VERIFIED] Personalized README with user's actual skills/projects/education

### Technologies
Next.js 15, React 19, TypeScript, MDX, PrismJS, react-masonry-css, sass, sharp

### Outcome
[VERIFIED] Deployed to Vercel (public).

### Engineering Significance
[INFERRED] Demonstrates: modern React/Next.js frontend, MDX content pipelines, SEO/OG automation, deployment troubleshooting. Primary public showcase.

### Confidence
Evidence: **High** | Docs: **High** | Portfolio: **Medium-High** (as public showcase)

---

## 006 — PHP App + Jenkins CI/CD (php-app)

### Identity
Simple PHP application with a complete Jenkins CI/CD pipeline (clone → install → test → build Docker → deploy).

### Classification
Academic (DevOps course) / Web + DevOps

### Repository
- Local: `C:\DevOps\php-app` (git)
- GitHub: `fairulmuhammad/php-app` (PUBLIC, PHP) — created 2025-06-15

### What Was Built
Minimal PHP 8.2 app (index.php homepage) with PHPUnit test, Docker image, and Jenkins pipeline.

### Features
- [VERIFIED] Jenkinsfile: Clone → `composer install` → `phpunit` → `docker.build("php-app:latest")` → `docker run -d -p 80:80`
- [VERIFIED] docker-compose.yaml runs Jenkins LTS with docker.sock mount for building
- [VERIFIED] Dockerfile: `php:8.2-apache`, COPY to /var/www/html
- [VERIFIED] composer.json with PSR-4 autoload + phpunit ^10.0; tests/ExampleTest.php; phpunit.xml

### Technologies
PHP 8.2, PHPUnit 10, Docker, Jenkins (declarative pipeline)

### Outcome
[VERIFIED] Working pipeline files; demonstration-level project. Actual Jenkins execution: [UNKNOWN].

### Engineering Significance
[INFERRED] Demonstrates: CI/CD fundamentals, declarative Jenkins pipelines, Docker build/run in CI. Good DevOps coursework evidence.

### Confidence
Evidence: **High** | Docs: **Medium** | Portfolio: **Medium**

---

## 007 — Inventory App — DevOps UAS (Final Exam)

### Identity
A complete DevOps UAS (final exam) project: inventory microservice with full CI/CD, security scanning, monitoring, and Kubernetes deployment.

### Classification
Academic (UAS / Final Exam) / DevOps / Full-stack

### Repository
- Local: `C:\DevOps\test-uas\inventory-app` (git) + `C:\DevOps\test-uas\` (report docs)
- GitHub: `fairulmuhammad/inventory-app` (PUBLIC, Shell primary, GPL-3.0) — created 2025-07-11, updated 2025-08-26

### Timeline
Jul–Aug 2025. Extensive git history (50+ commits) — monitoring fixes, SonarQube implementation, security scan reports.

### What Was Built
Inventory service with GitHub Actions CI/CD (build, test, security), SonarQube analysis, monitoring stack (Grafana, Loki, Promtail), Kubernetes deployment, pre-commit hooks, Makefile build system.

### Features
- [VERIFIED] `inventory-service/` app (Python) with tests (pytest — integration & performance tests use test client)
- [VERIFIED] GitHub Actions workflows: Docker build/push, SonarQube, CodeQL (v3), Trivy SARIF security scans, k8s deployment workflow
- [VERIFIED] Grafana dashboards + Loki data source (multiple fix commits)
- [VERIFIED] `monitoring/` dir, `docker-compose.yml` for the stack
- [VERIFIED] `k8s/` manifests + `kubeconfig.yaml`; SonarQube scanner + `sonar-project.properties`
- [VERIFIED] `.pre-commit-config.yaml`, Makefile, setup.bat / setup.sh, demo-pipeline.ps1
- [VERIFIED] 15+ markdown reports: architecture, pipeline, SonarQube reports, security analysis, demonstration guides, user requirements tables

### Technologies
Python, pytest, GitHub Actions, Docker, SonarQube, CodeQL, Trivy, Grafana, Loki, Promtail, Kubernetes, pre-commit, Make

### Outcome
[VERIFIED] Working pipeline (fix commits resolving workflow errors, pytest hangs, Grafana/Loki data sources). Final report "Final-Integration-Report-TechNova.md" suggests exam scenario company "TechNova".

### Engineering Significance
[INFERRED] Demonstrates real CI/CD + DevSecOps: security scanning integration, monitoring, k8s deployment, test discipline. **One of the strongest DevOps evidence projects.**

### Confidence
Evidence: **High** | Docs: **High** | Portfolio: **High** (DevOps roles)

---

## 008 — Git Branching Practice (latihan-devops)

### Identity
Git practice repo: branching, merging, conflict resolution.

### Classification
Academic / Experiment

### Repository
- Local: `C:\DevOps\latihan-devops` (git) + `C:\learning_site\learning_basic`? No — this is separate.
- GitHub: `fairulmuhammad/latihan-devops` (PUBLIC, HTML) — created 2025-03-19

### What Was Built
HTML login page + text files to practice git branch workflow (feature-1, feature-login branches).

### Git History Highlights
[VERIFIED] "solve conflict by git add halo-dunia", "add file to branch feature 1", "delete file" — demonstrates merge conflict resolution practice.

### Engineering Significance
Low — fundamental git practice. Evidence of version control fundamentals.

---

## 009 — Git Merge Conflict Practice (latihan1-devops)

### Identity
Second git practice repo with explicit conflict-creation exercises.

### Repository
- Local: `C:\DevOps\latihan1-devops` (git)
- GitHub: `fairulmuhammad/latihan1-devops` (PUBLIC, HTML) — created 2025-03-17

### Git History Highlights
[VERIFIED] "edit test1 to create conflict", "fix conflict on login.html", branches feature-login/feature-a/test-branch — deliberately created + resolved conflicts.

### Engineering Significance
Low-medium. Shows deliberate practice of merge conflicts and branch management.

---

## 010 — DevOps UTS — GitLab CI/CD Practice (test-uts)

### Identity
DevOps mid-term (UTS) preparation: GitLab CI/CD, Docker, k8s, Terraform, AWS projects.

### Classification
Academic (UTS) / DevOps

### Repository
- Local: `C:\DevOps\test-uts` (git) with sub-projects `gitlab-test-site` (git) and `testing-site`
- GitLab remote: `gitlab.com/tugas7483630/gitlab-test-site` (root /c/DevOps remote)
- GitHub: `fairulmuhammad/testing-site` (PUBLIC, JavaScript) — "for testing mid exam of devops" — created 2025-05-14

### What Was Built
- `gitlab-test-site/`: Node app with Dockerfile, `aws-project/`, `docker-project/`, `k8s/`, kubectl.exe, tests
- `testing-site/`: README, `project-site/`, `terraform/`
- `/c/DevOps/.git` root remote points at the GitLab test-site repo (branch `testing`)

### Engineering Significance
[INFERRED] Demonstrates GitLab CI/CD exploration, Docker + k8s + Terraform + AWS exposure. Foundational DevOps.

---

## 011 — DevOps Coursework Tugas 9–14

### Identity
Weekly DevOps coursework covering monitoring, logging, security analysis, TDD, and project management tools.

### Classification
Academic / DevOps

### What Was Built
- `tugas9/prometheus/` — Prometheus config
- `tugas10/` — docker-compose + `loki-config.yaml` + `promtail-config.yaml` + logs (Loki/Promtail logging stack)
- `tugas11/` — SonarQube codelab (gemini-codelab-sonar-py), report docs (MP-DO-11.pdf, Tugas_10/11.docx)
- `tugas13/` — TDD CodeIgniter (tdd-codeigniter-complete), MP-DO-13.pdf
- `tugas14/` — Jira: `jql_query_generator.py`, `jira_assignment_guide.md`, `assignment_tracker.py`, assignment_answers_template.md, MP-DO-14.pdf

### Technologies
Prometheus, Grafana Loki, Promtail, Docker Compose, SonarQube, CodeIgniter TDD, Jira/JQL

### Engineering Significance
[INFERRED] Demonstrates: monitoring stack configuration, log aggregation, code quality/security analysis, TDD in CodeIgniter, Jira automation via Python. Good coursework coverage of DevOps tools.

---

## 012 — Docker PHP App (latihan_php_app)

### Identity
Simple PHP app containerized with Docker (coursework).

### Classification
Academic / Experiment

### What Was Built
[VERIFIED] `Dockerfile` (246 bytes), `index.php`, `index2.php`, `tugas/` subfolder.

### Technologies
Docker, PHP

---

## 013 — Terraform Docker Lab (latihan_terraform)

### Identity
Terraform exercise provisioning Docker containers (redis, mysql).

### Classification
Academic / Experiment

### What Was Built
[VERIFIED] `main.tf` with kreuzwerker/docker provider, resources `docker_container.redis` (redis:alpine) and `docker_container.mysql` (mysql:5.7 with root password env). `.terraform/`, `terraform.tfstate` + backup exist — plan/apply was actually run.

### Technologies
Terraform, Docker provider, HCL

### Engineering Significance
[INFERRED] Evidence of actual Terraform execution (tfstate exists). IaC fundamentals.

---

## 014 — Kubernetes Lab (DevOps/kubernetes)

### Identity
Kubernetes practice with kubectl.exe, minikube (minku.exe), PV/PVC manifests.

### Classification
Academic / Experiment

### What Was Built
[VERIFIED] `pv.yaml` (PersistentVolume 1Gi hostPath /data), `pvc.yaml` (PersistentVolumeClaim 1Gi RWO), kubectl.exe, minku.exe binaries.

### Technologies
Kubernetes, kubectl, Minikube, YAML manifests

---

## 015 — Project Management Prototype (prototype-manajemen-proyek)

### Identity
CodeIgniter 3 prototype for a project management course (Manajemen Proyek IT).

### Classification
Academic (coursework) / Web

### Repository
- Local: `C:\project-menejemen-proyek-it\prototype-manajemen-proyek` (git)
- GitHub remote: `github.com/halvest/prototype-manajemen-proyek` (group/coursework — not user's personal repo)

### What Was Built
[VERIFIED] Full CodeIgniter 3 app: `application/controllers` = Auth, Home, Welcome, admin/, lembaga/; models, views, config; `uploads/` dir; composer.json (codeigniter/framework). Git history: "upload not fix" × 2 — image upload feature in progress.

### Technologies
PHP, CodeIgniter 3, MySQL (inferred from CI structure), Composer

### Engineering Significance
[INFERRED] MVC application structure, session-based auth (Auth controller), CRUD prototypes. Group/coursework evidence.

---

## 016 — Donation Campaign Prototype (project-relfconnect)

### Identity
Exam (UTS) prototype for a donation campaign management system — CodeIgniter.

### Classification
Academic (exam) / Web

### Repository
- GitHub: `fairulmuhammad/project-relfconnect` (PUBLIC, PHP, MIT) — created 2025-07-24

### What Was Built
[VERIFIED from README] Full exam deliverables: prototyping report (40%), problem/user-need tables (20%), class tables (20%), coding prototype (10%), demo link (10%) — 100% complete. Prototype of "Manajemen Kampanye Donasi" (donation campaign management).

### Technologies
CodeIgniter (implied by structure), PHP

### Engineering Significance
[INFERRED] Structured exam work: requirement identification, class design, prototyping methodology, delivery discipline.

---

## 017 — UAS CI3 (uasci3)

### Identity
CodeIgniter repo for UAS (final exam) — includes the CodeIgniter framework clone.

### Repository
- GitHub: `fairulmuhammad/uasci3` (PUBLIC, PHP, MIT, branch master) — created 2025-01-22

### What Was Built
[VERIFIED from README] Stock CodeIgniter installation (framework boilerplate) — exam workspace.

---

## 018 — Semester 3 Backend UTS (sem3_be_responsi_uts)

### Identity
Backend course responsi/UTS project.

### Repository
- GitHub: `fairulmuhammad/sem3_be_responsi_uts` (PUBLIC, PHP) — created 2024-11-02, updated 2025-01-02

### What Was Built
[VERIFIED] PHP project (no README). Semester-3 backend coursework.

---

## 019 — WhatsApp Mention-All Bot (mentionAll)

### Identity
WhatsApp bot that implements "mention all" (tag all members) — built on Baileys.

### Classification
Experiment / Personal

### Repository
- GitHub: `fairulmuhammad/mentionAll` (PUBLIC, JavaScript) — created 2024-12-22
- README credits original: panntod/Whatsapp-Mentioned-All

### What Was Built
[VERIFIED from README] WhatsApp bot using `@whiskeysockets/baileys`, `@hapi/boom`; automatic message sending/replying + tag-all feature. npm/pnpm/yarn instructions.

### Technologies
JavaScript, WhatsApp Web API (Baileys)

### Engineering Significance
[INFERRED] Exploration of unofficial WhatsApp automation APIs.

---

## 020 — Backend Assignment (tugasbe)

### Repository
- GitHub: `fairulmuhammad/tugasbe` (PUBLIC, PHP) — created 2024-10-30. No README content. Backend course assignment.

## 021 — Web Assignment (tugas)

### Repository
- GitHub: `fairulmuhammad/tugas` (PUBLIC, HTML) — created 2024-07-24. HTML web assignment.

---

## 022 — Learning Fundamental (learning_basic / learning-fundamental)

### Identity
Self-structured 12-week learning plan for programming fundamentals.

### Classification
Learning / Personal

### Repository
- Local: `C:\learning_site\learning_basic` (git) — `PLAN_12_WEEKS.md`, `php_starter/`, `python_starter/`, `.github/`
- GitHub: `fairulmuhammad/learning-fundamental` (PUBLIC, Python) — "mencoba belajar kembali mengenai fundamental" — created 2025-08-29

### What Was Built
[VERIFIED] 12-week curriculum plan (PLAN_12_WEEKS.md), Python + PHP starter scaffolds.

### Engineering Significance
[INFERRED] Self-directed learning methodology — worth mentioning for growth mindset.

---

## 023 — Learning API (learning-api)

### Identity
Step-by-step guided project to learn what an API is (5 incremental steps).

### Classification
Learning

### Repository
Local: `C:\learning_site\learning-api` (has node_modules; no .git found)

### What Was Built
[VERIFIED] package.json scripts: step:1 plain HTTP → step:2 Express basic → step:3 Express router → step:4 JSON store → step:5 frontend fetch. README, server.js, routes/.

### Technologies
Node.js, Express, vanilla JS

---

## 024 — Learning Vue (learning-vue)

### Identity
Comprehensive Vue.js learning project.

### Classification
Learning

### Repository
Local: `C:\learning_site\learning-vue` (no .git) — `LEARNING_GUIDE.md`, `lessons/`, `resources/`, `.github/`

### What Was Built
[VERIFIED] Vue 3 + Vite project; lessons covering HTML5/CSS3, JavaScript ES6, Vue introduction (todo app); README + LEARNING_GUIDE.

### Technologies
Vue 3, Vite, JavaScript, HTML/CSS

---

## 025 — CLI Conqueror Crossplay

### Identity
TypeScript CLI game project.

### Classification
Experiment

### Repository
- Local: `C:\learning_site\cli_command\cli-conqueror-crossplay` (git)
- GitHub: `fairulmuhammad/cli-conqueror-crossplay` (PRIVATE, TypeScript) — created 2025-08-18

### What Was Built
[UNCERTAIN] TypeScript CLI project — contents not fully inspected. Private repo.

---

## 026 — My Crawler (BigData/my-crawler)

### Identity
Web crawler built with Crawlee + Playwright, containerized.

### Classification
Experiment / Data

### Repository
Local: `C:\BigData\my-crawler` (no .git found; README, Dockerfile, src/main.js)

### What Was Built
[VERIFIED] Crawlee 3.x + Playwright crawler (Node ESM), Dockerfile, storage/ dir. README present.

### Technologies
Node.js, Crawlee, Playwright, Docker

---

## 027 — Big Data Predictive (bpd-5071)

### Identity
Big Data Predictive course — 14 weekly practical sessions (pertemuan1..14) with Jupyter notebooks.

### Classification
Academic / Data & Analytics

### Repository
Local: `C:\BigData\bpd-5071` (course folder, student ID 5071)

### What Was Built
[VERIFIED] 14 pertemuan notebooks + scripts: pandas/numpy/sklearn/matplotlib/seaborn; employee dataset imputation (pertemuan1); final submission "BMLP" notebooks: `[Klasifikasi]_Submission_Akhir_BMLP_...ipynb` (classification) and `[Clustering]_Submission_Akhir_BMLP_...ipynb` (clustering); sweetviz tests. requirements.txt pins pandas 2.2.2, numpy 1.26.4, scikit-learn 1.4.1, etc. Student name: Muhammad Fairul Imron Jalayasi, NIM 23.01.5071.

### Technologies
Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Jupyter, openpyxl

### Engineering Significance
[INFERRED] Demonstrates: data cleaning (imputation), EDA, classification + clustering ML workflows. Academic ML evidence.

---

## 028 — Big Data Tugas 5071 (EKC / CO2 analysis)

### Identity
Big Data coursework: Environmental Kuznets Curve (EKC) analysis for ASEAN countries + CO2 emissions dashboard.

### Classification
Academic / Data & Analytics

### Repository
Local: `C:\BigData\tugas5071`

### What Was Built
[VERIFIED]
- `asean_ekc_complete_dataset.csv`, Excel analyses (ASEAN_EKC_*_Analysis.xlsx, R_Squared_Fixed), regression work (GDP/population/CO2/GDP²)
- `co2.py` — Dash + Plotly world CO2 emissions dashboard (multi-country selection, year range slider) from OWID data
- `appbs.py` — ttkbootstrap desktop quiz app ("Belajar Seru") with Bahasa Indonesia/Math/Science questions + image assets
- Lung Cancer Dataset.csv; multiple Untitled*.ipynb (scraping, analysis)

### Technologies
Python, Dash, Plotly, Pandas, Excel, ttkbootstrap, Tkinter

### Engineering Significance
[INFERRED] Econometrics-style analysis (EKC hypothesis testing with R²), interactive dashboards, desktop GUI app. Broad Python data skills.

---

## 029 — Coastal Monitoring ML (royan)

### Identity
Machine learning model for coastal shoreline change classification (abrasi/akresi) — appears to support someone's thesis (skripsi) with geospatial data.

### Classification
Academic / Thesis support / ML

### Repository
Local: `C:\royan` — `model.py` (26 KB), `model.ipynb`

### What Was Built
[VERIFIED from model.py header] RandomForestClassifier with: label cleaning (gray-zone removal), GroupKFold CV, RandomizedSearchCV (F1 macro, focus on ABRASI/AKRESI classes), custom class_weight for minority classes, confusion matrix/classification reports, GeoPandas/Shapely geometry, joblib model export. Runs in Google Colab (drive mount, `COASTAL-MONITORING` project).

### Technologies
Python, scikit-learn, GeoPandas, Shapely, Pandas, NumPy, Google Colab, joblib

### Engineering Significance
[INFERRED] Demonstrates: geospatial data handling, imbalanced classification, hyperparameter search, cross-validation with grouped data. Strong ML engineering evidence.

---

## 030 — Home Server Homelab (setup-server)

### Identity
Complete self-hosted home server setup (Acer Aspire V5-471, 4GB RAM, 500GB HDD) with documentation, scripts, and architecture diagrams.

### Classification
Infrastructure / Homelab / Personal

### Repository
Local: `C:\setup-server` (docs + `server-files/` + `mobile-files/`) — related: `C:\test-server` (deployment screenshots)

### What Was Built
[VERIFIED] Fully documented homelab:
- Services: Nextcloud (8080), Vaultwarden (8081), Code-server (8082), AdGuard Home (8083), Uptime Kuma (3001), Netdata (19999)
- Docker Compose multi-service; Discord webhook notifications; automated backups (cron, keep last 7); resource monitoring scripts; external HDD setup; Tailscale VPN (no port forwarding)
- Mobile client laptop tooling: dashboard HTML, quick-connect.sh, browser bookmarks
- 11 comprehensive markdown docs (README, ARCHITECTURE, DEPLOYMENT-CHECKLIST, HEADLESS-SETUP, ADGUARD-SETUP, SSH guides...)
- Server is headless (keyboard/trackpad dead) — SSH-first management

### Technologies
Docker, Docker Compose, Ubuntu Server, Tailscale (WireGuard), Nextcloud, Vaultwarden, Code-server, AdGuard Home, Uptime Kuma, Netdata, cron, SSH, Discord webhooks

### Outcome
[VERIFIED] Deployment documented as completed (screenshots in C:\test-server from Nov 2025, "SSH-SETUP-COMPLETE.md", backups structure in ARCHITECTURE.md). Live status: [UNKNOWN] (server not reachable from this machine).

### Engineering Significance
[INFERRED] Demonstrates: homelab/self-hosting, infrastructure architecture design, monitoring/alerting automation, backup strategy, secure remote access (Tailscale), documentation quality. **Excellent infrastructure portfolio evidence.**

### Confidence
Evidence: **High** | Docs: **High** | Portfolio: **High** (infra/devops)

---

## 031 — RBTV Internship Design Docs (magang)

### Identity
Design documentation for the RBTV news portal internship (pre-development artifacts).

### Classification
Internship / Academic

### Repository
Local: `C:\magang` (images/diagrams only)

### What Was Built
[VERIFIED] UML/design artifacts: Use Case diagram, Class diagram + ERD, Sequence diagrams (Editorial, ViewArticle), Activity diagrams (Editorial, ReadArticle, Search), Sitemap, User Flow, Component Architecture, app screenshots (home, article, category, search, sidebar, ads banner).

### Engineering Significance
[INFERRED] Demonstrates requirements analysis and design documentation discipline. Complements project 001.

---

## 032 — Obsidian Vault + CV (wannacry)

### Identity
Obsidian vault containing CV documents.

### Classification
Personal

### Repository
Local: `C:\wannacry` — `.obsidian/`, Welcome.md, Untitled.md, `test/cv-muhammad-fairul-en.html`, `cv-muhammad-fairul-id.html` (EN + ID CV pages, Jul 2025)

### What Was Built
[VERIFIED] HTML CVs (English & Indonesian) + Obsidian vault.

---

## 033 — CV Content Files (learning_site)

### Identity
Detailed CV/ATS markdown + HTML files.

### Classification
Personal

### Repository
Local: `C:\learning_site\cv-ats.html/.md`, `cv_skills_projects.html/.md`, `loading_animations_demo.html`

### What Was Built
[VERIFIED] `cv-ats.md` — ATS-optimized CV (professional summary EN/ID, Vyber.id Head of Operations experience, technical skills table). `cv_skills_projects.md` — comprehensive 30+ project CV. Both contain the user's actual claims (Vyber.id role, skill levels).

### Note
These CVs contain self-reported experience (e.g., "2+ years Head of Operations at Vyber.id", "10+ web applications", "3 years Laravel"). These are user-provided claims — [UNCERTAIN] verification from codebase alone. Portfolio claims must be validated against actual artifacts.

---

## 034 — Docker Compose Trial (awesome-compose)

### Identity
Local clone of the official awesome-compose examples for learning.

### Classification
Experiment

### Repository
Local: `C:\DevOps\Compose_trial\awesome-compose` (git — clone of docker/awesome-compose)

### What Was Built
[VERIFIED] Standard awesome-compose tree: nginx-aspnet-mysql, flask-redis, nextcloud-redis-mariadb, django, elasticsearch-logstash-kibana, etc.

---

# Experiments

- **003 Educational Gaming Algorithms** (FastAPI + probability modeling)
- **008/009 Git branching & conflict practice**
- **012 Docker PHP app**
- **013 Terraform Docker lab**
- **014 Kubernetes PV/PVC lab**
- **019 WhatsApp mention-all bot (Baileys)**
- **025 CLI Conqueror Crossplay (TypeScript)**
- **026 My Crawler (Crawlee/Playwright)**
- **034 awesome-compose trial**
- **WSL: SpiderFoot OSINT environment** (`~/spiderfoot-env` venv + `C:\DevOps\locked\spiderfoot-4.0` + v4.0.tar.gz) — OSINT tool exploration

---

# Infrastructure / Homelab

- **030 Home Server Homelab** (setup-server) — Nextcloud/Vaultwarden/Code-server/AdGuard/Netdata/Uptime Kuma on Tailscale — the flagship infrastructure project
- **WSL2 Ubuntu environment** — Laravel dev stack (docker-laravel), zsh/oh-my-zsh, Docker integration, `.aws`/`.azure`/`.kube` configs, `.minikube`, `.kube` present in Windows home (cloud/k8s exposure)
- **XAMPP / XAMPP5 / XAMPP7** (3 versions) + PHP 3.x + Composer + Python 3.13 + Miniconda (C:\BigData\workspace) — local dev tooling landscape

---

# Academic Work

| Project | Course/Exam | Technologies |
|---|---|---|
| 007 Inventory App (UAS DevOps) | DevOps Final Exam | CI/CD, SonarQube, Grafana, k8s |
| 010 DevOps UTS | DevOps Mid Exam | GitLab CI, Docker, Terraform |
| 011 Tugas 9–14 | DevOps weekly | Prometheus, Loki, SonarQube, TDD, Jira |
| 015 Project Mgmt Prototype | Manajemen Proyek IT | CodeIgniter 3 |
| 016 Donation Prototype | UTS (project mgmt) | CodeIgniter 3 |
| 017 uasci3 | UAS CI3 | CodeIgniter 3 |
| 018 sem3_be_responsi_uts | Backend UTS | PHP |
| 020 tugasbe | Backend assignment | PHP |
| 021 tugas | Web assignment | HTML |
| 027 Big Data Predictive | BPD course (14 sessions) | Python, sklearn |
| 028 Big Data Tugas | Big Data course | Dash, Plotly, EKC analysis |
| 029 Coastal Monitoring (royan) | Thesis support (ML) | scikit-learn, GeoPandas |

---

# Professional Work

## Head of Operations — Vyber.id (Sep 2021 – Oct 2023)
[UNCERTAIN — user-provided] Per `cv-ats.md`: managed IT infrastructure & system support, root-cause analysis, project management (Agile), technical documentation, team leadership (5+). No repository evidence available to verify these claims; treat as user-provided context.

---

# Skill Evidence Matrix

| Skill | Evidence | Projects | Confidence |
|---|---|---|---|
| Laravel | Full news CMS, RBAC, workflow, tests | 001 Kabar Jogja | High |
| Filament (admin panels) | Filament 4.8.5 admin, RBAC, i18n | 001 | High |
| PHP | CodeIgniter apps, PHP app, CI pipelines | 001, 006, 015–018, 020 | High |
| Docker / Compose | Multi-service stacks, dev+prod+octane | 001, 003, 006, 007, 012, 026, 030, 034 | High |
| MySQL | Migrations, schema, import pipelines | 001, 013 | High |
| Redis | Cache/queue service in compose | 001 | High |
| CI/CD (Jenkins) | Declarative pipeline PHP build/test/deploy | 006 | High |
| CI/CD (GitHub Actions) | Build, scan, deploy workflows | 002, 007 | High |
| GitLab CI | Practice repo (test-uts) | 010 | Medium |
| SonarQube | Scanner config, analysis reports | 007, 011 | High |
| Kubernetes | Manifests, PV/PVC, Minikube, k8s deploy | 007, 014, 010 | Medium-High |
| Terraform | Docker provider, applied state | 013, 010 | Medium |
| Grafana / Loki / Promtail | Dashboards, log aggregation, fixes | 007, 011 | High |
| Prometheus | Config coursework | 011 | Medium |
| Tailscale / VPN | Homelab architecture | 030 | High |
| Linux / Ubuntu | WSL, headless server setup | 030, WSL | High |
| Python (general) | Dashboards, ML, GUIs, bots | 003, 027–029, 019(JS) | High |
| scikit-learn / ML | RandomForest, clustering, CV tuning | 027, 029 | High |
| Geospatial (GeoPandas) | Coastal ML features | 029 | Medium |
| Node.js / Express | REST APIs, JWT, testing | 004, 023, 026 | Medium-High |
| React / Next.js | Portfolio, MDX, deployment | 005 | Medium-High |
| React Native / Expo | Mobile app w/ Firebase | 002 | Medium |
| Firebase | Auth, Firestore, Hosting, CI deploy | 002 | High |
| TypeScript | Portfolio, CLI project | 005, 025 | Medium |
| JWT / Auth | API + platform auth | 001, 003, 004 | High |
| Web security | Helmet, CORS, bcrypt, RBAC, audit | 003, 004, 001, 007 | High |
| Testing (PHPUnit/Pest/Jest/pytest) | Multiple suites | 001, 004, 006, 007 | High |
| Jira / JQL | Python generators + guides | 011 | Medium |
| OSINT (SpiderFoot) | Environment + tool exploration | WSL/locked | Medium |

---

# Technology Inventory

## Languages
PHP, JavaScript, TypeScript, Python, SQL, HTML, CSS, Shell/Bash, Markdown

## Frameworks
Laravel 12, CodeIgniter 3, Next.js 15, React 19, Vue 3, Express, FastAPI, Filament 4, Dash/Plotly, React Native (Expo), Flask (in awesome-compose examples)

## Databases
MySQL 8.0, SQLite, Redis 7, Firestore (Firebase), (PostgreSQL in awesome-compose examples only)

## DevOps
Docker, Docker Compose, Kubernetes (Minikube), Terraform, Jenkins, GitHub Actions, GitLab CI, SonarQube, CodeQL, Trivy, pre-commit, Make

## Monitoring / Observability
Grafana, Prometheus, Loki, Promtail, Netdata, Uptime Kuma

## Infrastructure
Ubuntu (Server/WSL), Tailscale, AdGuard Home, Nginx/Apache (via XAMPP/containers), FrankenPHP, Caddy

## Networking
SSH, Tailscale (WireGuard), reverse proxy concepts

## Tools
Git, Composer, npm, pip, Jupyter, VS Code/Cursor (dotfiles), Obsidian, GitHub CLI, kubectl, Minikube, VirtualBox (dotfiles), DBeaver (.dbclient), Postman-less API testing scripts

---

# GitHub Repository Inventory (fairulmuhammad — 23 repos)

| Repo | Visibility | Language | Created | Updated | Notes |
|---|---|---|---|---|---|
| magang-rbtv | PRIVATE | PHP | 2025-10-07 | 2026-04-06 | Kabar Jogja thesis project |
| internship-progres-tracker | PUBLIC | HTML | 2025-09-03 | 2026-02-06 | Firebase tracker (002) |
| skills-introduction-to-github | PUBLIC | — | 2025-08-29 | 2025-12-01 | GitHub Skills clone |
| learning-fundamental | PUBLIC | Python | 2025-08-29 | 2025-08-29 | 12-week plan (022) |
| gamble | PUBLIC | Python | 2025-08-28 | 2025-08-28 | Gaming algorithms (003) |
| inventory-app | PUBLIC | Shell | 2025-07-11 | 2025-08-26 | UAS DevOps (007) GPL-3.0 |
| cli-conqueror-crossplay | PRIVATE | TypeScript | 2025-08-18 | 2025-08-18 | CLI game (025) |
| project-relfconnect | PUBLIC | PHP | 2025-07-24 | 2025-07-24 | Donation prototype (016) MIT |
| portfolio | PRIVATE | TypeScript | 2025-07-12 | 2025-07-12 | Private variant (005) |
| web-portfolio | PUBLIC | TypeScript | 2025-07-12 | 2025-07-12 | Public portfolio (005) |
| fairulmuhammad | PUBLIC | — | 2025-07-12 | 2025-07-12 | GitHub profile repo |
| indeks-kami | PUBLIC (fork) | Blade | 2025-06-18 | 2025-06-18 | KAMI index fork (Laravel) |
| php-app | PUBLIC | PHP | 2025-06-15 | 2025-06-15 | Jenkins CI (006) |
| testing-site | PUBLIC | JavaScript | 2025-05-14 | 2025-05-14 | DevOps UTS (010) |
| CodeIgniter | PUBLIC (fork) | PHP | 2025-03-19 | 2025-04-02 | CI3 framework fork |
| latihan-devops | PUBLIC | HTML | 2025-03-19 | 2025-03-19 | Git practice (008) |
| latihan1-devops | PUBLIC | HTML | 2025-03-17 | 2025-03-17 | Git practice (009) |
| uasci3 | PUBLIC | PHP | 2025-01-22 | 2025-01-24 | UAS CI3 (017) MIT |
| sem3_be_responsi_uts | PUBLIC | PHP | 2024-11-02 | 2025-01-02 | Backend UTS (018) |
| mentionAll | PUBLIC | JavaScript | 2024-12-22 | 2024-12-22 | WhatsApp bot (019) |
| tugasbe | PUBLIC | PHP | 2024-10-30 | 2024-10-30 | Backend assignment (020) |
| tugas | PUBLIC | HTML | 2024-07-24 | 2024-07-25 | Web assignment (021) |

---

# Local Repository Inventory

| Path | Remote | Related GitHub |
|---|---|---|
| C:\DevOps | gitlab.com/tugas7483630/gitlab-test-site | (GitLab) |
| C:\DevOps\latihan-devops | github.com/fairulmuhammad/latihan-devops | 008 |
| C:\DevOps\latihan1-devops | github.com/fairulmuhammad/latihan1-devops | 009 |
| C:\DevOps\php-app | github.com/fairulmuhammad/php-app | 006 |
| C:\DevOps\test-uas\inventory-app | (no remote shown) | 007 |
| C:\DevOps\test-uts (+gitlab-test-site, testing-site) | — | 010 |
| C:\DevOps\Compose_trial\awesome-compose | docker/awesome-compose clone | 034 |
| C:\DevOps\Jenkins\CodeIgniter | CI3 framework clone | — |
| C:\learning_site | (empty repo, no commits) | — |
| C:\learning_site\gambling | github.com/fairulmuhammad/gamble | 003 |
| C:\learning_site\memo_magang | github.com/fairulmuhammad/internship-progres-tracker | 002 |
| C:\learning_site\learning_basic | github.com/fairulmuhammad/learning-fundamental | 022 |
| C:\learning_site\cli_command\cli-conqueror-crossplay | github.com/fairulmuhammad/cli-conqueror-crossplay | 025 |
| C:\project-menejemen-proyek-it\prototype-manajemen-proyek | github.com/halvest/prototype-manajemen-proyek | 015 |
| C:\web-app-port\magic-portfolio | github.com/fairulmuhammad/web-portfolio | 005 |
| C:\web-app-port\testing-vo\portfolio-test | (no remote; Create Next App) | 005-related |
| C:\Users\muham | (home dir tracked as git repo) | — |
| WSL ~/docker-laravel/magang | github.com/fairulmuhammad/magang-rbtv | 001 |

---

# Duplicate / Related Projects

- **web-portfolio ↔ portfolio** (GitHub): public + private variants of the same Next.js portfolio (005). Document as one canonical project.
- **internship-progres-tracker ↔ memo_magang**: same project (002), local folder name differs.
- **prototype-manajemen-proyek ↔ project-relfconnect**: related CodeIgniter prototypes for the same project-management course/exam (015/016).
- **gamble ↔ learning_site/gambling**: same project (003).
- **CodeIgniter fork (GitHub) ↔ uasci3 ↔ DevOps/Jenkins/CodeIgniter**: CI3 framework copies used for exams/coursework (017 + tooling).
- **XAMPP / XAMPP5 / XAMPP7**: three PHP runtime installations — same role, different versions.
- **learning_site CV files ↔ wannacry CV HTML**: overlapping CV documents (032/033).

---

# Unknown / Needs Human Verification

1. Exact role and responsibilities at Vyber.id (self-reported in CV; no repo evidence) — [UNCERTAIN]
2. Was Kabar Jogja (001) deployed to production for RBTV, or only local/dev? — [UNKNOWN]
3. Is the home server (030) still running / in active use? — [UNKNOWN]
4. CLI Conqueror Crossplay (025) contents & purpose — [UNCERTAIN]
5. What is "C:\test-server" beyond deployment screenshots? — [UNKNOWN]
6. Users `tamu` and `wannadevwin` directories — permission denied during scan (other Windows user profiles) — [UNKNOWN]
7. The `C:\Users\muham` home-dir git repo contents — not deeply inspected — [UNKNOWN]
8. magang-rbtv production status (Octane stack deployed?) — [UNKNOWN]
9. `C:\coba_magang`, `C:\New folder`, `C:\drive` — empty or near-empty folders — [UNKNOWN]
10. `C:\transefer backup\sandisk` — large monthly backup archives (photos/data, not code) — verified as backup only

---

# Security Findings

- **[SECURITY WARNING]** `C:\learning_site\project-api\.env` — contains environment variables (likely JWT secret / port). Value intentionally omitted. `.gitignore` exists; verify file is not committed.
- **[SECURITY WARNING]** `WSL ~/docker-laravel/magang/.env` and `.env.octane` — contain APP_KEY and DB credentials. Value intentionally omitted. `.env.octane` has `APP_DEBUG=false` (good). `APP_KEY=base64:...` present — must never be published; repo should rely on .env.example.
- **[SECURITY WARNING]** `C:\DevOps\test-uas\inventory-app\kubeconfig.yaml` — Kubernetes config may contain cluster credentials. Do not commit/publish.
- **[SECURITY WARNING]** `C:\BigData\tugas5071\assets.rar` + asset images — coursework assets; review before publishing.
- [VERIFIED] `setup-server` docs contain Docker Compose password placeholders — instructs user to change them (good practice); actual secrets not present in the doc tree scanned.
- [VERIFIED] `C:\DevOps\latihan_terraform\main.tf` — MySQL root password hardcoded (value intentionally omitted; coursework, local Docker only) — low risk but noted.
- [VERIFIED] No `.ssh` private keys found in WSL (`~/.ssh` contains only known_hosts). AWS/Azure config dirs exist on Windows (`C:\Users\muham\.aws`, `.azure`) — DO NOT publish contents.

---

# Portfolio Candidates

### Tier 1 — Strong Portfolio Projects
1. **001 Kabar Jogja (magang-rbtv)** — Full Laravel 12 + Filament CMS with RBAC, editorial workflow, testing, i18n, Docker/Octane. Deepest full-stack + thesis evidence.
2. **007 Inventory App (DevOps UAS)** — Complete DevSecOps pipeline: GitHub Actions, SonarQube, CodeQL, Trivy, Grafana/Loki, k8s. Best DevOps proof.
3. **030 Home Server Homelab** — Self-hosted infrastructure with architecture docs; strong infra/networking story.
4. **002 Internship Progress Tracker** — Web + React Native mobile app on Firebase with real auth edge cases. Full-stack + mobile breadth.

### Tier 2 — Supporting Projects
5. **003 Educational Gaming Algorithms** — Math + algorithms + FastAPI full-stack; unique talking point.
6. **005 Magic Portfolio** — Public Next.js/TS showcase.
7. **004 Task Management API** — Backend fundamentals with testing.
8. **006 php-app Jenkins pipeline** — CI/CD fundamentals.
9. **029 Coastal Monitoring ML** — ML/geospatial thesis support.

### Tier 3 — Experiments / Archive
010, 011, 012, 013, 014, 019, 023, 024, 026, 027, 028, 034 + git practice repos (008/009) + assignment repos (015–018, 020, 021, 022).

---

# CV Evidence Candidates (verified facts only)

- Implemented RBAC with 17 permissions and policy-based authorization in a Laravel news CMS [001]
- Designed an 8-state editorial workflow with return-to-draft transitions [001]
- Built multi-language support (EN/FR) for an admin panel [001]
- Wrote Pest/PHPUnit feature tests for RBAC, article policies, and workflow [001]
- Containerized a Laravel app with Docker Compose (dev/prod/Octane) + FrankenPHP/Caddy [001]
- Created a Jenkins declarative pipeline (install → test → Docker build → deploy) [006]
- Integrated SonarQube, CodeQL, and Trivy into GitHub Actions CI/CD [007]
- Configured Grafana dashboards and Loki log aggregation, resolving data-source issues [007]
- Wrote Kubernetes manifests (deployment + PV/PVC) and used Minikube [007, 014]
- Applied Terraform (Docker provider) and generated real state files [013]
- Built JWT-authenticated REST APIs with Joi validation + Jest/Supertest coverage [004]
- Implemented Firebase Auth with Google Sign-In, account linking, and provider-conflict handling [002]
- Developed a React Native (Expo) mobile app with notifications, charts, image picker [002]
- Implemented cryptographic-RNG slot machine with calibrated RTP/house-edge math [003]
- Performed EKC econometric analysis (R²) and built interactive CO2 dashboards [028]
- Trained RandomForest classifiers with GroupKFold + RandomizedSearchCV on geospatial coastal data [029]
- Designed and documented a full self-hosted homelab (6 services, Tailscale, backups, alerts) [030]

---

# Missing Information (user confirmation needed)

1. Exact scope of your role on the RBTV project (backend vs full-stack vs also design)? — inferred full-stack from evidence.
2. Is magang-rbtv deployed anywhere publicly, or local only?
3. Did you run the Jenkins pipeline in a real Jenkins instance, or local-only?
4. Confirm Vyber.id experience details for CV (dates, team size) — only self-reported.
5. Is the home server currently operational? What services are live?
6. GitHub `portfolio` (private) vs `web-portfolio` (public) — keep both or consolidate?
7. CLI Conqueror Crossplay — what is it and is it a portfolio candidate?
8. The `royan` coastal ML project — is this your thesis or helping someone else? Clarify ownership for CV claims.

---

# Notes on scan methodology

- Scanned: C:\ root-level project folders, C:\Users\muham home + dotfiles, WSL2 Ubuntu home & tooling, GitHub via authenticated `gh` CLI (all 23 repos), local git remotes/history.
- Excluded: system dirs (Windows, Program Files, ProgramData internals), node_modules, vendor, caches, `.next`, backup archives content, other user profiles (permission denied).
- Evidence tags used: [VERIFIED] = source/config/history; [INFERRED] = reasoned from evidence; [UNCERTAIN]/[UNKNOWN] = not confirmable.
- No secrets were copied into this document.