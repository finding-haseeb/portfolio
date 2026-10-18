/**
 * Central portfolio data — generated from Haseeb's resumes (Software Engineer + AI/ML editions),
 * his GitHub profile (github.com/finding-haseeb) and the READMEs of his public repositories.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mohd Haseeb Hanif',
  displayName: 'Mohd Haseeb Hanif',
  shortName: 'Haseeb',
  firstName: 'HASEEB',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A HANIF ORIGINAL',
  role: 'Software Engineer · AI / ML',
  tagline: ['Software Engineer', 'AI / ML', 'Full-Stack'],
  intro:
    'Final-year Computer Science undergrad at Delhi Technological University with three internships — Reliance Jio, Infosys and DRDO. I build full-stack products and AI systems end to end: Java (Spring Boot), TypeScript, React/Next.js and Python, on PostgreSQL, shipped with Docker and CI/CD.',
  location: 'Delhi, India',
  email: 'mohdhaseebhanif@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mohd-haseeb-hanif-447549304/',
    github: 'https://github.com/finding-haseeb',
  },
  githubHandle: 'github.com/finding-haseeb',
  resumePdf: '/assets/Mohd_Haseeb_Hanif_Resume.pdf',
  resumeFile: 'Mohd_Haseeb_Hanif_Software_Engineer_Resume.pdf',
  resumeAiPdf: '/assets/Mohd_Haseeb_Hanif_AI_ML_Resume.pdf',
  resumeAiFile: 'Mohd_Haseeb_Hanif_AI_ML_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Mohd Haseeb Hanif',
  },
  interests: ['Generative AI', 'AI Agents', 'LLMs & RAG', 'System Design', 'Scalable Backends'],
};

export const education = [
  {
    school: 'Delhi Technological University',
    place: 'Delhi',
    degree: 'B.Tech — Computer Science Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.037',
  },
];

export const experience = [
  {
    company: 'Reliance Jio Infocomm Limited',
    role: 'AI/ML Intern',
    place: 'India',
    period: 'Jun 2026 – Jul 2026',
    points: [
      'Built a RAG pipeline in Python for the JioCloud chatbot, storing embeddings in PostgreSQL with pgvector for semantic retrieval, and improved response consistency through prompt iteration.',
      'Engineered a modular Named Entity Recognition (NER) pipeline using LLMs and transformer-based token classification to extract domain-specific entities from unstructured text.',
      'Built reusable Python modules for data preprocessing and evaluation (annotation, tuning, precision / recall / F1).',
    ],
  },
  {
    company: 'Infosys',
    role: 'Machine Learning Intern',
    place: 'Remote',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Developed a PCB Defect Detection System using computer vision and deep learning (CNNs) to identify missing components, short circuits and surface anomalies, reducing manual inspection.',
      'Built an end-to-end Python / OpenCV pipeline — preprocessing, augmentation, training, evaluation and deployment — evaluated on accuracy, precision, recall and F1.',
    ],
  },
  {
    company: 'DRDO – ISSA Lab',
    role: 'Research & Development Intern',
    place: 'Delhi',
    period: 'Dec 2024 – Feb 2025',
    points: [
      'Built a full-stack offline weather forecasting platform with a Java Spring Boot backend serving temperature, humidity, wind and pressure predictions via multi-output regression, with no internet connectivity.',
      'Trained a Random Forest Regressor (temperature MAE 1.28 °C) and integrated it via Joblib for offline inference.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'stream' | 'agent' | 'code' | 'vision' | 'logs' | 'pulse';
};

export const projects: Project[] = [
  {
    id: 'vync',
    title: 'Vync',
    year: '2026',
    genre: 'Full-Stack • Real-Time • AI',
    logline: 'A real-time video streaming & screen-recording platform — record in Electron, stream chunks over WebSockets, watch instantly.',
    stack: ['TypeScript', 'Next.js', 'React', 'Electron.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Prisma', 'Jest', 'GitHub Actions', 'Gemini API'],
    build: [
      'Built the whole platform end to end: a multi-window Electron recorder (screen, mic, webcam at 720p/1080p), a Next.js/React frontend, an Express.js backend and PostgreSQL.',
      'Designed a low-latency chunked upload pipeline streaming 1-second WebM chunks over Socket.io, so a 72 s, 23 MB recording is ready in under 2 ms after stop (vs. ~18 s for a full upload).',
      'Load-tested 10 parallel uploads with byte-exact reassembly and 5 ms p95 chunk-write latency; wrote 17 Jest tests, set up GitHub Actions CI/CD and fixed a path-traversal vulnerability.',
      'Architected a 10-model relational PostgreSQL schema (Prisma ORM, 19 relations) and generated AI titles, summaries and transcripts with the Gemini API via bounded polling.',
    ],
    features: [
      'Multi-window Electron recorder — screen, mic & webcam',
      'Real-time 1-second chunk streaming over WebSockets',
      'AI titles, summaries & transcripts (Gemini)',
      '10-model PostgreSQL schema with Prisma',
      'Jest test suite + GitHub Actions CI/CD',
    ],
    metrics: [
      { value: '<2 ms', label: 'ready after stop (vs ~18 s)' },
      { value: '5 ms', label: 'p95 chunk-write latency' },
      { value: '10', label: 'parallel uploads load-tested' },
      { value: '17', label: 'Jest tests' },
      { value: '19', label: 'Prisma relations' },
    ],
    github: 'https://github.com/finding-haseeb/vync',
    demo: 'https://vync-rosy.vercel.app',
    palette: { from: '#24060b', via: '#7a0f24', to: '#09070a', accent: '#ff3d5a' },
    motif: 'stream',
  },
  {
    id: 'qflow',
    title: 'QFlow',
    year: '2026',
    genre: 'Agentic AI • QA Automation',
    logline: 'An autonomous QA testing agent that explores web apps like a human and reports bugs like a machine.',
    stack: ['TypeScript', 'Node.js', 'Playwright', 'Gemini (Multimodal)', 'Docker', 'Render'],
    build: [
      'Built an agentic QA platform combining multimodal LLM reasoning (Gemini), Playwright browser automation and heuristic scanners to explore web apps, detect UI defects and validate end-to-end workflows.',
      'Implemented 23 modular testing protocols (deep crawling, workflow execution, fuzz testing) that generate bug reports with screenshots and reproduction traces.',
      'Containerised with Docker and deployed to the cloud on Render.',
      'Scanned 5 live websites at 78 s average per scan, surfacing 37 distinct issues with 92% confirmed valid on manual triage.',
    ],
    features: [
      'Heuristic engine — HTTP errors, console errors, broken images, SEO gaps',
      'Cognitive engine — Gemini vision spots layout & rendering bugs',
      'Autonomous navigation & workflow planning',
      'Bug reports with screenshots and repro traces',
      'Dockerised, deployed on Render',
    ],
    metrics: [
      { value: '23', label: 'automated testing protocols' },
      { value: '37', label: 'issues surfaced on 5 live sites' },
      { value: '92%', label: 'confirmed valid on triage' },
      { value: '78 s', label: 'average per scan' },
    ],
    github: 'https://github.com/finding-haseeb/qflow-agent',
    demo: 'https://qflow-qa-agent-xgmk.onrender.com',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'agent',
  },
  {
    id: 'code-iq',
    title: 'Code-IQ.ai',
    year: '2025',
    genre: 'LLM • RAG • Developer Tools',
    logline: 'An AI-powered code-quality platform that analyses whole repositories and answers questions about them in plain English.',
    stack: ['Python', 'FastAPI', 'Gemini API', 'RAG', 'AST', 'NetworkX', 'Matplotlib'],
    build: [
      'Developed an LLM-powered static code analysis and visualisation platform for Python and JavaScript repositories.',
      'Used RAG-based chunking (800-character segments, 100-character overlap) so analysis scales to large codebases.',
      'Enabled natural-language queries over 100+ files with Gemini, detecting 10+ categories of code-quality issues.',
      'Exposed it as a CLI (analyze, report, trend, chat) and a FastAPI REST API, with dependency graphs and trend tracking.',
    ],
    features: [
      'AST-based static analysis + Gemini semantic review',
      'Natural-language chat over your codebase (RAG)',
      'Dependency graphs & quality-trend tracking',
      'Severity-scored reports with actionable fixes',
      'CLI and FastAPI REST endpoints',
    ],
    metrics: [
      { value: '100+', label: 'files queryable in natural language' },
      { value: '10+', label: 'code-quality issue categories' },
      { value: '800 / 100', label: 'char chunks / overlap' },
    ],
    github: 'https://github.com/finding-haseeb/Code-IQ.ai-Advanced',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'code',
  },
  {
    id: 'pcb-defects',
    title: 'PCB Defect Detection',
    year: '2026',
    genre: 'Computer Vision • Deep Learning',
    logline: 'A computer-vision system that inspects printed circuit boards and flags missing components, shorts and surface anomalies.',
    stack: ['Python', 'OpenCV', 'CNNs', 'PyTorch', 'TensorFlow'],
    build: [
      'Built during the Infosys Machine Learning internship to reduce manual PCB inspection.',
      'Developed a deep-learning (CNN) detector on PCB images for missing components, short circuits and surface anomalies.',
      'Owned the end-to-end pipeline in Python and OpenCV — preprocessing, data augmentation, training, evaluation and deployment — measured on accuracy, precision, recall and F1.',
    ],
    features: [
      'Missing-component detection',
      'Short-circuit detection',
      'Surface-anomaly detection',
      'Augmentation + full training / evaluation pipeline',
    ],
    metrics: [
      { value: '3', label: 'defect families detected' },
      { value: 'E2E', label: 'preprocess → deploy pipeline' },
      { value: 'Infosys', label: 'ML internship project' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'vision',
  },
  {
    id: 'logner',
    title: 'LogNER & RAG',
    year: '2026',
    genre: 'NLP • NER • RAG',
    logline: 'Upload raw audit logs, extract security entities with LLMs, then chat with an agent about what happened.',
    stack: ['Python', 'Ollama', 'Groq', 'LLMs', 'Embeddings', 'RAG'],
    build: [
      'Parses JSON, JSON Lines or raw text logs, falling back to regex extraction of timestamps and log levels.',
      'Hybrid LLM + rule-based Named Entity Recognition pulls out IPs, resource IDs, operations, user principals, locations, severity and status — and writes plain-English summaries.',
      'A lightweight pure-Python vector store (cosine similarity) powers a streaming RAG chat agent on local Ollama or Groq models.',
    ],
    features: [
      'Multi-format log parsing',
      'LLM-powered NER with deterministic fallback',
      'Suspicious-pattern detection',
      'Custom cosine-similarity vector store',
      'Streaming conversational RAG agent',
    ],
    metrics: [
      { value: '10+', label: 'security entity types' },
      { value: '3', label: 'log formats parsed' },
      { value: '0', label: 'heavy vector-DB dependencies' },
    ],
    // github.com/finding-haseeb/llm-for-ner is private (404 for visitors) — add `github:` back once it is public.
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'logs',
  },
  {
    id: 'liftmate',
    title: 'LiftMate',
    year: '2026',
    genre: 'AI Agent • Python • Fitness',
    logline: 'A personal Telegram coach that reacts to every Strava / Hevy workout within a minute — then talks it through with you.',
    stack: ['Python', 'Gemini', 'Telegram Bot API', 'Strava API', 'Redis', 'QStash'],
    build: [
      'Webhooks from Strava and Telegram are queued through QStash to a worker that orchestrates an LLM agent, a pure-Python data agent and a Redis memory manager.',
      'All the arithmetic — volume, e1RM, PRs, HR zones, decoupling, ACWR — is computed in plain Python; Gemini only interprets numbers that are already computed.',
      'Sends an unprompted deep-dive within a minute of a finished workout, then holds a 30-minute conversation about it.',
    ],
    features: [
      'Strava + Hevy workout ingestion',
      'Deterministic training metrics (e1RM, ACWR, HR zones)',
      'LLM orchestrator with Redis memory',
      'Queue-based webhook architecture',
    ],
    metrics: [
      { value: '<1 min', label: 'from workout to analysis' },
      { value: '30 min', label: 'follow-up conversation window' },
      { value: '0', label: 'numbers computed by the LLM' },
    ],
    github: 'https://github.com/finding-haseeb/strava-trainer',
    palette: { from: '#200a02', via: '#7a2a07', to: '#0a0605', accent: '#ff7a3d' },
    motif: 'pulse',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'internships',
    title: '3 Internships',
    org: 'Reliance Jio • Infosys • DRDO',
    detail: 'AI/ML at Reliance Jio, Machine Learning at Infosys and R&D at DRDO’s ISSA Lab — before final year.',
    laurel: 'Industry & Defence',
  },
  {
    id: 'dsa',
    title: '500+ Problems',
    org: 'LeetCode • GeeksforGeeks',
    detail: 'Data structures and algorithms across LeetCode and GeeksforGeeks, mostly in C++.',
    laurel: 'Problem Solver',
  },
  {
    id: 'sae',
    title: 'Head of Design',
    org: 'SAE-DTU',
    detail: 'Leads a design team of 8, driving cross-team collaboration — and raised participation by 20%.',
    laurel: 'Leadership',
  },
  {
    id: 'recruits',
    title: '300+ Recruits',
    org: 'SAE-DTU',
    detail: 'Organised orientation for 300+ recruits, managed recruitment of 30+ members and coordinated 10+ events.',
    laurel: 'Community',
  },
  {
    id: 'nsss',
    title: 'Mentor',
    org: 'NSSS Foundation (NGO)',
    detail: 'Mentors underprivileged students at schools, using clear communication to support their learning.',
    laurel: 'Giving Back',
  },
];

/** "More from the studio" — other public repositories, shown as a rail under Top Moments. */
export type ShelfItem = { tag: string; name: string; link: string };

export const shelf: ShelfItem[] = [
  { tag: 'Forecasting', name: 'AtmosCast — Hybrid Climate & AQI Forecasting (ARIMA vs MLP/LSTM)', link: 'https://github.com/finding-haseeb/AtmosCast-Hybrid-Climate-AQI-Forecasting' },
  { tag: 'Backend', name: 'FastAPI Employee CRUD with SQLAlchemy', link: 'https://github.com/finding-haseeb/fastapi-employee-crud' },
  { tag: 'Web', name: 'MOOC Practice — NPTEL MCQs with instant explanations', link: 'https://finding-haseeb.github.io/mooc-practice/' },
  { tag: 'Internship', name: 'Internship workspace — AtmosCast, Zeni & LogNER', link: 'https://github.com/finding-haseeb/Haseeb-Internship' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java, TypeScript & Python lead',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'TypeScript', mono: 'Ts', note: 'Core' },
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'HTML/CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    subtitle: 'Frontend, backend & desktop',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Socket.io', mono: 'So' },
      { name: 'Electron.js', mono: 'El' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    subtitle: 'Models, LLMs & retrieval',
    skills: [
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'LLMs', mono: 'Ll' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'NLP / NER', mono: 'Nl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'OpenCV', mono: 'Oc' },
      { name: 'Gemini API', mono: 'Gm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Schema design • Query optimisation',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'pgvector', mono: 'Pv' },
      { name: 'Prisma ORM', mono: 'Pr' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Testing',
    subtitle: 'Ship it, test it, keep it green',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'CI/CD (GitHub Actions)', mono: 'Ci' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Jest', mono: 'Je' },
      { name: 'Playwright', mono: 'Pw' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Vercel / Render', mono: 'Vc' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core CS',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA (500+)', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Concurrency', mono: 'Cc' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects or internships on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['DRDO – Spring Boot forecasting backend'],
  TypeScript: ['Vync', 'QFlow'],
  Python: ['Reliance Jio – RAG & NER', 'Infosys – PCB Defect Detection', 'Code-IQ.ai', 'LiftMate'],
  'C++': ['500+ DSA problems'],
  SQL: ['Vync – 10-model PostgreSQL schema'],
  'React.js': ['Vync'],
  'Next.js': ['Vync'],
  'Node.js': ['QFlow', 'Vync'],
  'Express.js': ['Vync'],
  'Spring Boot': ['DRDO – offline weather platform'],
  FastAPI: ['Code-IQ.ai', 'Zeni RAG Chatbot'],
  'Socket.io': ['Vync – real-time chunk streaming'],
  'Electron.js': ['Vync – multi-window recorder'],
  'Generative AI': ['Reliance Jio – JioCloud chatbot', 'Vync – AI summaries'],
  LLMs: ['Reliance Jio – NER pipeline', 'LogNER & RAG', 'LiftMate'],
  RAG: ['Reliance Jio – JioCloud chatbot', 'Code-IQ.ai', 'LogNER & RAG'],
  'Agentic AI': ['QFlow', 'LiftMate'],
  'Prompt Engineering': ['Reliance Jio – response consistency'],
  'NLP / NER': ['Reliance Jio – NER pipeline', 'LogNER & RAG'],
  'Computer Vision': ['Infosys – PCB Defect Detection'],
  PyTorch: ['Infosys – PCB Defect Detection'],
  TensorFlow: ['Infosys – PCB Defect Detection'],
  'Scikit-learn': ['DRDO – Random Forest (MAE 1.28 °C)', 'AtmosCast'],
  OpenCV: ['Infosys – PCB Defect Detection'],
  'Gemini API': ['QFlow', 'Vync', 'Code-IQ.ai', 'LiftMate'],
  PostgreSQL: ['Vync', 'Reliance Jio – embeddings store'],
  pgvector: ['Reliance Jio – semantic retrieval'],
  'Prisma ORM': ['Vync – 19 relations'],
  Docker: ['QFlow'],
  'CI/CD (GitHub Actions)': ['Vync'],
  Jest: ['Vync – 17 tests'],
  Playwright: ['QFlow'],
  'Vercel / Render': ['Vync on Vercel', 'QFlow on Render'],
  'DSA (500+)': ['LeetCode & GeeksforGeeks'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Enter: DTU',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science Engineering at Delhi Technological University — and a life outside the classroom.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science Engineering at Delhi Technological University — CGPA 8.037, graduating 2027.',
        tags: ['B.Tech CSE', 'DTU', 'CGPA 8.037'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Problem Solver',
        description: '500+ data structures and algorithms problems across LeetCode and GeeksforGeeks.',
        tags: ['DSA', 'C++', 'LeetCode', 'GFG'],
        runtime: '500+ problems',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Head of Design',
        description: 'SAE-DTU: leads a design team of 8, raised participation 20%, onboarded 300+ recruits and coordinated 10+ events.',
        tags: ['Leadership', 'SAE-DTU'],
        runtime: '2023 – Present',
        palette: crimson,
      },
      {
        code: 'S01 E04',
        title: 'The Mentor',
        description: 'Member of the NSSS Foundation, mentoring underprivileged students at schools.',
        tags: ['NGO', 'Mentoring'],
        runtime: 'Sep 2024 – Present',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Defence R&D',
    period: 'Dec 2024 – Feb 2025',
    synopsis: 'Research & Development Intern at DRDO’s ISSA Lab, Delhi.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Forecaster',
        description: 'Trained a multi-output Random Forest Regressor on weather data — temperature MAE of 1.28 °C.',
        tags: ['Scikit-learn', 'Regression'],
        runtime: 'DRDO – ISSA Lab',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Off the Grid',
        description: 'A full-stack forecasting platform with a Java Spring Boot backend and Joblib inference — no internet connection required.',
        tags: ['Java', 'Spring Boot', 'Joblib'],
        runtime: 'DRDO – ISSA Lab',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Seeing Defects',
    period: 'Dec 2025 – Feb 2026',
    synopsis: 'Machine Learning Intern at Infosys (remote) — teaching a model to inspect circuit boards.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Vision Engineer',
        description: 'A CNN-based PCB Defect Detection System spotting missing components, short circuits and surface anomalies.',
        tags: ['Computer Vision', 'CNNs', 'OpenCV'],
        runtime: 'Infosys',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Pipeline',
        description: 'Preprocessing, augmentation, training, evaluation and deployment — end to end in Python.',
        tags: ['PyTorch', 'TensorFlow', 'F1'],
        runtime: 'Infosys',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Jio Calling',
    period: 'Jun 2026 – Jul 2026',
    synopsis: 'AI/ML Intern at Reliance Jio Infocomm — generative AI for the JioCloud chatbot.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Retriever',
        description: 'A RAG pipeline for the JioCloud chatbot with embeddings in PostgreSQL + pgvector, sharpened through prompt iteration.',
        tags: ['RAG', 'pgvector', 'Prompting'],
        runtime: 'Reliance Jio',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Entity Hunter',
        description: 'A modular NER pipeline using LLMs and transformer token classification on unstructured text.',
        tags: ['NER', 'Transformers', 'LLMs'],
        runtime: 'Reliance Jio',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Evaluator',
        description: 'Reusable preprocessing and evaluation modules — annotation, tuning, precision, recall and F1.',
        tags: ['Python', 'Evaluation'],
        runtime: 'Reliance Jio',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Building in Public',
    period: '2025 – 2026',
    synopsis: 'Originals shipped to production — real-time video, autonomous agents and AI developer tools.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Streamer',
        description: 'Vync — Electron recorder to Next.js player with sub-2 ms ready-after-stop, live on Vercel.',
        tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Autonomous Tester',
        description: 'QFlow — a Gemini + Playwright agent with 23 protocols, 37 issues found at 92% precision, live on Render.',
        tags: ['Agentic AI', 'Playwright', 'Docker'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S05 E03',
        title: 'The Code Reader',
        description: 'Code-IQ.ai — RAG-powered code-quality analysis with natural-language Q&A over 100+ files.',
        tags: ['FastAPI', 'RAG', 'Gemini'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Final year at DTU — and open to full-time Software Engineering and AI/ML roles.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Next Chapter',
        description: 'Going deeper on Generative AI, AI agents, LLMs, RAG and System Design — and building scalable, real-world software.',
        tags: ['GenAI', 'AI Agents', 'System Design'],
        runtime: 'In production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Latest role', title: 'Reliance Jio', detail: 'AI/ML Intern • RAG + NER', palette: crimson },
  { label: 'Flagship Original', title: 'Vync', detail: '<2 ms ready after stop • live on Vercel', palette: amber },
  { label: 'The agent', title: 'QFlow', detail: '23 protocols • 92% precision', palette: jade },
  { label: 'Problems solved', title: '500+', detail: 'LeetCode & GeeksforGeeks', palette: violet },
  { label: 'Defence R&D', title: 'DRDO', detail: 'Forecasting at 1.28 °C MAE', palette: ocean },
  { label: 'Computer vision', title: 'Infosys', detail: 'PCB Defect Detection', palette: crimson },
  { label: 'Leadership', title: 'Head of Design', detail: 'SAE-DTU • team of 8', palette: amber },
  { label: 'Campus', title: 'DTU ’27', detail: 'B.Tech CSE • CGPA 8.037', palette: violet },
  { label: 'Dev tools', title: 'Code-IQ.ai', detail: 'Chat with your codebase', palette: jade },
  { label: 'Current focus', title: 'AI Agents', detail: 'with LLMs, RAG & System Design', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Delhi Technological University', '2023 – 2027'],
    chips: ['CGPA 8.037', 'DTU ’27'],
  },
  {
    kicker: 'Experience',
    title: 'Three Internships',
    lines: ['Reliance Jio — AI/ML Intern · RAG & NER', 'Infosys — ML Intern · PCB defect detection', 'DRDO ISSA Lab — R&D Intern · offline forecasting'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack + AI.',
    lines: ['Java · TypeScript · Python · C++', 'Spring Boot · Next.js · Node.js · FastAPI', 'PyTorch · LLMs · RAG · PostgreSQL · Docker'],
    chips: ['Java', 'TypeScript', 'Python', 'Next.js', 'RAG', 'Docker'],
  },
  {
    kicker: 'Projects',
    title: 'The Originals',
    lines: ['Vync — real-time video, ready <2 ms after stop', 'QFlow — autonomous QA agent, 92% precision', 'Code-IQ.ai — chat with your codebase'],
  },
  {
    kicker: 'Beyond code',
    title: 'Top Moments',
    lines: ['500+ DSA problems solved', 'Head of Design — SAE-DTU', 'Mentor — NSSS Foundation'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Generative AI · AI Agents · System Design', 'Open to SWE and AI/ML roles'],
  },
];

export type ProfileId = 'haseeb' | 'recruiter' | 'developer' | 'ai';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'haseeb',
    name: 'Haseeb',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'journey', 'skills', 'originals', 'moments', 'about', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'ai',
    name: 'AI / ML',
    blurb: 'Models, agents & RAG first',
    color: '#b98bff',
    order: ['journey', 'originals', 'skills', 'picks', 'about', 'moments', 'story'],
  },
];

const episodeCount = seasons.reduce((n, s) => n + s.episodes.length, 0);

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • DTU, CSE ’27', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${episodeCount} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${shelf.length} more repos`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
