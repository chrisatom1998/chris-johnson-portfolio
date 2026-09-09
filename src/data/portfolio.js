export const portfolio = {
  name: 'Chris Johnson',
  siteUrl: 'https://www.chrisjohnson.solutions',
  pageTitle: 'Chris Johnson — Solutions Architect',
  description:
    'Chris Johnson is a Solutions Architect and technical consultant with 4+ years at Google and Microsoft delivering Generative AI and analytics on Google Cloud and Azure.',
  positioning: 'Solutions Architect · Technical Solutions Consultant',
  resumeUrl: '/Chris-Johnson-Resume.pdf',
  hero: {
    kicker: 'Long Beach, CA · Google Cloud · Azure · Generative AI',
    title: 'Solutions architecture for cloud, AI, and analytics systems.',
    body:
      'Technical consultant and solutions architect with 4+ years at Google and Microsoft delivering Generative AI and analytics on Google Cloud and Azure. Most recently drove monetization diagnostics for Firebase publishers—combining SQL analysis, Python/Next.js tooling, and API-level integrations to unblock revenue for strategic accounts.',
    note: 'Trusted by product, engineering, and sales partners to translate business metrics into production-ready architecture.',
  },
  contact: {
    email: 'Chrismjohnson19@gmail.com',
    emailUrl: 'mailto:Chrismjohnson19@gmail.com',
    linkedinLabel: 'LinkedIn',
    linkedinUrl: 'https://linkedin.com/in/christopherjohnson98',
    githubLabel: 'GitHub',
    githubUrl: 'https://github.com/chrisatom1998',
  },
  metrics: [
    {
      value: '4+',
      label: 'years at Google and Microsoft',
    },
    {
      value: '8',
      label: 'strategic AdMob and Firebase accounts',
    },
    {
      value: '50%',
      label: 'faster report turnaround for strategic accounts',
    },
    {
      value: '10',
      label: 'enterprise accounts at Microsoft, including Wawa',
    },
  ],
  about: {
    eyebrow: 'About',
    heading: 'Technical consultant and solutions architect with 4+ years at Google and Microsoft.',
    paragraphs: [
      'I deliver Generative AI and analytics solutions on Google Cloud and Azure. Most recently I drove monetization diagnostics for Firebase publishers—combining SQL analysis, Python/Next.js tooling, and API-level integrations to unblock revenue for strategic accounts.',
      'Trusted by product, engineering, and sales partners to translate business metrics into production-ready architecture. B.S. Computer Science, Georgia Institute of Technology — Atlanta, GA · May 2022.',
    ],
  },
  experience: [
    {
      company: 'Google',
      title: 'Technical Solutions Consultant',
      dates: '04/2025 — 09/2026',
      location: 'Irvine, California',
      summary:
        'Technical lead for publisher monetization across strategic AdMob and Firebase accounts.',
      bullets: [
        'Served as technical lead for publisher monetization across a portfolio of 8 strategic AdMob and Firebase accounts, partnering with Product, Engineering, Sales, and BD to diagnose yield, mediation, open bidding, and latency issues with SQL-backed analysis and ship fixes into production.',
        'Diagnosed root causes of publisher revenue drops and shipped fixes that restored monetization to pre-incident levels or higher across the strategic book, protecting recurring ad revenue for high-value accounts.',
        'Cut report turnaround ~50% for strategic accounts by building Python/SQL internal tools and Next.js/TypeScript dashboards that automated performance insights and revenue diagnostics.',
        'Validated and shipped API-level integrations against AdMob and Firebase APIs—unblocking data-readiness issues and accelerating debugging for live publisher systems.',
      ],
    },
    {
      company: 'Microsoft',
      title: 'Cloud Solution Architect',
      dates: '08/2022 — 03/2025',
      location: 'Irvine, California',
      summary:
        'Customer-facing cloud and AI solution architecture for enterprise accounts on Azure, Power Platform, and Dynamics 365.',
      bullets: [
        'Customer-facing Cloud Solution Architect for a portfolio of 10 enterprise accounts (including Wawa)—designed Generative AI solutions, virtual agents, and custom apps on Azure, Power Platform, and Dynamics 365.',
        'Delivered POC-to-production Azure Functions and workflow automation in the Value-Based Delivery catalog, improving operational efficiency for large multinational clients.',
        'Advised on secure cloud migrations and data-driven architectures with virtual account teams; communicated trade-offs clearly to both technical champions and business stakeholders.',
        'Built credibility as a trusted advisor on AI and cloud patterns—helping customers modernize analytics and decisioning without overselling experimental approaches.',
      ],
    },
  ],
  projects: [
    {
      slug: 'knowledge-nebula',
      eyebrow: 'Flagship project · 2026',
      title: 'Knowledge Nebula',
      subtitle: 'Document Graph Explorer',
      description:
        'A privacy-first, browser-based application that transforms document collections into explorable 3D knowledge graphs, with AI analysis performed entirely on-device.',
      outcome:
        'Client-side architecture uses web workers for non-blocking document processing, embeddings, similarity analysis, and clustering; corpora persist locally in IndexedDB.',
      tags: ['TypeScript', 'React', 'On-device AI', 'Web Workers', 'IndexedDB', 'OpenUSD'],
      image: '/assets/knowledge-nebula-orbit-transparent.webp',
      imageAlt:
        'A three-dimensional document graph orbiting a faceted anchor, representing the Knowledge Nebula project.',
      caseStudyUrl: '/work/knowledge-nebula/',
      liveUrl: 'https://document-graph-explorer.vercel.app',
      repoUrl: 'https://github.com/chrisatom1998/document-graph-explorer',
      caseStudy: {
        intro:
          'Most document tools either keep files private but make relationships hard to inspect, or surface useful connections by uploading the corpus to a hosted service. Knowledge Nebula was designed to keep the core analysis on the user’s device while making every important graph edge explainable.',
        facts: [
          { label: 'Product shape', value: 'Static web app, desktop builds, and sealed air-gapped build' },
          { label: 'Core processing', value: 'Client-side parsing, OCR, embeddings, similarity, clustering, search, and rendering' },
          { label: 'Storage', value: 'Named local workspaces persisted in IndexedDB' },
          { label: 'Interchange', value: 'JSON, PNG, share links, and composed OpenUSD stage export' },
        ],
        sections: [
          {
            eyebrow: '01 · Problem',
            heading: 'Private research without an inspectable structure',
            paragraphs: [
              'Folders preserve documents, but they hide the relationships between them. Traditional search can retrieve a file, yet it rarely explains how an idea, person, reference, or source connects across a larger corpus.',
              'The requirement was not merely a dramatic graph. Selecting a node needed to open the source, and selecting an edge needed to answer a practical question: why are these documents related?',
            ],
          },
          {
            eyebrow: '02 · Architecture',
            heading: 'Local-first architecture',
            paragraphs: [
              'The application runs as a client-side product. Heavy ingestion stages move through workers so parsing, embedding, similarity, and layout work do not freeze the interface. Named workspaces persist in IndexedDB, and the default product loop requires no account or hosted backend.',
              'Optional cloud AI is deliberately separate from the core graph pipeline. OpenRouter requires an explicit user choice and key; Ollama points to a user-controlled local server. A sealed air-gapped build enforces a zero-external-host policy for stricter environments.',
            ],
          },
          {
            eyebrow: '03 · Graph intelligence',
            heading: 'Why the edges are explainable',
            paragraphs: [
              'Connections combine semantic similarity with inspectable evidence such as references, shared entities, extracted topics, and source-code imports. Louvain community detection groups the graph, but the underlying evidence remains visible to the user.',
              'That distinction matters: the visualization is an interface to a queryable knowledge structure, not decoration layered over an opaque embedding space.',
            ],
          },
          {
            eyebrow: '04 · Product decisions',
            heading: 'A simple core loop with advanced paths at the edges',
            paragraphs: [
              'The primary workflow stays intentionally short: add files, explore the graph, then open and search the underlying documents. Snapshots, watched folders, annotations, optional AI, desktop packaging, and OpenUSD export extend that loop without becoming prerequisites.',
              'The OpenUSD path carries document metadata, relationship evidence, cluster structure, and view variants into USD-aware tools. Original document bytes, full text, paths, and embeddings are excluded from the exported stage.',
            ],
          },
          {
            eyebrow: '05 · Outcome',
            heading: 'A shipped system with measurable engineering constraints',
            paragraphs: [
              'The project now supports broad document and source-code ingestion, semantic and lexical search, 2D/3D exploration, local workspaces, change tracking, evidence-backed connections, and multiple distribution targets.',
              'The repository includes automated tests, benchmark methodology, security documentation, bundle limits, air-gap verification, and release workflows—so privacy and performance claims are treated as engineering contracts rather than marketing copy.',
            ],
          },
        ],
      },
    },
    {
      slug: 'geopolitical-simulator',
      eyebrow: 'Systems project · 2026',
      title: 'Geopolitical Simulator',
      subtitle: 'World Conquest',
      description:
        'A Vite-based geopolitical simulator that models real-world nations’ economic, political, and military systems; country data is queried with SQL to drive game-state decisions.',
      outcome:
        'A modular TypeScript rules engine handles policy, trade, and conflict interactions, enabling rapid iteration on simulation scenarios.',
      tags: ['Vite', 'TypeScript', 'SQL', 'Simulation', 'Game systems'],
      image: null,
      imageAlt: '',
      caseStudyUrl: null,
      liveUrl: null,
      repoUrl: 'https://github.com/chrisatom1998/world-conquest',
    },
  ],
  skillGroups: [
    {
      label: 'Languages & Frameworks',
      skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'],
    },
    {
      label: 'Cloud & Data',
      skills: ['Google Cloud', 'Azure', 'Firebase', 'AdMob', 'BigQuery', 'Azure OpenAI', 'Power Platform', 'Dynamics 365'],
    },
    {
      label: 'AI & Architecture',
      skills: ['Generative AI', 'RAG', 'Solution Architecture', 'Cloud Architecture', 'Full-Stack Development', 'DevOps', 'IAM'],
    },
  ],
};
