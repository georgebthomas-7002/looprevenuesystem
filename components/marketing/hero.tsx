import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  headline: string
  subheadline: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export function Hero({ headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-primary mb-6">{headline}</h1>
          <p className="text-xl md:text-2xl text-warm-gray mb-10 leading-relaxed">
            {subheadline}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button size="lg">{primaryCta.text}</Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button variant="outline" size="lg">{secondaryCta.text}</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
