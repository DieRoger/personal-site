'use client'

import { featuredSkills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StaggerContainer, StaggerItem } from '@/components/ui/fade-in'

export default function FeaturedSkills() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Featured Skills</h2>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSkills.map((skill) => (
            <StaggerItem key={skill.title}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
