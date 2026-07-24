import { client } from '@/lib/sanity/client'
import { NOTE_WITH_BACKLINKS_QUERY } from '@/lib/sanity/queries'
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
  const { note } = await client.fetch(NOTE_WITH_BACKLINKS_QUERY, { slug })
  if (!note) return { title: '未找到' }
  return { title: note.title }
}

export const revalidate = 3600

export default async function GardenNotePage({ params }: PageProps) {
  const { slug } = await params
  const data = await client.fetch(NOTE_WITH_BACKLINKS_QUERY, { slug })
  const { note, backlinks } = data

  if (!note) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/garden" className="text-sm text-indigo-500 hover:text-indigo-600 mb-8 inline-block">
        ← 返回花园
      </Link>

      <h1 className="text-3xl font-bold mb-4">{note.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
        {note.publishedAt && (
          <time>{new Date(note.publishedAt).toLocaleDateString('zh-CN', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}</time>
        )}
        {note.tags?.length > 0 && (
          <div className="flex items-center gap-1.5">
            {note.tags.map((tag: any) => (
              <TagBadge key={tag.slug} label={tag.label} />
            ))}
          </div>
        )}
      </div>

      {note.body && (
        <div className="prose dark:prose-invert max-w-none">
          <PortableText value={note.body} />
        </div>
      )}

      {/* 出链：本文引用的其他文档 */}
      {note.links && note.links.length > 0 && (
        <div className="mt-12 p-6 rounded-xl bg-gray-50 dark:bg-gray-900">
          <h2 className="text-lg font-semibold mb-4">引用</h2>
          <ul className="space-y-2">
            {note.links.map((link: any, i: number) => (
              link && (
                <li key={i}>
                  <Link
                    href={`/${link._type === 'project' ? 'portfolio' : link._type === 'content' ? 'garden' : ''}/${link.slug?.current}`}
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    {link.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      )}

      {/* 反向链接：谁引用了本文 */}
      {backlinks && backlinks.length > 0 && (
        <div className="mt-6 p-6 rounded-xl bg-indigo-50 dark:bg-indigo-950/50">
          <h2 className="text-lg font-semibold mb-4">被引用</h2>
          <ul className="space-y-2">
            {backlinks.map((bl: any) => (
              <li key={bl.slug}>
                <Link
                  href={`/garden/${bl.slug}`}
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  {bl.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
