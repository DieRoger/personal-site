import Card from '@/components/shared/Card'
import TagBadge from '@/components/shared/TagBadge'

interface ContentItem {
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  tags?: { label: string; slug: string }[]
  featured?: boolean
}

interface ContentListProps {
  items: ContentItem[]
  basePath: 'blog' | 'garden'
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function ContentList({ items, basePath }: ContentListProps) {
  if (!items?.length) {
    return <p className="text-center text-gray-400 py-12">暂无内容</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <Card
          key={item.slug.current}
          title={item.title}
          description={item.excerpt}
          href={`/${basePath}/${item.slug.current}`}
          className={item.featured ? 'ring-1 ring-indigo-300 dark:ring-indigo-700' : ''}
        >
          <div className="flex items-center justify-between text-xs text-gray-400">
            {item.publishedAt && <time>{formatDate(item.publishedAt)}</time>}
            {item.featured && <span className="text-indigo-500 font-medium">精选</span>}
          </div>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((tag) => (
                <TagBadge key={tag.slug} label={tag.label} />
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
