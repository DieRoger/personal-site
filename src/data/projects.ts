export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  status: 'active' | 'completed' | 'archived'
  featured: boolean
  rating: number
  techStack: string[]
  github?: string
  demo?: string
  image?: string
  overview: string
  architecture?: string
  timeline: { version: string; label: string; date: string }[]
  features: { title: string; description: string }[]
  challenges: { problem: string; solution: string; lesson: string }[]
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    slug: 'auditflow',
    title: 'AuditFlow',
    tagline: 'AI-powered Intelligent Auditing Platform',
    description: 'A production-level document intelligence platform that automates audit workflows using LLMs, RAG, and multi-agent orchestration.',
    status: 'active',
    featured: true,
    rating: 5,
    techStack: ['Python', 'FastAPI', 'LangGraph', 'PGVector', 'Docker', 'DeepSeek', 'PostgreSQL', 'Redis', 'Next.js', 'MinIO'],
    github: 'https://github.com/DieRoger/auditflow',
    overview: 'AuditFlow is an end-to-end intelligent auditing platform that processes, analyzes, and extracts insights from large volumes of documents. It combines OCR, intelligent chunking, vector search, and LLM-powered agents to automate the entire audit workflow.',
    timeline: [
      { version: 'v0.1', label: 'Document Parser', date: '2025-Q1' },
      { version: 'v0.2', label: 'Embedding Pipeline', date: '2025-Q2' },
      { version: 'v0.3', label: 'Knowledge Agent', date: '2025-Q3' },
      { version: 'v0.4', label: 'Workflow Engine', date: '2025-Q4' },
      { version: 'v0.5', label: 'Frontend Dashboard', date: '2026-Q1' },
      { version: 'v1.0', label: 'Production Release', date: '2026-Q2' },
    ],
    features: [
      { title: 'Multi-format Document Parsing', description: 'Support PDF, Word, Excel, and scanned documents with OCR processing.' },
      { title: 'Intelligent Chunking', description: 'Semantic-aware document splitting with configurable strategies.' },
      { title: 'Vector Search & RAG', description: 'Hybrid search combining dense and sparse retrieval for accurate information lookup.' },
      { title: 'Multi-Agent Workflows', description: 'LangGraph-powered agent orchestration for complex audit procedures.' },
      { title: 'Real-time Dashboard', description: 'Interactive frontend for monitoring audit progress and results.' },
      { title: 'Knowledge Graph', description: 'Entity extraction and relationship mapping across documents.' },
    ],
    challenges: [
      { problem: 'PDF parsing accuracy for complex layouts', solution: 'Implemented a hybrid parser combining PyMuPDF for text extraction and LayoutLM for layout understanding.', lesson: 'Hybrid approaches significantly outperform single-parser solutions on diverse document types.' },
      { problem: 'Large document processing latency', solution: 'Designed a streaming pipeline with Redis-based caching and parallel chunk processing.', lesson: 'Streaming architecture with proper backpressure handling is critical for production document pipelines.' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/DieRoger/auditflow' },
      { label: 'Documentation', url: '#' },
    ],
  },
  {
    slug: 'job-hunter',
    title: 'Job Hunter',
    tagline: 'Automated job search and application platform',
    description: 'An intelligent job search assistant that automatically scrapes job listings, analyzes requirements, and generates tailored applications.',
    status: 'completed',
    featured: true,
    rating: 4,
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'LLM', 'Web Scraping'],
    github: 'https://github.com/DieRoger/job-hunter',
    overview: 'Job Hunter automates the job search process by aggregating listings from multiple platforms, analyzing skill requirements, and generating personalized cover letters and applications using LLMs.',
    timeline: [
      { version: 'v0.1', label: 'Scraper Framework', date: '2025-Q1' },
      { version: 'v0.2', label: 'Resume Matcher', date: '2025-Q2' },
      { version: 'v0.3', label: 'Auto Apply', date: '2025-Q3' },
      { version: 'v1.0', label: 'Release', date: '2025-Q4' },
    ],
    features: [
      { title: 'Multi-platform Scraping', description: 'Aggregate jobs from LinkedIn, Indeed, and company career pages.' },
      { title: 'Skill Gap Analysis', description: 'Compare job requirements against your resume and identify gaps.' },
      { title: 'Auto-generated Applications', description: 'LLM-powered personalized cover letters and applications.' },
    ],
    challenges: [
      { problem: 'Anti-scraping measures on job platforms', solution: 'Implemented rotating proxies, browser fingerprint randomization, and rate limiting.', lesson: 'Production scrapers need multi-layered anti-detection strategies.' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/DieRoger/job-hunter' },
    ],
  },
  {
    slug: 'financial-analysis-system',
    title: 'Financial Analysis System',
    tagline: 'Automated financial document analysis and reporting',
    description: 'A system for analyzing financial statements, extracting key metrics, and generating automated reports using NLP and ML techniques.',
    status: 'completed',
    featured: false,
    rating: 4,
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PostgreSQL', 'FastAPI'],
    overview: 'A financial analysis platform that processes annual reports, extracts financial metrics, performs trend analysis, and generates comprehensive reports with visualizations.',
    timeline: [
      { version: 'v0.1', label: 'Data Extraction', date: '2024-Q3' },
      { version: 'v0.2', label: 'Metrics Engine', date: '2024-Q4' },
      { version: 'v1.0', label: 'Report Generation', date: '2025-Q1' },
    ],
    features: [
      { title: 'Automated Data Extraction', description: 'Extract financial metrics from PDF and XBRL documents.' },
      { title: 'Trend Analysis', description: 'Multi-year comparison and trend identification.' },
      { title: 'Report Generation', description: 'Automated PDF report generation with charts and insights.' },
    ],
    challenges: [],
    links: [],
  },
]
