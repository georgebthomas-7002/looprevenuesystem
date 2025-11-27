import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Plus, Edit, Eye, EyeOff, Star } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

async function getPodcastEpisodes() {
  try {
    return await prisma.podcastEpisode.findMany({
      include: {
        categories: { include: { category: true } },
      },
      orderBy: { episodeNumber: 'desc' },
    })
  } catch {
    return []
  }
}

export default async function AdminPodcastPage() {
  const episodes = await getPodcastEpisodes()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-text-primary mb-2">
            Podcast Episodes
          </h1>
          <p className="font-body text-text-muted">
            Manage your podcast content
          </p>
        </div>
        <Link href="/admin/podcast/new" className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Episode
        </Link>
      </div>

      {episodes.length === 0 ? (
        <div className="bg-surface rounded-lg border border-border-light p-12 text-center">
          <p className="font-body text-lg text-text-muted mb-4">
            No podcast episodes yet. Create your first episode to get started.
          </p>
          <Link href="/admin/podcast/new" className="btn btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Episode
          </Link>
        </div>
      ) : (
        <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
          <table className="w-full">
            <thead className="bg-bg-alt border-b border-border-light">
              <tr>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  #
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Title
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Duration
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Published
                </th>
                <th className="px-4 py-3 text-right font-body text-sm font-semibold text-text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode) => (
                <tr key={episode.id} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3">
                    <span className="font-body font-medium text-loop-service">
                      {episode.episodeNumber || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium text-text-primary">
                        {episode.title}
                      </span>
                      {episode.featured && (
                        <Star className="w-4 h-4 text-loop-marketing fill-loop-marketing" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-muted">
                    {episode.duration || '-'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold',
                      episode.status === 'published'
                        ? 'bg-success-light text-success'
                        : 'bg-bg-alt text-text-muted'
                    )}>
                      {episode.status === 'published' ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      {episode.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-muted">
                    {episode.publishedAt
                      ? new Date(episode.publishedAt).toLocaleDateString()
                      : '-'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/podcast/${episode.id}`}
                        className="p-2 rounded hover:bg-bg-alt transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-text-muted" />
                      </Link>
                      <Link
                        href={`/podcast/${episode.slug}`}
                        target="_blank"
                        className="p-2 rounded hover:bg-bg-alt transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4 text-text-muted" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
