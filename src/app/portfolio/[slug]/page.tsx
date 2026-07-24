import { client } from '@/lib/sanity/client'
import { PORTFOLIO_SINGLE_QUERY } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import TagBadge from '@/components/shared/TagBadge'
import SanityImage from '@/components/shared/SanityImage'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await client.fetch(PORTFOLIO_SINGLE_QUERY, { slug })
  if (!project) return { title: '未找到' }
  return { title: project.title }
}

export const revalidate = 3600

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await client.fetch(PORTFOLIO_SINGLE_QUERY, { slug })

  if (!project) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/portfolio" className="text-sm text-indigo-500 hover:text-indigo-600 mb-8 inline-block">
        ← 返回作品集
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {project.techStack && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tag: any) => (
            <TagBadge key={tag.slug} label={tag.label} color={tag.color} />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mb-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
          >
            线上预览
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            源码
          </a>
        )}
      </div>

      {project.thumbnail && (
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <SanityImage
            source={project.thumbnail}
            alt={project.title}
            width={1200}
            height={675}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {project.body && (
        <div className="prose dark:prose-invert max-w-none">
          <PortableText value={project.body} />
        </div>
      )}
    </article>
  )
}
