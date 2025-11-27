import type { Metadata } from 'next'

interface SEOFields {
  metaTitle?: string | null
  metaDescription?: string | null
  canonicalUrl?: string | null
  ogTitle?: string | null
  ogDescription?: string | null
  ogImage?: string | null
}

interface ContentItem extends SEOFields {
  title: string
  description?: string | null
  slug: string
}

/**
 * Generate metadata for a content item
 */
export function generateMetadata(
  item: ContentItem,
  type: 'page' | 'blog' | 'podcast' = 'page'
): Metadata {
  const title = item.metaTitle || item.title
  const description = item.metaDescription || item.description || ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  // Build canonical URL based on content type
  let path = ''
  switch (type) {
    case 'blog':
      path = `/blog/${item.slug}`
      break
    case 'podcast':
      path = `/podcast/${item.slug}`
      break
    default:
      path = item.slug === 'home' ? '/' : `/${item.slug}`
  }

  const canonicalUrl = item.canonicalUrl || `${siteUrl}${path}`
  const ogImage = item.ogImage || `${siteUrl}/images/og-default.png`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: item.ogTitle || title,
      description: item.ogDescription || description,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: type === 'blog' ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: item.ogTitle || title,
      description: item.ogDescription || description,
      images: [ogImage],
    },
  }
}
