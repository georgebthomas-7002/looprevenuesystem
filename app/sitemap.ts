import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  try {
    // Dynamic pages
    const pages = await prisma.page.findMany({
      where: { status: 'published' },
      select: { slug: true, updatedAt: true },
    })

    const pageRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    // Blog posts
    const posts = await prisma.blogPost.findMany({
      where: { status: 'published' },
      select: { slug: true, updatedAt: true },
    })

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Podcast episodes
    const episodes = await prisma.podcastEpisode.findMany({
      where: { status: 'published' },
      select: { slug: true, updatedAt: true },
    })

    const podcastRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
      url: `${siteUrl}/podcast/${episode.slug}`,
      lastModified: episode.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...pageRoutes, ...blogRoutes, ...podcastRoutes]
  } catch {
    // If database isn't available, return static routes only
    return staticRoutes
  }
}
