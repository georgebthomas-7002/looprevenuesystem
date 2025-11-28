import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  return (
    <Card padding="lg" className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-primary mb-2">Create Your Account</h1>
        <p className="text-warm-gray">Start your spiritual leadership journey</p>
      </div>
      <form className="space-y-4">
        <Input label="Full Name" placeholder="Your name" required />
        <Input label="Email" type="email" placeholder="your@email.com" required />
        <Input label="Password" type="password" placeholder="********" required />
        <Input label="Confirm Password" type="password" placeholder="********" required />
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="rounded border-warm-gray/30 mt-1" required />
          <span className="text-warm-gray">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </span>
        </label>
        <Button type="submit" fullWidth>Create Account</Button>
      </form>
      <p className="text-center text-sm text-warm-gray mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline">Sign in</Link>
      </p>
    </Card>
  )
}
