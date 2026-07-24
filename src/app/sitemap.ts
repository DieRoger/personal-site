import type { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'
import { SITE_CONFIG } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url

  // 静态路由
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/garden`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  try {
    // 动态路由：作品
    const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current }`)
    const projectRoutes = projects.map((p: { slug: string }) => ({
      url: `${baseUrl}/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // 动态路由：内容
    const contents = await client.fetch(`*[_type == "content"]{ "slug": slug.current, contentType }`)
    const contentRoutes = contents.map((c: { slug: string; contentType: string }) => ({
      url: `${baseUrl}/${c.contentType}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...projectRoutes, ...contentRoutes]
  } catch {
    return staticRoutes
  }
}
