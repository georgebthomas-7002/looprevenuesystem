import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaSectionProps {
  headline: string
  description?: string
  ctaText: string
  ctaHref: string
  variant?: 'default' | 'primary'
}

export function CtaSection({ headline, description, ctaText, ctaHref, variant = 'default' }: CtaSectionProps) {
  const bgClass = variant === 'primary' ? 'bg-primary text-white' : 'bg-warm-white'
  const textClass = variant === 'primary' ? 'text-white/80' : 'text-warm-gray'
  const headlineClass = variant === 'primary' ? 'text-white' : 'text-primary'

  return (
    <section className={cn('py-16 md:py-24', bgClass)}>
      <div className="container-narrow text-center">
        <h2 className={cn('mb-4', headlineClass)}>{headline}</h2>
        {description && <p className={cn('text-lg mb-8', textClass)}>{description}</p>}
        <Link href={ctaHref}>
          <Button size="lg" variant={variant === 'primary' ? 'secondary' : 'primary'}>
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  )
}
