'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  price: number
  interval: 'month' | 'year'
  description: string
  features: string[]
  popular?: boolean
  savings?: number
}

const plans: PricingPlan[] = [
  {
    name: 'Monthly',
    price: 7.77,
    interval: 'month',
    description: 'Perfect for exploring spiritual leadership',
    features: [
      'All articles and podcasts',
      'Downloadable resources',
      'Interactive tools and assessments',
      'Personal journaling space',
      'Daily reflections and prayers',
    ],
  },
  {
    name: 'Annual',
    price: 77.77,
    interval: 'year',
    description: 'Best value for committed leaders',
    features: [
      'Everything in Monthly',
      'Save $15.47 per year',
      'Priority access to new content',
      'Exclusive annual member resources',
    ],
    popular: true,
    savings: 15.47,
  },
]

export function PricingTable() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary mb-4">Simple, Purposeful Pricing</h2>
          <p className="text-lg text-warm-gray">
            Invest in your spiritual leadership journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'relative',
                plan.popular && 'border-primary border-2'
              )}
              padding="lg"
            >
              {plan.popular && (
                <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display font-bold text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-warm-gray">/{plan.interval}</span>
                </div>
                {plan.savings && (
                  <p className="text-accent-dark text-sm mt-1">
                    Save ${plan.savings} per year
                  </p>
                )}
                <p className="text-warm-gray mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-warm-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button fullWidth variant={plan.popular ? 'primary' : 'outline'}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
