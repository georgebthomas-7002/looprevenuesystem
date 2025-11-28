import { SSOLMemberNav } from '@/components/layout/ssol-member-nav'

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SSOLMemberNav />
      <main className="min-h-screen bg-warm-white py-8">
        <div className="container-wide">{children}</div>
      </main>
    </>
  )
}
