import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Data, Metrics, and Governance | Loop Revenue System',
  description: 'How to manage data quality, define shared metrics, and establish governance across your revenue loops. The nervous system behind your revenue engine.',
  openGraph: {
    title: 'Data, Metrics, and Governance | Loop Revenue System',
    description: 'The nervous system behind your revenue loops. Learn how to manage data, metrics, and governance for a healthy loop system.',
    type: 'article',
  },
}

// Visual: Four loops connected by a data backbone
function DataBackboneDiagram() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-label="Four loops connected by data backbone">
      {/* Central data backbone line */}
      <line x1="50" y1="100" x2="350" y2="100" stroke="#028393" strokeWidth="3" strokeDasharray="8,4" />

      {/* Loop circles with metric icons */}
      <g transform="translate(80, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">Marketing</text>
        <circle cx="0" cy="-50" r="8" fill="#028393" />
        <text x="0" y="-47" textAnchor="middle" fill="white" fontSize="8">M</text>
      </g>

      <g transform="translate(160, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#faaa68" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">Sales</text>
        <circle cx="0" cy="-50" r="8" fill="#faaa68" />
        <text x="0" y="-47" textAnchor="middle" fill="white" fontSize="8">S</text>
      </g>

      <g transform="translate(240, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#f65625" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">Service</text>
        <circle cx="0" cy="-50" r="8" fill="#f65625" />
        <text x="0" y="-47" textAnchor="middle" fill="white" fontSize="8">Sv</text>
      </g>

      <g transform="translate(320, 100)">
        <circle cx="0" cy="0" r="35" fill="#E0FBFC" stroke="#3D5A80" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">Ops</text>
        <circle cx="0" cy="-50" r="8" fill="#3D5A80" />
        <text x="0" y="-47" textAnchor="middle" fill="white" fontSize="8">O</text>
      </g>

      {/* Data flow dots on backbone */}
      <circle cx="120" cy="100" r="4" fill="#028393" />
      <circle cx="200" cy="100" r="4" fill="#028393" />
      <circle cx="280" cy="100" r="4" fill="#028393" />
    </svg>
  )
}

// Entity relationship diagram
function DataFoundationsDiagram() {
  return (
    <svg viewBox="0 0 400 280" className="w-full max-w-lg mx-auto" aria-label="Data foundations entity diagram">
      {/* Central hub */}
      <rect x="150" y="110" width="100" height="60" rx="8" fill="#028393" />
      <text x="200" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Activities</text>

      {/* Contacts */}
      <rect x="30" y="20" width="90" height="50" rx="8" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
      <text x="75" y="50" textAnchor="middle" fill="#142d63" fontSize="11" fontWeight="600">Contacts</text>
      <line x1="120" y1="45" x2="150" y2="110" stroke="#028393" strokeWidth="2" />

      {/* Companies */}
      <rect x="280" y="20" width="90" height="50" rx="8" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
      <text x="325" y="50" textAnchor="middle" fill="#142d63" fontSize="11" fontWeight="600">Companies</text>
      <line x1="280" y1="45" x2="250" y2="110" stroke="#028393" strokeWidth="2" />

      {/* Deals */}
      <rect x="30" y="210" width="90" height="50" rx="8" fill="#E0FBFC" stroke="#faaa68" strokeWidth="2" />
      <text x="75" y="240" textAnchor="middle" fill="#142d63" fontSize="11" fontWeight="600">Deals</text>
      <line x1="120" y1="235" x2="150" y2="170" stroke="#faaa68" strokeWidth="2" />

      {/* Tickets */}
      <rect x="280" y="210" width="90" height="50" rx="8" fill="#E0FBFC" stroke="#f65625" strokeWidth="2" />
      <text x="325" y="240" textAnchor="middle" fill="#142d63" fontSize="11" fontWeight="600">Tickets</text>
      <line x1="280" y1="235" x2="250" y2="170" stroke="#f65625" strokeWidth="2" />

      {/* Connection between Contacts and Companies */}
      <line x1="120" y1="45" x2="280" y2="45" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" />
    </svg>
  )
}

// Maturity ladder visual
function MaturityLadder() {
  const levels = [
    { level: 3, name: 'Loop Aware', color: '#028393', description: 'Teams discuss metrics using Express, Tailor, Amplify, Evolve language' },
    { level: 2, name: 'Informed', color: '#faaa68', description: 'Teams have dashboards and reference data in decisions' },
    { level: 1, name: 'Reactive', color: '#98C1D9', description: 'Reports appear monthly, people argue about numbers' },
  ]

  return (
    <div className="space-y-4">
      {levels.map((item) => (
        <div key={item.level} className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
            style={{ backgroundColor: item.color }}
          >
            {item.level}
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-brand-navy">{item.name}</h4>
            <p className="font-body text-text-secondary text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Experiment Kanban visual
function ExperimentKanban() {
  const columns = [
    { name: 'Ideas', color: '#98C1D9', items: 3 },
    { name: 'In Test', color: '#f65625', items: 2 },
    { name: 'Learning', color: '#faaa68', items: 1 },
    { name: 'Shipped', color: '#028393', items: 4 },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {columns.map((col) => (
        <div key={col.name} className="text-center">
          <div
            className="rounded-t-lg py-2 px-3 text-white text-sm font-semibold"
            style={{ backgroundColor: col.color }}
          >
            {col.name}
          </div>
          <div className="bg-gray-50 rounded-b-lg p-2 min-h-[80px]">
            {Array.from({ length: col.items }).map((_, i) => (
              <div
                key={i}
                className="h-3 rounded mb-1"
                style={{ backgroundColor: col.color, opacity: 0.3 }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-[#E0FBFC] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
              The Foundation
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Data, Metrics, And Governance For The Loop Revenue System
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              The Nervous System Behind Your Revenue Loops
            </p>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-4">
              Loops do not run on good intentions alone. They run on information.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              If you want marketing, sales, service, and ops to act like one continuous system, they need to see the same reality. That reality lives in your data, your metrics, and the way you govern decisions.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              You will not find a giant catalog of KPIs here. Instead, you will get a simple way to think about data foundations, meaningful metrics, and the governance habits that keep the Loop Revenue System healthy as it spins.
            </p>
          </div>
          <div className="flex justify-center">
            <DataBackboneDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyDataMattersSection() {
  const questions = [
    'Are our loops actually moving in the same direction?',
    'Where are we losing energy in the system?',
    'Which changes made things better, and which ones just made noise?',
  ]

  return (
    <section className="section-padding bg-white border-b border-[#98C1D9]/30">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Why Data And Metrics Matter More In A Loop
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In a funnel world, data often shows up as a report at the end of the month. Someone pulls numbers, adds a few arrows, and the team nods or argues for an hour.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In a loop world, that is not enough.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Loops spin all the time. Marketing runs campaigns. Sales has conversations. Service handles tickets and success plans. Ops keeps the systems humming. Every one of those actions produces signals. If you only look at them once in a while, you miss patterns and react too late.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              Good data and clear metrics turn those signals into shared understanding.
            </p>
          </div>

          <div>
            <div className="bg-[#E0FBFC] rounded-xl p-6 border-l-4 border-[#028393]">
              <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">
                They help you answer questions like:
              </h3>
              <ul className="space-y-3">
                {questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#028393] mt-1">?</span>
                    <span className="font-body text-text-secondary">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-body text-text-secondary leading-relaxed mt-6">
              Without that shared understanding, it is hard to know whether your efforts are helping your business flourish or just keeping everyone busy.
            </p>
            <p className="font-body text-[#3D5A80] font-medium mt-4 italic">
              Data and metrics are not the goal. They are how you keep score and notice when the system needs care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DataFoundationsSection() {
  const principles = [
    'Every contact and company should have a clear place in your lifecycle.',
    'Deals and tickets should link to the contacts and companies involved.',
    'Activities like emails, calls, meetings, and form submissions should roll up so sales, marketing, service, and ops can see the same history.',
    'Key segment fields, such as industry, size, fit, and product usage, should live in shared objects, not in private spreadsheets.',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Data Foundations For The Loop Revenue System
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            At the core of most revenue systems you will find a handful of familiar objects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <DataFoundationsDiagram />
          </div>

          <div>
            <div className="space-y-3 mb-8">
              <p className="font-body text-text-secondary">
                <strong className="text-brand-navy">Contacts</strong> represent people.
              </p>
              <p className="font-body text-text-secondary">
                <strong className="text-brand-navy">Companies</strong> represent the accounts they work for.
              </p>
              <p className="font-body text-text-secondary">
                <strong className="text-brand-navy">Deals</strong> represent potential revenue.
              </p>
              <p className="font-body text-text-secondary">
                <strong className="text-brand-navy">Tickets</strong> represent support and service work.
              </p>
              <p className="font-body text-text-secondary">
                <strong className="text-brand-navy">Activities and events</strong> represent the touches between your company and your customers.
              </p>
            </div>

            <p className="font-body text-text-secondary leading-relaxed mb-6">
              For the Loop Revenue System, the important question is not &quot;Which CRM do we use?&quot; It is &quot;How clearly do these core objects connect across our loops?&quot;
            </p>

            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">
              A few practical principles:
            </h3>
            <ul className="space-y-3">
              {principles.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#028393] text-white text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="font-body text-text-secondary">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-body text-text-secondary leading-relaxed mt-8 max-w-3xl mx-auto text-center">
          When this foundation is in place, it becomes much easier to <span className="text-[#028393] font-semibold">Express</span> who your best customers are, <span className="text-[#faaa68] font-semibold">Tailor</span> how you serve them, <span className="text-[#f65625] font-semibold">Amplify</span> what works, and <span className="text-[#3D5A80] font-semibold">Evolve</span> based on what you see.
        </p>
      </div>
    </section>
  )
}

function MetricsThatMatterSection() {
  const loops = [
    {
      name: 'Marketing',
      color: '#028393',
      metrics: [
        { stage: 'Express', signal: 'Content engagement from ideal customers and qualified inbound volume' },
        { stage: 'Tailor', signal: 'Segment-level conversion rates and reply rates' },
        { stage: 'Amplify', signal: 'Assisted pipeline from content and channel performance over time' },
        { stage: 'Evolve', signal: 'Experiments shipped, wins vs losses, and changes made' },
      ]
    },
    {
      name: 'Sales',
      color: '#faaa68',
      metrics: [
        { stage: 'Express', signal: 'Opportunity quality, stage definitions, and time on best-fit deals' },
        { stage: 'Tailor', signal: 'Meeting quality, buyer engagement, multi-contact involvement' },
        { stage: 'Amplify', signal: 'Performance of shared sequences, playbooks, enablement assets' },
        { stage: 'Evolve', signal: 'Win rate by segment, sales cycle length, reasons for loss' },
      ]
    },
    {
      name: 'Service',
      color: '#f65625',
      metrics: [
        { stage: 'Express', signal: 'Onboarding completion and early product usage' },
        { stage: 'Tailor', signal: 'Time to first value and outcomes by customer segment' },
        { stage: 'Amplify', signal: 'Self-service usage, help article reuse, community activity' },
        { stage: 'Evolve', signal: 'Retention, expansion, and reasons for churn' },
      ]
    },
    {
      name: 'Ops',
      color: '#3D5A80',
      metrics: [
        { stage: 'Express', signal: 'Data completeness and lifecycle alignment across teams' },
        { stage: 'Tailor', signal: 'Routing accuracy and system response times' },
        { stage: 'Amplify', signal: 'Automation coverage and reduction in manual work' },
        { stage: 'Evolve', signal: 'Adoption of new processes, dashboard usage, speed of safe change' },
      ]
    },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Metrics That Matter By Loop And Stage
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-4">
            You can track almost anything. That does not mean you should.
          </p>
          <p className="font-body text-text-secondary leading-relaxed">
            In a loop-based system, you care most about metrics that show: Are we attracting and keeping the right people? Are our loops passing energy to each other? Are we learning and improving?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {loops.map((loop) => (
            <div
              key={loop.name}
              className="bg-white rounded-xl border-2 overflow-hidden"
              style={{ borderColor: loop.color }}
            >
              <div
                className="px-6 py-4"
                style={{ backgroundColor: loop.color }}
              >
                <h3 className="font-display text-xl font-semibold text-white">
                  Loop {loop.name}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {loop.metrics.map((m) => (
                  <div key={m.stage}>
                    <span className="font-body text-sm font-semibold text-brand-navy">
                      {m.stage}:
                    </span>
                    <p className="font-body text-sm text-text-secondary">
                      {m.signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-text-secondary leading-relaxed mt-8 max-w-3xl mx-auto text-center">
          You do not need perfect dashboards to start. Choose a small set of metrics that actually guide decisions. Measure them consistently. Discuss them in the context of loops and stages, not just in isolation.
        </p>
      </div>
    </section>
  )
}

function WhatToIgnoreSection() {
  const warnings = [
    'Vanity counts that never connect to real customers or revenue, such as raw impressions without context.',
    'Isolated conversion rates that hide important stages before and after them.',
    'Department-only scorecards that reward local wins while the overall loop suffers.',
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-[#faaa68] p-8">
            <h2 className="font-display text-2xl font-medium text-brand-navy mb-4">
              Metrics You Can Safely Ignore
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              It is easy to drown in numbers that look impressive but do not change how you act.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              In a loop system, be cautious with:
            </p>
            <ul className="space-y-3 mb-6">
              {warnings.map((w, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#faaa68] text-xl">!</span>
                  <span className="font-body text-text-secondary">{w}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-[#3D5A80] font-medium italic">
              If a metric does not help you decide what to change in Express, Tailor, Amplify, or Evolve, then it is likely decoration. You can track it, but it should not drive your behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConsentPrivacySection() {
  const principles = [
    {
      title: 'Consent comes first',
      description: 'Make it clear what data you collect, how you use it, and how people can change their preferences. Honor those choices in your tools and processes.',
    },
    {
      title: 'Use the minimum needed',
      description: 'You do not need every possible field to Tailor well. Focus on data that helps you be more helpful, not more invasive.',
    },
    {
      title: 'Watch for bias',
      description: 'AI models and humans both bring bias. When you use AI to score leads, predict churn, or suggest next steps, check whether your system is unfairly favoring or excluding certain groups.',
    },
    {
      title: 'Keep humans accountable',
      description: 'AI can draft, recommend, and score. Humans approve, override, and own the impact.',
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Consent, Privacy, And Responsible AI
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Loops run on data about real people. That comes with responsibility.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mt-4">
            Every time you collect, store, and use data, you make a choice about how you treat your customers. The Loop Revenue System assumes you want to build long-term relationships, not short-term tricks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#028393] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  {p.title}
                </h3>
              </div>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-[#3D5A80] font-medium text-center mt-8 max-w-2xl mx-auto">
          Responsible data use is not a compliance form at the end of the process. It is part of how you design Express, Tailor, Amplify, and Evolve.
        </p>
      </div>
    </section>
  )
}

function ExperimentsSection() {
  const habits = [
    {
      title: 'Keep a test backlog',
      description: 'Capture ideas from every loop. For each one, write down the hypothesis, the stage and loop it belongs to, the metric you expect to move, and how long you will run it.',
    },
    {
      title: 'Run small tests, often',
      description: 'Instead of one giant change that is hard to read, favor smaller, more focused experiments. Change one part of Express messaging for a segment, or adjust a Tailor rule for a stage in the sales process.',
    },
    {
      title: 'Share what you learn',
      description: 'When a test ends, record the outcome and what you learned. Even a failed test can be a success if it tells you where not to go.',
    },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Experiments, Test Backlogs, And The Evolve Stage
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              The Evolve stage is where data turns into better loops.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              Without some structure, experimentation quickly becomes random. One person runs a test, another tweaks a workflow, a third changes a message. No one remembers what happened or why.
            </p>
            <p className="font-body text-[#3D5A80] font-semibold mb-6">
              A simple experiment habit can change that.
            </p>

            <div className="space-y-4">
              {habits.map((h, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-display font-semibold text-brand-navy mb-2">
                    {h.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-brand-navy mb-4 text-center">
              Experiment Flow
            </h3>
            <ExperimentKanban />
            <p className="font-body text-text-secondary leading-relaxed mt-6 text-center">
              Use your data to fuel these conversations. When teams gather around real numbers and honest results, they become more curious, less defensive, and more willing to adjust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GovernanceSection() {
  const rituals = [
    {
      title: 'Have a regular loop review',
      description: 'Once a month or once a quarter, gather representatives from marketing, sales, service, and ops. Look at a small shared scorecard. Talk about what is working, what is stuck, and which stage needs attention next.',
      icon: '📅',
    },
    {
      title: 'Set clear owners for key objects and metrics',
      description: 'Someone should own the contact model. Someone should own deals and tickets. Someone should own the main dashboards. Ownership does not mean they do all the work. It means they care for the integrity of that part of the system.',
      icon: '👤',
    },
    {
      title: 'Create a simple change process',
      description: 'When someone wants to add a field, change a lifecycle, or adjust an automation, they should follow a basic pattern: describe the change, link it to a loop and stage, explain what metric it should improve, and note how you will roll it out and review it.',
      icon: '📋',
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Governance That Keeps The Loops Aligned
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-4">
            Governance sounds heavy, but at its core it is about habits.
          </p>
          <p className="font-body text-text-secondary leading-relaxed">
            Who meets to review what. How decisions get made. Which changes are allowed, and which need more care. Without some shared rules, your data and processes drift. Different teams make local changes that slowly pull the system apart.
          </p>
          <p className="font-body text-[#3D5A80] font-semibold mt-4">
            You do not need a complex committee structure. You need a few consistent rituals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rituals.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#028393] flex items-center justify-center mb-4">
                <span className="text-white text-xl">{r.icon}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">
                {r.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-text-secondary leading-relaxed mt-8 max-w-2xl mx-auto text-center">
          Governance is not about slowing everything down. It is about making sure changes move you closer to a healthy loop system, not away from it.
        </p>
      </div>
    </section>
  )
}

function MaturitySection() {
  const pitfalls = [
    'Chasing perfect data instead of useful data.',
    'Adding new metrics every time something goes wrong.',
    'Letting each department define its own lifecycle and scorecard with no shared view.',
    'Automating broken processes instead of fixing them.',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Simple Maturity Signals And Common Pitfalls
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              You can get a quick feel for your current state by asking how you use data today.
            </p>

            <MaturityLadder />
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-brand-navy mb-6">
              Watch out for common pitfalls:
            </h3>
            <ul className="space-y-4">
              {pitfalls.map((p, i) => (
                <li key={i} className="flex items-start gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
                  <span className="text-red-500 text-xl">!</span>
                  <span className="font-body text-text-secondary">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-[#E0FBFC] rounded-lg p-6 border-l-4 border-[#028393]">
              <p className="font-body text-[#3D5A80] font-medium">
                The goal is progress, not perfection. Make the loops slightly more honest and connected each cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="section-padding bg-white border-t border-[#98C1D9]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How To Put Data, Metrics, And Governance To Work
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-4">
            You do not need to rebuild your entire data stack to support the Loop Revenue System. You can start small and still see real movement.
          </p>
          <p className="font-body text-text-secondary leading-relaxed">
            Pick one loop and one stage. Clarify which data points matter most there. Agree on two or three metrics you will watch together. Add one simple governance habit that makes it easier to keep that part of the system clean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/playbooks/system"
            className="block bg-[#f65625] hover:bg-[#d94a1f] text-white rounded-xl p-6 text-center transition-colors"
          >
            <h3 className="font-display text-xl font-semibold mb-2">
              System Playbooks
            </h3>
            <p className="font-body text-sm text-white/90">
              See how data and metrics show up in Express, Tailor, Amplify, and Evolve across the loops
            </p>
          </Link>

          <Link
            href="/resources/templates-checklists"
            className="block bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-xl p-6 text-center transition-colors"
          >
            <h3 className="font-display text-xl font-semibold mb-2">
              Templates And Checklists
            </h3>
            <p className="font-body text-sm opacity-80">
              Get templates for data, metrics, and change management
            </p>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/resources/workshops-exercises"
            className="font-body text-[#028393] hover:text-brand-navy underline"
          >
            Explore Workshops And Exercises →
          </Link>
        </div>

        <p className="font-body text-text-secondary leading-relaxed mt-12 max-w-2xl mx-auto text-center">
          Use this page as your reference when questions about measurement, data, or change come up. The more your team sees data, metrics, and governance as part of the loop—not an afterthought—the easier it becomes to build a system that helps your business flourish.
        </p>
      </div>
    </section>
  )
}

export default function DataMetricsGovernancePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Data, Metrics, and Governance',
            description: 'How to manage data quality, define shared metrics, and establish governance across your revenue loops.',
            url: `${siteUrl}/overview/data-metrics-governance`,
          }),
        ]}
      />
      <HeroSection />
      <WhyDataMattersSection />
      <DataFoundationsSection />
      <MetricsThatMatterSection />
      <WhatToIgnoreSection />
      <ConsentPrivacySection />
      <ExperimentsSection />
      <GovernanceSection />
      <MaturitySection />
      <CtaSection />
    </>
  )
}
