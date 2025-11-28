'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { RichTextEditor } from './RichTextEditor'
import {
  Save,
  Eye,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Globe,
  Search,
  FileJson,
  Settings,
  Layout,
  RefreshCw,
  Code,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { getPageSlotConfig, groupSlotsBySection, type ContentSlot, type PageSlotConfig } from '@/lib/content/page-slots'

interface PageData {
  id: string
  slug: string
  title: string
  description: string | null
  body?: string
  status: string
  showInMainNav: boolean
  showInFooterNav: boolean
  navOrder: number
  parentSlug: string | null
  contentSlots?: Record<string, string | string[]> | null
  // SEO
  metaTitle: string | null
  metaDescription: string | null
  canonicalUrl: string | null
  ogTitle: string | null
  ogDescription: string | null
  ogImage: string | null
  // AEO
  schemaType: string
  faqItems: Array<{ question: string; answer: string }> | null
}

interface PageEditorProps {
  page: PageData
}

export function PageEditor({ page: initialPage }: PageEditorProps) {
  const router = useRouter()
  const [page, setPage] = useState(initialPage)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Check if this is a designed page with slots
  const slotConfig = getPageSlotConfig(page.slug)
  const isDesignedPage = !!slotConfig

  // Collapsible sections
  const [contentOpen, setContentOpen] = useState(true)
  const [seoOpen, setSeoOpen] = useState(false)
  const [aeoOpen, setAeoOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Preview
  const [previewKey, setPreviewKey] = useState(0)
  const [showPreview, setShowPreview] = useState(false)

  // Content slots state
  const [contentSlots, setContentSlots] = useState<Record<string, string | string[]>>(
    page.contentSlots || {}
  )

  const updatePage = (updates: Partial<PageData>) => {
    setPage(prev => ({ ...prev, ...updates }))
    setSuccess(false)
  }

  const updateSlot = (slotId: string, value: string | string[]) => {
    setContentSlots(prev => ({ ...prev, [slotId]: value }))
    setSuccess(false)
  }

  const getSlotValue = (slot: ContentSlot): string | string[] => {
    return contentSlots[slot.id] ?? slot.defaultValue
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch(`/api/admin/pages/${page.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...page,
          contentSlots: isDesignedPage ? contentSlots : null,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to save')
      }

      setSuccess(true)
      setPreviewKey(prev => prev + 1) // Refresh preview
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const addFaqItem = () => {
    const faqItems = page.faqItems || []
    updatePage({ faqItems: [...faqItems, { question: '', answer: '' }] })
  }

  const updateFaqItem = (index: number, field: 'question' | 'answer', value: string) => {
    const faqItems = [...(page.faqItems || [])]
    faqItems[index] = { ...faqItems[index], [field]: value }
    updatePage({ faqItems })
  }

  const removeFaqItem = (index: number) => {
    const faqItems = [...(page.faqItems || [])]
    faqItems.splice(index, 1)
    updatePage({ faqItems })
  }

  const SectionHeader = ({
    title,
    icon: Icon,
    isOpen,
    onToggle,
    badge,
  }: {
    title: string
    icon: React.ElementType
    isOpen: boolean
    onToggle: () => void
    badge?: string
  }) => (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 bg-bg-alt rounded-lg hover:bg-bg-alt/80 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-text-muted" />
        <span className="font-body font-semibold text-text-primary">{title}</span>
        {badge && (
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-brand-teal/20 text-brand-teal">
            {badge}
          </span>
        )}
      </div>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-text-muted" />
      ) : (
        <ChevronDown className="w-5 h-5 text-text-muted" />
      )}
    </button>
  )

  // Render slot editor based on type
  const renderSlotEditor = (slot: ContentSlot) => {
    const value = getSlotValue(slot) as string

    switch (slot.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => updateSlot(slot.id, e.target.value)}
            className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
            placeholder={slot.defaultValue as string}
          />
        )

      case 'paragraph':
        return (
          <textarea
            value={value}
            onChange={(e) => updateSlot(slot.id, e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none resize-y"
            placeholder={slot.defaultValue as string}
          />
        )

      case 'richText':
        return (
          <RichTextEditor
            value={value}
            onChange={(val) => updateSlot(slot.id, val)}
            placeholder={slot.defaultValue as string}
          />
        )

      default:
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => updateSlot(slot.id, e.target.value)}
            className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
          />
        )
    }
  }

  // Render content slots grouped by section
  const renderContentSlots = (config: PageSlotConfig) => {
    const grouped = groupSlotsBySection(config.slots)

    return (
      <div className="space-y-6">
        {Object.entries(grouped).map(([section, slots]) => (
          <div key={section} className="border border-border-light rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-brand-cyan/10 border-b border-border-light">
              <h4 className="font-body font-semibold text-brand-navy text-sm">
                {section}
              </h4>
            </div>
            <div className="p-4 space-y-4">
              {slots.map((slot) => (
                <div key={slot.id}>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    {slot.label}
                  </label>
                  {slot.description && (
                    <p className="text-xs text-text-muted mb-2">{slot.description}</p>
                  )}
                  {renderSlotEditor(slot)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex gap-6">
      {/* Main Editor */}
      <div className={cn('flex-1', showPreview ? 'max-w-2xl' : 'max-w-4xl')}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/admin/pages')}
              className="p-2 rounded hover:bg-bg-alt transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl font-semibold text-text-primary">
                  Edit Page
                </h1>
                {isDesignedPage && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-brand-teal/20 text-brand-teal flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Designed Page
                  </span>
                )}
              </div>
              <p className="text-sm text-text-muted">/{page.slug || '(home)'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={cn(
                'btn',
                showPreview ? 'btn-primary' : 'btn-secondary'
              )}
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Hide Preview' : 'Preview'}
            </button>
            {page.slug && (
              <a
                href={`/${page.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Globe className="w-4 h-4 mr-2" />
                View Live
              </a>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="btn btn-primary disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-error-light text-error rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-success-light text-success rounded-lg">
            Page saved successfully!
          </div>
        )}

        {/* Designed Page Info */}
        {isDesignedPage && (
          <div className="mb-6 p-4 bg-brand-cyan/10 border border-brand-teal/30 rounded-lg">
            <div className="flex items-start gap-3">
              <Layout className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-body font-semibold text-brand-navy">
                  This is a Designed Page
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  This page uses a custom React component for its layout. You can edit the text content below, but the layout and visual design are controlled by code.
                </p>
                <p className="text-xs text-text-muted mt-2 flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  Component: {slotConfig?.componentPath}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-surface rounded-lg border border-border-light p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary mb-4">
              Page Info
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={page.title}
                  onChange={(e) => updatePage({ title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                  placeholder="Page title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Slug
                </label>
                <div className="flex items-center">
                  <span className="px-3 py-2.5 bg-bg-alt border border-r-0 border-border rounded-l text-text-muted">
                    /
                  </span>
                  <input
                    type="text"
                    value={page.slug}
                    onChange={(e) => updatePage({ slug: e.target.value })}
                    className="flex-1 px-4 py-2.5 rounded-r border border-border focus:border-text-primary focus:outline-none"
                    placeholder="page-slug"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Short Description
                </label>
                <textarea
                  value={page.description || ''}
                  onChange={(e) => updatePage({ description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none resize-none"
                  placeholder="Brief description of this page"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Status
                </label>
                <select
                  value={page.status}
                  onChange={(e) => updatePage({ status: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          </div>

          {/* Page Content Section */}
          <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
            <SectionHeader
              title={isDesignedPage ? 'Editable Content' : 'Page Content'}
              icon={Layout}
              isOpen={contentOpen}
              onToggle={() => setContentOpen(!contentOpen)}
              badge={isDesignedPage ? `${slotConfig?.slots.length} slots` : undefined}
            />

            {contentOpen && (
              <div className="p-6 border-t border-border-light">
                {isDesignedPage && slotConfig ? (
                  renderContentSlots(slotConfig)
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">
                      Page Content
                    </label>
                    <RichTextEditor
                      value={page.body || ''}
                      onChange={(value) => updatePage({ body: value })}
                      placeholder="Write your page content here..."
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SEO Section */}
          <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
            <SectionHeader
              title="SEO Settings"
              icon={Search}
              isOpen={seoOpen}
              onToggle={() => setSeoOpen(!seoOpen)}
            />

            {seoOpen && (
              <div className="p-6 border-t border-border-light space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={page.metaTitle || ''}
                    onChange={(e) => updatePage({ metaTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                    placeholder="Override page title for search engines"
                  />
                  <p className="mt-1 text-xs text-text-muted">
                    {(page.metaTitle || page.title).length}/60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Meta Description
                  </label>
                  <textarea
                    value={page.metaDescription || ''}
                    onChange={(e) => updatePage({ metaDescription: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none resize-none"
                    placeholder="Description shown in search results"
                  />
                  <p className="mt-1 text-xs text-text-muted">
                    {(page.metaDescription || '').length}/160 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    value={page.canonicalUrl || ''}
                    onChange={(e) => updatePage({ canonicalUrl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                    placeholder="https://example.com/canonical-page"
                  />
                </div>

                <hr className="border-border" />

                <h3 className="font-semibold text-text-primary flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Open Graph (Social Sharing)
                </h3>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    OG Title
                  </label>
                  <input
                    type="text"
                    value={page.ogTitle || ''}
                    onChange={(e) => updatePage({ ogTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                    placeholder="Title for social sharing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    OG Description
                  </label>
                  <textarea
                    value={page.ogDescription || ''}
                    onChange={(e) => updatePage({ ogDescription: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none resize-none"
                    placeholder="Description for social sharing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    OG Image URL
                  </label>
                  <input
                    type="url"
                    value={page.ogImage || ''}
                    onChange={(e) => updatePage({ ogImage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            )}
          </div>

          {/* AEO Section */}
          <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
            <SectionHeader
              title="AEO Schema (Structured Data)"
              icon={FileJson}
              isOpen={aeoOpen}
              onToggle={() => setAeoOpen(!aeoOpen)}
            />

            {aeoOpen && (
              <div className="p-6 border-t border-border-light space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Schema Type
                  </label>
                  <select
                    value={page.schemaType}
                    onChange={(e) => updatePage({ schemaType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                  >
                    <option value="WebPage">WebPage</option>
                    <option value="Article">Article</option>
                    <option value="AboutPage">AboutPage</option>
                    <option value="ContactPage">ContactPage</option>
                    <option value="FAQPage">FAQPage</option>
                    <option value="HowTo">HowTo</option>
                    <option value="Service">Service</option>
                    <option value="Product">Product</option>
                  </select>
                </div>

                <hr className="border-border" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-text-secondary">
                      FAQ Items (for FAQ Schema)
                    </label>
                    <button
                      type="button"
                      onClick={addFaqItem}
                      className="text-sm text-loop-service hover:underline"
                    >
                      + Add FAQ
                    </button>
                  </div>

                  {page.faqItems && page.faqItems.length > 0 ? (
                    <div className="space-y-4">
                      {page.faqItems.map((faq, index) => (
                        <div key={index} className="p-4 bg-bg-alt rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-xs font-semibold text-text-muted">
                              FAQ {index + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFaqItem(index)}
                              className="text-xs text-error hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => updateFaqItem(index, 'question', e.target.value)}
                            className="w-full px-3 py-2 mb-2 rounded border border-border focus:border-text-primary focus:outline-none text-sm"
                            placeholder="Question"
                          />
                          <textarea
                            value={faq.answer}
                            onChange={(e) => updateFaqItem(index, 'answer', e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 rounded border border-border focus:border-text-primary focus:outline-none text-sm resize-none"
                            placeholder="Answer"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-text-muted">
                      No FAQ items. Add questions and answers to generate FAQ schema.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Settings Section */}
          <div className="bg-surface rounded-lg border border-border-light overflow-hidden">
            <SectionHeader
              title="Page Settings"
              icon={Settings}
              isOpen={settingsOpen}
              onToggle={() => setSettingsOpen(!settingsOpen)}
            />

            {settingsOpen && (
              <div className="p-6 border-t border-border-light space-y-4">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={page.showInMainNav}
                      onChange={(e) => updatePage({ showInMainNav: e.target.checked })}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm text-text-secondary">Show in header navigation</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={page.showInFooterNav}
                      onChange={(e) => updatePage({ showInFooterNav: e.target.checked })}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm text-text-secondary">Show in footer navigation</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">
                      Nav Order
                    </label>
                    <input
                      type="number"
                      value={page.navOrder}
                      onChange={(e) => updatePage({ navOrder: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">
                      Parent Section
                    </label>
                    <input
                      type="text"
                      value={page.parentSlug || ''}
                      onChange={(e) => updatePage({ parentSlug: e.target.value || null })}
                      className="w-full px-4 py-2.5 rounded border border-border focus:border-text-primary focus:outline-none"
                      placeholder="e.g., overview, loops, playbooks"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      {showPreview && (
        <div className="flex-1 min-w-[400px] sticky top-6 h-[calc(100vh-100px)]">
          <div className="bg-surface rounded-lg border border-border-light h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-light">
              <h3 className="font-body font-semibold text-text-primary text-sm">
                Live Preview
              </h3>
              <button
                onClick={() => setPreviewKey(prev => prev + 1)}
                className="p-1.5 rounded hover:bg-bg-alt transition-colors text-text-muted hover:text-text-primary"
                title="Refresh preview"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 bg-white">
              <iframe
                key={previewKey}
                src={`/${page.slug}?preview=true`}
                className="w-full h-full border-0"
                title="Page Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
