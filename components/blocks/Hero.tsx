import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { HeroProps } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

export function Hero({
  eyebrow,
  headline,
  subtitle,
  body,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'default',
  alignment = 'left',
}: HeroProps) {
  return (
    <section className={cn(
      'section-padding border-b border-border-light',
      backgroundVariants[backgroundVariant]
    )}>
      <div className={cn(
        'container-content',
        alignment === 'center' && 'text-center'
      )}>
        <div className={cn(
          'max-w-3xl',
          alignment === 'center' && 'mx-auto'
        )}>
          {eyebrow && (
            <p className="label mb-4 text-loop-marketing">{eyebrow}</p>
          )}

          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-text-primary mb-4">
            {headline}
          </h1>

          {subtitle && (
            <p className="font-display text-xl italic text-text-secondary mb-6">
              {subtitle}
            </p>
          )}

          {body && (
            <div className="font-body text-base text-text-secondary leading-loose space-y-4">
              {body.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={cn(
              'flex flex-wrap gap-4 mt-8',
              alignment === 'center' && 'justify-center'
            )}>
              {primaryCta && (
                <Link href={primaryCta.href} className={cn('btn', `btn-${primaryCta.variant || 'primary'}`)}>
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className={cn('btn', `btn-${secondaryCta.variant || 'secondary'}`)}>
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
