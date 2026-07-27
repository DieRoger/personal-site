import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/mdx'
import ReadingProgress from '@/components/ui/reading-progress'
import TableOfContents from '@/components/ui/table-of-contents'

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
    <>
      <ReadingProgress />
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
        </Link>

        <div className="flex gap-8">
          {/* Main content */}
          <article className="flex-1 max-w-3xl min-w-0">
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
                <div className="mt-4 flex items-center gap-2 p-3 rounded-lg border bg-secondary/30">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Curated from:</span>
                  <a
                    href={post.curatedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {post.curatedUrl.replace(/^https?:\/\//, '').split('/')[0]}
                  </a>
                </div>
              )}
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </article>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-56 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  )
}
