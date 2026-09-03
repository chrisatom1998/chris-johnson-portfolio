# Portfolio Astro Modernization Design

## Goal

Replace the generated one-file portfolio with a maintainable Astro source project while keeping the existing warm editorial visual identity and improving recruiter conversion, factual accuracy, accessibility, privacy, and project storytelling.

## Positioning and copy

The site must use the truthful headline **AdTech Solutions Engineer · Technical Solutions Consultant**. It must not present Chris as a current Google employee or claim that “Solutions Architect” was his formal Google title.

The Google experience entry is **AdTech Solutions Engineer (Technical Solutions Consultant)** from **04/2025–07/2026**. The Microsoft entry is **Cloud Solution Architect** from **08/2022–03/2025**.

Quantified claims must come from the current resume and be easy to defend in an interview:

- Supported 50+ mobile app publishers at Google.
- Reduced manual QA and report turnaround time by 50% through SQL analysis and TypeScript/Next.js tools.
- Delivered cloud and AI solutions for 50+ Microsoft customers.
- Built reusable Azure Functions and workflow automation that saved approximately 10 hours per week.

Claims such as “twofold adoption,” “35% decision-making improvement,” “45 solutions launched,” and “half of all workflows” are excluded because the current resume does not provide sufficiently clear measurement context.

## Information architecture

The home page contains:

1. A compact navigation bar.
2. A recruiter-oriented hero with the accurate headline, a concise value proposition, and three actions: view work, download resume, and contact.
3. Four evidence tiles using the defensible metrics above.
4. A brief about section.
5. Google and Microsoft experience entries.
6. Two selected projects: Knowledge Nebula and Geopolitical Simulator.
7. Skills grouped by customer-facing architecture, data, cloud, and application development.
8. A contact section with email and LinkedIn only.

The full Knowledge Nebula engineering story moves to `/work/knowledge-nebula/`. The home-page card contains a short problem/outcome summary and links to the case study, the live Vercel deployment, and GitHub.

The Relationship Maintenance App is removed from the primary project grid so the page emphasizes shipped, inspectable work.

## Architecture

Astro 7 generates a fully static site. Reusable source is organized into layouts, components, pages, and one data module:

- `src/data/portfolio.js` is the single source of truth for experience, projects, skills, metrics, and contact links.
- `src/layouts/BaseLayout.astro` owns metadata, structured data, navigation, footer, and shared assets.
- Focused components render hero, metrics, experience, project cards, skills, and contact.
- `src/pages/index.astro` composes the home page.
- `src/pages/work/knowledge-nebula.astro` contains the full case study.
- `public/styles.css` and `public/site.js` provide progressive enhancement with no framework runtime.

Because the current GitHub Pages setup serves committed root files, `scripts/generate-static-fallback.mjs` generates matching root HTML files from the same data module. This preserves the existing deployment immediately after merge while the included GitHub Pages workflow can deploy Astro’s `dist/` output. The generated root fallback is transitional and clearly documented.

## SEO and discovery

Every page includes:

- A canonical URL.
- Unique title and description.
- Open Graph and Twitter metadata.
- A shared 1200×630 image.
- JSON-LD `Person` data on the home page and `SoftwareApplication` data on the Knowledge Nebula case study.

The project includes `robots.txt`, `sitemap.xml`, `CNAME`, and a lightweight SVG favicon.

## Privacy

The public phone number is removed from all source and generated HTML. The public contact surface contains the existing email address and LinkedIn profile. The downloadable resume remains available as `/Chris-Johnson-Resume.pdf`; the PDF itself still contains the contact details Chris chose for job applications.

## Accessibility and interaction

The site retains a skip link, semantic landmarks, keyboard-visible focus states, labeled navigation, descriptive image text, a functional mobile navigation toggle, and reduced-motion behavior. Decorative effects remain CSS-only or are disabled when reduced motion is requested. Content and actions remain usable when JavaScript is unavailable.

## Testing and deployment

Node’s built-in test runner verifies the content contract before Astro build:

- Correct title and Google end date.
- No current-employment language or unsupported claims.
- No telephone links or public phone number in web source/output.
- Resume, live demo, case-study, GitHub, email, and LinkedIn links exist.
- Dedicated Knowledge Nebula route and SEO files exist.
- Generated fallback HTML stays synchronized with the data module.

GitHub Actions runs the content tests and Astro build on pull requests. On pushes to `main`, the same workflow uploads and deploys `dist/` to GitHub Pages.