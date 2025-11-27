import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { Activity, Users, Heart, Settings } from 'lucide-react'
import type { LoopDetailSectionProps, LoopType } from '@/lib/content/sections'

const loopConfig = {
  marketing: {
    icon: Activity,
    color: 'text-loop-marketing',
    bgTint: 'bg-loop-marketing-tint',
  },
  sales: {
    icon: Users,
    color: 'text-loop-sales',
    bgTint: 'bg-loop-sales-tint',
  },
  service: {
    icon: Heart,
    color: 'text-loop-service',
    bgTint: 'bg-loop-service-tint',
  },
  ops: {
    icon: Settings,
    color: 'text-loop-ops',
    bgTint: 'bg-loop-ops-tint',
  },
}

const stageColors = {
  express: 'text-brand-teal',
  tailor: 'text-brand-peach',
  amplify: 'text-brand-orange',
  evolve: 'text-brand-blue',
}

export function LoopDetailSection({
  loopType,
  headline,
  subtitle,
  purpose,
  inputs,
  outputs,
  stages,
  cta,
  layout = 'default',
}: LoopDetailSectionProps) {
  const config = loopConfig[loopType]
  const Icon = config.icon

  return (
    <section id={`loop-${loopType}`} className="section-padding even:bg-bg-alt">
      <div className="container-content">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border-light">
          <div className={cn(
            'w-14 h-14 rounded-full flex items-center justify-center',
            config.bgTint
          )}>
            <Icon className={cn('w-7 h-7', config.color)} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              {headline}
            </h2>
            {subtitle && (
              <p className="font-body text-sm text-text-muted mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start',
          layout === 'reverse' && 'lg:grid-cols-[1fr_1.3fr]'
        )}>
          {/* Main Content */}
          <div className={layout === 'reverse' ? 'lg:order-2' : ''}>
            {/* Purpose */}
            <h3 className="font-display text-xl font-semibold text-text-primary mb-4">
              {purpose.title}
            </h3>
            <div className="font-body text-base text-text-secondary leading-loose space-y-4 mb-6">
              {purpose.body.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Inputs */}
            <h3 className="font-display text-xl font-semibold text-text-primary mb-4">
              {inputs.title}
            </h3>
            <ul className="list-none p-0 mb-6 space-y-2">
              {inputs.items.map((item, i) => (
                <li
                  key={i}
                  className="font-body text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-2 before:h-0.5 before:bg-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Outputs */}
            <h3 className="font-display text-xl font-semibold text-text-primary mb-4">
              {outputs.title}
            </h3>
            <ul className="list-none p-0 mb-6 space-y-2">
              {outputs.items.map((item, i) => (
                <li
                  key={i}
                  className="font-body text-base text-text-secondary leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-2 before:h-0.5 before:bg-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {cta && (
              <div className="mt-6">
                <Link
                  href={cta.href}
                  className={cn('arrow-link font-body text-base font-semibold', config.color)}
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>

          {/* Stage Cards */}
          <div className={layout === 'reverse' ? 'lg:order-1' : ''}>
            <div className="grid grid-cols-2 gap-3">
              {stages.map((stage, i) => (
                <div key={i} className="stage-card">
                  <h4 className={cn(
                    'font-body text-sm font-semibold uppercase tracking-wide mb-2',
                    stageColors[stage.stage]
                  )}>
                    {stage.title}
                  </h4>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
