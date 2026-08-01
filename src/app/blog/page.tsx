import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllPosts } from '@/lib/mdx'
import type { BlogPost } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Investigations',
}

function SeriesBadge({ post }: { post: BlogPost }) {
  if (!post.series) return null
  return (
    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-blue-500 text-blue-600 dark:text-blue-400">
      {post.series}{post.part ? ` · Part ${post.part}` : ''}
    </Badge>
  )
}

function ImpactBadge({ post }: { post: BlogPost }) {
  if (!post.impact) return null
  if (post.impact === 'critical') return <Badge variant="destructive" className="text-[10px] px-1.5 py-0">CRITICAL</Badge>
  if (post.impact === 'high') return <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-orange-500 text-orange-600 dark:text-orange-400">HIGH</Badge>
  if (post.impact === 'medium') return <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-yellow-500 text-yellow-600 dark:text-yellow-400">MEDIUM</Badge>
  return null
}

function PostCard({ post }: { post: BlogPost }) {
  const isLink = post.source === 'original' || post.source === 'paper'
  const href = post.source === 'curated' ? post.curatedUrl : `/blog/${post.slug}`
  return (
    <Card className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <SeriesBadge post={post} />
          <ImpactBadge post={post} />
        </div>
        <CardTitle className="text-lg">
          {isLink || !href ? (
            <Link href={href!} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {post.title} <ExternalLink className="inline h-3 w-3 ml-0.5" />
            </a>
          )}
        </CardTitle>
        <CardDescription>
          {post.finding || post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{post.date} · {post.readingTime}</span>
          {isLink && (
            <Button variant="ghost" size="sm" className="px-0" asChild>
              <Link href={href!}>
                Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function BlogPage() {
  const all = getAllPosts()
  const investigations = all.filter((p) => p.series === 'Code Archaeology')
    .sort((a, b) => (b.part ?? 0) - (a.part ?? 0))
  const others = all.filter((p) => p.series !== 'Code Archaeology')

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Engineering Investigations</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        I investigate how AI systems fail, how to measure them, and how to make them
        trustworthy. The Code Archaeology series reads real code to find where design,
        implementation, and runtime diverge.
      </p>

      {/* Featured investigation */}
      {investigations.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Featured Investigation
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <Card className="border-blue-500/30 bg-blue-50/30 dark:bg-blue-950/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-blue-500 text-blue-600 dark:text-blue-400">
                  {investigations[0].series} · Part {investigations[0].part}
                </Badge>
                <ImpactBadge post={investigations[0]} />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                <Link href={`/blog/${investigations[0].slug}`} className="hover:text-primary transition-colors">
                  {investigations[0].title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {investigations[0].description}
              </CardDescription>
              {investigations[0].finding && (
                <div className="mt-4 p-3 rounded-lg bg-background/60 border">
                  <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">Finding</div>
                  <p className="text-sm">{investigations[0].finding}</p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <Button asChild size="sm">
                <Link href={`/blog/${investigations[0].slug}`}>
                  Read Investigation <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Code Archaeology series */}
      {investigations.length > 1 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold tracking-tight mb-1">Code Archaeology</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Forensic investigations into AI system failures — where architecture, implementation, and runtime diverge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investigations.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Other posts */}
      {others.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Engineering Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {all.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No posts yet. Coming soon.</p>
      )}
    </div>
  )
}
