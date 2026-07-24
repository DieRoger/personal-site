import Card from '@/components/shared/Card'
import TagBadge from '@/components/shared/TagBadge'
import Link from 'next/link'

interface ContentItem {
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  tags?: { label: string; slug: string }[]
}

interface LatestPostsProps {
  posts: ContentItem[]
  notes: ContentItem[]
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function ContentCard({ item, href }: { item: ContentItem; href: string }) {
  return (
    <Card title={item.title} description={item.excerpt} href={href}>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        {item.publishedAt && <time>{formatDate(item.publishedAt)}</time>}
      </div>
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map((tag) => (
            <TagBadge key={tag.slug} label={tag.label} />
          ))}
        </div>
      )}
    </Card>
  )
}

export default function LatestPosts({ posts, notes }: LatestPostsProps) {
  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 最新博客 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">最新文章</h2>
              <Link href="/blog" className="text-sm text-indigo-500 hover:text-indigo-600">
                查看全部 →
              </Link>
            </div>
            <div className="space-y-4">
              {posts?.length ? (
                posts.map((post) => (
                  <ContentCard key={post.slug.current} item={post} href={`/blog/${post.slug.current}`} />
                ))
              ) : (
                <p className="text-gray-400 text-sm">暂无文章</p>
              )}
            </div>
          </div>

          {/* 最新笔记 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">数字花园</h2>
              <Link href="/garden" className="text-sm text-indigo-500 hover:text-indigo-600">
                查看全部 →
              </Link>
            </div>
            <div className="space-y-4">
              {notes?.length ? (
                notes.map((note) => (
                  <ContentCard key={note.slug.current} item={note} href={`/garden/${note.slug.current}`} />
                ))
              ) : (
                <p className="text-gray-400 text-sm">暂无笔记</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
