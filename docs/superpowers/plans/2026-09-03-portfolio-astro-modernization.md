# Portfolio Astro Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a maintainable, accurate, recruiter-focused Astro portfolio with a dedicated Knowledge Nebula case study and a deployment-compatible static fallback.

**Architecture:** Astro pages and focused components read from `src/data/portfolio.js`. Shared static CSS and JavaScript live in `public/`; a small generator imports the same data and creates root fallback HTML for the repository’s existing branch-based GitHub Pages deployment. Node content tests enforce the public copy, links, privacy rules, and fallback synchronization.

**Tech Stack:** Astro 7.2.10, Node.js 22.12+, JavaScript modules, CSS, Node built-in test runner, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-03-portfolio-astro-modernization-design.md`

## Global Constraints

- Public headline: `AdTech Solutions Engineer · Technical Solutions Consultant`.
- Google role: `AdTech Solutions Engineer (Technical Solutions Consultant)`, `04/2025–07/2026`.
- Microsoft role: `Cloud Solution Architect`, `08/2022–03/2025`.
- Allowed proof points: 50+ publishers, 50% faster turnaround, 50+ customers, approximately 10 hours saved weekly.
- Do not publish a phone number or `tel:` link in web source or generated HTML.
- Keep email and LinkedIn contact links.
- Provide `/Chris-Johnson-Resume.pdf` as a recruiter action.
- Provide a dedicated `/work/knowledge-nebula/` case study, live demo, and GitHub link.
- Preserve keyboard access, visible focus, reduced-motion support, semantic landmarks, and no-JavaScript usability.

---

### Task 1: Define the content contract with failing tests

**Files:**
- Create: `tests/content.test.mjs`

**Interfaces:**
- Consumes: `src/data/portfolio.js`, root fallback HTML, and public SEO files once they exist.
- Produces: executable content and privacy requirements used by all later tasks.

- [ ] **Step 1: Write tests for factual positioning and privacy**

Create tests using `node:test`, `node:assert/strict`, and `fs/promises`. Import `portfolio` from `../src/data/portfolio.js`, then assert:

```js
assert.equal(portfolio.positioning, 'AdTech Solutions Engineer · Technical Solutions Consultant');
assert.equal(portfolio.experience[0].dates, '04/2025 — 07/2026');
assert.equal(portfolio.experience[0].title, 'AdTech Solutions Engineer (Technical Solutions Consultant)');
assert.equal(portfolio.experience[1].dates, '08/2022 — 03/2025');
```

Read every `.astro`, `.js`, and generated `.html` file and assert that none contains `tel:`, `678-642-6551`, `Solutions Architect · Google`, `04/2025 — present`, `platform adoption twofold`, `upward of 35%`, or `45 publisher-oriented solutions`.

- [ ] **Step 2: Write tests for recruiter and project links**

Assert the data contains:

```js
assert.equal(portfolio.resumeUrl, '/Chris-Johnson-Resume.pdf');
assert.equal(portfolio.projects[0].caseStudyUrl, '/work/knowledge-nebula/');
assert.equal(portfolio.projects[0].liveUrl, 'https://document-graph-explorer.vercel.app');
assert.equal(portfolio.projects[0].repoUrl, 'https://github.com/chrisatom1998/document-graph-explorer');
```

Assert the generated home page includes the resume, email, LinkedIn, live-demo, case-study, and GitHub URLs.

- [ ] **Step 3: Run the tests and verify RED**

Run:

```bash
node --test tests/content.test.mjs
```

Expected: FAIL because `src/data/portfolio.js` and generated pages do not exist.

### Task 2: Add the Astro project and single source of truth

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/data/portfolio.js`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Hero.astro`
- Create: `src/components/Metrics.astro`
- Create: `src/components/Experience.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/Skills.astro`
- Create: `src/components/Contact.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/work/knowledge-nebula.astro`

**Interfaces:**
- Produces: named `portfolio` export with `positioning`, `resumeUrl`, `contact`, `metrics`, `experience`, `projects`, and `skillGroups` fields.
- Consumes: `/styles.css`, `/site.js`, `/assets/chris-johnson-og.png`, and `/assets/knowledge-nebula-orbit-transparent.webp` from Task 3/4.

- [ ] **Step 1: Implement the data module minimally**

Add the approved contact links, roles, dates, proof points, project URLs, skills, and Knowledge Nebula case-study content. Use only claims allowed by Global Constraints.

- [ ] **Step 2: Run the factual data tests**

Run:

```bash
node --test --test-name-pattern='portfolio data' tests/content.test.mjs
```

Expected: PASS for the data assertions; output-file assertions remain failing.

- [ ] **Step 3: Implement layout and focused components**

`BaseLayout.astro` accepts `title`, `description`, `canonicalPath`, `image`, and optional `schema` props. It renders metadata, skip link, navigation, footer, and shared assets. Components receive data through props and do not duplicate copy.

- [ ] **Step 4: Implement both pages**

The home page composes hero, metrics, about, experience, selected work, skills, and contact. The Knowledge Nebula route renders problem, constraints, architecture, implementation, validation, and outcome sections with links back to the live demo and source.

### Task 3: Add styling, progressive enhancement, and synchronized fallback output

**Files:**
- Create: `public/styles.css`
- Create: `public/site.js`
- Create: `scripts/generate-static-fallback.mjs`
- Replace: `index.html`
- Create: `styles.css`
- Create: `site.js`
- Create: `work/knowledge-nebula/index.html`

**Interfaces:**
- Consumes: `portfolio` from `src/data/portfolio.js`.
- Produces: `index.html` and `work/knowledge-nebula/index.html` with the same factual content and links as the Astro pages.

- [ ] **Step 1: Implement the shared visual system**

Create a warm neutral palette, serif display headings, sans-serif body type, editorial spacing, high-contrast buttons, responsive project cards, visible focus states, and `prefers-reduced-motion` rules. Do not include embedded base64 fonts.

- [ ] **Step 2: Implement progressive navigation and reveal behavior**

`public/site.js` toggles the mobile menu using `aria-expanded` and closes it on navigation or Escape. IntersectionObserver may add reveal classes, but all content is visible by default and the script exits safely when APIs are unavailable.

- [ ] **Step 3: Implement the fallback generator**

Import the data module, render escaped content into complete home and case-study HTML documents, and copy `public/styles.css`/`public/site.js` into their root equivalents. Include a `<!-- Generated by scripts/generate-static-fallback.mjs -->` marker in both HTML files.

- [ ] **Step 4: Generate fallback files**

Run:

```bash
node scripts/generate-static-fallback.mjs
```

Expected: root home page and nested case-study page are created without errors.

- [ ] **Step 5: Run content tests**

Run:

```bash
node --test tests/content.test.mjs
```

Expected: recruiter-link, privacy, unsupported-claim, and generated-page assertions pass except for asset/SEO files not yet created.

### Task 4: Add recruiter, image, and discovery assets

**Files:**
- Create: `public/Chris-Johnson-Resume.pdf`
- Create: `Chris-Johnson-Resume.pdf`
- Create: `public/assets/chris-johnson-og.png`
- Create: `public/assets/knowledge-nebula-orbit-transparent.webp`
- Create: `public/favicon.svg`
- Create: `public/CNAME`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create matching root `favicon.svg`, `CNAME`, `robots.txt`, and `sitemap.xml` fallbacks.

**Interfaces:**
- Produces: stable public URLs referenced by both Astro and fallback pages.

- [ ] **Step 1: Add the current resume at the stable download URL**

Use the current `Chris_Johnson_AdTech_Solutions_Engineer_Resume.pdf` bytes for both public and root paths.

- [ ] **Step 2: Reuse existing repository image blobs**

Reference the current OG image and Knowledge Nebula image blobs at matching `public/assets/` paths so Astro copies them into `dist/assets/` without lossy re-encoding.

- [ ] **Step 3: Add discovery files**

`CNAME` contains `www.chrisjohnson.solutions`. `robots.txt` allows crawling and references `https://www.chrisjohnson.solutions/sitemap.xml`. `sitemap.xml` contains the home and Knowledge Nebula URLs. The SVG favicon uses the site’s neutral background and dark ring mark.

- [ ] **Step 4: Run all content tests**

Run:

```bash
node --test tests/content.test.mjs
```

Expected: all tests pass.

### Task 5: Add CI, deployment, and maintainer documentation

**Files:**
- Create: `.github/workflows/pages.yml`
- Create: `README.md`
- Create: `.gitignore`

**Interfaces:**
- Consumes: npm scripts from `package.json`.
- Produces: PR verification and main-branch GitHub Pages deployment.

- [ ] **Step 1: Add PR verification and Pages deployment workflow**

Use Node 22, `npm install`, `npm test`, and `npm run build`. Upload `dist/` with `actions/upload-pages-artifact`, then deploy only on pushes to `main` using `actions/deploy-pages` with `pages: write` and `id-token: write` permissions.

- [ ] **Step 2: Document the update flow**

README commands:

```bash
npm install
npm run dev
npm test
npm run generate:fallback
npm run build
```

Explain that copy changes belong in `src/data/portfolio.js`, root HTML is generated, and the current deployment remains compatible with branch-based Pages until Actions deployment is active.

- [ ] **Step 3: Verify static source without dependencies**

Run:

```bash
npm test
npm run generate:fallback
npm test
```

Expected: both test runs pass and the second generation produces no content drift.

- [ ] **Step 4: Commit and open a pull request**

Commit all source, generated fallback, assets, tests, and workflow files to `portfolio-astro-modernization`. Open a PR to `main` summarizing factual corrections, Astro architecture, recruiter improvements, privacy changes, and verification evidence.