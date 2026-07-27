export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: string
  source?: 'original' | 'curated' | 'paper'
  curatedUrl?: string
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}
