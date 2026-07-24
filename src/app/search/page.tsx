'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { SEARCH_QUERY } from '@/lib/sanity/queries'
import { createSearchIndex, type SearchItem } from '@/lib/search'
import Card from '@/components/shared/Card'
import TagBadge from '@/components/shared/TagBadge'
import { FiSearch } from 'react-icons/fi'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [items, setItems] = useState<SearchItem[]>([])
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(SEARCH_QUERY)
        const allItems: SearchItem[] = [...(data.projects || []), ...(data.contents || [])]
        setItems(allItems)
      } catch {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const fuse = useMemo(() => createSearchIndex(items), [items])

  const results = useMemo(() => {
    if (!query) return []
    const raw = fuse.search(query)
    let filtered = raw.map((r) => r.item)

    if (typeFilter !== 'all') {
      if (typeFilter === 'project') {
        filtered = filtered.filter((i) => i._type === 'project')
      } else {
        filtered = filtered.filter((i) => i._type === 'content' && i.contentType === typeFilter)
      }
    }

    return filtered
  }, [fuse, query, typeFilter])

  const getHref = (item: SearchItem) => {
    if (item._type === 'project') return `/portfolio/${item.slug}`
    if (item.contentType === 'blog') return `/blog/${item.slug}`
    return `/garden/${item.slug}`
  }

  const getTypeLabel = (item: SearchItem) => {
    if (item._type === 'project') return '作品'
    if (item.contentType === 'blog') return '文章'
    return '笔记'
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">搜索</h1>

      {query && (
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          搜索 &ldquo;{query}&rdquo; 共找到 {results.length} 条结果
        </p>
      )}

      {/* 类型筛选 */}
      {results.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { label: '全部', value: 'all' },
            { label: '作品', value: 'project' },
            { label: '文章', value: 'blog' },
            { label: '笔记', value: 'garden' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTypeFilter(opt.value)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                typeFilter === opt.value
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {/* 结果 */}
      {loading ? (
        <p className="text-center text-gray-400 py-12">加载中...</p>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((item, i) => (
            <Card
              key={`${item._type}-${item.slug}-${i}`}
              title={item.title}
              description={item.description || item.excerpt}
              href={getHref(item)}
            >
              <div className="flex items-center gap-2">
                <TagBadge label={getTypeLabel(item)} />
                {item.tags?.slice(0, 2).map((t, j) => (
                  <TagBadge key={j} label={t.label} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-12">
          <FiSearch className="mx-auto text-gray-300 dark:text-gray-600" size={48} />
          <p className="text-gray-400 mt-4">未找到相关结果</p>
        </div>
      ) : (
        <div className="text-center py-12">
          <FiSearch className="mx-auto text-gray-300 dark:text-gray-600" size={48} />
          <p className="text-gray-400 mt-4">输入关键词开始搜索</p>
        </div>
      )}
    </div>
  )
}
