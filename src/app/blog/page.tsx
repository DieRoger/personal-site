import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">
        Thoughts on AI engineering, LLMs, and building production systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  {post.source === 'curated' && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">Curated</Badge>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{post.readingTime}</span>
              </div>
              <CardTitle className="text-lg">
                {post.source === 'curated' && post.curatedUrl ? (
                  <a href={post.curatedUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {post.title} <ExternalLink className="inline h-3 w-3 ml-0.5" />
                  </a>
                ) : (
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                )}
              </CardTitle>
              <CardDescription>
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <div className="mt-auto">
                {post.source === 'original' && (
                  <Button variant="ghost" size="sm" className="px-0" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No posts yet. Coming soon.</p>
      )}
    </div>
  )
}
