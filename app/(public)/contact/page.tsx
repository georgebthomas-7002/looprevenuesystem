import { Hero } from '@/components/marketing/hero'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Get in Touch"
        subheadline="Have a question or want to connect? We would love to hear from you."
      />
      <section className="py-16">
        <div className="container-narrow">
          <Card padding="lg">
            <form className="space-y-6">
              <Input label="Name" placeholder="Your name" required />
              <Input label="Email" type="email" placeholder="your@email.com" required />
              <div>
                <label className="block text-sm font-medium text-warm-black mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-warm-black placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <Button type="submit" fullWidth>Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  )
}
