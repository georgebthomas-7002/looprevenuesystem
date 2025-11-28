'use client'

import { useState } from 'react'

// Copy Button Component
export function CopyButton({
  content,
  color,
}: {
  content: string
  color: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
      style={{
        backgroundColor: copied ? '#028393' : `${color}15`,
        color: copied ? 'white' : color,
      }}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

// Copyable Template Block Component
export function TemplateBlock({
  title,
  description,
  content,
  color,
}: {
  title: string
  description: string
  content: string
  color: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div
        className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"
        style={{ backgroundColor: `${color}08` }}
      >
        <div>
          <h4 className="font-display font-bold text-brand-navy">{title}</h4>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
        <CopyButton content={content} color={color} />
      </div>
      <pre className="p-6 text-sm text-text-secondary overflow-x-auto bg-gray-50 font-mono whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  )
}
