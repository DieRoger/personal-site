'use client'

import { motion } from 'framer-motion'
import { featuredSkills } from '@/data/skills'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FeaturedSkills() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Featured Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSkills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
