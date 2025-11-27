import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { CtaBannerProps } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
  dark: 'bg-brand-navy text-white',
}

export function CtaBanner({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'alt',
}: CtaBannerProps) {
  const isDark = backgroundVariant === 'dark'

  return (
    <section className={cn('section-padding', backgroundVariants[backgroundVariant])}>
      <div className="container-content text-center">
        {eyebrow && (
          <p className={cn(
            'label mb-4',
            isDark ? 'text-white/70' : 'text-loop-marketing'
          )}>
            {eyebrow}
          </p>
        )}

        <h2 className={cn(
          'font-display text-3xl md:text-4xl font-medium mb-4',
          isDark ? 'text-white' : 'text-text-primary'
        )}>
          {headline}
        </h2>

        {body && (
          <p className={cn(
            'font-body text-lg max-w-2xl mx-auto mb-8',
            isDark ? 'text-white/80' : 'text-text-secondary'
          )}>
            {body}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={cn(
              'btn',
              isDark
                ? 'bg-white text-brand-navy hover:bg-white/90'
                : `btn-${primaryCta.variant || 'primary'}`
            )}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                'btn',
                isDark
                  ? 'border-2 border-white text-white hover:bg-white hover:text-brand-navy'
                  : `btn-${secondaryCta.variant || 'secondary'}`
              )}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
