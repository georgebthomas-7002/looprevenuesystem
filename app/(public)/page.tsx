import Link from 'next/link'
import { getPageBySlug } from '@/lib/content/queries'
import { SectionRenderer } from '@/components/blocks/SectionRenderer'
import { JsonLd, generateWebPageSchema, generateOrganizationSchema } from '@/lib/seo'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import type { Section } from '@/lib/content/sections'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

// Generate metadata for home page
export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('')

  if (page) {
    return genMeta(page, 'page')
  }

  // Fallback metadata
  return {
    title: 'Loop Revenue System | Build a Revenue System That Learns',
    description: 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
    openGraph: {
      title: 'Loop Revenue System | Build a Revenue System That Learns',
      description: 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
      type: 'website',
    },
  }
}

// Loop Diagram SVG Component - Four interconnected loops
function LoopDiagram() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] mx-auto">
      {/* Marketing Loop - Top */}
      <a href="/loops/marketing" className="group">
        <circle
          cx="150" cy="60" r="42"
          fill="rgba(245,158,11,0.1)"
          stroke="#F59E0B"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="150" y="55" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="600">Marketing</text>
        <text x="150" y="70" textAnchor="middle" fill="#F59E0B" fontSize="9">Loop</text>
      </a>

      {/* Sales Loop - Right */}
      <a href="/loops/sales" className="group">
        <circle
          cx="240" cy="150" r="42"
          fill="rgba(16,185,129,0.1)"
          stroke="#10B981"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="240" y="145" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="600">Sales</text>
        <text x="240" y="160" textAnchor="middle" fill="#10B981" fontSize="9">Loop</text>
      </a>

      {/* Service Loop - Bottom */}
      <a href="/loops/service" className="group">
        <circle
          cx="150" cy="240" r="42"
          fill="rgba(14,165,233,0.1)"
          stroke="#0EA5E9"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="150" y="235" textAnchor="middle" fill="#0EA5E9" fontSize="11" fontWeight="600">Service</text>
        <text x="150" y="250" textAnchor="middle" fill="#0EA5E9" fontSize="9">Loop</text>
      </a>

      {/* Ops Loop - Left */}
      <a href="/loops/ops" className="group">
        <circle
          cx="60" cy="150" r="42"
          fill="rgba(100,116,139,0.1)"
          stroke="#64748B"
          strokeWidth="3"
          className="transition-all duration-200 group-hover:stroke-[5]"
        />
        <text x="60" y="145" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">Ops</text>
        <text x="60" y="160" textAnchor="middle" fill="#64748B" fontSize="9">Loop</text>
      </a>

      {/* Connection Arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#CBD5E1"/>
        </marker>
      </defs>
      <path d="M175 85 L215 120" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M215 180 L175 215" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M125 215 L85 180" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M85 120 L125 85" stroke="#CBD5E1" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
    </svg>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-brand-cyan/30 to-bg border-b border-border-light">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="lg:text-left text-center">
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Build a Revenue System That Learns From Every Conversation
            </h1>

            <p className="font-display text-xl italic text-text-secondary mb-6">
              Turn Marketing, Sales, Service, and Ops Into One Continuous Loop
            </p>

            <div className="font-body text-base text-text-secondary leading-loose space-y-4 mb-8">
              <p>
                The Loop Revenue System helps you run your entire go-to-market engine as one connected, learning system. Instead of separate funnels and handoffs, you get four loops that share data, insights, and responsibility for revenue.
              </p>
              <p>
                This site teaches you how to build that system in your own world. There is nothing to buy here&mdash;just clear explanations, examples, and playbooks you can take back to your team.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
              <Link href="/overview/loop-revenue-system" className="btn btn-primary">
                Learn the Model
              </Link>
              <Link href="/roles/start-here" className="btn btn-secondary">
                Start Here by Role
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <LoopDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

// Audience Section - "You Are In The Right Place"
function AudienceSection() {
  const roles = [
    { label: 'CEO', color: 'bg-brand-cyan text-brand-navy' },
    { label: 'RevOps', color: 'bg-loop-ops-tint text-loop-ops' },
    { label: 'Marketing', color: 'bg-loop-marketing-tint text-loop-marketing' },
    { label: 'Sales', color: 'bg-loop-sales-tint text-loop-sales' },
    { label: 'Service', color: 'bg-loop-service-tint text-loop-service' },
    { label: 'HubSpot Admin', color: 'bg-brand-cyan text-brand-navy' },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl">
          <div className="border-l-4 border-brand-light-blue pl-6 mb-8">
            <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
              You Are In The Right Place If You Own Revenue
            </h2>
          </div>

          <div className="font-body text-base text-text-secondary leading-loose space-y-4 mb-8">
            <p>
              You care about revenue, relationships, and repeatable growth. You are tired of seeing marketing, sales, service, and ops pull in different directions.
            </p>
            <p>
              You might be a CEO who wants a system that makes revenue more predictable and less reactive. You might own RevOps and feel stuck translating between teams and tools. You might run marketing, sales, or service and feel that your part of the engine works, but the whole machine still jerks and stalls.
            </p>
            <p>
              You could be the HubSpot admin or systems builder who lives in the CRM all day and wishes there were a clearer blueprint behind every field, workflow, and dashboard.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {roles.map((role) => (
              <span key={role.label} className={cn('px-3 py-1.5 rounded-full text-sm font-semibold', role.color)}>
                {role.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="nav-card">
            <h3 className="font-display text-xl font-medium text-text-primary mb-3">
              For Leaders
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Learn how to talk about revenue as one system, not separate departments. Set direction, define shared metrics, and sponsor change without getting lost in tool jargon.
            </p>
          </div>

          <div className="nav-card">
            <h3 className="font-display text-xl font-medium text-text-primary mb-3">
              For Operators &amp; Admins
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Get practical guidance on data models, lifecycle stages, automation, and governance. Connect what the business wants to what the tools actually do.
            </p>
          </div>

          <div className="nav-card">
            <h3 className="font-display text-xl font-medium text-text-primary mb-3">
              For Team Members
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Find plain-language playbooks you can apply in your next campaign, deal cycle, or onboarding sequence&mdash;without waiting for a full reorg.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Loop System Explanation Section
function LoopSystemSection() {
  const stages = [
    {
      name: 'Express',
      color: 'text-brand-teal',
      title: 'Decide how you show up',
      description: 'Each team gets clear on its strategy, voice, and process. Marketing defines its point of view and core messages. Sales defines its ideal customer, talk tracks, and stages. Service defines the customer journey after the sale. Ops defines lifecycle stages, data standards, and guardrails.',
    },
    {
      name: 'Tailor',
      color: 'text-brand-peach',
      title: 'Make it personal and contextual',
      description: 'Stop acting like every contact is the same. Marketing speaks to real goals and worries. Sales adjusts questions and offers to match the buyer in front of them. Service adapts support to the customer\'s context. Ops tunes routing and workflows so the system fits the business.',
    },
    {
      name: 'Amplify',
      color: 'text-brand-orange',
      title: 'Scale what works',
      description: 'Take what is working and help it reach more people. Marketing repurposes strong ideas across channels. Sales shares winning sequences so the whole team can use them. Service turns one helpful answer into a knowledge base article. Ops uses automation to handle more volume.',
    },
    {
      name: 'Evolve',
      color: 'text-brand-blue',
      title: 'Learn and improve every cycle',
      description: 'Look honestly at what happened and change the system so the next loop is stronger. Marketing adjusts content and channels. Sales refines its process. Service improves the experience. Ops finds bottlenecks and drives system-level changes.',
    },
  ]

  return (
    <section className="section-padding bg-bg-alt border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            What Is The Loop Revenue System?
          </h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            A way to run revenue as a continuous loop instead of a one-way funnel. Four loops work together, each moving through the same four stages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="loop-card loop-card-marketing text-center p-6">
            <h3 className="font-display text-lg font-semibold text-loop-marketing mb-2">Loop Marketing</h3>
            <p className="font-body text-sm text-text-secondary">Discovers what to say, who to say it to, and where to show up</p>
          </div>
          <div className="loop-card loop-card-sales text-center p-6">
            <h3 className="font-display text-lg font-semibold text-loop-sales mb-2">Loop Sales</h3>
            <p className="font-body text-sm text-text-secondary">Helps the right people decide with confidence</p>
          </div>
          <div className="loop-card loop-card-service text-center p-6">
            <h3 className="font-display text-lg font-semibold text-loop-service mb-2">Loop Service</h3>
            <p className="font-body text-sm text-text-secondary">Keeps customers successful, supported, and ready to stay</p>
          </div>
          <div className="loop-card loop-card-ops text-center p-6">
            <h3 className="font-display text-lg font-semibold text-loop-ops mb-2">Loop Ops</h3>
            <p className="font-body text-sm text-text-secondary">Connects the tools, data, and processes that make this possible</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-medium text-text-primary text-center mb-8">
            Each loop moves through four stages
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((stage) => (
              <div key={stage.name} className="stage-card">
                <div className={cn('stage-card-title', stage.color)}>{stage.name}</div>
                <h4 className="font-display text-lg font-medium text-text-primary mb-2">{stage.title}</h4>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// AI and Humans Section
function AiHumansSection() {
  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-text-primary mb-6">
              Built For AI And Humans, Not One Or The Other
            </h2>

            <div className="font-body text-base text-text-secondary leading-loose space-y-4 mb-6">
              <p>
                AI is part of the world your revenue engine now lives in. Ignoring it slows you down. Trusting it blindly puts your customers and your brand at risk.
              </p>
              <p>
                The Loop Revenue System helps you find the balance. AI can help you research faster, spot patterns in your data, personalize at scale, and keep an eye on your numbers in the background. Humans set the strategy, choose the trade-offs, handle exceptions, and build the relationships.
              </p>
              <p>
                This site shows you where AI can safely assist in each stage of each loop, and where a human must stay in the loop.
              </p>
            </div>

            <div className="callout callout-service">
              <p className="callout-text">
                The system comes first. AI and tools serve the system, not the other way around.
              </p>
            </div>
          </div>

          <div className="bg-bg-alt rounded-lg p-8">
            <h3 className="font-display text-xl font-medium text-text-primary mb-6 text-center">
              The Balance
            </h3>
            <div className="space-y-4">
              <div className="bg-surface rounded p-4 border border-border-light">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal text-sm font-bold">AI</span>
                  <span className="font-body font-semibold text-text-primary">AI Assists</span>
                </div>
                <p className="font-body text-sm text-text-secondary">Research, pattern recognition, personalization at scale, background monitoring</p>
              </div>
              <div className="bg-surface rounded p-4 border border-border-light">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-brand-navy/20 flex items-center justify-center text-brand-navy text-sm font-bold">H</span>
                  <span className="font-body font-semibold text-text-primary">Humans Decide</span>
                </div>
                <p className="font-body text-sm text-text-secondary">Strategy, trade-offs, exceptions, relationships, brand voice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How To Use Section
function HowToUseSection() {
  const paths = [
    {
      title: 'Learn the Model',
      description: 'Start by understanding why the Loop Revenue System exists, how it compares to funnels and flywheels, and why it matters now.',
      cta: { label: 'Read the Overview', href: '/overview/loop-revenue-system' },
    },
    {
      title: 'Follow Your Path',
      description: 'Get guidance for your specific role. See what to care about, which loops to focus on, and which pages to read in what order.',
      cta: { label: 'Find Your Role', href: '/roles/start-here' },
    },
    {
      title: 'Apply and Improve',
      description: 'Ready to build? The playbooks walk you through concrete workflows, metrics, and experiments you can implement today.',
      cta: { label: 'Explore Playbooks', href: '/playbooks/system' },
    },
  ]

  return (
    <section className="section-padding bg-bg border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            How To Use This Site
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            You do not need to read every page before you act. Move from insight to implementation in short steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={path.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-display text-xl font-semibold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-display text-xl font-medium text-text-primary mb-3">
                {path.title}
              </h3>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
                {path.description}
              </p>
              <Link href={path.cta.href} className="font-body text-brand-teal font-semibold hover:underline arrow-link">
                {path.cta.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-text-muted italic">
            The pattern stays the same: Learn a piece of the system. Apply it in your context. Watch what happens. Adjust. Then move to the next piece.
          </p>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function CtaSection() {
  return (
    <section className="section-padding-lg bg-brand-navy text-white">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
          Choose Your Next Step
        </h2>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="font-body text-lg text-white/80 leading-relaxed">
            You came here for a reason. Maybe you want more predictable revenue. Maybe you want less friction between teams. Maybe you want your data and tools to finally feel like they belong to one system.
          </p>
          <p className="font-body text-lg text-white/80 leading-relaxed mt-4">
            You do not need a hundred new ideas. You need one clear next move.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 text-left">
            <h3 className="font-display text-xl font-medium text-brand-navy mb-3">
              Understand the Full Model
            </h3>
            <p className="font-body text-text-secondary mb-6">
              If you want to understand the system before you change anything, start with the complete overview.
            </p>
            <Link href="/overview/loop-revenue-system" className="btn bg-brand-orange text-white border-brand-orange hover:bg-brand-orange/90 hover:border-brand-orange/90 w-full justify-center">
              What Is the Loop Revenue System
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 text-left">
            <h3 className="font-display text-xl font-medium text-brand-navy mb-3">
              Get a Guided Path
            </h3>
            <p className="font-body text-text-secondary mb-6">
              If you know your role and want a path that speaks directly to your work, start here.
            </p>
            <Link href="/roles/start-here" className="btn btn-secondary w-full justify-center">
              Start Here by Role
            </Link>
          </div>
        </div>

        <p className="font-body text-white/60 mt-10 text-sm">
          Pick the path that feels most useful right now. You can explore the rest of the Loop Revenue System once you have taken that next step.
        </p>
      </div>
    </section>
  )
}

// Default Home Page Component (used when CMS has no content)
function DefaultHomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <LoopSystemSection />
      <AiHumansSection />
      <HowToUseSection />
      <CtaSection />
    </>
  )
}

export default async function HomePage() {
  // Try to fetch home page from CMS (slug is empty string for home)
  const page = await getPageBySlug('')

  // If page has sections from CMS, use those; otherwise use default
  const hasCmsContent = page?.sections && Array.isArray(page.sections) && page.sections.length > 0
  const sections = hasCmsContent ? (page.sections as unknown as Section[]) : null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema({
            title: page?.title || 'Loop Revenue System',
            description: page?.description || 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
            url: siteUrl,
            datePublished: page?.publishedAt,
            dateModified: page?.updatedAt,
          }),
        ]}
      />
      {sections ? <SectionRenderer sections={sections} /> : <DefaultHomePage />}
    </>
  )
}
