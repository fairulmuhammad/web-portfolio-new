# Complete Engineering Project Archive

Generated: 2026-08-14

Source: Local filesystem + GitHub (fairulmuhammad)

---

# Executive Summary

Total projects discovered: **28** (5 documented in depth + 17 GitHub learning repos + 1 profile repo + 2 infra/DevOps artifacts + 1 local snapshot archive + 1 spec-only portfolio + 1 template clone)

Professional / internship projects:
- **Kabar Jogja** (magang-rbtv) — Laravel 12 + Filament 4.8.5 news portal CMS for RBTV Jogja, with 9-state editorial workflow, RBAC, audit trail, i18n, ads/analytics. Internship deliverable + Amikom TA thesis material. [VERIFIED, High]
- **Internship Progress Tracker** — web + Expo mobile app on Firebase (Auth/Firestore), GitHub Pages LIVE (HTTP 200 verified), 36 commits. [VERIFIED, High]

Academic / coursework projects:
- uasci3 (CodeIgniter 3 grade app, Med), sem3_be_responsi_uts + tugasbe (PHP CRUD, Low-Med dup pair), project-relfconnect (CodeIgniter donation prototype, Med-High), tugas (static HTML, Low), testing-site (DevOps exam practice, Low-Med), inventory-app (Flask + full DevOps stack, High), gamble (educational gaming algorithms, Med-High), learning-fundamental (12-week plan, Low/potential), latihan-devops + latihan1-devops (git practice, Low dups), mentionAll (WhatsApp bot, Low-Med)

Personal projects:
- web-portfolio (spec-only, design phase), portfolio (unmodified template clone), cli-conqueror-crossplay (CLI reference site), fairulmuhammad (profile README)

Experiments:
- gamble (gambling-algorithm math), mentionAll (WhatsApp automation), testing-site (Terraform + GitHub Actions CD practice)

Infrastructure projects:
- **wannacry-server homelab** — Ubuntu 24.04, 1.7GB RAM, Docker (MySQL x2, Redis, phpMyAdmin, hello-app, netdata), systemd services (9router, cloudflared, cockpit, actions runner), Tailscale Funnel + Cloudflare tunnels, monitoring (glances, PCP, Cockpit). [VERIFIED, High]
- **Test-Learn-Devops** — 8-module DevOps curriculum + 8 labs + capstone (Flask hello-app with CI/CD on GitHub Actions + self-hosted runner). [VERIFIED, High]

---

# Project Index

| # | Project | Category | Technologies | Status | Evidence |
|---|---|---|---|---|---|
| 001 | Kabar Jogja (magang-rbtv) | Internship / Web / Backend | Laravel 12, Filament 4.8.5, MySQL, Redis, Docker, FrankenPHP/Octane | Active until 2026-06-30 | [VERIFIED] High |
| 002 | magang_backup | Archive (snapshot of 001) | Laravel 12, Filament 4, MySQL | Stale/superseded | [VERIFIED] High |
| 003 | Internship Progress Tracker | Personal / Tool | Vanilla JS, Firebase, Expo RN | Active until 2026-02-06 | [VERIFIED] High |
| 004 | portfolio | Personal (template clone) | Next.js 15, Once UI | Abandoned | [VERIFIED] High |
| 005 | web-portfolio | Personal (design only) | Next.js (spec), TypeScript | Active planning | [VERIFIED] High |
| 006 | cli-conqueror-crossplay | Personal / Tool | Vite, React, shadcn | Dormant | [VERIFIED] High |
| 007 | inventory-app | Coursework / Tool | Flask, Prometheus, Docker, k8s | Active until 2025-08-26 | [VERIFIED] High |
| 008 | project-relfconnect | Coursework | CodeIgniter 3, MySQL | Completed | [VERIFIED] Med-High |
| 009 | gamble | Experiment / Learning | Python, FastAPI, SQLite | Complete | [VERIFIED] Med-High |
| 010 | uasci3 | Coursework | CodeIgniter 3, FPDF | Finished | [VERIFIED] Med |
| 011 | fairulmuhammad | Profile | markdown, shields | Active | [VERIFIED] Med |
| 012 | testing-site | Coursework / Learning | Express, Terraform, GH Actions | Abandoned | [VERIFIED] Low-Med |
| 013 | mentionAll | Experiment / Tool | Node, Baileys | Working-ish | [VERIFIED] Low-Med |
| 014 | sem3_be_responsi_uts | Coursework | PHP, MySQL | Finished | [VERIFIED] Low-Med |
| 015 | php-app | Coursework / Learning | PHP 8.2, Jenkins | Abandoned | [VERIFIED] Low |
| 016 | CodeIgniter | Clone (upstream) | CodeIgniter 3 | Unmodified fork | [VERIFIED] Low |
| 017 | tugasbe | Coursework | PHP, MySQL | Finished (dup of 014) | [VERIFIED] Low |
| 018 | tugas | Coursework | HTML, Tailwind | Abandoned | [VERIFIED] Low |
| 019 | latihan-devops | Learning | git | Abandoned (dup of 020) | [VERIFIED] Low |
| 020 | latihan1-devops | Learning | git | Completed (dup of 019) | [VERIFIED] Low |
| 021 | learning-fundamental | Learning | Python, PHP | Fresh start | [VERIFIED] Low/potential |
| 022 | skills-introduction-to-github | Clone (course) | GH Actions | Completed course | [VERIFIED] None |
| 023 | indeks-kami | Clone (third-party) | Laravel 6 | Zero user commits | [VERIFIED] None |
| 024 | wannacry-server homelab | Infrastructure | Docker, systemd, Tailscale, Cloudflare | Active | [VERIFIED] High |
| 025 | Test-Learn-Devops | DevOps / Learning | Python, Flask, Docker, GH Actions | Active (capstone live) | [VERIFIED] High |
| 026 | internship-progres-tracker mobile | Personal / Mobile | Expo, React Native | Active until 2026-02-06 | [VERIFIED] High |

---



# 01 — magang-rbtv (Kabar Jogja News Portal)

## Identity

| Field | Value |
|---|---|
| Project name | Kabar Jogja — News Portal CMS (repo: `magang-rbtv`) |
| Type | Full-stack news portal + Filament admin CMS with editorial workflow |
| Owner / author | fairulmuhammad (Muhammad Fairul, `muhammadfairul13@students.amikom.ac.id`) |
| Context | Internship (magang) project at RBTV Jogja (Radio Republik Televisi Yogyakarta) [VERIFIED via README/docs] |
| Institution | Amikom Yogyakarta — also used as final thesis (TA) material [VERIFIED via `docs/ta`, `docs/final`, thesis chapters in git history] |
| Primary language | Indonesian (UI translations ID/EN; docs in Indonesian) |

## Classification

- Laravel 12 web application (`laravel/framework ^12.0`, `php ^8.2`, runtime PHP 8.4 in Docker) [VERIFIED composer.json/Dockerfile]
- Filament admin panel v4 (`filament/filament ^4.8.5`) [VERIFIED composer.json]
- News CMS: articles, categories, tags, ads, analytics + editorial approval workflow (Writer → Supervisor → Redaktur) [VERIFIED]
- RBAC: custom role/permission system layered on legacy single `role` column + new pivot tables [VERIFIED app/Models/User.php]
- Multi-language: EN/ID per-user locale persistence [VERIFIED SetUserLocale middleware, LocaleController, migrations]
- Deployment: Docker Compose (dev, octane, prod variants); FrankenPHP + Laravel Octane [VERIFIED]

## Repository

| Field | Value |
|---|---|
| Local path | `/home/wannacry/project/magang-rbtv` [VERIFIED] |
| Remote | `https://github.com/fairulmuhammad/magang-rbtv.git` [VERIFIED git remote -v] |
| Branch (checked out) | `server` [VERIFIED] |
| Branches | `main` (12 commits, last 2025-12-05), `server` (121 commits, last 2026-06-30), `coba` (experimental, 2025-10-07) [VERIFIED] |
| Commit count | 121 on `server` (HEAD) [VERIFIED `git rev-list --count HEAD`] |
| First commit | 2025-10-07 12:36:50 +0700 — "Initial commit: Laravel news portal project with Filament admin" [VERIFIED] |
| Last commit | 2026-06-30 15:35:06 +0700 — "docs: add and update README files with correct Docker usage instructions" [VERIFIED] |
| Working tree | clean at HEAD (no uncommitted changes shown) [VERIFIED] |

> [SECURITY WARNING] `.git/config` remote URL embeds a GitHub Personal Access Token (`https://fairulmuhammad:ghp_***@github.com/...`). Value intentionally omitted. Token is committed in git config (not just env) — anyone with repo access can read it. Recommended: revoke token on GitHub, `git remote set-url` to clean HTTPS/SSH URL.

## Timeline

| Date | Milestone |
|---|---|
| 2025-10-07 | Initial commit; first README; `.env.example` (branch `coba`) |
| 2025-10-25 | RBAC system + article page design improvements [VERIFIED git log `15d6abf`] |
| 2025-10-27 | Project cleanup + security improvements [VERIFIED `18d6556`] |
| 2025-11-10 | Unified nav/footer styling [VERIFIED `cdcbb24`, `9834b4e`] |
| 2025-11-11 | `server` branch prepared; frankenphp + .env ignored [VERIFIED `fdf21a9`] |
| 2025-12-01 | Full CI/CD pipeline (GitHub Actions) added [VERIFIED `57d9ee2`] |
| 2025-12-05 | Last commit on `main`; backup SQL + search changes [VERIFIED] |
| 2026-04-04 | RBAC restructure: roles/permissions/user_role/audit_logs migrations; workflow fields; user locale [VERIFIED migrations] |
| 2026-04-28 | Workflow enum expansion (9 states); revision notes [VERIFIED migrations] |
| 2026-06-30 | Final commit: READMEs + Docker usage docs; thesis chapters committed [VERIFIED] |

## Problem

[INFERRED — no explicit problem statement file found; consistent with docs/titles]
- RBTV Jogja needed a modern news portal: public-facing site + internal CMS for editorial staff.
- Old workflow was manual/email-based; required structured article pipeline: writer drafts → supervisor reviews → redaktur (editor-in-chief) approves/publishes.
- Access control needed per-role visibility (writers see own articles only; supervisors review; admins/redaktur manage everything).
- Internship deliverable doubles as Amikom final thesis (TA): heavy documentation burden (UML diagrams, thesis chapters, test reports committed to repo).

## Purpose

Build + document a production-shaped news portal CMS: public reader site ("Kabar Jogja" frontend) + Filament admin dashboard, with editorial workflow, RBAC, audit trail, ads, analytics, i18n — as internship deliverable and thesis material for fairulmuhammad. [VERIFIED README, docs/, thesis chapters in git]

## What Was Built

Dual-interface app [VERIFIED README/docs]:
1. Public site — homepage (kabar-jogja style), article pages, category/tag listing, search + live search suggestions, ad banners with click/view tracking, read-completion analytics endpoint.
2. Filament admin panel (`/admin`) — resources: Articles, Categories, Tags, Ads, Users; dashboard with 4 workflow widgets (Writer/Supervisor/Redaktur queues, Stats, Latest, Chart).

## Features (verified)

| Feature | Evidence |
|---|---|
| Article CRUD + editorial workflow (9 states: draft → submitted → under_review → revision_requested → revised → approved_by_editor → final_review → published/archived) | `app/Enums/WorkflowStatus.php`, `app/Services/ArticleWorkflowService.php` [VERIFIED] |
| Role-based visibility + workflow actions per role | `app/Filament/Widgets/*WorkflowWidget.php`, ArticleResource tables/actions [VERIFIED file list] |
| RBAC: roles/permissions pivots + legacy single-role fallback | `app/Support/Permissions.php`, `User::hasRole/hasPermission`, migrations 2026_04_04_0001xx [VERIFIED] |
| Policies per resource (article/category/tag/ad/user) + 15 workflow abilities (submit, startReview, requestRevisions, approveByEditor, publish, archive, returnToDraft…) | `app/Policies/*.php` [VERIFIED] |
| Audit logging of workflow transitions (from_status/to_status/reason) | `app/Services/AuditLogService.php`, migrations `create_audit_logs_table`, `add_workflow_fields_to_audit_logs` [VERIFIED] |
| Multi-language EN/ID: per-user `locale` column, `SetUserLocale` middleware, `LocaleController::switch`, `lang/en|id` JSON+PHP | [VERIFIED] |
| Admin top bar: language switcher + logout (custom Filament views) | `resources/views/filament/admin/topbar/*` [VERIFIED] |
| Ads management + click/view tracking routes | `AdClickController`, `routes/web.php` `ad/click`, `ad/view`, `AdResource` [VERIFIED] |
| Public analytics: read-complete endpoint (validated, stores Analytics row) | `routes/web.php` `api/analytics/read-complete` [VERIFIED] |
| Search + search suggestions (API, LIKE-based) | `routes/web.php` `search-suggestions` [VERIFIED] |
| 2FA (Filament Breezy) + passkeys | `jeffgreco13/filament-breezy ^3.2.4`, `TwoFactorAuthenticatable` trait, `breezy_sessions`/`passkeys` migrations [VERIFIED] |
| N+1 prevention: lazy-loading guard + eager-loading helpers | `AppServiceProvider::preventLazyLoading`, `User::hasRole` loadMissing, commit `da19d8d` [VERIFIED] |
| Image handling: Intervention Image 3, ArticleObserver resize/optimize on save | [VERIFIED] |
| Performance: fulltext index on articles, composite indexes migration | `2026_02_17_022908_add_fulltext_index`, `2025_12_12_143200_add_performance_indexes` [VERIFIED] |
| Telescope (dev) + Redis cache/queue/session in prod override | composer.json, docker-compose.prod.yml [VERIFIED] |
| k6-style load testing tooling + performance benchmark script | `tools/k6_plot.py`, `tests/Performance/performance_benchmark.php` [VERIFIED] |

## Architecture

```
                        ┌─────────────────────────────────────┐
  Browser (reader) ───► │  Public site (Blade views)          │
                        │  /  /article/{slug} /category /tag  │
                        │  /search /kabar-jogja /ad/click     │
                        └──────────────┬──────────────────────┘
                                       │
                        ┌──────────────▼──────────────────────┐
  Browser (staff) ────► │  Filament v4 admin panel (/admin)   │
                        │  Resources: Articles, Categories,   │
                        │  Tags, Ads, Users + workflow widgets│
                        └──────────────┬──────────────────────┘
                                       │
                        ┌──────────────▼──────────────────────┐
                        │  Laravel 12 app                     │
                        │  Controllers: Home, Article,        │
                        │    AdClick, Locale                  │
                        │  Services: ArticleWorkflowService,  │
                        │    AuditLogService                  │
                        │  Policies (5) + ArticleObserver     │
                        │  Middleware: locale, admin, editor, │
                        │    role, throttleApi                │
                        └──────┬──────────────┬───────────────┘
                               │              │
                 ┌─────────────▼───┐   ┌──────▼─────────┐
                 │ MySQL 8.0       │   │ Redis 7        │
                 │ magang_news_new │   │ (cache/queue/  │
                 │ + phpMyAdmin    │   │  session)      │
                 └─────────────────┘   └────────────────┘
        Runtime: dev = php artisan serve; prod = FrankenPHP worker mode (Octane)
```

## Technologies

| Tech | Version | Evidence |
|---|---|---|
| PHP | ^8.2 (composer); 8.4 in Docker (frankenphp:php8.4) | composer.json, Dockerfile [VERIFIED] |
| Laravel | ^12.0 (12.35.1 per docs README badge) | composer.json [VERIFIED] |
| Filament | ^4.8.5 | composer.json [VERIFIED] |
| MySQL | 8.0 | docker-compose.yml [VERIFIED] |
| Redis | 7-alpine | docker-compose.yml [VERIFIED] |
| FrankenPHP / Laravel Octane | octane ^2.13; dunglas/frankenphp | composer.json, Dockerfile, docker-compose.octane.yml [VERIFIED] |
| Tailwind CSS | ^4.1.16 (Vite plugin) | package.json [VERIFIED] |
| Vite | ^7.0.4 | package.json [VERIFIED] |
| Pest + PHPUnit | pest `*`, phpunit ^11.5.3 | composer.json [VERIFIED] |
| Intervention Image | ^3.11 | composer.json [VERIFIED] |
| Filament Breezy (2FA/passkeys) | ^3.2.4 | composer.json [VERIFIED] |
| Telescope | ^5.15 (dev) | composer.json [VERIFIED] |
| Larastan (PHPStan) | ^3.0, phpstan.neon present | composer.json [VERIFIED] |
| Pint | ^1.24, pint.json present | composer.json [VERIFIED] |
| Docker / docker compose | — | docker-compose*.yml, Dockerfile [VERIFIED] |

## Backend

- Controllers: `HomeController` (home/search), `ArticleController` (show/category/tag), `AdClickController` (click/view), `LocaleController` (switch), base `Controller`. [VERIFIED file list]
- Services: `ArticleWorkflowService::transition()` — single choke point for state changes: checks policy ability per target state, stamps timestamps (submitted_at, reviewed_at, approved_at, published_at), persists revision notes, fires DB notifications, writes audit log with from/to status + reason. [VERIFIED source]
- `AuditLogService` — structured audit entries for transitions. [VERIFIED]
- Observers: `ArticleObserver::saving` — image resize/optimize via Intervention when featured image changes (skips http URLs). [VERIFIED]
- Middleware: `SetUserLocale` (per-user locale), `AdminMiddleware`, `EditorMiddleware`, `RoleMiddleware`, `throttleApi` (rate limiting). Aliased in `bootstrap/app.php`. [VERIFIED]
- Notifications: Filament DB notifications to supervisors/redaktur on submit; author notified on revision/return-to-draft with reason. [VERIFIED `sendWorkflowNotification`]
- `Model::preventLazyLoading` in non-production (N+1 guard). [VERIFIED]

## Frontend

- Blade layouts + pages: `layouts/app`, `pages/home`, `pages/kabar-jogja-home`, `pages/article`, `pages/category`, `pages/search`, components (article-card, sidebar, ad-banner, ad-banner-iab, image-loader). [VERIFIED resources/views]
- Custom Filament topbar: language-switcher + logout blades; custom admin CSS `css/filament-admin.css`. [VERIFIED]
- Vite + Tailwind 4 build; axios for API calls. [VERIFIED package.json/vite.config.js]
- `home-backup`/`home-enhanced`/`test-*.html` leftovers suggest iterative redesigns of homepage. [VERIFIED file list]

## Database

Tables (from migrations, MySQL): [VERIFIED migration list]

- `users` (+ `role`, `locale` columns; breezy 2FA/passkey tables: `breezy_sessions`, `passkeys`)
- `roles`, `permissions`, `role_permission`, `user_role` (RBAC pivots, added 2026-04-04)
- `categories` (+ color/description/active/articles_count)
- `articles` (+ view_count, admin-control fields, workflow fields: workflow_status, submitted_at, reviewed_at, approved_at, published_at, reviewed_by, approved_by, revision_notes, revision_notes_updated_at)
- `tags`, `article_tag` (+ tag_id index)
- `ads` (+ clicks)
- `analytics`
- `audit_logs` (+ workflow fields: from_status, to_status, reason)
- `notifications`, `jobs`, `cache`, `telescope_entries` (4 tables)

Relationships: User hasMany Article; Article belongsTo User/Category, belongsToMany Tag; Role belongsToMany Permission/User; Ad, Analytics standalone-ish. [VERIFIED models]

Data import: `database/import/` mounted into MySQL init (`docker-entrypoint-initdb.d`), `magang_backup.sql`, `import-database.sh` / `import-database-octane.sh`, `extract_data.php` + `extracted_data.json` (legacy data migration tooling). [VERIFIED]

## API

No dedicated API routes file (`routes/api.php` absent); JSON endpoints live in `routes/web.php` under `/api` prefix: [VERIFIED]

- `GET /api/headlines` — 5 latest published article titles
- `GET /api/search-suggestions?q=` — articles (LIKE title) + categories
- `POST /api/analytics/read-complete` — validated (article_id exists, read_percentage 0-100), stores Analytics row
- Unauthenticated, no API auth/sanctum — internal-use endpoints [INFERRED]

## Authentication / Authorization

- Auth: standard Laravel + Filament panel auth; Breezy 2FA + passkeys. Default seeded accounts incl. `admin@rbtv.com`. [VERIFIED README]
- Authorization (RBAC reconstruction): [VERIFIED User.php, Permissions.php, seeders]
  - Legacy: single `role` column on users — `admin`, `editor` (supervisor), `writer`, `user`.
  - New (2026-04): `roles`/`permissions` tables + `user_role`/`role_permission` pivots, `RolePermissionSeeder`/`UserRoleSeeder`.
  - `User::hasPermission` = isAdmin shortcut → roles→permissions pivot check → legacy role match fallback (explicitly commented "Fallback for legacy single-role authorization until migration is complete").
  - Permissions constants: 17 granular (article.view_any/view_own/create/update_any/update_own/submit/review/approve/publish/archive; category.manage; tag.manage; ad.manage; user.manage; role.manage; audit.view; workflow.manage).
  - Policies: ArticlePolicy with workflow abilities (submit/startReview/requestRevisions/approveByEditor/submitRevised/sendToRedaktur/publish/archive/returnToDraft…), plus Ad/Category/Tag/User policies.
  - Workflow role map (from enum labels + widget names): writer = draft/submit/revise; supervisor (editor) = review/approve; redaktur (admin) = final review/publish/archive. [INFERRED from enum stage comments + widgets]

## Infrastructure

- Docker Compose dev stack (`docker-compose.yml`, project `magang-dev`): app (magang-server-app, :8087), MySQL 8.0 (magang-server-db, :3308), Redis 7 (magang-server-redis, :6380), phpMyAdmin (:8088). Named volumes db_data_server, redis_data_server. [VERIFIED]
- Octane stack (`docker-compose.octane.yml`, project `magang-octane`): separate ports 8090/8091/3309/6381, FrankenPHP worker mode, opcache+JIT php-prod.ini. [VERIFIED]
- Prod override (`docker-compose.prod.yml`): no volume mounts (code baked), APP_DEBUG=false, redis cache/session, `frankenphp run` with Caddyfile. [VERIFIED]
- Dockerfile: multi-mode (dev/prod build args, baked .env variants), frankenphp base, redis ext, composer, storage:link, opcache/JIT configs `docker/conf/php-{dev,prod}.ini`. [VERIFIED]
- `Caddyfile`, `start.sh`, `start-octane.sh`, `setup-laptop.sh` for local setup. [VERIFIED]

## CI/CD

- GitHub Actions workflow (`feat: implement comprehensive CI/CD pipeline`, 2025-12-01): installs composer deps before build, .env setup, VIEW_COMPILED_PATH + storage dirs, Pint style fix, Filament theme CSS path, SQLite-compatible tests (whereHas instead of HAVING), coverage threshold baseline, PHP 8.2 removed from matrix. [VERIFIED git log `57d9ee2` + follow-up fix commits]
- No deployment pipeline beyond Docker images — deploy = docker compose up on server [INFERRED from PHASE3 docs + prod compose].

## Deployment

- Self-hosted Docker deployment documented in `docs/dev/PHASE3_DEPLOYMENT_REPORT.md` / `PHASE3_QUICK_COMMANDS.md` [VERIFIED file list].
- Two modes: dev (artisan serve, volume mounts) vs prod (FrankenPHP worker, baked image, no mounts). [VERIFIED]
- [UNCERTAIN] Whether prod is currently running anywhere — no live URL or server evidence in repo.

## Git History (milestones only)

- 2025-10-07 initial commit → 2025-10-25 RBAC + article design → 2025-10-27 cleanup/security → 2025-11-10 nav/footer polish → 2025-11-11 server branch split → 2025-12-01 CI/CD → 2025-12-05 main frozen (backup SQL) → 2026-04-04 RBAC restructure + locale + audit → 2026-04-28 workflow enum expansion + revision notes → 2026-06-30 docs/README final. [VERIFIED]
- Thesis documentation committed throughout: chapter III methodology (Dec 2025), chapter IV results (Jan 2026), chapter V conclusions (Feb 2026), UML/class/sequence diagrams, test reports, master prompts for research. [VERIFIED git log]
- One junk commit: `ddf9860 qweq`. [VERIFIED]

## Engineering Problems

- N+1 queries on article lists (docs commit `da19d8d` "documentation eager loading n+1 query"; preventLazyLoading guard). [VERIFIED]
- RBAC migration mid-flight: dual system (legacy role column + pivot tables) with fallback logic — acknowledged in code comment. [VERIFIED]
- Image URL storage inconsistency: `storage/` prefix stripping + http skip in observer; `fix_article_image_urls`, `fix-schema.php` migration scripts. [VERIFIED]
- Workflow state explosion: 9-state enum replaced earlier smaller enum (`expand_workflow_status_enum` migration). [VERIFIED]
- CI test/Docker friction: multiple CI fix commits (env before composer, VIEW_COMPILED_PATH, storage dirs, SQLite HAVING→whereHas, coverage thresholds). [VERIFIED git log]
- Duplicate/messy migrations (e.g. two `add_clicks_to_ads_table`, two `add_color...categories`), leftover `magang_backup.sql` + `extracted_data.json` in repo root. [VERIFIED file list]

## Technical Decisions

- Filament over custom admin — rapid CRUD + policy integration; custom widgets for per-role workflow queues. [INFERRED]
- FrankenPHP/Octane worker mode for prod performance (opcache+JIT, redis session/cache). [VERIFIED]
- MySQL 8 over SQLite even though tests run SQLite (CI fixes mention SQLite) — parity risk acknowledged. [INFERRED]
- Single `ArticleWorkflowService` as workflow choke point instead of scatter-gauge state changes. [VERIFIED source]
- Docker bake .env into image (with compose env override) — dev/prod parity via build args. [VERIFIED]
- Fulltext index on articles for search perf (2026-02). [VERIFIED]
- Breezy for 2FA/passkeys instead of hand-rolled MFA. [VERIFIED]

## Outcome

[INFERRED]
- Working full-stack news portal with 9-state editorial workflow, RBAC, audit trail, i18n, ads/analytics — 34 test files across Feature/Unit/BlackBox/WhiteBox/Security/Performance categories, docs-heavy thesis-aligned repo.
- Delivered as internship (magang) result at RBTV Jogja; code and documentation double as Amikom TA (thesis) evidence.

## Current Status

- Repo active until 2026-06-30; last commits are docs/README polish — feature work concluded. [VERIFIED]
- Branch `main` stale (2025-12), work continues on `server`. [VERIFIED]
- [UNKNOWN] Live deployment status; [UNKNOWN] whether RBTV adopted it.

## Engineering Significance

- Above-average for an internship project: policy-driven workflow state machine, audit trail, RBAC with migration path, N+1 discipline, fulltext indexing, load-testing scripts, CI, containerized prod with Octane. [VERIFIED code]
- Weaknesses: duplicate migrations/scripts and root-level backup SQL/JSON blobs, secrets in git remote URL, dual RBAC fallback (temporary but shipped), public debug route `GET /intelligent-fix` left in routes/web.php (exposes schema column listing — debug leftover). [VERIFIED routes]

## Evidence

- Primary: source inspection of `app/`, `routes/`, `database/migrations`, `docker-compose*.yml`, `Dockerfile`, `composer.json`, `package.json`, `bootstrap/app.php`, `resources/views`, `tests/` (34 PHP test files), `docs/` (40+ docs incl. RBAC, PHASE3 deployment, thesis chapters, UML).
- Git: `git log` (121 commits, full history), branches, remotes, dates.
- Not inspected: `vendor/`, `node_modules/`, `storage/logs`, `.env` values (redacted), `magang_backup.sql` contents.

## Confidence

- **Evidence: High** — nearly every claim above verified directly in source or git history; the repo is documentation-heavy (self-describing).
- **Doc: High** — README + docs/README + 40+ dev/thesis docs corroborate code; docs sometimes lag (README says Filament v3, composer says ^4.8.5 → trusted code over docs).
- **Portfolio: High** — substantive, thesis-backed internship project with real engineering depth (workflow, RBAC, audit, perf, CI, containers). Strong portfolio item; needs: remove leaked token, prune debug routes/backup blobs, unify RBAC, maybe deploy live demo.


# 02 — magang_backup: Local Snapshot Archive of magang-rbtv

## Identity

- **Name**: `magang_backup` (directory `/home/wannacry/project/magang_backup`)
- **Contents**: Working-tree copy of the Kabar Jogja news portal + nested git clone `magang_backup/magang` + DB dump + storage archive + env/config leftovers
- **Project being backed up**: **Kabar Jogja** — Laravel 12 + Filament 4 news portal for RBTV Jogja (Radio Republik Televisi Yogyakarta) [VERIFIED: README.md line 1 "Kabar Jogja - News Portal"; "built with Laravel and Filament admin panel for RBTV (Radio Republik Televisi) Jogja"]
- **Owner**: fairulmuhammad (GitHub) [VERIFIED: git config + commit author]
- **Backup date**: ~2025-11-11 (file mtimes) [VERIFIED: ls -la]

## Classification

**Offline snapshot/backup copy of the magang-rbtv repository, frozen at 2025-11-10 commit state. Not a separate project, not an older version of the codebase — the same project at an earlier point in its history.** [VERIFIED]

Two layers:

1. **Outer dir** (`magang_backup/`) — working tree copy, `git init`-ed but **zero commits** (fresh repo on branch `master`, all files untracked) [VERIFIED: `git log` = "No commits yet"; `git status` shows everything untracked]. Holds extra backup artifacts: `magang_backup.sql` (MySQL 8.0.42 dump, DB `magang_news_new`, 87 KB) [VERIFIED: dump header], `storage_backup.tar.gz` (11 MB, storage/app incl. private article images) [VERIFIED: tar listing], `zshrcconfig.txt`, `.env`, `.env.bak.1762852066`.
2. **Nested dir** (`magang_backup/magang/`) — real git clone of `https://github.com/fairulmuhammad/magang-rbtv.git`, branch `main`, **10 commits** (2025-10-07 → 2025-11-10) [VERIFIED: git log]. Clean working tree, no local modifications [VERIFIED: git status empty].

## Repository

| Property | magang_backup (outer) | magang_backup/magang (nested) | magang-rbtv (live) |
|---|---|---|---|
| Git repo | fresh init, 0 commits, branch `master` | clone, 10 commits, branch `main` | full clone, 130 commits, branches `main`, `server`, `coba` |
| Remote | none | `origin → github.com/fairulmuhammad/magang-rbtv.git` (clean URL) | same repo + `server` branch; origin URL **contains embedded PAT token** |
| Commit range | n/a | 2025-10-07 → 2025-11-10 | 2025-10-07 → 2026-06-30 |
| Last commit | n/a | `e133d10` "comment unused code" (2025-11-10) | `4395b79` docs (2026-06-30) |

[VERIFIED: git log/remote/config in all three dirs]

## Relationship to magang-rbtv (CRITICAL)

**magang_backup is a historical snapshot of magang-rbtv, NOT a canonical or parallel codebase.**

Proof chain [VERIFIED]:

1. Nested clone shares the **exact same first commit** as magang-rbtv: `1e618ea 2025-10-07 "Initial commit: Laravel news portal project with Filament admin"` — identical hash in both repos. Same lineage.
2. All 10 nested commits are a prefix of magang-rbtv's history: `1e618ea → 0a21541 → 15d6abf → 18d6556 → 02cb7d1 → d46e9ee → cdcbb24 → 9834b4e → e133d10` all present in magang-rbtv log; `e133d10` is magang-rbtv's state at 2025-11-10, followed there by `fdf21a9` (2025-11-11, "Prepare server branch") and `1cf93ee` (2025-11-22, "Clean up project").
3. Remote URL of nested clone = magang-rbtv repo URL.
4. Outer README is byte-identical to nested README [VERIFIED: diff].
5. Outer docker-compose.yml = nested version with 2 edits: host port `8081` (outer) vs `8080` (nested), plus bind-mount `.:/app` (nested only) [VERIFIED: diff].

So: **outer dir = full working copy (with prod-ish extras) at ~same date; nested dir = the clean git clone; live magang-rbtv = the canonical repo that continued for ~8 more months (130 commits total).**

## Timeline

- 2025-10-02 — DB schema migration timestamps (users, categories, articles, tags, ads, analytics) [VERIFIED: migration filenames]
- 2025-10-07 — Initial commit; README; .env.example config (commits 1–3) [VERIFIED: git log]
- 2025-10-25 — RBAC system + article page redesign (`15d6abf`) [VERIFIED]
- 2025-10-27 — Project cleanup + security improvements (`18d6556`); deployment README (`02cb7d1`) [VERIFIED]
- 2025-10-29 — WINDOWS_SETUP.md (file mtime) [VERIFIED: ls]
- 2025-10-31 — Search view fix (`d46e9ee`) [VERIFIED]
- 2025-11-10 — Unified nav/footer styling; comment unused code (last commits: `cdcbb24`, `9834b4e`, `e133d10`) [VERIFIED]
- **2025-11-11 — snapshot/backup taken** (outer + nested dir mtimes; .env.bak.1762852066 timestamp = 1762852066 → 2025-11-11) [VERIFIED: ls + epoch conversion]
- 2025-11-11 → 2026-06-30 — magang-rbtv continues: server branch prep, cleanup, testing docs (WhiteBox/BlackBox), i18n (FR), role-based workflow, Docker docs [VERIFIED: magang-rbtv git log]
- Backup dir untouched since (mtimes frozen Nov 2025) [VERIFIED]

## Problem

- Internship deliverable (Indonesian "magang" = internship) needed a local safety copy before/while pushing work to GitHub.
- `.env.bak.*` + `WINDOWS_SETUP.md` ("`.env` file (sent by your friend)" + "SQL dump file (sent by your friend)") indicate the workflow: DB dump + env file hand-carried between machines (friend/dev machine → local) because the repo lived partly offline. [VERIFIED: WINDOWS_SETUP.md content]

## Purpose

- Disaster-recovery / offline archive of the Kabar Jogja project at the 2025-11-10 milestone.
- Also a portable handoff bundle: code + DB dump + storage + setup guides (README, DEPLOYMENT.md, WINDOWS_SETUP.md, SECURITY.md) in one folder.

## What Was Built

The backed-up artifact is the Kabar Jogja news portal at milestone ~2 (post-RBAC, pre-final-testing phase):

- Public news site (Laravel Blade + Tailwind) — home, article, category, tag, search pages [VERIFIED: routes/web.php: `/`, `/kabar-jogja`, `/search`, `/article/{article:slug}`, `/category/{category:slug}`, `/tag/{tag:slug}`]
- Filament 4 admin panel — Resources for Articles, Categories, Tags, Ads, Users [VERIFIED: app/Filament/Resources/*]
- Ad click/view tracking endpoints [VERIFIED: routes: `ad.click`, `ad.view`]
- Analytics + read-complete tracking API [VERIFIED: routes: `/api/analytics/read-complete`]
- RBAC (roles: admin/editor/writer/user) [VERIFIED: migration `add_role_to_users_table` enum]

## Features

- Dual interface: public frontend + Filament admin [VERIFIED: README "dual-interface system"]
- Article management w/ categories, tags, view counts, admin-control fields [VERIFIED: migrations]
- Search + search suggestions API [VERIFIED: routes]
- Ad management with click/view counters (migration `add_clicks_to_ads_table` duplicated — two migrations same purpose) [VERIFIED]
- Analytics tracking (read-complete events) [VERIFIED: routes + Analytics model]
- Role-based access (RBAC) [VERIFIED: migration + commit `15d6abf`]
- Unified nav/footer styling across pages [VERIFIED: commits `cdcbb24`, `9834b4e`]
- Sample article seeders (migration `create_sample_articles`) [VERIFIED]

## Architecture

```
Browser
  ├── Public site (Blade views, Tailwind CSS) ── Laravel 12 routes ──┐
  └── /admin (Filament 4 panel) ─────────────────────────────────────┤
                                                                     ▼
                                          Controllers / Filament Resources
                                          (Home, Article, Category, Tag,
                                           AdClick, Analytics + Resources)
                                                                     ▼
                                    Models: Article, Category, Tag, Ad,
                                            Analytics, User  (Eloquent)
                                                                     ▼
                                              MySQL 8 (magang_news_new)
                                        [dump: magang_backup.sql]
   Dev runtime: Laravel Octane + FrankenPHP (binary `frankenphp` 268 MB)
                Docker compose (port 8081 outer / 8080 nested)
```

[VERIFIED: app/Models listing, routes, composer.json (octane), 268 MB `frankenphp` binary, docker-compose.yml, SQL dump header]

## Technologies (with evidence)

| Tech | Evidence |
|---|---|
| PHP ^8.2 (README badge: 8.4.14) | composer.json require; README badge [VERIFIED] |
| Laravel ^12.0 (README badge: 12.35.1) | composer.json; README badge [VERIFIED] |
| Filament 4.0 | composer.json `filament/filament: 4.0`; app/Filament/Resources structure (v4 layout: Schemas/ + Tables/ + Pages/) [VERIFIED] |
| Laravel Octane ^2.13 | composer.json [VERIFIED] |
| FrankenPHP | 268,576,592-byte `frankenphp` binary in repo root; .gitignore `**/caddy`, `frankenphp` [VERIFIED: ls + .gitignore] |
| Tailwind CSS 3.x | tailwind.config.js; README badge [VERIFIED] |
| Vite | vite.config.js + package.json [VERIFIED] |
| MySQL 8.0.42 | magang_backup.sql header [VERIFIED] |
| Docker | Dockerfile, docker-compose.yml, docker-compose.override.yml.example [VERIFIED] |
| Laravel Sail, Tinker, Pail, Pint, PHPUnit 11 | composer.json require-dev [VERIFIED] |

Note: `filament/filament: "4.0"` is a floating constraint; nested composer.lock (399 KB) pins real versions — same lock as magang-rbtv at that date [VERIFIED: composer.lock present, identical size both dirs].

## Database

- MySQL dump `magang_backup.sql` (87 KB, 2025-11-10): DB `magang_news_new`, MySQL 8.0.42 [VERIFIED]
- Schema (migrations, 2025-10-02 era): users (+role enum), cache, jobs, categories (+color/description/active), articles (+view_count, admin_control_fields, image_url fixes), tags, article_tag pivot, ads (+clicks), analytics, notifications [VERIFIED: migration filenames]
- Duplicate migrations exist: `add_color_description_active_to_categories_table` ×2, `add_clicks_to_ads_table` ×2 — evidence of rushed/parallel migration authoring [VERIFIED: filenames]
- `_archive/database.sqlite` exists in live repo — older sqlite phase; backup dir's _archive folder holds css/views/screenshots remnants [VERIFIED: ls]

## API

Small JSON API surface (all in routes/web.php):
- `GET /api/headlines` [VERIFIED]
- `GET /api/search-suggestions` [VERIFIED]
- `POST /api/analytics/read-complete` [VERIFIED]
- `GET /ad/click/{id}`, `POST /ad/view/{id}` — ad tracking [VERIFIED]

No dedicated api.php routes file [VERIFIED: routes/ = console.php + web.php only].

## Auth

- Laravel default auth (users table, sessions) + role enum `admin|editor|writer|user` default `writer` [VERIFIED: migration]
- RBAC commit 2025-10-25 (`15d6abf`) [VERIFIED]
- Filament panel as admin UI [VERIFIED]
- (Later magang-rbtv history adds roles table + role-based article workflow — NOT in this snapshot) [VERIFIED: 2026 migrations in live repo]

## Infrastructure

- Docker compose with FrankenPHP worker (Dockerfile + compose; nested uses port 8080 + bind mount, outer copy edited to 8081) [VERIFIED: diff]
- XAMPP/WAMP Windows dev path documented (WINDOWS_SETUP.md) — ".env sent by your friend" flow [VERIFIED]
- Deployment guide DEPLOYMENT.md (15.5 KB) [VERIFIED: ls]
- GitHub Actions workflow dir `.github/` present [VERIFIED: ls]

## Deployment

- README + DEPLOYMENT.md + WINDOWS_SETUP.md cover: Docker, XAMPP/WAMP, and general deploy [VERIFIED]
- frankenphp binary bundled → local FrankenPHP server path [INFERRED]
- No live deployment evidence in backup (no prod URL/config beyond APP_URL env) [UNKNOWN]

## Git History Milestones (nested, 10 commits)

1. `1e618ea` 2025-10-07 — Initial commit: Laravel news portal + Filament admin
2. `35cb941` 2025-10-07 — Comprehensive README
3. `0a21541` 2025-10-07 — .env.example app name
4. `15d6abf` 2025-10-25 — RBAC system + article page design
5. `18d6556` 2025-10-27 — Project cleanup + security improvements
6. `02cb7d1` 2025-10-27 — README + deployment instructions
7. `d46e9ee` 2025-10-31 — fix view on search
8. `cdcbb24` 2025-11-10 — unified navigation styling
9. `9834b4e` 2025-11-10 — unified footer styling
10. `e133d10` 2025-11-10 — comment unused code (tip of snapshot)

[VERIFIED: git log]

## Engineering Problems

- Large binary (268 MB frankenphp) committed/kept in project root — bloats any backup/transfer [VERIFIED]
- Duplicate migrations (categories color ×2, ads clicks ×2) — migration hygiene issue [VERIFIED]
- Backup folder mixes prod-ish artifacts (.env, .env.bak, DB dump with real data, storage) into one dir; outer dir git-initialized but never committed — accidental repo smell [VERIFIED]
- `.env.bak.1762852066` left in backup dir — stale env copy [VERIFIED, see security below]

## Technical Decisions

- Snapshot over branch/tag: backup taken as plain folder copy, not a git tag/branch — no retrievable marker in repo history for this state (though e133d10 = exact commit) [INFERRED]
- Dual transport: GitHub remote + manual file handoff (env + SQL dump "sent by your friend") for the dev machine [VERIFIED: WINDOWS_SETUP.md]
- Filament v4 resource layout (Schemas/Tables/Pages split) adopted early [VERIFIED: file tree]
- FrankenPHP + Octane chosen for serving; Docker for parity [VERIFIED: composer.json, binary]

## Outcome

- Backup fulfilled its archive role: magang-rbtv history after 2025-11-10 is fully intact in the live repo (130 commits, through 2026-06-30), so no data was lost from this snapshot point. [VERIFIED: live git log]
- The backup itself was never committed, never tagged, and has not been touched since Nov 2025 — it is a static artifact, now superseded by the live repo. [VERIFIED: mtimes]

## Current Status

- **Stale/superseded**. Live canonical repo: `/home/wannacry/project/magang-rbtv` (130 commits, June 2026 tip). Backup frozen at 2025-11-10 (10 commits behind at copy time, ~8 months of history behind now). [VERIFIED]
- Safe to treat as reference-only or archive. Do NOT document as a separate project — it is the same project (Kabar Jogja / magang-rbtv) at an earlier milestone. [INFERRED]

## Engineering Significance

- Documents the 2025-10-07 → 2025-11-10 phase: skeleton → RBAC → cleanup/security pass → UI unification. [VERIFIED: git log]
- Demonstrates the backup-before-push habit (good) undermined by hygiene gaps: secrets left in backup dir, no commit/tag for the snapshot, 268 MB binary (bad). [VERIFIED]
- Useful as before-image: diffing live repo against this snapshot shows all post-Nov-2025 work (testing suite, i18n, workflow, roles) in one shot. [INFERRED]

## Evidence

- `git log` (nested): 10 commits, 2025-10-07→2025-11-10, author fairulmuhammad [VERIFIED]
- `git log` (live magang-rbtv): 130 commits, same `1e618ea` initial commit, tip 2026-06-30 [VERIFIED]
- `git remote -v` (nested): `https://github.com/fairulmuhammad/magang-rbtv.git` [VERIFIED]
- README identical across layers; docker-compose differs only in port + volume [VERIFIED: diff]
- composer.json identical both layers; migrations identical (21 files) [VERIFIED]
- `magang_backup.sql` header: MySQL dump 8.0.42, DB `magang_news_new` [VERIFIED]
- .env.bak.1762852066 → epoch 1762852066 = 2025-11-11 [VERIFIED: date -d @1762852066]
- No `.env` file ever committed to git history (live repo: 0 hits for `.env` in `git log --name-only`) [VERIFIED]
- .gitignore present and protects env: `.env`, `.env.backup`, `.env.production`, `.env.local`, `.env.*.local` ignored [VERIFIED]

## Security

- [SECURITY WARNING] `/home/wannacry/project/magang_backup/.env` — real environment file (APP_KEY, DB credentials, etc.). Value omitted. Not committed to git, but sits in plaintext in backup dir. Rotate anything that went through the "sent by your friend" handoff. [VERIFIED]
- [SECURITY WARNING] `/home/wannacry/project/magang_backup/.env.bak.1762852066` — second plaintext env copy. Value omitted. Delete it. [VERIFIED]
- [SECURITY WARNING] `/home/wannacry/project/magang-rbtv/.git/config` — origin URL embeds a GitHub Personal Access Token (`https://fairulmuhammad:ghp_...@github.com/...`). Value omitted. Token visible in local git config; if this config ever ships in a backup, token leaks. Revoke/rotate if the repo/config was shared. [VERIFIED]
- [SECURITY WARNING] `magang_backup.sql` + `storage_backup.tar.gz` contain real application data (articles, private images) at rest in plaintext — treat as sensitive. [VERIFIED]
- [GOOD] `.env` was never committed to git history in either repo (0 hits) and .gitignore blocks it. [VERIFIED]

## Confidence Ratings

- Identity/Classification: **High** (identical commit lineage, remote, README, composer.json) [VERIFIED]
- Snapshot date 2025-11-11: **High** (mtimes + .env.bak epoch) [VERIFIED]
- "Superseded by live repo": **High** (130 vs 10 commits, all 10 are prefix) [VERIFIED]
- Deployment details of the snapshot (was it ever run as prod?): **Low / UNKNOWN** — no evidence either way in backup dir
- Why the backup was taken (motivation): **Medium** — inferred from artifacts (dump + env + setup guides = handoff/backup bundle), no written note found


# GitHub — Learning & Coursework Repositories

17 public repos by `fairulmuhammad` (Fairul Muhammad, CS student, Universitas Amikom Yogyakarta). All but two are his own work. Most are semester coursework, GitHub Skills courses, or DevOps practice. Remotes all point to `https://github.com/fairulmuhammad/<name>.git` [VERIFIED via `git remote -v`].

---

## php-app
- **Identity**: Tiny PHP app + full CI scaffold (Jenkinsfile, docker-compose, PHPUnit). Remote: own account. [VERIFIED]
- **Classification**: Coursework / Learning (DevOps CI practice)
- **What it does**: `index.php` renders a styled "Hello from PHP app!" page with server time; PHPUnit smoke test (`tests/ExampleTest.php`, `assertTrue(true)` only). Jenkinsfile clones repo, installs php8.2 deps, runs build. [VERIFIED — source inspected]
- **Technologies**: PHP 8.2, Composer (psr-4 `App\`), PHPUnit 10, Jenkins (docker-compose jenkins/jenkins:lts), Dockerfile [VERIFIED]
- **Timeline**: 2025-06-15, 23 commits in one day [VERIFIED]
- **Outcome/Status**: Done as CI practice artifact; no real functionality. Abandoned (one-day burst).
- **Portfolio value**: **Low** — trivial app; the Jenkins/Docker scaffolding is the only substance, and it is minimal.

## CodeIgniter
- **Identity**: Full fork of upstream CodeIgniter 3.x framework (558 files, 10,360 commits, original authors: Andrey Andreev, Derek Jones, Rick Ellis, etc. — code history intact). Remote: fork under own account. [VERIFIED — commit authors + full framework tree `application/ system/ user_guide_src/`]
- **Classification**: Clone (upstream framework fork)
- **What it does**: The CodeIgniter PHP framework itself (EllisLab original). Fairul's only contributions: Jenkinsfile + docker-compose.yml (Mar–Apr 2025, ~7 commits) [VERIFIED — `git log --author=fairul`]
- **Technologies**: PHP, CodeIgniter 3, Jenkins, Docker [VERIFIED]
- **Timeline**: upstream 2006-08-25 → 2016; fork touched 2025-03-25 → 2025-04-02 [VERIFIED]
- **Outcome/Status**: Unmodified framework clone; used as base for his own CI projects (see uasci3, project-relfconnect — same system/ tree). Not his work.
- **Portfolio value**: **Low** — not original code; only the Jenkins/Docker additions are his. Keep only if documenting CI-on-legacy-framework skill.

## uasci3
- **Identity**: CodeIgniter 3 student grading app. Remote: own. [VERIFIED]
- **Classification**: Coursework (semester 3, UAS — final exam project)
- **What it does**: Grade/student management app with role-based auth (Admin/Dosen/Mahasiswa controllers: `Admin.php`, `Dosen.php`, `Mahasiswa.php`, `Auth.php`; models `Grade_model`, `Student_model`, `User_model`) and FPDF dependency for PDF export. Ships raw DB dump `nuts (4).sql`. [VERIFIED — controllers/models/composer inspected]
- **Technologies**: PHP, CodeIgniter 3, MySQL, FPDF, Composer [VERIFIED]
- **Timeline**: 2025-01-22 → 2025-01-24, 5 commits (mostly "Add files via upload") [VERIFIED]
- **Outcome/Status**: Finished coursework; committed as bulk uploads. Incomplete metadata (raw SQL dump committed, no README).
- **Portfolio value**: **Medium** — real MVC app with roles + PDF, but bulk-upload history and no README hurt; clean it up before showing.

## sem3_be_responsi_uts
- **Identity**: Backend mid-semester (UTS responsi) submission. Remote: own. [VERIFIED]
- **Classification**: Coursework
- **What it does**: PHP login/register CRUD with session auth (final_responsi/ tree: `login.php`, `register.php`, config/ with proses_login/register/tambahData/update/delete, dashboards) + `responsi.html` containing the exam's DB schema (`testbe` table with Admin/Dosen/Mahasiswa levels + `nilai`). Includes zip of original submission `23.01.5071.zip` and a test SQL embedded in HTML. [VERIFIED — source inspected]
- **Technologies**: PHP (no framework), MySQL, CSS [VERIFIED]
- **Timeline**: 2024-11-02 → 2025-01-02, 3 commits [VERIFIED]
- **Outcome/Status**: Finished exam submission; branches test1/test2 present.
- **Portfolio value**: **Low-Med** — plain PHP CRUD; nearly identical codebase to tugasbe (duplicate). One of the pair is enough.

## tugasbe
- **Identity**: "Backend task" — PHP login/register CRUD. Remote: own. [VERIFIED]
- **Classification**: Coursework
- **What it does**: Session-based auth + dashboard CRUD (config/: config.php, proses_login, proses_register, proses_tambahData, proses_update, proses_delete, dashboards). README is UTF-16 gibberish. [VERIFIED — source inspected]
- **Technologies**: PHP (no framework), MySQL, CSS [VERIFIED]
- **Timeline**: 2024-10-31, 1 commit [VERIFIED]
- **Outcome/Status**: Finished task; single commit.
- **Portfolio value**: **Low** — near-duplicate of sem3_be_responsi_uts (same file names, same session-auth pattern, Amikom logo assets). Keep the newer one.

## tugas
- **Identity**: Static front-end "academic data entry" prototype. Remote: own. [VERIFIED]
- **Classification**: Coursework
- **What it does**: Tailwind/HTML pages for academic input & recap: inputData/ (UTS, UAS, tugas, kehadiran, responsi forms), rekapitulasiData/, dashbaord/ + dashbaord1/ (typo dirs), `index.html`. Junk file `jghu` ("drydy") committed. [VERIFIED — file tree inspected]
- **Technologies**: HTML, CSS, Tailwind (output.css, tailwind.config.js), vanilla JS [VERIFIED]
- **Timeline**: 2024-07-24, 5 commits incl. a PR merge [VERIFIED]
- **Outcome/Status**: Static prototype, no backend; abandoned.
- **Portfolio value**: **Low** — static forms, no logic; shows early front-end practice only.

## mentionAll
- **Identity**: WhatsApp "mention all" bot. Remote: own. [VERIFIED]
- **Classification**: Experiment / Tool
- **What it does**: Baileys-based WhatsApp bot that replies automatically and implements tag-all (group mention of all members). Duplicated implementations: `bot.js` (CommonJS) and `index.ts` (TypeScript, ts-node-dev). QR-code login via `qrcode-terminal`. [VERIFIED — source inspected]
- **Technologies**: Node.js, TypeScript, `@whiskeysockets/baileys`, `@hapi/boom`, qrcode-terminal [VERIFIED]
- **Timeline**: 2024-12-22, 1 commit [VERIFIED]
- **Outcome/Status**: Working-ish experiment; README tutorial in Indonesian. NOTE: WhatsApp automation against ToS; do not run on a main account.
- **Portfolio value**: **Low-Med** — real working bot, but ToS-grey area and single commit; fine as a hobby entry, not headline material.

## testing-site
- **Identity**: DevOps exam practice (README: "for testing mid exam of devops"). Remote: own. [VERIFIED]
- **Classification**: Coursework / Learning
- **What it does**: Express "Aplikasi DevOps berjalan!" server + Terraform (kreuzwerker/docker provider → nginx container, Windows npipe host) + GitHub Actions CD (Windows runner, Docker + Terraform steps) + Dockerfile + committed `terraform.tfstate`. [VERIFIED — source inspected]
- **Technologies**: Node.js/Express, Terraform, Docker, GitHub Actions, GH branches (development, feature/login) [VERIFIED]
- **Timeline**: 2025-05-14 → 2025-05-15, 21 commits [VERIFIED]
- **Outcome/Status**: Practice artifact for mid exam; `.tfstate` + backup committed (bad hygiene — state files should be gitignored). Abandoned.
- **Portfolio value**: **Low-Med** — shows IaC + CD interest, but tiny app and committed tfstate is a red flag; fix state handling before showing.

## latihan-devops
- **Identity**: "DevOps practice" scratch repo. Remote: own. [VERIFIED]
- **Classification**: Learning (git/PR practice)
- **What it does**: 4 files: `halo-dunia.txt`, `login.html` (static login form), LICENSE, README. Exercise in branches (feature-1, feature-login) and issues. [VERIFIED]
- **Technologies**: plain text/HTML, git [VERIFIED]
- **Timeline**: 2025-03-05 → 2025-03-12, 3 commits [VERIFIED]
- **Outcome/Status**: Git workflow exercise; abandoned.
- **Portfolio value**: **Low** — scratch practice. Duplicate of latihan1-devops concept.

## latihan1-devops
- **Identity**: Second "DevOps practice" repo — git branching/merge-conflict exercise. Remote: own. [VERIFIED]
- **Classification**: Learning (git practice)
- **What it does**: txt files (hello-world.txt, halo-dunia.txt, test.txt, feature-a.txt) + login.html; commits show merge-conflict resolution ("fix conflict on login.html"). [VERIFIED]
- **Technologies**: plain text/HTML, git [VERIFIED]
- **Timeline**: 2025-03-16 → 2025-03-18, 13 commits [VERIFIED]
- **Outcome/Status**: Completed exercise; abandoned.
- **Portfolio value**: **Low** — scratch practice; duplicates latihan-devops (merge/delete into one).

## indeks-kami
- **Identity**: Laravel 6 app "Indeks KAMI" (Indonesian cybersecurity maturity index assessment). Remote: fork under own account. [VERIFIED]
- **Classification**: Clone (third-party app fork, NOT by Fairul)
- **What it does**: BSN-style security index assessment tool (controllers: KategoriSEController, KerangkaKerjaController, RisikoController, TataKelolaController, TeknologiController, PengelolaanAsetController, RespondenController). All commits authored by Iwan firmawan / "firmawaneiwan@gmail.com" / team, 2019–2021. Fairul has ZERO commits [VERIFIED — `git log --author=fairul` empty]. A `fairulmuhammad` branch exists but no authored commits.
- **Technologies**: PHP, Laravel 6, MySQL, Bootstrap (bsn-logo.png), Travis CI [VERIFIED]
- **Timeline**: 2019-04-10 → 2021-03-25 (original author); no Fairul activity [VERIFIED]
- **Outcome/Status**: Pure fork — nothing added by Fairul.
- **Portfolio value**: **None** — not his work; do not include (or delete/archive).

## project-relfconnect
- **Identity**: "Prototype Manajemen Kampanye Donasi" (donation campaign management) — CodeIgniter 3 prototype with heavy documentation. Remote: own. [VERIFIED]
- **Classification**: Coursework (SCPMK 193060207/193060208 exam, 24 Jul 2025 per README)
- **What it does**: Donation campaign CRUD with multi-role views (application/views: admin, auth, donatur, lembaga; controllers Auth, Campaigns, Home, Welcome) + DB schema (database_schema.sql), import helper, PHP 8.2 compat fixes. Extensive docs: LAPORAN_PROTOTYPING.md, TABEL_CLASS_YANG_DIBUAT.md, EXAM_COMPLETION_CHECKLIST.md, SETUP_COMPLETE.md, DEMO_LINK_HASIL_APP.md. [VERIFIED — tree + README inspected]
- **Technologies**: PHP, CodeIgniter 3, MySQL, Bootstrap assets [VERIFIED]
- **Timeline**: 2025-07-24, 1 commit (whole project uploaded at once) [VERIFIED]
- **Outcome/Status**: Completed exam prototype, thoroughly documented; uploads/ + test_*.php scripts left in tree. Most substantial coursework repo.
- **Portfolio value**: **Med-High** — best coursework entry: full CRUD, roles, docs; clean up test scripts and uploads/ first.

## learning-fundamental
- **Identity**: Self-study "learn fundamentals" workspace (12-week plan). Remote: own. [VERIFIED]
- **Classification**: Learning
- **What it does**: `PLAN_12_WEEKS.md` week-by-week roadmap (Big-O, linked lists, LeetCode, clean code, SQL, testing, design patterns, system design) + `python_starter/` (module + unittest) + `php_starter/` (class + PHPUnit-style test). GitHub Actions CI scaffold present. [VERIFIED — source inspected]
- **Technologies**: Python, PHP, pytest/PHPUnit-style, git [VERIFIED]
- **Timeline**: 2025-08-29, 1 commit [VERIFIED]
- **Outcome/Status**: Freshly started (Aug 2025); only starter scaffolding so far — no actual exercises committed yet.
- **Portfolio value**: **Low (potential)** — shows growth mindset + planning, but empty of real work today.

## gamble
- **Identity**: "Educational Gaming Algorithms Platform" — gambling-algorithm demos, clearly disclaimed educational-only. Remote: own. [VERIFIED]
- **Classification**: Experiment / Learning
- **What it does**: Python package `educational_gaming_algorithms/` demonstrating casino math (house edge, RTP, RNG) with FastAPI web platform (`web_platform/`), examples, tests (test_project.py), analysis images (rng_comparison.png, rng_quality_analysis.png), SQLite DB, Docker setup, extensive educational READMEs. [VERIFIED — tree + README + requirements inspected]
- **Technologies**: Python, FastAPI, uvicorn, SQLite, Docker, matplotlib-style analysis artifacts [VERIFIED]
- **Timeline**: 2025-08-28, 1 commit [VERIFIED]
- **Outcome/Status**: Complete educational demo (possibly AI-assisted — unusually polished docs for a 1-commit repo [INFERRED]). Legal-safe due to disclaimers. Committed `.db` + `__pycache__`/`.pyc` artifacts (hygiene issues).
- **Portfolio value**: **Med-High** — most polished/complete standalone project; shows algorithms + FastAPI + Docker. Verify authorship before claiming; fix hygiene (pycache, .db).

## inventory-app
- **Identity**: "Inventory Management System — Complete DevOps Pipeline" (course case studies). Remote: own. [VERIFIED]
- **Classification**: Coursework (UAS project, DevOps case studies 1–5) / Tool
- **What it does**: Flask inventory API (CRUD, Prometheus metrics via prometheus_flask_exporter) + full DevOps stack: Docker Compose, GitHub Actions CI/CD, monitoring (Prometheus, Grafana, Loki, cAdvisor), security scanning (Bandit, Trivy, SonarQube, safety), Kubernetes deployment (k8s/), pre-commit, Makefile, docs/. [VERIFIED — README + app.py + tree]
- **Technologies**: Python, Flask, Prometheus/Grafana/Loki, Docker, GitHub Actions, Kubernetes, SonarQube/Trivy/Bandit, pytest [VERIFIED]
- **Timeline**: 2025-07-11 ("Projek uas" by wikan-dn — collaborator) → 2025-08-26, 29 commits [VERIFIED]
- **Outcome/Status**: Active until Aug 2025; most recent and most complex repo. Committed secrets-adjacent files to check: `kubeconfig.yaml`, `terraform.tfstate`, logs/, report JSONs in tree [VERIFIED — files present; contents NOT inspected].
- **Portfolio value**: **High** — strongest repo: real API + full CI/CD/monitoring/k8s. Must scrub kubeconfig/state/logs before public portfolio use [UNCERTAIN — whether secrets actually present; never committed to memory].

## skills-introduction-to-github
- **Identity**: GitHub Skills "Introduction to GitHub" course repo (template course with step workflows). README is the official course template ("My clone repository" per GitHub description). Remote: own. [VERIFIED]
- **Classification**: Clone / Learning (official GitHub Skills course template)
- **What it does**: Course content + GitHub Actions course workflows (0-welcome, 1-create-a-branch, 2-commit-a-file, 3-open-a-pull-request, 4-merge-your-pull-request) + dependabot branch. Fairul's own commit: "Initial commit"; rest is bot/template activity. [VERIFIED — tree + workflows]
- **Technologies**: GitHub Actions, markdown, course-template infra [VERIFIED]
- **Timeline**: 2025-08-29, 2 commits [VERIFIED]
- **Outcome/Status**: Completed the official intro course; template repo retained.
- **Portfolio value**: **None** — official course template, not original work. Delete or archive.

## fairulmuhammad
- **Identity**: GitHub profile README (user repo). Remote: own. [VERIFIED]
- **Classification**: Tool (profile page)
- **What it does**: Profile README: name, "Student • Aspiring Developer", trophy/stats badges via github-readme-stats. [VERIFIED]
- **Technologies**: markdown, shields [VERIFIED]
- **Timeline**: 2025-07-12, 3 commits [VERIFIED]
- **Outcome/Status**: Active profile page.
- **Portfolio value**: **Med** — the entry point to the whole portfolio; worth polishing (currently generic template style).

---

## Notes

**Clones / third-party (not Fairul's code)** [VERIFIED via commit authorship + remote]:
- `CodeIgniter` — fork of upstream CodeIgniter 3 framework; 10,353 of 10,360 commits are upstream authors. Only his: Jenkinsfile + docker-compose.
- `indeks-kami` — fork of Iwan firmawan's Laravel "Indeks KAMI" app; zero commits by Fairul. Exclude from portfolio.
- `skills-introduction-to-github` — official GitHub Skills course template; exclude.

**Duplicates / near-duplicates** [VERIFIED by identical file structure]:
- `tugasbe` ≈ `sem3_be_responsi_uts` — same PHP session-auth CRUD, same file names (login.php/register.php/config/proses_*.php), same Amikom logo asset, same `testbe`-style schema. Keep ONE (sem3_be_responsi_uts has the full exam context).
- `latihan-devops` ≈ `latihan1-devops` — same git-practice content (halo-dunia.txt + login.html). Keep ONE (latihan1-devops has richer history).
- `uasci3` and `project-relfconnect` both embed the CodeIgniter fork's `system/` tree — CI framework code duplicated across 3 repos.

**Hygiene flags** [VERIFIED — files present; secret content NOT verified]:
- `testing-site`: committed `terraform.tfstate` + `.backup` — remove.
- `inventory-app`: `kubeconfig.yaml`, `terraform.tfstate`, `logs/` committed — scrub before any public/portfolio exposure. [UNCERTAIN whether real secrets inside; never written here]
- `gamble`: `.db`, `__pycache__`, `.pyc` committed.
- `uasci3`: raw SQL dump `nuts (4).sql` committed.
- `project-relfconnect`: `test_*.php`, `uploads/` left in tree.
- No secrets, credentials, or tokens appear in any inspected source [VERIFIED — inspected all READMEs, entry files, configs; nothing written to this report].

**Overall**: 17 repos = 12 genuine learning/coursework artifacts + 3 third-party clones + 1 profile README + 1 course template. Portfolio-relevant core: inventory-app (High), project-relfconnect (Med-High), gamble (Med-High), uasci3 (Med), fairulmuhammad profile (Med). Everything else is Low/None and should be consolidated, archived, or deleted.


# Portfolio & Web Projects

<!--
Evidence-first archive. Tags: [VERIFIED] = source/git/config inspected directly,
[INFERRED] = reasonable conclusion from evidence, [UNCERTAIN] = plausible but not
confirmed, [UNKNOWN] = no evidence. User identity: fairulmuhammad (git config,
README clone URL) [VERIFIED]. No secrets written.
-->

---

## 1. web-portfolio (personal portfolio site — planned/design-only)

### Identity
Personal engineering portfolio website, positioning as Backend / Infrastructure / DevOps software engineer. Not yet implemented — currently exists only as design documentation.

### Classification
Personal — Portfolio website project (in design phase); also a self-demonstrating engineering artifact ("the portfolio itself is an engineering project", AGENTS.md [VERIFIED]).

### Repository
- Local path: `/home/wannacry/personal/web-portfolio` [VERIFIED]
- Git: NO `.git` directory — not a repository yet [VERIFIED]
- Contents: `AGENTS.md` + `docs/` only. No `package.json`, no `src/`, no code [VERIFIED]
- Docs: ARCHITECTURE.md (230L), CONTENT.md (195L), DECISIONS.md (113L), DEPLOYMENT.md (129L), DESIGN.md (217L), DEVELOPMENT.md (169L), FEATURE.md (157L), PRD.md (428L) [VERIFIED]

### Purpose
Replace "CV copied into HTML" with an interactive portfolio that demonstrates engineering capability by implementation, not by skills list. Target audience: technical recruiters, engineering managers, senior devs. (PRD.md [VERIFIED])

### What Was Built
Nothing executable yet — 1,638 lines of planning/spec docs (AGENTS.md + 8 docs) [VERIFIED]. Specs define: vision, architecture, feature specs, deployment policy, design system, ADRs, content architecture.

### Features (specified, not implemented)
- Phase 0–4 roadmap: foundation (design system, typography), core portfolio (Hero/About/Experience/Projects/Contact/Footer), live deployment metadata (Vercel commit SHA/message/branch), project drag-and-drop (dnd-kit), live API demo (Next.js Route Handler) [VERIFIED]
- Deployment metadata collapsed UI: `● PRODUCTION · a91f3c`, expandable detail (FEATURE.md [VERIFIED])
- Data separation: `data/projects.ts`, `data/experience.ts`, `data/site.ts` — content decoupled from UI for future CV updates (CONTENT.md, AGENTS.md [VERIFIED])

### Architecture (specified)
```text
Next.js App Router
   ├── Server Components (default)
   ├── Client Components ("use client" only when browser API/state/motion needed)
   ├── Route Handlers (API demo)
   ├── Structured portfolio data (data/*.ts)
   └── lib/ utils + build-info
Deploy: GitHub → Vercel → automatic build → production
```
(ARCHITECTURE.md, DEPLOYMENT.md [VERIFIED])

### Technologies (specified)
Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis, dnd-kit, npm, Vercel — "fixed unless explicitly changed" (AGENTS.md [VERIFIED]). No database in v1; ADR-003 (DECISIONS.md [VERIFIED]).

### Deployment (specified)
Vercel, no custom infra; no Docker/nginx/external DB; Vercel env vars for deployment metadata only; secrets never client-side (AGENTS.md, DEPLOYMENT.md [VERIFIED]). No `.vercel`, netlify config, README deploy instructions — nothing on disk [VERIFIED]. Live status: [UNKNOWN] — no evidence of any deployment.

### Git History milestones
None — no repository exists yet [VERIFIED].

### Outcome
Not built. Design/spec phase only [VERIFIED].

### Current Status
Active planning. Docs last modified 2025-08-10 (mtime) [VERIFIED]. No code, no build, no deployment.

### Engineering Significance
Well-structured spec set (ADR log, PRD, feature specs, strict "evidence-first/no fabrication" rules for AI-assisted building). The quality bar in AGENTS.md — "a feature is not complete until `npm run build` passes", no secrets exposed, reduced-motion support, TODO markers instead of invented achievements — is genuinely good engineering practice. But: zero implementation means zero demonstrated capability. Significance is [INFERRED] as potential, not [VERIFIED] as delivered.

### Evidence
AGENTS.md, docs/*.md (all read), absence of code/package.json/`.git` [VERIFIED].

### Confidence
High on current state (spec-only). Low on any claim about the finished product — it does not exist.

---

## 2. portfolio (Once UI Magic Portfolio — unmodified template clone)

### Identity
Clone of open-source "Magic Portfolio by Once UI" (once-ui-system/magic-portfolio v2.2.0), a Next.js portfolio template. Unmodified — stock template content ("Selene Yu", Once UI's own demo author) still present.

### Classification
Personal (intended) — currently an unmodified template clone. Not a fork with user content.

### Repository
- Local path: `/tmp/gh-archive/portfolio` (gh-archive snapshot) [VERIFIED]
- Remote: `https://x-access-token:github....git` — token-masked, actual repo URL not recoverable from clone [UNCERTAIN]; git config user.name = `fairulmuhammad` [VERIFIED]
- 1 commit total: `a103525 2025-07-12 "Initial commit"` [VERIFIED]
- Branch: main (single) [VERIFIED]

### Purpose
Magic Portfolio: showcase developer/designer portfolio with blog, project ("work") pages, gallery — per upstream README [VERIFIED]. Intent for user: portfolio site [INFERRED from placement in /tmp/gh-archive].

### What Was Built
Nothing by the user. Full template: Next.js 15 + React 19 + Once UI components, MDX blog/work posts, `/api/og` OG-image generation, `/api/authenticate` + `/api/check-auth` password route guard, Mailchimp newsletter component, masonry gallery [VERIFIED via package.json + src/].

### Content check
`src/resources/content.js` still contains template demo persona: name "Selene Yu", role "Design Engineer", email example@gmail.com, social links pointing at once-ui-system/once-ui [VERIFIED]. Work posts are Once UI's own case studies (Figma-to-code pipeline, Once UI design system, portfolio builder) [VERIFIED]. No user-personalized content anywhere [VERIFIED].

### Architecture
```text
Next.js 15 (App Router) + MDX
  ├── src/app: blog/, work/, gallery/, about/, api/
  ├── src/components: Header, Footer, Projects, Posts, Gallery(MasonryGrid), RouteGuard, Mailchimp
  ├── src/resources: content.js (site config), once-ui.config.js, icons.ts
  └── src/app/api: og/generate (next/og), authenticate, check-auth (cookie password)
```
[VERIFIED from src tree]

### Technologies
Next.js ^15.3.1, React 19, @once-ui-system/core ^1.2.4, @next/mdx + next-mdx-remote, gray-matter, react-icons, react-masonry-css, sass, TypeScript 5.8, ESLint 9 [VERIFIED, package.json].

### Deployment
No deployment config on disk; README offers upstream Vercel Deploy button (deploys *upstream* magic-portfolio repo, not user's) [VERIFIED]. No live URL evidence [UNKNOWN].

### Git History milestones
Single "Initial commit" 2025-07-12 — template pushed as-is [VERIFIED]. No customization commits.

### Outcome
Abandoned-at-template stage: one commit, no edits, demo content intact [VERIFIED].

### Current Status
Dormant snapshot in /tmp/gh-archive. No evidence of further work.

### Engineering Significance
None from user's work (no user code). The *choice* may signal Next.js interest [INFERRED]. If portfolio is presented as user's work, template origin is a risk — evidence plainly shows stock content.

### Evidence
package.json, README.md, next.config.mjs, .env.example, src/resources/content.js, src/ tree, git log (all read) [VERIFIED].

### Confidence
High. Template clone, unmodified, single commit — unambiguous.

---

## 3. internship-progres-tracker (Internship Progress Tracker) — web app + mobile app

### Identity
Full-stack-ish internship daily-progress tracker: memos (daily journal w/ categories, duration, tags, attachments), task management, analytics, auth. Two surfaces: static multi-page web app (Firebase) and Expo React Native mobile app sharing the same Firebase backend. GitHub repo: fairulmuhammad/internship-progres-tracker.

### Classification
Personal/Internship project — tool built for tracking the user's own internship progress [INFERRED] — web app + mobile companion app.

### Repository
- Canonical: `/home/wannacry/memo/internship-progres-tracker` (local, authoritative) [VERIFIED]
- Mirror snapshot: `/tmp/gh-archive/internship-progres-tracker` (git log head at 2025-09-13; missing local-only mobile work) [VERIFIED]
- Remote: `https://github.com/fairulmuhammad/internship-progres-tracker.git` [VERIFIED]
- Commits: 36 total (local), 35 (mirror) [VERIFIED]
- Date span: 2025-09-03 → 2026-02-06 [VERIFIED]
- Branches local: `main`, `responsive-layout-fixes` (HEAD); remote: main, feature/authentication-system, feature/task-management, responsive-layout-fixes [VERIFIED]
- Work cadence: 2025-09-03 (7), 09-04 (1), 09-07 (11), 09-09 (11), 09-10 (2), 09-12 (2), 09-13 (1), 2026-02-06 (1 mobile) [VERIFIED]

### Purpose
Track daily internship progress, learnings, achievements: task management, progress visualization (charts/heatmap), reflection journal, responsive design (README.md [VERIFIED]).

### What Was Built
Web app (~3,500 lines HTML pages + modular ES modules JS + ~14 CSS files + docs/):
- Pages: index.html, login.html, register.html, tasks.html (1,166L), dashboard.html (800L), analytics.html (848L) [VERIFIED]
- JS modular architecture: models/, services/ (task-service, category-service, storage-service, auth-service, firestore-service), components/ (task-form, task-list, auth-ui, session-status), firebase-service.js, storage.js, file-service.js [VERIFIED]
- Firebase: hosting (firebase.json), Firestore (rules + indexes), Auth (email/password + Google Sign-In + account linking), project `internship-tracker-v01` [VERIFIED]
- GitHub Actions workflow `.github/workflows/deploy.yml` → GitHub Pages [VERIFIED]
- `_redirects` + `docs/netlify.toml` → Netlify SPA redirect config present [VERIFIED]
- Mobile app: `internship-tracker-mobile/` — Expo SDK 54, React Native 0.81, React 19.1, React Navigation (stack + bottom tabs + material top tabs), react-native-paper, zustand stores (taskStore, userStore), gifted-charts, expo auth/notifications/image-picker/haptics; android/ native project; app.json android package `com.wannacry_dev.internshipprogresstracker`; screens: auth, dashboard, tasks, analytics, profile [VERIFIED]
- Analytic features: weekly progress, activity heatmap, task stats, kanban board drag & drop (FEATURES_COMPLETE.md [VERIFIED])

### Features (implemented, per docs + source)
Memo CRUD w/ markdown + attachments (images/pdf/code, 10MB limit), task CRUD, kanban, task analytics, settings (categories, export/import JSON), auth (email/password + Google), Firestore real-time sync, localStorage fallback mode (`USE_LOCAL_STORAGE` flag), export/import JSON backup [VERIFIED].

### Architecture (web)
```text
Browser (static HTML pages + ES modules)
   ├── js/config.js → Firebase config (project internship-tracker-v01)
   ├── js/services/*: auth-service, task-service, category-service, storage-service, firestore-service
   ├── js/models/*: task-model
   └── storage: localStorage (fallback) OR Firebase Auth + Firestore (default, real-time)
Deploy paths:
   GitHub Actions → GitHub Pages (deploy.yml)     [VERIFIED]
   Netlify (netlify.toml, _redirects)             [VERIFIED config, live status UNKNOWN]
   Firebase Hosting (firebase.json)               [VERIFIED config, live status UNKNOWN]

Mobile (Expo React Native)
   AppNavigator (auth stack + bottom tabs: dashboard/tasks/analytics/profile)
   zustand stores → Firebase services (same project)
```
[VERIFIED from source]

### Technologies
Vanilla JS ES modules + HTML/CSS (web, no framework), Firebase v9+ (Auth, Firestore, Hosting), Expo SDK 54 / React Native 0.81 / React 19.1 / TypeScript (mobile), React Navigation 7, react-native-paper, zustand, GitHub Actions, GitHub Pages, Netlify config [VERIFIED].

### Deployment (evidence of real use)
- GitHub Pages LIVE: `https://fairulmuhammad.github.io/internship-progres-tracker/` returned HTTP 200 with app content on 2026-08-14 [VERIFIED]
- Commit "Update README with live URL and add storage configuration options" (2025-09-03) [VERIFIED]
- Firebase project `internship-tracker-v01` configured; client config keys present in js/config.js (e.g. authDomain internship-tracker-v01.firebaseapp.com, senderId 33562128425) — public client-side Firebase config, not a secret; actual apiKey value redacted (*) in the template file [VERIFIED]. History shows a security pass: "SECURITY: Remove exposed Firebase API key from all files" + .gitignore credential protection (2025-09-09) [VERIFIED]

### Is it used?
- sample-data.json shipped as data seed [VERIFIED]
- 2026-02-06 commit = mobile app implementation + "responsive layout improvements"; `.expo/devices.json` present (device registered) [VERIFIED]
- Firebase project + Pages deployment indicate real use [INFERRED]. Actual user activity volume (real memos/tasks in Firestore): [UNKNOWN] — cannot inspect Firebase data.
- `junks/` dir with 12 backup/experiment HTML files + docs/ commit trail show iterative dev workflow [VERIFIED]

### Git History milestones
- 2025-09-03: init, localStorage persistence fixes, README + live URL
- 2025-09-04: security docs, credential handling
- 2025-09-07: auth system (separate pages), task management MVP, Firestore+security rules; GitHub Pages redirect fixes
- 2025-09-09: feature blitz — account linking, email/password auth, centralized Firebase config, removed exposed API key, analytics/heatmap fixes, memo filtering
- 2025-09-10/12/13: CSS organization, sign-out fixes, auth UI polish
- 2026-02-06: mobile app + responsive layout (branch `responsive-layout-fixes`)

### Outcome
Shipped and used: pages deployed live, Firebase backend configured, mobile companion built. Feature-complete per internal docs ("ALL FEATURES IMPLEMENTED" matrix) [VERIFIED].

### Current Status
Active as of 2026-02-06; no commits after [VERIFIED]. Presumably superseded by completed internship.

### Engineering Significance
Demonstrates: vanilla modular JS architecture (services/models separation), Firebase Auth+Firestore integration, security awareness (removed leaked API key; security docs SECURITY_NOTICE.md/SECURITY_ALERT.md), CI/CD via GitHub Actions to Pages, multi-surface (web+mobile) sync on shared backend, zustand state management in RN. Anti-patterns: `junks/` accumulation, docs/ sprawl, "Internship Tracker Team"-style generic README boilerplate. Solid mid-level project story: full-stack-ish, auth, realtime DB, deploy, mobile.

### Evidence
package.json, README.md, firebase.json/.firebaserc, .github/workflows/deploy.yml, full git log (36 commits), js/ tree, internship-tracker-mobile/ source, docs/ (FEATURES_COMPLETE, SECURITY_NOTICE), live URL HTTP check [VERIFIED].

### Confidence
High — repo + source + live deployment all verified directly.

---

## 4. cli-conqueror-crossplay (CLI Master)

### Identity
"CLI Master" — a static web reference guide for Windows (CMD/PowerShell) and Linux (Bash) CLI commands. NOT a CLI tool: it is a Vite + React web app. Generated via Lovable AI app-builder. Repo name "conqueror-crossplay" ≠ product name "CLI Master".

### Classification
Personal — web reference/tooling project; AI-generated (Lovable) [VERIFIED via README].

### Repository
- Path: `/tmp/gh-archive/cli-conqueror-crossplay` [VERIFIED]
- Remote: token-masked `https://x-access-token:github....git` — exact URL unrecoverable [UNCERTAIN]
- Commits: 2 total, both 2025-08-18: `bf2cc1f "Use tech stack vite_react_shadcn_ts_20250728_minor"`, `88d2ad0 "Add CLI information"` [VERIFIED]
- Branch: main only [VERIFIED]

### Purpose
"Master the command line with our comprehensive reference guide for Windows and Linux. Interactive examples, real-world usage, and instant copy-to-clipboard" (index.html meta + hero [VERIFIED]).

### What Was Built
Single-page app: `src/pages/Index.tsx` — search box, category filter, platform filter (All/Windows/Linux), command cards grid with copy-to-clipboard; `src/data/commands.ts` = 218-line static dataset (~dozens of commands: ls/cd/pwd/cp/mv/rm etc., each with name, description, syntax, example, category, platform both|windows|linux) [VERIFIED]. Header with search + GitHub link [VERIFIED]. Standard Lovable boilerplate: shadcn/ui components, Tailwind, react-query, react-router, lucide icons [VERIFIED].

### Architecture
```text
Vite + React SPA
  ├── src/data/commands.ts (static command dataset)
  ├── src/pages/Index.tsx (search/filter state, command grid)
  ├── src/components/Header, CategoryFilter, CommandCard, ui/* (shadcn)
  └── BrowserRouter (/, NotFound)
```
[VERIFIED]

### Technologies
Vite, TypeScript, React, shadcn-ui (full Radix suite), Tailwind CSS, @tanstack/react-query, react-router-dom, lucide-react, date-fns [VERIFIED, package.json]. Bun lockfile (`bun.lockb`) + package-lock both present [VERIFIED].

### Deployment
Lovable URL given in README (`https://lovable.dev/projects/a1df7c2a-...`); deploy path = Lovable "Share → Publish" [VERIFIED as instructions]. No .vercel/netlify/GH Pages config on disk [VERIFIED]. Live URL: [UNKNOWN].

### Git History milestones
2 commits in one day (2025-08-18); single data-add commit after initial template commit [VERIFIED].

### Outcome
Small static reference tool, effectively complete in one commit burst. Not a CLI tool despite repo name — a web app *about* CLI commands.

### Current Status
Dormant since 2025-08-18 [VERIFIED].

### Engineering Significance
Minor. Demonstrates: React state filtering (search/category/platform), static data-driven UI, Tailwind/shadcn fluency, willingness to use AI builders (Lovable). Claim as deliverable? It's a command-reference app with modest scope — fine as a side-note portfolio item, weak as a headline project. Naming mismatch (repo "conqueror-crossplay", product "CLI Master") and Lovable-generated boilerplate should be disclosed honestly.

### Evidence
README.md (Lovable), package.json, vite.config.ts, index.html, src/App.tsx, src/pages/Index.tsx, src/components/*, src/data/commands.ts (218L), git log [VERIFIED].

### Confidence
High on all inspected facts. Live deployment status [UNKNOWN].

---

## 5. Portfolio duplicates & relationships

- `/tmp/gh-archive/portfolio` vs `/home/wannacry/personal/web-portfolio`: DIFFERENT projects. gh-archive one = unmodified Magic Portfolio template clone (1 commit). personal/web-portfolio = original spec-only portfolio project (no code). If both intended as "the portfolio", the template clone was abandoned in favor of a custom build [INFERRED]. The custom build's docs (web-portfolio) is the live intent; template clone is dead history.
- internship-progres-tracker: `/tmp/gh-archive/internship-progres-tracker` (35 commits) is mirror of canonical `/home/wannacry/memo/internship-progres-tracker` (36 commits) — local has 1 extra mobile commit (2026-02-06) + mobile app + android/ + extra CSS not yet pushed or archived [VERIFIED via diff].

---

# Portfolio Context

[USER-PROVIDED — lowest evidence tier; claims from user's own CV/analysis docs, NOT verified against any independent source]

From `/home/wannacry/personal/cv-backend-en.md` (33 lines) and `candidate-analysis-en.md` (111 lines) [USER-PROVIDED]:

- Identity: Muhammad Fairul Imron Jalayasi — backend developer, Indonesian market (/home/wannacry based); D3 Teknik Informatika student, Universitas Amikom Yogyakarta (2022–2026, per content2.md) [USER-PROVIDED]
- Target roles: Junior Backend Developer (primary), Junior Cloud Engineer (alternative) [USER-PROVIDED]
- Claimed skills: PHP, JavaScript, SQL, Bash; Laravel 12, Filament 4.8.5, Vite.js; MySQL/MariaDB/SQLite/Redis; Docker-Compose; REST APIs; PHPUnit/Pest [USER-PROVIDED]
- Claimed experience: 2+ years Head of Operations at Vyber.id (per content2.md) [USER-PROVIDED]; full-stack news portal "Kabar Jogja" for RBTV Jogja (Laravel 12 + Filament, Dockerized, multi-language ID/EN); personal homelab (Nextcloud, Vaultwarden, AdGuard, Netdata, Uptime Kuma, 7+ services) [USER-PROVIDED]
- Acknowledged gaps: cloud (AWS/GCP/Azure), Kubernetes, advanced CI/CD, IaC (Terraform) [USER-PROVIDED]
- GitHub username: `fairulmuhammad` — corroborated by git remotes/user.name in the repos above [VERIFIED independent of CV]

Note: none of the CV's claimed professional projects (Kabar Jogja, Vyber.id, homelab) were part of this task's repo list — their verification is out of scope here [UNKNOWN status].

# Infrastructure / Homelab

> Evidence-first audit of the `wannacry-server` homelab (Ubuntu 24.04, 1.7GB RAM) + the DevOps learning project. Audit date: 2026-08-14. No secrets/tokens/keys recorded anywhere in this report.

## Host Overview

| Fact | Value | Status |
|---|---|---|
| Hostname | `wannacry-server` | [VERIFIED] |
| OS | Ubuntu 24.04.4 LTS, kernel 6.8.0-137-generic (x86_64) | [VERIFIED] |
| CPU | 4 vCPU | [VERIFIED] (`nproc`) |
| RAM | 1.7Gi total, ~1.2Gi used, ~507Mi available; 4Gi swap (737Mi used) | [VERIFIED] (`free -h`) |
| Disk | 266G root `/dev/sda2`, 62G used (25%), 191G free | [VERIFIED] |
| Uptime | 2h at audit time | [VERIFIED] |
| Profile | Small/constrained box — memory pressure is a recurring theme (see magang-db OOM incident) | [INFERRED] |

## Containers

`docker ps -a` (15 containers; only 2 running):

| Container | Image | Status | Ports |
|---|---|---|---|
| `hello-app-hello-app-1` | `hello-app:latest` | **Up (healthy)** | `0.0.0.0:8090→8000` — capstone app, deployed via CI/CD |
| `magang-db` | `mysql:8.0` | **Up (healthy)** | `0.0.0.0:3306→3306` + 33060 — restarted ~1h ago after OOM incident |
| `magang-server-db` | `mysql:8.0` | Exited (255) 5 weeks ago | `0.0.0.0:3308→3306` — second MySQL instance (port 3308) |
| `magang-server-app` | `3ba136361965` | Exited (255) 5 weeks ago | `0.0.0.0:8087→8080`, 80/443/2019 |
| `magang-server-phpmyadmin` | `phpmyadmin/phpmyadmin` | Exited (255) 5 weeks ago | `0.0.0.0:8088→80` |
| `magang-server-redis` | `redis:7-alpine` | Exited (255) 5 weeks ago | `0.0.0.0:6380→6379` |
| `magang-octane-worker` | `magang-rbtv-worker-octane` | Exited (1) 3 months ago | — |
| `portainer` | `portainer/portainer-ce:latest` | Exited (2) 3 months ago | — |
| `adguard` | `adguard/adguardhome` | Exited (0) 5 months ago | — |
| `netdata` | `netdata/netdata` | **Exited (0)** ~1h ago — deliberately stopped (memory pressure) | was :19999 |
| `nextcloud`, `code-server`, `mariadb`, `vaultwarden`, `uptime-kuma` | various | Exited (0), 6–9 months ago — retired experiments | — |

Volumes: 19 anonymous local volumes (hash-named) + named service volumes under `/home/wannacry/server/` compose dirs [VERIFIED]. Volume hygiene weak: orphaned anonymous volumes from retired stacks [INFERRED].

**Key finding:** Two MySQL instances (magang-db :3306 + magang-server-db :3308) both bind `0.0.0.0`. Ports 3306/3308/6380/8087/8088 exposed on all interfaces. `netdata` was stopped ~1h before audit — matches the memory-pressure response in the OOM incident.

## Systemd Services

Running (filtered): `docker.service`, `containerd.service`, `apache2.service`, `cloudflared.service`, `tailscaled.service`, `glances.service` (host monitoring), `hermes-agent.service` (Hermes gateway), `actions.runner.fairulmuhammad-Test-Learn-Devops.wannacry-server.service` (GitHub Actions self-hosted runner), `pmcd/pmie/pmlogger/pmproxy` (PCP stack), plus standard desktop/user services (NetworkManager, wpa_supplicant, ModemManager, upower, thermald, etc.) [VERIFIED].

Custom unit files in `/etc/systemd/system/`:

| Unit | Role | Status |
|---|---|---|
| `9router.service` | 9router AI-router daemon; `ExecStart=/home/wannacry/.nvm/.../9router`, `WorkingDirectory=~/.9router`, `Restart=always` | active |
| `hello-app.service` | Capstone app: `Type=oneshot`, `RemainAfterExit=yes`, `ExecStart=docker compose up -d --build`, `ExecStop=docker compose down` | active |
| `actions.runner.fairulmuhammad-Test-Learn-Devops.wannacry-server.service` | Self-hosted GitHub Actions runner v2.336.0 (`runsvc.sh` in `~/actions-runner`) | active |
| `cloudflared.service` | Cloudflare tunnel daemon (runs as root, `--no-autoupdate tunnel run --token`) | active |
| `cloudflared-update.service` | Companion updater unit | inactive (not in running list) |
| `hermes-agent.service` | Hermes Agent Gateway | active |

## Networking & Tunnels

Listening ports map [VERIFIED, `ss -tlnp`]:

| Port | Bind | Process | Exposure |
|---|---|---|---|
| 22 | 0.0.0.0 + [::] | sshd | public (SSH) |
| 80 | *:80 | apache2 | public (default vhost, serves HTTP 200) |
| 3306 | 0.0.0.0 + [::] | docker-proxy → magang-db (MySQL 8.0) | **public — no firewall** |
| 443 | `100.89.251.20` (tailscale0) + `fd7a:115c:a1e0::4001:fb38` | tailscaled | Tailscale Funnel (public HTTPS) |
| 8090 | 0.0.0.0 | docker-proxy → hello-app | LAN/public |
| 9090 | *:9090 | cockpit.socket | public (Web console) |
| 20128 | 0.0.0.0 | `next-server (v16.2.1)` ← 9router CLI (`9router/cli.js --tray -p 20128`, node v22) | **public — 9router Web UI** |
| 19999 | — | netdata | stopped (was public) |
| 20241/20242 | 127.0.0.1 | cloudflared (9router's quick tunnel: localhost:20242 → 20128) | localhost only |
| 4330, 44321–44323 | 0.0.0.0 | unknown process (no `-p` shown, likely PCP/9remote or other daemons) | public |
| 53 | 127.0.0.53/54 | systemd-resolved | localhost |
| 20241 | 127.0.0.1 | — | localhost |

Tailscale [VERIFIED]:
- Node: `100.89.251.20 wannacry-server` (tailscale0, /32)
- Peers: `wannacry` Windows desktop (active, direct connection), `desktop-p1oiaug` (offline 29m), `iphone-xr` (offline 24d), `macbook-air-dinda` (offline 9d)
- **Funnel ON** → `https://wannacry-server.tail2ae7e6.ts.net` proxying to `http://127.0.0.1:8087` (magang-server-app container — currently exited)

Cloudflared [VERIFIED]:
- System service (`cloudflared.service`, root): persistent tunnel via token (token redacted) — 20242/20241 localhost ports
- 9router-run quick tunnel: `~/.9router/bin/cloudflared tunnel --url http://127.0.0.1:20128 --config /tmp/cloudflared-quick-*/config.yml` (ephemeral config in /tmp)
- `~/.cloudflared/`: config + cert files present (role: tunnel config; contents not inspected per rules)

## Reverse Proxy

- **Apache2** is the only reverse proxy installed; nginx absent (`/etc/nginx` missing) [VERIFIED]
- `/etc/apache2/sites-enabled/` contains only `000-default.conf` — default vhost; serves HTTP 200 on :80 [VERIFIED]
- No proxy/ssl modules enabled (`ls /etc/apache2/mods-enabled` shows no proxy/ssl); Apache is effectively the default landing page, not routing traffic [VERIFIED]
- Traffic routing is done by tunnels instead: Tailscale Funnel (:443 → 127.0.0.1:8087) and Cloudflare tunnels (→ 20128, 20242)

## Monitoring

- `netdata` container: **stopped** (Exited 0, ~1h before audit); config lives at `/home/wannacry/server/netdata/config/` (netdata.conf, charts.d, go.d, health.d, python.d, ssl, etc.); was bound :19999; restart policy `unless-stopped` (manual stop → stays down) [VERIFIED]
- `glances.service` — host-level monitoring daemon, active [VERIFIED]
- PCP stack active: pmcd, pmie, pmlogger + farms, pmproxy (Performance Co-Pilot) [VERIFIED]
- Cockpit web console on :9090 — active [VERIFIED]
- `uptime-kuma` container: exited 9 months ago (never really used) [VERIFIED]
- Lab 07 journald audit noted `networkd-wait-online` timeout warning [VERIFIED via INDEX.md]

## 9router & AI Infra

- `~/.9router/`: `auth/`, `bin/` (incl. bundled cloudflared), `db/`, `logs/`, `mitm/`, `runtime/`, `tunnel/`, plus `jwt-secret` and `machine-id` (0600, not read) [VERIFIED — structure only, no contents]
- `~/.9remote/`: `bin/`, `config/`, `daemon/`, `logs/`, `pids/`, `runtime/`, `state/`, `keys.json` (0600, not read), `pty-daemon.sock` (socket) [VERIFIED — structure only, no contents]
- `9router.service`: node v22 daemon (`9router/cli.js --tray --skip-update -p 20128`), RESTART=always. Runs as `wannacry`; Web UI on 20128 **bound 0.0.0.0 (LAN-exposed)** [VERIFIED]
- Child process: `next-server (v16.2.1)` (Next.js server, PID 9947) — serves the 9router Web UI [VERIFIED]
- 9router runs its own cloudflared quick tunnel (localhost:20242 → 20128) for remote access [VERIFIED]
- 9remote daemon (pty-based remote access, keys.json + pty-daemon.sock) — present but not in active process list at audit time [UNCERTAIN — may be socket-activated]

## Backups

- `/var/backups/`: standard Ubuntu automatic backups only (alternatives.tar.*, apt.extended_states.*, dpkg.status.*) — no custom server backups [VERIFIED]
- **No user crontab** (`crontab -l` empty) [VERIFIED]
- Backup-related dirs: `~/backups/` (adguard-20260218_022107, adguard-20260218_022126, portainer-20260218_170955 — manual compose stack dumps, Feb 2026), `~/server/backups/`, `~/Obsidian-Vault/backup/`, `~/from-wind/backup-server.sh`, `~/scratch/backups/` [VERIFIED]
- Lab 02 built a `backup.sh` + log-rotator with a cron line, then removed the cron line (lab hygiene) [VERIFIED via INDEX.md]
- **Finding:** no scheduled backup job for server state or the Obsidian vault; backups are manual one-offs [INFERRED]

## Obsidian Vault

`~/Obsidian-Vault/` top level: `README.md`, `Agent Taxonomy.md`, `Awesome Hermes Resources.md`, `Multi-Agent Systems_ Concepts & Patterns.md`, `Test Note from Hermes.md`, plus dirs `The Umbral Archive/`, `agent/`, `backup/`, `plans/`, `projects/`, `skills/` [VERIFIED]

Notable: `agent/` holds the multi-agent orchestration system docs (AGENTS.md, ARCHITECTURE.md, MCP.md, PRD.md, PROMPTS.md, SETUP.md, WORKFLOWS.md, master-prompt.md) — these were copied into the DevOps project as `instructions/` [VERIFIED]. `plans/language-setting-feature.md`; `projects/` empty at audit time.

## Security Posture

| Check | Result | Status |
|---|---|---|
| UFW firewall | **inactive** (status requires root; no ufw rules found; lab 04 verified "ufw inactive") | [VERIFIED] |
| MySQL :3306 | bound 0.0.0.0, no firewall — **reachable from anywhere** | [VERIFIED] |
| Docker port exposure | 3306, 3308, 6380, 8087, 8088, 8090 all on 0.0.0.0 | [VERIFIED] |
| SSH | key-based auth in practice; **PasswordAuthentication still ON** (lab 08 finding; not changed) | [VERIFIED] |
| Secrets | `~/.git-credentials` exists (0600) with credential.helper=store; **GitHub PAT was embedded in git remote URL** — flagged in lab 08, "needs rotation"; remote URL is now clean (https://github.com/fairulmuhammad/Test-Learn-Devops.git) but stored-credential file persists | [VERIFIED] |
| Env files | `~/server/.env` + `.env.backup.*` are 0600 ✓; `credentials-*.txt` files 0600 ✓ | [VERIFIED] |
| 9router secrets | `jwt-secret`, `machine-id`, `keys.json` all 0600 | [VERIFIED] |
| 9router UI | bound 0.0.0.0:20128 — LAN-exposed web console (lab 04 flagged this) | [VERIFIED] |
| Cockpit | :9090 public | [VERIFIED] |
| Apache | default vhost only, no proxy modules — low risk but no purpose | [VERIFIED] |
| Docker socket | not directly exposed; runner (wannacry user) has docker group access (CD deploy needs it) | [INFERRED] |
| Retired containers | 13 exited containers kept (5 months–9 months old), incl. vaultwarden, nextcloud, phpmyadmin — attack surface + disk clutter | [VERIFIED] |

Overall: functional homelab, **not hardened**. Biggest risks: MySQL exposed on 0.0.0.0 with ufw off, SSH password auth on, 9router UI + Cockpit LAN-exposed, leaked-then-rotated PAT (stored credential still on disk), 13 dead containers.

# DevOps Learning Project (Test-Learn-Devops)

## Identity

**Name:** Test-Learn-Devops. **Owner:** github.com/fairulmuhammad. **Workspace:** `/home/wannacry/devops-project/Test-Learn-Devops/`. **Origin:** 2026-08-04, seeded from Obsidian vault `/agent` docs (multi-agent orchestration system: orchestrator/planner/researcher/builder/executor). Remote URL: `https://github.com/fairulmuhammad/Test-Learn-Devops.git` [VERIFIED — no credentials in URL].

## Classification

**DevOps / Infrastructure learning project** — hands-on curriculum (8 modules + 8 labs + capstone) executed on the live homelab, driven by a multi-agent AI orchestration workflow. Every module/lab ties to a real component of this server (9router.service, netdata, magang compose stacks). [VERIFIED]

## Repository

- Branch: `main`, 4 commits: `4692c8b` (docs: capstone live, runner bump, repo-local git identity), `a35416b` (fix: health check grep for compact JSON, flask 2.3+), `641415a` (index: capstone progress), `3a52380` (capstone: hello-app + CI/CD workflows + systemd unit) [VERIFIED]
- Structure: `INDEX.md`, `GOAL.md`, `GITHUB_SETUP.md`, `instructions/` (8 agent-system docs), `modules/` (8 learning modules), `labs/` (8 labs + README), `apps/hello-app/` (capstone), `.github/workflows/` (ci.yml, cd.yml) [VERIFIED]
- No token in remote URL at audit time [VERIFIED]

## Timeline

- **2026-08-04** — Project scaffolded; instructions copied from vault; 8 learning modules generated by agents (258–470 lines each: linux-fundamentals, shell-scripting, systemd, networking, docker, ci-cd, monitoring, security)
- **2026-08-14** — All 8 labs executed and verified in ONE day: Linux → shell → systemd → networking → docker (OOM incident here) → CI/CD → monitoring → security
- **2026-08-14** — Capstone: hello-app scaffolded → pushed → self-hosted runner registered (v2.336.0) → CI green on GitHub-hosted runners → CD green on box runner → systemd unit verified (restart OK)

## What Was Built

**8 modules** (reference docs, all ✅ done):
1. `linux-fundamentals.md` (258 lines) — FHS, processes, perms, pipes, cheat-sheet
2. `shell-scripting.md` (459) — real `start_run.sh` anatomy, `set -euo pipefail`
3. `systemd.md` (223) — real `9router.service` anatomy, targets, journalctl
4. `networking.md` (273) — IP/CIDR, ufw/iptables, reverse proxy, Tailscale
5. `docker.md` (285) — multi-stage builds, compose, networks/volumes
6. `ci-cd.md` (444) — real magang-rbtv ci.yml/tests.yml anatomy, secrets, matrix
7. `monitoring.md` (271) — 4 pillars, netdata/uptime-kuma, logrotate
8. `security.md` (470) — real SSH hardening audit findings, ufw+Docker bypass

**8 labs** (all ✅ done 2026-08-14, scratch artifacts in `~/scratch/`):
1. `01-linux-fundamentals` — fs explore, processes, perms/symlink/tar
2. `02-shell-scripting` → `~/scratch/shell-lab/`: `backup.sh`, `parse.sh` (getopts), `rotator.sh` + cron line installed then removed
3. `03-systemd` → `~/scratch/systemd-lab/`: `test-hello-wannacry.service` (kill-9 restart loop), `test-backup-wannacry.service` + `.timer` (fired at 02:30); units cleaned up after
4. `04-networking` — port inventory, DNS experiments, `http.server` + ufw allow/delete roundtrip
5. `05-docker` → `~/scratch/pingpong/` (build/run/kill), `~/scratch/multistage/` (`Dockerfile` slim 165MB vs `Dockerfile.fat` 539MB), `~/scratch/compose-lab/compose.yaml` (volume survived down+up)
6. `06-ci-cd` → `~/scratch/ci-demo/` (3 commits: hello workflow, matrix ci, cd with env gate; not pushed)
7. `07-monitoring` — journald audit, netdata restart/stop, logrotate with `su` directive gotchas
8. `08-security` — SSH audit, exposure audit, secrets sweep (read-only; nothing changed)

**Capstone:** `apps/hello-app/` — Flask app (app.py, `/` + `/health` JSON with version/host/uptime), `requirements.txt`, multi-stage-ish Dockerfile (`python:3.12-slim`, HEALTHCHECK, gunicorn -w 2), `compose.yaml` (:8090, `APP_VERSION` env, restart unless-stopped), `hello-app.service` (systemd oneshot wrapper). Deployed and healthy: `{"host":"8eedbf792752","status":"ok","version":"dev"}` [VERIFIED live].

## Architecture

```
GitHub (fairulmuhammad/Test-Learn-Devops)
   │  push → main
   ▼
┌─ CI (ubuntu-latest) ─────────────────────────┐
│ validate: YAML lint + shellcheck + md links │
│ build:    docker build → run :8091 → /health │
└──────────────────────────────────────────────┘
   │  (separate job, same push)
   ▼
┌─ CD (runs-on: self-hosted) ──────────────────┐
│ GitHub-hosted runner → box runner            │
│ wannacry-server (systemd service)            │
└──────────────────────────────────────────────┘
   │  docker compose up -d --build
   ▼
hello-app container :8090 (0.0.0.0, healthy)
   ▲
hello-app.service (systemd oneshot wrapper, active)
```

## Technologies

Python 3.12 + Flask + gunicorn, Docker + docker compose, GitHub Actions (2 workflows), self-hosted runner v2.336.0, systemd (unit + timer), bash, Tailscale, Cloudflare, Apache, netdata/glances/PCP/Cockpit (monitoring), MySQL 8.0 (two instances), Redis, phpMyAdmin. Agent side: 9router (node v22) + Hermes multi-agent orchestration.

## CI/CD

**ci.yml** (push to main + PR; GitHub-hosted ubuntu-latest):
- `validate`: YAML lint all .yml/.yaml, shellcheck (if present), markdown relative-link checker
- `build`: docker build `hello-app:ci` → run on :8091 → curl /health until ok (15 retries) → assert `"status":"ok"` → cleanup

**cd.yml** (push to main + workflow_dispatch; `runs-on: self-hosted`):
- checkout → `docker compose up -d --build` in apps/hello-app → health-poll 127.0.0.1:8090 (15 retries) → assert status ok

Both green in production run [VERIFIED via INDEX.md]. Lab-06 ci-demo (scratch repo) has the env-gate variant (`add CD workflow with environment gate`) — not pushed; capstone CD uses direct deploy, no environment gate [VERIFIED].

## Deployment

- **Self-hosted runner:** `actions.runner.fairulmuhammad-Test-Learn-Devops.wannacry-server.service` (systemd, `runsvc.sh`, `~/actions-runner`, v2.336.0, runs as wannacry) — registered for this repo only, active [VERIFIED]
- **Deploy path:** push → CD job → box runner → `docker compose up -d --build` → container :8090 healthy [VERIFIED]
- **systemd wrapper:** `hello-app.service` (oneshot + RemainAfterExit) — survives reboot, `ExecStop=docker compose down` [VERIFIED]
- Container restart policy `unless-stopped` — dual-layer resilience (systemd + compose) [VERIFIED]

## Engineering Problems

**magang-db OOM incident (2026-08-14, during Lab 05):** `magang-db` (mysql:8.0, :3306) got SIGKILLed by dockerd at ~18:51 WIB — mysqld unresponsive under memory pressure. Cause: 1.7GB RAM box running node builds + **two** MySQL instances + hello-app + runner simultaneously. Resolution: container restarted, `mysqld` came back healthy, **no data loss** [VERIFIED via INDEX.md progress log + live container healthy]. This incident directly informed decisions after it: netdata stopped (~1h pre-audit) to free RAM, hello-app on :8090 instead of another heavy stack, and it's the "why" behind the monitoring + security labs [INFERRED].

**PAT leak:** GitHub PAT was embedded in the git remote URL; flagged in Lab 08 ("needs rotation"), remote cleaned afterward [VERIFIED — URL now credential-free].

**Other friction points documented:** flask 2.3+ compact JSON broke health-check grep (fixed `a35416b`); systemd 255 changed `systemd-analyze calendar` syntax (lab doc patched); logrotate `su` directive gotchas (lab 07).

## Outcome

Complete, verified DevOps curriculum executed end-to-end on live infrastructure in 10 days: 8 modules + 8 labs done with verification steps, capstone app live behind full CI/CD, self-hosted runner working, systemd-managed deployment. Every lab produced a real artifact in `~/scratch/`. [VERIFIED]

## Status

**Active/live.** Capstone deployed and healthy; runner registered; repo pushed (4 commits, main). OOM incident resolved, no data loss. Remaining flagged items: PAT rotation (done for URL, stored credential still present), ufw still off, MySQL exposure, SSH password auth still on — all documented as follow-up in lab 08 / security module. [VERIFIED]

## Significance

This project is the homelab's operational spine: it produced the monitoring awareness (RAM pressure), the only live CI/CD pipeline on the box, the hello-app deploy mechanism (systemd + compose), and a security audit trail. It also demonstrates the multi-agent orchestration workflow working in production — modules/labs generated by agents, verified by executors, indexed in memory. For the overall personal-content story: it's the "learning by building" arc of this homelab — from magang crash to a CI/CD-deployed capstone. [INFERRED]

## Confidence

**High.** Nearly every claim [VERIFIED] directly from live system state (docker ps, ss -tlnp, systemctl, git log, workflow files, running containers) or from the project's own progress log (INDEX.md, cross-checked against filesystem artifacts). Only inferences flagged [INFERRED]: motivation for netdata stop, Docker socket exposure via docker group, volume hygiene. [UNCERTAIN] items: 9remote daemon activity, ports 4330/44321–44323 process attribution (listener exists, no `-p` info; likely PCP/related). Secrets deliberately not inspected — existence + permissions only, per audit rules.

---

# Skill Evidence Matrix

| Skill | Evidence | Projects | Confidence |
|---|---|---|---|
| Laravel 12 | App implementation (models, routes, services, policies, middleware) | Kabar Jogja | High |
| Filament 4.8.5 | Admin panel: resources, widgets, custom topbar | Kabar Jogja | High |
| PHP 8.x | Multiple apps + coursework | Kabar Jogja, uasci3, relfconnect, php-app | High |
| MySQL 8.0 | Schema, migrations, indexes, fulltext | Kabar Jogja, uasci3, server | High |
| Redis | Cache/queue/session in prod compose | Kabar Jogja | Medium |
| Docker / Compose | Dockerfile, compose dev/octane/prod, multi-stage | Kabar Jogja, Test-Learn-Devops, inventory-app | High |
| GitHub Actions | ci.yml/cd.yml, Pages deploy, self-hosted runner | Test-Learn-Devops, internship-tracker, magang CI | High |
| systemd | Units: 9router, hello-app, runner, cloudflared | Homelab, Test-Learn-Devops | High |
| Tailscale | Funnel on :443, mesh networking | Homelab | High |
| Cloudflare tunnels | cloudflared daemon + quick tunnels | Homelab | High |
| Python / Flask | Capstone app + inventory API | Test-Learn-Devops, inventory-app | High |
| JavaScript (vanilla) | Modular ES modules app | Internship Progress Tracker | High |
| React Native / Expo | Mobile app (navigation, zustand, paper) | Internship tracker mobile | Medium |
| Firebase | Auth, Firestore, Hosting, security rules | Internship tracker | High |
| TypeScript | Vite/React app, Next.js template | cli-conqueror-crossplay, portfolio | Medium |
| CodeIgniter 3 | MVC apps + roles | uasci3, relfconnect | Medium |
| FastAPI | Web platform | gamble | Medium |
| Terraform | .tf files + GH Actions CD | testing-site, inventory-app | Low-Med |
| Kubernetes | k8s/ manifests | inventory-app | Low |
| Jenkins | Jenkinsfile | php-app, CodeIgniter fork | Low |
| Monitoring | netdata, Prometheus/Grafana/Loki, glances, PCP | Homelab, inventory-app | Medium |
| RBAC design | Roles/permissions pivots, policies, 17 perms | Kabar Jogja | High |
| Workflow state machine | 9-state enum + service choke point + audit | Kabar Jogja | High |
| Security audit | SSH, exposure, secrets sweep | Test-Learn-Devops lab 08 | Medium |
| Testing | Pest/PHPUnit, 34 test files, BlackBox/WhiteBox | Kabar Jogja | Medium |
| Git | Branching, merge conflicts, PRs | All repos | High |

---

# Technology Inventory

## Languages
- **PHP** (Laravel 12, Filament, CodeIgniter 3, plain) — magang-rbtv, uasci3, relfconnect, tugasbe, sem3_be_responsi_uts, php-app
- **JavaScript** — internship-progres-tracker (vanilla ES modules), mentionAll (Node/Baileys), testing-site (Express)
- **TypeScript** — cli-conqueror-crossplay (Vite/React), portfolio template (Next.js), internship mobile (Expo RN)
- **Python** — gamble (FastAPI), inventory-app (Flask), learning-fundamental, Test-Learn-Devops (Flask capstone)
- **Shell** — inventory-app, Test-Learn-Devops labs, server scripts
- **HTML/CSS/Tailwind** — tugas, latihan repos, portfolio frontends

## Frameworks
- **Laravel 12** (magang-rbtv, indeks-kami fork), **Filament 4.8.5** (magang-rbtv), **CodeIgniter 3** (uasci3, relfconnect, CodeIgniter fork), **Next.js 15** (portfolio template, web-portfolio spec), **Vite/React** (cli-conqueror-crossplay), **Express** (testing-site), **Flask** (inventory-app, hello-app), **FastAPI** (gamble), **Expo/React Native** (internship mobile)

## Databases
- **MySQL 8.0** — magang-rbtv (magang_news_new), magang_backup.sql, uasci3, relfconnect, server (x2 instances)
- **SQLite** — gamble, magang-rbtv tests, magang-rbtv archive phase
- **Redis 7** — magang-rbtv (cache/queue/session), server
- **Firestore** — internship-progres-tracker

## DevOps
- **Docker + Compose** — magang-rbtv (dev/octane/prod), inventory-app, hello-app, server stacks
- **GitHub Actions** — Test-Learn-Devops (ci.yml/cd.yml), inventory-app, internship-progres-tracker (Pages deploy), magang-rbtv CI
- **Jenkins** — php-app, CodeIgniter fork
- **Terraform** — testing-site, inventory-app
- **Kubernetes** — inventory-app (k8s/)
- **Self-hosted runner** — Test-Learn-Devops CD (v2.336.0)
- **systemd** — 9router, cloudflared, hello-app, actions runner, hermes-agent
- **Monitoring** — netdata, Prometheus/Grafana/Loki, glances, PCP, Cockpit
- **CI security** — Bandit, Trivy, SonarQube, safety (inventory-app)

## Infrastructure
- **Ubuntu 24.04** homelab, **Docker** (15 containers), **Tailscale** (Funnel on :443), **Cloudflare tunnels** (cloudflared), **Apache2** (default vhost), **FrankenPHP + Laravel Octane**, **nginx** (absent), **Firebase Hosting** (internship tracker)

## Networking
- **SSH** (key-based in practice, password auth on), **Tailscale** (mesh + funnel), **Cloudflare tunnels**, **DNS** (systemd-resolved), **ufw** (inactive), **docker-proxy** port publishing

## Tools
- **Filament Breezy** (2FA/passkeys), **Intervention Image**, **Laravel Telescope**, **Pest/PHPUnit**, **Pint**, **Larastan/PHPStan**, **k6** (load testing), **phpMyAdmin**, **Portainer**, **AdGuard**, **Uptime Kuma**, **Nextcloud**, **Vaultwarden** (retired), **9router** (AI router), **9remote** (remote access), **Hermes Agent** (orchestration), **Obsidian** (second brain vault)

---

# GitHub Repository Inventory

| Repo | Visibility | Language | Created | Updated | Stars | Forks | OpenIssues |
|---|---|---|---|---|---|---|---|
| tugas | public | HTML | 2024-07-24 | 2024-07-24 | 0 | 0 | 0 |
| tugasbe | public | PHP | 2024-10-30 | 2024-10-30 | 0 | 0 | 0 |
| sem3_be_responsi_uts | public | PHP | 2024-11-02 | 2025-01-02 | 0 | 0 | 0 |
| mentionAll | public | JavaScript | 2024-12-22 | 2024-12-22 | 0 | 0 | 0 |
| uasci3 | public | PHP | 2025-01-22 | 2025-01-24 | 0 | 0 | 0 |
| latihan-devops | public | HTML | 2025-03-05 | 2025-03-19 | 0 | 0 | 0 |
| latihan1-devops | public | HTML | 2025-03-15 | 2025-03-17 | 0 | 0 | 0 |
| CodeIgniter | public | PHP | 2025-03-19 | 2025-04-02 | 0 | 0 | 0 |
| testing-site | public | JavaScript | 2025-05-14 | 2025-05-14 | 0 | 0 | 0 |
| php-app | public | PHP | 2025-06-15 | 2025-06-15 | 0 | 0 | 0 |
| indeks-kami | public | - | 2025-06-18 | 2025-06-18 | 0 | 0 | 0 |
| inventory-app | public | Shell | 2025-07-11 | 2025-08-26 | 0 | 0 | 0 |
| fairulmuhammad | public | - | 2025-07-12 | 2025-07-12 | 0 | 0 | 0 |
| web-portfolio | public | TypeScript | 2025-07-12 | 2025-07-12 | 0 | 0 | 0 |
| portfolio | private | TypeScript | 2025-07-12 | 2025-07-12 | 0 | 0 | 0 |
| project-relfconnect | public | PHP | 2025-07-24 | 2025-07-24 | 0 | 0 | 0 |
| cli-conqueror-crossplay | private | TypeScript | 2025-08-18 | 2025-08-18 | 0 | 0 | 0 |
| gamble | public | Python | 2025-08-28 | 2025-08-28 | 0 | 0 | 0 |
| learning-fundamental | public | Python | 2025-08-29 | 2025-08-29 | 0 | 0 | 0 |
| skills-introduction-to-github | public | - | 2025-08-29 | 2025-08-29 | 0 | 0 | 1 |
| internship-progres-tracker | public | HTML | 2025-09-03 | 2025-09-13 | 0 | 0 | 0 |
| magang-rbtv | private | PHP | 2025-10-07 | 2026-04-06 | 0 | 0 | 0 |
| Test-Learn-Devops | public | Python | 2026-08-14 | 2026-08-14 | 0 | 0 | 0 |

---

# Local Repository Inventory

| Path | Repo | Notes |
|---|---|---|
| `/home/wannacry/project/magang-rbtv` | magang-rbtv | canonical live, branch `server` (121 commits), remote clean URL |
| `/home/wannacry/project/magang_backup` | magang_backup | outer = working copy, 0 commits; nested `magang/` = 10-commit snapshot |
| `/home/wannacry/memo/internship-progres-tracker` | internship-progres-tracker | canonical (36 commits, incl. mobile work not yet pushed) |
| `/home/wannacry/devops-project/Test-Learn-Devops` | Test-Learn-Devops | canonical, 4 commits, remote clean |
| `/home/wannacry/personal/web-portfolio` | (no git) | spec-only portfolio, design phase |
| `/home/wannacry/scratch/` | various | lab artifacts (shell-lab, systemd-lab, pingpong, multistage, compose-lab, ci-demo) |
| `/home/wannacry/server/` | (no git) | netdata config, .env (0600), compose stacks |
| `/tmp/gh-archive/` | 21 clones | GitHub mirror snapshots for analysis |

---

# Duplicate / Related Projects

- **magang_backup ↔ magang-rbtv**: same project, historical snapshot. Identical first commit `1e618ea`, 10-commit prefix of 130-commit history, same remote. Backup = frozen at 2025-11-10; live repo = canonical.
- **tugasbe ≈ sem3_be_responsi_uts**: same PHP session-auth CRUD, same file names, same Amikom logo. Keep ONE (sem3 has full exam context).
- **latihan-devops ≈ latihan1-devops**: same git-practice content. Keep ONE (latihan1 has richer merge-conflict history).
- **uasci3 + relfconnect**: both embed CodeIgniter fork's `system/` tree (framework code duplicated across 3 repos).
- **CodeIgniter, indeks-kami, skills-introduction-to-github**: third-party clones/forks — NOT user's work. Exclude from portfolio.
- **portfolio (template clone) vs web-portfolio (spec)**: different projects; template clone abandoned in favor of custom build. Custom build docs = live intent; template = dead history.
- **internship-progres-tracker GitHub mirror vs local**: local has 1 extra mobile commit + mobile app + android/ not yet pushed.

---

# Unknown / Needs Human Verification

1. **Kabar Jogja production usage**: [UNKNOWN] Was it actually deployed and used by RBTV? Repo has no live URL/evidence. (Outcome section)
2. **Internship Progress Tracker real usage**: Firebase project exists + Pages live, but actual user activity volume (memos/tasks in Firestore) unknown.
3. **web-portfolio deployment**: [UNKNOWN] No evidence of any live deployment — spec-only.
4. **cli-conqueror-crossplay live URL**: [UNKNOWN] Lovable "Publish" path given but no live URL evidence.
5. **magang-rbtv role/team**: What was user's exact role? Solo developer or team? (Thesis claims team context [UNKNOWN]).
6. **inventory-app authorship**: GitHub shows `wikan-dn` as collaborator ("Projek uas") — user's exact contribution share [UNKNOWN].
7. **gamble authorship**: Unusually polished docs for 1-commit repo — possibly AI-assisted [INFERRED]. Verify before claiming.
8. **Vyber.id experience**: CV claims "2+ years Head of Operations" — no repository evidence exists. [USER-PROVIDED, unverified]
9. **Homelab claims in CV**: Nextcloud, Vaultwarden, AdGuard, Uptime Kuma — containers exist but retired (exited 6-9 months ago), not active as claimed.
10. **Ports 4330/44321–44323**: listeners present, process attribution unknown (likely PCP/9remote).

---

# Security Findings

| # | Finding | Severity | Location | Status |
|---|---|---|---|---|
| 1 | GitHub PAT embedded in git remote URL | **CRITICAL** | `/home/wannacry/project/magang-rbtv/.git/config` | Needs rotation + `git remote set-url` |
| 2 | MySQL 3306 + 3308 bound 0.0.0.0, ufw inactive | **HIGH** | server | Reachable from anywhere; needs firewall |
| 3 | SSH PasswordAuthentication still ON | **HIGH** | /etc/ssh/sshd_config | Key-based in practice but live risk |
| 4 | 9router Web UI + Cockpit bound 0.0.0.0 | **MEDIUM** | :20128, :9090 | LAN-exposed control planes |
| 5 | `.env` + `.env.bak.*` in magang_backup plaintext | **MEDIUM** | `/home/wannacry/project/magang_backup/` | Not in git, but on disk; delete .env.bak |
| 6 | `magang_backup.sql` + `storage_backup.tar.gz` real data at rest | **MEDIUM** | magang_backup/ | Treat as sensitive |
| 7 | Debug route `GET /intelligent-fix` in routes/web.php | **MEDIUM** | magang-rbtv | Exposes schema column listing; remove |
| 8 | `kubeconfig.yaml`, `terraform.tfstate`, `logs/` committed | **HIGH** | inventory-app repo | Scrub before any public exposure |
| 9 | `terraform.tfstate` + `.backup` committed | **MEDIUM** | testing-site repo | Remove |
| 10 | `~/.git-credentials` (0600) stores PAT | **MEDIUM** | server | Stored credential persists; rotate |
| 11 | Docker socket accessible via docker group | **LOW** | server | Needed for CD deploy; inherent risk |
| 12 | 13 retired containers (vaultwarden, nextcloud, phpmyadmin) | **LOW** | server | Attack surface + disk clutter |

**Positive findings**: `.env` never committed to git history in magang-rbtv (0 hits); `.gitignore` protects env files; internship-tracker had a security pass removing exposed Firebase API key; `~/server/.env` + credentials files 0600; 9router secrets (`jwt-secret`, `machine-id`, `keys.json`) 0600.

All secret VALUES intentionally omitted from this document per AGENTS.md §28.

---

# Portfolio Candidates

## Tier 1 — Strong Portfolio Projects

1. **Kabar Jogja (magang-rbtv)** — Laravel 12 + Filament 4.8.5 news portal with 9-state editorial workflow state machine, RBAC (dual system), audit trail, i18n, 2FA, performance indexing, load-testing scripts, CI, containerized prod (FrankenPHP/Octane). Thesis-backed, docs-heavy (40+ docs). *Why:* deepest engineering, real-world problem, verifiable from source. Needs: remove leaked token, prune debug routes/backup blobs, unify RBAC.
2. **Internship Progress Tracker** — vanilla JS modular web app + Expo RN mobile app, Firebase Auth/Firestore realtime, kanban, analytics, GitHub Pages LIVE (HTTP 200), 36 commits, security pass (removed exposed API key). *Why:* shipped + used, full-stack-ish, multi-surface, real deployment.
3. **Test-Learn-Devops + wannacry-server homelab** — 8-module DevOps curriculum executed on live infra, capstone Flask app with CI (GitHub runners) + CD (self-hosted runner) + systemd, OOM incident documented. *Why:* demonstrates DevOps/infra capability end-to-end on real hardware.

## Tier 2 — Supporting Projects

4. **inventory-app** — Flask API + full DevOps stack (Docker, GH Actions, Prometheus/Grafana/Loki, k8s, Trivy/Bandit/SonarQube). *Why:* broadest toolchain coverage, but authorship share with collaborator wikan-dn [UNKNOWN] + committed kubeconfig/tfstate must be scrubbed.
5. **project-relfconnect** — CodeIgniter 3 donation campaign prototype with roles + thorough docs. *Why:* cleanest coursework example; needs test-script/uploads cleanup.
6. **gamble** — educational gaming-algorithms platform (FastAPI + SQLite + Docker), polished. *Why:* algorithms + API + Docker; verify authorship first.
7. **uasci3** — CodeIgniter 3 grade app with role auth + PDF export. *Why:* MVC + RBAC + FPDF; bulk-upload history hurts.
8. **web-portfolio** — spec-only but well-structured (ADR log, PRD, feature specs). *Why:* shows planning rigor; zero code today.

## Tier 3 — Experiments / Archive

- testing-site, mentionAll, php-app, sem3_be_responsi_uts, tugasbe, tugas, latihan-devops, latihan1-devops, learning-fundamental, cli-conqueror-crossplay, fairulmuhammad profile, magang_backup (archive only)

## Exclude entirely

- CodeIgniter, indeks-kami, skills-introduction-to-github (third-party clones — not user's work)
- portfolio (unmodified template with stock "Selene Yu" content)

---

# CV Evidence Candidates

Evidence-backed claims (from verified source, not fabrication):

**Backend**
- Built Laravel 12 + Filament 4.8.5 news portal CMS with 9-state editorial workflow (draft→submitted→under_review→revision_requested→revised→approved_by_editor→final_review→published/archived)
- Implemented policy-driven workflow transitions via single `ArticleWorkflowService` choke point
- Designed RBAC: roles/permissions pivot tables + 17 granular permission constants + 5 policies with 15 workflow abilities
- Built audit logging with from/to status + reason for every workflow transition
- Implemented multi-language (ID/EN) per-user locale persistence via middleware
- Added 2FA/passkeys via Filament Breezy; image optimization via Intervention Image
- Prevented N+1 queries (eager loading + preventLazyLoading), added fulltext + composite indexes
- Wrote 34 test files (Feature/Unit/BlackBox/WhiteBox/Security/Performance)

**Frontend**
- Built public news site with Blade + Tailwind 4 + Vite (articles, categories, tags, search, ad banners)
- Custom Filament admin dashboard with per-role workflow queue widgets
- Vanilla JS modular architecture (models/services/components separation) for internship tracker

**Mobile**
- Built Expo React Native app (React Navigation, zustand, react-native-paper) sharing Firebase backend with web app

**DevOps / Infrastructure**
- Containerized Laravel with Docker Compose (dev/octane/prod variants) + FrankenPHP/Octane
- Set up GitHub Actions CI/CD: YAML lint, shellcheck, docker build + health check, deploy via self-hosted runner
- Configured self-hosted GitHub Actions runner (v2.336.0) as systemd service
- Deployed Flask app with docker compose + systemd oneshot wrapper
- Managed Ubuntu homelab: 15 containers, systemd services (9router, cloudflared, cockpit), Tailscale Funnel, Cloudflare tunnels, monitoring (netdata, glances, PCP, Cockpit)
- Diagnosed + recovered MySQL container from OOM SIGKILL (no data loss)
- Performed security audit: SSH config, port exposure, secrets sweep (found PAT leak, exposed MySQL, password auth on)

**Database**
- Designed MySQL schema: articles/categories/tags/ads/analytics + RBAC pivots + workflow fields
- Data migration tooling: legacy SQL import scripts, extracted_data.json pipeline

**CI/CD**
- GitHub Actions (2 workflows, CI on hosted runners + CD on self-hosted), Jenkins (php-app), Terraform (testing-site, inventory-app)

---

# Missing Information

Questions requiring user confirmation (answers NOT discoverable from repos):

1. What was your exact role in the Kabar Jogja / RBTV project — solo developer or part of a team?
2. Was Kabar Jogja deployed and used by RBTV in production? (No live URL/evidence in repo)
3. How many real users did Internship Progress Tracker have? (Firestore data not inspectable)
4. What was your contribution share in inventory-app (collaborator wikan-dn listed)?
5. Was gamble AI-assisted? (Unusually polished for 1-commit repo)
6. Is the Vyber.id "2+ years Head of Operations" claim accurate? (No repo evidence)
7. Do you still use the homelab services claimed in the CV (Nextcloud, Vaultwarden, AdGuard, Uptime Kuma)? (Containers retired 6-9 months ago)
8. Should the leaked PAT in magang-rbtv remote be rotated now? (Critical — confirmed leaked)
9. What happened to the `server` branch deploy — is the app still running anywhere?
10. web-portfolio: is this the active portfolio direction, or abandoned in favor of something else?