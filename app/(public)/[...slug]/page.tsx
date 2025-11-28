import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPageBySlug, getAllPages } from '@/lib/content/queries'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLd, generateWebPageSchema, generateFaqSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'
import { DESIGNED_PAGE_SLUGS } from '@/lib/content/designed-pages'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

// Generate static params for all pages EXCEPT designed pages
// Designed pages have their own dedicated page.tsx files and should not use this catch-all
export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages
    .filter((page) => page.slug !== '') // Home page is handled by app/(public)/page.tsx
    .filter((page) => !DESIGNED_PAGE_SLUGS.includes(page.slug as any)) // Exclude designed pages
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

// Get color scheme based on page category
function getPageColorScheme(slug: string) {
  if (slug.startsWith('loops/marketing')) return { accent: 'loop-marketing', bg: 'bg-loop-marketing-tint', border: 'border-loop-marketing' }
  if (slug.startsWith('loops/sales')) return { accent: 'loop-sales', bg: 'bg-loop-sales-tint', border: 'border-loop-sales' }
  if (slug.startsWith('loops/service')) return { accent: 'loop-service', bg: 'bg-loop-service-tint', border: 'border-loop-service' }
  if (slug.startsWith('loops/ops') || slug.startsWith('loops')) return { accent: 'loop-ops', bg: 'bg-loop-ops-tint', border: 'border-loop-ops' }
  if (slug.startsWith('playbooks')) return { accent: 'brand-teal', bg: 'bg-brand-cyan/20', border: 'border-brand-teal' }
  if (slug.startsWith('roles')) return { accent: 'brand-navy', bg: 'bg-brand-cyan/20', border: 'border-brand-navy' }
  if (slug.startsWith('resources')) return { accent: 'brand-orange', bg: 'bg-brand-peach/20', border: 'border-brand-orange' }
  if (slug.startsWith('overview')) return { accent: 'brand-teal', bg: 'bg-brand-cyan/20', border: 'border-brand-teal' }
  return { accent: 'brand-teal', bg: 'bg-brand-cyan/20', border: 'border-brand-teal' }
}

// Get related pages for navigation suggestions
function getRelatedLinks(slug: string) {
  const category = slug.split('/')[0]
  const links: { href: string; label: string }[] = []

  if (category === 'loops') {
    links.push(
      { href: '/loops/marketing', label: 'Loop Marketing' },
      { href: '/loops/sales', label: 'Loop Sales' },
      { href: '/loops/service', label: 'Loop Service' },
      { href: '/loops/ops', label: 'Loop Ops' },
    )
  } else if (category === 'overview') {
    links.push(
      { href: '/overview/loop-revenue-system', label: 'What Is Loop Revenue System' },
      { href: '/overview/stages', label: 'The Four Stages' },
    )
  } else if (category === 'playbooks') {
    links.push(
      { href: '/playbooks/system', label: 'System Playbooks' },
      { href: '/playbooks/hubspot', label: 'HubSpot Implementation' },
    )
  } else if (category === 'roles') {
    links.push(
      { href: '/roles/start-here', label: 'Start Here' },
      { href: '/roles/leadership-revops', label: 'Leadership & RevOps' },
    )
  }

  return links.filter(l => l.href !== `/${slug}`)
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'
  const faqItems = page.faqItems as unknown as { question: string; answer: string }[] | null
  const colors = getPageColorScheme(slug)
  const relatedLinks = getRelatedLinks(slug)
  const category = slug.split('/')[0]

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

      {/* Hero Section */}
      <section className={cn('section-padding-lg bg-gradient-to-b to-bg border-b border-border-light', colors.bg)}>
        <div className="container-content">
          <div className="max-w-3xl">
            {category && (
              <p className={cn('font-body text-sm font-semibold uppercase tracking-wider mb-4', `text-${colors.accent}`)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            )}
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
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

      {/* Coming Soon Content */}
      <section className="section-padding bg-surface border-b border-border-light">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className={cn('border-l-4 pl-6 mb-8', colors.border)}>
              <h2 className="font-display text-2xl font-medium text-text-primary mb-3">
                Content Coming Soon
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We&apos;re working on detailed content for this page. In the meantime, explore the resources below to learn more about the Loop Revenue System.
              </p>
            </div>

            <div className="bg-bg-alt rounded-lg p-6 mb-8">
              <h3 className="font-display text-lg font-semibold text-text-primary mb-4">
                What You&apos;ll Find Here
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                This page will contain practical guidance, examples, and frameworks to help you implement the Loop Revenue System in your organization. Check back soon for the full content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Navigation */}
      {relatedLinks.length > 0 && (
        <section className="section-padding bg-bg-alt border-b border-border-light">
          <div className="container-content">
            <h2 className="font-display text-2xl font-medium text-text-primary mb-6">
              Explore Related Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block p-5 rounded-lg bg-surface border border-border-light hover:shadow-md transition-shadow',
                    'hover:border-brand-teal/50'
                  )}
                >
                  <h3 className="font-display text-lg font-medium text-text-primary mb-1">
                    {link.label}
                  </h3>
                  <span className="font-body text-sm text-brand-teal">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-content text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
            Start With The Fundamentals
          </h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-8">
            New to the Loop Revenue System? Start with the complete overview to understand the model.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/overview/loop-revenue-system"
              className="btn bg-white text-brand-navy border-white hover:bg-white/90"
            >
              What Is Loop Revenue System
            </Link>
            <Link
              href="/roles/start-here"
              className="btn bg-transparent text-white border-white hover:bg-white/10"
            >
              Start Here by Role
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
