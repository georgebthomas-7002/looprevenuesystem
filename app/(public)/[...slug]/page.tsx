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

// Generate static params for all pages (excluding home page which has its own route)
export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages
    .filter((page) => page.slug !== '') // Home page is handled by app/(public)/page.tsx
    .map((page) => ({
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

  const sections = (page.sections as unknown as Section[]) || []
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'
  const faqItems = page.faqItems as unknown as { question: string; answer: string }[] | null

  // Check if page has any content sections
  const hasContent = sections.length > 0

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

      {/* Page Header */}
      <section className="section-padding bg-bg-alt border-b border-border-light">
        <div className="container-content">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-text-primary mb-4">
              {page.title}
            </h1>
            {page.description && (
              <p className="font-body text-xl text-text-secondary leading-relaxed">
                {page.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
      {hasContent ? (
        <SectionRenderer sections={sections} />
      ) : (
        <section className="section-padding">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center py-12">
              <p className="text-text-muted">
                This page is being updated. Check back soon for content.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
