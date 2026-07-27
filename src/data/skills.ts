export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'AI & ML',
    skills: ['PyTorch', 'LLM', 'RAG', 'AI Agents', 'LangGraph', 'Vector Search', 'Embedding'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'PostgreSQL', 'PGVector', 'Redis', 'Docker', 'Nginx'],
  },
  {
    category: 'Frontend',
    skills: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Git', 'Linux', 'CI/CD', 'Cloud Native'],
  },
]

export const interests = [
  { title: 'Artificial Intelligence', description: 'Building intelligent systems that learn and adapt' },
  { title: 'LLMs', description: 'Large language model application and fine-tuning' },
  { title: 'AI Agents', description: 'Multi-agent systems and autonomous workflows' },
  { title: 'Document Intelligence', description: 'OCR, chunking, retrieval, and knowledge graphs' },
  { title: 'Cloud Native', description: 'Containerized, scalable microservices architecture' },
  { title: 'Backend Engineering', description: 'Designing robust and performant APIs' },
]

export const featuredSkills = [
  {
    title: 'AI Agents',
    techStack: ['LangGraph', 'LLM', 'Multi-Agent'],
    description: 'Multi-agent workflows powered by LLMs for complex task automation.',
  },
  {
    title: 'Document Intelligence',
    techStack: ['OCR', 'RAG', 'Vector Search'],
    description: 'End-to-end document processing with intelligent retrieval and analysis.',
  },
  {
    title: 'Software Engineering',
    techStack: ['FastAPI', 'Docker', 'Cloud Native'],
    description: 'Building production-grade backend systems with modern architecture.',
  },
]
