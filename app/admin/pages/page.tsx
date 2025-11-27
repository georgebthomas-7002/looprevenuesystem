import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

async function getPages() {
  try {
    return await prisma.page.findMany({
      orderBy: { updatedAt: 'desc' },
    })
  } catch {
    return []
  }
}

export default async function AdminPagesPage() {
  const pages = await getPages()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-text-primary mb-2">
            Pages
          </h1>
          <p className="font-body text-text-muted">
            Manage your marketing pages
          </p>
        </div>
        <Link href="/admin/pages/new" className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Page
        </Link>
      </div>

      {pages.length === 0 ? (
        <div className="bg-surface rounded-lg border border-border-light p-12 text-center">
          <p className="font-body text-lg text-text-muted mb-4">
            No pages yet. Create your first page to get started.
          </p>
          <Link href="/admin/pages/new" className="btn btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Page
          </Link>
        </div>
      ) : (
        <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
          <table className="w-full">
            <thead className="bg-bg-alt border-b border-border-light">
              <tr>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Title
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Slug
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Nav
                </th>
                <th className="px-4 py-3 text-left font-body text-sm font-semibold text-text-secondary">
                  Updated
                </th>
                <th className="px-4 py-3 text-right font-body text-sm font-semibold text-text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3">
                    <span className="font-body font-medium text-text-primary">
                      {page.title}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-sm bg-bg-alt px-2 py-1 rounded">
                      /{page.slug}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold',
                      page.status === 'published'
                        ? 'bg-success-light text-success'
                        : 'bg-bg-alt text-text-muted'
                    )}>
                      {page.status === 'published' ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      {page.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {page.showInMainNav && (
                      <span className="text-xs bg-loop-service-tint text-loop-service px-2 py-1 rounded mr-1">
                        Header
                      </span>
                    )}
                    {page.showInFooterNav && (
                      <span className="text-xs bg-loop-ops-tint text-loop-ops px-2 py-1 rounded">
                        Footer
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-muted">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/pages/${page.id}`}
                        className="p-2 rounded hover:bg-bg-alt transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-text-muted" />
                      </Link>
                      <Link
                        href={`/${page.slug}`}
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
