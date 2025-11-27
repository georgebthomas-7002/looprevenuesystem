import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPages } from '@/lib/content/queries'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLd, generateWebPageSchema, generateFaqSchema } from '@/lib/seo'
import { SectionRenderer } from '@/components/blocks/SectionRenderer'
import type { Metadata } from 'next'
import type { Section } from '@/lib/content/sections'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

// Generate static params for all pages
export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')
  const page = await getPageBySlug(slug)

  if (!page) {
    return { title: 'Page Not Found' }
  }

  return genMeta(page, 'page')
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  const sections = (page.sections as Section[]) || []
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'
  const faqItems = page.faqItems as { question: string; answer: string }[] | null

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: page.title,
            description: page.description,
            url: `${siteUrl}/${page.slug}`,
            datePublished: page.publishedAt,
            dateModified: page.updatedAt,
          }),
          ...(faqItems ? [generateFaqSchema(faqItems)] : []),
        ].filter(Boolean)}
      />
      <SectionRenderer sections={sections} />
    </>
  )
}
