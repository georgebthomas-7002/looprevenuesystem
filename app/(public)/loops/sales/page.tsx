import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Loop Sales | Turn Conversations Into Decisions | Loop Revenue System',
  description: 'Learn how to run sales as a continuous loop through Express, Tailor, Amplify, and Evolve. Transform every buyer conversation into insight, decisions, and better customers.',
  openGraph: {
    title: 'Loop Sales | Loop Revenue System',
    description: 'Turn every buyer conversation into insight and better customers. Sales as a loop that learns from every deal.',
    type: 'article',
  },
}

// Sales Loop Diagram
function SalesLoopDiagram() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[280px] mx-auto" aria-label="Sales loop diagram">
      {/* Main circle */}
      <circle cx="150" cy="150" r="100" fill="none" stroke="#f65625" strokeWidth="3" strokeDasharray="8,4" />

      {/* Center */}
      <circle cx="150" cy="150" r="40" fill="#FEE8E1" stroke="#f65625" strokeWidth="2" />
      <text x="150" y="145" textAnchor="middle" fill="#f65625" fontSize="11" fontWeight="600">Loop</text>
      <text x="150" y="160" textAnchor="middle" fill="#f65625" fontSize="11" fontWeight="600">Sales</text>

      {/* Stage nodes */}
      <g transform="translate(150, 50)">
        <circle cx="0" cy="0" r="25" fill="#f65625" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">Conversations</text>
      </g>
      <g transform="translate(250, 150)">
        <circle cx="0" cy="0" r="25" fill="#f65625" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Insight</text>
      </g>
      <g transform="translate(150, 250)">
        <circle cx="0" cy="0" r="25" fill="#f65625" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Decisions</text>
      </g>
      <g transform="translate(50, 150)">
        <circle cx="0" cy="0" r="25" fill="#f65625" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Customers</text>
      </g>

      {/* Arrows */}
      <path d="M 175 55 Q 220 80 245 125" stroke="#f65625" strokeWidth="2" fill="none" markerEnd="url(#arrowSales)" />
      <path d="M 245 175 Q 220 220 175 245" stroke="#f65625" strokeWidth="2" fill="none" markerEnd="url(#arrowSales)" />
      <path d="M 125 245 Q 80 220 55 175" stroke="#f65625" strokeWidth="2" fill="none" markerEnd="url(#arrowSales)" />
      <path d="M 55 125 Q 80 80 125 55" stroke="#f65625" strokeWidth="2" fill="none" markerEnd="url(#arrowSales)" />

      <defs>
        <marker id="arrowSales" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f65625" />
        </marker>
      </defs>
    </svg>
  )
}

// System Position Diagram
function SystemPositionDiagram() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto" aria-label="Sales in system diagram">
      {/* Marketing Loop */}
      <g transform="translate(60, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#028393" fontSize="10" fontWeight="600">Marketing</text>
      </g>

      {/* Sales Loop - highlighted */}
      <g transform="translate(170, 60)">
        <circle cx="0" cy="0" r="45" fill="#FEE8E1" stroke="#f65625" strokeWidth="4" />
        <text x="0" y="-5" textAnchor="middle" fill="#f65625" fontSize="11" fontWeight="700">Sales</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Express → Evolve</text>
      </g>

      {/* Service Loop */}
      <g transform="translate(280, 100)">
        <circle cx="0" cy="0" r="35" fill="#FEF3E8" stroke="#faaa68" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#faaa68" fontSize="10" fontWeight="600">Service</text>
      </g>

      {/* Ops Loop */}
      <g transform="translate(170, 150)">
        <circle cx="0" cy="0" r="35" fill="#E8EEF4" stroke="#3D5A80" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#3D5A80" fontSize="10" fontWeight="600">Ops</text>
      </g>

      {/* Arrows */}
      <path d="M 95 90 L 130 70" stroke="#028393" strokeWidth="2" markerEnd="url(#arrowTealSys)" />
      <text x="100" y="72" fill="#028393" fontSize="7">interest & context</text>

      <path d="M 210 70 L 245 90" stroke="#f65625" strokeWidth="2" markerEnd="url(#arrowOrangeSys)" />
      <text x="218" y="72" fill="#f65625" fontSize="7">new customers</text>

      <path d="M 100 110 L 130 105" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrowGraySys)" />

      <path d="M 245 110 L 210 105" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrowGraySys)" />
      <text x="210" y="120" fill="#98C1D9" fontSize="6">feedback</text>

      <path d="M 170 115 L 170 105" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrowGraySys)" />

      <defs>
        <marker id="arrowTealSys" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#028393" />
        </marker>
        <marker id="arrowOrangeSys" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#f65625" />
        </marker>
        <marker id="arrowGraySys" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#98C1D9" />
        </marker>
      </defs>
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
              <h2 className="font-display text-3xl font-medium text-brand-navy">{stage} In Loop Sales</h2>
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
    <section className="section-padding-lg bg-gradient-to-b from-[#FEE8E1] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-[#f65625] uppercase tracking-wider mb-4">
              Loop Sales
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Turn Sales Conversations Into A Learning Loop
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              Loop Sales is not just about &quot;closing deals.&quot; It&apos;s the loop that turns every buyer conversation into insight, decisions, and better customers for your business.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When Loop Sales runs well, reps know who to focus on, how to help, and when to walk away. Buyers feel guided, not pressured. The rest of the company gets a steady stream of real world feedback from the front lines.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              This page shows you how to treat sales as a loop that moves through four stages: <span className="text-[#028393] font-semibold">Express</span>, <span className="text-[#faaa68] font-semibold">Tailor</span>, <span className="text-[#f65625] font-semibold">Amplify</span>, and <span className="text-[#3D5A80] font-semibold">Evolve</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <SalesLoopDiagram />
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
              What Loop Sales Is And Why It Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Loop Sales is how you help the right people make clear, confident decisions about working with you.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              It includes your qualification, discovery, demos, proposals, negotiations, and handoffs. It covers all the moments when buyers decide whether they trust you and whether your solution fits their world.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In many companies, sales lives on an island. Reps create their own slides, write their own emails, and carry their own stories. Wins and losses stay inside individual inboxes.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              <strong className="text-brand-navy">Loop Sales changes that.</strong> Every call, email, and meeting becomes input. Patterns in questions, objections, and outcomes become shared learning.
            </p>
            <p className="font-body text-[#3D5A80] font-medium italic">
              Sales matters because it sits at the decision point. If you design that point as a loop, not a one time sprint, your whole revenue system gains clarity.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-100 rounded-xl border border-gray-200">
              <h4 className="font-display font-semibold text-gray-500 mb-2 line-through">Before: Hero Rep Mode</h4>
              <p className="font-body text-gray-500 text-sm">Individual reps create their own slides, emails, and stories. Wins and losses stay in individual inboxes. No shared learning.</p>
            </div>
            <div className="text-center text-2xl text-[#f65625]">↓</div>
            <div className="p-6 bg-[#FEE8E1] rounded-xl border-2 border-[#f65625]">
              <h4 className="font-display font-semibold text-[#f65625] mb-2">After: Shared Sales Loop</h4>
              <p className="font-body text-brand-navy text-sm">Every conversation becomes input. Patterns become shared learning that shapes who you sell to and how you sell.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SystemFitSection() {
  const outputs = [
    { to: 'Service', description: 'New customers and their context—clear notes and expectations for a smooth handoff.' },
    { to: 'Marketing', description: 'Win and loss reasons, stories from conversations, and what messages actually land.' },
    { to: 'Ops', description: 'Data needs, process friction, and requirements for better tools and automation.' },
  ]

  return (
    <section className="section-padding bg-[#FEE8E1]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Where Loop Sales Fits In The System
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Loop Sales sits between Loop Marketing and Loop Service, with Loop Ops underneath supporting everything.
          </p>
        </div>

        <SystemPositionDiagram />

        <div className="max-w-3xl mx-auto mt-8">
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            <strong className="text-brand-navy">Marketing sends interest, education, and context into the sales loop.</strong> Prospects arrive with some understanding of your story and your value.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            Loop Sales takes that interest and turns it into decisions. Along the way, sales learns which stories land, which promises backfire, and which buyers turn into the best customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          {outputs.map((c) => (
            <div key={c.to} className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-display font-semibold text-[#f65625] mb-2">Sales → {c.to}</h4>
              <p className="font-body text-sm text-text-secondary">{c.description}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-text-secondary text-center mt-8 max-w-2xl mx-auto">
          Service and Ops send signals back—which deals experience friction, which segments expand or churn, and where the process breaks. In a healthy Loop Revenue System, sales is not a black box.
        </p>
      </div>
    </section>
  )
}

function InputsOutputsSection() {
  const inputs = [
    'Leads, opportunities, and context from marketing',
    'Contact, company, and account data from ops',
    'Product knowledge, content, and proof points from across the business',
    'Feedback from service on which customers succeed or struggle',
  ]

  const outputs = [
    'New customers and expansion deals with clear notes and expectations',
    'Win and loss data broken down by segment, deal type, and reason',
    'Stories and patterns from conversations that marketing can use',
    'Requirements for better tools, data, and processes that ops can support',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Inputs And Outputs Of Loop Sales
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Loop Sales always has something coming in and something going out. Once you see sales as a loop, you stop asking only &quot;Did we hit quota?&quot; and start asking &quot;What did we learn this cycle?&quot;
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Inputs */}
            <div className="p-6 bg-[#FEE8E1] rounded-xl border border-[#f65625]/30">
              <h3 className="font-display font-semibold text-[#f65625] mb-4 flex items-center gap-2">
                <span>→</span> Inputs
              </h3>
              <ul className="space-y-3">
                {inputs.map((input, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#f65625]">•</span>
                    {input}
                  </li>
                ))}
              </ul>
            </div>

            {/* Loop Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#f65625] flex items-center justify-center">
                <span className="text-white text-3xl">🔄</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="p-6 bg-[#FEE8E1] rounded-xl border border-[#f65625]/30">
              <h3 className="font-display font-semibold text-[#f65625] mb-4 flex items-center gap-2">
                <span>←</span> Outputs
              </h3>
              <ul className="space-y-3">
                {outputs.map((output, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#f65625]">•</span>
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[#3D5A80] font-medium text-center mt-8">
            The question becomes: &quot;What did we learn this cycle, and who needs to hear it?&quot;
          </p>
        </div>
      </div>
    </section>
  )
}

function AiHumansSection() {
  const aiHelps = [
    'Captures and summarizes call notes so reps can focus on the conversation',
    'Suggests email drafts, follow up ideas, and next best actions based on patterns',
    'Flags at risk deals based on behavior and pipeline data',
    'Surfaces common themes in objections, questions, and stalled deals',
  ]

  const humansLead = [
    'Decide which opportunities deserve real attention',
    'Handle sensitive negotiations, risks, and emotions',
    'Choose which AI suggestions to use, adapt, or ignore',
    'Hold the line on ethical selling and honest promises',
  ]

  return (
    <section className="section-padding bg-[#FEE8E1]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            AI And Humans Inside Loop Sales
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            AI can make Loop Sales faster and more consistent, but it cannot replace human judgment or trust.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#f65625]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#f65625]">Where AI Helps</h3>
              </div>
              <ul className="space-y-3">
                {aiHelps.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f65625] mt-1">✓</span>
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
            Used well, AI does the repetitive work. Humans do the relational work. The loop benefits from both.
          </p>
        </div>
      </div>
    </section>
  )
}

function MetricsPitfallsSection() {
  const signals = [
    'How many opportunities match your agreed fit criteria, not just raw counts',
    'Win rate by segment, not just overall',
    'Average sales cycle length and where deals stall',
    'How often shared plays and assets are used and whether they affect outcomes',
    'Feedback from service on deal quality and expectation match',
  ]

  const pitfalls = [
    'Chasing activity counts without looking at quality',
    'Letting every rep define their own stages and fields in the CRM',
    'Ignoring win loss data and relying only on anecdotes',
    'Promising anything to close, which creates pain for service and ruins learning',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Simple Metrics And Common Pitfalls
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You don&apos;t need a complicated sales dashboard to run a healthy Loop Sales. You need a few clear signals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#f65625] bg-[#FEE8E1]">
              <h3 className="font-display text-lg font-semibold text-[#f65625] mb-4 flex items-center gap-2">
                <span>📊</span> Watch These Signals
              </h3>
              <ul className="space-y-3">
                {signals.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f65625] mt-1">✓</span>
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
              A good rule of thumb: if a metric doesn&apos;t guide changes in Express, Tailor, Amplify, or Evolve, treat it as background noise.
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
            How To Get Started With Loop Sales
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            You don&apos;t need to rebuild your sales org to start treating it like a loop. Start with one slice of your world—like inbound deals from a specific segment, or expansion deals in one product line.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            Walk that slice through the four stages:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stage: 'Express', q: 'How clear is it?' },
              { stage: 'Tailor', q: 'How personal?' },
              { stage: 'Amplify', q: 'What scales?' },
              { stage: 'Evolve', q: 'What changes?' },
            ].map((item) => (
              <div key={item.stage} className="p-4 bg-[#FEE8E1] rounded-lg">
                <p className="font-display font-semibold text-[#f65625] text-sm">{item.stage}</p>
                <p className="font-body text-xs text-text-secondary mt-1">{item.q}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-text-secondary mb-8">
            Then make one improvement in each stage and run the loop again.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="/playbooks/system"
            className="btn bg-[#f65625] text-white border-[#f65625] hover:bg-[#d94a1f]"
          >
            System Playbooks
          </Link>
          <Link
            href="/roles/start-here"
            className="btn bg-white text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            Start Here by Role
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <Link href="/playbooks/hubspot" className="font-body text-[#f65625] hover:underline">
            HubSpot Implementation →
          </Link>
          <Link href="/playbooks/no-hubspot" className="font-body text-[#f65625] hover:underline">
            No HubSpot Implementation →
          </Link>
          <Link href="/loops/marketing" className="font-body text-[#f65625] hover:underline">
            Loop Marketing →
          </Link>
        </div>

        <p className="font-body text-text-secondary text-center mt-12 max-w-xl mx-auto">
          Use Loop Sales to build a sales motion that learns from every conversation, supports the other loops, and helps your business flourish in a way that feels good to your team and your buyers.
        </p>
      </div>
    </section>
  )
}

export default function LoopSalesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Loop Sales',
            description: 'Turn every buyer conversation into insight, decisions, and better customers through Express, Tailor, Amplify, and Evolve.',
            url: `${siteUrl}/loops/sales`,
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
        purpose="Express is where sales decides how it will show up. It answers: Who should we spend time with? How do we define a good fit opportunity? What promises are we truly ready to keep? What steps should a healthy deal pass through?"
        work={[
          'Define ideal customer profiles and opportunity fit based on real success data',
          'Document a simple sales process with clear entry and exit criteria for each stage',
          'Agree on discovery questions, talk tracks, and key stories that fit your point of view',
          'Clarify which problems you solve well and which you intentionally do not try to solve',
        ]}
        support={[
          'Marketing knows which leads and segments actually convert and adjusts campaigns accordingly',
          'Service receives customers who have realistic expectations and clear outcomes',
          'Ops knows which fields and lifecycle transitions matter and can automate around them',
        ]}
      />

      {/* Tailor Stage */}
      <StageSection
        stage="Tailor"
        color="#faaa68"
        bgColor="bg-white border-b border-border-light"
        icon="◈"
        purpose="Tailor is where sales moves from 'our story' to 'your story.' It's the work of understanding a specific buyer's context, needs, and risks, then adjusting how you guide them. The difference between reading a script and having a real conversation."
        work={[
          'Research the account and people before outreach or a meeting',
          'Ask better questions instead of rushing to a generic demo',
          'Connect your value to their specific goals, constraints, and language',
          'Document key details in the CRM so the next interaction starts in the right place',
        ]}
        support={[
          'Marketing hears which segments and stories resonate most and adjusts Express and Tailor',
          'Service starts relationships with richer context on goals, risks, and stakeholders',
          'Ops has cleaner, more complete data to support routing, automation, and reporting',
        ]}
      />

      {/* Amplify Stage */}
      <StageSection
        stage="Amplify"
        color="#f65625"
        bgColor="bg-[#FEE8E1]"
        icon="◉"
        purpose="Amplify is how you spread what works beyond one rep or one deal. In many teams, great moments happen behind closed doors. One rep finds a way to explain a tricky idea, but it never spreads. Amplify turns those wins into shared plays."
        work={[
          'Capture winning email templates, call openers, and talk tracks in a shared library',
          'Build sequences and playbooks that reflect your best work, not just the quickest option',
          'Collaborate with marketing to turn great explanations into polished assets',
          'Use tools and enablement to help more reps adopt the same effective motions',
        ]}
        support={[
          'Marketing gets clear feedback about which messages and assets enable deals',
          'Service receives customers who have heard honest, consistent explanations',
          'Ops can see which plays lead to faster cycles and higher win rates',
        ]}
      />

      {/* Evolve Stage */}
      <StageSection
        stage="Evolve"
        color="#3D5A80"
        bgColor="bg-white border-b border-border-light"
        icon="↻"
        purpose="Evolve is where Loop Sales actually becomes a loop. It's where you stop and ask, 'What did we learn from our last cycle of deals?' Then you change how you qualify, sell, and enable based on those lessons."
        work={[
          'Run simple win loss reviews that look for patterns by segment, channel, and deal type',
          'Study how deals move through stages, where they stall, and where they rush',
          'Adjust qualification criteria, discovery questions, and steps based on evidence',
          'Update playbooks, training, and coaching with fresh examples, not just old decks',
        ]}
        support={[
          'Marketing gets clear signal on which leads and campaigns produce strong opportunities',
          'Service gets better context on which promises and expectations lead to happy customers',
          'Ops receives concrete ideas about where process and tooling need to change',
        ]}
      />

      <AiHumansSection />
      <MetricsPitfallsSection />
      <GetStartedSection />
    </>
  )
}
