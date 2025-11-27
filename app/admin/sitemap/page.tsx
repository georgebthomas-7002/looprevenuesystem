import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { ArrowUp, ArrowDown, Eye, EyeOff, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

async function getPages() {
  try {
    return await prisma.page.findMany({
      orderBy: [{ navOrder: 'asc' }, { title: 'asc' }],
    })
  } catch {
    return []
  }
}

export default async function AdminSitemapPage() {
  const pages = await getPages()

  const mainNavPages = pages.filter((p) => p.showInMainNav)
  const footerNavPages = pages.filter((p) => p.showInFooterNav)

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-text-primary mb-2">
          Sitemap & Navigation
        </h1>
        <p className="font-body text-text-muted">
          Control which pages appear in navigation and their order
        </p>
      </div>

      {/* Main Navigation */}
      <div className="bg-surface rounded-lg border border-border-light p-6 mb-6">
        <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
          Main Navigation
        </h2>
        <p className="font-body text-sm text-text-muted mb-4">
          Pages shown in the header navigation. Edit a page to toggle its visibility.
        </p>

        {mainNavPages.length === 0 ? (
          <p className="text-text-muted italic">
            No pages in main navigation. Edit a page to add it.
          </p>
        ) : (
          <div className="space-y-2">
            {mainNavPages.map((page, index) => (
              <div
                key={page.id}
                className="flex items-center justify-between p-3 bg-bg-alt rounded"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text-muted w-6">
                    {index + 1}
                  </span>
                  <span className="font-body font-medium text-text-primary">
                    {page.title}
                  </span>
                  <code className="text-xs bg-bg px-2 py-0.5 rounded text-text-muted">
                    /{page.slug}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/pages/${page.id}`}
                    className="text-sm text-loop-service hover:underline"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="bg-surface rounded-lg border border-border-light p-6 mb-6">
        <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
          Footer Navigation
        </h2>
        <p className="font-body text-sm text-text-muted mb-4">
          Pages shown in the footer. Edit a page to toggle its visibility.
        </p>

        {footerNavPages.length === 0 ? (
          <p className="text-text-muted italic">
            No pages in footer navigation. Edit a page to add it.
          </p>
        ) : (
          <div className="space-y-2">
            {footerNavPages.map((page) => (
              <div
                key={page.id}
                className="flex items-center justify-between p-3 bg-bg-alt rounded"
              >
                <div className="flex items-center gap-3">
                  <span className="font-body font-medium text-text-primary">
                    {page.title}
                  </span>
                  <code className="text-xs bg-bg px-2 py-0.5 rounded text-text-muted">
                    /{page.slug}
                  </code>
                </div>
                <Link
                  href={`/admin/pages/${page.id}`}
                  className="text-sm text-loop-service hover:underline"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Pages */}
      <div className="bg-surface rounded-lg border border-border-light p-6">
        <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
          All Pages
        </h2>
        <p className="font-body text-sm text-text-muted mb-4">
          Complete list of all pages. Toggle navigation visibility in each page&apos;s settings.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border-light">
              <tr>
                <th className="px-3 py-2 text-left text-sm font-semibold text-text-secondary">
                  Page
                </th>
                <th className="px-3 py-2 text-left text-sm font-semibold text-text-secondary">
                  Slug
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-text-secondary">
                  Status
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-text-secondary">
                  Header
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-text-secondary">
                  Footer
                </th>
                <th className="px-3 py-2 text-center text-sm font-semibold text-text-secondary">
                  Order
                </th>
                <th className="px-3 py-2 text-right text-sm font-semibold text-text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b border-border-light last:border-0">
                  <td className="px-3 py-2 font-medium text-text-primary">
                    {page.title}
                  </td>
                  <td className="px-3 py-2">
                    <code className="text-xs bg-bg-alt px-2 py-0.5 rounded">
                      /{page.slug}
                    </code>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className={cn(
                      'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs',
                      page.status === 'published'
                        ? 'bg-success-light text-success'
                        : 'bg-bg-alt text-text-muted'
                    )}>
                      {page.status === 'published' ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    {page.showInMainNav ? (
                      <span className="text-success">Yes</span>
                    ) : (
                      <span className="text-text-muted">-</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {page.showInFooterNav ? (
                      <span className="text-success">Yes</span>
                    ) : (
                      <span className="text-text-muted">-</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center text-text-muted">
                    {page.navOrder}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <Link
                      href={`/admin/pages/${page.id}`}
                      className="text-sm text-loop-service hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vibe Coding Tip */}
      <div className="mt-6 bg-loop-marketing-tint rounded-lg border border-loop-marketing/20 p-6">
        <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
          Vibe Coding Tip
        </h3>
        <p className="font-body text-sm text-text-secondary">
          You can ask AI to modify navigation by saying things like:
          &quot;Add a new Services page and put it in the main navigation after About&quot;
          or &quot;Remove the FAQ page from the footer navigation&quot;.
        </p>
      </div>
    </div>
  )
}
