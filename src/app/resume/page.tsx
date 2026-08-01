import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Resume',
}

const SKILL_GROUPS = [
  { category: 'Programming', items: ['Python', 'Java', 'TypeScript', 'SQL'] },
  {
    category: 'AI / ML',
    items: [
      'PyTorch',
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents',
      'LangGraph',
      'Vector Search',
      'Model Evaluation',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Linux', 'Git', 'CI/CD'],
  },
]

const PROJECTS = [
  {
    name: 'AuditFlow',
    tagline: 'AI-powered Audit Intelligence & Document Analysis Platform',
    description:
      'An AI system exploring reliable agent workflows through document intelligence, retrieval-augmented generation, evidence grounding, and workflow observability.',
    areas: [
      'Multi-agent workflow design',
      'RAG pipeline development',
      'Evidence-based AI decision support',
      'Agent evaluation and reliability analysis',
    ],
  },
  {
    name: 'LuoBlog Studio',
    tagline: 'AI-native Personal Knowledge & Writing Workspace',
    description:
      'A local-first AI writing system integrating knowledge management, research workflows, and structured content generation.',
    areas: [
      'AI-assisted writing workflow',
      'Knowledge organization',
      'Prompt-driven automation',
      'Personal productivity systems',
    ],
  },
]

const EXPERIENCE = [
  {
    title: 'Software Engineering Intern',
    company: 'Company Name',
    points: [
      'Developed and optimized software components in a production environment.',
      'Collaborated with engineering teams on real-world software development tasks.',
    ],
  },
  {
    title: 'Technology Intern',
    company: 'Company Name',
    points: [
      'Supported engineering projects and applied data science techniques to practical scenarios.',
    ],
  },
]

const AWARDS = [
  'Selected participant in academic summer program',
  'Developed independent AI systems projects focusing on agent reliability and applied artificial intelligence',
]

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Runjie Luo</h1>
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-1 h-4 w-4" /> Download PDF
          </a>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground -mt-4 mb-8">
        Data Science Undergraduate · AI Systems Engineer
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-base uppercase tracking-wider text-muted-foreground">Resume</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Education */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Education</h3>
            <div>
              <p className="font-medium">B.S. in Data Science</p>
              <p className="text-sm text-muted-foreground">University — Present</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technical Skills</h3>
            <div className="space-y-2.5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="flex gap-3">
                  <span className="text-xs font-medium text-muted-foreground w-24 shrink-0 pt-0.5">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Selected Projects</h3>
            <div className="space-y-5">
              {PROJECTS.map((project) => (
                <div key={project.name}>
                  <p className="font-semibold">{project.name}</p>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{project.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                    {project.areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Experience</h3>
            <div className="space-y-4">
              {EXPERIENCE.map((job) => (
                <div key={job.title}>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-sm text-muted-foreground mb-1">{job.company}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Awards & Achievements</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {AWARDS.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground text-center">
        This resume is also available for <Link href="/resume.pdf" className="text-primary hover:underline" download>direct download</Link>.
      </p>
    </div>
  )
}
