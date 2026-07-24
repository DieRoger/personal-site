import { client } from '@/lib/sanity/client'
import { CONTENT_LIST_QUERY } from '@/lib/sanity/queries'
import type { Metadata } from 'next'
import ContentList from './ContentList'

export const metadata: Metadata = {
  title: '博客',
}

export const revalidate = 3600

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await client.fetch(CONTENT_LIST_QUERY, { contentType: 'blog' })
  } catch {
    // Sanity not configured yet — show empty state during build
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">博客</h1>
      <ContentList items={posts} basePath="blog" />
    </div>
  )
}
