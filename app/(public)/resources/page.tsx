'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter, BookOpen, Mic, FileText } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface Resource {
  id: string
  title: string
  type: 'page' | 'blog' | 'podcast'
  slug: string
  description: string | null
  publishedAt: string | null
  categories: string[]
  tags: string[]
  url: string
  heroImage?: string | null
}

const typeIcons = {
  page: FileText,
  blog: BookOpen,
  podcast: Mic,
}

const typeLabels = {
  page: 'Page',
  blog: 'Blog Post',
  podcast: 'Podcast',
}

const typeColors = {
  page: 'text-loop-ops bg-loop-ops-tint',
  blog: 'text-loop-marketing bg-loop-marketing-tint',
  podcast: 'text-loop-service bg-loop-service-tint',
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch resources
  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await fetch('/api/resources')
        const data = await res.json()
        setResources(data.resources || [])

        // Extract unique categories
        const allCategories = new Set<string>()
        data.resources?.forEach((r: Resource) => {
          r.categories.forEach((c) => allCategories.add(c))
        })
        setCategories(Array.from(allCategories).sort())
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchResources()
  }, [])

  // Filter resources
  useEffect(() => {
    let filtered = [...resources]

    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter((r) => r.type === typeFilter)
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((r) => r.categories.includes(categoryFilter))
    }

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchLower) ||
          r.description?.toLowerCase().includes(searchLower)
      )
    }

    setFilteredResources(filtered)
  }, [resources, search, typeFilter, categoryFilter])

  return (
    <div className="bg-bg min-h-screen">
      {/* Hero */}
      <section className="section-padding border-b border-border-light">
        <div className="container-content">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Resources
          </h1>
          <p className="font-body text-xl text-text-secondary max-w-2xl">
            Browse all our content in one place. Filter by type, category, or search for something specific.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border-light bg-surface">
        <div className="container-content">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none font-body text-base"
              />
            </div>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none font-body text-base bg-white"
            >
              <option value="all">All Types</option>
              <option value="blog">Blog Posts</option>
              <option value="podcast">Podcast Episodes</option>
            </select>

            {/* Category Filter */}
            {categories.length > 0 && (
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none font-body text-base bg-white"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-content">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-text-muted">Loading resources...</p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-text-muted">
                {resources.length === 0
                  ? 'No resources available yet.'
                  : 'No resources match your filters.'}
              </p>
            </div>
          ) : (
            <>
              <p className="font-body text-sm text-text-muted mb-6">
                Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const Icon = typeIcons[resource.type]
                  return (
                    <Link
                      key={resource.id}
                      href={resource.url}
                      className="group bg-surface rounded-md border border-border-light overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {resource.heroImage && (
                        <div className="aspect-[16/9] relative overflow-hidden">
                          <Image
                            src={resource.heroImage}
                            alt={resource.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn(
                            'inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold',
                            typeColors[resource.type]
                          )}>
                            <Icon className="w-3 h-3" />
                            {typeLabels[resource.type]}
                          </span>
                        </div>
                        <h2 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-loop-marketing transition-colors line-clamp-2">
                          {resource.title}
                        </h2>
                        {resource.description && (
                          <p className="font-body text-sm text-text-muted line-clamp-2">
                            {resource.description}
                          </p>
                        )}
                        {resource.publishedAt && (
                          <p className="font-body text-xs text-text-light mt-3">
                            {new Date(resource.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
