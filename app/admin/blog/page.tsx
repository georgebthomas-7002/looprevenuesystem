import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Plus, Edit, Eye, EyeOff, Star } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({
      include: {
        categories: { include: { category: true } },
      },
      orderBy: { updatedAt: 'desc' },
    })
  } catch {
    return []
  }
}

export default async function AdminBlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-text-primary mb-2">
            Blog Posts
          </h1>
          <p className="font-body text-text-muted">
            Manage your blog content
          </p>
        </div>
        <Link href="/admin/blog/new" className="btn btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-surface rounded-lg border border-border-light p-12 text-center">
          <p className="font-body text-lg text-text-muted mb-4">
            No blog posts yet. Create your first post to get started.
          </p>
          <Link href="/admin/blog/new" className="btn btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
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
                  Category
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
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-border-light last:border-0">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium text-text-primary">
                        {post.title}
                      </span>
                      {post.featured && (
                        <Star className="w-4 h-4 text-loop-marketing fill-loop-marketing" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {post.categories[0] && (
                      <span className="text-sm text-text-muted">
                        {post.categories[0].category.name}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold',
                      post.status === 'published'
                        ? 'bg-success-light text-success'
                        : 'bg-bg-alt text-text-muted'
                    )}>
                      {post.status === 'published' ? (
                        <Eye className="w-3 h-3" />
                      ) : (
                        <EyeOff className="w-3 h-3" />
                      )}
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-muted">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : '-'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="p-2 rounded hover:bg-bg-alt transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-text-muted" />
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
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
