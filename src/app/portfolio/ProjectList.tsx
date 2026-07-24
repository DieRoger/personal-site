'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Card from '@/components/shared/Card'
import TagBadge from '@/components/shared/TagBadge'

interface Project {
  title: string
  slug: { current: string }
  description?: string
  thumbnail?: any
  techStack?: { label: string; slug: string; color?: string }[]
}

interface ProjectListProps {
  projects: Project[]
  currentTag?: string
}

function getAllTags(projects: Project[]) {
  const tagMap = new Map<string, { label: string; slug: string }>()
  projects.forEach((p) => {
    p.techStack?.forEach((t) => {
      if (!tagMap.has(t.slug)) tagMap.set(t.slug, { label: t.label, slug: t.slug })
    })
  })
  return Array.from(tagMap.values())
}

export default function ProjectList({ projects, currentTag }: ProjectListProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTag = searchParams.get('tag') || currentTag || ''

  const allTags = getAllTags(projects)

  // 客户端筛选
  const filtered = activeTag
    ? projects.filter((p) => p.techStack?.some((t) => t.slug === activeTag))
    : projects

  const handleTagClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (slug === activeTag) {
      params.delete('tag')
    } else {
      params.set('tag', slug)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      {/* 筛选 */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
              params.delete('tag')
              router.push(`${pathname}?${params.toString()}`)
            }}
            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
              !activeTag
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag.slug}
              onClick={() => handleTagClick(tag.slug)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                activeTag === tag.slug
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      )}

      {/* 作品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <Card
            key={project.slug.current}
            title={project.title}
            description={project.description}
            href={`/portfolio/${project.slug.current}`}
          >
            {project.techStack && (
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tag) => (
                  <TagBadge key={tag.slug} label={tag.label} color={tag.color} />
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">暂无匹配的作品</p>
      )}
    </>
  )
}
