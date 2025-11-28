'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SSOLMobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
}

export function SSOLMobileMenu({ isOpen, onClose, navigation }: SSOLMobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-warm-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-warm-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-warm-gray/10">
          <span className="text-lg font-display font-semibold text-primary">Menu</span>
          <button onClick={onClose} className="p-2 text-warm-gray">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-warm-black hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-warm-gray/10 space-y-3">
            <Link href="/login" onClick={onClose}>
              <Button variant="outline" fullWidth>Log In</Button>
            </Link>
            <Link href="/signup" onClick={onClose}>
              <Button fullWidth>Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
