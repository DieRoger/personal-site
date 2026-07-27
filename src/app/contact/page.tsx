'use client'

import { GitBranch, Mail, Link2, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'runjie.luo@example.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Contact</h1>
      <p className="text-muted-foreground mb-10">
        Get in touch — I&apos;m always open to discussing projects, research, or opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <GitBranch className="h-5 w-5" /> GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="https://github.com/DieRoger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              github.com/DieRoger
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Mail className="h-5 w-5" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{email}</span>
              <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email">
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Link2 className="h-5 w-5" /> LinkedIn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="https://linkedin.com/in/DieRoger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              linkedin.com/in/DieRoger
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
