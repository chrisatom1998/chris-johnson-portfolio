# Chris Johnson Portfolio

A static Astro portfolio for Chris Johnson, focused on customer-facing technical work across advertising technology, cloud architecture, data systems, and AI products.

## Source of truth

Professional copy, proof points, experience dates, skills, contact links, and project links live in:

```text
src/data/portfolio.js
```

Update that file instead of editing the same fact in multiple pages. The Astro components and the compatibility fallback both read from it.

## Local development

Use Node.js 22.12.0 or newer.

```bash
npm install
npm run dev
```

Astro prints the local preview URL. The site is fully static and does not require environment variables or a backend.

## Verification

```bash
npm test
npm run generate:fallback
npm run build
```

`npm test` enforces the public positioning, employment dates, recruiter links, project links, privacy rules, and discovery assets. `npm run build` writes the production Astro site to `dist/`.

## Generated files

The repository keeps a root-level static fallback because the existing GitHub Pages site publishes from the default branch. Generate it with:

```bash
npm run generate:fallback
```

The following files are generated or synchronized and should not be edited directly:

```text
index.html
styles.css
site.js
favicon.svg
CNAME
robots.txt
sitemap.xml
work/knowledge-nebula/index.html
```

Make page-copy changes in `src/data/portfolio.js`, structure changes in `src/pages/` or `src/components/`, and visual changes in `public/styles.css`. Then regenerate the fallback and commit both the source and generated output.

## Résumé and images

- Replace `public/Chris-Johnson-Resume.pdf` when the résumé changes, then run the fallback generator to synchronize the root download.
- Shared portfolio images live under `public/assets/`.
- The public site intentionally exposes email, LinkedIn, and GitHub, but not a telephone link.

## Deployment

Pull requests and pushes to `main` run content tests, verify that committed fallback pages are current, and build the Astro project. GitHub Pages continues publishing the root fallback from `main`, so merging an approved change updates the live site without a repository-settings migration.
