import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'Non-HubSpot Implementation | Any Stack, Same System | Loop Revenue System',
  description: 'Implement the Loop Revenue System without HubSpot. Map loops and stages to any CRM, marketing platform, or mixed stack.',
  openGraph: {
    title: 'Non-HubSpot Implementation | Loop Revenue System',
    description: 'Make your existing stack act like one looped system. Tool-agnostic implementation guidance.',
    type: 'article',
  },
}

// Loop colors
const loopColors = {
  marketing: { primary: '#028393', bg: 'bg-[#E0FBFC]', border: 'border-[#028393]' },
  sales: { primary: '#f65625', bg: 'bg-[#FEE8E1]', border: 'border-[#f65625]' },
  service: { primary: '#faaa68', bg: 'bg-[#FEF3E8]', border: 'border-[#faaa68]' },
  ops: { primary: '#3D5A80', bg: 'bg-[#E8EEF4]', border: 'border-[#3D5A80]' },
}

// Tool Stack Diagram
function ToolStackDiagram() {
  const tools = [
    { name: 'CRM', icon: '📊', color: '#028393' },
    { name: 'Email', icon: '✉️', color: '#f65625' },
    { name: 'Help Desk', icon: '🎧', color: '#faaa68' },
    { name: 'Docs', icon: '📄', color: '#3D5A80' },
    { name: 'Analytics', icon: '📈', color: '#028393' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-border-light">
      <p className="font-body text-xs text-text-secondary text-center mb-4">Your Stack → One System</p>

      {/* Tools in a circle around loop */}
      <div className="relative h-48 w-48 mx-auto">
        {/* Center loop indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#E0FBFC] border-2 border-[#028393] border-dashed flex items-center justify-center">
          <span className="text-[#028393] font-semibold text-xs">Loop</span>
        </div>

        {/* Tool icons positioned around */}
        {tools.map((tool, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180)
          const x = 50 + 40 * Math.cos(angle)
          const y = 50 + 40 * Math.sin(angle)
          return (
            <div
              key={tool.name}
              className="absolute w-12 h-12 rounded-lg bg-gray-50 border border-border-light flex flex-col items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="text-[8px] text-text-secondary mt-0.5">{tool.name}</span>
            </div>
          )
        })}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {tools.map((_, i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180)
            const x = 50 + 25 * Math.cos(angle)
            const y = 50 + 25 * Math.sin(angle)
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="#98C1D9"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            )
          })}
        </svg>
      </div>

      <p className="font-body text-xs text-[#3D5A80] text-center mt-4 italic">
        Different tools, one connected system
      </p>
    </div>
  )
}

// Loop Tool Card
function LoopToolCard({
  loop,
  loopKey,
  tools,
  connections
}: {
  loop: string
  loopKey: 'marketing' | 'sales' | 'service' | 'ops'
  tools: string[]
  connections: string[]
}) {
  const colors = loopColors[loopKey]

  return (
    <div className={cn('rounded-xl p-6 border-l-4', colors.bg, colors.border)}>
      <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">{loop} Without HubSpot</h3>
      <p className="font-body text-sm text-text-secondary mb-3">Usually lives across:</p>
      <ul className="space-y-1 mb-4">
        {tools.map((tool, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ color: colors.primary }}>•</span>
            <span className="font-body text-sm text-text-secondary">{tool}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-white/50">
        <p className="font-body text-xs font-semibold text-brand-navy mb-2">Connect to CRM:</p>
        <ul className="space-y-1">
          {connections.map((conn, i) => (
            <li key={i} className="font-body text-xs text-text-secondary">→ {conn}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Stage Mapping Card
function StageMappingCard({
  stage,
  color,
  icon,
  description,
  locations
}: {
  stage: string
  color: string
  icon: string
  description: string
  locations: string[]
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border-t-4" style={{ borderTopColor: color }}>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-display font-semibold text-brand-navy">{stage} in a Mixed Stack</h4>
          <p className="font-body text-xs text-text-secondary">{description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {locations.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ color }} className="mt-0.5">•</span>
            <span className="font-body text-sm text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Roadmap Step Card
function StepCard({
  step,
  title,
  color,
  items
}: {
  step: string
  title: string
  color: string
  items: string[]
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: color }}
        >
          {step}
        </div>
        <h4 className="font-display font-semibold text-brand-navy">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-text-secondary mt-0.5">•</span>
            <span className="font-body text-sm text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-[#E0FBFC] to-white">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-sm font-semibold text-[#3D5A80] uppercase tracking-wider mb-4">
              Non-HubSpot Implementation
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Make Your Existing Stack Act Like One Looped System
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              You don&apos;t need HubSpot to use the Loop Revenue System.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              You might have a different CRM, a separate marketing platform, a help desk, a sales engagement tool, and a pile of spreadsheets. That&apos;s normal. This page helps you turn what you already have into a system that behaves like four connected loops.
            </p>
            <p className="font-body text-[#3D5A80] font-medium italic">
              The goal: Your tools should help your business and your customers flourish, not pull them in different directions.
            </p>
          </div>
          <div className="flex justify-center">
            <ToolStackDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleOfToolsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Tools Support The System. They Are Not The System.
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              The Loop Revenue System is a way of seeing and running your revenue engine. It gives you four loops, four stages inside each loop, system playbooks, and data habits.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Your tools should support that system. So instead of asking &quot;What can this platform do?&quot; you start by asking:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'What should our loops do?',
                'What does each stage need to accomplish?',
                'What data and actions need to flow between loops?',
              ].map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#028393] mt-1">?</span>
                  <span className="font-body text-text-secondary">{q}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-text-secondary leading-relaxed">
              Once that&apos;s clear, you look at your stack and ask &quot;Where can this live?&quot; and &quot;How do these tools need to connect?&quot;
            </p>
          </div>

          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display text-lg font-semibold text-[#028393] mb-4">Model → Playbooks → Tools</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-body text-sm font-semibold text-brand-navy mb-1">1. The Model</p>
                <p className="font-body text-xs text-text-secondary">Four loops, four stages, shared principles</p>
              </div>
              <div className="flex justify-center text-[#028393]">↓</div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-body text-sm font-semibold text-brand-navy mb-1">2. The Playbooks</p>
                <p className="font-body text-xs text-text-secondary">Concrete plays for each stage and loop</p>
              </div>
              <div className="flex justify-center text-[#028393]">↓</div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-body text-sm font-semibold text-brand-navy mb-1">3. Your Tools</p>
                <p className="font-body text-xs text-text-secondary">Where the work actually happens</p>
              </div>
            </div>
            <p className="font-body text-sm text-[#3D5A80] mt-4 italic">
              If tools define the system: impressive but fragile.<br />
              If the system defines tools: simple and useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildingBlocksSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Core Building Blocks In A Non-HubSpot Stack
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Even without an all-in-one platform, most stacks share the same basic parts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4">Core Records</h3>
              <ul className="space-y-2">
                {[
                  'People (contacts, leads, users, subscribers)',
                  'Organizations (accounts, companies, customers)',
                  'Opportunities (deals, quotes, pipeline items)',
                  'Support work (tickets, cases, issues)',
                  'Custom records (subscriptions, contracts, assets)',
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary">• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-[#f65625] mb-4">Common Tool Types</h3>
              <ul className="space-y-2">
                {[
                  'CRM or sales system of record',
                  'Marketing email and automation tools',
                  'Website and CMS',
                  'Sales engagement, dialers, scheduling',
                  'Help desk, ticketing, and chat',
                  'Integration or automation tools (iPaaS)',
                  'Spreadsheets and docs (manual processes)',
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-text-secondary">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-[#98C1D9]">
            <h4 className="font-display font-semibold text-brand-navy mb-4">Key Questions To Answer:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Which tool is the main system of record for people and orgs?',
                'Where will we track opportunities and support work?',
                'Where will we manage automations and integrations?',
                'Where will we report on what the loops are doing?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#028393] font-bold">{i + 1}.</span>
                  <span className="font-body text-sm text-text-secondary">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LoopsToToolsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Mapping Loops To Common Tool Types
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You can run each loop with different brands of tools. What matters is that you give each loop a clear home and a way to connect.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <LoopToolCard
              loop="Loop Marketing"
              loopKey="marketing"
              tools={[
                'Your CMS and website builder',
                'Your email and marketing automation tool',
                'Webinar, event, or community platforms',
                'SEO and analytics tools',
                'Ad platforms',
              ]}
              connections={[
                'Website and forms → CRM contacts',
                'Email and campaigns → CRM activities',
                'Ad and event data → CRM fields',
              ]}
            />

            <LoopToolCard
              loop="Loop Sales"
              loopKey="sales"
              tools={[
                'Your CRM',
                'Sales engagement or outbound tool',
                'Calling and meeting tools',
                'File sharing and proposal tools',
              ]}
              connections={[
                'Marketing activity → CRM timelines',
                'Support and usage data → accounts',
                'Calendar and call records → activities',
              ]}
            />

            <LoopToolCard
              loop="Loop Service"
              loopKey="service"
              tools={[
                'Help desk or ticketing platform',
                'Chat and inbox tools',
                'Knowledge base or documentation',
                'In-app support (if applicable)',
              ]}
              connections={[
                'Tickets → CRM contacts and companies',
                'KB articles → support categories',
                'Feedback tools → CRM fields or data store',
              ]}
            />

            <LoopToolCard
              loop="Loop Ops"
              loopKey="ops"
              tools={[
                'CRM admin panel',
                'Integration/automation platform (iPaaS)',
                'Data warehouse or reporting tools',
                'Scripts, utilities, and admin docs',
              ]}
              connections={[
                'Integrations around central system of record',
                'Key events → shared reporting layer',
                'Admin processes → change log or tickets',
              ]}
            />
          </div>

          <p className="font-body text-text-secondary text-center mt-8">
            Your stack can be simple or complex. The loops can still run.
          </p>
        </div>
      </div>
    </section>
  )
}

function StagesMappingSection() {
  const stages = [
    {
      stage: 'Express',
      color: '#028393',
      icon: '✦',
      description: 'Definitions and clarity',
      locations: [
        'Strategy docs and messaging guides in docs or project tools',
        'Lifecycle and pipeline definitions embedded in your CRM',
        'Shared slide decks and content pillars in your asset library',
        'Process maps in your wiki or whiteboarding tools',
      ],
    },
    {
      stage: 'Tailor',
      color: '#faaa68',
      icon: '◈',
      description: 'Context and segmentation',
      locations: [
        'Segments and audiences in your email or marketing tool',
        'Views and filters in your CRM for reps and agents',
        'Rules and routing flows in CRM, help desk, or automation tool',
        'Personalized content blocks where your tools support them',
      ],
    },
    {
      stage: 'Amplify',
      color: '#f65625',
      icon: '◉',
      description: 'Scale what works',
      locations: [
        'Automation workflows in marketing and operations tools',
        'Outbound cadences in your sales engagement tool',
        'Playbooks and templates in docs or enablement tools',
        'In-app messages and notifications in product tools',
      ],
    },
    {
      stage: 'Evolve',
      color: '#3D5A80',
      icon: '↻',
      description: 'Learn and improve',
      locations: [
        'Dashboards in BI tools or CRM reports',
        'Win/loss analysis in spreadsheets or simple BI views',
        'Ticket and support patterns in help desk reports',
        'Experiment logs in docs, boards, or project tools',
      ],
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Mapping Stages To Generic Tools
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            The four stages don&apos;t belong to any vendor. They show up in your stack as patterns of work.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((s) => (
              <StageMappingCard key={s.stage} {...s} />
            ))}
          </div>

          <p className="font-body text-sm text-text-secondary text-center mt-8">
            You don&apos;t need one master dashboard right away. You need somewhere to look at what happened and decide what to change.
          </p>
        </div>
      </div>
    </section>
  )
}

function RoadmapSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            A Simple Implementation Roadmap
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You can apply the Loop Revenue System with a non-HubSpot stack in three practical steps.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <StepCard
              step="1"
              title="Choose Your System of Record"
              color="#028393"
              items={[
                'Pick one system as your main source of truth for people and orgs',
                'Clean your contact and account data in that system',
                'Define lifecycle and pipeline stages there first',
                'Map key fields: ICP, segment, status',
                'Everything else orbits around this',
              ]}
            />

            <StepCard
              step="2"
              title="Run Stage-Based Projects"
              color="#f65625"
              items={[
                'Express: Align lifecycle and stages across tools with same words',
                'Tailor: Build meaningful segments in marketing and CRM',
                'Amplify: Automate 1-2 high-friction processes end to end',
                'Evolve: Stand up one shared dashboard per loop',
                'You don\'t need fancy. You need consistent.',
              ]}
            />

            <StepCard
              step="3"
              title="Experiments & Clean Up"
              color="#3D5A80"
              items={[
                'Use System Playbooks to run experiments',
                'Review what works and what breaks',
                'Shut down tools and workflows that no longer serve',
                'Consolidate where it reduces friction',
                'Stack stays multi-tool, but feels like one system',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AiHybridSection() {
  const aiHelps = [
    'Summarize call recordings, ticket threads, and interview notes',
    'Draft outreach, content, or internal docs from your Express briefs',
    'Suggest segments or patterns to explore in your data',
    'Help prototype new workflows in your automation tool',
  ]

  const humansLead = [
    'Decide what data is ethical to use and how to collect consent',
    'Approve or edit any AI-generated content that faces customers',
    'Choose which AI suggestions to trust, ignore, or investigate',
    'Hold responsibility for outcomes inside each loop',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            AI And Hybrid Teams In A Mixed Stack
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You can use AI in a non-HubSpot stack the same way you use it anywhere else: as a helper.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#028393]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">AI Tools Can</h3>
              </div>
              <ul className="space-y-3">
                {aiHelps.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">→</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#3D5A80]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#3D5A80]/10 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#3D5A80]">Humans Must Still</h3>
              </div>
              <ul className="space-y-3">
                {humansLead.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3D5A80] mt-1">★</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[#3D5A80] font-medium text-center mt-8">
            Your stack might be a mix of tools. Your AI might be a mix of copilots. The principles stay the same: AI assists, humans lead.
          </p>
        </div>
      </div>
    </section>
  )
}

function GovernanceSection() {
  const helpfulHabits = [
    'One clear owner for the CRM and data model',
    'A simple list of "official" tools for each job',
    'A change process for lifecycles, fields, and automations across tools',
    'Regular integration checks and data quality reviews',
    'Shared documentation for how data moves between tools',
  ]

  const pitfalls = [
    'Letting every team pick its own core tools without integration plans',
    'Duplicating the same records in multiple tools with no link between them',
    'Running parallel lifecycles or definitions in CRM, help desk, and marketing',
    'Ignoring integration failures and manual workarounds',
    'Treating each tool as its own little empire instead of part of one system',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Governance In Multi-Tool Environments
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Mixed stacks need governance even more than all-in-one platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#028393] bg-[#E0FBFC]">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>✓</span> Habits That Keep Stacks Sane
              </h3>
              <ul className="space-y-3">
                {helpfulHabits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">•</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-red-400 bg-red-50">
              <h3 className="font-display text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                <span>⚠️</span> Pitfalls That Create Chaos
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
              You don&apos;t have to fix everything overnight. You do have to stop making it more complex by accident.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HubSpotAlternativeSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How This Relates To The HubSpot Path
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            The Loop Revenue System is neutral about brands. This page gives you the model with tool-agnostic examples.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            If you use HubSpot as your main platform, or are considering it, the HubSpot Implementation page shows how to map loops and stages directly into that world:
          </p>

          <Link
            href="/playbooks/hubspot"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border-2 border-[#028393] text-[#028393] font-semibold hover:bg-[#028393] hover:text-white transition-colors"
          >
            HubSpot Implementation →
          </Link>

          <p className="font-body text-sm text-text-secondary mt-6">
            Think of these pages as two lenses on the same system. The model doesn&apos;t change; only the implementation details do.
          </p>
        </div>
      </div>
    </section>
  )
}

function NextStepsSection() {
  return (
    <section className="section-padding bg-white border-t border-[#98C1D9]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            Where To Go Next
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Your stack is what it is today. That doesn&apos;t stop you from using the Loop Revenue System.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Concrete Plays</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Plays you can run inside any tool, organized by stage and loop.
            </p>
            <Link href="/playbooks/system" className="font-body text-sm text-[#028393] hover:underline">
              System Playbooks →
            </Link>
          </div>

          <div className="bg-[#FEF3E8] rounded-xl p-6 border border-[#faaa68]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Better Data Habits</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Tighten your data, metrics, and change habits around your existing stack.
            </p>
            <Link href="/overview/data-metrics-governance" className="font-body text-sm text-[#faaa68] hover:underline">
              Data, Metrics & Governance →
            </Link>
          </div>

          <div className="bg-[#FEE8E1] rounded-xl p-6 border border-[#f65625]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Working Sessions</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Turn this into workshops and exercises with your team.
            </p>
            <div className="space-y-1">
              <Link href="/resources/templates-checklists" className="block font-body text-sm text-[#f65625] hover:underline">
                Templates & Checklists →
              </Link>
              <Link href="/resources/workshops-exercises" className="block font-body text-sm text-[#f65625] hover:underline">
                Workshops & Exercises →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Choose one loop, one stage, and one part of your stack. Make a small change that brings your tools closer to the system you want. Watch what you learn.
          </p>
          <p className="font-body text-[#3D5A80] font-medium mt-4">
            The tools you use matter less than the way you use them. When your stack serves your loops, your customers and your business have a better chance to flourish.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function NoHubSpotImplementationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'Non-HubSpot Implementation',
            description: 'Implement the Loop Revenue System without HubSpot. Map loops and stages to any stack.',
            url: `${siteUrl}/playbooks/no-hubspot`,
          }),
        ]}
      />
      <HeroSection />
      <RoleOfToolsSection />
      <BuildingBlocksSection />
      <LoopsToToolsSection />
      <StagesMappingSection />
      <RoadmapSection />
      <AiHybridSection />
      <GovernanceSection />
      <HubSpotAlternativeSection />
      <NextStepsSection />
    </>
  )
}
