'use client'

import { useState } from 'react'
import Link from 'next/link'

// FAQ Item Component with accordion functionality
export function FAQItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-white rounded-xl border border-[#98C1D9]/30 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-brand-navy pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#028393]/10 flex items-center justify-center transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            className="w-4 h-4 text-[#028393]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <div className="text-text-secondary space-y-4">{children}</div>
        </div>
      )}
    </div>
  )
}

// FAQ Section Component
export function FAQSection({
  id,
  title,
  description,
  children,
  bgColor = 'white',
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  bgColor?: 'white' | 'light'
}) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-24 ${
        bgColor === 'light' ? 'bg-[#E0FBFC]' : 'bg-white'
      }`}
    >
      <div className="container-content">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-text-secondary">{description}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  )
}

// Internal Link Component for FAQ answers
export function FAQLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-[#028393] hover:underline font-medium"
    >
      {children}
    </Link>
  )
}
