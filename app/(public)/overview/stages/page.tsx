import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'The Four Stages: Express, Tailor, Amplify, Evolve | Loop Revenue System',
  description: 'One simple pattern for every loop in your revenue engine. Learn how Express, Tailor, Amplify, and Evolve create a common language for marketing, sales, service, and ops.',
  openGraph: {
    title: 'The Four Stages: Express, Tailor, Amplify, Evolve',
    description: 'One simple pattern for every loop in your revenue engine. A common language for the work marketing, sales, service, and ops all do.',
    type: 'article',
  },
}

// Stage colors
const stageColors = {
  express: { accent: 'brand-teal', bg: 'bg-brand-teal/10', border: 'border-brand-teal', text: 'text-brand-teal' },
  tailor: { accent: 'brand-peach', bg: 'bg-brand-peach/10', border: 'border-brand-peach', text: 'text-brand-peach' },
  amplify: { accent: 'brand-orange', bg: 'bg-brand-orange/10', border: 'border-brand-orange', text: 'text-brand-orange' },
  evolve: { accent: 'brand-blue', bg: 'bg-brand-blue/10', border: 'border-brand-blue', text: 'text-brand-blue' },
}

// Stages Diagram SVG
function StagesDiagram() {
  return (
    <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[500px] mx-auto">
      {/* Connection line */}
      <path d="M50 60 L350 60" stroke="#E0FBFC" strokeWidth="8" fill="none" />

      {/* Arrows between stages */}
      <defs>
        <marker id="stage-arrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
          <polygon points="0 0, 10 4, 0 8" fill="#94A3B8"/>
        </marker>
      </defs>
      <path d="M95 60 L130 60" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#stage-arrow)"/>
      <path d="M185 60 L220 60" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#stage-arrow)"/>
      <path d="M275 60 L310 60" stroke="#94A3B8" strokeWidth="2" fill="none" markerEnd="url(#stage-arrow)"/>

      {/* Loop back arrow */}
      <path d="M360 60 Q 380 60 380 40 Q 380 20 200 20 Q 20 20 20 40 Q 20 60 40 60"
            stroke="#94A3B8" strokeWidth="2" fill="none" strokeDasharray="4 2" markerEnd="url(#stage-arrow)"/>

      {/* Express */}
      <circle cx="60" cy="60" r="30" fill="rgba(2,131,147,0.15)" stroke="#028393" strokeWidth="3" />
      <text x="60" y="56" textAnchor="middle" fill="#028393" fontSize="10" fontWeight="600">Express</text>
      <text x="60" y="68" textAnchor="middle" fill="#028393" fontSize="7">Define</text>

      {/* Tailor */}
      <circle cx="155" cy="60" r="30" fill="rgba(250,170,104,0.15)" stroke="#faaa68" strokeWidth="3" />
      <text x="155" y="56" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="600">Tailor</text>
      <text x="155" y="68" textAnchor="middle" fill="#d97706" fontSize="7">Personalize</text>

      {/* Amplify */}
      <circle cx="250" cy="60" r="30" fill="rgba(246,86,37,0.15)" stroke="#f65625" strokeWidth="3" />
      <text x="250" y="56" textAnchor="middle" fill="#f65625" fontSize="10" fontWeight="600">Amplify</text>
      <text x="250" y="68" textAnchor="middle" fill="#f65625" fontSize="7">Scale</text>

      {/* Evolve */}
      <circle cx="345" cy="60" r="30" fill="rgba(61,90,128,0.15)" stroke="#3D5A80" strokeWidth="3" />
      <text x="345" y="56" textAnchor="middle" fill="#3D5A80" fontSize="10" fontWeight="600">Evolve</text>
      <text x="345" y="68" textAnchor="middle" fill="#3D5A80" fontSize="7">Learn</text>
    </svg>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-brand-cyan/20 to-bg border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-body text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            The Foundation
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
            The Four Stages of the Loop Revenue System
          </h1>
          <p className="font-display text-xl italic text-text-secondary mb-8">
            One simple pattern for every loop in your revenue engine.
          </p>
        </div>

        <div className="mb-12">
          <StagesDiagram />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="font-body text-base text-text-secondary leading-loose space-y-4">
            <p>
              Every part of your go-to-market engine faces the same questions: Who are we for? How do we show up? How do we make this personal? How do we scale what works? How do we learn from what happened?
            </p>
            <p>
              The Loop Revenue System answers those questions with four stages that repeat inside every loop. <strong className="text-text-primary">Express</strong>, <strong className="text-text-primary">Tailor</strong>, <strong className="text-text-primary">Amplify</strong>, and <strong className="text-text-primary">Evolve</strong> give you a common language for the work marketing, sales, service, and ops all do&mdash;even when their day-to-day tasks look very different.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Stages Matter Section
function WhyStagesMatterSection() {
  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-text-primary mb-6">
              Why Stages Matter More Than Departments
            </h2>
            <div className="font-body text-base text-text-secondary leading-loose space-y-4">
              <p>
                Most companies organize around departments. Marketing over here, sales over there, service at the end, ops in the background. Each team uses its own playbook, tools, and vocabulary.
              </p>
              <p>
                The result is familiar. Work feels busy but not aligned. Handoffs between teams feel clunky. It&apos;s hard to tell if a problem is a marketing issue, a sales issue, a service issue, or a tool issue.
              </p>
              <p>
                <strong className="text-text-primary">Stages give you a different way to see the work.</strong>
              </p>
              <p>
                Express, Tailor, Amplify, and Evolve sit above the org chart. They describe what needs to happen for revenue to grow in a healthy way, no matter who does it.
              </p>
            </div>
          </div>

          <div className="bg-bg-alt rounded-lg p-8">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
              Better Questions to Ask
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">?</span>
                <span className="font-body text-text-secondary">Are we clear enough in <strong className="text-brand-teal">Express</strong>?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-peach/20 text-brand-peach flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">?</span>
                <span className="font-body text-text-secondary">Are we truly <strong className="text-brand-peach">tailoring</strong> or just segmenting by job title?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">?</span>
                <span className="font-body text-text-secondary">Are we <strong className="text-brand-orange">amplifying</strong> the right things, or just adding noise?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">?</span>
                <span className="font-body text-text-secondary">Are we <strong className="text-brand-blue">evolving</strong>, or repeating the same motions?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stages Overview Cards
function StagesOverviewSection() {
  const stages = [
    {
      name: 'Express',
      tagline: 'Define how you show up',
      description: 'Decide who you serve, what problems you solve, how you speak, and what your process looks like.',
      color: stageColors.express,
      icon: '✦',
    },
    {
      name: 'Tailor',
      tagline: 'Make it personal',
      description: 'Use data, context, and empathy to adjust your approach for real people, accounts, and situations.',
      color: stageColors.tailor,
      icon: '◈',
    },
    {
      name: 'Amplify',
      tagline: 'Scale what works',
      description: 'Repurpose strong ideas, share winning plays, and extend your reach without losing your voice.',
      color: stageColors.amplify,
      icon: '◉',
    },
    {
      name: 'Evolve',
      tagline: 'Learn and adjust',
      description: 'Read the results, listen to feedback, and make changes so the next cycle is more effective.',
      color: stageColors.evolve,
      icon: '↻',
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/10 border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            The Four Stages at a Glance
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Each stage matters on its own. Together, they form a simple loop you can use to diagnose and improve any part of your revenue system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className={cn(
                'bg-surface rounded-lg p-6 border-t-4 shadow-sm',
                stage.color.border
              )}
            >
              <div className={cn('text-3xl mb-3', stage.color.text)}>
                {stage.icon}
              </div>
              <h3 className={cn('font-display text-xl font-semibold mb-1', stage.color.text)}>
                {stage.name}
              </h3>
              <p className="font-display text-sm font-medium text-text-primary mb-3">
                {stage.tagline}
              </p>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Express Across Loops Section
function ExpressSection() {
  const loops = [
    {
      name: 'Marketing',
      color: 'loop-marketing',
      items: [
        'A clear point of view about your market and problems you solve',
        'Defined ideal customer profiles, not just generic industries',
        'Core messages, storylines, and content pillars',
        'A simple map of your main campaigns and offers',
      ],
      outcome: 'Content and campaigns feel like they come from one confident voice.',
    },
    {
      name: 'Sales',
      color: 'loop-sales',
      items: [
        'A clearly defined sales process with meaningful stages',
        'Shared definitions of a good-fit opportunity',
        'Documented talk tracks, discovery questions, and key stories',
        'Alignment on what a "win" means beyond a signed contract',
      ],
      outcome: 'Deals move smoothly and reps know how to show up in conversations.',
    },
    {
      name: 'Service',
      color: 'loop-service',
      items: [
        'A clear service philosophy for support and education',
        'Mapped post-sale journeys for onboarding and adoption',
        'A simple explanation of "what good looks like" for outcomes',
        'Principles for how your team responds when things go wrong',
      ],
      outcome: 'Customers know what to expect after they buy.',
    },
    {
      name: 'Ops',
      color: 'loop-ops',
      items: [
        'Agreed lifecycle stages and status definitions',
        'A documented data model for contacts, companies, deals',
        'Rules for what gets tracked, who owns it, and why',
        'A vision for how tools support the other loops',
      ],
      outcome: 'Everyone uses the CRM similarly and dashboards tell a coherent story.',
    },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
            <span className="text-brand-teal text-2xl">✦</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-teal">
              Express
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            Express gives shape and direction to your work. It&apos;s where you answer key questions about identity, focus, and process before you try to personalize, automate, or optimize anything. <strong className="text-text-primary">If Express is fuzzy, everything that follows feels noisy.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {loops.map((loop) => (
            <div
              key={loop.name}
              className={cn('rounded-lg p-6 border-l-4 bg-bg-alt', `border-${loop.color}`)}
            >
              <h3 className={cn('font-display text-lg font-semibold mb-4', `text-${loop.color}`)}>
                Express in Loop {loop.name}
              </h3>
              <ul className="space-y-2 mb-4">
                {loop.items.map((item, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-brand-teal mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-border-light">
                <p className="font-body text-xs text-text-muted italic">
                  When strong: {loop.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Tailor Across Loops Section
function TailorSection() {
  const loops = [
    {
      name: 'Marketing',
      items: [
        'Segmenting by real behavior and needs, not just job title',
        'Adjusting content, offers, and timing based on journey stage',
        'Speaking in the language customers actually use',
      ],
      outcome: 'Content feels written for someone specific, even at scale.',
    },
    {
      name: 'Sales',
      items: [
        'Researching accounts instead of running the same script',
        'Shaping questions and recommendations to context',
        'Documenting learnings so next interactions start right',
      ],
      outcome: 'Buyers feel listened to and guided, not pitched at.',
    },
    {
      name: 'Service',
      items: [
        'Responding with full context from customer history',
        'Proactively reaching out at early signs of friction',
        'Adjusting onboarding based on how each customer learns',
      ],
      outcome: 'Customers feel known. They don\'t repeat their story.',
    },
    {
      name: 'Ops',
      items: [
        'Configuring fields and routing that match actual process',
        'Creating views and automations tailored to each team',
        'Respecting privacy while enabling personalization',
      ],
      outcome: 'The system supports nuance instead of forcing sameness.',
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/10 border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-brand-peach/20 flex items-center justify-center">
            <span className="text-brand-peach text-2xl">◈</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-peach">
              Tailor
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-6">
              Tailor turns a clear plan into a human experience. It uses data, context, and empathy to answer: <strong className="text-text-primary">&ldquo;What does this person need right now?&rdquo;</strong>
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              The goal isn&apos;t to use as many personalization tokens as possible. The goal is to make sure the person on the other side feels understood and supported.
            </p>
          </div>

          <div className="space-y-4">
            {loops.map((loop) => (
              <div key={loop.name} className="bg-surface rounded-lg p-5 border border-border-light">
                <h3 className="font-display text-base font-semibold text-text-primary mb-3">
                  Tailor in Loop {loop.name}
                </h3>
                <ul className="space-y-1 mb-3">
                  {loop.items.map((item, i) => (
                    <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-brand-peach mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-brand-peach italic">
                  {loop.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Amplify Across Loops Section
function AmplifySection() {
  const loops = [
    {
      name: 'Marketing',
      items: [
        'Turn one strong article into many smaller assets',
        'Share high-performing ideas across channels',
        'Use automation to keep helpful content in circulation',
      ],
    },
    {
      name: 'Sales',
      items: [
        'Capture winning templates and talk tracks',
        'Share them in playbooks so more reps can use them',
        'Create decks and one-pagers that land with buyers',
      ],
    },
    {
      name: 'Service',
      items: [
        'Turn repeated questions into knowledge base articles',
        'Use in-app guidance to share solutions proactively',
        'Build communities where customers help each other',
      ],
    },
    {
      name: 'Ops',
      items: [
        'Use automation and integrations to cut manual work',
        'Standardize effective processes across teams',
        'Scale reporting so everyone sees the same truths',
      ],
    },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center">
            <span className="text-brand-orange text-2xl">◉</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-orange">
              Amplify
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <p className="font-body text-lg text-text-secondary leading-relaxed">
            Amplify takes what&apos;s working and helps it reach further. <strong className="text-text-primary">The goal is not more noise&mdash;it&apos;s more of the right signal</strong>, shared in more places, with more consistency. Amplify turns individual wins into shared assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loops.map((loop) => (
            <div key={loop.name} className="bg-bg-alt rounded-lg p-5">
              <h3 className="font-display text-base font-semibold text-brand-orange mb-4">
                {loop.name}
              </h3>
              <ul className="space-y-2">
                {loop.items.map((item, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-brand-orange mt-0.5">↗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 callout callout-sales">
          <p className="callout-text">
            When Amplify is strong, you don&apos;t depend on a few all-stars. The whole team gains from what works.
          </p>
        </div>
      </div>
    </section>
  )
}

// Evolve Across Loops Section
function EvolveSection() {
  const loops = [
    {
      name: 'Marketing',
      items: [
        'Review channel and content performance regularly',
        'Test new ideas in small experiments, then roll out winners',
        'Connect marketing metrics to real revenue and retention',
      ],
    },
    {
      name: 'Sales',
      items: [
        'Study win/loss patterns and share findings',
        'Adjust qualification and proposals based on learnings',
        'Update training and coaching with fresh examples',
      ],
    },
    {
      name: 'Service',
      items: [
        'Track satisfaction, retention, and reasons for churn',
        'Use insight to improve onboarding and the product',
        'Close the loop with marketing and sales on expectations',
      ],
    },
    {
      name: 'Ops',
      items: [
        'Watch system-level metrics: conversion, cycle time, data quality',
        'Spot bottlenecks and friction points early',
        'Prioritize and ship changes to process and tools',
      ],
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/10 border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
            <span className="text-brand-blue text-2xl">↻</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-blue">
              Evolve
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-4">
              Evolve is where the system actually becomes a loop. It&apos;s the stage where you stop and ask, <strong className="text-text-primary">&ldquo;What did we learn?&rdquo;</strong> and <strong className="text-text-primary">&ldquo;What will we change next time?&rdquo;</strong>
            </p>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Without Evolve, you stay busy but stuck. With Evolve, every cycle teaches you something.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-brand-blue/30">
            <blockquote className="font-display text-xl text-brand-navy leading-relaxed">
              &ldquo;When your revenue engine Evolves well, it gets cleaner and more reliable over time.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loops.map((loop) => (
            <div key={loop.name} className="bg-surface rounded-lg p-5 border border-border-light">
              <h3 className="font-display text-base font-semibold text-brand-blue mb-4">
                {loop.name}
              </h3>
              <ul className="space-y-2">
                {loop.items.map((item, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-brand-blue mt-0.5">↺</span>
                    <span>{item}</span>
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

// AI and Humans Section
function AiHumansSection() {
  const stages = [
    {
      stage: 'Express',
      color: stageColors.express,
      ai: 'Summarize research, customer feedback, and call transcripts',
      human: 'Decide what that information means and what you stand for',
    },
    {
      stage: 'Tailor',
      color: stageColors.tailor,
      ai: 'Suggest segments, recommend content, draft personalized messages',
      human: 'Set the rules, approve sensitive communication, protect privacy',
    },
    {
      stage: 'Amplify',
      color: stageColors.amplify,
      ai: 'Repurpose content, manage distribution, keep automations running',
      human: 'Choose what deserves amplification and watch for overload',
    },
    {
      stage: 'Evolve',
      color: stageColors.evolve,
      ai: 'Scan large data sets, flag trends, surface anomalies',
      human: 'Decide which patterns matter and what changes to make',
    },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            AI and Humans at Each Stage
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            AI doesn&apos;t replace the stages. It supports them. Use AI where it adds speed and reach. Keep humans responsible for direction, judgment, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((item) => (
            <div key={item.stage} className="bg-bg-alt rounded-lg overflow-hidden">
              <div className={cn('px-4 py-3', item.color.bg)}>
                <h3 className={cn('font-display text-lg font-semibold', item.color.text)}>
                  {item.stage}
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal text-xs font-bold">AI</span>
                    <span className="font-body text-xs font-semibold text-text-muted uppercase">AI Can Help</span>
                  </div>
                  <p className="font-body text-sm text-text-secondary">{item.ai}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-brand-navy/20 flex items-center justify-center text-brand-navy text-xs font-bold">H</span>
                    <span className="font-body text-xs font-semibold text-text-muted uppercase">Humans Lead</span>
                  </div>
                  <p className="font-body text-sm text-text-secondary">{item.human}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Health Check Section
function HealthCheckSection() {
  const checks = [
    {
      stage: 'Express',
      color: stageColors.express,
      question: 'Can everyone explain who we serve, what we promise, and how we work in a simple way?',
    },
    {
      stage: 'Tailor',
      color: stageColors.tailor,
      question: 'Do our messages and actions feel specific to real people, or could they go to anyone?',
    },
    {
      stage: 'Amplify',
      color: stageColors.amplify,
      question: 'Do we reuse and share what works, or do good ideas die in one channel?',
    },
    {
      stage: 'Evolve',
      color: stageColors.evolve,
      question: 'Do we regularly look at results, talk about what they mean, and change our approach?',
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/10 border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
            A Simple Stage Health Check
          </h2>
          <p className="font-body text-lg text-text-secondary">
            You don&apos;t need a complex scorecard. A few honest questions go a long way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {checks.map((check) => (
            <div
              key={check.stage}
              className={cn('bg-surface rounded-lg p-6 border-l-4', check.color.border)}
            >
              <h3 className={cn('font-display text-lg font-semibold mb-3', check.color.text)}>
                For {check.stage}
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                {check.question}
              </p>
            </div>
          ))}
        </div>

        <div className="callout callout-service max-w-3xl mx-auto">
          <p className="callout-text">
            If you answer &ldquo;not really&rdquo; to any of those, that&apos;s your stage to focus on first. You don&apos;t have to fix everything at once. Improving one weak stage often unlocks progress across the others.
          </p>
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
          Use the Stages in Your World
        </h2>
        <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-4">
          Pick one loop&mdash;like marketing or sales. Walk through the stages:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full bg-brand-teal/30 text-brand-cyan text-sm font-semibold">How clear is our Express?</span>
          <span className="px-3 py-1 rounded-full bg-brand-peach/30 text-brand-peach text-sm font-semibold">How human is our Tailor?</span>
          <span className="px-3 py-1 rounded-full bg-brand-orange/30 text-brand-orange text-sm font-semibold">How intentional is our Amplify?</span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold">How honest is our Evolve?</span>
        </div>
        <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-10">
          Then choose one small improvement to make in the next month.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              See Loops in Practice
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Explore how each loop uses the four stages.
            </p>
            <Link href="/loops" className="btn bg-brand-teal text-white border-brand-teal hover:bg-brand-teal/90 w-full justify-center text-sm">
              The Four Loops
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              Get Ready-Made Playbooks
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Checklists and workflows by stage.
            </p>
            <Link href="/playbooks/system" className="btn btn-secondary w-full justify-center text-sm">
              System Playbooks
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              Find Your Path
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Guidance based on your role.
            </p>
            <Link href="/roles/start-here" className="btn bg-brand-orange text-white border-brand-orange hover:bg-brand-orange/90 w-full justify-center text-sm">
              Start Here by Role
            </Link>
          </div>
        </div>

        <p className="font-body text-white/50 mt-10 text-sm italic">
          Use the stages as a shared language. Let the loops spin. Watch what you learn each time they come around again.
        </p>
      </div>
    </section>
  )
}

export default function StagesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'The Four Stages: Express, Tailor, Amplify, Evolve',
            description: 'One simple pattern for every loop in your revenue engine. A common language for marketing, sales, service, and ops.',
            url: `${siteUrl}/overview/stages`,
          }),
        ]}
      />
      <HeroSection />
      <WhyStagesMatterSection />
      <StagesOverviewSection />
      <ExpressSection />
      <TailorSection />
      <AmplifySection />
      <EvolveSection />
      <AiHumansSection />
      <HealthCheckSection />
      <CtaSection />
    </>
  )
}
