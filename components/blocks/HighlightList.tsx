import { cn } from '@/lib/utils/cn'
import type { HighlightListProps } from '@/lib/content/sections'

const variantStyles = {
  default: 'border-l-text-primary bg-bg-alt',
  marketing: 'border-l-loop-marketing bg-loop-marketing-light',
  sales: 'border-l-loop-sales bg-loop-sales-light',
  service: 'border-l-loop-service bg-loop-service-light',
  ops: 'border-l-loop-ops bg-loop-ops-light',
}

export function HighlightList({
  items,
  variant = 'default',
}: HighlightListProps) {
  return (
    <div className={cn(
      'bg-surface rounded-md p-5 my-6 border-l-4',
      variantStyles[variant]
    )}>
      {items.map((item, i) => (
        <p
          key={i}
          className={cn(
            'font-body text-base text-text-primary font-semibold',
            i < items.length - 1 && 'mb-2'
          )}
        >
          {item}
        </p>
      ))}
    </div>
  )
}
