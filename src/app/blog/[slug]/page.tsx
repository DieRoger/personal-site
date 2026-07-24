import { client } from '@/lib/sanity/client'
import { CONTENT_SINGLE_QUERY } from '@/lib/sanity/queries'
import { PortableText } from '@portabletext/react'
import TagBadge from '@/components/shared/TagBadge'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(CONTENT_SINGLE_QUERY, { slug })
  if (!post) return { title: '未找到' }
  return { title: post.title }
}

export const revalidate = 3600

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch(CONTENT_SINGLE_QUERY, { slug })

  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-sm text-indigo-500 hover:text-indigo-600 mb-8 inline-block">
        ← 返回博客
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
        {post.publishedAt && (
          <time>{new Date(post.publishedAt).toLocaleDateString('zh-CN', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}</time>
        )}
        {post.tags?.length > 0 && (
          <div className="flex items-center gap-1.5">
            {post.tags.map((tag: any) => (
              <TagBadge key={tag.slug} label={tag.label} />
            ))}
          </div>
        )}
      </div>

      {post.body && (
        <div className="prose dark:prose-invert max-w-none">
          <PortableText value={post.body} />
        </div>
      )}
    </article>
  )
}
