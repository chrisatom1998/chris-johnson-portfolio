# Portfolio Astro Modernization Implementation Plan

> **Status:** Implemented on `portfolio-astro-modernization`; final remote CI verification occurs in the pull request.

**Goal:** Build a maintainable, accurate, recruiter-focused Astro portfolio with a dedicated Knowledge Nebula case study and a deployment-compatible static fallback.

**Architecture:** Astro pages and focused components read from `src/data/portfolio.js`. Shared CSS and JavaScript live in `public/`; a generator imports the same data and creates root fallback HTML for the repository’s existing branch-based GitHub Pages deployment. Node content tests enforce public copy, links, privacy rules, maintainer behavior, and fallback synchronization.

**Tech stack:** Astro 7.2.10, Node.js 22.12+, JavaScript modules, CSS, Node’s built-in test runner, GitHub Actions, and GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-03-portfolio-astro-modernization-design.md`

## Constraints

- Public headline: `AdTech Solutions Engineer · Technical Solutions Consultant`.
- Google role: `AdTech Solutions Engineer (Technical Solutions Consultant)`, `04/2025–07/2026`.
- Microsoft role: `Cloud Solution Architect`, `08/2022–03/2025`.
- Allowed proof points: 50+ publishers, 50% faster turnaround, 50+ customers, approximately 10 hours saved weekly.
- No phone number or `tel:` link in web source or generated HTML.
- Keep email, LinkedIn, and GitHub contact links.
- Provide `/Chris-Johnson-Resume.pdf` as a recruiter action.
- Provide a dedicated `/work/knowledge-nebula/` case study, live demo, and source link.
- Preserve keyboard access, visible focus, reduced-motion support, semantic landmarks, and no-JavaScript usability.

## Completed work

### 1. Content contract

- [x] Added `tests/content.test.mjs` with factual-positioning, employment-date, recruiter-link, project-link, privacy, discovery-file, maintainer-flow, and CI assertions.
- [x] Confirmed the tests fail against missing new source and pass against the completed implementation.

### 2. Astro source architecture

- [x] Added `package.json`, `astro.config.mjs`, and strict Astro TypeScript configuration.
- [x] Added `src/data/portfolio.js` as the single source of truth.
- [x] Added a shared layout and focused Hero, Metrics, Experience, ProjectCard, Skills, and Contact components.
- [x] Added the home page and `/work/knowledge-nebula/` case-study route.
- [x] Added `Person` and `SoftwareApplication` structured data.

### 3. Visual system and progressive enhancement

- [x] Added the responsive warm-neutral editorial visual system in `public/styles.css`.
- [x] Added keyboard-friendly mobile navigation, Escape handling, safe reveal enhancement, and reduced-motion behavior in `public/site.js`.
- [x] Kept all content visible and navigable without JavaScript.

### 4. Static fallback and assets

- [x] Added `scripts/generate-static-fallback.mjs`.
- [x] Generated root `index.html` and `work/knowledge-nebula/index.html` from the shared data module.
- [x] Added the current résumé at `/Chris-Johnson-Resume.pdf`.
- [x] Reused the existing OG image and Knowledge Nebula visual without re-encoding.
- [x] Added CNAME, robots, sitemap, and SVG favicon files for both Astro output and branch-based Pages.

### 5. CI and documentation

- [x] Added `.github/workflows/pages.yml` using Node 22.12.0.
- [x] CI installs dependencies, runs the content contract, regenerates the fallback and checks for drift, then builds Astro.
- [x] Kept deployment on the repository’s existing branch-based GitHub Pages path; merging the generated root files updates the live site without changing repository settings.
- [x] Added README instructions for local development, verification, generated files, résumé updates, and deployment.

## Verification commands

```bash
npm install --no-audit --no-fund
npm test
npm run generate:fallback
git diff --exit-code -- index.html styles.css site.js favicon.svg CNAME robots.txt sitemap.xml work/knowledge-nebula/index.html
npm run build
```

Local dependency-free checks also verify generator syntax, deterministic fallback output, HTML landmark/ID/image-alt integrity, and the résumé PDF render. GitHub Actions supplies the clean-environment Astro dependency install and production build proof.