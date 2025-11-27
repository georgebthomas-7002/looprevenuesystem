/**
 * JSON-LD SCHEMA GENERATION
 * =========================
 *
 * Generate structured data for SEO and answer engine optimization.
 */

interface FaqItem {
  question: string
  answer: string
}

interface WebPageSchemaInput {
  title: string
  description?: string | null
  url: string
  datePublished?: Date | null
  dateModified?: Date | null
}

interface BlogPostSchemaInput {
  title: string
  description?: string | null
  url: string
  heroImage?: string | null
  author?: string | null
  datePublished?: Date | null
  dateModified?: Date | null
}

interface PodcastEpisodeSchemaInput {
  title: string
  description?: string | null
  url: string
  audioUrl: string
  duration?: string | null
  episodeNumber?: number | null
  datePublished?: Date | null
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(input: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.title,
    description: input.description || undefined,
    url: input.url,
    datePublished: input.datePublished?.toISOString(),
    dateModified: input.dateModified?.toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Loop Revenue System',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo/Loop-Revenue-System-Logo-400.png`,
      },
    },
  }
}

/**
 * Generate BlogPosting schema
 */
export function generateBlogPostSchema(input: BlogPostSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description || undefined,
    url: input.url,
    image: input.heroImage || undefined,
    author: input.author ? {
      '@type': 'Person',
      name: input.author,
    } : undefined,
    datePublished: input.datePublished?.toISOString(),
    dateModified: input.dateModified?.toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Loop Revenue System',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo/Loop-Revenue-System-Logo-400.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
  }
}

/**
 * Generate PodcastEpisode schema
 */
export function generatePodcastEpisodeSchema(input: PodcastEpisodeSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: input.title,
    description: input.description || undefined,
    url: input.url,
    episodeNumber: input.episodeNumber || undefined,
    duration: input.duration || undefined,
    datePublished: input.datePublished?.toISOString(),
    associatedMedia: {
      '@type': 'MediaObject',
      contentUrl: input.audioUrl,
    },
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: 'Loop Revenue System Podcast',
      url: `${siteUrl}/podcast`,
    },
  }
}

/**
 * Generate FAQ schema
 */
export function generateFaqSchema(items: FaqItem[]) {
  if (!items || items.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Generate Organization schema (for homepage)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Loop Revenue System',
    url: siteUrl,
    logo: `${siteUrl}/images/logo/Loop-Revenue-System-Logo-400.png`,
    description: 'The Loop Revenue System helps organizations align Marketing, Sales, Service, and Ops into one continuous learning engine.',
    sameAs: [],
  }
}
