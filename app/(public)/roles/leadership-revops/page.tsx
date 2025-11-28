import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leadership & RevOps | Loop Revenue System',
  description: 'Use the Loop Revenue System as your operating model. A shared framework for leadership and RevOps to align on loops, stages, metrics, and execution.',
  openGraph: {
    title: 'Leadership & RevOps | Loop Revenue System',
    description: 'Use the Loop Revenue System as your operating model. A shared framework for leadership and RevOps to align on loops, stages, metrics, and execution.',
  },
}

// Loop data for the business view section
const loopViews = [
  {
    name: 'Marketing Loop',
    color: '#028393',
    description: 'How clearly and consistently we show up in the market.',
  },
  {
    name: 'Sales Loop',
    color: '#f65625',
    description: 'How we help the right humans make confident decisions to work with us.',
  },
  {
    name: 'Service Loop',
    color: '#faaa68',
    description: 'How we support and guide customers after the sale so they stay and expand.',
  },
  {
    name: 'Ops Loop',
    color: '#3D5A80',
    description: 'How we design and maintain the systems and data that support everything else.',
  },
]

// Stage data
const stages = [
  {
    name: 'Express',
    color: '#028393',
    question: 'Do we actually agree on who we serve and what success looks like?',
  },
  {
    name: 'Tailor',
    color: '#faaa68',
    question: 'Are we treating the right segments differently in a way that feels human?',
  },
  {
    name: 'Amplify',
    color: '#f65625',
    question: 'Are we scaling motions that already work, or are we scaling noise?',
  },
  {
    name: 'Evolve',
    color: '#3D5A80',
    question: 'Do our meetings lead to changes in how the system works, or just more commentary?',
  },
]

// Leadership Hub Diagram
function LeadershipHubDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto">
        {/* Center hub */}
        <circle cx="200" cy="200" r="60" fill="#3D5A80" />
        <text x="200" y="192" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Leadership
        </text>
        <text x="200" y="208" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          & RevOps
        </text>

        {/* Loop circles with connecting lines */}
        {/* Marketing - Top */}
        <line x1="200" y1="140" x2="200" y2="80" stroke="#028393" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="200" cy="50" r="40" fill="#028393" fillOpacity="0.1" stroke="#028393" strokeWidth="2" />
        <text x="200" y="54" textAnchor="middle" className="fill-[#028393] text-[12px] font-semibold">
          Marketing
        </text>

        {/* Sales - Right */}
        <line x1="260" y1="200" x2="320" y2="200" stroke="#f65625" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="350" cy="200" r="40" fill="#f65625" fillOpacity="0.1" stroke="#f65625" strokeWidth="2" />
        <text x="350" y="204" textAnchor="middle" className="fill-[#f65625] text-[12px] font-semibold">
          Sales
        </text>

        {/* Service - Bottom */}
        <line x1="200" y1="260" x2="200" y2="320" stroke="#faaa68" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="200" cy="350" r="40" fill="#faaa68" fillOpacity="0.1" stroke="#faaa68" strokeWidth="2" />
        <text x="200" y="354" textAnchor="middle" className="fill-[#faaa68] text-[12px] font-semibold">
          Service
        </text>

        {/* Ops - Left */}
        <line x1="140" y1="200" x2="80" y2="200" stroke="#3D5A80" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="50" cy="200" r="40" fill="#3D5A80" fillOpacity="0.1" stroke="#3D5A80" strokeWidth="2" />
        <text x="50" y="204" textAnchor="middle" className="fill-[#3D5A80] text-[12px] font-semibold">
          Ops
        </text>
      </svg>
    </div>
  )
}

// Ownership Card Component
function OwnershipCard({
  title,
  items,
  description,
  color,
}: {
  title: string
  items: string[]
  description?: string
  color: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3
        className="text-xl font-display font-bold mb-3"
        style={{ color }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-text-secondary text-sm mb-4">{description}</p>
      )}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="text-text-secondary text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Cadence Section Component
function CadenceCard({
  title,
  frequency,
  items,
  color,
}: {
  title: string
  frequency: string
  items: string[]
  color: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {frequency}
        </span>
        <h4 className="text-lg font-display font-bold text-brand-navy">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
            <span className="text-[#3D5A80]">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Metrics Row Component
function MetricsRow({
  loop,
  color,
  metrics,
}: {
  loop: string
  color: string
  metrics: string[]
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4 py-4 border-b border-gray-100 last:border-0">
      <div
        className="md:w-40 flex-shrink-0 font-semibold"
        style={{ color }}
      >
        {loop}
      </div>
      <ul className="flex-1 space-y-1">
        {metrics.map((metric, index) => (
          <li key={index} className="text-text-secondary text-sm flex items-start gap-2">
            <span style={{ color }}>•</span>
            {metric}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Pattern Card Component
function PatternCard({
  title,
  items,
  type,
}: {
  title: string
  items: string[]
  type: 'warning' | 'success'
}) {
  const isWarning = type === 'warning'
  const bgColor = isWarning ? 'bg-[#f65625]/5' : 'bg-[#028393]/5'
  const borderColor = isWarning ? 'border-[#f65625]/20' : 'border-[#028393]/20'
  const iconColor = isWarning ? '#f65625' : '#028393'
  const titleColor = isWarning ? '#f65625' : '#028393'

  return (
    <div className={`${bgColor} ${borderColor} border rounded-xl p-6`}>
      <div className="flex items-center gap-3 mb-4">
        {isWarning ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <h4 className="text-lg font-display font-bold" style={{ color: titleColor }}>
          {title}
        </h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
            <span style={{ color: iconColor }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Agreement Card Component
function AgreementCard({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <span className="w-10 h-10 rounded-full bg-[#3D5A80] text-white flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </span>
        <div>
          <h4 className="text-lg font-display font-bold text-brand-navy mb-2">
            {title}
          </h4>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Next Steps Card Component
function NextStepsCard({
  title,
  links,
  color,
}: {
  title: string
  links: { label: string; href: string }[]
  color: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4
        className="text-lg font-display font-bold mb-4"
        style={{ color }}
      >
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-brand-navy hover:underline text-sm flex items-center gap-2 group"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              {link.label}
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function LeadershipRevOpsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#E0FBFC] via-white to-[#98C1D9]/20">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#3D5A80] uppercase tracking-wider mb-4">
                Leadership & RevOps
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                Use The Loop Revenue System As Your{' '}
                <span className="text-[#3D5A80]">Operating Model</span>
              </h1>
              <p className="text-lg text-text-secondary mb-6">
                If you are in leadership or RevOps, you sit where decisions meet systems.
              </p>
              <p className="text-text-secondary mb-6">
                You feel the weight of disconnected dashboards, siloed goals, and tools that
                seem busy but do not add up to a clear story. You want a way to look at
                revenue as one system, not four departments that argue about who is right.
              </p>
              <p className="text-text-secondary">
                The Loop Revenue System gives you that shared map. This page shows how
                leadership and RevOps can use it every week and every quarter, so the
                company has a better chance to grow in a way that feels aligned and human.
              </p>
            </div>
            <div className="flex justify-center">
              <LeadershipHubDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Why Shared Operating Model */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-6">
                Why Leadership And RevOps Need A Shared Operating Model
              </h2>
              <p className="text-text-secondary mb-6">
                When leadership and RevOps do not share an operating model, the same pattern plays out.
              </p>
              <div className="space-y-2 text-text-secondary mb-6">
                <p>Leaders chase targets. RevOps chases tickets.</p>
                <p>Marketing, sales, and service chase their own goals.</p>
                <p>Dashboards multiply. Trust in data drops.</p>
              </div>
              <p className="text-text-secondary mb-6">
                Everyone works hard. The system still feels choppy.
              </p>
              <p className="text-lg font-semibold text-brand-navy mb-4">
                A shared model changes the conversation.
              </p>
              <p className="text-text-secondary mb-4">
                Instead of "Marketing vs Sales" or "New vs Existing," you talk about:
              </p>
              <div className="bg-[#E0FBFC] rounded-lg p-4 mb-6">
                <p className="font-semibold text-brand-navy">Four loops:</p>
                <p className="text-text-secondary mb-2">Marketing, Sales, Service, Ops.</p>
                <p className="font-semibold text-brand-navy">Four stages:</p>
                <p className="text-text-secondary">Express, Tailor, Amplify, Evolve.</p>
              </div>
              <p className="text-text-secondary mb-4">
                You stop asking only, "Are we hitting the number?" and start asking,
                "Which loop and which stage are holding us back?" That is a problem
                you can fix together.
              </p>
              <div className="space-y-2 text-text-secondary">
                <p><strong className="text-brand-navy">Leadership</strong> brings direction and trade-offs.</p>
                <p><strong className="text-brand-navy">RevOps</strong> brings systems and execution.</p>
                <p>The loops give you a way to see whether those two are actually connected.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#98C1D9]/10 border border-[#98C1D9]/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-[#3D5A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-display font-bold text-[#3D5A80]">
                    Without a shared model...
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                    Each team optimizes for their own metrics while the customer journey suffers
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                    Tool decisions get made without system-wide thinking
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                    Problems get blamed instead of diagnosed and fixed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Responsibility Section */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Who Owns What
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              You do not need a complex RACI chart. You do need clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <OwnershipCard
              title="Leadership Owns"
              color="#142d63"
              description="Leaders set the 'why' and the 'where.' The loops are how you get there."
              items={[
                'Direction: which customers you serve and which bets you make',
                'Outcomes: what "good" looks like for revenue, not only for one quarter',
                'Boundaries: the values you will not trade away for short-term wins',
              ]}
            />
            <OwnershipCard
              title="RevOps Owns"
              color="#3D5A80"
              description="RevOps turns direction into systems. They own how the loops are wired, measured, and changed."
              items={[
                'Data models, lifecycle stages, and pipelines',
                'Processes and workflows across tools',
                'Reporting and alerts that match leadership questions',
              ]}
            />
            <OwnershipCard
              title="Shared Work"
              color="#028393"
              description="The middle zone where you must decide together. If you are fighting about tools or tactics, it usually means you have not agreed here."
              items={[
                'Which loops and stages to focus on each quarter',
                'Which experiments and projects to run in which order',
                'Which metrics matter and what they actually mean',
                'How to spot early signals that a change is helping or hurting',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Loops as Leadership View */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Loops As The Leadership View Of The Business
            </h2>
            <p className="text-text-secondary">
              As a leader, you could look at your business in a hundred ways.
              The Loop Revenue System suggests four simple ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {loopViews.map((loop) => (
              <div
                key={loop.name}
                className="rounded-xl p-6 border-t-4"
                style={{
                  borderColor: loop.color,
                  backgroundColor: `${loop.color}08`,
                }}
              >
                <h3
                  className="text-lg font-display font-bold mb-2"
                  style={{ color: loop.color }}
                >
                  {loop.name}
                </h3>
                <p className="text-text-secondary text-sm">{loop.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#3D5A80]/5 border border-[#3D5A80]/20 rounded-xl p-8">
            <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
              Leadership and RevOps use loops to:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                See where energy and investment are going
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                Spot which loop is overachieving and which is under-supported
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#3D5A80] mt-2 flex-shrink-0" />
                Set goals that acknowledge the whole journey, not just one stage of it
              </li>
            </ul>
            <p className="text-text-secondary mt-6 pt-6 border-t border-[#3D5A80]/20">
              When you say "we have a pipeline problem," you can ask, "Is this a Marketing
              loop issue, a Sales loop issue, a Service loop issue feeding back, or an Ops
              issue?" The answer is rarely "only one."
            </p>
          </div>
        </div>
      </section>

      {/* Stages as Execution View */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Stages As The Execution View
            </h2>
            <p className="text-text-secondary">
              The loops give you the "where." The stages give you the "how."
              Every loop runs through four stages.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {stages.map((stage) => (
              <div
                key={stage.name}
                className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div
                  className="px-4 py-2 rounded-lg font-bold text-white text-center md:w-32 flex-shrink-0"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.name}
                </div>
                <p className="text-text-secondary flex-1">{stage.question}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-text-secondary">
              When something is off, you do not only see "bad numbers." You see which stage
              needs work. As a leadership and RevOps pair, you can use these stages as filters
              for every conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Cadence */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              A Simple Operating Cadence
            </h2>
            <p className="text-text-secondary">
              You can use the Loop Revenue System as more than a diagram. You can use it
              to shape your calendar. Here is a simple cadence you can adapt.
            </p>
          </div>

          <div className="space-y-6">
            <CadenceCard
              title="Loops At The Team Level"
              frequency="Weekly"
              color="#028393"
              items={[
                'Marketing asks: What did we Express, Tailor, Amplify, and Evolve this week?',
                'Sales asks: Where did deals get stuck in our stages, and what did we learn?',
                'Service asks: What patterns did we see in tickets and outcomes?',
                'Ops asks: What changed in the system and what needs attention next?',
                'RevOps partners with each loop, not just with leadership.',
              ]}
            />
            <CadenceCard
              title="Cross-Loop Leadership & RevOps Review"
              frequency="Monthly"
              color="#f65625"
              items={[
                'Look at one shared dashboard that shows key signals for each loop',
                'Ask "Which loop feels like the current bottleneck?"',
                'Ask "Which stage inside that loop is the real constraint?"',
                'Choose one or two plays from System Playbooks to address that stage',
                'You do not solve everything. You decide what to move forward.',
              ]}
            />
            <CadenceCard
              title="Loop And Stage Reset"
              frequency="Quarterly"
              color="#3D5A80"
              items={[
                'Are we still focused on the right loops for this season of the business?',
                'Do we need to change any Express decisions about who we serve or how?',
                'What did we learn from the plays we ran in each stage?',
                'Update targets at the loop level, not only by department',
                'Update the experiment backlog and system change log',
              ]}
            />
          </div>

          <div className="mt-8 p-6 bg-[#98C1D9]/10 rounded-xl border border-[#98C1D9]/30">
            <p className="text-text-secondary text-center">
              The cadence is not about more meetings. It is about meetings that
              line up with how revenue actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Level Metrics */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Leadership-Level Metrics That Follow The Loops
            </h2>
            <p className="text-text-secondary">
              You can fill dashboards with hundreds of metrics. Leadership and RevOps
              need a short list that matches the loops.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8">
            <MetricsRow
              loop="Marketing Loop"
              color="#028393"
              metrics={[
                'Volume of meaningful new conversations or engaged contacts in target segments',
                'Percentage of opportunities influenced by key content or campaigns',
              ]}
            />
            <MetricsRow
              loop="Sales Loop"
              color="#f65625"
              metrics={[
                'Win rate and sales cycle length by segment, not just overall',
                'Percentage of pipeline that matches agreed "good fit" criteria',
              ]}
            />
            <MetricsRow
              loop="Service Loop"
              color="#faaa68"
              metrics={[
                'Time to first meaningful value for new customers',
                'Retention and expansion rates by segment',
                'Recurring issues that generate tickets or negative feedback',
              ]}
            />
            <MetricsRow
              loop="Ops Loop"
              color="#3D5A80"
              metrics={[
                'Data completeness and accuracy for core fields',
                'System uptime plus workflow and integration health',
                'Time from idea to deployed change for key processes',
              ]}
            />
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-text-secondary mb-4">
              These are examples, not a mandate. The key is that leadership-level metrics:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80]" />
                Connect to loops and stages
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80]" />
                Help you make decisions, not only admire graphs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3D5A80]" />
                Encourage cooperation instead of finger-pointing
              </li>
            </ul>
            <p className="text-text-secondary mt-4 pt-4 border-t border-gray-100">
              When a number looks off, you can ask, "Which loop? Which stage? What play?"
            </p>
          </div>
        </div>
      </section>

      {/* Failure Patterns */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Common Failure Patterns And How To Avoid Them
            </h2>
            <p className="text-text-secondary">
              When leadership and RevOps do not anchor in a shared model,
              certain patterns keep repeating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PatternCard
              type="warning"
              title="Patterns to watch for"
              items={[
                'Tool-first thinking: "If we just buy or reconfigure this tool, things will improve."',
                'Siloed goals: each department hits its numbers, but customers feel the seams.',
                'Dashboard overload: lots of data, very few decisions.',
                'Chaos projects: big overhaul initiatives with fuzzy outcomes and no clear stage focus.',
              ]}
            />
            <PatternCard
              type="success"
              title="Better moves"
              items={[
                'System-first thinking: design loops and stages, then choose tools and changes.',
                'Shared goals: loops and stages with metrics that cross teams.',
                'Focused views: a few dashboards tied to your operating cadence.',
                'Smaller projects: plays from System Playbooks that fit into weeks and months, not years.',
              ]}
            />
          </div>

          <div className="mt-8 p-6 bg-[#3D5A80]/5 rounded-xl border border-[#3D5A80]/20 text-center">
            <p className="text-brand-navy font-semibold">
              A good rule: if a project cannot be linked to a specific loop and stage,
              it is probably not ready.
            </p>
          </div>
        </div>
      </section>

      {/* Ways of Working Agreements */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Ways Of Working Agreements
            </h2>
            <p className="text-text-secondary">
              You do not need a thick playbook of rules. A few clear agreements
              can change how leadership and RevOps move together.
            </p>
          </div>

          <div className="space-y-4">
            <AgreementCard
              number={1}
              title="We decide focus by loops and stages, not by opinions."
              description="When we pick priorities, we ask which loop and stage are the real constraint. We use data and customer stories to decide."
            />
            <AgreementCard
              number={2}
              title="We change systems in small, testable steps."
              description="Instead of giant, vague projects, we choose smaller plays from System Playbooks. We test, learn, and adjust."
            />
            <AgreementCard
              number={3}
              title="We protect data, people, and trust."
              description="We follow the guidance in Data, Metrics, And Governance and AI And Humans. We do not use AI or automation in ways we would be ashamed to explain to a customer."
            />
          </div>

          <p className="text-text-secondary text-center mt-8">
            You can add more. Just keep them simple enough that people remember them when things get busy.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding bg-white border-t-4 border-[#98C1D9]">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Where To Go Next
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              If you are in leadership or RevOps, you already carry a lot.
              The Loop Revenue System is here to make that load clearer and more shared.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <NextStepsCard
              title="Understand the model"
              color="#028393"
              links={[
                { label: 'What Is The Loop Revenue System', href: '/overview/loop-revenue-system' },
                { label: 'Four Loops Overview', href: '/loops' },
                { label: 'Stages: Express, Tailor, Amplify, Evolve', href: '/overview/stages' },
              ]}
            />
            <NextStepsCard
              title="Design your system"
              color="#3D5A80"
              links={[
                { label: 'Ops Loop', href: '/loops/ops' },
                { label: 'Data, Metrics, And Governance', href: '/overview/data-metrics-governance' },
                { label: 'HubSpot Implementation', href: '/playbooks/hubspot' },
                { label: 'Non-HubSpot Implementation', href: '/playbooks/no-hubspot' },
              ]}
            />
            <NextStepsCard
              title="Run your first plays"
              color="#f65625"
              links={[
                { label: 'System Playbooks', href: '/playbooks/system' },
                { label: 'AI And Humans', href: '/playbooks/ai-and-humans' },
                { label: 'Start Here', href: '/roles/start-here' },
              ]}
            />
          </div>

          {/* Final Invitation */}
          <div className="bg-gradient-to-br from-[#142d63] to-[#1e3a5f] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              One Final Invitation
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              With your leadership or RevOps partner, answer three questions:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl font-bold text-[#028393]">1</span>
                <p className="text-white/90 text-sm mt-2">
                  Which loop is our biggest bottleneck right now?
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl font-bold text-[#f65625]">2</span>
                <p className="text-white/90 text-sm mt-2">
                  Which stage inside that loop is most underpowered?
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl font-bold text-[#3D5A80]">3</span>
                <p className="text-white/90 text-sm mt-2">
                  Which one small play are we willing to commit to in the next 30-90 days?
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              Write down your answers. Treat them as your first Loop Revenue System decision.
              Then let that decision shape what you fund, what you change, and how you help
              your organization and your customers flourish.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Leadership & RevOps | Loop Revenue System',
            description: 'Use the Loop Revenue System as your operating model for leadership and RevOps alignment.',
            mainEntity: {
              '@type': 'Article',
              name: 'Leadership & RevOps Operating Model',
              articleSection: [
                'Why Leadership And RevOps Need A Shared Operating Model',
                'Who Owns What',
                'Loops As The Leadership View',
                'Stages As The Execution View',
                'Operating Cadence',
                'Leadership-Level Metrics',
                'Failure Patterns',
                'Ways Of Working Agreements',
              ],
            },
          }),
        }}
      />
    </main>
  )
}
