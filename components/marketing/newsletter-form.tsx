'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: Integrate with HubSpot
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container-narrow text-center">
        <h2 className="text-primary mb-4">Stay Connected</h2>
        <p className="text-warm-gray mb-8">
          Receive weekly insights on spiritual leadership delivered to your inbox.
        </p>
        {status === 'success' ? (
          <p className="text-accent-dark font-medium">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" isLoading={status === 'loading'}>
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
