import { PublicLayout } from '@/components/layout'

export default function PublicPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PublicLayout>{children}</PublicLayout>
}
