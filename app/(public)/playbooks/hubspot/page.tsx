import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'HubSpot Implementation | Map Loops to HubSpot | Loop Revenue System',
  description: 'Learn how to implement the Loop Revenue System in HubSpot. Map loops to hubs, stages to features, and build a connected revenue engine.',
  openGraph: {
    title: 'HubSpot Implementation | Loop Revenue System',
    description: 'Use HubSpot to support your loops, not replace your system. Practical guidance for implementation.',
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

// HubSpot UI Mock Diagram
function HubSpotLoopDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-border-light">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-light">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="font-body text-xs text-text-secondary ml-2">HubSpot CRM</span>
      </div>

      <div className="space-y-3">
        {/* Objects Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 p-2 bg-[#E0FBFC] rounded text-center">
            <span className="font-body text-xs text-[#028393] font-semibold">Contacts</span>
          </div>
          <span className="text-[#028393]">→</span>
          <div className="flex-1 p-2 bg-[#FEE8E1] rounded text-center">
            <span className="font-body text-xs text-[#f65625] font-semibold">Deals</span>
          </div>
          <span className="text-[#f65625]">→</span>
          <div className="flex-1 p-2 bg-[#FEF3E8] rounded text-center">
            <span className="font-body text-xs text-[#faaa68] font-semibold">Tickets</span>
          </div>
        </div>

        {/* Loop indicator */}
        <div className="flex items-center justify-center">
          <div className="px-4 py-2 bg-[#E8EEF4] rounded-full">
            <span className="font-body text-xs text-[#3D5A80] font-semibold">↻ Connected Loop</span>
          </div>
        </div>

        {/* Hubs */}
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border-light">
          {['Marketing', 'Sales', 'Service', 'Ops'].map((hub, i) => (
            <div key={hub} className="p-2 bg-gray-50 rounded text-center">
              <span className="font-body text-[10px] text-text-secondary">{hub} Hub</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Loop to Hub Card
function LoopHubCard({
  loop,
  loopKey,
  tools,
  stageExamples
}: {
  loop: string
  loopKey: 'marketing' | 'sales' | 'service' | 'ops'
  tools: string[]
  stageExamples: { express: string; tailor: string; amplify: string; evolve: string }
}) {
  const colors = loopColors[loopKey]

  return (
    <div className={cn('rounded-xl p-6 border-l-4', colors.bg, colors.border)}>
      <h3 className="font-display text-lg font-semibold text-brand-navy mb-3">{loop} in HubSpot</h3>
      <p className="font-body text-sm text-text-secondary mb-4">Primary tools:</p>
      <ul className="space-y-1 mb-4">
        {tools.map((tool, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ color: colors.primary }}>•</span>
            <span className="font-body text-sm text-text-secondary">{tool}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-white/50">
        <p className="font-body text-xs text-text-secondary mb-2">Stage examples:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div><span className="text-[#028393] font-semibold">Express:</span> <span className="text-text-secondary">{stageExamples.express}</span></div>
          <div><span className="text-[#faaa68] font-semibold">Tailor:</span> <span className="text-text-secondary">{stageExamples.tailor}</span></div>
          <div><span className="text-[#f65625] font-semibold">Amplify:</span> <span className="text-text-secondary">{stageExamples.amplify}</span></div>
          <div><span className="text-[#3D5A80] font-semibold">Evolve:</span> <span className="text-text-secondary">{stageExamples.evolve}</span></div>
        </div>
      </div>
    </div>
  )
}

// Stage Mapping Card
function StageMappingCard({
  stage,
  stageKey,
  color,
  icon,
  description,
  hubspotWork
}: {
  stage: string
  stageKey: string
  color: string
  icon: string
  description: string
  hubspotWork: string[]
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
          <h4 className="font-display font-semibold text-brand-navy">{stage} in HubSpot</h4>
          <p className="font-body text-xs text-text-secondary">{description}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {hubspotWork.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ color }} className="mt-0.5">✓</span>
            <span className="font-body text-sm text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Roadmap Phase Card
function PhaseCard({
  phase,
  title,
  color,
  items
}: {
  phase: string
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
          {phase}
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
            <p className="font-body text-sm font-semibold text-[#028393] uppercase tracking-wider mb-4">
              HubSpot Implementation
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Use HubSpot To Support Your Loops, Not Replace Your System
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              The Loop Revenue System gives you the model. HubSpot gives you a place to run it.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              This page shows you how to map the Loop Revenue System into HubSpot in a way that is clear, practical, and safe. You&apos;ll see how loops and stages line up with hubs, objects, and tools.
            </p>
            <p className="font-body text-[#3D5A80] font-medium italic">
              Keep this in mind: the system comes first. HubSpot exists to help that system come to life.
            </p>
          </div>
          <div className="flex justify-center">
            <HubSpotLoopDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleInLoopSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              HubSpot&apos;s Role In The Loop Revenue System
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              HubSpot is a platform. The Loop Revenue System is a way of working.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              The model tells you to treat revenue as four loops that share four stages. The system playbooks tell you what to do at each stage. HubSpot is where you store the data, run the workflows, send the emails, log the calls, and see the results.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              That means you don&apos;t start with &quot;What can HubSpot do?&quot;<br />
              You start with &quot;What should our loops and stages do?&quot;
            </p>
            <p className="font-body text-brand-navy font-semibold">Used this way, HubSpot becomes:</p>
            <ul className="mt-3 space-y-2">
              {[
                'The shared CRM where contacts, companies, deals, tickets, and custom objects live',
                'The marketing engine for content, email, forms, and nurture',
                'The sales workspace for deals, sequences, calls, and tasks',
                'The service console for tickets, knowledge base, and customer communications',
                'The operations layer for data quality, integrations, workflows, and reporting',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#028393] mt-1">•</span>
                  <span className="font-body text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display text-lg font-semibold text-[#028393] mb-4">System vs Platform</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-body text-sm font-semibold text-brand-navy mb-2">The System (Loop Revenue)</p>
                <p className="font-body text-sm text-text-secondary">Four loops, four stages, shared principles. This is <em>what</em> you do and <em>why</em>.</p>
              </div>
              <div className="flex justify-center text-[#028393]">↓</div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-body text-sm font-semibold text-brand-navy mb-2">The Platform (HubSpot)</p>
                <p className="font-body text-sm text-text-secondary">Objects, workflows, reports, integrations. This is <em>where</em> and <em>how</em> you execute.</p>
              </div>
            </div>
            <p className="font-body text-sm text-[#3D5A80] mt-4 italic">
              Used any other way, you risk building clever automation on top of a fuzzy system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildingBlocksSection() {
  const blocks = [
    {
      title: 'Core CRM Objects',
      items: ['Contacts (people)', 'Companies (accounts)', 'Deals (opportunities)', 'Tickets (support work)', 'Custom objects'],
      color: '#028393',
    },
    {
      title: 'Structural Elements',
      items: ['Properties (fields)', 'Pipelines & stages', 'Lists & segments', 'Teams & permissions'],
      color: '#f65625',
    },
    {
      title: 'Engagement Tools',
      items: ['Workflows', 'Sequences', 'Forms & CTAs', 'Marketing emails', 'Playbooks & tasks', 'Inbox & calling'],
      color: '#faaa68',
    },
    {
      title: 'Operations Tools',
      items: ['Dashboards & reports', 'Data quality tools', 'Integrations & sync', 'Web analytics'],
      color: '#3D5A80',
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Core HubSpot Building Blocks
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Before you plug loops and stages into HubSpot, it helps to see the main pieces. These are the Lego bricks you&apos;ll use to build each loop and stage.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blocks.map((block) => (
              <div key={block.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-display text-sm font-semibold mb-3" style={{ color: block.color }}>
                  {block.title}
                </h3>
                <ul className="space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i} className="font-body text-xs text-text-secondary">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-text-secondary text-center mt-8">
            You don&apos;t need all of this on day one. You do need to know these are your building blocks.
          </p>
        </div>
      </div>
    </section>
  )
}

function LoopsToHubsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Mapping Loops To HubSpot Hubs
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Loop Marketing, Loop Sales, Loop Service, and Loop Ops all live inside the same CRM. Each loop leans on a different set of hubs and tools.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <LoopHubCard
              loop="Loop Marketing"
              loopKey="marketing"
              tools={[
                'Marketing Hub & Content/CMS tools',
                'Contacts, companies, and lists',
                'Forms, CTAs, landing pages',
                'Marketing emails & campaigns',
                'Workflows for nurture & lifecycle',
              ]}
              stageExamples={{
                express: 'Content pillars, lifecycle definitions',
                tailor: 'Segments, smart content, nurture flows',
                amplify: 'Multi-channel campaigns',
                evolve: 'Reports, experiments, asset updates',
              }}
            />

            <LoopHubCard
              loop="Loop Sales"
              loopKey="sales"
              tools={[
                'Sales Hub',
                'Contacts, companies, and deals',
                'Sequences, tasks, and calling',
                'Playbooks and deal views',
                'Documents and quotes',
              ]}
              stageExamples={{
                express: 'Deal stages, properties, playbooks',
                tailor: 'Custom views, sequences, notes',
                amplify: 'Shared templates and playbooks',
                evolve: 'Win/loss reports, pipeline analysis',
              }}
            />

            <LoopHubCard
              loop="Loop Service"
              loopKey="service"
              tools={[
                'Service Hub',
                'Tickets and ticket pipelines',
                'Inbox, chat, and calling',
                'Knowledge base',
                'Customer feedback tools',
              ]}
              stageExamples={{
                express: 'Ticket categories, SLAs, journeys',
                tailor: 'Contextual views, routing',
                amplify: 'Knowledge base, canned replies',
                evolve: 'Feedback analysis, process changes',
              }}
            />

            <LoopHubCard
              loop="Loop Ops"
              loopKey="ops"
              tools={[
                'Operations Hub',
                'CRM settings for objects & properties',
                'Data quality tools & validation',
                'Workflows and data automation',
                'Integrations and data sync',
              ]}
              stageExamples={{
                express: 'Lifecycle design, data model',
                tailor: 'Property config, routing, permissions',
                amplify: 'Reusable workflows, integrations',
                evolve: 'Maintenance, simplification',
              }}
            />
          </div>

          <p className="font-body text-text-secondary text-center mt-8">
            You can run all of this with a single Super Admin, but it works far better when each loop has clear operational partners.
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
      description: 'About definitions',
      hubspotWork: [
        'Define lifecycle stages and lead statuses',
        'Design deal and ticket pipelines with clear stage criteria',
        'Agree on core properties for ICP, segments, and product fit',
        'Set naming conventions for campaigns, workflows, and reports',
        'Create shared playbooks for discovery, onboarding, and support',
      ],
    },
    {
      stage: 'Tailor',
      color: '#faaa68',
      icon: '◈',
      description: 'About context and segmentation',
      hubspotWork: [
        'Build active lists for meaningful segments (industry, role, behavior)',
        'Use rules for lead scoring and routing that match your system',
        'Configure smart content on pages and emails',
        'Create role-based views for sales and service teams',
        'Use personalization tokens where they actually help',
      ],
    },
    {
      stage: 'Amplify',
      color: '#f65625',
      icon: '◉',
      description: 'About scale',
      hubspotWork: [
        'Set up nurture workflows and lifecycle updates',
        'Run multi-channel campaigns with shared goals and tracking',
        'Roll out sequences, templates, and playbooks across teams',
        'Automate manual steps like task creation and field updates',
        'Integrate tools so data and actions stay in sync',
      ],
    },
    {
      stage: 'Evolve',
      color: '#3D5A80',
      icon: '↻',
      description: 'About learning',
      hubspotWork: [
        'Build dashboards that show loop and stage health',
        'Run controlled experiments with content, sequences, workflows',
        'Review win/loss reports, ticket categories, customer feedback',
        'Track data quality and adoption over time',
        'Retire unused fields, workflows, and assets',
      ],
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Mapping Stages To HubSpot
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            The four stages show up inside HubSpot in predictable ways. Here&apos;s what each stage looks like in practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((s) => (
              <StageMappingCard key={s.stage} stageKey={s.stage.toLowerCase()} {...s} />
            ))}
          </div>
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
            You can apply the Loop Revenue System with HubSpot in many ways. This is a simple, practical path.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <PhaseCard
              phase="1"
              title="Foundations"
              color="#028393"
              items={[
                'Clean and deduplicate contacts and companies',
                'Define lifecycle stages that match your loops',
                'Design core deal and ticket pipelines',
                'Standardize critical properties (ICP, segment, product)',
                'Set up basic dashboards for each loop',
              ]}
            />

            <PhaseCard
              phase="2"
              title="Stage-Based Configuration"
              color="#f65625"
              items={[
                'Align lifecycle and stages with Express decisions',
                'Configure segments and routing rules (Tailor)',
                'Add nurture workflows and sequences (Amplify)',
                'Build role-based views and smart content',
                'Pick one loop to unlock first',
              ]}
            />

            <PhaseCard
              phase="3"
              title="Experiments & Governance"
              color="#3D5A80"
              items={[
                'Run experiments using System Playbooks',
                'Keep a shared change backlog tied to loops',
                'Hold regular reviews with dashboards',
                'Retire or simplify what no longer fits',
                'The goal: a live system that keeps learning',
              ]}
            />
          </div>

          <div className="mt-8 p-4 bg-[#E0FBFC] rounded-lg text-center">
            <p className="font-body text-[#3D5A80] font-medium">
              The goal is not a &quot;finished implementation.&quot; The goal is a live system that keeps learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AiHybridSection() {
  const aiAssist = [
    'Draft marketing copy from an existing Express brief or content pillar',
    'Summarize sales and service notes so the next person sees the story fast',
    'Suggest subject lines, snippets, or call notes',
    'Flag anomalies in performance, like sudden drops in engagement',
  ]

  const humansLead = [
    'Decide what your loops and stages are trying to achieve',
    'Choose what data is fair and ethical to use for personalization',
    'Approve or edit AI-generated content that faces customers',
    'Decide how to respond when AI surfaces patterns or risks',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            HubSpot AI Inside A Hybrid Loop Team
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            HubSpot has built-in AI capabilities that fit naturally into the Loop Revenue System, as long as you keep humans in charge.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#028393]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">AI Can Assist</h3>
              </div>
              <ul className="space-y-3">
                {aiAssist.map((item, i) => (
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
                <h3 className="font-display text-lg font-semibold text-[#3D5A80]">Humans Must Lead</h3>
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
            Treat HubSpot AI as an extra set of hands, not an extra brain. The system and its values still come from your team.
          </p>
        </div>
      </div>
    </section>
  )
}

function GovernanceSection() {
  const helpfulHabits = [
    'One clear owner for CRM architecture and data quality',
    'Documented rules for new properties, pipelines, and workflows',
    'Regular portal cleanups where you retire unused assets',
    'Shared dashboards for leadership and loops',
    'Simple training on how to use HubSpot inside the loops',
  ]

  const pitfalls = [
    'Letting every team create its own lifecycle and pipelines',
    'Adding fields for every new idea and never removing old ones',
    'Building workflows without clear owners or success metrics',
    'Allowing too many Super Admins without clear responsibilities',
    'Treating HubSpot as "the project" instead of part of a larger system',
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Governance And Common Pitfalls
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            HubSpot can support a beautiful system. It can also magnify chaos if you skip governance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-[#028393] bg-[#E0FBFC]">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>✓</span> Helpful Habits
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
                <span>⚠️</span> Common Pitfalls
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
              A good rule: if people say &quot;we don&apos;t trust our HubSpot data,&quot; the problem is governance, not just tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NoHubSpotSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How This Relates To The &quot;No HubSpot&quot; Path
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            The Loop Revenue System works with or without HubSpot. This page focuses on &quot;with HubSpot&quot; because many teams want concrete help mapping loops and stages into a specific platform.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            If you don&apos;t use HubSpot yet, use it for only part of your stack, or want a more tool-agnostic view:
          </p>

          <Link
            href="/playbooks/no-hubspot"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border-2 border-[#3D5A80] text-[#3D5A80] font-semibold hover:bg-[#3D5A80] hover:text-white transition-colors"
          >
            No HubSpot Implementation →
          </Link>

          <p className="font-body text-sm text-text-secondary mt-6">
            You can move between these paths as your stack changes. The model doesn&apos;t change; only the implementation details do.
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
            If you&apos;re using HubSpot today, you already have part of the puzzle. Now decide how intentional you want to be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Run Plays in HubSpot</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Concrete plays by stage and loop that you can run in HubSpot.
            </p>
            <Link href="/playbooks/system" className="font-body text-sm text-[#028393] hover:underline">
              System Playbooks →
            </Link>
          </div>

          <div className="bg-[#FEF3E8] rounded-xl p-6 border border-[#faaa68]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Design Better Data</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Better data, metrics, and change habits for your HubSpot portal.
            </p>
            <Link href="/overview/data-metrics-governance" className="font-body text-sm text-[#faaa68] hover:underline">
              Data, Metrics & Governance →
            </Link>
          </div>

          <div className="bg-[#FEE8E1] rounded-xl p-6 border border-[#f65625]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Practical Tools</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Templates and exercises to support your HubSpot work.
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
            Choose one loop, one stage, and one part of HubSpot to improve. Make a small change. Watch what happens. Let that learning guide the next move.
          </p>
          <p className="font-body text-[#3D5A80] font-medium mt-4">
            The more your HubSpot portal reflects the Loop Revenue System, the easier it becomes for your whole organization to act like one connected revenue team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function HubSpotImplementationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'HubSpot Implementation',
            description: 'Learn how to implement the Loop Revenue System in HubSpot. Map loops to hubs, stages to features.',
            url: `${siteUrl}/playbooks/hubspot`,
          }),
        ]}
      />
      <HeroSection />
      <RoleInLoopSection />
      <BuildingBlocksSection />
      <LoopsToHubsSection />
      <StagesMappingSection />
      <RoadmapSection />
      <AiHybridSection />
      <GovernanceSection />
      <NoHubSpotSection />
      <NextStepsSection />
    </>
  )
}
