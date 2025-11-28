import { SSOLHeader } from './ssol-header'
import { SSOLFooter } from './ssol-footer'

interface SSOLPublicLayoutProps {
  children: React.ReactNode
}

export function SSOLPublicLayout({ children }: SSOLPublicLayoutProps) {
  return (
    <>
      <SSOLHeader />
      <main className="min-h-screen">{children}</main>
      <SSOLFooter />
    </>
  )
}
