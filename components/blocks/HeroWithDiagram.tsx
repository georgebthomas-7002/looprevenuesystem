import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { HeroWithDiagramProps } from '@/lib/content/sections'

const backgroundVariants = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  cream: 'bg-bg-cream',
}

// Loop Diagram SVG Component
function LoopDiagram() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] mx-auto">
      {/* Marketing Loop - Top */}
      <a href="#loop-marketing" className="group">
        <circle
          cx="150" cy="60" r="42"
          fill="rgba(245,158,11,0.1)"
          stroke="#F59E0B"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="150" y="55" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="600">Marketing</text>
        <text x="150" y="70" textAnchor="middle" fill="#F59E0B" fontSize="9">Loop</text>
      </a>

      {/* Sales Loop - Right */}
      <a href="#loop-sales" className="group">
        <circle
          cx="240" cy="150" r="42"
          fill="rgba(16,185,129,0.1)"
          stroke="#10B981"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="240" y="145" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600">Sales</text>
        <text x="240" y="160" textAnchor="middle" fill="#10B981" fontSize="9">Loop</text>
      </a>

      {/* Service Loop - Bottom */}
      <a href="#loop-service" className="group">
        <circle
          cx="150" cy="240" r="42"
          fill="rgba(14,165,233,0.1)"
          stroke="#0EA5E9"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="150" y="235" textAnchor="middle" fill="#0EA5E9" fontSize="11" fontWeight="600">Service</text>
        <text x="150" y="250" textAnchor="middle" fill="#0EA5E9" fontSize="9">Loop</text>
      </a>

      {/* Ops Loop - Left */}
      <a href="#loop-ops" className="group">
        <circle
          cx="60" cy="150" r="42"
          fill="rgba(100,116,139,0.1)"
          stroke="#64748B"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="60" y="145" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">Ops</text>
        <text x="60" y="160" textAnchor="middle" fill="#64748B" fontSize="9">Loop</text>
      </a>

      {/* Connection Arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#CBD5E1"/>
        </marker>
      </defs>
      <path d="M175 85 L215 120" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M215 180 L175 215" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M125 215 L85 180" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M85 120 L125 85" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
    </svg>
  )
}

export function HeroWithDiagram({
  eyebrow,
  headline,
  subtitle,
  body,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'default',
  diagram,
}: HeroWithDiagramProps) {
  return (
    <section className={cn(
      'section-padding border-b border-border-light',
      backgroundVariants[backgroundVariant]
    )}>
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:text-left text-center">
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
              <div className="flex flex-wrap gap-4 mt-8 lg:justify-start justify-center">
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

          {/* Diagram */}
          <div className="flex justify-center">
            {diagram === 'loopDiagram' && <LoopDiagram />}
          </div>
        </div>
      </div>
    </section>
  )
}
