import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/mdx'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
          {post.source === 'curated' && (
            <>
              <span>·</span>
              <Badge variant="outline" className="text-xs">Curated</Badge>
            </>
          )}
          {post.source === 'paper' && (
            <>
              <span>·</span>
              <Badge variant="outline" className="text-xs border-blue-500 text-blue-600 dark:text-blue-400">Paper Reading</Badge>
            </>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>

        {post.description && (
          <p className="text-lg text-muted-foreground">{post.description}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        {post.source === 'curated' && post.curatedUrl && (
          <div className="mt-4">
            <a
              href={post.curatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              <ExternalLink className="mr-1 h-4 w-4" /> View original article
            </a>
          </div>
        )}
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
