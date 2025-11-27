import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts, getCategories } from '@/lib/content/queries'
import { cn } from '@/lib/utils/cn'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, guides, and stories about building effective revenue systems.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const categories = await getCategories()

  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="section-padding border-b border-border-light">
        <div className="container-content">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Blog
          </h1>
          <p className="font-body text-xl text-text-secondary max-w-2xl">
            Insights, guides, and stories about building effective revenue systems.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-content">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-text-muted">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-surface rounded-md border border-border-light overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {post.heroImage && (
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    {post.categories.length > 0 && (
                      <p className="label text-loop-marketing mb-2">
                        {post.categories[0].category.name}
                      </p>
                    )}
                    <h2 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-loop-marketing transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-body text-sm text-text-muted line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    {post.publishedAt && (
                      <p className="font-body text-xs text-text-light mt-4">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
