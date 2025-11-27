import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPodcastEpisodeBySlug, getPodcastEpisodes } from '@/lib/content/queries'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLd, generatePodcastEpisodeSchema, generateFaqSchema } from '@/lib/seo'
import { SectionRenderer } from '@/components/blocks/SectionRenderer'
import { Play, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import type { Section } from '@/lib/content/sections'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const episodes = await getPodcastEpisodes()
  return episodes.map((episode) => ({ slug: episode.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const episode = await getPodcastEpisodeBySlug(resolvedParams.slug)
  if (!episode) return { title: 'Episode Not Found' }
  return genMeta({ ...episode, description: episode.description }, 'podcast')
}

export default async function PodcastEpisodePage({ params }: PageProps) {
  const resolvedParams = await params
  const episode = await getPodcastEpisodeBySlug(resolvedParams.slug)

  if (!episode) {
    notFound()
  }

  const sections = (episode.sections as unknown as Section[]) || []
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'
  const faqItems = episode.faqItems as unknown as { question: string; answer: string }[] | null

  return (
    <article className="bg-bg">
      <JsonLd
        data={[
          generatePodcastEpisodeSchema({
            title: episode.title,
            description: episode.description,
            url: `${siteUrl}/podcast/${episode.slug}`,
            audioUrl: episode.audioUrl,
            duration: episode.duration,
            episodeNumber: episode.episodeNumber,
            datePublished: episode.publishedAt,
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
            <Link href="/podcast" className="breadcrumb-link">Podcast</Link>
            <span className="text-border-dark">/</span>
            <span className="text-text-secondary">Episode {episode.episodeNumber || ''}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            {episode.episodeNumber && (
              <span className="label text-loop-service">
                Episode {episode.episodeNumber}
              </span>
            )}
            {episode.duration && (
              <span className="text-sm text-text-muted">
                {episode.duration}
              </span>
            )}
            {episode.publishedAt && (
              <span className="text-sm text-text-muted">
                {new Date(episode.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-medium text-text-primary mb-4">
            {episode.title}
          </h1>

          {episode.description && (
            <p className="font-display text-xl italic text-text-secondary mb-8">
              {episode.description}
            </p>
          )}

          {/* Audio Player */}
          <div className="bg-surface rounded-md border border-border-light p-5">
            <audio
              controls
              className="w-full"
              src={episode.audioUrl}
            >
              Your browser does not support the audio element.
            </audio>

            {episode.videoUrl && (
              <a
                href={episode.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-loop-service hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Watch video version
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Show Notes */}
      <div className="section-padding">
        <div className="container-narrow">
          <h2 className="font-display text-2xl font-semibold text-text-primary mb-6">
            Show Notes
          </h2>
          <div
            className="prose prose-lg max-w-none font-body text-text-secondary leading-loose"
            dangerouslySetInnerHTML={{ __html: episode.showNotes }}
          />
        </div>
      </div>

      {/* Additional Sections */}
      {sections.length > 0 && <SectionRenderer sections={sections} />}

      {/* Tags */}
      {episode.tags.length > 0 && (
        <div className="container-narrow pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-text-muted">Tags:</span>
            {episode.tags.map((tag) => (
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
