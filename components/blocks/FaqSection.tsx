'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { ChevronDown } from 'lucide-react'
import type { FaqSectionProps } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

export function FaqSection({
  headline,
  subtitle,
  items,
  backgroundVariant = 'default',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={cn('section-padding', backgroundVariants[backgroundVariant])}>
      <div className="container-narrow">
        {(headline || subtitle) && (
          <div className="text-center mb-10">
            {headline && (
              <h2 className="font-display text-3xl font-medium text-text-primary mb-3">
                {headline}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-base text-text-secondary">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-border-light rounded-md overflow-hidden"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-body text-base font-semibold text-text-primary pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-text-muted transition-transform flex-shrink-0',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="font-body text-base text-text-secondary leading-loose">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
