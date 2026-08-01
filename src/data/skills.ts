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
  { title: 'AI Reliability', description: 'Investigating why AI systems fail and how to make them trustworthy' },
  { title: 'Agent Evaluation', description: 'Measuring what AI agents actually do, not what they claim' },
  { title: 'Observability', description: 'Building systems where every AI decision is traceable' },
  { title: 'Human-in-the-loop', description: 'Designing the points where humans should control AI decisions' },
  { title: 'Retrieval-Augmented Generation', description: 'Grounding AI output in verifiable sources' },
  { title: 'Evidence & Auditability', description: 'Systems that can prove what happened, after the fact' },
]

export const featuredSkills = [
  {
    title: 'Evidence',
    techStack: ['RAG', 'Grounding', 'Citation'],
    description: 'Can AI explain what it did? Building systems where every claim traces to a source.',
  },
  {
    title: 'Evaluation',
    techStack: ['Model Evaluation', 'AgentBench', 'Benchmarks'],
    description: 'Can we measure AI quality? Designing evaluation workflows for agent reliability.',
  },
  {
    title: 'Observability',
    techStack: ['Traces', 'Events', 'Audit Logs'],
    description: 'Can we trace AI behavior? Investigating why agent systems lose their own history.',
  },
  {
    title: 'Human Control',
    techStack: ['HITL', 'Approval', 'Workflow'],
    description: 'Where should humans decide? Designing human-in-the-loop gates that actually work.',
  },
]
