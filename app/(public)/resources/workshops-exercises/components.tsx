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
      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
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
          Copy Agenda
        </>
      )}
    </button>
  )
}

// Workshop Card Component
export function WorkshopCard({
  id,
  title,
  duration,
  audience,
  materials,
  agenda,
  color,
  label,
}: {
  id: string
  title: string
  duration: string
  audience: string
  materials: string
  agenda: string
  color: string
  label: string
}) {
  return (
    <div id={id} className="bg-white rounded-xl border border-gray-200 overflow-hidden scroll-mt-24">
      <div
        className="px-6 py-4 border-b border-gray-100"
        style={{ backgroundColor: `${color}08` }}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span
              className="inline-flex px-2 py-0.5 rounded text-xs font-semibold mb-2"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {label}
            </span>
            <h3 className="text-xl font-display font-bold text-brand-navy">{title}</h3>
          </div>
          <CopyButton content={agenda} color={color} />
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-text-secondary">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-text-secondary">{audience}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-text-secondary">{materials}</span>
          </div>
        </div>
      </div>
      <pre className="p-6 text-sm text-text-secondary overflow-x-auto bg-gray-50 font-mono whitespace-pre-wrap">
        {agenda}
      </pre>
    </div>
  )
}

// Exercise Card Component (shorter format)
export function ExerciseCard({
  id,
  title,
  duration,
  context,
  steps,
  color,
}: {
  id: string
  title: string
  duration: string
  context: string
  steps: string[]
  color: string
}) {
  const stepsText = steps.map((step, i) => `${i + 1}. ${step}`).join('\n')
  const fullContent = `Exercise: ${title}\nTime: ${duration}\nContext: ${context}\n\nSteps:\n${stepsText}`

  return (
    <div id={id} className="bg-white rounded-xl border border-gray-200 overflow-hidden scroll-mt-24">
      <div
        className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4"
        style={{ backgroundColor: `${color}08` }}
      >
        <div>
          <span
            className="inline-flex px-2 py-0.5 rounded text-xs font-semibold mb-2"
            style={{ backgroundColor: `${color}20`, color }}
          >
            Quick Exercise • {duration}
          </span>
          <h3 className="text-lg font-display font-bold text-brand-navy">{title}</h3>
          <p className="text-sm text-text-secondary mt-1">{context}</p>
        </div>
        <CopyButton content={fullContent} color={color} />
      </div>
      <div className="p-6">
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ backgroundColor: color }}
              >
                {index + 1}
              </span>
              <span className="text-text-secondary text-sm pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
