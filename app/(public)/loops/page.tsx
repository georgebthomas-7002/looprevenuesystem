import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'The Four Loops | Marketing, Sales, Service, Ops | Loop Revenue System',
  description: 'How Marketing, Sales, Service, and Ops become one continuous learning system. Understand the four loops and how they work together to drive revenue.',
  openGraph: {
    title: 'The Four Loops of the Loop Revenue System',
    description: 'Marketing, Sales, Service, and Ops as one continuous learning system. See how the four loops connect and strengthen each other.',
    type: 'article',
  },
}

// Loop colors
const LOOP_COLORS = {
  marketing: { bg: '#028393', light: '#E0FBFC', text: 'text-[#028393]', border: 'border-[#028393]' },
  sales: { bg: '#f65625', light: '#FEE8E1', text: 'text-[#f65625]', border: 'border-[#f65625]' },
  service: { bg: '#faaa68', light: '#FEF3E8', text: 'text-[#faaa68]', border: 'border-[#faaa68]' },
  ops: { bg: '#3D5A80', light: '#E8EEF4', text: 'text-[#3D5A80]', border: 'border-[#3D5A80]' },
}

// Four Loops Diagram
function FourLoopsDiagram() {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[400px] mx-auto" aria-label="Four loops diagram">
      {/* Center connection */}
      <circle cx="200" cy="200" r="40" fill="#E0FBFC" stroke="#028393" strokeWidth="2" />
      <text x="200" y="195" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">Revenue</text>
      <text x="200" y="208" textAnchor="middle" fill="#142d63" fontSize="10" fontWeight="600">System</text>

      {/* Marketing Loop - Top Left */}
      <g transform="translate(80, 80)">
        <circle cx="0" cy="0" r="50" fill="#E0FBFC" stroke="#028393" strokeWidth="3" />
        <text x="0" y="-5" textAnchor="middle" fill="#028393" fontSize="11" fontWeight="600">Marketing</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Learn & Attract</text>
      </g>
      {/* Arrow from Marketing to center */}
      <path d="M 115 115 L 165 165" stroke="#028393" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Sales Loop - Top Right */}
      <g transform="translate(320, 80)">
        <circle cx="0" cy="0" r="50" fill="#FEE8E1" stroke="#f65625" strokeWidth="3" />
        <text x="0" y="-5" textAnchor="middle" fill="#f65625" fontSize="11" fontWeight="600">Sales</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Guide & Close</text>
      </g>
      {/* Arrow from center to Sales */}
      <path d="M 235 165 L 285 115" stroke="#f65625" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Service Loop - Bottom Right */}
      <g transform="translate(320, 320)">
        <circle cx="0" cy="0" r="50" fill="#FEF3E8" stroke="#faaa68" strokeWidth="3" />
        <text x="0" y="-5" textAnchor="middle" fill="#faaa68" fontSize="11" fontWeight="600">Service</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Support & Grow</text>
      </g>
      {/* Arrow from Sales to Service */}
      <path d="M 320 135 L 320 265" stroke="#faaa68" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Ops Loop - Bottom Left */}
      <g transform="translate(80, 320)">
        <circle cx="0" cy="0" r="50" fill="#E8EEF4" stroke="#3D5A80" strokeWidth="3" />
        <text x="0" y="-5" textAnchor="middle" fill="#3D5A80" fontSize="11" fontWeight="600">Ops</text>
        <text x="0" y="10" textAnchor="middle" fill="#142d63" fontSize="9">Connect & Enable</text>
      </g>
      {/* Arrow from Service to Ops */}
      <path d="M 265 320 L 135 320" stroke="#3D5A80" strokeWidth="2" markerEnd="url(#arrowhead)" />
      {/* Arrow from Ops back to Marketing */}
      <path d="M 80 265 L 80 135" stroke="#028393" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Feedback arrows to center */}
      <path d="M 285 285 L 230 230" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" />
      <path d="M 115 285 L 170 230" stroke="#98C1D9" strokeWidth="1" strokeDasharray="4,2" />

      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#142d63" />
        </marker>
      </defs>
    </svg>
  )
}

// Departments to Loops visual
function DepartmentsToLoopsVisual() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
      {/* Departments (stacked) */}
      <div className="space-y-2">
        <div className="px-6 py-3 bg-gray-100 rounded text-center text-sm font-medium text-gray-600 border border-gray-200">Marketing Dept</div>
        <div className="px-6 py-3 bg-gray-100 rounded text-center text-sm font-medium text-gray-600 border border-gray-200">Sales Dept</div>
        <div className="px-6 py-3 bg-gray-100 rounded text-center text-sm font-medium text-gray-600 border border-gray-200">Service Dept</div>
        <div className="px-6 py-3 bg-gray-100 rounded text-center text-sm font-medium text-gray-600 border border-gray-200">Ops Dept</div>
        <p className="text-xs text-center text-gray-500 mt-2">Isolated silos</p>
      </div>

      {/* Arrow */}
      <div className="text-4xl text-brand-teal">→</div>

      {/* Loops (circular) */}
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-teal/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#028393] text-white text-xs rounded-full">Marketing</div>
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#f65625] text-white text-xs rounded-full">Sales</div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 bg-[#faaa68] text-white text-xs rounded-full">Service</div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#3D5A80] text-white text-xs rounded-full">Ops</div>
        <p className="absolute inset-0 flex items-center justify-center text-xs text-brand-navy font-medium">Connected<br/>System</p>
      </div>
    </div>
  )
}

// Loop Card Component
function LoopCard({
  name,
  color,
  icon,
  purpose,
  inputs,
  outputs,
  stages
}: {
  name: string
  color: typeof LOOP_COLORS.marketing
  icon: string
  purpose: string
  inputs: string[]
  outputs: string[]
  stages: { name: string; description: string }[]
}) {
  return (
    <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: color.bg }}>
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: color.bg }}>
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display text-xl font-semibold text-white">Loop {name}</h3>
      </div>

      <div className="p-6 space-y-6">
        {/* Purpose */}
        <div>
          <h4 className="font-display text-lg font-semibold text-brand-navy mb-2">Purpose</h4>
          <p className="font-body text-text-secondary leading-relaxed">{purpose}</p>
        </div>

        {/* Inputs & Outputs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg" style={{ backgroundColor: color.light }}>
            <h5 className="font-body font-semibold text-brand-navy mb-2 text-sm">What Goes In</h5>
            <ul className="space-y-1">
              {inputs.map((input, i) => (
                <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span style={{ color: color.bg }}>→</span>
                  {input}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: color.light }}>
            <h5 className="font-body font-semibold text-brand-navy mb-2 text-sm">What Comes Out</h5>
            <ul className="space-y-1">
              {outputs.map((output, i) => (
                <li key={i} className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span style={{ color: color.bg }}>←</span>
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Four Stages */}
        <div>
          <h4 className="font-display text-lg font-semibold text-brand-navy mb-3">The Four Stages</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {stages.map((stage) => (
              <div key={stage.name} className="p-3 bg-gray-50 rounded-lg text-center">
                <p className="font-body font-semibold text-base" style={{ color: color.bg }}>{stage.name}</p>
                <p className="font-body text-sm text-text-secondary mt-1">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Role Card Component
function RoleCard({ role, focus, firstLoop }: { role: string; focus: string; firstLoop: string }) {
  return (
    <div className="p-5 bg-white rounded-lg border border-border-light hover:shadow-md transition-shadow">
      <h4 className="font-display font-semibold text-brand-navy mb-2">{role}</h4>
      <p className="font-body text-sm text-text-secondary mb-2"><strong>Focus:</strong> {focus}</p>
      <p className="font-body text-sm text-brand-teal"><strong>Start with:</strong> {firstLoop}</p>
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
              The Four Loops
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              The Four Loops Of The Loop Revenue System
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              How Marketing, Sales, Service, And Ops Become One Continuous System
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              Most organizations know they have marketing, sales, service, and operations. Fewer see them as four parts of one learning engine.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              The Loop Revenue System gives each area its own loop with a clear purpose, clear inputs and outputs, and the same four stages: Express, Tailor, Amplify, and Evolve.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              This page shows you where each loop starts, what each loop is responsible for, and how they connect. Once that picture is clear, it becomes much easier to decide what to fix first.
            </p>
          </div>
          <div className="flex justify-center">
            <FourLoopsDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyLoopsSection() {
  const comparisons = [
    { dept: 'Marketing chases leads and impressions', loop: 'Marketing loop learns what resonates and passes insight forward' },
    { dept: 'Sales chases deals and quotas', loop: 'Sales loop learns from conversations and improves targeting' },
    { dept: 'Service chases ticket resolution', loop: 'Service loop sees reality and feeds back to all loops' },
    { dept: 'Ops chases uptime and adoption', loop: 'Ops loop connects data so loops work as one' },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Why Think In Loops Instead Of Teams
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              You already have teams, an org chart, and job descriptions. That structure matters, but it does not tell you how revenue actually flows.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              When you only think in departments, each group optimizes for its own goals. All valid goals, but trouble comes when they compete instead of support.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              <strong className="text-brand-navy">Loops give you a different view.</strong> They focus on the journey your customers take and the learning your company gets at each step.
            </p>

            <div className="space-y-3">
              {comparisons.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#E0FBFC] rounded-lg">
                  <span className="text-brand-teal font-bold">→</span>
                  <div>
                    <p className="font-body text-sm text-gray-500 line-through">{c.dept}</p>
                    <p className="font-body text-sm text-brand-navy font-medium">{c.loop}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <DepartmentsToLoopsVisual />
            <p className="font-body text-text-secondary text-center mt-8 max-w-md mx-auto">
              When people talk in loops, conversations shift from blame to shared responsibility. You stop asking &quot;Who dropped the ball?&quot; and start asking &quot;Where did the loop break?&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HighLevelMapSection() {
  const loopFlows = [
    { name: 'Marketing', color: '#028393', description: 'Learns from market, content, and campaigns. Passes qualified interest and insight to Sales.' },
    { name: 'Sales', color: '#f65625', description: 'Learns from conversations and decisions. Passes new customers and context to Service.' },
    { name: 'Service', color: '#faaa68', description: 'Learns from usage, outcomes, and support. Passes feedback and stories to all loops.' },
    { name: 'Ops', color: '#3D5A80', description: 'Connects tools and data. Keeps score so the other loops can work together.' },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            A High Level Map Of The Four Loops
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Each loop has a front door and a back door. People and data enter, travel through the stages, and exit into the next loop in better shape than they arrived. When any loop sends confusion or missing data to the next, the whole system wobbles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {loopFlows.map((loop) => (
            <div key={loop.name} className="bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: loop.color }}>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: loop.color }}>
                Loop {loop.name}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {loop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LoopMarketingSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <LoopCard
            name="Marketing"
            color={LOOP_COLORS.marketing}
            icon="📣"
            purpose="Learn what to say, who to say it to, and where to show up so the right people find you and feel understood. Not only about generating leads—it's about building a library of language, stories, and proof that helps your whole company communicate with clarity."
            inputs={[
              'Market research and customer interviews',
              'Website and content analytics',
              'Campaign performance data',
              'Voice of customer from Sales and Service',
            ]}
            outputs={[
              'Qualified interest from ideal customers',
              'Educational content that answers real questions',
              'Stories and proof Sales and Service can reuse',
              'Insight on segments, messages, and channels',
            ]}
            stages={[
              { name: 'Express', description: 'Define POV and messages' },
              { name: 'Tailor', description: 'Segment and personalize' },
              { name: 'Amplify', description: 'Repurpose what works' },
              { name: 'Evolve', description: 'Learn and adjust' },
            ]}
          />
          <div className="mt-6 text-center">
            <Link href="/loops/marketing" className="font-body text-brand-teal hover:underline">
              Deep dive into Loop Marketing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function LoopSalesSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <LoopCard
            name="Sales"
            color={LOOP_COLORS.sales}
            icon="🤝"
            purpose="Help the right people make clear, confident decisions about working with you. Not only about closing deals—it's about learning from every conversation and using that learning to improve who you sell to and how you sell."
            inputs={[
              'Qualified interest and context from Marketing',
              'Account and contact data from Ops',
              'Stories, proof, and content assets',
            ]}
            outputs={[
              'New customers with clear expectations',
              'Reasons for wins and losses',
              'Objection and competitor insight',
              'Signals about which promises land',
            ]}
            stages={[
              { name: 'Express', description: 'Define process and talk tracks' },
              { name: 'Tailor', description: 'Shape discovery and proposals' },
              { name: 'Amplify', description: 'Share winning motions' },
              { name: 'Evolve', description: 'Refine targeting' },
            ]}
          />
          <div className="mt-6 text-center">
            <Link href="/loops/sales" className="font-body text-[#f65625] hover:underline">
              Deep dive into Loop Sales →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function LoopServiceSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <LoopCard
            name="Service"
            color={LOOP_COLORS.service}
            icon="💛"
            purpose="Keep customers successful after they buy. This includes onboarding, support, education, and success management. It's where you see whether your promises match reality and how your product fits into the customer's world."
            inputs={[
              'New customers and context from Sales',
              'Product usage data from Ops',
              'Knowledge base and training assets',
            ]}
            outputs={[
              'Feedback on friction and confusing experiences',
              'Success stories Marketing and Sales can share',
              'Expansion and churn risk signals',
              'Ideas for product and process improvements',
            ]}
            stages={[
              { name: 'Express', description: 'Define service philosophy' },
              { name: 'Tailor', description: 'Adjust plans to context' },
              { name: 'Amplify', description: 'Build self-service paths' },
              { name: 'Evolve', description: 'Improve from feedback' },
            ]}
          />
          <div className="mt-6 text-center">
            <Link href="/loops/service" className="font-body text-[#faaa68] hover:underline">
              Deep dive into Loop Service →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function LoopOpsSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <LoopCard
            name="Ops"
            color={LOOP_COLORS.ops}
            icon="⚙️"
            purpose="The backbone of the Loop Revenue System. Operations connects data, tools, and processes so Marketing, Sales, and Service can work as one system instead of three separate stacks. It helps the loops see the same truth and move in sync."
            inputs={[
              'Requirements and feedback from all loops',
              'Budget, compliance, and technical constraints',
              'Data from systems across the business',
            ]}
            outputs={[
              'Clean, connected data everyone can trust',
              'Workflows that reduce manual effort',
              'Dashboards showing loop health',
              'Guardrails that prevent breaking changes',
            ]}
            stages={[
              { name: 'Express', description: 'Define lifecycle and tools' },
              { name: 'Tailor', description: 'Configure for your business' },
              { name: 'Amplify', description: 'Scale effective workflows' },
              { name: 'Evolve', description: 'Adapt as business grows' },
            ]}
          />
          <div className="mt-6 text-center">
            <Link href="/loops/ops" className="font-body text-[#3D5A80] hover:underline">
              Deep dive into Loop Ops →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function SharingLearningSection() {
  const learnings = [
    { from: 'Marketing', sees: 'Early questions and decision research', color: '#028393' },
    { from: 'Sales', sees: 'Decision making, risk, and internal politics', color: '#f65625' },
    { from: 'Service', sees: 'Day-to-day usage and long-term outcomes', color: '#faaa68' },
    { from: 'Ops', sees: 'How data and process behave over time', color: '#3D5A80' },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How The Loops Share Learning
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Each loop sees different parts of your customers&apos; story. The magic happens when you treat these as shared assets, not private notes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {learnings.map((l) => (
            <div key={l.from} className="text-center p-4 rounded-lg bg-gray-50">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold" style={{ backgroundColor: l.color }}>
                {l.from[0]}
              </div>
              <p className="font-body text-base font-semibold text-brand-navy mb-1">{l.from} sees:</p>
              <p className="font-body text-sm text-text-secondary">{l.sees}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-[#E0FBFC] rounded-xl p-6 border-l-4 border-brand-teal">
          <p className="font-body text-text-secondary leading-relaxed mb-4">
            <strong className="text-brand-navy">In a healthy system:</strong> Marketing adjusts based on what Sales and Service see. Sales adjusts based on what Service and Ops see. Service adjusts based on what Marketing and Sales set up. Ops redesigns based on patterns all loops reveal.
          </p>
          <p className="font-body text-[#3D5A80] font-medium">
            Learning does not stop at the edge of a department. It flows through the loops and comes back stronger every cycle.
          </p>
        </div>
      </div>
    </section>
  )
}

function AiHumansSection() {
  const loops = [
    {
      name: 'Marketing',
      color: '#028393',
      ai: 'Research, summarize feedback, draft content',
      human: 'Decide what you stand for and how you express it',
    },
    {
      name: 'Sales',
      color: '#f65625',
      ai: 'Log activity, suggest next steps, draft outreach',
      human: 'Build trust, ask better questions, guide decisions',
    },
    {
      name: 'Service',
      color: '#faaa68',
      ai: 'Power chat, suggest answers, flag risk',
      human: 'Handle nuance, escalation, and emotional moments',
    },
    {
      name: 'Ops',
      color: '#3D5A80',
      ai: 'Watch metrics, surface anomalies, recommend optimizations',
      human: 'Decide which changes align with strategy and ethics',
    },
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            AI And Humans Across The Four Loops
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            AI can sit inside each loop, but the roles stay clear. The loops get faster and smarter with AI, but they stay human-led.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {loops.map((loop) => (
            <div key={loop.name} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="px-4 py-3" style={{ backgroundColor: loop.color }}>
                <h3 className="font-display font-semibold text-white">Loop {loop.name}</h3>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-body text-xs font-semibold text-gray-500 uppercase mb-1">AI assists</p>
                  <p className="font-body text-sm text-text-secondary">{loop.ai}</p>
                </div>
                <div className="p-3 bg-[#E0FBFC] rounded-lg">
                  <p className="font-body text-xs font-semibold text-brand-teal uppercase mb-1">Humans own</p>
                  <p className="font-body text-sm text-brand-navy">{loop.human}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RolesSection() {
  const roles = [
    { role: 'CEO / Founder', focus: 'See revenue as one system', firstLoop: 'Start with Ops for visibility' },
    { role: 'RevOps Leader', focus: 'Blueprint for data and process', firstLoop: 'Start with Ops, then connect loops' },
    { role: 'Marketing Leader', focus: 'Design to connect with Sales', firstLoop: 'Marketing loop stages' },
    { role: 'Sales Leader', focus: 'Learn from conversations', firstLoop: 'Sales loop stages' },
    { role: 'Service Leader', focus: 'Feed reality back to all loops', firstLoop: 'Service loop stages' },
    { role: 'Ops / Admin', focus: 'Prioritize by loop and stage', firstLoop: 'Ops loop foundation' },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How Different Roles Use The Four Loops
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Everyone sees where they sit in the loops and how they can help the whole system flourish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {roles.map((r) => (
            <RoleCard key={r.role} {...r} />
          ))}
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
            Where To Go Next
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Now that you have the high-level picture, dive deeper where it matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          <Link href="/loops/marketing" className="block p-5 rounded-xl text-center text-white transition-transform hover:scale-105" style={{ backgroundColor: '#028393' }}>
            <span className="text-2xl block mb-2">📣</span>
            <span className="font-display font-semibold">Loop Marketing</span>
          </Link>
          <Link href="/loops/sales" className="block p-5 rounded-xl text-center text-white transition-transform hover:scale-105" style={{ backgroundColor: '#f65625' }}>
            <span className="text-2xl block mb-2">🤝</span>
            <span className="font-display font-semibold">Loop Sales</span>
          </Link>
          <Link href="/loops/service" className="block p-5 rounded-xl text-center text-white transition-transform hover:scale-105" style={{ backgroundColor: '#faaa68' }}>
            <span className="text-2xl block mb-2">💛</span>
            <span className="font-display font-semibold">Loop Service</span>
          </Link>
          <Link href="/loops/ops" className="block p-5 rounded-xl text-center text-white transition-transform hover:scale-105" style={{ backgroundColor: '#3D5A80' }}>
            <span className="text-2xl block mb-2">⚙️</span>
            <span className="font-display font-semibold">Loop Ops</span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/overview/stages"
            className="btn bg-[#f65625] text-white border-[#f65625] hover:bg-[#d94a1f]"
          >
            The Four Stages
          </Link>
          <Link
            href="/roles/start-here"
            className="btn bg-white text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            Start Here by Role
          </Link>
        </div>

        <p className="font-body text-text-secondary text-center mt-8 max-w-xl mx-auto">
          Use the four loops as a shared map. Once your whole team sees revenue this way, it becomes much easier to decide what to change next.
        </p>
      </div>
    </section>
  )
}

export default function LoopsOverviewPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'The Four Loops of the Loop Revenue System',
            description: 'How Marketing, Sales, Service, and Ops become one continuous learning system.',
            url: `${siteUrl}/loops`,
          }),
        ]}
      />
      <HeroSection />
      <WhyLoopsSection />
      <HighLevelMapSection />
      <LoopMarketingSection />
      <LoopSalesSection />
      <LoopServiceSection />
      <LoopOpsSection />
      <SharingLearningSection />
      <AiHumansSection />
      <RolesSection />
      <CtaSection />
    </>
  )
}
