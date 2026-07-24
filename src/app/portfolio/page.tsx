import { client } from '@/lib/sanity/client'
import { PORTFOLIO_QUERY } from '@/lib/sanity/queries'
import type { Metadata } from 'next'
import ProjectList from './ProjectList'

export const metadata: Metadata = {
  title: '作品集',
}

export const revalidate = 3600

interface PageProps {
  searchParams: Promise<{ tag?: string }>
}

export default async function PortfolioPage({ searchParams }: PageProps) {
  const { tag } = await searchParams
  const projects: any[] = await (client.fetch as any)(PORTFOLIO_QUERY, { tag: tag || '' })

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">作品集</h1>
      <ProjectList projects={projects} currentTag={tag} />
    </div>
  )
}
