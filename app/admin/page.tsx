import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { FileText, BookOpen, Mic, Plus } from 'lucide-react'

async function getStats() {
  try {
    const [pageCount, blogCount, podcastCount] = await Promise.all([
      prisma.page.count(),
      prisma.blogPost.count(),
      prisma.podcastEpisode.count(),
    ])
    return { pageCount, blogCount, podcastCount }
  } catch {
    return { pageCount: 0, blogCount: 0, podcastCount: 0 }
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-text-primary mb-2">
          Dashboard
        </h1>
        <p className="font-body text-text-muted">
          Welcome to the Loop Revenue System CMS
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface rounded-lg border border-border-light p-6">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-loop-ops" />
            <span className="font-display text-3xl font-semibold text-text-primary">
              {stats.pageCount}
            </span>
          </div>
          <h3 className="font-body font-semibold text-text-primary">Pages</h3>
          <p className="text-sm text-text-muted">Total marketing pages</p>
        </div>

        <div className="bg-surface rounded-lg border border-border-light p-6">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-8 h-8 text-loop-marketing" />
            <span className="font-display text-3xl font-semibold text-text-primary">
              {stats.blogCount}
            </span>
          </div>
          <h3 className="font-body font-semibold text-text-primary">Blog Posts</h3>
          <p className="text-sm text-text-muted">Total blog articles</p>
        </div>

        <div className="bg-surface rounded-lg border border-border-light p-6">
          <div className="flex items-center justify-between mb-4">
            <Mic className="w-8 h-8 text-loop-service" />
            <span className="font-display text-3xl font-semibold text-text-primary">
              {stats.podcastCount}
            </span>
          </div>
          <h3 className="font-body font-semibold text-text-primary">Podcast Episodes</h3>
          <p className="text-sm text-text-muted">Total episodes</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-surface rounded-lg border border-border-light p-6">
        <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/pages/new"
            className="inline-flex items-center gap-2 btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
            New Page
          </Link>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
            New Blog Post
          </Link>
          <Link
            href="/admin/podcast/new"
            className="inline-flex items-center gap-2 btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
            New Episode
          </Link>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mt-8 bg-loop-service-tint rounded-lg border border-loop-service/20 p-6">
        <h2 className="font-display text-xl font-semibold text-text-primary mb-2">
          Getting Started
        </h2>
        <p className="font-body text-text-secondary mb-4">
          This CMS supports &quot;vibe coding&quot; - you can ask AI to create pages and content
          by describing what you want. The system uses a block-based architecture
          that makes it easy to build and modify pages.
        </p>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li>
            <strong>Pages:</strong> Marketing pages with flexible block-based layouts
          </li>
          <li>
            <strong>Blog:</strong> Articles with rich content and SEO optimization
          </li>
          <li>
            <strong>Podcast:</strong> Episodes with audio players and show notes
          </li>
          <li>
            <strong>Sitemap:</strong> Control navigation and page hierarchy
          </li>
        </ul>
      </div>
    </div>
  )
}
