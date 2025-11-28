import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Start Here | Loop Revenue System',
  description: 'Pick your role and find your path through the Loop Revenue System. Tailored guidance for CEOs, RevOps, Marketing, Sales, Service leaders, and Admins.',
  openGraph: {
    title: 'Start Here | Loop Revenue System',
    description: 'Pick your role and find your path through the Loop Revenue System. Tailored guidance for CEOs, RevOps, Marketing, Sales, Service leaders, and Admins.',
  },
}

// Role data structure
interface RoleQuickStep {
  label: string
  href: string
}

interface RoleData {
  id: string
  title: string
  subtitle: string
  color: string
  bgColor: string
  borderColor: string
  careAbout: string[]
  quickPath: RoleQuickStep[]
  firstMove: {
    text: string
    href: string
  }
}

const roles: RoleData[] = [
  {
    id: 'ceo',
    title: 'CEO / Founder',
    subtitle: 'Strategic oversight and revenue accountability',
    color: '#142d63',
    bgColor: 'bg-[#142d63]/5',
    borderColor: 'border-[#142d63]/20',
    careAbout: [
      'Revenue predictability and growth trajectory',
      'Team alignment across departments',
      'ROI on tools, people, and processes',
      'Board-ready metrics and narratives',
    ],
    quickPath: [
      { label: 'Loop Revenue System Overview', href: '/overview/loop-revenue-system' },
      { label: 'The Four Loops', href: '/loops' },
      { label: 'Data, Metrics & Governance', href: '/overview/data-metrics-governance' },
      { label: 'System Playbooks', href: '/playbooks/system' },
    ],
    firstMove: {
      text: 'Start with the Loop Revenue System Overview to see how all the pieces connect.',
      href: '/overview/loop-revenue-system',
    },
  },
  {
    id: 'revops',
    title: 'RevOps / Operations',
    subtitle: 'System architecture and cross-functional alignment',
    color: '#3D5A80',
    bgColor: 'bg-[#3D5A80]/5',
    borderColor: 'border-[#3D5A80]/20',
    careAbout: [
      'Clean data and reliable reporting',
      'Process automation and scalability',
      'Cross-team handoffs and SLAs',
      'Tool stack optimization',
    ],
    quickPath: [
      { label: 'Ops Loop', href: '/loops/ops' },
      { label: 'Data, Metrics & Governance', href: '/overview/data-metrics-governance' },
      { label: 'HubSpot Implementation', href: '/playbooks/hubspot' },
      { label: 'Non-HubSpot Implementation', href: '/playbooks/no-hubspot' },
      { label: 'AI And Humans', href: '/playbooks/ai-and-humans' },
    ],
    firstMove: {
      text: 'Start with the Ops Loop to understand how operations powers every other loop.',
      href: '/loops/ops',
    },
  },
  {
    id: 'marketing',
    title: 'Marketing Leader',
    subtitle: 'Demand generation and pipeline contribution',
    color: '#028393',
    bgColor: 'bg-[#028393]/5',
    borderColor: 'border-[#028393]/20',
    careAbout: [
      'Lead quality and pipeline contribution',
      'Campaign performance and attribution',
      'Brand consistency across touchpoints',
      'Marketing-to-Sales handoff clarity',
    ],
    quickPath: [
      { label: 'Marketing Loop', href: '/loops/marketing' },
      { label: 'The Four Stages', href: '/overview/stages' },
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'AI And Humans', href: '/playbooks/ai-and-humans' },
    ],
    firstMove: {
      text: 'Start with the Marketing Loop to see how demand flows into the revenue system.',
      href: '/loops/marketing',
    },
  },
  {
    id: 'sales',
    title: 'Sales Leader',
    subtitle: 'Pipeline conversion and revenue capture',
    color: '#f65625',
    bgColor: 'bg-[#f65625]/5',
    borderColor: 'border-[#f65625]/20',
    careAbout: [
      'Pipeline velocity and conversion rates',
      'Rep productivity and quota attainment',
      'Deal visibility and forecasting accuracy',
      'Handoff quality from Marketing and to Service',
    ],
    quickPath: [
      { label: 'Sales Loop', href: '/loops/sales' },
      { label: 'The Four Stages', href: '/overview/stages' },
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'AI And Humans', href: '/playbooks/ai-and-humans' },
    ],
    firstMove: {
      text: 'Start with the Sales Loop to see how conversations become customers.',
      href: '/loops/sales',
    },
  },
  {
    id: 'service',
    title: 'Service / Success Leader',
    subtitle: 'Customer retention and expansion',
    color: '#faaa68',
    bgColor: 'bg-[#faaa68]/10',
    borderColor: 'border-[#faaa68]/30',
    careAbout: [
      'Onboarding speed and first-value delivery',
      'Retention, renewal, and churn prevention',
      'Expansion revenue and upsell timing',
      'Customer health and advocacy',
    ],
    quickPath: [
      { label: 'Service Loop', href: '/loops/service' },
      { label: 'The Four Stages', href: '/overview/stages' },
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'AI And Humans', href: '/playbooks/ai-and-humans' },
    ],
    firstMove: {
      text: 'Start with the Service Loop to see how customers become advocates.',
      href: '/loops/service',
    },
  },
  {
    id: 'admin',
    title: 'Admin / System Owner',
    subtitle: 'Technical implementation and maintenance',
    color: '#3D5A80',
    bgColor: 'bg-[#3D5A80]/5',
    borderColor: 'border-[#3D5A80]/20',
    careAbout: [
      'System stability and uptime',
      'User adoption and training',
      'Integration health and data sync',
      'Documentation and change management',
    ],
    quickPath: [
      { label: 'HubSpot Implementation', href: '/playbooks/hubspot' },
      { label: 'Non-HubSpot Implementation', href: '/playbooks/no-hubspot' },
      { label: 'Ops Loop', href: '/loops/ops' },
      { label: 'Data, Metrics & Governance', href: '/overview/data-metrics-governance' },
    ],
    firstMove: {
      text: 'Start with the implementation guide for your platform to map the system to your tools.',
      href: '/playbooks/hubspot',
    },
  },
  {
    id: 'manyhats',
    title: 'Wearing Many Hats',
    subtitle: 'Small team doing it all',
    color: '#028393',
    bgColor: 'bg-gradient-to-br from-[#028393]/5 via-[#f65625]/5 to-[#3D5A80]/5',
    borderColor: 'border-[#028393]/20',
    careAbout: [
      'Doing more with less',
      'Prioritizing what moves the needle',
      'Simple systems that scale',
      'Avoiding complexity traps',
    ],
    quickPath: [
      { label: 'Loop Revenue System Overview', href: '/overview/loop-revenue-system' },
      { label: 'The Four Stages', href: '/overview/stages' },
      { label: 'System Playbooks', href: '/playbooks/system' },
      { label: 'Your Platform Guide', href: '/playbooks/hubspot' },
    ],
    firstMove: {
      text: 'Start with the Stages Overview to see how small improvements compound across the whole system.',
      href: '/overview/stages',
    },
  },
]

// Role Navigation Component
function RoleNav() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
        Jump to Your Role
      </h3>
      <div className="flex flex-wrap gap-2">
        {roles.map((role) => (
          <a
            key={role.id}
            href={`#${role.id}`}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: `${role.color}10`,
              color: role.color,
              border: `1px solid ${role.color}30`,
            }}
          >
            {role.title}
          </a>
        ))}
      </div>
    </div>
  )
}

// Role Card Component
function RoleCard({ role }: { role: RoleData }) {
  return (
    <section
      id={role.id}
      className={`${role.bgColor} border ${role.borderColor} rounded-2xl p-8 scroll-mt-24`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-2xl md:text-3xl font-display font-bold mb-2"
          style={{ color: role.color }}
        >
          {role.title}
        </h2>
        <p className="text-text-secondary">{role.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* What You Care About */}
        <div>
          <h3 className="text-lg font-semibold text-brand-navy mb-4">
            What You Care About
          </h3>
          <ul className="space-y-3">
            {role.careAbout.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: role.color }}
                />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Quick Path */}
        <div>
          <h3 className="text-lg font-semibold text-brand-navy mb-4">
            Your Quick Path
          </h3>
          <ol className="space-y-3">
            {role.quickPath.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: role.color }}
                >
                  {index + 1}
                </span>
                <Link
                  href={step.href}
                  className="text-brand-navy hover:underline font-medium"
                >
                  {step.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* First Move CTA */}
      <div className="mt-8 pt-6 border-t" style={{ borderColor: `${role.color}20` }}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: role.color }}>
              Your First Move
            </span>
            <p className="text-text-secondary mt-1">{role.firstMove.text}</p>
          </div>
          <Link
            href={role.firstMove.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
            style={{ backgroundColor: role.color }}
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Path Card Component
function PathCard({
  title,
  description,
  href,
  color,
}: {
  title: string
  description: string
  href: string
  color: string
}) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <h3
        className="text-xl font-display font-bold mb-2 group-hover:underline"
        style={{ color }}
      >
        {title}
      </h3>
      <p className="text-text-secondary text-sm">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color }}>
        <span>Explore</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  )
}

export default function StartHerePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#E0FBFC] via-white to-[#98C1D9]/20">
        <div className="container-content">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#028393] uppercase tracking-wider mb-4">
              Start Here
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-navy mb-6">
              Pick Your Role.{' '}
              <span className="text-[#028393]">Pick Your Next Step.</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              The Loop Revenue System works for everyone, but everyone enters differently.
              Find your role below and follow the path that matches your priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="container-content">
          <RoleNav />
        </div>
      </section>

      {/* Role Cards */}
      <section className="section-padding">
        <div className="container-content">
          <div className="space-y-8">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </section>

      {/* Wrap-Up Section */}
      <section className="section-padding bg-gradient-to-br from-[#142d63] to-[#1e3a5f]">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            That's okay. The Loop Revenue System is designed to meet you where you are.
            Here are three paths based on what you need most right now.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <PathCard
              title="Understand the System"
              description="Get the big picture. Learn how the four loops and four stages create a complete revenue engine."
              href="/overview/loop-revenue-system"
              color="#028393"
            />
            <PathCard
              title="Design Your Approach"
              description="See the playbooks. Find the right experiments for your stage and your goals."
              href="/playbooks/system"
              color="#f65625"
            />
            <PathCard
              title="Build It in Your Platform"
              description="Get hands-on. Map the system to your tools and start implementing today."
              href="/playbooks/hubspot"
              color="#3D5A80"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-content text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">
              Ready to Explore?
            </h2>
            <p className="text-text-secondary mb-8">
              Jump into any section that interests you. The Loop Revenue System
              is interconnected: every page links to related concepts and next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/loops"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#028393] text-white rounded-lg font-semibold hover:bg-[#026d7a] transition-colors"
              >
                Explore the Four Loops
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/overview/stages"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy border-2 border-brand-navy rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-colors"
              >
                See the Four Stages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Start Here | Loop Revenue System',
            description: 'Pick your role and find your path through the Loop Revenue System.',
            mainEntity: {
              '@type': 'ItemList',
              name: 'Role-Based Navigation',
              itemListElement: roles.map((role, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: role.title,
                description: role.subtitle,
              })),
            },
          }),
        }}
      />
    </main>
  )
}
