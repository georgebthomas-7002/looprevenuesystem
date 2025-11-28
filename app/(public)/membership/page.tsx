import { Hero } from '@/components/marketing/hero'
import { PricingTable } from '@/components/marketing/pricing-table'
import { FeatureSection } from '@/components/marketing/feature-section'

const benefits = [
  {
    title: 'Exclusive Content',
    description: 'Access members-only articles, extended podcast episodes, and in-depth resources.',
  },
  {
    title: 'Interactive Tools',
    description: 'Use assessments, frameworks, and calculators designed for spiritual leaders.',
  },
  {
    title: 'Personal Journaling',
    description: 'Reflect on your leadership journey with guided prompts and a private journal space.',
  },
]

export default function MembershipPage() {
  return (
    <>
      <Hero
        headline="Become a Member"
        subheadline="Unlock the full library of resources and tools to transform your leadership."
      />
      <FeatureSection
        headline="What You Get"
        features={benefits}
      />
      <PricingTable />
      <section className="py-16 bg-warm-white">
        <div className="container-narrow">
          <h2 className="text-primary text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2">Can I cancel anytime?</h3>
              <p className="text-warm-gray">Yes, you can cancel your membership at any time. Your access will continue until the end of your billing period.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-warm-gray">We accept all major credit cards through our secure payment processor, Stripe.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Is there a free trial?</h3>
              <p className="text-warm-gray">We offer plenty of free content so you can experience the quality before joining. Browse our free resources to get started.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
