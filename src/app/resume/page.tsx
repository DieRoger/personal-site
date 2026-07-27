import type { Metadata } from 'next'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Resume',
}

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-1 h-4 w-4" /> Download PDF
          </a>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Runjie Luo</CardTitle>
          <p className="text-sm text-muted-foreground">Data Science Undergraduate · AI Engineer</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Education */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Education</h3>
            <div>
              <p className="font-medium">B.S. in Data Science</p>
              <p className="text-sm text-muted-foreground">University — Present</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Skills</h3>
            <div className="space-y-2">
              {[
                { category: 'Programming', items: ['Python', 'Java', 'TypeScript', 'SQL'] },
                { category: 'AI/ML', items: ['PyTorch', 'LLM', 'RAG', 'AI Agents', 'LangGraph', 'Vector Search'] },
                { category: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Nginx'] },
                { category: 'DevOps', items: ['Docker', 'Git', 'Linux', 'CI/CD'] },
              ].map((group) => (
                <div key={group.category} className="flex gap-2">
                  <span className="text-xs font-medium text-muted-foreground w-20 shrink-0 pt-0.5">
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

          {/* Projects */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Projects</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">AuditFlow</p>
                <p className="text-xs text-muted-foreground">AI-powered Document Intelligence Platform</p>
              </div>
              <div>
                <p className="font-medium text-sm">Job Hunter</p>
                <p className="text-xs text-muted-foreground">Automated Job Search & Application Platform</p>
              </div>
              <div>
                <p className="font-medium text-sm">Financial Analysis System</p>
                <p className="text-xs text-muted-foreground">Automated Financial Document Analysis</p>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Awards & Achievements</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Top 50 Master Application Portfolio Target</li>
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
