import { cn } from '@/lib/utils/cn'
import type { ComparisonSectionProps } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

const loopColors = {
  marketing: { bg: 'bg-loop-marketing-tint', text: 'text-loop-marketing' },
  sales: { bg: 'bg-loop-sales-tint', text: 'text-loop-sales' },
  service: { bg: 'bg-loop-service-tint', text: 'text-loop-service' },
  ops: { bg: 'bg-loop-ops-tint', text: 'text-loop-ops' },
}

export function ComparisonSection({
  headline,
  body,
  before,
  after,
  backgroundVariant = 'default',
}: ComparisonSectionProps) {
  return (
    <div className="my-8">
      {headline && (
        <h3 className="font-display text-2xl font-medium text-text-primary mb-4">
          {headline}
        </h3>
      )}
      {body && (
        <p className="font-body text-base text-text-secondary leading-loose mb-6">
          {body}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
        {/* Before Box */}
        <div className="comparison-box">
          <h4 className="font-display text-lg font-semibold text-text-primary mb-4">
            {before.title}
          </h4>
          <div className="flex flex-col gap-2">
            {before.items.map((item, i) => (
              <div
                key={i}
                className="bg-bg-alt px-4 py-3 rounded font-body text-sm text-text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 60 60"
            className="w-[60px] h-[60px] text-text-muted md:rotate-0 rotate-90"
          >
            <path d="M10 30 L45 30" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M38 22 L50 30 L38 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* After Box - Loop Colors */}
        <div className="comparison-box">
          <h4 className="font-display text-lg font-semibold text-text-primary mb-4">
            {after.title}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {after.items.map((item, i) => {
              const loopType = item.toLowerCase() as keyof typeof loopColors
              const colors = loopColors[loopType] || { bg: 'bg-bg-alt', text: 'text-text-secondary' }
              return (
                <div
                  key={i}
                  className={cn(
                    'px-3 py-3 rounded font-body text-sm font-semibold',
                    colors.bg,
                    colors.text
                  )}
                >
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
