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
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Workshops and Exercises', href: '/resources/workshops-exercises' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
]

export function Footer({ columns = defaultColumns }: FooterProps) {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-wide mx-auto px-5 md:px-6 py-16">
        {/* CTA Section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Ready to build your Loop Revenue System?
            </h3>
            <p className="text-white/70 mb-6">
              Start with the model or jump straight to your role-based path.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/overview/loop-revenue-system"
                className="btn bg-white text-brand-navy hover:bg-white/90"
              >
                Learn the Model
              </Link>
              <Link
                href="/roles/start-here"
                className="btn border-2 border-white text-white hover:bg-white hover:text-brand-navy"
              >
                Start Here
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/">
              <Image
                src="/images/logo/Loop-Revenue-logo-white.png"
                alt="Loop Revenue System"
                width={160}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-white/50">
              One system. Four loops. Continuous learning.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Loop Revenue System. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
