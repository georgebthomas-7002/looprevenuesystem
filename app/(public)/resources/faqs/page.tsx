import { Metadata } from 'next'
import Link from 'next/link'
import { FAQItem, FAQSection, FAQLink } from './components'

export const metadata: Metadata = {
  title: 'FAQs | Loop Revenue System',
  description: 'Frequently asked questions about the Loop Revenue System. Learn about loops, stages, implementation, data governance, AI, roles, and getting started.',
  openGraph: {
    title: 'FAQs | Loop Revenue System',
    description: 'Frequently asked questions about the Loop Revenue System. Learn about loops, stages, implementation, data governance, AI, roles, and getting started.',
  },
}

// Quick Link Component
function QuickLink({ href, label, color }: { href: string; label: string; color: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm font-medium hover:underline transition-colors"
      style={{ color }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </a>
  )
}

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#E0FBFC] via-white to-[#98C1D9]/20">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#3D5A80] uppercase tracking-wider mb-4">
                Resources
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                FAQs
              </h1>
              <p className="text-xl text-[#3D5A80] mb-6">
                Questions about the Loop Revenue System.
              </p>
              <p className="text-text-secondary mb-4">
                You are not the only one wondering how this all fits together.
                This page collects the questions leaders, RevOps, and go-to-market
                teams usually ask when they first meet the Loop Revenue System.
              </p>
              <p className="text-text-secondary">
                The answers are short on purpose. When you want more depth,
                follow the links to dedicated pages.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Q&A Loop Visual */}
              <div className="relative w-full max-w-xs">
                <svg viewBox="0 0 300 300" className="w-full h-auto">
                  {/* Outer ring */}
                  <circle cx="150" cy="150" r="120" fill="none" stroke="#E0FBFC" strokeWidth="30" />

                  {/* Stage colors on ring */}
                  <path d="M 150 30 A 120 120 0 0 1 270 150" fill="none" stroke="#028393" strokeWidth="6" />
                  <path d="M 270 150 A 120 120 0 0 1 150 270" fill="none" stroke="#faaa68" strokeWidth="6" />
                  <path d="M 150 270 A 120 120 0 0 1 30 150" fill="none" stroke="#f65625" strokeWidth="6" />
                  <path d="M 30 150 A 120 120 0 0 1 150 30" fill="none" stroke="#3D5A80" strokeWidth="6" />

                  {/* Center Q */}
                  <circle cx="150" cy="150" r="50" fill="#142d63" />
                  <text x="150" y="165" textAnchor="middle" className="fill-white text-[40px] font-bold">?</text>

                  {/* Question marks around */}
                  <text x="150" y="20" textAnchor="middle" className="fill-[#028393] text-[24px] font-bold">Q</text>
                  <text x="280" y="155" textAnchor="middle" className="fill-[#faaa68] text-[24px] font-bold">Q</text>
                  <text x="150" y="295" textAnchor="middle" className="fill-[#f65625] text-[24px] font-bold">Q</text>
                  <text x="20" y="155" textAnchor="middle" className="fill-[#3D5A80] text-[24px] font-bold">Q</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-display font-bold text-brand-navy mb-4">
              Jump to a Section
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <QuickLink href="#faqs-fundamentals" label="Fundamentals" color="#142d63" />
              <QuickLink href="#faqs-loops-stages" label="Loops & Stages" color="#028393" />
              <QuickLink href="#faqs-implementation" label="Implementation" color="#f65625" />
              <QuickLink href="#faqs-data-ai" label="Data, AI & Governance" color="#3D5A80" />
              <QuickLink href="#faqs-roles" label="Roles & Org Design" color="#faaa68" />
              <QuickLink href="#faqs-getting-started" label="Getting Started" color="#98C1D9" />
            </div>
          </div>
        </div>
      </section>

      {/* Fundamentals */}
      <FAQSection
        id="faqs-fundamentals"
        title="Fundamentals"
        description="The basics of what the Loop Revenue System is and why it exists."
        bgColor="white"
      >
        <FAQItem question="What is the Loop Revenue System in one sentence?">
          <p>
            The Loop Revenue System is a way to see your entire revenue engine as four connected
            loops (Marketing, Sales, Service, Ops), each running through the same four stages:
            Express, Tailor, Amplify, and Evolve.
          </p>
          <p>
            For a fuller narrative, see{' '}
            <FAQLink href="/overview/loop-revenue-system">What Is The Loop Revenue System</FAQLink>.
          </p>
        </FAQItem>

        <FAQItem question="Why 'loops' instead of funnels?">
          <p>
            Funnels describe a one-way path. People drop in at the top and, if everything works,
            a few come out the bottom as customers. That view misses two big truths.
          </p>
          <p>
            First, customers do not move in straight lines. They bounce between marketing, sales,
            and service multiple times. Second, most of your revenue comes from the ongoing
            relationship, not the first deal.
          </p>
          <p>
            Loops keep those realities in view. They help you see how each part of your business
            sends energy, data, and learning back into the system.
          </p>
        </FAQItem>

        <FAQItem question="Why four loops? Why not just 'RevOps' or 'the customer journey'?">
          <p>
            You could call it "the revenue engine" and leave it at that, but that is hard to work
            with. The four loops match how most organizations actually operate.
          </p>
          <p>
            Marketing, Sales, and Service already feel like their own worlds. Loop Ops exists
            because someone has to design and maintain the systems those worlds share. Four loops
            are just enough to see where problems live without turning every team into a separate
            universe.
          </p>
        </FAQItem>

        <FAQItem question="Is this a replacement for inbound or the flywheel?">
          <p>
            No. The Loop Revenue System sits beside inbound and the flywheel.
          </p>
          <p>
            Inbound helps you think about how you attract, engage, and delight people. The flywheel
            helps you picture how customer success feeds future growth.
          </p>
          <p>
            Loops add a more operational lens. They give you a way to ask, "How do we Express,
            Tailor, Amplify, and Evolve what we are doing in marketing, sales, service, and ops,
            quarter after quarter?"
          </p>
        </FAQItem>

        <FAQItem question="Is this a methodology we have to 'buy into' completely?">
          <p>
            No. You can use the parts that help and ignore the rest.
          </p>
          <p>
            Many teams start with one loop, one stage, and one play. For example, "Loop Service,
            Evolve stage, fix this one recurring issue." Once they see real progress, they expand.
          </p>
          <p>
            The Loop Revenue System is a language and a set of patterns. It is here to support
            your strategy, not replace it.
          </p>
        </FAQItem>
      </FAQSection>

      {/* Loops And Stages */}
      <FAQSection
        id="faqs-loops-stages"
        title="Loops And Stages"
        description="How the four loops and four stages work together."
        bgColor="light"
      >
        <FAQItem question="What are the four loops again?">
          <p>The four loops are:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Loop Marketing</li>
            <li>Loop Sales</li>
            <li>Loop Service</li>
            <li>Loop Ops</li>
          </ul>
          <p>
            Each loop represents a part of the revenue engine with its own motion, but all of them
            impact how customers feel and how the business grows.
          </p>
          <p>
            You can explore each loop here:{' '}
            <FAQLink href="/loops">Four Loops Overview</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="What do 'Express, Tailor, Amplify, Evolve' actually mean?">
          <p>
            <strong className="text-[#028393]">Express</strong> is how you clarify and communicate
            what you stand for and how you work.
          </p>
          <p>
            <strong className="text-[#faaa68]">Tailor</strong> is how you adapt your interactions
            so they feel contextual and human.
          </p>
          <p>
            <strong className="text-[#f65625]">Amplify</strong> is how you scale the good stuff
            without burning people out.
          </p>
          <p>
            <strong className="text-[#3D5A80]">Evolve</strong> is how you learn and improve the
            system on purpose, not by accident.
          </p>
          <p>
            That pattern repeats in every loop. You can read deeper examples here:{' '}
            <FAQLink href="/overview/stages">Stages - Express, Tailor, Amplify, Evolve</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="Do all four loops always go through all four stages?">
          <p>In theory, yes. In practice, some loops get stuck.</p>
          <p>You might see:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Marketing that keeps Amplifying without clear Express decisions.</li>
            <li>Sales that Tailors everything manually because Ops never Amplified the system.</li>
            <li>Service that tries to Evolve processes, but no one in leadership listens.</li>
            <li>Ops that Expresses and Tailors systems, but no one uses them fully.</li>
          </ul>
          <p>
            The model is not here to shame anyone. It is here to help you see where your loops
            are strong and where they need support.
          </p>
        </FAQItem>

        <FAQItem question="How do loops interact with each other?">
          <p>Every loop both feeds and depends on the others.</p>
          <p>
            Marketing influences who shows up and what they expect. Sales influences which promises
            get made. Service influences whether customers stay and what they tell others. Ops
            shapes how easy or hard it is for everyone to work together.
          </p>
          <p>
            When something breaks, it rarely belongs to a single loop. The model helps you see
            where the issue started, where it shows up, and where to intervene.
          </p>
        </FAQItem>
      </FAQSection>

      {/* Implementation */}
      <FAQSection
        id="faqs-implementation"
        title="Implementation"
        description="How to implement the Loop Revenue System with or without HubSpot."
        bgColor="white"
      >
        <FAQItem question="Do we need HubSpot to use the Loop Revenue System?">
          <p>No.</p>
          <p>
            You can use the Loop Revenue System with HubSpot, another CRM, a mix of tools, or
            even spreadsheets. The model is tool-agnostic on purpose.
          </p>
          <p>
            If you use HubSpot and want specific guidance, see:{' '}
            <FAQLink href="/playbooks/hubspot">HubSpot Implementation</FAQLink>
          </p>
          <p>
            If you do not, or you use a mixed stack, see:{' '}
            <FAQLink href="/playbooks/no-hubspot">Non-HubSpot Implementation</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="If we do use HubSpot, what changes first?">
          <p>Most teams start with foundations:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Clean up contacts and companies.</li>
            <li>Align lifecycle stages and deal or ticket pipelines.</li>
            <li>Standardize a small set of core properties.</li>
            <li>Build a few simple dashboards that match the loops.</li>
          </ul>
          <p>
            Then they run stage-based projects: Express and Tailor alignments, then Amplify and
            Evolve once things are stable.
          </p>
          <p>
            The HubSpot page walks through a basic roadmap:{' '}
            <FAQLink href="/playbooks/hubspot">HubSpot Implementation</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="If we use another CRM or a messy stack, is this realistic?">
          <p>Yes. In some ways it is even more helpful.</p>
          <p>You can use the loops and stages to decide:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Which tool is your main system of record.</li>
            <li>What lifecycles and fields matter most.</li>
            <li>Which automations are worth building first.</li>
          </ul>
          <p>
            You can then connect your work back to the model instead of jumping from tool to tool
            without a plan.
          </p>
          <p>
            That is what{' '}
            <FAQLink href="/playbooks/no-hubspot">Non-HubSpot Implementation</FAQLink>{' '}
            is designed to help with.
          </p>
        </FAQItem>

        <FAQItem question="Does this require a big 're-implementation' project?">
          <p>No.</p>
          <p>
            You can certainly run a larger project if that fits your context, but most teams see
            results faster when they run small plays:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>One loop.</li>
            <li>One stage.</li>
            <li>One flow.</li>
          </ul>
          <p>
            For example, "Loop Sales, Tailor stage, improve how we handle inbound demo requests
            in this segment."
          </p>
          <p>
            The <FAQLink href="/playbooks/system">System Playbooks</FAQLink> page is built around
            these kinds of small, repeatable moves.
          </p>
        </FAQItem>
      </FAQSection>

      {/* Data, AI, And Governance */}
      <FAQSection
        id="faqs-data-ai"
        title="Data, AI, And Governance"
        description="How data, AI, and governance fit into the Loop Revenue System."
        bgColor="light"
      >
        <FAQItem question="How much data do we need before this is useful?">
          <p>You do not need perfect data to start. You need enough to see meaningful patterns.</p>
          <p>Often, a simple mix of:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Basic CRM fields.</li>
            <li>A few reports by segment.</li>
            <li>A handful of call or ticket summaries.</li>
            <li>A sample of customer quotes.</li>
          </ul>
          <p>is enough to run early Express and Evolve work.</p>
          <p>
            The more intentional you get with data and governance, the more powerful the loops
            feel. For that, visit:{' '}
            <FAQLink href="/overview/data-metrics-governance">Data, Metrics, And Governance</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="How does AI fit into all of this?">
          <p>AI sits inside the loops, not above them.</p>
          <p>It helps with:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-[#028393]">Express:</strong> summarizing research and exploring language.</li>
            <li><strong className="text-[#faaa68]">Tailor:</strong> suggesting segments, angles, and drafts.</li>
            <li><strong className="text-[#f65625]">Amplify:</strong> repurposing and scaling what already works.</li>
            <li><strong className="text-[#3D5A80]">Evolve:</strong> spotting patterns and summarizing results.</li>
          </ul>
          <p>
            Humans still decide what to believe, what to ship, and what to change. The AI and
            humans page goes deeper:{' '}
            <FAQLink href="/playbooks/ai-and-humans">AI And Humans</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="How do we stay ethical with AI and data?">
          <p>You can start simple:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Only use data customers would expect you to use.</li>
            <li>Write down where you will and will not use AI.</li>
            <li>Keep humans in the loop for any decision that affects money, promises, or personal risk.</li>
            <li>Review AI-assisted work regularly instead of trusting it blindly.</li>
          </ul>
          <p>
            The governance page gives you patterns and checklists:{' '}
            <FAQLink href="/overview/data-metrics-governance">Data, Metrics, And Governance</FAQLink>
          </p>
          <p>
            And the AI page adds guardrails:{' '}
            <FAQLink href="/playbooks/ai-and-humans">AI And Humans</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="What should we actually measure?">
          <p>You can measure a lot. You should measure a little.</p>
          <p>
            At the leadership level, a short set of metrics for each loop is usually enough.
            For example:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-[#028393]">Marketing:</strong> meaningful engagement in target segments.</li>
            <li><strong className="text-[#f65625]">Sales:</strong> win rate and cycle length by segment.</li>
            <li><strong className="text-[#faaa68]">Service:</strong> time to value and retention by segment.</li>
            <li><strong className="text-[#3D5A80]">Ops:</strong> data quality and time to ship system changes.</li>
          </ul>
          <p>
            The exact list will depend on your business. The important part is that metrics line
            up with loops and stages, not just tool dashboards.
          </p>
          <p>
            You can explore examples on{' '}
            <FAQLink href="/overview/data-metrics-governance">Data, Metrics, And Governance</FAQLink>{' '}
            and <FAQLink href="/roles/leadership-revops">Leadership & RevOps</FAQLink>.
          </p>
        </FAQItem>
      </FAQSection>

      {/* Roles, Org Design, And Change */}
      <FAQSection
        id="faqs-roles"
        title="Roles, Org Design, And Change"
        description="How the Loop Revenue System fits into your organization."
        bgColor="white"
      >
        <FAQItem question="Do we need a formal RevOps team to use this?">
          <p>No.</p>
          <p>
            If you have a RevOps team, the model will likely make their lives easier. If you do
            not, the model can still help you act like you do.
          </p>
          <p>
            You can treat "Loop Ops" as a hat someone wears part-time. They will still think about
            data, systems, and handoffs using the same loops and stages.
          </p>
          <p>
            When you are ready,{' '}
            <FAQLink href="/roles/leadership-revops">Leadership & RevOps</FAQLink>{' '}
            shows how these roles work together.
          </p>
        </FAQItem>

        <FAQItem question="Who should own the Loop Revenue System inside our company?">
          <p>There is no single right answer, but a good pattern looks like this:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Leadership owns the direction and the decisions.</li>
            <li>RevOps (or an operations owner) owns the system design and measurements.</li>
            <li>Each loop has a leader who owns the work in that loop.</li>
          </ul>
          <p>
            If your team is small, one person might wear two or three of these hats. That is fine
            as long as you know which hat you are wearing when you make decisions.
          </p>
          <p>
            For role-based paths, visit:{' '}
            <FAQLink href="/roles/start-here">Start Here</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="Will this add more work for my team?">
          <p>At first, it might feel like a little more thinking.</p>
          <p>You will ask questions like:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>"Which loop is this?"</li>
            <li>"Which stage are we in?"</li>
            <li>"What are we actually trying to Express here?"</li>
          </ul>
          <p>
            Over time, that thinking reduces rework and confusion. You spend less time fixing
            misaligned projects and more time improving ones that matter.
          </p>
          <p>
            If your team is already stretched thin, start very small. One loop, one stage, one play.
          </p>
        </FAQItem>

        <FAQItem question="How do we avoid this becoming 'just another framework of the month'?">
          <p>Use it in your real meetings.</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Put loops and stages on the agenda.</li>
            <li>Use the language in leadership and RevOps conversations.</li>
            <li>Tie projects and experiments to specific loops and stages.</li>
          </ul>
          <p>
            The more you use the model to make decisions, the more it becomes your operating
            system instead of a poster.
          </p>
          <p>
            <FAQLink href="/roles/leadership-revops">Leadership & RevOps</FAQLink> and{' '}
            <FAQLink href="/playbooks/system">System Playbooks</FAQLink> give you practical
            ways to bake it into your cadence.
          </p>
        </FAQItem>
      </FAQSection>

      {/* Getting Started */}
      <FAQSection
        id="faqs-getting-started"
        title="Getting Started"
        description="How to begin using the Loop Revenue System."
        bgColor="light"
      >
        <FAQItem question="Is this too advanced for a small team?">
          <p>No.</p>
          <p>
            If you wear many hats, the Loop Revenue System can actually make your life easier.
            It gives you a way to decide what not to do.
          </p>
          <p>
            You can pick one loop, one stage, and one simple play that fits your current tools
            and time.
          </p>
          <p>
            For small team guidance, start here:{' '}
            <FAQLink href="/roles/start-here">Start Here</FAQLink> and look for the
            "I Wear Many Hats" path.
          </p>
        </FAQItem>

        <FAQItem question="Where should we start if we are a larger, established company?">
          <p>Most mature teams begin in one of two places:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Leadership and RevOps align on loops, stages, and metrics.</li>
            <li>One department runs an experiment in a single loop and stage.</li>
          </ul>
          <p>You do not have to roll this out to everyone at once. Prove value in one area, then expand.</p>
          <p>
            For a leadership view, use:{' '}
            <FAQLink href="/roles/leadership-revops">Leadership & RevOps</FAQLink>
          </p>
          <p>
            For practical plays, use:{' '}
            <FAQLink href="/playbooks/system">System Playbooks</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="How long does it take to 'implement' the Loop Revenue System?">
          <p>There is no finish line.</p>
          <p>
            You can feel the impact of this model in a few weeks if you use it to shape a small
            project. You can spend years using it to guide your strategy, systems, and experiments
            as the business grows.
          </p>
          <p>Think of it less as a project and more as a way to run your loops.</p>
        </FAQItem>

        <FAQItem question="What if we disagree internally about how to apply this?">
          <p>That is normal.</p>
          <p>Use the loops and stages to structure the disagreement. Ask:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Which loop are we actually talking about?</li>
            <li>Which stage is the real point of tension?</li>
            <li>What small experiment would help us test both views safely?</li>
          </ul>
          <p>
            Then log that experiment using the templates here:{' '}
            <FAQLink href="/resources/templates-checklists">Templates & Checklists</FAQLink>
          </p>
          <p>
            And design it together using:{' '}
            <FAQLink href="/resources/prompts-workflows">Prompts & Workflows</FAQLink>
          </p>
        </FAQItem>

        <FAQItem question="What if we start and then stall?">
          <p>You will, at some point. Every team does.</p>
          <p>When that happens:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Go back to one loop and one stage.</li>
            <li>Choose one play from <FAQLink href="/playbooks/system">System Playbooks</FAQLink>.</li>
            <li>Run it with a clear start and end date.</li>
          </ul>
          <p>Then review what you learned. Stalling is fine. Staying stalled is optional.</p>
        </FAQItem>
      </FAQSection>

      {/* Still Have Questions */}
      <section className="section-padding bg-white border-t-4 border-[#98C1D9]">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              If you still have questions after reading this page, that is a good sign.
              It means you are thinking about how this applies in your real world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/roles/start-here"
              className="group block p-6 bg-[#E0FBFC] rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-display font-bold text-[#028393] mb-2 group-hover:underline">
                Start Here
              </h3>
              <p className="text-text-secondary text-sm">
                Get a guided entry point based on your role.
              </p>
            </Link>
            <Link
              href="/overview/loop-revenue-system"
              className="group block p-6 bg-[#E0FBFC] rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-display font-bold text-[#142d63] mb-2 group-hover:underline">
                System Overview
              </h3>
              <p className="text-text-secondary text-sm">
                See how the full system fits together.
              </p>
            </Link>
            <Link
              href="/playbooks/system"
              className="group block p-6 bg-[#E0FBFC] rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-display font-bold text-[#f65625] mb-2 group-hover:underline">
                System Playbooks
              </h3>
              <p className="text-text-secondary text-sm">
                Pick a play and try something small.
              </p>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#142d63] to-[#1e3a5f] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              One More Time
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Choose one loop. Choose one stage. Choose one small play.
              Run it, learn from it, and adjust.
            </p>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Let those small, honest steps help your team, your customers, and your business
              move closer to the way you actually want to work and flourish.
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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the Loop Revenue System?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Loop Revenue System is a way to see your entire revenue engine as four connected loops (Marketing, Sales, Service, Ops), each running through the same four stages: Express, Tailor, Amplify, and Evolve.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do we need HubSpot to use the Loop Revenue System?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. You can use the Loop Revenue System with HubSpot, another CRM, a mix of tools, or even spreadsheets. The model is tool-agnostic on purpose.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does AI fit into the Loop Revenue System?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI sits inside the loops, not above them. It helps with Express (summarizing research), Tailor (suggesting segments), Amplify (repurposing content), and Evolve (spotting patterns). Humans still decide what to believe, what to ship, and what to change.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
