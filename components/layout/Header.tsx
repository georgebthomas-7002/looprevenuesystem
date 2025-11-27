'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface HeaderProps {
  navigation?: NavItem[]
}

// Default navigation structure (can be overridden by CMS)
const defaultNavigation: NavItem[] = [
  {
    label: 'Overview',
    href: '#',
    children: [
      { label: 'What Is the Loop Revenue System', href: '/overview/loop-revenue-system' },
      { label: 'Stages: Express, Tailor, Amplify, Evolve', href: '/overview/stages' },
      { label: 'Data, Metrics, and Governance', href: '/overview/data-metrics-governance' },
    ],
  },
  {
    label: 'Loops',
    href: '/loops',
    children: [
      { label: 'Four Loops Overview', href: '/loops' },
      { label: 'Loop Marketing', href: '/loops/marketing' },
      { label: 'Loop Sales', href: '/loops/sales' },
      { label: 'Loop Service', href: '/loops/service' },
      { label: 'Loop Ops', href: '/loops/ops' },
    ],
  },
  {
    label: 'Playbooks',
    href: '#',
    children: [
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'HubSpot Implementation', href: '/playbooks/hubspot' },
      { label: 'No HubSpot Implementation', href: '/playbooks/no-hubspot' },
      { label: 'AI and Humans', href: '/playbooks/ai-and-humans' },
    ],
  },
  {
    label: 'Roles',
    href: '#',
    children: [
      { label: 'Start Here', href: '/roles/start-here' },
      { label: 'Leadership and RevOps', href: '/roles/leadership-revops' },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Templates and Checklists', href: '/resources/templates-checklists' },
      { label: 'Prompts and Workflows', href: '/resources/prompts-workflows' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Workshops and Exercises', href: '/resources/workshops-exercises' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
]

export function Header({ navigation = defaultNavigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-brand-navy">
      <div className="max-w-wide mx-auto px-5 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/Loop-Revenue-System-Logo-400.png"
              alt="Loop Revenue System"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors',
                    item.children && 'cursor-default'
                  )}
                  onClick={(e) => item.children && e.preventDefault()}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform',
                      openDropdown === item.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-md shadow-lg py-2 min-w-[240px] border border-border-light">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-alt transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-white/90 hover:text-white"
                    onClick={() => {
                      if (item.children) {
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    }}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.children && (
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-transform',
                        openDropdown === item.label && 'rotate-180'
                      )} />
                    )}
                  </button>

                  {item.children && openDropdown === item.label && (
                    <div className="bg-brand-navy/50 rounded-md mx-2 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-2 text-sm text-white/80 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
