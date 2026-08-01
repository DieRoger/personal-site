import fs from 'fs'
import path from 'path'
import type { BlogPost, BlogPostWithContent } from './blog'

const blogDir = path.join(process.cwd(), 'src/content/blog')

function parseFrontmatter(content: string): { frontmatter: Record<string, any>, body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { frontmatter: {}, body: content }

  const frontmatter: Record<string, any> = {}
  match[1].split('\n').forEach((line) => {
    const sep = line.indexOf(': ')
    if (sep > 0) {
      const key = line.slice(0, sep).trim()
      let value: any = line.slice(sep + 2).trim()
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''))
      }
      frontmatter[key] = value
    }
  })

  return { frontmatter, body: match[2] }
}

function readingTime(text: string): string {
  const words = text.split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return []
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8')
    const { frontmatter, body } = parseFrontmatter(content)
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      tags: frontmatter.tags || [],
      readingTime: frontmatter.readingTime || readingTime(body),
      source: frontmatter.source || 'original',
      curatedUrl: frontmatter.curatedUrl,
      series: frontmatter.series,
      part: frontmatter.part ? Number(frontmatter.part) : undefined,
      impact: frontmatter.impact,
      finding: frontmatter.finding,
    } satisfies BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(blogDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const content = fs.readFileSync(filePath, 'utf-8')
  const { frontmatter, body } = parseFrontmatter(content)

  return {
    slug,
    title: frontmatter.title || 'Untitled',
    description: frontmatter.description || '',
    date: frontmatter.date || '',
    tags: frontmatter.tags || [],
    readingTime: frontmatter.readingTime || readingTime(body),
    source: frontmatter.source || 'original',
    curatedUrl: frontmatter.curatedUrl,
    series: frontmatter.series,
    part: frontmatter.part ? Number(frontmatter.part) : undefined,
    impact: frontmatter.impact,
    finding: frontmatter.finding,
    content: body,
  }
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count)
}
