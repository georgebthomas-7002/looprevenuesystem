import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Service Loop | Turn Customer Interactions Into Success | Loop Revenue System',
  description: 'Learn how to run service as a continuous loop through Express, Tailor, Amplify, and Evolve. Transform every customer interaction into fuel for long-term success.',
  openGraph: {
    title: 'Service Loop | Loop Revenue System',
    description: 'Turn every customer interaction into fuel for long-term success. Service as a loop that feeds insight back into the system.',
    type: 'article',
  },
}

// Service Loop Diagram
function ServiceLoopDiagram() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[280px] mx-auto" aria-label="Service loop diagram">
      {/* Main circle */}
      <circle cx="150" cy="150" r="100" fill="none" stroke="#faaa68" strokeWidth="3" strokeDasharray="8,4" />

      {/* Center */}
      <circle cx="150" cy="150" r="40" fill="#FEF3E8" stroke="#faaa68" strokeWidth="2" />
      <text x="150" y="145" textAnchor="middle" fill="#faaa68" fontSize="11" fontWeight="600">Loop</text>
      <text x="150" y="160" textAnchor="middle" fill="#faaa68" fontSize="11" fontWeight="600">Service</text>

      {/* Stage nodes */}
      <g transform="translate(150, 50)">
        <circle cx="0" cy="0" r="25" fill="#faaa68" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">Onboarding</text>
      </g>
      <g transform="translate(250, 150)">
        <circle cx="0" cy="0" r="25" fill="#faaa68" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Support</text>
      </g>
      <g transform="translate(150, 250)">
        <circle cx="0" cy="0" r="25" fill="#faaa68" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Success</text>
      </g>
      <g transform="translate(50, 150)">
        <circle cx="0" cy="0" r="25" fill="#faaa68" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Insight</text>
      </g>

      {/* Arrows */}
      <path d="M 175 55 Q 220 80 245 125" stroke="#faaa68" strokeWidth="2" fill="none" markerEnd="url(#arrowService)" />
      <path d="M 245 175 Q 220 220 175 245" stroke="#faaa68" strokeWidth="2" fill="none" markerEnd="url(#arrowService)" />
      <path d="M 125 245 Q 80 220 55 175" stroke="#faaa68" strokeWidth="2" fill="none" markerEnd="url(#arrowService)" />
      <path d="M 55 125 Q 80 80 125 55" stroke="#faaa68" strokeWidth="2" fill="none" markerEnd="url(#arrowService)" />

      <defs>
        <marker id="arrowService" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#faaa68" />
        </marker>
      </defs>
    </svg>
  )
}

// System Position Diagram
function SystemPositionDiagram() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto" aria-label="Service in system diagram">
      {/* Marketing Loop */}
      <g transform="translate(60, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#028393" fontSize="10" fontWeight="600">Marketing</text>
      </g>

      {/* Sales Loop */}
      <g transform="translate(170, 60)">
        <circle cx="0" cy="0" r="35" fill="#FEE8E1" stroke="#f65625" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#f65625" fontSize="10" fontWeight="600">Sales</text>
      </g>

      {/* Service Loop - highlighted */}
      <g transform="translate(280, 100)">
        <circle cx="0" cy="0" r="45" fill="#FEF3E8" stroke="#faaa68" strokeWidth="4" />
        <text x="0" y="-5" textAnchor="middle" fill="#faaa68" fontSize="11" fontWeight="700">Service</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Express → Evolve</text>
      </g>

      {/* Ops Loop */}
      <g transform="translate(170, 150)">
        <circle cx="0" cy="0" r="35" fill="#E8EEF4" stroke="#3D5A80" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#3D5A80" fontSize="10" fontWeight="600">Ops</text>
      </g>

      {/* Arrows */}
      <path d="M 205 60 L 240 80" stroke="#f65625" strokeWidth="2" markerEnd="url(#arrowOrangeSys)" />
      <text x="208" y="62" fill="#f65625" fontSize="7">new customers</text>

      <path d="M 235 100 L 100 100" stroke="#faaa68" strokeWidth="2" markerEnd="url(#arrowPeachSys)" />
      <text x="160" y="92" fill="#faaa68" fontSize="7">stories & feedback</text>

      <path d="M 250 130 L 200 145" stroke="#faaa68" strokeWidth="1.5" markerEnd="url(#arrowPeachSys)" />
      <text x="210" y="148" fill="#faaa68" fontSize="6">process feedback</text>

      <defs>
        <marker id="arrowOrangeSys" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#f65625" />
        </marker>
        <marker id="arrowPeachSys" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#faaa68" />
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
              <h2 className="font-display text-3xl font-medium text-brand-navy">{stage} In the Service Loop</h2>
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
    <section className="section-padding-lg bg-gradient-to-b from-[#FEF3E8] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-[#faaa68] uppercase tracking-wider mb-4">
              Service Loop
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Turn Every Customer Interaction Into Fuel For Long Term Success
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              Service Loop is not just a support queue. It&apos;s the loop that takes care of customers after the sale, keeps them successful, and sends priceless insight back into marketing, sales, and ops.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When Service Loop runs well, customers feel guided instead of abandoned. Problems turn into improvements. Wins turn into stories. The rest of the company hears clearly what life is like on the other side of the sale.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              This page shows you how to treat service as a loop that moves through four stages: <span className="text-[#028393] font-semibold">Express</span>, <span className="text-[#faaa68] font-semibold">Tailor</span>, <span className="text-[#f65625] font-semibold">Amplify</span>, and <span className="text-[#3D5A80] font-semibold">Evolve</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <ServiceLoopDiagram />
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
              What Service Loop Is And Why It Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Service Loop is how you help customers succeed after they buy.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              It includes onboarding, training, reactive support, proactive check ins, customer success programs, and communities. It covers all the moments when customers decide whether to stay, grow, or leave.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In many companies, service is treated as a cost center. The goal quietly becomes &quot;handle issues fast and cheap.&quot; Tickets get closed, but the same problems keep coming back. Insight stays trapped in the inbox.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              <strong className="text-brand-navy">Service Loop changes that.</strong> Every ticket, call, and interaction becomes input. Patterns in questions, outcomes, and frustrations become learning.
            </p>
            <p className="font-body text-[#3D5A80] font-medium italic">
              Service matters because it sees the truth. It sees whether your marketing promises and sales stories actually match real life.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-100 rounded-xl border border-gray-200">
              <h4 className="font-display font-semibold text-gray-500 mb-2 line-through">Before: Support Only Mode</h4>
              <p className="font-body text-gray-500 text-sm">Handle issues fast and cheap. Close tickets. Same problems keep coming back. Insight stays trapped in the inbox.</p>
            </div>
            <div className="text-center text-2xl text-[#faaa68]">↓</div>
            <div className="p-6 bg-[#FEF3E8] rounded-xl border-2 border-[#faaa68]">
              <h4 className="font-display font-semibold text-[#faaa68] mb-2">After: Service Loop Mode</h4>
              <p className="font-body text-brand-navy text-sm">Every interaction becomes input. Patterns become learning that shapes product, process, and promises.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SystemFitSection() {
  const receives = [
    { from: 'Sales', description: 'New customers and context: deal notes, expectations, and key contacts.' },
    { from: 'Marketing', description: 'Content, expectations, and education that customers have already seen.' },
    { from: 'Ops', description: 'Tools, data, and workflows that power tickets, success plans, and feedback.' },
  ]

  const sends = [
    { to: 'Marketing & Sales', description: 'Success stories, customer language, and what messages actually match reality.' },
    { to: 'Ops & Product', description: 'Product feedback, process friction, and ideas for improvements.' },
  ]

  return (
    <section className="section-padding bg-[#FEF3E8]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Where Service Loop Fits In The System
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Service Loop sits after the initial sale, but it&apos;s not the end of the story. It&apos;s the part of the system that decides whether customers stay, expand, refer, or churn.
          </p>
        </div>

        <SystemPositionDiagram />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Service Receives</h3>
            <div className="space-y-3">
              {receives.map((r) => (
                <div key={r.from} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-display font-semibold text-[#faaa68] text-sm mb-1">{r.from} →</h4>
                  <p className="font-body text-sm text-text-secondary">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Service Sends</h3>
            <div className="space-y-3">
              {sends.map((s) => (
                <div key={s.to} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-display font-semibold text-[#faaa68] text-sm mb-1">→ {s.to}</h4>
                  <p className="font-body text-sm text-text-secondary">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-body text-text-secondary text-center mt-8 max-w-2xl mx-auto">
          When Service Loop is treated as part of the same system, customers feel a through line from the first content they see to the help they receive months later.
        </p>
      </div>
    </section>
  )
}

function InputsOutputsSection() {
  const inputs = [
    'Deal notes, expectations, and key contacts from sales',
    'Product configuration and usage data from ops and product',
    'Help content and educational materials from past service cycles',
  ]

  const outputs = [
    'Customers who are either confident, confused, or at risk',
    'Feedback on friction points, confusing features, and gaps in enablement',
    'Real customer language, quotes, and stories',
    'Signals that point to expansion opportunities or churn risk',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Inputs And Outputs Of Service Loop
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Service Loop has to work with what it&apos;s given. It also has a lot to give back. The question is: Are we getting the right inputs? Are we sharing our outputs with anyone who can act on them?
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Inputs */}
            <div className="p-6 bg-[#FEF3E8] rounded-xl border border-[#faaa68]/30">
              <h3 className="font-display font-semibold text-[#faaa68] mb-4 flex items-center gap-2">
                <span>→</span> Inputs
              </h3>
              <ul className="space-y-3">
                {inputs.map((input, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#faaa68]">•</span>
                    {input}
                  </li>
                ))}
              </ul>
            </div>

            {/* Loop Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#faaa68] flex items-center justify-center">
                <span className="text-white text-3xl">🔄</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="p-6 bg-[#FEF3E8] rounded-xl border border-[#faaa68]/30">
              <h3 className="font-display font-semibold text-[#faaa68] mb-4 flex items-center gap-2">
                <span>←</span> Outputs
              </h3>
              <ul className="space-y-3">
                {outputs.map((output, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#faaa68]">•</span>
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
    'Suggests relevant help articles or answers based on the question and context',
    'Handles simple, repetitive issues in chat or email with clear, transparent automation',
    'Summarizes long ticket threads or call recordings so humans can step in quickly',
    'Flags risk patterns, such as repeated issues for specific segments',
  ]

  const humansLead = [
    'Handle emotional, complex, or high impact situations',
    'Decide when to bend process to do what is right for the customer',
    'Interpret feedback and decide which product or process changes to push',
    'Protect privacy and set boundaries for data and automation',
  ]

  return (
    <section className="section-padding bg-[#FEF3E8]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            AI And Humans Inside Service Loop
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            AI can add a lot of leverage to Service Loop, but it must stay in a supporting role.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#faaa68]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#faaa68]">Where AI Helps</h3>
              </div>
              <ul className="space-y-3">
                {aiHelps.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#faaa68] mt-1">✓</span>
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
            In the Service Loop, AI saves time. Humans create trust.
          </p>
        </div>
      </div>
    </section>
  )
}

function MetricsPitfallsSection() {
  const signals = [
    'Whether customers reach their first meaningful outcome in a reasonable time',
    'How often customers return with the same issues and questions',
    'What percentage of tickets lead to updates in your knowledge base or product',
    'Retention and expansion rates by segment, and reasons customers give when they leave',
    'How often service insights lead to changes in marketing, sales, or ops',
  ]

  const pitfalls = [
    'Celebrating ticket volume and speed only, without asking if customers actually succeeded',
    'Treating every account the same, regardless of size, fit, or potential',
    'Keeping feedback inside service instead of sharing it with other loops',
    'Over automating responses so support starts to feel cold or unhelpful',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Simple Metrics And Common Pitfalls
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You don&apos;t need a wall of dashboards to know whether Service Loop is healthy.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#faaa68] bg-[#FEF3E8]">
              <h3 className="font-display text-lg font-semibold text-[#faaa68] mb-4 flex items-center gap-2">
                <span>📊</span> Watch These Signals
              </h3>
              <ul className="space-y-3">
                {signals.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#faaa68] mt-1">✓</span>
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
              A simple test: if your best customers still feel like they&apos;re &quot;figuring it out on their own,&quot; Service Loop needs attention.
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
            How To Get Started With Service Loop
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            You don&apos;t have to redesign your whole service org to start treating it like a loop. Start with one area, such as onboarding for a key product or support for a core segment.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            Walk that area through the four stages:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stage: 'Express', q: 'What does good look like?' },
              { stage: 'Tailor', q: 'How contextual?' },
              { stage: 'Amplify', q: 'What scales?' },
              { stage: 'Evolve', q: 'What changes?' },
            ].map((item) => (
              <div key={item.stage} className="p-4 bg-[#FEF3E8] rounded-lg">
                <p className="font-display font-semibold text-[#faaa68] text-sm">{item.stage}</p>
                <p className="font-body text-xs text-text-secondary mt-1">{item.q}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-text-secondary mb-8">
            Then make one small improvement in each stage and see what changes.
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
          <Link href="/resources/templates-checklists" className="font-body text-[#faaa68] hover:underline">
            Templates & Checklists →
          </Link>
          <Link href="/resources/workshops-exercises" className="font-body text-[#faaa68] hover:underline">
            Workshops & Exercises →
          </Link>
          <Link href="/loops/sales" className="font-body text-[#faaa68] hover:underline">
            Sales Loop →
          </Link>
        </div>

        <p className="font-body text-text-secondary text-center mt-12 max-w-xl mx-auto">
          Use Service Loop to turn support into a source of learning, loyalty, and momentum. When this loop gets stronger, customers stay longer, refer more, and help your whole revenue system flourish.
        </p>
      </div>
    </section>
  )
}

export default function LoopServicePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Service Loop',
            description: 'Turn every customer interaction into fuel for long-term success through Express, Tailor, Amplify, and Evolve.',
            url: `${siteUrl}/loops/service`,
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
        purpose="Express is where service decides how it will show up for customers. It answers: How do we want customers to feel after they talk with us? What does successful onboarding look like? Which channels will we support?"
        work={[
          'Define your service philosophy in simple language: helpful, honest, calm',
          'Map the post sale journey from deal close through onboarding, adoption, and renewal',
          'Agree on what success means for different types of customers',
          'Set simple service levels and rules for how issues are handled',
        ]}
        support={[
          'Marketing knows what kind of experience they can safely promise',
          'Sales knows how to frame expectations around onboarding and support',
          'Ops knows what objects, fields, and workflows to set up for tickets and success plans',
        ]}
      />

      {/* Tailor Stage */}
      <StageSection
        stage="Tailor"
        color="#faaa68"
        bgColor="bg-white border-b border-border-light"
        icon="◈"
        purpose="Tailor is where service moves from generic answers to truly contextual help. It's about seeing the person, not just the ticket: knowing their history, their setup, their goals, and responding in a way that matches."
        work={[
          'Look at customer profile, product usage, and past interactions before you reply',
          'Adjust tone, depth, and format based on who you are talking to',
          'Offer different paths for different segments, with higher touch for strategic accounts',
          'Proactively reach out when you see risk signals, instead of waiting for complaints',
        ]}
        support={[
          'Marketing learns which segments need different onboarding and education',
          'Sales can speak more honestly about what support looks like for different tiers',
          'Ops can build better views, alerts, and workflows around key customer segments',
        ]}
      />

      {/* Amplify Stage */}
      <StageSection
        stage="Amplify"
        color="#f65625"
        bgColor="bg-[#FEF3E8]"
        icon="◉"
        purpose="Amplify is how service turns one good answer into many helpful resources. If you solve the same problem five times a week in one-on-one channels, your loop is leaking energy. Amplify plugs that leak."
        work={[
          'Turn recurring questions into clear knowledge base articles and short videos',
          'Add in-app guidance, tooltips, or checklists where users most often get stuck',
          'Share patterns with marketing so they can create preemptive content',
          'Build communities or forums where customers can help each other',
        ]}
        support={[
          'Marketing has more specific content ideas tied directly to customer questions',
          'Sales can show prospects a real library of help resources, building trust',
          'Ops can embed help content into flows and track which resources reduce issues',
        ]}
      />

      {/* Evolve Stage */}
      <StageSection
        stage="Evolve"
        color="#3D5A80"
        bgColor="bg-white border-b border-border-light"
        icon="↻"
        purpose="Evolve is where service turns daily interactions into long term improvements. It goes beyond 'How many tickets did we close?' and asks 'What does all of this tell us about our product, process, and promises?'"
        work={[
          'Track signals: onboarding completion, time to first value, satisfaction, retention',
          'Read qualitative feedback from tickets, surveys, and conversations with an open mind',
          'Spot patterns in what confuses customers, what delights them, where they hesitate',
          'Share patterns with marketing, sales, ops, and product, along with suggestions',
        ]}
        support={[
          'Marketing updates messaging to better match reality and highlight valued moments',
          'Sales adjusts qualification and promises based on who gets stuck and who succeeds',
          'Ops prioritizes changes to flows and automations based on what customers experience',
        ]}
      />

      <AiHumansSection />
      <MetricsPitfallsSection />
      <GetStartedSection />
    </>
  )
}
