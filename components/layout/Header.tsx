'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight } from 'lucide-react'
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
        label: 'FAQ',
        href: '/resources/faqs',
        description: 'Common questions answered'
      },
    ],
  },
]

// Loop color configurations
const loopColors = {
  marketing: {
    border: 'border-l-[#028393]',
    bg: 'bg-[#028393]/5',
    hoverBg: 'hover:bg-[#028393]/10',
    dot: 'bg-[#028393]',
  },
  sales: {
    border: 'border-l-[#f65625]',
    bg: 'bg-[#f65625]/5',
    hoverBg: 'hover:bg-[#f65625]/10',
    dot: 'bg-[#f65625]',
  },
  service: {
    border: 'border-l-[#faaa68]',
    bg: 'bg-[#faaa68]/5',
    hoverBg: 'hover:bg-[#faaa68]/10',
    dot: 'bg-[#faaa68]',
  },
  ops: {
    border: 'border-l-[#3D5A80]',
    bg: 'bg-[#3D5A80]/5',
    hoverBg: 'hover:bg-[#3D5A80]/10',
    dot: 'bg-[#3D5A80]',
  },
}

// Animated hamburger icon component
function HamburgerIcon({ isOpen, className }: { isOpen: boolean; className?: string }) {
  return (
    <div className={cn('relative w-6 h-5 flex flex-col justify-center', className)}>
      <span
        className={cn(
          'absolute h-0.5 w-6 bg-[#142d63] rounded-full transition-all duration-300 ease-out',
          isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0.5'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-6 bg-[#142d63] rounded-full transition-all duration-300 ease-out top-1/2 -translate-y-1/2',
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-6 bg-[#142d63] rounded-full transition-all duration-300 ease-out',
          isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0.5'
        )}
      />
    </div>
  )
}

export function Header({ navigation = defaultNavigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setMobileOpenSection(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle mouse enter with immediate open
  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(label)
  }, [])

  // Handle mouse leave with delay
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }, [])

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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
        setOpenDropdown(null)
        setMobileOpenSection(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
    setMobileOpenSection(null)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] border-b border-[#142d63]/5'
            : 'bg-white border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20" ref={menuRef}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-10">
              <Image
                src="/images/logo/Loop-Revenue-System-Logo-400.png"
                alt="Loop Revenue System"
                width={180}
                height={45}
                className="h-8 sm:h-9 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
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
                      'group flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium transition-colors relative',
                      openDropdown === section.label
                        ? 'text-[#028393]'
                        : 'text-[#142d63] hover:text-[#028393]'
                    )}
                    onClick={() => setOpenDropdown(openDropdown === section.label ? null : section.label)}
                    aria-expanded={openDropdown === section.label}
                    aria-haspopup="true"
                  >
                    {section.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        openDropdown === section.label && 'rotate-180'
                      )}
                    />
                    {/* Hover underline */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-0.5 bg-[#028393] transform origin-left transition-transform duration-200',
                        openDropdown === section.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
                      openDropdown === section.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-[#142d63]/10 overflow-hidden min-w-[380px] max-w-[520px]">
                      {/* Section Header */}
                      {section.description && (
                        <div className="px-5 py-4 bg-gradient-to-r from-[#E0FBFC] to-[#E0FBFC]/50 border-b border-[#028393]/10">
                          <p className="text-base font-semibold text-[#142d63]">{section.label}</p>
                          <p className="text-sm text-[#3D5A80] mt-0.5">{section.description}</p>
                        </div>
                      )}

                      <div className="p-3">
                        {/* Featured Card */}
                        {section.featured && (
                          <Link
                            href={section.featured.href}
                            className="block mb-3 p-4 bg-gradient-to-br from-[#028393]/5 via-[#E0FBFC]/50 to-[#98C1D9]/20 rounded-xl hover:from-[#028393]/10 hover:via-[#E0FBFC]/70 hover:to-[#98C1D9]/30 transition-all duration-200 group border border-[#028393]/10"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#028393]/10">
                                    <span className="w-2 h-2 rounded-full bg-[#028393]" />
                                  </span>
                                  <p className="text-base font-semibold text-[#142d63] group-hover:text-[#028393] transition-colors">
                                    {section.featured.title}
                                  </p>
                                </div>
                                <p className="text-sm text-[#3D5A80] mt-2 leading-relaxed">
                                  {section.featured.description}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-[#028393] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-1" />
                            </div>
                          </Link>
                        )}

                        {/* Links List */}
                        <div className="space-y-0.5">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className={cn(
                                'block p-3 rounded-xl transition-all duration-150 group/link',
                                link.loopType
                                  ? cn(
                                      'border-l-[3px] pl-4',
                                      loopColors[link.loopType].border,
                                      loopColors[link.loopType].bg,
                                      loopColors[link.loopType].hoverBg
                                    )
                                  : 'hover:bg-[#E0FBFC]/50'
                              )}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-2">
                                {link.loopType && (
                                  <span className={cn('w-1.5 h-1.5 rounded-full', loopColors[link.loopType].dot)} />
                                )}
                                <p className={cn(
                                  'font-medium text-base transition-colors',
                                  link.loopType
                                    ? 'text-[#142d63]'
                                    : 'text-[#142d63] group-hover/link:text-[#028393]'
                                )}>
                                  {link.label}
                                </p>
                              </div>
                              {link.description && (
                                <p className={cn(
                                  'text-sm text-[#3D5A80]/80 mt-1 line-clamp-1',
                                  link.loopType && 'ml-3.5'
                                )}>
                                  {link.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/roles/start-here"
                className="ml-3 px-5 py-2.5 bg-[#f65625] text-white text-sm font-semibold rounded-full hover:bg-[#f65625]/90 hover:shadow-lg hover:shadow-[#f65625]/25 active:scale-[0.98] transition-all duration-200"
              >
                Start Here
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-[#142d63]/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-opacity duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#142d63]/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-[#142d63]/10">
            <span className="text-base font-semibold text-[#142d63]">Menu</span>
            <button
              type="button"
              className="p-2 -mr-2 rounded-xl hover:bg-[#142d63]/5 transition-colors"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <HamburgerIcon isOpen={true} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="h-[calc(100%-4rem)] overflow-y-auto overscroll-contain">
            <div className="px-4 py-4">
              {navigation.map((section) => (
                <div key={section.label} className="border-b border-[#142d63]/5 last:border-0">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-4 text-left group"
                    onClick={() => setMobileOpenSection(mobileOpenSection === section.label ? null : section.label)}
                    aria-expanded={mobileOpenSection === section.label}
                  >
                    <span className="font-semibold text-[#142d63] group-hover:text-[#028393] transition-colors">
                      {section.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-[#3D5A80] transition-transform duration-200',
                        mobileOpenSection === section.label && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Expandable Section */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-out',
                      mobileOpenSection === section.label ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="pb-4 space-y-1">
                      {/* Section Description */}
                      {section.description && (
                        <p className="text-sm text-[#3D5A80] px-1 pb-2">{section.description}</p>
                      )}

                      {/* Featured Card for Mobile */}
                      {section.featured && (
                        <Link
                          href={section.featured.href}
                          className="block p-4 mb-2 bg-gradient-to-br from-[#028393]/5 to-[#E0FBFC]/50 rounded-xl border border-[#028393]/10 active:scale-[0.99] transition-transform"
                          onClick={closeMobileMenu}
                        >
                          <p className="font-semibold text-[#028393] text-base">
                            {section.featured.title}
                          </p>
                          <p className="text-sm text-[#3D5A80] mt-1 leading-relaxed">
                            {section.featured.description}
                          </p>
                        </Link>
                      )}

                      {/* Links */}
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            'block p-3 rounded-xl active:scale-[0.99] transition-all',
                            link.loopType
                              ? cn(
                                  'border-l-[3px] ml-1',
                                  loopColors[link.loopType].border,
                                  loopColors[link.loopType].bg
                                )
                              : 'hover:bg-[#E0FBFC]/30'
                          )}
                          onClick={closeMobileMenu}
                        >
                          <div className="flex items-center gap-2">
                            {link.loopType && (
                              <span className={cn('w-2 h-2 rounded-full', loopColors[link.loopType].dot)} />
                            )}
                            <span className="font-medium text-base text-[#142d63]">{link.label}</span>
                          </div>
                          {link.description && (
                            <p className={cn(
                              'text-sm text-[#3D5A80]/70 mt-1',
                              link.loopType && 'ml-4'
                            )}>
                              {link.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="sticky bottom-0 p-4 bg-gradient-to-t from-white via-white to-white/80 border-t border-[#142d63]/5">
              <Link
                href="/roles/start-here"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#f65625] text-white font-semibold rounded-xl hover:bg-[#f65625]/90 active:scale-[0.98] transition-all shadow-lg shadow-[#f65625]/20"
                onClick={closeMobileMenu}
              >
                Start Here
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
