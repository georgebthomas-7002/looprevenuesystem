import Link from 'next/link'
import { getPodcastEpisodes, getCategories } from '@/lib/content/queries'
import { Play } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcast',
  description: 'Listen to conversations about revenue systems, operations, and business growth.',
}

export default async function PodcastPage() {
  const episodes = await getPodcastEpisodes()

  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="section-padding border-b border-border-light">
        <div className="container-content">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Podcast
          </h1>
          <p className="font-body text-xl text-text-secondary max-w-2xl">
            Listen to conversations about revenue systems, operations, and business growth.
          </p>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-padding">
        <div className="container-content">
          {episodes.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-text-muted">
                No podcast episodes yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {episodes.map((episode) => (
                <Link
                  key={episode.id}
                  href={`/podcast/${episode.slug}`}
                  className="group flex items-start gap-5 p-5 bg-surface rounded-md border border-border-light hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Play Button */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-loop-service-tint flex items-center justify-center group-hover:bg-loop-service transition-colors">
                    <Play className="w-6 h-6 text-loop-service group-hover:text-white transition-colors ml-1" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      {episode.episodeNumber && (
                        <span className="label text-loop-service">
                          Episode {episode.episodeNumber}
                        </span>
                      )}
                      {episode.duration && (
                        <span className="text-xs text-text-muted">
                          {episode.duration}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-loop-service transition-colors">
                      {episode.title}
                    </h2>
                    {episode.description && (
                      <p className="font-body text-sm text-text-muted line-clamp-2">
                        {episode.description}
                      </p>
                    )}
                    {episode.publishedAt && (
                      <p className="font-body text-xs text-text-light mt-3">
                        {new Date(episode.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
