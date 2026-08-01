export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  source?: 'original' | 'curated' | 'paper'
  curatedUrl?: string
  /** Series name, e.g. "Code Archaeology" — groups related posts */
  series?: string
  /** Series part number (1-based) */
  part?: number
  /** Impact severity for investigations: critical | high | medium | low */
  impact?: string
  /** Short finding statement shown on cards (Evidence-first design) */
  finding?: string
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}
