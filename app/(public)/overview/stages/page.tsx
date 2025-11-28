import Link from 'next/link'
import { JsonLd, generateWebPageSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils/cn'

export const metadata: Metadata = {
  title: 'The Four Stages: Express, Tailor, Amplify, Evolve | Loop Revenue System',
  description: 'One simple pattern for every loop in your revenue engine. Learn how Express, Tailor, Amplify, and Evolve create a common language for marketing, sales, service, and ops.',
  openGraph: {
    title: 'The Four Stages: Express, Tailor, Amplify, Evolve',
    description: 'One simple pattern for every loop in your revenue engine. A common language for the work marketing, sales, service, and ops all do.',
    type: 'article',
  },
}

// Stage Diagram - Horizontal flow with loop back
function StagesDiagram() {
  return (
    <svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[600px] mx-auto">
      {/* Background track */}
      <path d="M60 70 L440 70" stroke="#E0FBFC" strokeWidth="12" fill="none" strokeLinecap="round" />

      {/* Loop back arrow at top */}
      <path
        d="M440 70 Q 470 70 470 45 Q 470 20 250 20 Q 30 20 30 45 Q 30 70 60 70"
        stroke="#98C1D9"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
      />
      <polygon points="55,65 65,70 55,75" fill="#98C1D9"/>

      {/* Flow arrows */}
      <path d="M115 70 L155 70" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <path d="M225 70 L265 70" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <path d="M335 70 L375 70" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8"/>
        </marker>
      </defs>

      {/* Express */}
      <circle cx="80" cy="70" r="35" fill="rgba(2,131,147,0.15)" stroke="#028393" strokeWidth="3"/>
      <text x="80" y="66" textAnchor="middle" fill="#028393" fontSize="11" fontWeight="600">Express</text>
      <text x="80" y="80" textAnchor="middle" fill="#028393" fontSize="8">Define</text>

      {/* Tailor */}
      <circle cx="190" cy="70" r="35" fill="rgba(250,170,104,0.15)" stroke="#faaa68" strokeWidth="3"/>
      <text x="190" y="66" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="600">Tailor</text>
      <text x="190" y="80" textAnchor="middle" fill="#d97706" fontSize="8">Personalize</text>

      {/* Amplify */}
      <circle cx="300" cy="70" r="35" fill="rgba(246,86,37,0.15)" stroke="#f65625" strokeWidth="3"/>
      <text x="300" y="66" textAnchor="middle" fill="#f65625" fontSize="11" fontWeight="600">Amplify</text>
      <text x="300" y="80" textAnchor="middle" fill="#f65625" fontSize="8">Scale</text>

      {/* Evolve */}
      <circle cx="410" cy="70" r="35" fill="rgba(61,90,128,0.15)" stroke="#3D5A80" strokeWidth="3"/>
      <text x="410" y="66" textAnchor="middle" fill="#3D5A80" fontSize="11" fontWeight="600">Evolve</text>
      <text x="410" y="80" textAnchor="middle" fill="#3D5A80" fontSize="8">Learn</text>
    </svg>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-b from-brand-cyan/30 to-bg border-b border-border-light">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-body text-sm font-semibold text-brand-teal uppercase tracking-wider mb-4">
            The Foundation
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-navy mb-6">
            The Four Stages of the Loop Revenue System
          </h1>
          <p className="font-display text-xl italic text-text-secondary">
            One simple pattern for every loop in your revenue engine.
          </p>
        </div>

        <div className="mb-12">
          <StagesDiagram />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="font-body text-base text-text-secondary leading-loose space-y-4">
            <p>
              Every part of your go-to-market engine faces the same questions: Who are we for? How do we show up? How do we make this personal? How do we scale what works? How do we learn from what happened?
            </p>
            <p>
              The Loop Revenue System answers those questions with four stages that repeat inside every loop. <strong className="text-text-primary">Express</strong>, <strong className="text-text-primary">Tailor</strong>, <strong className="text-text-primary">Amplify</strong>, and <strong className="text-text-primary">Evolve</strong> give you a common language for the work marketing, sales, service, and ops all do&mdash;even when their day-to-day tasks look very different.
            </p>
            <p>
              This page is your guide to those stages. Once you understand them, you can look at any part of your revenue engine and say, &ldquo;Here is what Express looks like for us. Here is where Tailor breaks. Here is how Amplify helps. Here is how we Evolve.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Why Stages Matter Section
function WhyStagesMatterSection() {
  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-navy mb-6">
              Why Stages Matter More Than Departments
            </h2>
            <div className="font-body text-base text-text-secondary leading-loose space-y-4">
              <p>
                Most companies organize around departments. Marketing over here, sales over there, service at the end, ops in the background. Each team uses its own playbook, tools, and vocabulary.
              </p>
              <p>
                The result is familiar. Work feels busy, but not always aligned. Handoffs between teams feel clunky. It is hard to tell if a problem is a marketing issue, a sales issue, a service issue, or a tool issue.
              </p>
              <p>
                <strong className="text-text-primary">Stages give you a different way to see the work.</strong>
              </p>
              <p>
                Express, Tailor, Amplify, and Evolve sit above the org chart. They describe what needs to happen for revenue to grow in a healthy way, no matter who does it.
              </p>
            </div>
          </div>

          <div className="bg-bg-alt rounded-lg p-8 border-t-4 border-brand-teal">
            <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
              When you look at your business by stage, you can ask cleaner questions:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></span>
                <span className="font-body text-text-secondary">Are we clear enough in <strong className="text-brand-teal">Express</strong>?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-peach mt-2 flex-shrink-0"></span>
                <span className="font-body text-text-secondary">Are we truly <strong className="text-brand-peach">tailoring</strong> or just segmenting by job title?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                <span className="font-body text-text-secondary">Are we <strong className="text-brand-orange">amplifying</strong> the right things, or just adding more noise?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                <span className="font-body text-text-secondary">Are we <strong className="text-brand-blue">evolving</strong>, or repeating the same motions and hoping for different results?</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border-light">
              <p className="font-body text-sm text-text-muted italic">
                Those questions guide better decisions than &ldquo;Should this live in marketing or sales?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stages Overview Cards
function StagesOverviewSection() {
  const stages = [
    {
      name: 'Express',
      icon: '✦',
      color: 'brand-teal',
      borderColor: 'border-brand-teal',
      bgColor: 'bg-brand-teal/10',
      description: 'Express is where you define how you show up in the market and with your customers. You decide who you serve, what problems you solve, how you speak, and what your process looks like.',
    },
    {
      name: 'Tailor',
      icon: '◈',
      color: 'brand-peach',
      borderColor: 'border-brand-peach',
      bgColor: 'bg-brand-peach/10',
      description: 'Tailor is where you take that clear expression and adjust it for real people, accounts, and situations. You use what you know to make every touch feel relevant, timely, and human.',
    },
    {
      name: 'Amplify',
      icon: '◉',
      color: 'brand-orange',
      borderColor: 'border-brand-orange',
      bgColor: 'bg-brand-orange/10',
      description: 'Amplify is where you scale what works. You repurpose strong ideas, share winning plays, and use automation and channels to extend your reach without losing your voice.',
    },
    {
      name: 'Evolve',
      icon: '↻',
      color: 'brand-blue',
      borderColor: 'border-brand-blue',
      bgColor: 'bg-brand-blue/10',
      description: 'Evolve is where you learn and adjust. You read the results, listen to feedback, and make changes so the next cycle of the loop is more aligned and more effective.',
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/20 border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-4">
            The Four Stages at a Glance
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Each stage matters on its own. Together, they form a simple loop you can use to diagnose and improve any part of your revenue system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className={cn(
                'bg-surface rounded-lg p-6 border-t-4 shadow-sm',
                stage.borderColor
              )}
            >
              <div className={cn('text-3xl mb-4', `text-${stage.color}`)}>
                {stage.icon}
              </div>
              <h3 className={cn('font-display text-xl font-semibold mb-3', `text-${stage.color}`)}>
                {stage.name}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Express Across Loops Section
function ExpressSection() {
  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-brand-teal/20 flex items-center justify-center">
            <span className="text-brand-teal text-2xl">✦</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-teal">
              Express
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <h3 className="font-display text-xl font-medium text-text-primary mb-4">
            What Express Really Does
          </h3>
          <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
            Express gives shape and direction to your work. It is where you answer key questions about identity, focus, and process before you try to personalize, automate, or optimize anything.
          </p>
          <p className="font-body text-base text-text-secondary leading-relaxed">
            <strong className="text-text-primary">If Express is fuzzy, everything that follows feels noisy.</strong> Teams pull in different directions because they hold different pictures in their heads of what &ldquo;good&rdquo; looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Marketing */}
          <div className="rounded-lg p-6 border-l-4 border-loop-marketing bg-bg-alt">
            <h4 className="font-display text-lg font-semibold text-loop-marketing mb-4">
              Express in Loop Marketing
            </h4>
            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A clear point of view about your market and the problems you help solve</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Defined ideal customer profiles, not just generic industries</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Core messages, storylines, and content pillars you return to on purpose</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A simple map of your main campaigns and offers</span>
              </li>
            </ul>
            <p className="font-body text-xs text-text-muted italic pt-3 border-t border-border-light">
              When strong: Content and campaigns feel like they come from one confident voice.
            </p>
          </div>

          {/* Sales */}
          <div className="rounded-lg p-6 border-l-4 border-loop-sales bg-bg-alt">
            <h4 className="font-display text-lg font-semibold text-loop-sales mb-4">
              Express in Loop Sales
            </h4>
            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A clearly defined sales process with meaningful stages</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Shared definitions of a good-fit opportunity</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Documented talk tracks, discovery questions, and key stories</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Alignment on what a &ldquo;win&rdquo; means beyond just a signed contract</span>
              </li>
            </ul>
            <p className="font-body text-xs text-text-muted italic pt-3 border-t border-border-light">
              When strong: Deals move smoothly and reps know how to show up in conversations.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-lg p-6 border-l-4 border-loop-service bg-bg-alt">
            <h4 className="font-display text-lg font-semibold text-loop-service mb-4">
              Express in Loop Service
            </h4>
            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A clear service philosophy for how you support and educate customers</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Mapped post-sale journeys for onboarding, adoption, and expansion</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A simple explanation of &ldquo;what good looks like&rdquo; for customer outcomes</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Principles for how your team responds when things go wrong</span>
              </li>
            </ul>
            <p className="font-body text-xs text-text-muted italic pt-3 border-t border-border-light">
              When strong: Customers feel like they know what to expect after they buy.
            </p>
          </div>

          {/* Ops */}
          <div className="rounded-lg p-6 border-l-4 border-loop-ops bg-bg-alt">
            <h4 className="font-display text-lg font-semibold text-loop-ops mb-4">
              Express in Loop Ops
            </h4>
            <ul className="space-y-2 mb-4">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Agreed lifecycle stages and status definitions across the business</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A documented data model for contacts, companies, deals, and tickets</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>Rules for what gets tracked, who owns it, and why</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-teal mt-0.5">→</span>
                <span>A vision for how tools and automation should support the other loops</span>
              </li>
            </ul>
            <p className="font-body text-xs text-text-muted italic pt-3 border-t border-border-light">
              When strong: Everyone uses the CRM in a similar way and dashboards tell a coherent story.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tailor Across Loops Section
function TailorSection() {
  return (
    <section className="section-padding bg-brand-cyan/20 border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-brand-peach/20 flex items-center justify-center">
            <span className="text-brand-peach text-2xl">◈</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-peach">
              Tailor
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-xl font-medium text-text-primary mb-4">
              What Tailor Really Does
            </h3>
            <div className="font-body text-base text-text-secondary leading-relaxed space-y-4">
              <p>
                Tailor turns a clear plan into a human experience.
              </p>
              <p>
                It uses data, context, and empathy to answer questions like: <strong className="text-text-primary">&ldquo;What does this person need right now?&rdquo;</strong> and <strong className="text-text-primary">&ldquo;What would be most helpful in this moment?&rdquo;</strong>
              </p>
              <p>
                Tailor is where personalization lives, but personalization is not the whole story. The goal is not to use as many tokens as possible. The goal is to make sure the person on the other side feels understood and supported.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-surface rounded-lg p-5 border border-border-light">
              <h4 className="font-display text-base font-semibold text-loop-marketing mb-3">Tailor in Loop Marketing</h4>
              <ul className="space-y-1 mb-3">
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Segmenting by real behavior and needs, not just job title and industry</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Adjusting content, offers, and timing based on where someone is in their journey</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Speaking in the language your customers actually use, not internal jargon</span>
                </li>
              </ul>
              <p className="font-body text-xs text-brand-peach italic">When strong: Content feels like it was written for someone specific, even at scale.</p>
            </div>

            <div className="bg-surface rounded-lg p-5 border border-border-light">
              <h4 className="font-display text-base font-semibold text-loop-sales mb-3">Tailor in Loop Sales</h4>
              <ul className="space-y-1 mb-3">
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Researching accounts and contacts instead of running the same script every time</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Shaping questions, stories, and recommendations to the person and context</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Documenting what you learn so the next interaction starts in the right place</span>
                </li>
              </ul>
              <p className="font-body text-xs text-brand-peach italic">When strong: Buyers feel listened to and guided, not pitched at.</p>
            </div>

            <div className="bg-surface rounded-lg p-5 border border-border-light">
              <h4 className="font-display text-base font-semibold text-loop-service mb-3">Tailor in Loop Service</h4>
              <ul className="space-y-1 mb-3">
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Responding with full context from the customer&apos;s history and setup</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Proactively reaching out when you see early signs of friction or risk</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Adjusting onboarding and education based on how each customer learns</span>
                </li>
              </ul>
              <p className="font-body text-xs text-brand-peach italic">When strong: Customers feel known. They do not have to repeat their story.</p>
            </div>

            <div className="bg-surface rounded-lg p-5 border border-border-light">
              <h4 className="font-display text-base font-semibold text-loop-ops mb-3">Tailor in Loop Ops</h4>
              <ul className="space-y-1 mb-3">
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Configuring fields, pipelines, and routing rules that match your actual process</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Creating views, reports, and automations tailored to each team&apos;s responsibilities</span>
                </li>
                <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-brand-peach mt-0.5">•</span>
                  <span>Respecting consent and privacy while still enabling effective personalization</span>
                </li>
              </ul>
              <p className="font-body text-xs text-brand-peach italic">When strong: The system supports nuance instead of forcing every situation into the same shape.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Amplify Across Loops Section
function AmplifySection() {
  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-brand-orange/20 flex items-center justify-center">
            <span className="text-brand-orange text-2xl">◉</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-orange">
              Amplify
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="max-w-3xl mb-10">
          <h3 className="font-display text-xl font-medium text-text-primary mb-4">
            What Amplify Really Does
          </h3>
          <p className="font-body text-base text-text-secondary leading-relaxed">
            Amplify takes what is working and helps it reach further. <strong className="text-text-primary">The goal is not more noise. It is more of the right signal</strong>, shared in more places, with more consistency. Amplify turns individual wins into shared assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-bg-alt rounded-lg p-5">
            <h4 className="font-display text-base font-semibold text-brand-orange mb-4">Marketing</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Turn one strong article or video into many smaller assets</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Share high-performing ideas across email, search, social, and events</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Use smart automation to keep helpful content in circulation</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-alt rounded-lg p-5">
            <h4 className="font-display text-base font-semibold text-brand-orange mb-4">Sales</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Capture winning email templates, call flows, and talk tracks</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Share them in playbooks and sequences so more reps can use them</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Create simple decks and one-pagers that land with buyers</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-alt rounded-lg p-5">
            <h4 className="font-display text-base font-semibold text-brand-orange mb-4">Service</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Turn repeated questions into knowledge base articles and videos</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Use in-app guidance or email to share solutions before issues appear</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Build communities or forums where customers help each other</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-alt rounded-lg p-5">
            <h4 className="font-display text-base font-semibold text-brand-orange mb-4">Ops</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Use automation and integrations to cut manual work</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Standardize effective processes so teams do not reinvent the wheel</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">↗</span>
                <span>Scale reporting so leaders and front-line teams see the same truths</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="callout callout-sales max-w-3xl mx-auto">
          <p className="callout-text">
            When Amplify is strong, you do not depend on a few all-star reps. The whole team gains from what works. Your best ideas do not die as single posts or campaigns.
          </p>
        </div>
      </div>
    </section>
  )
}

// Evolve Across Loops Section
function EvolveSection() {
  return (
    <section className="section-padding bg-brand-cyan/20 border-b border-border-light">
      <div className="container-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-brand-blue/20 flex items-center justify-center">
            <span className="text-brand-blue text-2xl">↻</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium text-brand-blue">
              Evolve
            </h2>
            <p className="font-body text-text-secondary">Across Marketing, Sales, Service, and Ops</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h3 className="font-display text-xl font-medium text-text-primary mb-4">
              What Evolve Really Does
            </h3>
            <div className="font-body text-base text-text-secondary leading-relaxed space-y-4">
              <p>
                Evolve is where the system actually becomes a loop.
              </p>
              <p>
                It is the stage where you stop and ask, <strong className="text-text-primary">&ldquo;What did we learn?&rdquo;</strong> and <strong className="text-text-primary">&ldquo;What will we change next time?&rdquo;</strong>
              </p>
              <p>
                Without Evolve, you stay busy but stuck. With Evolve, every cycle teaches you something.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-8 border border-brand-blue/30">
            <blockquote className="font-display text-xl text-brand-navy leading-relaxed">
              &ldquo;When your revenue engine Evolves well, it gets cleaner and more reliable over time.&rdquo;
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-lg p-5 border border-border-light">
            <h4 className="font-display text-base font-semibold text-brand-blue mb-4">Marketing</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Review channel and content performance regularly</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Test new ideas in small experiments, then roll out winners</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Connect marketing metrics to real revenue and retention</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-lg p-5 border border-border-light">
            <h4 className="font-display text-base font-semibold text-brand-blue mb-4">Sales</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Study win and loss patterns and share the findings</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Adjust qualification, discovery, and proposals based on what you learn</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Update training and coaching with fresh examples</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-lg p-5 border border-border-light">
            <h4 className="font-display text-base font-semibold text-brand-blue mb-4">Service</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Track satisfaction, retention, and reasons for churn</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Use that insight to improve onboarding, education, and the product</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Close the loop with marketing and sales so expectations match reality</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-lg p-5 border border-border-light">
            <h4 className="font-display text-base font-semibold text-brand-blue mb-4">Ops</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Watch system-level metrics like conversion rates, cycle time, and data quality</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Spot bottlenecks, friction points, and breakage early</span>
              </li>
              <li className="font-body text-sm text-text-secondary flex items-start gap-2">
                <span className="text-brand-blue mt-0.5">↺</span>
                <span>Prioritize and ship changes to process, tools, and data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// AI and Humans Section
function AiHumansSection() {
  const stages = [
    {
      name: 'Express',
      color: 'brand-teal',
      bgColor: 'bg-brand-teal/10',
      ai: 'Summarize research, customer feedback, and call transcripts',
      human: 'Decide what that information means and what you stand for',
    },
    {
      name: 'Tailor',
      color: 'brand-peach',
      bgColor: 'bg-brand-peach/10',
      ai: 'Suggest segments, recommend content, and draft personalized messages',
      human: 'Set the rules, approve sensitive communication, and protect privacy',
    },
    {
      name: 'Amplify',
      color: 'brand-orange',
      bgColor: 'bg-brand-orange/10',
      ai: 'Repurpose content, manage some distribution, and keep automations running',
      human: 'Choose what deserves amplification and watch for overload',
    },
    {
      name: 'Evolve',
      color: 'brand-blue',
      bgColor: 'bg-brand-blue/10',
      ai: 'Scan large data sets, flag trends, and surface anomalies',
      human: 'Decide which patterns matter and what changes to make',
    },
  ]

  return (
    <section className="section-padding bg-surface border-b border-border-light">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-4">
            AI and Humans at Each Stage
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            AI does not replace the stages. It supports them. Use AI where it adds speed and reach. Keep humans responsible for direction, judgment, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div key={stage.name} className="bg-bg-alt rounded-lg overflow-hidden border border-border-light">
              <div className={cn('px-4 py-3', stage.bgColor)}>
                <h3 className={cn('font-display text-lg font-semibold', `text-${stage.color}`)}>
                  {stage.name}
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal text-xs font-bold">AI</span>
                    <span className="font-body text-xs font-semibold text-text-muted uppercase">AI can help</span>
                  </div>
                  <p className="font-body text-sm text-text-secondary">{stage.ai}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-brand-navy/20 flex items-center justify-center text-brand-navy text-xs font-bold">H</span>
                    <span className="font-body text-xs font-semibold text-text-muted uppercase">Humans should lead</span>
                  </div>
                  <p className="font-body text-sm text-text-secondary">{stage.human}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Health Check Section
function HealthCheckSection() {
  const checks = [
    {
      stage: 'Express',
      color: 'brand-teal',
      borderColor: 'border-brand-teal',
      question: 'Can everyone explain who we serve, what we promise, and how we work in a simple way?',
    },
    {
      stage: 'Tailor',
      color: 'brand-peach',
      borderColor: 'border-brand-peach',
      question: 'Do our messages and actions feel specific to real people, or could they go to anyone?',
    },
    {
      stage: 'Amplify',
      color: 'brand-orange',
      borderColor: 'border-brand-orange',
      question: 'Do we reuse and share what works, or do good ideas die in one channel or with one person?',
    },
    {
      stage: 'Evolve',
      color: 'brand-blue',
      borderColor: 'border-brand-blue',
      question: 'Do we regularly look at results, talk about what they mean, and change our approach?',
    },
  ]

  return (
    <section className="section-padding bg-brand-cyan/20 border-b border-border-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-medium text-brand-navy mb-4">
            A Simple Stage Health Check
          </h2>
          <p className="font-body text-lg text-text-secondary">
            You do not need a complex scorecard to see where your stages need attention. A few honest questions go a long way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {checks.map((check) => (
            <div
              key={check.stage}
              className={cn('bg-surface rounded-lg p-6 border-l-4', check.borderColor)}
            >
              <h3 className={cn('font-display text-lg font-semibold mb-3', `text-${check.color}`)}>
                For {check.stage}, ask:
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                {check.question}
              </p>
            </div>
          ))}
        </div>

        <div className="callout callout-service max-w-3xl mx-auto">
          <p className="callout-text">
            If you answer &ldquo;not really&rdquo; to any of those, that is your stage to focus on first. You do not have to fix everything at once. Improving one weak stage often unlocks progress across the others.
          </p>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CtaSection() {
  return (
    <section className="section-padding-lg bg-brand-navy text-white">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
          How to Use the Stages in Your Own World
        </h2>
        <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-4">
          Now that you know the four stages, you can look at any part of your revenue engine and see it with fresh eyes. Pick one loop&mdash;like marketing or sales&mdash;and walk through the stages:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full bg-brand-teal/30 text-brand-cyan text-sm font-medium">How clear is our Express?</span>
          <span className="px-3 py-1 rounded-full bg-brand-peach/30 text-brand-peach text-sm font-medium">How human is our Tailor?</span>
          <span className="px-3 py-1 rounded-full bg-brand-orange/30 text-brand-orange text-sm font-medium">How intentional is our Amplify?</span>
          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">How honest is our Evolve?</span>
        </div>
        <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-10">
          Then choose one small improvement to make in the next month.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              See Loops in Practice
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Explore how each stage looks inside each loop.
            </p>
            <Link href="/loops" className="btn bg-brand-teal text-white border-brand-teal hover:bg-brand-teal/90 w-full justify-center text-sm">
              The Four Loops
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              Get Ready-Made Playbooks
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Checklists and workflows you can apply by stage.
            </p>
            <Link href="/playbooks/system" className="btn btn-secondary w-full justify-center text-sm">
              System Playbooks
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-display text-lg font-medium text-brand-navy mb-2">
              Find Your Path
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Guidance based on your specific role.
            </p>
            <Link href="/roles/start-here" className="btn bg-brand-orange text-white border-brand-orange hover:bg-brand-orange/90 w-full justify-center text-sm">
              Start Here by Role
            </Link>
          </div>
        </div>

        <p className="font-body text-white/50 mt-10 text-sm italic">
          Use the stages as a shared language. Let the loops spin. Watch what you learn each time they come around again.
        </p>
      </div>
    </section>
  )
}

export default function StagesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateWebPageSchema({
            title: 'The Four Stages: Express, Tailor, Amplify, Evolve',
            description: 'One simple pattern for every loop in your revenue engine. A common language for marketing, sales, service, and ops.',
            url: `${siteUrl}/overview/stages`,
          }),
        ]}
      />
      <HeroSection />
      <WhyStagesMatterSection />
      <StagesOverviewSection />
      <ExpressSection />
      <TailorSection />
      <AmplifySection />
      <EvolveSection />
      <AiHumansSection />
      <HealthCheckSection />
      <CtaSection />
    </>
  )
}
