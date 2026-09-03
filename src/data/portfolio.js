export const portfolio = {
  name: 'Chris Johnson',
  siteUrl: 'https://www.chrisjohnson.solutions',
  pageTitle: 'Chris Johnson — Technical Solutions Consultant',
  description:
    'Chris Johnson is an AdTech solutions engineer and technical solutions consultant who turns complex platform, cloud, AI, and data problems into systems teams can ship.',
  positioning: 'AdTech Solutions Engineer · Technical Solutions Consultant',
  resumeUrl: '/Chris-Johnson-Resume.pdf',
  hero: {
    kicker: 'Customer-facing architecture · Data systems · AI products',
    title: 'I turn messy platform problems into systems teams can ship.',
    body:
      'Four years across Google and Microsoft, combining customer discovery, hands-on engineering, and cross-functional delivery. I work comfortably from SQL and APIs to architecture decisions and executive-ready recommendations.',
    note: 'Open to technical solutions, solutions consulting, customer engineering, and AI/data platform roles.',
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
      value: '50+',
      label: 'mobile app publishers supported at Google',
    },
    {
      value: '50%',
      label: 'less manual QA and faster report turnaround',
    },
    {
      value: '50+',
      label: 'enterprise customers supported at Microsoft',
    },
    {
      value: '≈10 hrs',
      label: 'of repetitive work removed each week',
    },
  ],
  about: {
    eyebrow: 'About',
    heading: 'Technical depth, translated into customer outcomes.',
    paragraphs: [
      'I am a customer-facing technical builder with experience across advertising platforms, cloud architecture, AI applications, analytics, and workflow automation. My best work usually starts with an ambiguous customer or platform problem and ends with a solution people can understand, operate, and reuse.',
      'At Google, I supported mobile app publishers across Firebase and advertising workflows. Before that, I helped enterprise customers design and deliver cloud and AI solutions at Microsoft. I earned a B.S. in Computer Science from Georgia Tech.',
    ],
  },
  experience: [
    {
      company: 'Google',
      title: 'AdTech Solutions Engineer (Technical Solutions Consultant)',
      dates: '04/2025 — 07/2026',
      location: 'Irvine, California',
      summary:
        'Publisher-facing technical solution engineering across mobile advertising, Firebase, data analysis, APIs, and product troubleshooting.',
      bullets: [
        'Led technical solution engineering for 50+ mobile app publishers, partnering with Product, Engineering, Sales, and Business Development to improve monetization, resolve integration issues, and prioritize product opportunities.',
        'Analyzed publisher and ad-performance data with SQL, then built TypeScript and Next.js dashboards and diagnostic tools that reduced manual QA and report turnaround time by 50%.',
        'Designed API and data workflows that unified publisher tracking, debugging, and opportunity identification across the AdTech stack.',
        'Translated platform constraints, performance signals, publisher needs, and product behavior into clear technical recommendations for customer and internal decisions.',
      ],
    },
    {
      company: 'Microsoft',
      title: 'Cloud Solution Architect',
      dates: '08/2022 — 03/2025',
      location: 'Irvine, California',
      summary:
        'Cloud and AI solution architecture for enterprise customers using Azure, Power Platform, Dynamics 365, and custom applications.',
      bullets: [
        'Architected and delivered AI models, virtual agents, and custom enterprise applications across Azure, Power Platform, and Dynamics 365 for 50+ customers.',
        'Led technical discovery and solution-design discussions, helping customers work through ambiguous modernization decisions, architecture trade-offs, implementation, and adoption.',
        'Built Azure Functions and reusable workflow automation that saved approximately 10 hours of manual work each week and improved delivery consistency.',
      ],
    },
  ],
  projects: [
    {
      slug: 'knowledge-nebula',
      eyebrow: 'Flagship project · Shipped',
      title: 'Knowledge Nebula',
      subtitle: 'Document Graph Explorer',
      description:
        'A private, local-first 2D/3D knowledge map that turns documents and source repositories into an explorable, evidence-backed graph.',
      outcome:
        'Parsing, OCR, embeddings, similarity, clustering, search, and rendering run client-side by default. Users can inspect why documents are connected instead of trusting an unexplained similarity score.',
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
      eyebrow: 'Systems project',
      title: 'Geopolitical Simulator',
      subtitle: 'World Conquest',
      description:
        'A browser-based simulation where players manage a real-world nation across economic, political, and military systems.',
      outcome:
        'The project explores data modeling, interconnected game-state logic, and the trade-offs that emerge when several systems react to the same player decisions.',
      tags: ['JavaScript', 'Simulation', 'State modeling', 'Game systems'],
      image: null,
      imageAlt: '',
      caseStudyUrl: null,
      liveUrl: null,
      repoUrl: 'https://github.com/chrisatom1998/world-conquest',
    },
  ],
  skillGroups: [
    {
      label: 'Customer-facing architecture',
      skills: ['Technical discovery', 'Solution design', 'Stakeholder alignment', 'Technical troubleshooting', 'Executive communication'],
    },
    {
      label: 'Data and analytics',
      skills: ['SQL', 'BigQuery', 'Python', 'Pandas', 'Data pipelines', 'Performance analysis'],
    },
    {
      label: 'Cloud and platforms',
      skills: ['Google Cloud', 'Azure', 'Firebase', 'AdMob', 'Power Platform', 'Dynamics 365', 'APIs'],
    },
    {
      label: 'Application development',
      skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'C#', 'Java', 'Azure Functions', 'Generative AI'],
    },
  ],
};
