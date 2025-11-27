import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Mic,
  Menu,
  LogOut,
  Map
} from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-bg-alt flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white flex-shrink-0 hidden md:block">
        <div className="p-5 border-b border-white/10">
          <Link href="/admin" className="font-display text-lg font-semibold">
            Loop CMS
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/pages"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/admin/blog"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Blog Posts
              </Link>
            </li>
            <li>
              <Link
                href="/admin/podcast"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
              >
                <Mic className="w-5 h-5" />
                Podcast
              </Link>
            </li>
            <li>
              <Link
                href="/admin/sitemap"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10 transition-colors"
              >
                <Map className="w-5 h-5" />
                Sitemap & Nav
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-white/10">
          <div className="text-sm text-white/70 mb-2">
            {session.user?.email}
          </div>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-brand-navy text-white p-4 flex items-center justify-between">
          <Link href="/admin" className="font-display text-lg font-semibold">
            Loop CMS
          </Link>
          <button type="button" className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
