import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'System Playbooks | Concrete Plays for Each Stage | Loop Revenue System',
  description: 'Turn the Loop Revenue System into concrete next steps. Practical plays for Express, Tailor, Amplify, and Evolve across marketing, sales, service, and ops.',
  openGraph: {
    title: 'System Playbooks | Loop Revenue System',
    description: 'Practical plays for each stage across all four loops. Turn the model into action.',
    type: 'article',
  },
}

// Stage colors
const stageColors = {
  express: { primary: '#028393', bg: 'bg-[#E0FBFC]', border: 'border-[#028393]', text: 'text-[#028393]' },
  tailor: { primary: '#faaa68', bg: 'bg-[#FEF3E8]', border: 'border-[#faaa68]', text: 'text-[#faaa68]' },
  amplify: { primary: '#f65625', bg: 'bg-[#FEE8E1]', border: 'border-[#f65625]', text: 'text-[#f65625]' },
  evolve: { primary: '#3D5A80', bg: 'bg-[#E8EEF4]', border: 'border-[#3D5A80]', text: 'text-[#3D5A80]' },
}

// Stage Lanes Diagram for Hero
function StageLanesDiagram() {
  const stages = [
    { name: 'Express', color: '#028393', icon: '✦', desc: 'Get clear' },
    { name: 'Tailor', color: '#faaa68', icon: '◈', desc: 'Make personal' },
    { name: 'Amplify', color: '#f65625', icon: '◉', desc: 'Scale what works' },
    { name: 'Evolve', color: '#3D5A80', icon: '↻', desc: 'Learn & improve' },
  ]

  return (
    <div className="space-y-3">
      {stages.map((stage) => (
        <div
          key={stage.name}
          className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border-l-4"
          style={{ borderLeftColor: stage.color }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
            style={{ backgroundColor: stage.color }}
          >
            {stage.icon}
          </div>
          <div>
            <p className="font-display font-semibold text-brand-navy">{stage.name}</p>
            <p className="font-body text-sm text-text-secondary">{stage.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Play Card Component
function PlayCard({
  loop,
  loopColor,
  title,
  steps
}: {
  loop: string
  loopColor: string
  title: string
  steps: string[]
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: loopColor }}
        />
        <p className="font-body text-sm font-semibold uppercase tracking-wider" style={{ color: loopColor }}>
          {loop}
        </p>
      </div>
      <h4 className="font-display text-lg font-medium text-brand-navy mb-4">{title}</h4>
      <ul className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-text-secondary mt-1 text-sm">{i + 1}.</span>
            <span className="font-body text-sm text-text-secondary">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Stage Section Component
function StageSection({
  stage,
  stageKey,
  tagline,
  intro,
  plays
}: {
  stage: string
  stageKey: 'express' | 'tailor' | 'amplify' | 'evolve'
  tagline: string
  intro: string
  plays: Array<{
    loop: string
    loopColor: string
    title: string
    steps: string[]
  }>
}) {
  const colors = stageColors[stageKey]
  const icons = { express: '✦', tailor: '◈', amplify: '◉', evolve: '↻' }

  return (
    <section className={cn('section-padding', stageKey === 'tailor' || stageKey === 'evolve' ? colors.bg : 'bg-white')}>
      <div className="container-content">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={cn('border-t-4 pt-8 mb-8', colors.border)}>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white"
                style={{ backgroundColor: colors.primary }}
              >
                {icons[stageKey]}
              </div>
              <div>
                <h2 className="font-display text-3xl font-medium text-brand-navy">{stage} Playbook</h2>
                <p className={cn('font-body text-sm font-semibold', colors.text)}>{tagline}</p>
              </div>
            </div>
            <p className="font-body text-text-secondary leading-relaxed max-w-3xl">{intro}</p>
          </div>

          {/* Play Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {plays.map((play, i) => (
              <PlayCard key={i} {...play} />
            ))}
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
              Playbooks
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
              Turn The Loop Revenue System Into Concrete Next Steps
            </h1>
            <p className="font-body text-xl text-[#3D5A80] leading-relaxed mb-6">
              The Loop Revenue System gives you a clear way to think about revenue: four loops and four stages. That&apos;s the model.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              System playbooks are how you make that model real. On this page, you&apos;ll see simple, practical plays for each stage across marketing, sales, service, and ops.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              You don&apos;t need to do everything at once. Choose one play, run it, learn, and keep the loop spinning.
            </p>
          </div>
          <div className="flex justify-center">
            <StageLanesDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatAndWhySection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              What A System Playbook Is And Why It Matters
            </h2>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              A system playbook is a small set of repeatable actions that move your loops forward by stage.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              It turns questions like &quot;How do we improve Express?&quot; into concrete moves your team can actually make. It gives you a way to answer, &quot;What does this look like in marketing, sales, service, and ops?&quot; without guessing.
            </p>
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-brand-navy">Good playbooks:</h3>
              {[
                'Start from the model, not from a random list of tactics',
                'Stay small enough to run in weeks, not years',
                'Connect clearly to a stage and a loop',
                'Have an owner, a metric, and a debrief',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#028393] mt-1">✓</span>
                  <span className="font-body text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display text-lg font-semibold text-[#028393] mb-4">From Ideas to Moves</h3>
            <div className="space-y-4">
              {[
                { num: '1', text: 'Pick a stage that feels weak' },
                { num: '2', text: 'Choose one play to run' },
                { num: '3', text: 'Learn, adjust, repeat' },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#028393] text-white flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <span className="font-body text-text-secondary">{step.text}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-[#3D5A80] mt-6 italic">
              Without playbooks, the Loop Revenue System stays theoretical. With them, it becomes how your team works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowToUseSection() {
  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
            How To Use This Page
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            There are two easy ways to use this page. Either way, move slowly enough that your team can keep up, and fast enough that you actually feel momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#028393] text-white flex items-center justify-center text-xl mb-4">
              ↓
            </div>
            <h3 className="font-display text-xl font-semibold text-brand-navy mb-3">Start by Stage</h3>
            <p className="font-body text-text-secondary mb-4">
              Pick Express, Tailor, Amplify, or Evolve and see example plays for all four loops.
            </p>
            <p className="font-body text-sm text-[#3D5A80] italic">
              Good if you know your Tailor stage is weak across the board.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#f65625] text-white flex items-center justify-center text-xl mb-4">
              →
            </div>
            <h3 className="font-display text-xl font-semibold text-brand-navy mb-3">Start by Loop</h3>
            <p className="font-body text-text-secondary mb-4">
              Read each stage play for your world (e.g., Loop Marketing) and choose one or two plays to run first.
            </p>
            <p className="font-body text-sm text-[#3D5A80] italic">
              Good if you lead one department and want to improve it first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperimentsSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-6">
            Experiments And Iteration Inside Playbooks
          </h2>
          <p className="font-body text-text-secondary text-center mb-8">
            Every play on this page can be run as a small experiment. You don&apos;t have to commit forever up front.
          </p>

          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display font-semibold text-brand-navy mb-4 text-center">Experiment Card Template</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'Hypothesis', desc: 'What you believe' },
                { label: 'Stage', desc: 'Express/Tailor/Amplify/Evolve' },
                { label: 'Loop', desc: 'Marketing/Sales/Service/Ops' },
                { label: 'Metric', desc: 'What should move' },
                { label: 'Timebox', desc: '4-8 weeks' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display font-semibold text-[#028393] text-sm">{item.label}</p>
                  <p className="font-body text-xs text-text-secondary mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="font-body text-text-secondary text-center mt-6">
            This way, the Loop Revenue System becomes a rhythm of smaller experiments, grounded in the same model, that help your whole business adjust and flourish over time.
          </p>
        </div>
      </div>
    </section>
  )
}

function AiHumansSection() {
  const aiHelps = [
    'Summarize calls, scan feedback, and draft Express briefs',
    'Generate segment-specific language and test variations in Tailor',
    'Repurpose content and orchestrate automation in Amplify',
    'Spot patterns in data during Evolve',
  ]

  const humansDecide = [
    'Choose which problems to focus on',
    'Set boundaries for personalization and automation',
    'Decide which plays to keep and which to stop',
    'Own the impact of changes on customers and teams',
  ]

  return (
    <section className="section-padding bg-[#E0FBFC]">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-4">
            Where AI Fits And Where Humans Lead
          </h2>
          <p className="font-body text-text-secondary text-center mb-12">
            AI can make most of these plays faster and more comfortable to run.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#028393]/10 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#028393]">AI Can Accelerate</h3>
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
                <h3 className="font-display text-lg font-semibold text-[#3D5A80]">Humans Must Decide</h3>
              </div>
              <ul className="space-y-3">
                {humansDecide.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3D5A80] mt-1">★</span>
                    <span className="font-body text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/playbooks/ai-and-humans" className="font-body text-[#028393] hover:underline">
              Explore AI & Humans integration →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ToolsConnectionSection() {
  return (
    <section className="section-padding bg-white border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-brand-navy text-center mb-6">
            Connecting Playbooks To Your Tools
          </h2>
          <p className="font-body text-text-secondary text-center mb-12">
            The playbooks on this page are tool-agnostic on purpose. You can run them with any stack.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
              <h3 className="font-display text-lg font-semibold text-[#028393] mb-4">With HubSpot</h3>
              <p className="font-body text-sm text-text-secondary mb-4">
                Map plays to CRM objects, properties, lists, workflows, sequences, tickets, pipelines, reports, and dashboards.
              </p>
              <Link
                href="/playbooks/hubspot"
                className="inline-flex items-center gap-2 font-body text-sm text-[#028393] hover:underline"
              >
                HubSpot Implementation →
              </Link>
            </div>

            <div className="bg-[#E8EEF4] rounded-xl p-6 border border-[#3D5A80]/30">
              <h3 className="font-display text-lg font-semibold text-[#3D5A80] mb-4">Without HubSpot</h3>
              <p className="font-body text-sm text-text-secondary mb-4">
                Map to similar concepts in your CRM, marketing tools, service desk, and ops platform.
              </p>
              <Link
                href="/playbooks/no-hubspot"
                className="inline-flex items-center gap-2 font-body text-sm text-[#3D5A80] hover:underline"
              >
                No HubSpot Implementation →
              </Link>
            </div>
          </div>

          <p className="font-body text-text-secondary text-center mt-8 text-sm">
            Those pages don&apos;t add new strategy. They help you translate these plays into your actual systems.
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
            You now have a set of plays you can run across Express, Tailor, Amplify, and Evolve. Pick one of these paths.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-[#E0FBFC] rounded-xl p-6 border border-[#98C1D9]">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Understand Each Loop</h3>
            <div className="space-y-2 text-sm">
              <Link href="/loops" className="block font-body text-[#028393] hover:underline">Four Loops Overview →</Link>
              <Link href="/loops/marketing" className="block font-body text-[#028393] hover:underline">Loop Marketing →</Link>
              <Link href="/loops/sales" className="block font-body text-[#028393] hover:underline">Loop Sales →</Link>
              <Link href="/loops/service" className="block font-body text-[#028393] hover:underline">Loop Service →</Link>
              <Link href="/loops/ops" className="block font-body text-[#028393] hover:underline">Loop Ops →</Link>
            </div>
          </div>

          <div className="bg-[#FEF3E8] rounded-xl p-6 border border-[#faaa68]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Revisit The Stages</h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Tighten your understanding of Express, Tailor, Amplify, and Evolve.
            </p>
            <Link href="/overview/stages" className="font-body text-sm text-[#faaa68] hover:underline">
              The Four Stages →
            </Link>
          </div>

          <div className="bg-[#FEE8E1] rounded-xl p-6 border border-[#f65625]/30">
            <h3 className="font-display font-semibold text-brand-navy mb-3">Get Practical Tools</h3>
            <div className="space-y-2 text-sm">
              <Link href="/resources/templates-checklists" className="block font-body text-[#f65625] hover:underline">Templates & Checklists →</Link>
              <Link href="/resources/workshops-exercises" className="block font-body text-[#f65625] hover:underline">Workshops & Exercises →</Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-body text-[#3D5A80] font-medium">
            Don&apos;t wait for the perfect moment. Choose one stage, one loop, and one play. Run it. Learn. Then let the loop keep turning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function SystemPlaybooksPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  // Express plays
  const expressPlays = [
    {
      loop: 'Loop Marketing',
      loopColor: '#028393',
      title: 'Audience Clarity Sprint',
      steps: [
        'Choose one core audience you care about',
        'Read 10 win notes and 10 loss notes for that audience',
        'Review search queries, chat logs, and common ticket topics',
        'Write a one-page Express brief: Who are they? What problem do they have? What role do you play?',
        'Update one key asset with this clarity',
      ],
    },
    {
      loop: 'Loop Sales',
      loopColor: '#f65625',
      title: 'Good Fit Definition',
      steps: [
        'Sit down with experienced and newer reps',
        'Define in plain language what a good fit opportunity looks like',
        'Agree on entry and exit criteria for each sales stage',
        'List 5 discovery questions every rep should ask',
        'Write a one-page Express guide for sales',
      ],
    },
    {
      loop: 'Loop Service',
      loopColor: '#faaa68',
      title: '90-Day Success Map',
      steps: [
        'Ask: What does "success" look like 90 days after purchase?',
        'Document this for 2-3 key segments',
        'Map the journey from closed-won to that 90-day success moment',
        'Update onboarding emails, kickoff calls, or in-app guidance',
      ],
    },
    {
      loop: 'Loop Ops',
      loopColor: '#3D5A80',
      title: 'Lifecycle Sketch',
      steps: [
        'Bring one leader from marketing, sales, and service together',
        'Sketch the ideal lifecycle from "first seen" to "renewal/expansion"',
        'Name the stages and write one sentence for each',
        'List the minimum fields needed to track this lifecycle',
        'Push into your CRM as the backbone for lifecycle fields',
      ],
    },
  ]

  // Tailor plays
  const tailorPlays = [
    {
      loop: 'Loop Marketing',
      loopColor: '#028393',
      title: 'Segment Journey Audit',
      steps: [
        'Pick one high-value segment (industry or role)',
        'Audit one main journey (nurture sequence or content path)',
        'Ask: Does the language match how they talk? Are we answering their next question?',
        'Make two improvements: adjust language and change one automation rule',
      ],
    },
    {
      loop: 'Loop Sales',
      loopColor: '#f65625',
      title: 'Segment-Specific Prep',
      steps: [
        'Choose one segment where win rate should be higher',
        'Before each meeting, review account data, behavior, and usage',
        'Add 2 segment-specific questions to discovery template',
        'Add 1 segment-specific risk to discuss openly',
        'Add 1 segment-specific customer story',
      ],
    },
    {
      loop: 'Loop Service',
      loopColor: '#faaa68',
      title: 'Tailored Onboarding Add-On',
      steps: [
        'Identify customers who often struggle early',
        'Look at their first 30 days: tickets, drop-off points, feedback',
        'Create a tailored add-on: extra check-in call, short video, or targeted checklist',
        'Track whether this changes their early experience',
      ],
    },
    {
      loop: 'Loop Ops',
      loopColor: '#3D5A80',
      title: 'Friction Reduction',
      steps: [
        'Pick one process where people complain about too many clicks',
        'Follow a handful of records through that process',
        'Ask: Do we have needed fields? Are we asking for data twice? Can we pre-fill?',
        'Make one configuration change that reduces friction',
      ],
    },
  ]

  // Amplify plays
  const amplifyPlays = [
    {
      loop: 'Loop Marketing',
      loopColor: '#028393',
      title: 'Content Atomization',
      steps: [
        'Find one asset that consistently performs well',
        'Turn it into: a short email sequence, social posts, and a sales guide',
        'Don\'t change the core idea; change the format and channels',
      ],
    },
    {
      loop: 'Loop Sales',
      loopColor: '#f65625',
      title: 'Top Rep Motion Capture',
      steps: [
        'Identify a rep, message, or motion that outperforms the team',
        'Record a call, copy the exact email language, document the steps',
        'Build a simple playbook in your CRM',
        'Create one core sequence reflecting this motion',
        'Run a short training session where the rep explains the why',
      ],
    },
    {
      loop: 'Loop Service',
      loopColor: '#faaa68',
      title: 'FAQ to Knowledge Base',
      steps: [
        'Find a question your team answers 5+ times a week',
        'Write a clear article with screenshots or short video',
        'Add to knowledge base and tag properly',
        'Update internal macros to link to this resource',
        'Track usage and related ticket volume',
      ],
    },
    {
      loop: 'Loop Ops',
      loopColor: '#3D5A80',
      title: 'Process Automation Template',
      steps: [
        'Identify one boring, predictable, rule-based manual process',
        'Map the steps and check that rules are clear and stable',
        'Automate 1-2 steps: assignment, notifications, or field updates',
        'Communicate what changed and how to get help',
        'Use as template for similar patterns',
      ],
    },
  ]

  // Evolve plays
  const evolvePlays = [
    {
      loop: 'Loop Marketing',
      loopColor: '#028393',
      title: 'Campaign Retro',
      steps: [
        'Choose one campaign or nurture sequence you\'ve been running',
        'Ask: What stage/loop was this for? What metrics should move? What actually changed?',
        'Bring someone from sales and service into the review',
        'Decide: keep as-is, adjust and run again, or retire',
        'Capture a short narrative of what you learned',
      ],
    },
    {
      loop: 'Loop Sales',
      loopColor: '#f65625',
      title: 'Win/Loss Pattern Analysis',
      steps: [
        'Look at last month/quarter of deals for a specific segment',
        'Group into wins, losses, and no-decisions',
        'Write down common reasons in each bucket',
        'Update your reason picklist to match reality',
        'Use in next leadership meeting and sales training',
      ],
    },
    {
      loop: 'Loop Service',
      loopColor: '#faaa68',
      title: 'Support Pattern Review',
      steps: [
        'Take the last 60-90 days of data',
        'Look at: top ticket categories, response times, retention for heavy support users',
        'Identify one pattern that clearly harms customer outcomes',
        'Propose a small change with product, marketing, or sales',
        'Review impact after another cycle',
      ],
    },
    {
      loop: 'Loop Ops',
      loopColor: '#3D5A80',
      title: 'Change Log Review',
      steps: [
        'Review your system change log for the last quarter',
        'List changes with clear positive impact on loop metrics',
        'List changes that created confusion or didn\'t land',
        'Ask: What do best/worst changes have in common?',
        'Refine your change process: stronger requirements, more testing, better communication',
      ],
    },
  ]

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'System Playbooks',
            description: 'Turn the Loop Revenue System into concrete next steps with practical plays for each stage.',
            url: `${siteUrl}/playbooks/system`,
          }),
        ]}
      />
      <HeroSection />
      <WhatAndWhySection />
      <HowToUseSection />

      {/* Express Playbook */}
      <StageSection
        stage="Express"
        stageKey="express"
        tagline="Get Clear Before You Scale"
        intro="Express is about clarity. Before you push harder on personalization, automation, or optimization, you need to know what you stand for, who you are serving, and how your process works. Treat Express as a 'clarity sprint' for each loop."
        plays={expressPlays}
      />

      {/* Tailor Playbook */}
      <StageSection
        stage="Tailor"
        stageKey="tailor"
        tagline="Make It Personal And Contextual"
        intro="Tailor is about relevance. Once you're clear on Express, you can adjust your messages, flows, and systems to match what real people need. The goal is not to use every data point; the goal is to be more helpful."
        plays={tailorPlays}
      />

      {/* Amplify Playbook */}
      <StageSection
        stage="Amplify"
        stageKey="amplify"
        tagline="Scale What Works Without Burning Out"
        intro="Amplify is where you take what's working in one corner and make it easier for more people to use. You don't start Amplify with random tactics. You start with something that has already shown promise in Express and Tailor."
        plays={amplifyPlays}
      />

      {/* Evolve Playbook */}
      <StageSection
        stage="Evolve"
        stageKey="evolve"
        tagline="Learn On Purpose, Not By Accident"
        intro="Evolve turns motion into improvement. This is where you look back at the plays you ran in Express, Tailor, and Amplify and decide what to keep, what to change, and what to drop."
        plays={evolvePlays}
      />

      <ExperimentsSection />
      <AiHumansSection />
      <ToolsConnectionSection />
      <NextStepsSection />
    </>
  )
}
