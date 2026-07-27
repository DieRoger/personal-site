import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, GitBranch, ExternalLink, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Not Found' }
  return { title: project.title, description: project.tagline }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
      </Link>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-0.5 text-amber-500 shrink-0 ml-4">
            {Array.from({ length: project.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-xl text-muted-foreground mb-4">{project.tagline}</p>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
            {project.status === 'active' ? 'Active Development' : 'Completed'}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitBranch className="mr-1 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Development Timeline</h2>
        <div className="relative">
          {project.timeline.map((item, i) => (
            <div key={item.version} className="flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                {i < project.timeline.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold">{item.version}</span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Challenges */}
      {project.challenges.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Engineering Challenges</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">Problem: {challenge.problem}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-muted-foreground">{challenge.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      Lesson Learned
                    </p>
                    <p className="text-sm text-muted-foreground">{challenge.lesson}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      {project.links.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.label} variant="outline" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" /> {link.label}
                </a>
              </Button>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
