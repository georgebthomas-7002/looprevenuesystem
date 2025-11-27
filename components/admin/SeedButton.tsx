'use client'

import { useState } from 'react'
import { Database } from 'lucide-react'

export function SeedButton() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function handleSeed() {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/admin/seed', {
        method: 'POST',
      })

      const data = await response.json()

      if (response.ok) {
        const created = data.results?.filter((r: { status: string }) => r.status === 'created').length || 0
        setResult(`Success! Created ${created} new pages.`)
        // Refresh the page after a short delay to update stats
        setTimeout(() => window.location.reload(), 1500)
      } else {
        setResult(`Error: ${data.error || 'Failed to seed'}`)
      }
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleSeed}
        disabled={loading}
        className="inline-flex items-center gap-2 btn btn-secondary disabled:opacity-50"
      >
        <Database className="w-4 h-4" />
        {loading ? 'Seeding...' : 'Import Existing Pages'}
      </button>
      {result && (
        <p className={`mt-2 text-sm ${result.startsWith('Success') ? 'text-green-600' : 'text-red-600'}`}>
          {result}
        </p>
      )}
    </div>
  )
}
