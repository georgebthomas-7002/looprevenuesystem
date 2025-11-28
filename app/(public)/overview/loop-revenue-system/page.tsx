import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'What Is the Loop Revenue System | Complete Overview',
  description: 'A simple way to run revenue as a continuous learning system. Four connected loops (Marketing, Sales, Service, and Ops) moving through Express, Tailor, Amplify, and Evolve.',
  openGraph: {
    title: 'What Is the Loop Revenue System | Complete Overview',
    description: 'Learn how the Loop Revenue System transforms your revenue engine into four connected loops that share data, insights, and responsibility for revenue.',
    type: 'article',
  },
}

// Loop Diagram SVG with stages ring
function LoopSystemDiagram() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[400px] mx-auto">
      {/* Outer ring for stages */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="#E0FBFC" strokeWidth="30" opacity="0.5" />

      {/* Stage labels on outer ring */}
      <text x="200" y="35" textAnchor="middle" fill="#028393" fontSize="12" fontWeight="600">EXPRESS</text>
      <text x="365" y="205" textAnchor="middle" fill="#faaa68" fontSize="12" fontWeight="600">TAILOR</text>
      <text x="200" y="385" textAnchor="middle" fill="#f65625" fontSize="12" fontWeight="600">AMPLIFY</text>
      <text x="35" y="205" textAnchor="middle" fill="#3D5A80" fontSize="12" fontWeight="600">EVOLVE</text>

      {/* Marketing Loop - Top */}
      <a href="/loops/marketing" className="group">
        <circle cx="200" cy="100" r="45" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" strokeWidth="3" />
        <text x="200" y="95" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="600">Marketing</text>
        <text x="200" y="110" textAnchor="middle" fill="#F59E0B" fontSize="10">Loop</text>
      </a>

      {/* Sales Loop - Right */}
      <a href="/loops/sales" className="group">
        <circle cx="300" cy="200" r="45" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="3" />
        <text x="300" y="195" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="600">Sales</text>
        <text x="300" y="210" textAnchor="middle" fill="#10B981" fontSize="10">Loop</text>
      </a>

      {/* Service Loop - Bottom */}
      <a href="/loops/service" className="group">
        <circle cx="200" cy="300" r="45" fill="rgba(14,165,233,0.15)" stroke="#0EA5E9" strokeWidth="3" />
        <text x="200" y="295" textAnchor="middle" fill="#0EA5E9" fontSize="12" fontWeight="600">Service</text>
        <text x="200" y="310" textAnchor="middle" fill="#0EA5E9" fontSize="10">Loop</text>
      </a>

      {/* Ops Loop - Left */}
      <a href="/loops/ops" className="group">
        <circle cx="100" cy="200" r="45" fill="rgba(100,116,139,0.15)" stroke="#64748B" strokeWidth="3" />
        <text x="100" y="195" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="600">Ops</text>
        <text x="100" y="210" textAnchor="middle" fill="#64748B" fontSize="10">Loop</text>
      </a>

      {/* Connection arrows */}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#94A3B8"/>
        </marker>
      </defs>
      <path d="M230 125 L270 170" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
      <path d="M270 230 L230 275" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
      <path d="M170 275 L130 230" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
      <path d="M130 170 L170 125" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
    </svg>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-brand-cyan/20 to-bg border-b border-border-light">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
              The Complete Overview
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              What Is The Loop Revenue System?
            </h1>
            <p className="font-display text-xl italic text-text-secondary mb-6">
              A simple way to run revenue as a continuous learning system.
            </p>
            <div className="font-body text-base text-text-secondary leading-loose space-y-4">
              <p>
                Most revenue models were built for a world of straight-line funnels and one-time deals. Buyers don&apos;t move that way anymore. They learn, compare, talk to peers, ask AI, buy, use, renew, and refer&mdash;in loops.
              </p>
              <p>
                The Loop Revenue System matches that reality. It treats your revenue engine as <strong className="text-text-primary">four connected loops</strong>&mdash;Marketing, Sales, Service, and Ops&mdash;that all move through the same <strong className="text-text-primary">four stages</strong>: Express, Tailor, Amplify, and Evolve.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <LoopSystemDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Funnels Aren't Enough
function FunnelProblemSection() {
  const problems = [
    { title: 'Teams blame each other', desc: 'when targets slip' },
    { title: 'Important insights never leave', desc: 'the department that saw them' },
    { title: 'Data breaks', desc: 'and dashboards tell different stories' },
    { title: 'AI tools get added', desc: 'on top of a messy foundation' },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            Why Funnels Are Not Enough Anymore
          </h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            Funnels tell a short story. People go in at the top, some drop out, a few reach the bottom&mdash;and that&apos;s the end. Useful for a single conversion step. Not so useful for a long relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-bg-alt rounded-lg p-6 border-l-4 border-border">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-3">Traditional Funnel Thinking</h3>
            <ul className="space-y-2 font-body text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-text-muted mt-1">•</span>
                <span>Marketing owns the top</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted mt-1">•</span>
                <span>Sales owns the middle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted mt-1">•</span>
                <span>Service owns the end</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted mt-1">•</span>
                <span>Ops tries to stitch tools together after the fact</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-alt rounded-lg p-6 border-l-4 border-error">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-3">The Problems This Creates</h3>
            <ul className="space-y-2 font-body text-text-secondary">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-error mt-1">×</span>
                  <span><strong className="text-text-primary">{problem.title}</strong> {problem.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="callout callout-service">
          <p className="callout-text">
            The Loop Revenue System solves this by giving you a shared way to think about revenue that matches how people actually move and how modern teams work.
          </p>
        </div>
      </div>
    </section>
  )
}

// The Four Loops Section
function FourLoopsSection() {
  const loops = [
    {
      name: 'Loop Marketing',
      color: 'loop-marketing',
      borderColor: 'border-loop-marketing',
      bgColor: 'bg-loop-marketing-tint',
      purpose: 'Learn what to say, who to say it to, and where to show up',
      details: 'Marketing watches the questions people ask, the content they consume, and the messages that land. It then feeds those learnings into sales, service, and ops so the whole company speaks with more clarity and confidence.',
      href: '/loops/marketing',
    },
    {
      name: 'Loop Sales',
      color: 'loop-sales',
      borderColor: 'border-loop-sales',
      bgColor: 'bg-loop-sales-tint',
      purpose: 'Help the right people make clear decisions',
      details: 'Every conversation is a data point. The questions prospects ask, the objections they raise, and the stories that move them all feed the loop. Sales uses that learning to refine targeting, diagnose problems, and guide customers toward the best fit.',
      href: '/loops/sales',
    },
    {
      name: 'Loop Service',
      color: 'loop-service',
      borderColor: 'border-loop-service',
      bgColor: 'bg-loop-service-tint',
      purpose: 'Keep customers successful after they buy',
      details: 'Support tickets, onboarding calls, and Q&A reveal what customers really experience. Service teams see where things feel confusing, where value lands fast, and where people get stuck. That insight feeds the whole company.',
      href: '/loops/service',
    },
    {
      name: 'Loop Ops',
      color: 'loop-ops',
      borderColor: 'border-loop-ops',
      bgColor: 'bg-loop-ops-tint',
      purpose: 'Connect data, tools, and processes',
      details: 'Operations defines lifecycle stages, owns the CRM, sets up automation, and builds dashboards. When Ops works in a loop, it doesn\'t only fix broken reports. It studies how the system behaves and improves it.',
      href: '/loops/ops',
    },
  ]

  return (
    <section className="section-padding bg-bg-alt border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            The Four Loops
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Your revenue engine is made of four connected loops that share data, share insights, and share responsibility for revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {loops.map((loop) => (
            <Link
              key={loop.name}
              href={loop.href}
              className={cn(
                'block p-6 rounded-lg border-l-4 bg-surface hover:shadow-md transition-shadow',
                loop.borderColor
              )}
            >
              <div className={cn('inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3', loop.bgColor, `text-${loop.color}`)}>
                {loop.name}
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                {loop.purpose}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {loop.details}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// The Four Stages Section
function FourStagesSection() {
  const stages = [
    {
      name: 'Express',
      tagline: 'Decide How You Show Up',
      color: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10',
      description: 'Clarify what you stand for and how you work. Each team sets its strategy, voice, and process.',
      examples: [
        'Marketing sets point of view and content strategy',
        'Sales defines ideal customer and deal stages',
        'Service maps customer journey and support philosophy',
        'Ops sets data standards and lifecycle definitions',
      ],
    },
    {
      name: 'Tailor',
      tagline: 'Make It Personal and Contextual',
      color: 'text-brand-peach',
      bgColor: 'bg-brand-peach/10',
      description: 'Bring the plan to life for real people. Stop acting like every contact is the same.',
      examples: [
        'Marketing segments and personalizes campaigns',
        'Sales adjusts questions and demos per account',
        'Service responds with context, not canned answers',
        'Ops configures workflows to fit the business',
      ],
    },
    {
      name: 'Amplify',
      tagline: 'Scale What Works',
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
      description: 'Take what\'s working in one corner and make it easy for the rest of the system to use it.',
      examples: [
        'Marketing repurposes strong ideas across channels',
        'Sales shares winning motions with the whole team',
        'Service turns good answers into help articles',
        'Ops automates to reduce manual work',
      ],
    },
    {
      name: 'Evolve',
      tagline: 'Learn and Improve Every Cycle',
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      description: 'Look at what happened. Connect the dots. Make changes so the next turn is better.',
      examples: [
        'Marketing adjusts offers and messages',
        'Sales refines process based on win/loss patterns',
        'Service improves flows from satisfaction data',
        'Ops finds bottlenecks across the system',
      ],
    },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            The Four Stages
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Every loop passes through the same four stages. This shared pattern makes the system simple to teach and easier to run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <div key={stage.name} className="stage-card">
              <div className={cn('stage-card-title', stage.color)}>{stage.name}</div>
              <h3 className="font-display text-lg font-medium text-text-primary mb-2">
                {stage.tagline}
              </h3>
              <p className="font-body text-sm text-text-secondary mb-4">
                {stage.description}
              </p>
              <ul className="space-y-1">
                {stage.examples.map((example, i) => (
                  <li key={i} className="font-body text-xs text-text-muted flex items-start gap-2">
                    <span className={stage.color}>→</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How Loops Work Together
function LoopsTogetherSection() {
  const benefits = [
    'A question in support inspires a new article and a better sales answer',
    'Win/loss patterns change your ICP and marketing strategy',
    'Service feedback shapes the product and sales promises',
    'Ops sits inside every decision, not in a separate world',
  ]

  return (
    <section className="section-padding bg-bg-alt border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
              How The Loops Work Together
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              The four loops are powerful on their own. They are transformative when they talk to each other.
            </p>
            <div className="space-y-3 mb-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="font-body text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-lg p-8 border border-border-light">
            <blockquote className="font-display text-xl text-brand-navy leading-relaxed">
              &ldquo;That&apos;s what it means to run revenue as one system instead of a collection of teams.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

// AI and Humans Section
function AiHumansSection() {
  const aiJobs = [
    'Research faster and spot patterns in data',
    'Draft content and outreach',
    'Suggest next best actions',
    'Monitor metrics and alert on anomalies',
  ]

  const humanJobs = [
    'Direction and judgment',
    'Setting guardrails for data and personalization',
    'Handling sensitive conversations',
    'Choosing which AI suggestions to accept or reject',
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            AI and Humans Inside The Loop
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            AI changes how fast loops can spin, but it doesn&apos;t replace people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brand-teal/5 rounded-lg p-6 border border-brand-teal/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold">AI</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">AI Has Clear Jobs</h3>
            </div>
            <ul className="space-y-2">
              {aiJobs.map((job, i) => (
                <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-teal mt-0.5">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-navy/5 rounded-lg p-6 border border-brand-navy/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-brand-navy/20 flex items-center justify-center text-brand-navy font-bold">H</span>
              <h3 className="font-display text-lg font-semibold text-text-primary">Humans Stay in Charge</h3>
            </div>
            <ul className="space-y-2">
              {humanJobs.map((job, i) => (
                <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-navy mt-0.5">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="callout callout-marketing">
          <p className="callout-text">
            At every stage, humans stay accountable for outcomes and for how customers feel.
          </p>
        </div>
      </div>
    </section>
  )
}

// Role-Based Section
function RolesSection() {
  const roles = [
    {
      title: 'CEO / Founder',
      description: 'Get a clear story for revenue. See how marketing, sales, service, and ops should support each other.',
      color: 'bg-brand-cyan',
    },
    {
      title: 'RevOps / Operations',
      description: 'Get a blueprint for data, process, and tooling. Separate quick wins from structural fixes.',
      color: 'bg-loop-ops',
    },
    {
      title: 'Marketing / Sales / Service',
      description: 'Turn your part of the business into a learning lab. Run experiments and show how your work drives revenue.',
      color: 'bg-loop-marketing',
    },
    {
      title: 'HubSpot Admin / Builder',
      description: 'Design fields, workflows, and reports with clear purpose. Shape how the loops run.',
      color: 'bg-loop-service',
    },
  ]

  return (
    <section className="section-padding bg-bg-alt border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            What This Means For Your Role
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Different people step into this system from different angles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role) => (
            <div key={role.title} className="bg-surface rounded-lg p-5 border border-border-light">
              <div className={cn('w-3 h-3 rounded-full mb-3', role.color)} />
              <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                {role.title}
              </h3>
              <p className="font-body text-sm text-text-secondary">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CtaSection() {
  return (
    <section className="section-padding-lg bg-brand-navy text-white">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
          Get Started
        </h2>
        <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-4">
          You don&apos;t need to rebuild everything at once. Pick one small loop and improve how it runs.
        </p>
        <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-10">
          If you only do one thing this week: Pick a single loop and stage, write down how you run it today, and ask&mdash;<em>&ldquo;What would it look like if this behaved like a loop, not a line?&rdquo;</em>
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 text-left">
            <h3 className="font-display text-xl font-medium text-brand-navy mb-3">
              Deep Dive: Stages
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Explore how each stage works across all four loops with detailed examples and diagrams.
            </p>
            <Link href="/overview/stages" className="btn bg-brand-teal text-white border-brand-teal hover:bg-brand-teal/90 w-full justify-center">
              Four Stages Overview
            </Link>
          </div>

          <div className="bg-white rounded-lg p-8 text-left">
            <h3 className="font-display text-xl font-medium text-brand-navy mb-3">
              Find Your Path
            </h3>
            <p className="font-body text-text-secondary mb-6">
              Get guidance tailored to your specific role and the loops you work in.
            </p>
            <Link href="/roles/start-here" className="btn btn-secondary w-full justify-center">
              Start Here by Role
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WhatIsLoopRevenuePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'What Is the Loop Revenue System',
            description: 'A simple way to run revenue as a continuous learning system with four connected loops.',
            url: `${siteUrl}/overview/loop-revenue-system`,
          }),
        ]}
      />
      <HeroSection />
      <FunnelProblemSection />
      <FourLoopsSection />
      <FourStagesSection />
      <LoopsTogetherSection />
      <AiHumansSection />
      <RolesSection />
      <CtaSection />
    </>
  )
}
