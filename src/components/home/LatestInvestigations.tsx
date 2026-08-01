import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllPosts } from '@/lib/mdx'
import { FadeIn } from '@/components/ui/fade-in'

export default function LatestInvestigations() {
  // Prioritize Code Archaeology (the flagship series), then newest
  const all = getAllPosts()
  const archaeology = all.filter((p) => p.series === 'Code Archaeology').sort((a, b) => (b.part ?? 0) - (a.part ?? 0))
  const posts = archaeology.length >= 3 ? archaeology.slice(0, 3) : all.slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Latest Investigations</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Forensic reads into why AI systems drift from their design.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    {post.series && <Badge variant="outline" className="text-[10px] px-1.5 py-0">{post.series}</Badge>}
                    {post.part && <span className="text-muted-foreground">Part {post.part}</span>}
                    {post.impact === 'critical' && (
                      <Badge variant="destructive" className="text-[10px] px-1.5 py-0">CRITICAL</Badge>
                    )}
                  </div>
                  <CardTitle className="text-base">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.finding || post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
