import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'AI And Humans | Hybrid Collaboration | Loop Revenue System',
  description: 'Learn how AI and humans work together in the Loop Revenue System. AI assists, humans lead. Practical patterns for collaboration across loops and stages.',
  openGraph: {
    title: 'AI And Humans | Loop Revenue System',
    description: 'Let AI help your loops spin, while humans stay in charge. Collaboration patterns for a hybrid operating model.',
    type: 'article',
  },
}

// AI + Human Diagram
function AiHumanDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-border-light">
      <div className="relative h-56 w-56 mx-auto">
        {/* Central loop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#E0FBFC] border-2 border-[#028393] border-dashed flex flex-col items-center justify-center">
          <span className="text-[#028393] font-semibold text-xs">Four</span>
          <span className="text-[#028393] font-semibold text-xs">Stages</span>
        </div>

        {/* AI icon - top */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#028393] flex items-center justify-center">
            <span className="text-white text-2xl">🤖</span>
          </div>
          <span className="font-body text-xs text-[#028393] mt-1 font-semibold">AI Assists</span>
        </div>

        {/* Human icon - bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-[#3D5A80] flex items-center justify-center">
            <span className="text-white text-2xl">👤</span>
          </div>
          <span className="font-body text-xs text-[#3D5A80] mt-1 font-semibold">Humans Lead</span>
        </div>

        {/* Connecting arrows */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path d="M 50 25 Q 65 35 55 50" stroke="#028393" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
          <path d="M 50 75 Q 35 65 45 50" stroke="#3D5A80" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
        </svg>
      </div>
      <p className="font-body text-xs text-text-secondary text-center mt-2 italic">
        Working together, not replacing each other
      </p>
    </div>
  )
}

// Loop AI Card
function LoopAiCard({
  loop,
  color,
  aiHelps,
  humansMust
}: {
  loop: string
  color: string
  aiHelps: string[]
  humansMust: string[]
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border-l-4" style={{ borderLeftColor: color }}>
      <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">{loop}</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-body text-sm font-semibold text-[#028393] mb-2 flex items-center gap-2">
            <span>🤖</span> AI can help
          </h4>
          <ul className="space-y-1">
            {aiHelps.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#028393] mt-0.5 text-sm">•</span>
                <span className="font-body text-sm text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 border-t border-border-light">
          <h4 className="font-body text-sm font-semibold text-[#3D5A80] mb-2 flex items-center gap-2">
            <span>👤</span> Humans must
          </h4>
          <ul className="space-y-1">
            {humansMust.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#3D5A80] mt-0.5 text-sm">•</span>
                <span className="font-body text-sm text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Stage AI Card
function StageAiCard({
  stage,
  color,
  icon,
  aiCan,
  humansMust
}: {
  stage: string
  color: string
  icon: string
  aiCan: string[]
  humansMust: string[]
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
        <h4 className="font-display font-semibold text-brand-navy">AI in {stage}</h4>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-body text-xs font-semibold text-[#028393] mb-2">AI can:</p>
          <ul className="space-y-1">
            {aiCan.map((item, i) => (
              <li key={i} className="font-body text-sm text-text-secondary">• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-xs font-semibold text-[#3D5A80] mb-2">Humans must:</p>
          <ul className="space-y-1">
            {humansMust.map((item, i) => (
              <li key={i} className="font-body text-sm text-text-secondary">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Pattern Card
function PatternCard({
  number,
  title,
  description,
  examples,
  color
}: {
  number: string
  title: string
  description: string
  examples: string[]
  color: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        <h4 className="font-display font-semibold text-brand-navy">{title}</h4>
      </div>
      <p className="font-body text-sm text-text-secondary mb-3">{description}</p>
      <ul className="space-y-1">
        {examples.map((ex, i) => (
          <li key={i} className="font-body text-xs text-text-secondary">• {ex}</li>
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
              AI & Humans
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Let AI Help Your Loops Spin, While Humans Stay In Charge
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              AI can make your loops faster, smarter, and more consistent. It can also make mistakes at scale if you let it run without guardrails.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              This page is about a simple idea: <strong className="text-brand-navy">AI assists. Humans lead.</strong>
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              You&apos;ll see how AI fits into the Loop Revenue System across marketing, sales, service, and ops: where AI does its best work, where humans must stay in control, and how to design a hybrid operating model.
            </p>
          </div>
          <div className="flex justify-center">
            <AiHumanDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyHybridSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Why A Hybrid Approach Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              You don&apos;t want a fully manual system. Humans get tired. They forget things. They struggle to see patterns in thousands of data points or conversations.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              You also don&apos;t want a fully automated system. AI doesn&apos;t carry your values. It doesn&apos;t feel what your customers feel. It doesn&apos;t sit in leadership meetings and own outcomes.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              The Loop Revenue System assumes you want both speed and responsibility.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#E0FBFC] rounded-lg">
                <p className="font-body text-sm font-semibold text-[#028393] mb-2">AI is good at:</p>
                <p className="font-body text-xs text-text-secondary">Pattern spotting, summarizing, drafting</p>
              </div>
              <div className="p-4 bg-[#E8EEF4] rounded-lg">
                <p className="font-body text-sm font-semibold text-[#3D5A80] mb-2">Humans are good at:</p>
                <p className="font-body text-xs text-text-secondary">Judgment, care, long-term thinking</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
            <h3 className="font-display text-lg font-semibold text-red-600 mb-4">If AI Is The Only Brain...</h3>
            <ul className="space-y-3">
              {[
                'Values get lost in optimization',
                'Mistakes compound at scale',
                'Trust erodes when things go wrong',
              ].map((risk, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  <span className="font-body text-sm text-text-secondary">{risk}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-[#3D5A80] mt-4 italic">
              Hybrid means your team feels more capable, not more replaceable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StrengthsSection() {
  const aiStrengths = [
    'Read a lot of text and pull out themes',
    'Summarize calls, tickets, and feedback',
    'Draft outlines, first drafts, and variations',
    'Suggest next steps based on patterns in data',
    'Watch metrics and surface what looks unusual',
  ]

  const humanStrengths = [
    'Decide what the business stands for and will not do',
    'Hold empathy in tricky conversations and decisions',
    'Weigh trade-offs between short-term gains and long-term trust',
    'Interpret patterns with context that lives outside the tools',
    'Own the impact of changes on real humans and teams',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            What AI Is Good At And What Humans Are Good At
          </h2>
          <p className="font-body text-text-secondary text-center mb-12">
            The loops need both sets of strengths. The art is deciding who does what, when.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#028393] flex items-center justify-center">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">AI Shines When...</h3>
              </div>
              <ul className="space-y-3">
                {aiStrengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">✓</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#3D5A80]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#3D5A80] flex items-center justify-center">
                  <span className="text-white text-xl">👤</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#3D5A80]">Humans Shine When...</h3>
              </div>
              <ul className="space-y-3">
                {humanStrengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3D5A80] mt-1">★</span>
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

function AiByLoopSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            How AI Fits Across The Four Loops
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Each loop has different opportunities for AI assistance and different places where humans must stay in control.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <LoopAiCard
              loop="AI in the Marketing Loop"
              color="#028393"
              aiHelps={[
                'Summarize customer interviews and call transcripts',
                'Scan reviews, chat logs, and search queries for questions',
                'Draft outlines, headlines, and first drafts',
                'Generate variations for subject lines and hooks',
              ]}
              humansMust={[
                'Define the point of view and lines you won\'t cross',
                'Choose which topics matter and which don\'t',
                'Edit AI output so it sounds like your brand',
                'Decide how far personalization should go',
              ]}
            />

            <LoopAiCard
              loop="AI in the Sales Loop"
              color="#f65625"
              aiHelps={[
                'Log and summarize calls and meetings',
                'Suggest follow-up emails and next best actions',
                'Highlight deals at risk based on behavior',
                'Surface common objections and winning talk tracks',
              ]}
              humansMust={[
                'Build trust in real time with buyers',
                'Decide when to press forward, pause, or walk away',
                'Hold the line on honest promises and fit',
                'Use AI suggestions as inputs, not orders',
              ]}
            />

            <LoopAiCard
              loop="AI in the Service Loop"
              color="#faaa68"
              aiHelps={[
                'Suggest relevant help articles or canned replies',
                'Power simple, clearly scoped chatbots',
                'Summarize long ticket histories for handoffs',
                'Flag unusual spikes in ticket types or segments',
              ]}
              humansMust={[
                'Handle complex, emotional, or sensitive situations',
                'Decide when to go beyond the script',
                'Turn patterns into product improvements',
                'Protect privacy when customers are vulnerable',
              ]}
            />

            <LoopAiCard
              loop="AI in the Ops Loop"
              color="#3D5A80"
              aiHelps={[
                'Scan data for duplicates, gaps, and anomalies',
                'Recommend field normalization and enrichment',
                'Watch workflow logs and surface error patterns',
                'Prototype new workflows in natural language',
              ]}
              humansMust={[
                'Design the lifecycle and data model',
                'Set access, privacy, and compliance rules',
                'Choose which AI recommendations to accept',
                'Communicate changes and train teams',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AiByStageSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            How AI Fits Across The Four Stages
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            The same four stages show up in every loop. AI plays a different role in each.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <StageAiCard
              stage="Express"
              color="#028393"
              icon="✦"
              aiCan={[
                'Summarize research and feedback into themes',
                'Help explore different ways to phrase your point of view',
                'Compare messaging to what customers say they care about',
              ]}
              humansMust={[
                'Decide what you believe and who you are for',
                'Resolve conflicts between popular and right',
                'Choose which narratives you will stand behind',
              ]}
            />

            <StageAiCard
              stage="Tailor"
              color="#faaa68"
              icon="◈"
              aiCan={[
                'Suggest segments or clusters for humans to validate',
                'Generate tailored drafts for specific roles or industries',
                'Recommend content based on behavior and profile',
              ]}
              humansMust={[
                'Define which segments matter and why',
                'Set boundaries for ethical data use',
                'Approve AI suggestions before high-value audiences',
              ]}
            />

            <StageAiCard
              stage="Amplify"
              color="#f65625"
              icon="◉"
              aiCan={[
                'Repurpose content into multiple formats',
                'Create variations for ads, posts, and nurture assets',
                'Assist with bulk updates following clear rules',
              ]}
              humansMust={[
                'Choose which ideas deserve amplification',
                'Guard against over-automation that overwhelms',
                'Check that content still reflects your values',
              ]}
            />

            <StageAiCard
              stage="Evolve"
              color="#3D5A80"
              icon="↻"
              aiCan={[
                'Scan dashboards for patterns and anomalies',
                'Group feedback and tickets into themes faster',
                'Suggest possible reasons for shifts in performance',
              ]}
              humansMust={[
                'Decide which patterns matter vs noise',
                'Design experiments based on data and strategy',
                'Turn insights into actual changes in loops',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CollaborationPatternsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Practical Collaboration Patterns
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            You don&apos;t need an advanced framework to start using AI with intent. A few simple patterns go a long way.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <PatternCard
              number="1"
              title="Human Sets The Brief, AI Explores"
              description="You start with a clear prompt: the loop, stage, audience, and problem. AI explores options or drafts first versions. Humans choose and refine."
              examples={[
                'Works well for Express and Tailor work',
                'Human defines constraints, AI generates options',
                'Final choice always stays with humans',
              ]}
              color="#028393"
            />

            <PatternCard
              number="2"
              title="AI Drafts, Humans Edit"
              description="Let AI write the first pass. Humans then check for accuracy, tone, and fit. Nothing goes customer-facing without a human owning it."
              examples={[
                'Emails, call recaps, summaries',
                'Outlines or content based on briefs',
                'Internal documentation with simple structure',
              ]}
              color="#faaa68"
            />

            <PatternCard
              number="3"
              title="AI Monitors, Humans Respond"
              description="Set AI up to watch key metrics, patterns, and errors. AI sends alerts and summaries. Humans decide what to investigate and change."
              examples={[
                'Unusual spikes or drops in metrics',
                'Ticket or feedback pattern changes',
                'Workflow errors or integration failures',
              ]}
              color="#f65625"
            />

            <PatternCard
              number="4"
              title="Human Decides, AI Documents"
              description="When humans make decisions about strategy, process, or tests, AI helps capture and distribute that knowledge."
              examples={[
                'Summarize meeting notes and decisions',
                'Turn decisions into SOPs or checklists',
                'Create training materials or internal FAQs',
              ]}
              color="#3D5A80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function RisksGuardrailsSection() {
  const risks = [
    { label: 'Consent & privacy', desc: 'Using data in ways customers did not agree to' },
    { label: 'Bias & fairness', desc: 'Repeating or amplifying unfair patterns' },
    { label: 'Hallucination', desc: 'Confidently wrong answers in support or sales' },
    { label: 'Over-automation', desc: 'Sequences and bots that keep going when they should stop' },
    { label: 'De-skilling', desc: 'Teams losing their own judgment and craft' },
  ]

  const guardrails = [
    'Clear rules about what data can and cannot feed AI systems',
    'A review step for any AI output that reaches customers',
    'Simple "kill switches" for campaigns, bots, or workflows',
    'Regular checks on AI-influenced outcomes for bias',
    'Training on how to question AI, not just how to prompt it',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Risks, Ethics, And Guardrails
          </h2>
          <p className="font-body text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            AI brings real risks if you let it run your loops without care. Your goal is not zero risk; it&apos;s to see the risk clearly and keep humans accountable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 border-red-400 bg-red-50">
              <h3 className="font-display text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                <span>⚠️</span> Risks To Watch
              </h3>
              <ul className="space-y-3">
                {risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <div>
                      <span className="font-body text-sm font-semibold text-brand-navy">{risk.label}:</span>
                      <span className="font-body text-sm text-text-secondary ml-1">{risk.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-[#028393] bg-white">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4 flex items-center gap-2">
                <span>🛡️</span> Guardrails To Set
              </h3>
              <ul className="space-y-3">
                {guardrails.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#028393] mt-1">✓</span>
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

function GovernanceSection() {
  const checklist = [
    { step: 'Name owners', desc: 'For each loop, decide who owns AI-assisted work' },
    { step: 'Define use cases', desc: 'Write down where you will use AI and where you won\'t' },
    { step: 'Log important prompts', desc: 'Keep a record of prompts that produce good results' },
    { step: 'Review outcomes', desc: 'Sample AI-assisted work regularly for quality and tone' },
    { step: 'Keep a change log', desc: 'Note when AI influences process, content, or targeting' },
  ]

  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Governance And QA For AI-Assisted Work
          </h2>
          <p className="font-body text-text-secondary text-center mb-12">
            AI governance doesn&apos;t have to be heavy or scary. It does have to be real.
          </p>

          <div className="bg-[#E8EEF4] rounded-xl p-6 border border-[#3D5A80]/30">
            <h3 className="font-display font-semibold text-[#3D5A80] mb-4">A Simple Governance Approach:</h3>
            <div className="space-y-4">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-[#3D5A80] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-brand-navy">{item.step}</p>
                    <p className="font-body text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-body text-text-secondary text-center mt-8">
            Tie this back to your <Link href="/overview/data-metrics-governance" className="text-[#028393] hover:underline">Data, Metrics, and Governance</Link> practices. AI should live inside those rules, not outside them.
          </p>
        </div>
      </div>
    </section>
  )
}

function ConnectionsSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How This Connects To Playbooks And Implementation
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            You don&apos;t need a separate &quot;AI strategy&quot; that sits off to the side. The fastest way to use AI well is to layer it onto work you already plan to do with the Loop Revenue System.
          </p>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            Use the System Playbooks to define your plays. Then ask where AI could help in Express, Tailor, Amplify, and Evolve.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/playbooks/system"
              className="p-4 bg-white rounded-lg border border-border-light hover:shadow-md transition-shadow"
            >
              <p className="font-display font-semibold text-brand-navy text-sm">System Playbooks</p>
              <p className="font-body text-xs text-text-secondary mt-1">Define your plays first</p>
            </Link>

            <Link
              href="/playbooks/hubspot"
              className="p-4 bg-white rounded-lg border border-border-light hover:shadow-md transition-shadow"
            >
              <p className="font-display font-semibold text-brand-navy text-sm">HubSpot Implementation</p>
              <p className="font-body text-xs text-text-secondary mt-1">Map plays into HubSpot</p>
            </Link>

            <Link
              href="/playbooks/no-hubspot"
              className="p-4 bg-white rounded-lg border border-border-light hover:shadow-md transition-shadow"
            >
              <p className="font-display font-semibold text-brand-navy text-sm">Non-HubSpot Implementation</p>
              <p className="font-body text-xs text-text-secondary mt-1">Map plays into any stack</p>
            </Link>
          </div>

          <p className="font-body text-sm text-[#3D5A80] mt-6 italic">
            AI doesn&apos;t replace these pages. It rides along with them.
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
            If you take one idea from this page, let it be this: <strong className="text-brand-navy">AI is a powerful assistant, not a new boss.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Stage-Based Actions</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Concrete plays where AI can plug in at each stage.
            </p>
            <Link href="/playbooks/system" className="font-body text-sm text-[#028393] hover:underline">
              System Playbooks →
            </Link>
          </div>

          <div className="bg-[#FEF3E8] rounded-xl p-6 border border-[#faaa68]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Better Oversight</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Data, metrics, and governance for AI-assisted work.
            </p>
            <Link href="/overview/data-metrics-governance" className="font-body text-sm text-[#faaa68] hover:underline">
              Data & Governance →
            </Link>
          </div>

          <div className="bg-[#FEE8E1] rounded-xl p-6 border border-[#f65625]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Practical Tools</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Templates and exercises to use with your team.
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
            Pick one loop, one stage, and one use case where AI could remove friction or uncover insight. Design the collaboration pattern. Set the guardrails. Run the play.
          </p>
          <p className="font-body text-[#3D5A80] font-medium mt-4">
            Then let your team, your customers, and your loops tell you what should change next, so everyone has a better chance to flourish.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function AiAndHumansPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'AI And Humans',
            description: 'Learn how AI and humans work together in the Loop Revenue System. AI assists, humans lead.',
            url: `${siteUrl}/playbooks/ai-and-humans`,
          }),
        ]}
      />
      <HeroSection />
      <WhyHybridSection />
      <StrengthsSection />
      <AiByLoopSection />
      <AiByStageSection />
      <CollaborationPatternsSection />
      <RisksGuardrailsSection />
      <GovernanceSection />
      <ConnectionsSection />
      <NextStepsSection />
    </>
  )
}
