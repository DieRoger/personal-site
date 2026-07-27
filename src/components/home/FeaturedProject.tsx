'use client'

import Link from 'next/link'
import { ArrowRight, GitBranch, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { projects } from '@/data/projects'

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured)
  if (!featured) return null

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Featured Project</h2>
        <FadeIn>
          <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{featured.title}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {featured.tagline}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.techStack.slice(0, 8).map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button asChild size="sm">
                  <Link href={`/projects/${featured.slug}`}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                {featured.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={featured.github} target="_blank" rel="noopener noreferrer">
                      <GitBranch className="mr-1 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
