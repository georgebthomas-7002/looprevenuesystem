import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Marketing Loop | Turn Customer Questions Into Content | Loop Revenue System',
  description: 'Learn how to run marketing as a continuous loop through Express, Tailor, Amplify, and Evolve. Build content that sounds like your customers and helps your whole revenue engine.',
  openGraph: {
    title: 'Marketing Loop | Loop Revenue System',
    description: 'Turn real customer questions into a continuous marketing loop. Content that sounds like your customers and feeds your whole revenue engine.',
    type: 'article',
  },
}

// Marketing Loop Diagram
function MarketingLoopDiagram() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-[280px] mx-auto" aria-label="Marketing loop diagram">
      {/* Main circle */}
      <circle cx="150" cy="150" r="100" fill="none" stroke="#028393" strokeWidth="3" strokeDasharray="8,4" />

      {/* Center */}
      <circle cx="150" cy="150" r="40" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
      <text x="150" y="145" textAnchor="middle" fill="#028393" fontSize="11" fontWeight="600">Loop</text>
      <text x="150" y="160" textAnchor="middle" fill="#028393" fontSize="11" fontWeight="600">Marketing</text>

      {/* Stage nodes */}
      <g transform="translate(150, 50)">
        <circle cx="0" cy="0" r="25" fill="#028393" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Questions</text>
      </g>
      <g transform="translate(250, 150)">
        <circle cx="0" cy="0" r="25" fill="#028393" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Content</text>
      </g>
      <g transform="translate(150, 250)">
        <circle cx="0" cy="0" r="25" fill="#028393" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Convos</text>
      </g>
      <g transform="translate(50, 150)">
        <circle cx="0" cy="0" r="25" fill="#028393" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Insight</text>
      </g>

      {/* Arrows */}
      <path d="M 175 55 Q 220 80 245 125" stroke="#028393" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 245 175 Q 220 220 175 245" stroke="#028393" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 125 245 Q 80 220 55 175" stroke="#028393" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 55 125 Q 80 80 125 55" stroke="#028393" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#028393" />
        </marker>
      </defs>
    </svg>
  )
}

// System Position Diagram
function SystemPositionDiagram() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto" aria-label="Marketing in system diagram">
      {/* Marketing Loop - highlighted */}
      <g transform="translate(60, 100)">
        <circle cx="0" cy="0" r="45" fill="#E0FBFC" stroke="#028393" strokeWidth="4" />
        <text x="0" y="-5" textAnchor="middle" fill="#028393" fontSize="11" fontWeight="700">Marketing</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Express → Evolve</text>
      </g>

      {/* Sales Loop */}
      <g transform="translate(170, 60)">
        <circle cx="0" cy="0" r="35" fill="#FEE8E1" stroke="#f65625" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#f65625" fontSize="10" fontWeight="600">Sales</text>
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
      <path d="M 100 85 L 135 70" stroke="#028393" strokeWidth="2" markerEnd="url(#arrowTeal)" />
      <text x="115" y="68" fill="#028393" fontSize="8">qualified interest</text>

      <path d="M 245 100 L 105 100" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrowGray)" />
      <text x="175" y="95" fill="#98C1D9" fontSize="7">feedback</text>

      <path d="M 170 115 L 105 100" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrowGray)" />

      <defs>
        <marker id="arrowTeal" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#028393" />
        </marker>
        <marker id="arrowGray" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
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
              <h2 className="font-display text-3xl font-medium text-brand-navy">{stage} In the Marketing Loop</h2>
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
    <section className="section-padding-lg bg-gradient-to-b from-[#E0FBFC] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-[#028393] uppercase tracking-wider mb-4">
              Marketing Loop
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Turn Real Customer Questions Into A Continuous Marketing Loop
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              Marketing Loop is not just a department that &quot;gets leads.&quot; It&apos;s the loop that listens to the market, shapes your voice, shares your best ideas, and passes qualified interest and insight into your revenue engine.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When Marketing Loop runs well, your content sounds like your customers, your campaigns feel useful, and your sales and service teams say, &quot;This actually helps.&quot;
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              This page shows you how to think about marketing as a loop that moves through four stages: <span className="text-[#028393] font-semibold">Express</span>, <span className="text-[#faaa68] font-semibold">Tailor</span>, <span className="text-[#f65625] font-semibold">Amplify</span>, and <span className="text-[#3D5A80] font-semibold">Evolve</span>.
            </p>
          </div>
          <div className="flex justify-center">
            <MarketingLoopDiagram />
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
              What Marketing Loop Is And Why It Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Marketing Loop is how you learn what to say, who to say it to, and where to show up so the right humans find you and feel understood.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              It&apos;s the sum of all the ways you show up in public: your website, social posts, videos, emails, events, ads, and the content your team shares in conversations.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              <strong className="text-brand-navy">The goal is not to flood channels.</strong> The goal is to run a loop where every campaign, asset, and touch teaches you something.
            </p>

            <div className="space-y-3 mb-6">
              {['Listen to customers', 'Express your point of view', 'Tailor your messages', 'Amplify what works', 'Evolve based on learning'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#028393] text-white flex items-center justify-center text-sm font-bold">{i + 1}</div>
                  <span className="font-body text-text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-[#3D5A80] font-medium italic">
              Marketing matters because it sets the story everyone else must live with. When Marketing Loop is healthy, the rest of the system has an easier job.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-100 rounded-xl border border-gray-200">
              <h4 className="font-display font-semibold text-gray-500 mb-2 line-through">Before: Random Mode</h4>
              <p className="font-body text-gray-500 text-sm">Random campaigns and one-off assets. Each piece feels disconnected. No clear learning.</p>
            </div>
            <div className="text-center text-2xl text-[#028393]">↓</div>
            <div className="p-6 bg-[#E0FBFC] rounded-xl border-2 border-[#028393]">
              <h4 className="font-display font-semibold text-[#028393] mb-2">After: Loop Mode</h4>
              <p className="font-body text-brand-navy text-sm">A learning loop that feeds the whole system. Every piece connects. Continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SystemFitSection() {
  const connections = [
    { to: 'Sales', description: 'Marketing passes qualified attention, education, and context. Buyers arrive understanding your core ideas.' },
    { to: 'Service', description: 'Marketing shares helpful content and sets expectations for what happens after purchase.' },
    { to: 'Ops', description: 'Marketing tells Ops what it needs from data, tools, and processes to target and measure effectively.' },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Where Marketing Loop Fits In The System
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Marketing Loop sits at the front of your visible story, but it&apos;s not only about &quot;top of funnel.&quot; It listens, shapes Express, then runs Tailor, Amplify, and Evolve on repeat.
          </p>
        </div>

        <SystemPositionDiagram />

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {connections.map((c) => (
            <div key={c.to} className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-display font-semibold text-[#028393] mb-2">Marketing → {c.to}</h4>
              <p className="font-body text-sm text-text-secondary">{c.description}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-text-secondary text-center mt-8 max-w-2xl mx-auto">
          Sales, Service, and Ops all send signals back: questions buyers ask, promises that land, issues customers face, system friction. Marketing Loop uses that learning to express more clearly next time.
        </p>
      </div>
    </section>
  )
}

function InputsOutputsSection() {
  const inputs = [
    'Customer conversations and call transcripts from Sales and Service',
    'Search queries and on-site behaviors',
    'Feedback from forms, surveys, and social channels',
    'Product usage insights and common "how do I" questions',
  ]

  const outputs = [
    'Clear messaging and positioning the whole company can use',
    'Educational content that answers real questions',
    'Campaigns that attract the right people, not just any people',
    'Insight about which segments, stories, and offers are gaining energy',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Inputs And Outputs Of Marketing Loop
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Marketing Loop does not start from a blank page. It feeds on real inputs and ships valuable outputs to the rest of the system.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Inputs */}
            <div className="p-6 bg-[#E0FBFC] rounded-xl border border-[#98C1D9]">
              <h3 className="font-display font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>→</span> Inputs
              </h3>
              <ul className="space-y-3">
                {inputs.map((input, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#028393]">•</span>
                    {input}
                  </li>
                ))}
              </ul>
            </div>

            {/* Loop Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#028393] flex items-center justify-center">
                <span className="text-white text-3xl">🔄</span>
              </div>
            </div>

            {/* Outputs */}
            <div className="p-6 bg-[#E0FBFC] rounded-xl border border-[#98C1D9]">
              <h3 className="font-display font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>←</span> Outputs
              </h3>
              <ul className="space-y-3">
                {outputs.map((output, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-[#028393]">•</span>
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[#3D5A80] font-medium text-center mt-8">
            The question becomes: &quot;What are we feeding it?&quot; and &quot;What are we shipping back to the rest of the system?&quot;
          </p>
        </div>
      </div>
    </section>
  )
}

function AiHumansSection() {
  const aiHelps = [
    'Summarizes customer interviews, calls, and feedback to surface patterns',
    'Suggests outlines, drafts, and variations humans refine',
    'Creates segment ideas based on behavior and context',
    'Repurposes core content into different formats',
    'Surfaces patterns in performance data',
  ]

  const humansLead = [
    'Decide what you stand for and what you won\'t say',
    'Draw the line on how far personalization should go',
    'Choose which ideas and campaigns deserve amplification',
    'Interpret the story behind the numbers',
    'Protect consent, privacy, and long-term relationships',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            AI And Humans Inside Marketing Loop
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            AI can speed up Marketing Loop, but it cannot replace your judgment or your values.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#028393]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">Where AI Helps</h3>
              </div>
              <ul className="space-y-3">
                {aiHelps.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">✓</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#faaa68]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#faaa68]/10 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#faaa68]">Where Humans Lead</h3>
              </div>
              <ul className="space-y-3">
                {humansLead.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#faaa68] mt-1">★</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[#3D5A80] font-medium text-center mt-8">
            Marketing Loop gets more powerful when AI does its part and humans stay accountable for how customers feel.
          </p>
        </div>
      </div>
    </section>
  )
}

function MetricsPitfallsSection() {
  const signals = [
    'Whether the right humans engage with your content, not just anyone',
    'How often humans move from content into meaningful actions',
    'How often Sales and Service actually use your marketing assets',
    'Whether experiments change outcomes, not just vanity numbers',
  ]

  const pitfalls = [
    'Chasing impressions and followers that never show up in real conversations',
    'Running campaigns that ignore what Sales and Service already know',
    'Personalizing based on data you never got clear consent to use',
    'Automating follow-up that feels spammy because Express and Tailor are weak',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Simple Metrics And Common Pitfalls
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You don&apos;t need a hundred marketing metrics. You need a few that tell you whether your loop is healthy.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#028393] bg-[#E0FBFC]">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>📊</span> Watch These Signals
              </h3>
              <ul className="space-y-3">
                {signals.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">✓</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-[#f65625] bg-red-50">
              <h3 className="font-display text-lg font-semibold text-[#f65625] mb-4 flex items-center gap-2">
                <span>⚠️</span> Avoid These Traps
              </h3>
              <ul className="space-y-3">
                {pitfalls.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f65625] mt-1">✗</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-border-light text-center">
            <p className="font-body text-[#3D5A80] font-medium">
              Simple test: If a metric doesn&apos;t change any decision in Express, Tailor, Amplify, or Evolve, it&apos;s probably decoration.
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
            How To Get Started With Marketing Loop
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            You don&apos;t need a brand new strategy deck. Pick one area of your marketing (your blog, main email sequence, or a core campaign) and ask four questions:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stage: 'Express', q: 'How clear is it?' },
              { stage: 'Tailor', q: 'How personal?' },
              { stage: 'Amplify', q: 'What scales?' },
              { stage: 'Evolve', q: 'What changes?' },
            ].map((item) => (
              <div key={item.stage} className="p-4 bg-[#E0FBFC] rounded-lg">
                <p className="font-display font-semibold text-[#028393] text-sm">{item.stage}</p>
                <p className="font-body text-xs text-text-secondary mt-1">{item.q}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-text-secondary mb-8">
            Then make one small improvement in each stage for that area.
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
            href="/loops"
            className="btn bg-white text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            Four Loops Overview
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <Link href="/resources/templates-checklists" className="font-body text-[#028393] hover:underline">
            Templates &amp; Checklists →
          </Link>
          <Link href="/resources/prompts-workflows" className="font-body text-[#028393] hover:underline">
            Prompts &amp; Workflows →
          </Link>
        </div>

        <p className="font-body text-text-secondary text-center mt-12 max-w-xl mx-auto">
          Use Marketing Loop to listen better, express more clearly, and pass more value to the rest of your revenue engine. The more this loop improves, the easier it becomes for every other loop to do its job.
        </p>
      </div>
    </section>
  )
}

export default function LoopMarketingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Marketing Loop',
            description: 'Turn real customer questions into a continuous marketing loop through Express, Tailor, Amplify, and Evolve.',
            url: `${siteUrl}/loops/marketing`,
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
        purpose="Express is where marketing decides how to show up. It answers: Who are we for? What problems do we solve? What do we believe that's different? How do we sound?"
        work={[
          'Clarify ideal customer profiles based on real data',
          'Document core positioning and point of view',
          'Define main content pillars and themes',
          'Map customer questions at each journey step',
          'Set decisions about tone, visuals, and structure',
        ]}
        support={[
          'Sales knows which stories to tell and promises to reinforce',
          'Service understands what customers think they signed up for',
          'Ops knows which fields and lifecycle stages matter and why',
        ]}
      />

      {/* Tailor Stage */}
      <StageSection
        stage="Tailor"
        color="#faaa68"
        bgColor="bg-white border-b border-border-light"
        icon="◈"
        purpose="Tailor is where your clear message becomes personal and contextual. Not creepy tracking, but being specific enough to be useful. The difference between generic and 'they get me.'"
        work={[
          'Segment by meaningful differences (industry, size, role, challenge)',
          'Adjust subject lines, intros, and examples per segment',
          'Respect where someone is in their journey',
          'Use first-party data and consented signals',
          'Listen for words your best customers use',
        ]}
        support={[
          'Sales walks into conversations with prospects who feel understood',
          'Service sees customers who already understand basics',
          'Ops can design segments that track real behavior',
        ]}
      />

      {/* Amplify Stage */}
      <StageSection
        stage="Amplify"
        color="#f65625"
        bgColor="bg-[#E0FBFC]"
        icon="◉"
        purpose="Amplify is how you scale what works without burning out your team or audience. Not a hundred new ideas, but a few strong ideas expressed well, tailored thoughtfully, then amplified across channels."
        work={[
          'Turn one strong piece into multiple smaller assets',
          'Reuse best explanations in different formats',
          'Use automation so content keeps working',
          'Coach internal experts to share core ideas',
          'Amplify signal, not noise, based on what you learn',
        ]}
        support={[
          'Sales has a rich library of content for before and after calls',
          'Service has up-to-date articles and videos for stuck customers',
          'Ops can embed content into product flows and lifecycle comms',
        ]}
      />

      {/* Evolve Stage */}
      <StageSection
        stage="Evolve"
        color="#3D5A80"
        bgColor="bg-white border-b border-border-light"
        icon="↻"
        purpose="Evolve is where Marketing Loop actually becomes a loop. Look at what happened, listen to feedback, change how you express, tailor, and amplify. Without Evolve, you're just shipping and hoping."
        work={[
          'Review performance in a regular rhythm',
          'Ask "What worked and why?" not just "How many?"',
          'Run focused experiments for specific segments',
          'Close the loop with Sales and Service for qualitative feedback',
          'Feed insights back into strategy and channel mix',
        ]}
        support={[
          'Sales sees marketing call out segments and messages that convert',
          'Service sees content that addresses real customer issues',
          'Ops gets clearer requirements based on actual decisions',
        ]}
      />

      <AiHumansSection />
      <MetricsPitfallsSection />
      <GetStartedSection />
    </>
  )
}
