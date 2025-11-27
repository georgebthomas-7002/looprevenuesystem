import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content/queries'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLd, generateBlogPostSchema, generateFaqSchema } from '@/lib/seo'
import { SectionRenderer } from '@/components/blocks/SectionRenderer'
import type { Metadata } from 'next'
import type { Section } from '@/lib/content/sections'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getBlogPostBySlug(resolvedParams.slug)
  if (!post) return { title: 'Post Not Found' }
  return genMeta({ ...post, description: post.excerpt }, 'blog')
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const sections = (post.sections as unknown as Section[]) || []
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'
  const faqItems = post.faqItems as unknown as { question: string; answer: string }[] | null

  return (
    <article className="bg-bg">
      <JsonLd
        data={[
          generateBlogPostSchema({
            title: post.title,
            description: post.excerpt,
            url: `${siteUrl}/blog/${post.slug}`,
            heroImage: post.heroImage,
            author: post.author,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          }),
          ...(faqItems ? [generateFaqSchema(faqItems)] : []),
        ].filter(Boolean)}
      />

      {/* Hero */}
      <header className="section-padding border-b border-border-light">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <nav className="breadcrumb mb-6">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="text-border-dark">/</span>
            <Link href="/blog" className="breadcrumb-link">Blog</Link>
            <span className="text-border-dark">/</span>
            <span className="text-text-secondary">{post.title}</span>
          </nav>

          {/* Categories */}
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span key={cat.category.id} className="label text-loop-marketing">
                  {cat.category.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl md:text-4xl font-medium text-text-primary mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-display text-xl italic text-text-secondary mb-6">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            {post.author && <span>By {post.author}</span>}
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {post.heroImage && (
        <div className="container-content py-8">
          <div className="aspect-[16/9] relative rounded-md overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Body Content */}
      <div className="section-padding">
        <div className="container-narrow">
          <div
            className="prose prose-lg max-w-none font-body text-text-secondary leading-loose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </div>

      {/* Additional Sections */}
      {sections.length > 0 && <SectionRenderer sections={sections} />}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="container-narrow pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-muted">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag.tag.id}
                className="px-3 py-1 text-sm bg-bg-alt rounded-full text-text-secondary"
              >
                {tag.tag.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
