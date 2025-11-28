import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Loop Ops | Build Your Revenue Backbone | Loop Revenue System',
  description: 'Learn how to run ops as a continuous loop through Express, Tailor, Amplify, and Evolve. Transform your tools and data into a connected revenue backbone.',
  openGraph: {
    title: 'Loop Ops | Loop Revenue System',
    description: 'Turn your tools and data into a revenue backbone, not a pile of apps. Ops as the connective tissue under your revenue system.',
    type: 'article',
  },
}

// Ops Backbone Diagram - shows ops as the foundation under the other loops
function OpsBackboneDiagram() {
  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-[300px] mx-auto" aria-label="Ops backbone diagram">
      {/* Ops backbone ring at the bottom */}
      <ellipse cx="160" cy="220" rx="140" ry="35" fill="none" stroke="#3D5A80" strokeWidth="4" strokeDasharray="8,4" />
      <text x="160" y="225" textAnchor="middle" fill="#3D5A80" fontSize="12" fontWeight="700">Loop Ops</text>
      <text x="160" y="240" textAnchor="middle" fill="#3D5A80" fontSize="9">The Revenue Backbone</text>

      {/* Marketing loop */}
      <g transform="translate(60, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#028393" fontSize="10" fontWeight="600">Marketing</text>
      </g>

      {/* Sales loop */}
      <g transform="translate(160, 70)">
        <circle cx="0" cy="0" r="35" fill="#FEE8E1" stroke="#f65625" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#f65625" fontSize="10" fontWeight="600">Sales</text>
      </g>

      {/* Service loop */}
      <g transform="translate(260, 100)">
        <circle cx="0" cy="0" r="35" fill="#FEF3E8" stroke="#faaa68" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#faaa68" fontSize="10" fontWeight="600">Service</text>
      </g>

      {/* Connection lines from ops to other loops */}
      <path d="M 60 185 L 60 135" stroke="#3D5A80" strokeWidth="2" strokeDasharray="4,2" />
      <path d="M 160 185 L 160 105" stroke="#3D5A80" strokeWidth="2" strokeDasharray="4,2" />
      <path d="M 260 185 L 260 135" stroke="#3D5A80" strokeWidth="2" strokeDasharray="4,2" />

      {/* Small connection dots */}
      <circle cx="60" cy="185" r="4" fill="#3D5A80" />
      <circle cx="160" cy="185" r="4" fill="#3D5A80" />
      <circle cx="260" cy="185" r="4" fill="#3D5A80" />
    </svg>
  )
}

// System Position Diagram - more detailed view of ops under all loops
function SystemPositionDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-lg mx-auto" aria-label="Ops in system diagram">
      {/* Marketing Loop */}
      <g transform="translate(80, 60)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#028393" fontSize="10" fontWeight="600">Marketing</text>
      </g>

      {/* Sales Loop */}
      <g transform="translate(200, 60)">
        <circle cx="0" cy="0" r="35" fill="#FEE8E1" stroke="#f65625" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#f65625" fontSize="10" fontWeight="600">Sales</text>
      </g>

      {/* Service Loop */}
      <g transform="translate(320, 60)">
        <circle cx="0" cy="0" r="35" fill="#FEF3E8" stroke="#faaa68" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#faaa68" fontSize="10" fontWeight="600">Service</text>
      </g>

      {/* Ops as the backbone underneath */}
      <rect x="40" y="130" width="320" height="60" rx="30" fill="#E8EEF4" stroke="#3D5A80" strokeWidth="4" />
      <text x="200" y="160" textAnchor="middle" fill="#3D5A80" fontSize="14" fontWeight="700">Loop Ops</text>
      <text x="200" y="178" textAnchor="middle" fill="#3D5A80" fontSize="9">Tools • Data • Process • Automation</text>

      {/* Connection lines */}
      <path d="M 80 95 L 80 130" stroke="#3D5A80" strokeWidth="2" />
      <path d="M 200 95 L 200 130" stroke="#3D5A80" strokeWidth="2" />
      <path d="M 320 95 L 320 130" stroke="#3D5A80" strokeWidth="2" />

      {/* Arrows showing bidirectional flow */}
      <polygon points="80,125 75,115 85,115" fill="#3D5A80" />
      <polygon points="80,100 75,110 85,110" fill="#3D5A80" />
      <polygon points="200,125 195,115 205,115" fill="#3D5A80" />
      <polygon points="200,100 195,110 205,110" fill="#3D5A80" />
      <polygon points="320,125 315,115 325,115" fill="#3D5A80" />
      <polygon points="320,100 315,110 325,110" fill="#3D5A80" />
    </svg>
  )
}

// Stage Section Component
function StageSection({
  stage,
  color,
  bgColor,
  icon,
  purpose,
  work,
  support
}: {
  stage: string
  color: string
  bgColor: string
  icon: string
  purpose: string
  work: string[]
  support: string[]
}) {
  return (
    <section className={cn('section-padding', bgColor)}>
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: color }}>
              <span className="text-white">{icon}</span>
            </div>
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-wider" style={{ color }}>Stage</p>
              <h2 className="font-display text-3xl font-medium text-brand-navy">{stage} In Loop Ops</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Purpose */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">Purpose</h3>
              <p className="font-body text-text-secondary leading-relaxed">{purpose}</p>
            </div>

            {/* What it looks like */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">What It Looks Like</h3>
              <ul className="space-y-2">
                {work.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color }} className="mt-1">•</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it supports */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">Supports Other Loops</h3>
              <ul className="space-y-2">
                {support.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color }} className="mt-1">→</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-[#E8EEF4] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-[#3D5A80] uppercase tracking-wider mb-4">
              Loop Ops
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Turn Your Tools And Data Into A Revenue Backbone
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              Loop Ops is not just &quot;the tech stack.&quot; It&apos;s the loop that designs, connects, and cares for the systems your revenue engine runs on.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When Loop Ops runs well, marketing, sales, and service can see the same truth, follow the same lifecycle, and change the system without breaking it. Your tools feel like one connected platform instead of a junk drawer.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              This page shows you how to treat ops as a loop that moves through four stages: <span className="text-[#028393] font-semibold">Express</span>, <span className="text-[#faaa68] font-semibold">Tailor</span>, <span className="text-[#f65625] font-semibold">Amplify</span>, and <span className="text-[#3D5A80] font-semibold">Evolve</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <OpsBackboneDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatItIsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              What Loop Ops Is And Why It Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Loop Ops is how you design and maintain the systems, data, and processes that support your revenue loops.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              It includes your CRM, marketing tools, sales engagement platform, service desk, integrations, data model, automation, and reporting. It also includes the rules for how teams use those systems.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In many companies, ops is treated like a help desk. Someone opens a ticket to add a field, build a workflow, or change a report. Ops says yes or no based on time, not on system design.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              <strong className="text-brand-navy">Loop Ops changes the posture.</strong> Every request, issue, and insight becomes input. Ops looks at how the whole system behaves, not just one tool.
            </p>
            <p className="font-body text-[#3D5A80] font-medium italic">
              Ops matters because it quietly decides how easy or hard it is for your business to change.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-100 rounded-xl border border-gray-200">
              <h4 className="font-display font-semibold text-gray-500 mb-2 line-through">Before: Ticket Taker Mode</h4>
              <p className="font-body text-gray-500 text-sm">Ops says yes or no based on time, not design. Quick fixes pile up. The system drifts into chaos.</p>
            </div>
            <div className="text-center text-2xl text-[#3D5A80]">↓</div>
            <div className="p-6 bg-[#E8EEF4] rounded-xl border-2 border-[#3D5A80]">
              <h4 className="font-display font-semibold text-[#3D5A80] mb-2">After: System Architect Mode</h4>
              <p className="font-body text-brand-navy text-sm">Every request becomes input. Ops designs the whole system to be stable, flexible, and measurable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SystemFitSection() {
  const receives = [
    { from: 'Marketing, Sales, Service', description: 'Requirements and pain: what the loops need from tools and data.' },
    { from: 'Security, Legal, Finance', description: 'Constraints around privacy, compliance, and budget.' },
    { from: 'Leadership', description: 'What needs to be measured and improved at a strategic level.' },
  ]

  const delivers = [
    { item: 'Shared lifecycle stages and definitions everyone agrees on' },
    { item: 'Connected objects and integrations across tools' },
    { item: 'Automations and workflows that cut manual work' },
    { item: 'Dashboards that give leaders and teams a clear view of the loops' },
  ]

  return (
    <section className="section-padding bg-[#E8EEF4]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Where Loop Ops Fits In The System
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Loop Ops sits under and around the other three loops. Marketing, sales, and service each run their own loop. Ops shapes the tools and processes so the loops can talk to each other.
          </p>
        </div>

        <SystemPositionDiagram />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Ops Receives</h3>
            <div className="space-y-3">
              {receives.map((r) => (
                <div key={r.from} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-display font-semibold text-[#3D5A80] text-sm mb-1">{r.from} →</h4>
                  <p className="font-body text-sm text-text-secondary">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Ops Delivers</h3>
            <div className="space-y-3">
              {delivers.map((d, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#3D5A80] font-bold">→</span>
                    {d.item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-body text-text-secondary text-center mt-8 max-w-2xl mx-auto">
          In a healthy Loop Revenue System, ops is in the room for strategy conversations, not only when something breaks.
        </p>
      </div>
    </section>
  )
}

function InputsOutputsSection() {
  const inputs = [
    'Requests from teams for new fields, reports, automations, or tools',
    'Observations about data quality, process bottlenecks, and system errors',
    'Strategic goals from leadership: new markets, products, or motions',
  ]

  const outputs = [
    'A clean, shared data model for contacts, companies, deals, and tickets',
    'Lifecycle stages and process flows everyone agrees on',
    'Connected systems with fewer manual transfers and fewer surprises',
    'Reporting and monitoring that show how loops perform over time',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Inputs And Outputs Of Loop Ops
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Loop Ops doesn&apos;t exist in a vacuum. It reacts to what the business and the other loops need. The question is: What are we feeding it? What is it sending back into the loops?
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Inputs */}
            <div className="p-6 bg-[#E8EEF4] rounded-xl border border-[#3D5A80]/30">
              <h3 className="font-display font-semibold text-[#3D5A80] mb-4 flex items-center gap-2">
                <span>→</span> Inputs
              </h3>
              <ul className="space-y-3">
                {inputs.map((input, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#3D5A80]">•</span>
                    {input}
                  </li>
                ))}
              </ul>
            </div>

            {/* Loop Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#3D5A80] flex items-center justify-center">
                <span className="text-white text-3xl">⚙️</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="p-6 bg-[#E8EEF4] rounded-xl border border-[#3D5A80]/30">
              <h3 className="font-display font-semibold text-[#3D5A80] mb-4 flex items-center gap-2">
                <span>←</span> Outputs
              </h3>
              <ul className="space-y-3">
                {outputs.map((output, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#3D5A80]">•</span>
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AiHumansSection() {
  const aiHelps = [
    'Scans your data for duplicates, gaps, and anomalies',
    'Suggests normalization and enrichment based on patterns',
    'Monitors workflow and integration logs to flag issues early',
    'Summarizes usage and adoption patterns across tools',
    'Helps prototype new workflows or field structures before you build them',
  ]

  const humansLead = [
    'Decide which data you actually need and why',
    'Design lifecycle and process changes that affect how people work',
    'Set guardrails for privacy, security, and access',
    'Choose which AI suggestions to act on and how to communicate changes',
  ]

  return (
    <section className="section-padding bg-[#E8EEF4]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            AI And Humans Inside Loop Ops
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Ops is a natural home for AI, but the roles must stay clear.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#3D5A80]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#3D5A80]">Where AI Helps</h3>
              </div>
              <ul className="space-y-3">
                {aiHelps.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3D5A80] mt-1">✓</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#028393]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#028393]/10 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">Where Humans Lead</h3>
              </div>
              <ul className="space-y-3">
                {humansLead.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">★</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[#3D5A80] font-medium text-center mt-8">
            In Loop Ops, AI is a powerful assistant. Humans stay responsible for the design and ethics of the system.
          </p>
        </div>
      </div>
    </section>
  )
}

function MetricsPitfallsSection() {
  const signals = [
    'Teams use the CRM and core tools regularly and in the intended way',
    'Key fields like lifecycle, owner, and segment are consistently populated',
    'Workflows and integrations fail rarely, and when they do, someone notices quickly',
    'New changes roll out with clear communication and do not regularly cause surprises',
    'Leaders ask for insight, not just raw exports, and trust what they see',
  ]

  const pitfalls = [
    'Saying yes to every request without a clear design principle',
    'Letting each department create its own lifecycle, fields, and reports',
    'Adding tools faster than you retire or consolidate them',
    'Using automation to speed up broken processes instead of fixing them',
    'Holding ops accountable only for uptime, not for loop health',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Simple Metrics And Common Pitfalls
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You can measure many things in ops. A few signals tell you most of what you need to know.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#3D5A80] bg-[#E8EEF4]">
              <h3 className="font-display text-lg font-semibold text-[#3D5A80] mb-4 flex items-center gap-2">
                <span>📊</span> Watch These Signals
              </h3>
              <ul className="space-y-3">
                {signals.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3D5A80] mt-1">✓</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-red-400 bg-red-50">
              <h3 className="font-display text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                <span>⚠️</span> Avoid These Traps
              </h3>
              <ul className="space-y-3">
                {pitfalls.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-border-light text-center">
            <p className="font-body text-[#3D5A80] font-medium">
              A simple test: if people say &quot;we don&apos;t trust the data&quot; more than a couple of times a quarter, Loop Ops needs care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetStartedSection() {
  return (
    <section className="section-padding bg-white border-t border-[#98C1D9]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How To Get Started With Loop Ops
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            You don&apos;t need a multi-year transformation to start treating ops like a loop. Start small and focused.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            Pick one narrow area, such as how inbound leads move through marketing and sales, or how a specific product&apos;s customers move from closed won into onboarding. Then ask four questions:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stage: 'Express', q: 'What\'s the design?' },
              { stage: 'Tailor', q: 'Does it fit reality?' },
              { stage: 'Amplify', q: 'What\'s automated?' },
              { stage: 'Evolve', q: 'What\'s improving?' },
            ].map((item) => (
              <div key={item.stage} className="p-4 bg-[#E8EEF4] rounded-lg">
                <p className="font-display font-semibold text-[#3D5A80] text-sm">{item.stage}</p>
                <p className="font-body text-xs text-text-secondary mt-1">{item.q}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-text-secondary mb-8">
            Then choose one improvement in each stage and run another cycle.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="/overview/data-metrics-governance"
            className="btn bg-[#f65625] text-white border-[#f65625] hover:bg-[#d94a1f]"
          >
            Data, Metrics & Governance
          </Link>
          <Link
            href="/playbooks/system"
            className="btn bg-white text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            System Playbooks
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <Link href="/playbooks/hubspot" className="font-body text-[#3D5A80] hover:underline">
            HubSpot Implementation →
          </Link>
          <Link href="/playbooks/no-hubspot" className="font-body text-[#3D5A80] hover:underline">
            No HubSpot Implementation →
          </Link>
          <Link href="/roles/start-here" className="font-body text-[#3D5A80] hover:underline">
            Start Here by Role →
          </Link>
        </div>

        <p className="font-body text-text-secondary text-center mt-12 max-w-xl mx-auto">
          Use Loop Ops to quietly make everything else easier. When the ops loop is strong, experiments are safer, data is cleaner, and your whole revenue system can finally act like one system built to help your business and your customers flourish.
        </p>
      </div>
    </section>
  )
}

export default function LoopOpsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Loop Ops',
            description: 'Turn your tools and data into a revenue backbone through Express, Tailor, Amplify, and Evolve.',
            url: `${siteUrl}/loops/ops`,
          }),
        ]}
      />
      <HeroSection />
      <WhatItIsSection />
      <SystemFitSection />
      <InputsOutputsSection />

      {/* Express Stage */}
      <StageSection
        stage="Express"
        color="#028393"
        bgColor="bg-[#E0FBFC]"
        icon="✦"
        purpose="Express is where ops decides what the system is trying to be. It answers: How do we define our customer lifecycle? Which core objects do we need? Which tools are in our stack? What principles guide our design?"
        work={[
          'Design and document your lifecycle and pipeline stages with all loops at the table',
          'Define core objects and relationships in your CRM and related tools',
          'Establish data standards, naming conventions, and required fields',
          'Map core processes at a high level before building automation',
          'Set a simple vision for your tech stack',
        ]}
        support={[
          'Marketing knows which lifecycle stages signal a good lead',
          'Sales knows which stages and fields matter for forecasting',
          'Service knows how tickets and customers move through post-sale stages',
        ]}
      />

      {/* Tailor Stage */}
      <StageSection
        stage="Tailor"
        color="#faaa68"
        bgColor="bg-white border-b border-border-light"
        icon="◈"
        purpose="Tailor is where ops adjusts the system to fit the real business. It's about translating the blueprint from Express into specific fields, pipelines, routing rules, views, and permissions that match how your teams actually work."
        work={[
          'Create fields and properties that reflect your real segments, products, and deal types',
          'Build pipelines and stages that map to how work really flows',
          'Set up routing and assignment rules for the right people to see the right records',
          'Design views and dashboards tuned to each role',
          'Configure permissions so people can do their jobs safely',
        ]}
        support={[
          'Marketing can segment and report on the audiences they truly care about',
          'Sales has a CRM that feels like a helpful cockpit, not a chore',
          'Service can see context and history without digging across tools',
        ]}
      />

      {/* Amplify Stage */}
      <StageSection
        stage="Amplify"
        color="#f65625"
        bgColor="bg-[#E8EEF4]"
        icon="◉"
        purpose="Amplify is how ops scales good process and good data without adding more manual work. Once Express and Tailor are solid, ops can use automation, integrations, and enablement to help the other loops move faster with less friction."
        work={[
          'Automate routine tasks: lifecycle updates, notifications, and handoffs',
          'Connect tools so data flows without exports and imports',
          'Template common processes like onboarding, renewals, and pipeline reviews',
          'Build reusable components: workflow patterns, dashboard templates, naming schemes',
        ]}
        support={[
          'Marketing can run smarter campaigns without juggling spreadsheets',
          'Sales spends more time selling and less time updating records',
          'Service sees tickets and customer context appear at the right time',
        ]}
      />

      {/* Evolve Stage */}
      <StageSection
        stage="Evolve"
        color="#3D5A80"
        bgColor="bg-white border-b border-border-light"
        icon="↻"
        purpose="Evolve is where Loop Ops checks its own work. It's where ops watches how the system behaves, listens to teams, and changes the design so the next cycle is cleaner and more supportive."
        work={[
          'Monitor system health: data completeness, error rates, workflow failures, integration reliability',
          'Track how quickly and safely changes move from idea to production',
          'Listen to feedback from teams about friction and confusion in the tools',
          'Maintain a change backlog prioritized by impact on the loops',
          'Retire or simplify fields, workflows, and tools that no longer serve the design',
        ]}
        support={[
          'Marketing, sales, and service feel the system getting easier, not heavier',
          'Leaders see cleaner dashboards and fewer "we don\'t trust the data" conversations',
          'Experiments in other loops can be supported by system changes instead of workarounds',
        ]}
      />

      <AiHumansSection />
      <MetricsPitfallsSection />
      <GetStartedSection />
    </>
  )
}
