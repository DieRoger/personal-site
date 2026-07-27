import { GitBranch, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {SITE_CONFIG.author}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DieRoger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="h-4 w-4" />
          </a>
          <a
            href="mailto:runjie.luo@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
