import { Hero } from '@/components/marketing/hero'
import { CtaSection } from '@/components/marketing/cta-section'

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="About Spiritual Side of Leadership"
        subheadline="A space for leaders who want more than success. Leaders who want significance."
      />
      <section className="py-16">
        <div className="container-narrow prose-spiritual">
          <h2>Why This Exists</h2>
          <p>
            In a world that often separates faith from work, many leaders feel torn. They want to lead with integrity, purpose, and spiritual grounding, but struggle to find resources that speak to both their professional challenges and their deeper calling.
          </p>
          <p>
            Spiritual Side of Leadership exists to bridge that gap. To provide practical wisdom rooted in timeless spiritual principles. To help leaders flourish, not just succeed.
          </p>

          <h2>Our Approach</h2>
          <p>
            We believe leadership is not just about what you do, but who you are. The best leaders lead from the inside out. They cultivate their inner life so their outer impact is authentic and lasting.
          </p>
          <p>
            Through articles, podcasts, tools, and community, we provide the resources you need to integrate your faith with your leadership in meaningful ways.
          </p>
        </div>
      </section>
      <CtaSection
        headline="Join the Journey"
        description="Start exploring resources that will transform how you lead."
        ctaText="View Resources"
        ctaHref="/resources"
      />
    </>
  )
}
