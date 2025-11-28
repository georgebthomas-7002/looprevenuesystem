import { Hero } from '@/components/marketing/hero'
import { FeatureSection } from '@/components/marketing/feature-section'
import { PricingTable } from '@/components/marketing/pricing-table'
import { CtaSection } from '@/components/marketing/cta-section'
import { NewsletterForm } from '@/components/marketing/newsletter-form'

const features = [
  {
    title: 'Faith-Centered Wisdom',
    description: 'Discover leadership principles rooted in timeless spiritual truths that transform how you lead.',
  },
  {
    title: 'Practical Application',
    description: 'Turn insight into action with tools, assessments, and frameworks designed for real-world leadership.',
  },
  {
    title: 'Personal Growth',
    description: 'Develop not just as a leader, but as a whole person through reflection, journaling, and prayer.',
  },
]

export default function SSOLHomePage() {
  return (
    <>
      <Hero
        headline="Lead with Purpose. Lead with Faith."
        subheadline="Discover a different way to lead. One rooted in spiritual principles, authentic relationships, and purposeful action."
        primaryCta={{ text: 'Explore Resources', href: '/resources' }}
        secondaryCta={{ text: 'Become a Member', href: '/membership' }}
      />
      <FeatureSection
        headline="What is Spiritual Leadership?"
        subheadline="Leadership that starts from the inside out"
        features={features}
      />
      <PricingTable />
      <CtaSection
        variant="primary"
        headline="Ready to Transform Your Leadership?"
        description="Join a community of leaders who are discovering a more purposeful way to lead."
        ctaText="Get Started Today"
        ctaHref="/membership"
      />
      <NewsletterForm />
    </>
  )
}
