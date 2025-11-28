import { cn } from '@/lib/utils/cn'
import type { AiSectionProps, LoopType } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

const loopColors: Record<LoopType, string> = {
  marketing: 'text-loop-marketing',
  sales: 'text-loop-sales',
  service: 'text-loop-service',
  ops: 'text-loop-ops',
}

const loopLabels: Record<LoopType, string> = {
  marketing: 'Marketing Loop',
  sales: 'Sales Loop',
  service: 'Service Loop',
  ops: 'Ops Loop',
}

export function AiSection({
  headline,
  body,
  items,
  closingNote,
  backgroundVariant = 'alt',
}: AiSectionProps) {
  return (
    <section className={cn('section-padding', backgroundVariants[backgroundVariant])}>
      <div className="container-content">
        {headline && (
          <h2 className="font-display text-3xl font-medium text-text-primary mb-6">
            {headline}
          </h2>
        )}

        {body && (
          <div className="max-w-[720px] mb-8">
            <p className="font-body text-base text-text-secondary leading-loose">
              {body}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {items.map((item, i) => (
            <div key={i} className="ai-card">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border-light">
                <h4 className={cn('font-display text-lg font-semibold', loopColors[item.loopType])}>
                  {loopLabels[item.loopType]}
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-body text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    AI Can Assist With
                  </h5>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.aiCanDo}
                  </p>
                </div>
                <div>
                  <h5 className="font-body text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    Humans Own
                  </h5>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.humanOwns}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {closingNote && (
          <p className="text-center mt-8 font-display text-lg font-semibold text-text-primary">
            {closingNote}
          </p>
        )}
      </div>
    </section>
  )
}
