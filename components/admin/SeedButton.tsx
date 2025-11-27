'use client'

import { useState } from 'react'
import { Database, RefreshCw } from 'lucide-react'

export function SeedButton() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  async function handleSeed() {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/admin/seed', {
        method: 'POST',
        credentials: 'include',
      })

      const data = await response.json()

      if (response.ok) {
        const created = data.results?.filter((r: { status: string }) => r.status === 'created').length || 0
        const updated = data.results?.filter((r: { status: string }) => r.status === 'updated').length || 0

        let message = 'Database seeded successfully!'
        if (created > 0 || updated > 0) {
          const parts = []
          if (created > 0) parts.push(`${created} pages created`)
          if (updated > 0) parts.push(`${updated} pages updated`)
          message = `Success! ${parts.join(', ')}.`
        }

        setResult({ message, type: 'success' })
        // Refresh the page after a short delay to update stats
        setTimeout(() => window.location.reload(), 2000)
      } else {
        setResult({
          message: `Error: ${data.error || 'Failed to seed'}${data.details ? ` - ${data.details}` : ''}`,
          type: 'error'
        })
      }
    } catch (error) {
      setResult({
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        type: 'error'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="inline-flex flex-col">
      <button
        onClick={handleSeed}
        disabled={loading}
        className="inline-flex items-center gap-2 btn bg-brand-teal text-white border-brand-teal hover:bg-brand-teal/90 disabled:opacity-50"
        title="Populate pages with default content from the codebase"
      >
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin" />
        ) : (
          <Database className="w-4 h-4" />
        )}
        {loading ? 'Seeding Database...' : 'Seed Database'}
      </button>
      {result && (
        <p className={`mt-2 text-sm ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {result.message}
        </p>
      )}
    </div>
  )
}
