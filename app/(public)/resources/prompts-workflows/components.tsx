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

// Prompt Block Component
export function PromptBlock({
  title,
  description,
  content,
  color,
  label,
}: {
  title: string
  description: string
  content: string
  color: string
  label?: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div
        className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4"
        style={{ backgroundColor: `${color}08` }}
      >
        <div>
          {label && (
            <span
              className="inline-flex px-2 py-0.5 rounded text-xs font-semibold mb-2"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {label}
            </span>
          )}
          <h4 className="font-display font-bold text-brand-navy">{title}</h4>
          <p className="text-sm text-text-secondary mt-1">{description}</p>
        </div>
        <CopyButton content={content} color={color} />
      </div>
      <pre className="p-6 text-sm text-text-secondary overflow-x-auto bg-gray-50 font-mono whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  )
}

// Workflow Step Component
export function WorkflowStep({
  number,
  title,
  description,
  actor,
  color,
}: {
  number: number
  title: string
  description: string
  actor: 'human' | 'ai' | 'both'
  color: string
}) {
  const actorLabels = {
    human: { label: 'Human', bg: '#142d63' },
    ai: { label: 'AI', bg: '#028393' },
    both: { label: 'Human + AI', bg: '#3D5A80' },
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
      </div>
      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-brand-navy">{title}</h4>
          <span
            className="text-xs px-2 py-0.5 rounded text-white"
            style={{ backgroundColor: actorLabels[actor].bg }}
          >
            {actorLabels[actor].label}
          </span>
        </div>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}

// Workflow Card Component
export function WorkflowCard({
  title,
  description,
  steps,
  color,
}: {
  title: string
  description: string
  steps: { title: string; description: string; actor: 'human' | 'ai' | 'both' }[]
  color: string
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div
        className="px-6 py-4 border-b border-gray-100"
        style={{ backgroundColor: `${color}08` }}
      >
        <span
          className="inline-flex px-2 py-0.5 rounded text-xs font-semibold mb-2"
          style={{ backgroundColor: `${color}20`, color }}
        >
          Workflow
        </span>
        <h3 className="text-lg font-display font-bold text-brand-navy">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>
      <div className="p-6">
        {steps.map((step, index) => (
          <WorkflowStep
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            actor={step.actor}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}
