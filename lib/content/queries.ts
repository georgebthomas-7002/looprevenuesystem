/**
 * CONTENT QUERIES
 * ================
 *
 * Database queries for fetching content.
 * These can be used server-side in page components.
 */

import { prisma } from '@/lib/prisma'
import type { Section } from './sections'

// ============================================
// PAGE QUERIES
// ============================================

export async function getPageBySlug(slug: string) {
  try {
    const page = await prisma.page.findUnique({
      where: { slug, status: 'published' },
    })
    return page
  } catch {
    return null
  }
}

export async function getAllPages() {
  try {
    const pages = await prisma.page.findMany({
      where: { status: 'published' },
      orderBy: { navOrder: 'asc' },
    })
    return pages
  } catch {
    return []
  }
}

export async function getNavigationPages() {
  try {
    const pages = await prisma.page.findMany({
      where: {
        status: 'published',
        showInMainNav: true,
      },
      orderBy: { navOrder: 'asc' },
      select: {
        slug: true,
        title: true,
        parentSlug: true,
        navOrder: true,
      },
    })
    return pages
  } catch {
    return []
  }
}

// ============================================
// BLOG QUERIES
// ============================================

export async function getBlogPosts(options?: {
  limit?: number
  categorySlug?: string
  tagSlug?: string
  featured?: boolean
}) {
  try {
    const { limit, categorySlug, tagSlug, featured } = options || {}

    const posts = await prisma.blogPost.findMany({
      where: {
        status: 'published',
        ...(featured !== undefined && { featured }),
        ...(categorySlug && {
          categories: {
            some: {
              category: { slug: categorySlug },
            },
          },
        }),
        ...(tagSlug && {
          tags: {
            some: {
              tag: { slug: tagSlug },
            },
          },
        }),
      },
      include: {
        categories: {
          include: { category: true },
        },
        tags: {
          include: { tag: true },
        },
      },
      orderBy: { publishedAt: 'desc' },
      ...(limit && { take: limit }),
    })
    return posts
  } catch {
    return []
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug, status: 'published' },
      include: {
        categories: {
          include: { category: true },
        },
        tags: {
          include: { tag: true },
        },
      },
    })
    return post
  } catch {
    return null
  }
}

// ============================================
// PODCAST QUERIES
// ============================================

export async function getPodcastEpisodes(options?: {
  limit?: number
  categorySlug?: string
  tagSlug?: string
  featured?: boolean
}) {
  try {
    const { limit, categorySlug, tagSlug, featured } = options || {}

    const episodes = await prisma.podcastEpisode.findMany({
      where: {
        status: 'published',
        ...(featured !== undefined && { featured }),
        ...(categorySlug && {
          categories: {
            some: {
              category: { slug: categorySlug },
            },
          },
        }),
        ...(tagSlug && {
          tags: {
            some: {
              tag: { slug: tagSlug },
            },
          },
        }),
      },
      include: {
        categories: {
          include: { category: true },
        },
        tags: {
          include: { tag: true },
        },
      },
      orderBy: { publishedAt: 'desc' },
      ...(limit && { take: limit }),
    })
    return episodes
  } catch {
    return []
  }
}

export async function getPodcastEpisodeBySlug(slug: string) {
  try {
    const episode = await prisma.podcastEpisode.findUnique({
      where: { slug, status: 'published' },
      include: {
        categories: {
          include: { category: true },
        },
        tags: {
          include: { tag: true },
        },
      },
    })
    return episode
  } catch {
    return null
  }
}

// ============================================
// CATEGORY & TAG QUERIES
// ============================================

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
    })
    return categories
  } catch {
    return []
  }
}

export async function getTags() {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
    })
    return tags
  } catch {
    return []
  }
}

// ============================================
// UNIFIED RESOURCES QUERY
// ============================================

export interface UnifiedResource {
  id: string
  title: string
  type: 'page' | 'blog' | 'podcast'
  slug: string
  description: string | null
  publishedAt: Date | null
  categories: string[]
  tags: string[]
  url: string
  heroImage?: string | null
}

export async function getUnifiedResources(options?: {
  type?: 'page' | 'blog' | 'podcast'
  categorySlug?: string
  tagSlug?: string
  search?: string
  limit?: number
}): Promise<UnifiedResource[]> {
  const { type, categorySlug, tagSlug, search, limit } = options || {}

  const resources: UnifiedResource[] = []

  try {
    // Fetch blog posts
    if (!type || type === 'blog') {
      const posts = await getBlogPosts({ categorySlug, tagSlug })
      posts.forEach((post) => {
        if (!search || post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(search.toLowerCase())) {
          resources.push({
            id: post.id,
            title: post.title,
            type: 'blog',
            slug: post.slug,
            description: post.excerpt,
            publishedAt: post.publishedAt,
            categories: post.categories.map((c) => c.category.name),
            tags: post.tags.map((t) => t.tag.name),
            url: `/blog/${post.slug}`,
            heroImage: post.heroImage,
          })
        }
      })
    }

    // Fetch podcast episodes
    if (!type || type === 'podcast') {
      const episodes = await getPodcastEpisodes({ categorySlug, tagSlug })
      episodes.forEach((episode) => {
        if (!search || episode.title.toLowerCase().includes(search.toLowerCase()) ||
            episode.description?.toLowerCase().includes(search.toLowerCase())) {
          resources.push({
            id: episode.id,
            title: episode.title,
            type: 'podcast',
            slug: episode.slug,
            description: episode.description,
            publishedAt: episode.publishedAt,
            categories: episode.categories.map((c) => c.category.name),
            tags: episode.tags.map((t) => t.tag.name),
            url: `/podcast/${episode.slug}`,
          })
        }
      })
    }

    // Sort by published date
    resources.sort((a, b) => {
      if (!a.publishedAt) return 1
      if (!b.publishedAt) return -1
      return b.publishedAt.getTime() - a.publishedAt.getTime()
    })

    // Apply limit
    if (limit) {
      return resources.slice(0, limit)
    }

    return resources
  } catch {
    return []
  }
}
