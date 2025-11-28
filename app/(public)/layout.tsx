import { SSOLPublicLayout } from '@/components/layout/SSOLPublicLayout'

export default function PublicPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SSOLPublicLayout>{children}</SSOLPublicLayout>
}
