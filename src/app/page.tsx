import { client } from '@/lib/sanity/client'
import { HOME_QUERY } from '@/lib/sanity/queries'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import LatestPosts from '@/components/home/LatestPosts'
import SkillCloud from '@/components/home/SkillCloud'

interface HomeData {
  featuredProjects: any[]
  latestPosts: any[]
  latestNotes: any[]
}

async function getHomeData(): Promise<HomeData> {
  try {
    const data = await client.fetch(HOME_QUERY, {}, { next: { revalidate: 3600 } })
    return data as HomeData
  } catch {
    return { featuredProjects: [], latestPosts: [], latestNotes: [] }
  }
}

export default async function HomePage() {
  const data = await getHomeData()

  return (
    <>
      <HeroSection />
      <FeaturedProjects projects={data.featuredProjects} />
      <LatestPosts posts={data.latestPosts} notes={data.latestNotes} />
      <SkillCloud />
    </>
  )
}
