import { client } from '@/lib/sanity/client'
import { CONTENT_LIST_QUERY } from '@/lib/sanity/queries'
import type { Metadata } from 'next'
import ContentList from '../blog/ContentList'

export const metadata: Metadata = {
  title: '数字花园',
}

export const revalidate = 3600

export default async function GardenPage() {
  let notes: any[] = []
  try {
    notes = await client.fetch(CONTENT_LIST_QUERY, { contentType: 'garden' })
  } catch {
    // Sanity not configured yet
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">数字花园</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        碎片知识、小技巧和读书笔记，在互联中生长。
      </p>
      <ContentList items={notes} basePath="garden" />
    </div>
  )
}
