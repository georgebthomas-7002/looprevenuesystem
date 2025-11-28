import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <Card padding="lg" className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-primary mb-2">Welcome Back</h1>
        <p className="text-warm-gray">Sign in to your account</p>
      </div>
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="your@email.com" required />
        <Input label="Password" type="password" placeholder="********" required />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-warm-gray/30" />
            <span className="text-warm-gray">Remember me</span>
          </label>
          <Link href="/forgot-password" className="text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" fullWidth>Sign In</Button>
      </form>
      <p className="text-center text-sm text-warm-gray mt-6">
        Do not have an account?{' '}
        <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
      </p>
    </Card>
  )
}
