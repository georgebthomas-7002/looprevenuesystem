import { cn } from '@/lib/utils/cn'
import type { ContentBlockProps } from '@/lib/content/sections'

const maxWidthVariants = {
  narrow: 'max-w-narrow',
  default: 'max-w-[720px]',
  wide: 'max-w-content',
}

export function ContentBlock({
  headline,
  body,
  maxWidth = 'default',
}: ContentBlockProps) {
  return (
    <div className={cn('mx-auto', maxWidthVariants[maxWidth])}>
      {headline && (
        <h2 className="font-display text-3xl font-medium text-text-primary mb-6">
          {headline}
        </h2>
      )}
      <div className="font-body text-base text-text-secondary leading-loose space-y-4">
        {body.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
