import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/fade-in'
import { skillGroups, interests } from '@/data/skills'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      {/* Hero */}
      <FadeIn>
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About Runjie Luo</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I&apos;m Runjie Luo. I am a Data Science undergraduate passionate about
            Artificial Intelligence and Software Engineering.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy building production-level AI systems using LLMs, Retrieval-Augmented Generation,
            Agentic Workflows and Modern Backend Technologies.
          </p>
        </div>
      </section>
      </FadeIn>

      {/* Timeline */}
      <FadeIn delay={0.1}>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Timeline</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Education</h3>
            <div className="border-l-2 border-border pl-4 space-y-4">
              <div>
                <p className="font-medium">B.S. in Data Science</p>
                <p className="text-sm text-muted-foreground">University — Present</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Projects</h3>
            <div className="border-l-2 border-border pl-4 space-y-4">
              <div>
                <p className="font-medium">AuditFlow</p>
                <p className="text-sm text-muted-foreground">AI-powered Document Intelligence Platform</p>
              </div>
              <div>
                <p className="font-medium">Job Hunter</p>
                <p className="text-sm text-muted-foreground">Automated Job Search & Application Platform</p>
              </div>
              <div>
                <p className="font-medium">Financial Analysis System</p>
                <p className="text-sm text-muted-foreground">Automated Financial Document Analysis</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Future Goals</h3>
            <p className="text-sm text-muted-foreground">
              Pursuing graduate studies in AI/ML to deepen research in LLM applications and multi-agent systems.
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Interests */}
      <FadeIn delay={0.2}>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((interest) => (
            <Card key={interest.title}>
              <CardHeader>
                <CardTitle className="text-sm">{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.3}>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>
    </div>
  )
}
