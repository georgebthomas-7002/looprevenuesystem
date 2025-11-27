import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { NavigationCardsProps, LoopType } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

const loopLinkStyles: Record<LoopType, string> = {
  marketing: 'loop-link-marketing',
  sales: 'loop-link-sales',
  service: 'loop-link-service',
  ops: 'loop-link-ops',
}

export function NavigationCards({
  headline,
  subtitle,
  cards,
  closingNote,
  backgroundVariant = 'default',
}: NavigationCardsProps) {
  return (
    <section className={cn(
      'section-padding border-t border-border-light',
      backgroundVariants[backgroundVariant]
    )}>
      <div className="container-content">
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

        <div className={cn(
          'grid gap-5',
          cards.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
          cards.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
          'grid-cols-1'
        )}>
          {cards.map((card, i) => (
            <div key={i} className="nav-card">
              <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="font-body text-sm text-text-muted mb-5 leading-relaxed">
                {card.description}
              </p>

              {/* Loop Links */}
              {card.loopLinks && card.loopLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.loopLinks.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className={cn('loop-link', loopLinkStyles[link.loopType])}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Regular Links */}
              {card.links && card.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className={cn('btn text-sm', `btn-${link.variant || 'primary'}`)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* CTA */}
              {card.cta && (
                <Link
                  href={card.cta.href}
                  className={cn('btn', `btn-${card.cta.variant || 'secondary'}`)}
                >
                  {card.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {closingNote && (
          <p className="text-center mt-10 font-body text-base text-text-secondary leading-loose max-w-[700px] mx-auto">
            {closingNote}
          </p>
        )}
      </div>
    </section>
  )
}
