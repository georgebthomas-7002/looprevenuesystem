import { cn } from '@/lib/utils/cn'
import type { ConnectionsGridProps, LoopType } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

const connectionStyles: Record<LoopType, string> = {
  marketing: 'connection-card-marketing',
  sales: 'connection-card-sales',
  service: 'connection-card-service',
  ops: 'connection-card-ops',
}

export function ConnectionsGrid({
  headline,
  body,
  connections,
  backgroundVariant = 'default',
}: ConnectionsGridProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {connections.map((connection, i) => (
            <div
              key={i}
              className={cn('connection-card', connectionStyles[connection.loopType])}
            >
              <h4 className="font-body text-base font-semibold text-text-primary mb-2">
                {connection.title}
              </h4>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {connection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
