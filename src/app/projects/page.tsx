import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, GitBranch, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <FadeIn>
        <p className="text-muted-foreground mb-10">
        Systems I build and investigate — where AI meets reliability, evaluation, and observability.
      </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
          <Card className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {project.tagline}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-0.5 text-amber-500 shrink-0 ml-2">
                  {Array.from({ length: project.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <Button size="sm" asChild>
                  <Link href={`/projects/${project.slug}`}>
                    Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="mr-1 h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
