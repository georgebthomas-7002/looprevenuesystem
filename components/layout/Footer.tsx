import Link from 'next/link'
import Image from 'next/image'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  columns?: FooterColumn[]
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Overview',
    links: [
      { label: 'What Is the Loop Revenue System', href: '/overview/loop-revenue-system' },
      { label: 'Stages: Express, Tailor, Amplify, Evolve', href: '/overview/stages' },
      { label: 'Data, Metrics, and Governance', href: '/overview/data-metrics-governance' },
    ],
  },
  {
    title: 'The Four Loops',
    links: [
      { label: 'Four Loops Overview', href: '/loops' },
      { label: 'Loop Marketing', href: '/loops/marketing' },
      { label: 'Loop Sales', href: '/loops/sales' },
      { label: 'Loop Service', href: '/loops/service' },
      { label: 'Loop Ops', href: '/loops/ops' },
    ],
  },
  {
    title: 'Playbooks',
    links: [
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'HubSpot Implementation', href: '/playbooks/hubspot' },
      { label: 'No HubSpot Implementation', href: '/playbooks/no-hubspot' },
      { label: 'AI and Humans', href: '/playbooks/ai-and-humans' },
    ],
  },
  {
    title: 'By Role',
    links: [
      { label: 'Start Here', href: '/roles/start-here' },
      { label: 'Leadership and RevOps', href: '/roles/leadership-revops' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Templates and Checklists', href: '/resources/templates-checklists' },
      { label: 'Prompts and Workflows', href: '/resources/prompts-workflows' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
]

export function Footer({ columns = defaultColumns }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy">
      {/* Main Navigation */}
      <div className="max-w-wide mx-auto px-5 md:px-6 py-12 md:py-16">
        {/* Logo and Tagline - Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 mb-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Link href="/" className="block">
              <Image
                src="/images/logo/Loop-Revenue-logo-white.png"
                alt="Loop Revenue System"
                width={180}
                height={45}
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
          <p className="font-display text-lg text-white/60 italic">
            One system. Four loops. Continuous learning.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-base text-white/70 hover:text-white transition-colors leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-wide mx-auto px-5 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/50 order-2 md:order-1">
              &copy; {currentYear} Loop Revenue System. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link
                href="/privacy"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
