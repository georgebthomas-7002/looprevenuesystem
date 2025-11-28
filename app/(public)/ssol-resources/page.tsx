import { Hero } from '@/components/marketing/hero'
import { ArticleCard } from '@/components/content/article-card'
import { PodcastCard } from '@/components/content/podcast-card'
import { ResourceCard } from '@/components/content/resource-card'

// Placeholder data - will be replaced with Sanity data
const articles = [
  {
    title: 'Leading with Integrity in Uncertain Times',
    slug: 'leading-with-integrity',
    excerpt: 'How to maintain your values when everything around you is shifting.',
    category: 'Character',
    accessLevel: 'free' as const,
    publishedAt: '2024-01-15',
  },
  {
    title: 'The Prayer-Driven Decision Framework',
    slug: 'prayer-driven-decisions',
    excerpt: 'A practical approach to involving faith in your biggest leadership decisions.',
    category: 'Decision Making',
    accessLevel: 'members' as const,
    publishedAt: '2024-01-10',
  },
]

const podcasts = [
  {
    title: 'Why Faith Matters in Leadership',
    slug: 'why-faith-matters',
    episodeNumber: 1,
    description: 'An introduction to spiritual leadership and why it matters more than ever.',
    duration: '32:15',
    accessLevel: 'free' as const,
  },
]

const downloads = [
  {
    title: 'Spiritual Leadership Self-Assessment',
    slug: 'self-assessment',
    description: 'Evaluate your current leadership through a spiritual lens.',
    fileType: 'PDF',
    accessLevel: 'free' as const,
  },
]

export default function SSOLResourcesPage() {
  return (
    <>
      <Hero
        headline="Resources"
        subheadline="Articles, podcasts, and tools to help you lead with purpose and faith."
      />
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-primary mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>

          <h2 className="text-primary mb-8">Podcast Episodes</h2>
          <div className="space-y-4 mb-16">
            {podcasts.map((podcast) => (
              <PodcastCard key={podcast.slug} {...podcast} />
            ))}
          </div>

          <h2 className="text-primary mb-8">Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download) => (
              <ResourceCard key={download.slug} {...download} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
