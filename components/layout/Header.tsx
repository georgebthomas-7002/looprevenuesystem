'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface NavLink {
  label: string
  href: string
  description?: string
  loopType?: 'marketing' | 'sales' | 'service' | 'ops'
}

interface NavSection {
  label: string
  href?: string
  description?: string
  featured?: {
    title: string
    description: string
    href: string
    image?: string
  }
  links: NavLink[]
}

interface HeaderProps {
  navigation?: NavSection[]
}

// Default mega-menu navigation structure
const defaultNavigation: NavSection[] = [
  {
    label: 'Overview',
    description: 'Understand the Loop Revenue System',
    featured: {
      title: 'What Is the Loop Revenue System?',
      description: 'Learn how to run revenue as one continuous, learning system instead of disconnected funnels.',
      href: '/overview/loop-revenue-system',
    },
    links: [
      {
        label: 'Stages: Express, Tailor, Amplify, Evolve',
        href: '/overview/stages',
        description: 'The four stages that power every loop'
      },
      {
        label: 'Data, Metrics, and Governance',
        href: '/overview/data-metrics-governance',
        description: 'How to measure and manage your system'
      },
    ],
  },
  {
    label: 'Loops',
    href: '/loops',
    description: 'Deep dive into each loop',
    links: [
      {
        label: 'Four Loops Overview',
        href: '/loops',
        description: 'See how all four loops connect'
      },
      {
        label: 'Loop Marketing',
        href: '/loops/marketing',
        description: 'Discover what to say and where to show up',
        loopType: 'marketing'
      },
      {
        label: 'Loop Sales',
        href: '/loops/sales',
        description: 'Help the right people decide with confidence',
        loopType: 'sales'
      },
      {
        label: 'Loop Service',
        href: '/loops/service',
        description: 'Keep customers successful and supported',
        loopType: 'service'
      },
      {
        label: 'Loop Ops',
        href: '/loops/ops',
        description: 'Connect tools, data, and processes',
        loopType: 'ops'
      },
    ],
  },
  {
    label: 'Playbooks',
    description: 'Practical implementation guides',
    links: [
      {
        label: 'System Playbooks',
        href: '/playbooks/system',
        description: 'End-to-end implementation guides'
      },
      {
        label: 'HubSpot Implementation',
        href: '/playbooks/hubspot',
        description: 'Build loops using HubSpot'
      },
      {
        label: 'No HubSpot Implementation',
        href: '/playbooks/no-hubspot',
        description: 'Build loops with other tools'
      },
      {
        label: 'AI and Humans',
        href: '/playbooks/ai-and-humans',
        description: 'Balance automation with human judgment'
      },
    ],
  },
  {
    label: 'Roles',
    description: 'Guidance for your specific role',
    featured: {
      title: 'Start Here',
      description: 'Get a personalized path based on your role and what you want to accomplish.',
      href: '/roles/start-here',
    },
    links: [
      {
        label: 'Leadership and RevOps',
        href: '/roles/leadership-revops',
        description: 'For executives and revenue operations'
      },
    ],
  },
  {
    label: 'Resources',
    description: 'Tools, templates, and learning',
    links: [
      {
        label: 'Templates and Checklists',
        href: '/resources/templates-checklists',
        description: 'Ready-to-use documents and frameworks'
      },
      {
        label: 'Prompts and Workflows',
        href: '/resources/prompts-workflows',
        description: 'AI prompts and automation templates'
      },
      {
        label: 'Case Studies',
        href: '/resources/case-studies',
        description: 'Real-world implementation examples'
      },
      {
        label: 'Workshops and Exercises',
        href: '/resources/workshops-exercises',
        description: 'Interactive learning activities'
      },
      {
        label: 'FAQ',
        href: '/resources/faq',
        description: 'Common questions answered'
      },
    ],
  },
]

// Loop color map
const loopColors = {
  marketing: 'border-l-loop-marketing bg-loop-marketing-light',
  sales: 'border-l-loop-sales bg-loop-sales-light',
  service: 'border-l-loop-service bg-loop-service-light',
  ops: 'border-l-loop-ops bg-loop-ops-light',
}

export function Header({ navigation = defaultNavigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle mouse enter with delay
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(label)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-brand-navy transition-shadow duration-200',
        isScrolled && 'shadow-lg'
      )}
    >
      <div className="max-w-wide mx-auto px-5 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20" ref={menuRef}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/images/logo/Loop-Revenue-System-Logo-400.png"
              alt="Loop Revenue System"
              width={180}
              height={45}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navigation.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors',
                    openDropdown === section.label
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  )}
                  onClick={() => setOpenDropdown(openDropdown === section.label ? null : section.label)}
                >
                  {section.label}
                  <ChevronDown className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    openDropdown === section.label && 'rotate-180'
                  )} />
                </button>

                {/* Mega Menu Dropdown */}
                {openDropdown === section.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-border-light overflow-hidden min-w-[400px] max-w-[560px]">
                      {/* Header */}
                      {section.description && (
                        <div className="px-6 py-4 bg-bg-alt border-b border-border-light">
                          <p className="text-sm font-semibold text-text-primary">{section.label}</p>
                          <p className="text-xs text-text-muted">{section.description}</p>
                        </div>
                      )}

                      <div className="p-4">
                        {/* Featured Card */}
                        {section.featured && (
                          <Link
                            href={section.featured.href}
                            className="block mb-4 p-4 bg-gradient-to-br from-brand-cyan/20 to-brand-light-blue/10 rounded-lg hover:from-brand-cyan/30 hover:to-brand-light-blue/20 transition-colors group"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-display font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                                  {section.featured.title}
                                </p>
                                <p className="text-sm text-text-secondary mt-1">
                                  {section.featured.description}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                            </div>
                          </Link>
                        )}

                        {/* Links Grid */}
                        <div className={cn(
                          'grid gap-1',
                          section.links.length > 4 ? 'grid-cols-2' : 'grid-cols-1'
                        )}>
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={cn(
                                'block p-3 rounded-lg transition-colors group',
                                link.loopType
                                  ? cn('border-l-4', loopColors[link.loopType])
                                  : 'hover:bg-bg-alt'
                              )}
                            >
                              <p className={cn(
                                'font-medium text-sm transition-colors',
                                link.loopType
                                  ? 'text-text-primary'
                                  : 'text-text-primary group-hover:text-brand-teal'
                              )}>
                                {link.label}
                              </p>
                              {link.description && (
                                <p className="text-xs text-text-muted mt-0.5 line-clamp-1">
                                  {link.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/roles/start-here"
              className="ml-4 px-4 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Start Here
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="max-w-wide mx-auto px-5 pb-6 bg-brand-navy border-t border-white/10">
          <div className="space-y-1 pt-4">
            {navigation.map((section) => (
              <div key={section.label} className="border-b border-white/5 last:border-0">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-3 text-left"
                  onClick={() => setOpenDropdown(openDropdown === section.label ? null : section.label)}
                  aria-expanded={openDropdown === section.label}
                >
                  <span className="font-medium text-white">{section.label}</span>
                  <ChevronDown className={cn(
                    'w-5 h-5 text-white/60 transition-transform duration-200',
                    openDropdown === section.label && 'rotate-180'
                  )} />
                </button>

                <div className={cn(
                  'overflow-hidden transition-all duration-200',
                  openDropdown === section.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className="pb-3 space-y-1">
                    {/* Featured link for mobile */}
                    {section.featured && (
                      <Link
                        href={section.featured.href}
                        className="block mx-2 px-4 py-3 bg-white/5 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block font-medium text-brand-peach text-sm">
                          {section.featured.title}
                        </span>
                        <span className="block text-xs text-white/60 mt-0.5">
                          {section.featured.description}
                        </span>
                      </Link>
                    )}

                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'block mx-2 px-4 py-2.5 rounded-lg text-sm transition-colors',
                          link.loopType
                            ? cn('border-l-4 ml-4', loopColors[link.loopType].replace('bg-', 'bg-white/5 '))
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block font-medium">{link.label}</span>
                        {link.description && (
                          <span className="block text-xs text-white/50 mt-0.5">{link.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/roles/start-here"
              className="block w-full px-4 py-3 bg-brand-orange text-white text-center font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Here
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
