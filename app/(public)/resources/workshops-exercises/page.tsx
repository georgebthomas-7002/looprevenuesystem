import { Metadata } from 'next'
import Link from 'next/link'
import { WorkshopCard, ExerciseCard } from './components'

export const metadata: Metadata = {
  title: 'Workshops & Exercises | Loop Revenue System',
  description: 'Ready-to-run workshops and exercises for teams learning the Loop Revenue System. Session agendas for foundations, loops, stages, leadership, and AI collaboration.',
  openGraph: {
    title: 'Workshops & Exercises | Loop Revenue System',
    description: 'Ready-to-run workshops and exercises for teams learning the Loop Revenue System. Session agendas for foundations, loops, stages, leadership, and AI collaboration.',
  },
}

// Quick Link Component
function QuickLink({ href, label, duration, color }: { href: string; label: string; duration: string; color: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between gap-2 text-sm font-medium hover:underline transition-colors p-2 rounded-lg hover:bg-gray-50"
      style={{ color }}
    >
      <span className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        {label}
      </span>
      <span className="text-text-secondary text-xs">{duration}</span>
    </a>
  )
}

// Section Header Component
function SectionHeader({
  id,
  title,
  description,
  color,
}: {
  id: string
  title: string
  description: string
  color: string
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-1 h-8 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">
          {title}
        </h2>
      </div>
      <p className="text-text-secondary ml-4">{description}</p>
    </div>
  )
}

// Workshop agenda content
const workshops = {
  introLoopsStages: `Workshop: Intro To Loops And Stages
Time: 60 minutes
Who: Cross-functional group (Marketing, Sales, Service, Ops, RevOps, Leadership)
Materials: Whiteboard or digital board, sticky notes, markers

Agenda:

0-10 min — Welcome and Purpose
• Why we are here: we want a shared way to see our revenue engine.
• Quick overview of four loops and four stages.
• Set expectations: this is exploration, not perfection.

10-25 min — Our World as Loops (Small Groups)
• Split into 2-4 groups.
• Each group draws the four loops and lists:
  - What we do in each loop today.
  - Where they see confusion or friction.

25-40 min — Share and Compare
• Groups share their maps.
• Circle overlaps and differences.
• Capture 3-5 key insights on a main board.

40-55 min — Stages in Our Week
• As one group, walk through Express, Tailor, Amplify, Evolve.
• For each stage, ask:
  - Where do we already do this well?
  - Where does it feel missing?

55-60 min — Wrap and Next Step
• Choose one loop and one stage to focus on next.
• Agree on a follow-up session (Loop Deep Dive or Stage Sprint).`,

  customerJourneyLoops: `Workshop: Customer Journey as Loops
Time: 60 minutes
Who: Marketing, Sales, Service leads plus one RevOps or leadership voice
Materials: Customer journey map (if you have one), whiteboard, markers

Agenda:

0-10 min — Set the Frame
• Show your current customer journey map (or sketch one quickly).
• Explain: we are going to overlay the loops on this journey.

10-30 min — Map Loops to Journey Stages
• For each major journey stage (Awareness, Consideration, Decision, Onboarding, Success, Expansion):
  - Which loop owns this stage primarily?
  - Which loops support it?
  - Where are the handoffs?

30-45 min — Find the Gaps
• Mark places where:
  - No loop clearly owns the moment.
  - Two loops overlap without clear roles.
  - Data or context gets lost in a handoff.

45-55 min — Prioritize One Gap
• Vote on the most painful gap.
• Ask: Which loop and which stage (Express, Tailor, Amplify, Evolve) would help most here?

55-60 min — Assign a Next Step
• One owner, one action, one deadline.
• Schedule a check-in.`,

  loopDeepDive: `Workshop: Loop Deep Dive
Time: 60 minutes
Who: Single loop team (e.g., all of Marketing, or Sales, or Service) plus RevOps partner
Materials: Whiteboard, metrics dashboard access, recent examples

Agenda:

0-5 min — Welcome
• Today we zoom into one loop: [Marketing / Sales / Service / Ops].
• Goal: see ourselves through Express, Tailor, Amplify, Evolve.

5-20 min — Express Check
• What do we stand for in this loop?
• How clearly do we communicate what we do and for whom?
• Where is our Express stage fuzzy or inconsistent?
• Capture 2-3 Express observations.

20-35 min — Tailor and Amplify Check
• Tailor: Where do we personalize or adapt?
  - What works? What feels generic?
• Amplify: Where have we scaled successfully?
  - What motions run automatically?
  - What still requires too much manual effort?
• Capture 2-3 observations for each stage.

35-50 min — Evolve Check
• When did we last learn something and change how we work?
• What feedback loops exist? (Data, customer input, team retros)
• What do we wish we knew that we don't measure today?
• Capture 2-3 Evolve observations.

50-60 min — Pick One Play
• Review observations across all four stages.
• Vote on the highest-impact area to improve.
• Assign an owner to design a small experiment (use System Playbooks).`,

  loopInteractions: `Workshop: Loop Interactions
Time: 75 minutes
Who: Representatives from each loop (Marketing, Sales, Service, Ops) plus leadership
Materials: Large whiteboard or digital canvas, different colored markers/stickies per loop

Agenda:

0-10 min — Setup
• Draw the four loops as connected circles.
• Assign each loop a color.

10-30 min — Receives and Sends (Small Groups)
• Each loop group answers:
  - What do we receive from other loops? (leads, data, context, requests)
  - What do we send to other loops?
• Write on stickies and place on the board.

30-45 min — Connection Review
• Walk through each connection as a full group.
• Mark connections as:
  - 🟢 Working well
  - 🟡 Needs attention
  - 🔴 Broken or missing

45-60 min — Root Cause on Red and Yellow
• For each 🔴 or 🟡 connection:
  - Which stage is breaking? (Express, Tailor, Amplify, Evolve)
  - Is it a people, process, data, or tool issue?

60-75 min — Prioritize and Assign
• Choose 1-2 connections to fix first.
• Assign owners from both loops involved.
• Schedule a follow-up sync in 2-4 weeks.`,

  stageSprint: `Workshop: Stage Sprint
Time: 90 minutes
Who: Team focused on one loop, or cross-functional if working on a shared initiative
Materials: Whiteboard, timer, templates from Templates & Checklists

Agenda:

0-10 min — Pick the Stage
• Review Express, Tailor, Amplify, Evolve briefly.
• Choose one stage to sprint on today based on current pain or opportunity.

10-30 min — Current State (Solo + Share)
• 10 min solo: Each person writes:
  - What do we do in this stage today?
  - What works? What frustrates you?
• 10 min share: Round-robin, no debate yet, just capture.

30-50 min — Ideal State
• As a group, sketch what "good" looks like for this stage.
• Keep it concrete: What would change? What would you see? What would customers feel?

50-70 min — Gap Analysis and Ideas
• List gaps between current and ideal.
• Brainstorm 5-10 ideas to close gaps (quantity over quality at first).
• Dot vote to pick top 2-3 ideas.

70-85 min — Design One Experiment
• For the top idea, use the Experiment Card template:
  - Hypothesis
  - What we'll change
  - How we'll measure
  - Timeline
• Assign owner.

85-90 min — Wrap
• Recap the experiment.
• Set a review date.
• Celebrate starting.`,

  leadershipRevOps: `Workshop: Leadership & RevOps Operating Model
Time: 90 minutes
Who: CEO/Founder, Revenue/GTM leadership, RevOps lead(s)
Materials: Whiteboard, current metrics/dashboards, one-pager on loops and stages

Agenda:

0-10 min — Why We're Here
• Share the goal: align on how we use loops and stages to run the business.
• Quick refresh on the four loops and four stages.

10-30 min — Current Reality Check
• Each leader shares (2-3 min each):
  - What loop do you primarily own?
  - Where do you feel strong?
  - Where do you feel stuck or under-resourced?
• RevOps shares: Where do systems and data support you? Where do they fail you?

30-50 min — Shared Ownership Map
• Draw the loops on a board.
• For each loop, clarify:
  - Leadership owner
  - RevOps partner
  - Shared metrics
• Mark any unclear or contested areas.

50-70 min — Cadence Design
• Define:
  - Weekly: What does each loop review internally?
  - Monthly: What does leadership + RevOps review together?
  - Quarterly: What gets reset or reprioritized?
• Assign owners for each cadence meeting.

70-85 min — First Focus
• As a group, answer:
  - Which loop is our biggest bottleneck right now?
  - Which stage inside that loop needs the most attention?
  - What one play will we commit to in the next 30 days?

85-90 min — Close
• Recap decisions.
• Schedule the first cadence meeting.
• Thank everyone for investing the time.`,

  aiHumans: `Workshop: AI & Humans Hybrid Lab
Time: 90 minutes
Who: Marketing, Sales, Service, Ops leads plus anyone experimenting with AI
Materials: Laptops with AI tool access, whiteboard, example prompts from Prompts & Workflows

Agenda:

0-10 min — Set the Stage
• Remind: AI sits inside the loops, not above them.
• Today we experiment with AI for each stage safely.

10-25 min — Express with AI (Hands-On)
• Task: Use AI to draft or refine messaging for one audience.
• Prompt starter: "Help me clarify our value proposition for [segment]..."
• Capture what worked and what felt off.

25-40 min — Tailor with AI (Hands-On)
• Task: Use AI to personalize a piece of content for a specific segment.
• Prompt starter: "Rewrite this for [persona] who cares about [X]..."
• Discuss: Did it feel human? What needed human editing?

40-55 min — Amplify and Evolve with AI
• Amplify task: Use AI to repurpose one asset into another format.
• Evolve task: Use AI to summarize recent results and suggest next steps.
• Share outputs. Discuss quality and trust.

55-75 min — Guardrails Discussion
• What did we learn about where AI helps vs. harms?
• Draft 3 guardrails for our team:
  - Where AI can operate freely.
  - Where AI needs human review.
  - Where AI should not be used.

75-90 min — Commit to One Use Case
• Choose one AI-assisted workflow to formalize.
• Assign an owner to document it.
• Set a review date to check how it's going.`,
}

// Exercise content
const exercises = {
  stageCheckIn: {
    title: 'Stage Check-In',
    duration: '10-15 min',
    context: 'Use at the start of any team meeting to ground the conversation.',
    steps: [
      'Name the loop you are discussing (Marketing, Sales, Service, Ops).',
      'Ask: "Which stage are we focused on right now?" (Express, Tailor, Amplify, Evolve)',
      'Each person shares one sentence: "In this stage, I am working on ___."',
      'Note any mismatches—people may be in different stages without realizing it.',
      'Align on one shared stage focus for the meeting or the week.',
    ],
  },
  issueLoopMap: {
    title: 'Issue to Loop Map',
    duration: '15-20 min',
    context: 'Use when a problem feels vague or cross-functional.',
    steps: [
      'Name the issue in one sentence.',
      'Ask: "Which loop does this issue live in primarily?"',
      'Ask: "Which other loops does it touch?"',
      'Ask: "Which stage (Express, Tailor, Amplify, Evolve) is breaking?"',
      'Assign the issue to one loop owner with support from others.',
      'Agree on the smallest next step.',
    ],
  },
  loopHandoffReview: {
    title: 'Loop Handoff Review',
    duration: '20-30 min',
    context: 'Use when a specific handoff (e.g., Marketing to Sales, Sales to Service) feels broken.',
    steps: [
      'Name the handoff: "From Loop ___ to Loop ___."',
      'Each loop shares: "What do we send?" and "What do we expect to receive?"',
      'Compare notes. Mark gaps or mismatches.',
      'Ask: "Is the issue an Express problem (unclear expectations), Tailor problem (wrong fit), Amplify problem (not automated), or Evolve problem (no feedback loop)?"',
      'Design one small fix and assign an owner.',
    ],
  },
  playRetro: {
    title: 'Play Retrospective',
    duration: '20-30 min',
    context: 'Use after running an experiment or play from System Playbooks.',
    steps: [
      'Recap: What loop, stage, and play did we run?',
      'Results: What happened? Share data and stories.',
      'Learnings: What did we learn about our customers? Our process? Our assumptions?',
      'Decision: Keep, iterate, or stop?',
      'Next: What is the next experiment based on this learning?',
      'Log it: Update your experiment log or playbook notes.',
    ],
  },
  aiUseCaseQuickTest: {
    title: 'AI Use Case Quick Test',
    duration: '15-20 min',
    context: 'Use before committing to a new AI-assisted workflow.',
    steps: [
      'Name the use case: "We want to use AI to ___."',
      'Stage fit: Which stage does this support? (Express, Tailor, Amplify, Evolve)',
      'Test it live: Run one example with real data.',
      'Review the output: Is it accurate? Is it useful? Does it feel human?',
      'Guardrail check: Would we be comfortable showing this to a customer?',
      'Decision: Proceed, adjust, or reject.',
    ],
  },
}

export default function WorkshopsExercisesPage() {
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
                Workshops & Exercises
              </h1>
              <p className="text-xl text-[#3D5A80] mb-6">
                Run simple sessions that make the loops real.
              </p>
              <p className="text-text-secondary mb-4">
                Reading about a system is one thing. Using it in a room with your team
                is where it starts to stick.
              </p>
              <p className="text-text-secondary">
                This page gives you ready-to-run workshops and exercises you can use in
                team meetings, offsites, or working sessions. No consultants required.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Workshop Visual */}
              <div className="relative w-full max-w-xs">
                <svg viewBox="0 0 300 300" className="w-full h-auto">
                  {/* Central loop */}
                  <circle cx="150" cy="150" r="80" fill="none" stroke="#E0FBFC" strokeWidth="30" />

                  {/* Stage colors */}
                  <path d="M 150 70 A 80 80 0 0 1 230 150" fill="none" stroke="#028393" strokeWidth="6" />
                  <path d="M 230 150 A 80 80 0 0 1 150 230" fill="none" stroke="#faaa68" strokeWidth="6" />
                  <path d="M 150 230 A 80 80 0 0 1 70 150" fill="none" stroke="#f65625" strokeWidth="6" />
                  <path d="M 70 150 A 80 80 0 0 1 150 70" fill="none" stroke="#3D5A80" strokeWidth="6" />

                  {/* Calendar icon - top left */}
                  <rect x="40" y="40" width="40" height="35" rx="4" fill="#142d63" />
                  <rect x="40" y="40" width="40" height="10" rx="4" fill="#028393" />
                  <circle cx="52" cy="60" r="3" fill="white" />
                  <circle cx="68" cy="60" r="3" fill="white" />

                  {/* Whiteboard icon - top right */}
                  <rect x="220" y="40" width="45" height="35" rx="4" fill="#142d63" />
                  <line x1="228" y1="55" x2="257" y2="55" stroke="white" strokeWidth="2" />
                  <line x1="228" y1="63" x2="250" y2="63" stroke="white" strokeWidth="2" />

                  {/* People icon - bottom left */}
                  <circle cx="55" cy="230" r="10" fill="#f65625" />
                  <circle cx="75" cy="235" r="8" fill="#faaa68" />
                  <circle cx="45" cy="240" r="7" fill="#3D5A80" />

                  {/* Checklist icon - bottom right */}
                  <rect x="225" y="220" width="35" height="40" rx="4" fill="#142d63" />
                  <line x1="232" y1="232" x2="253" y2="232" stroke="white" strokeWidth="2" />
                  <line x1="232" y1="242" x2="253" y2="242" stroke="white" strokeWidth="2" />
                  <line x1="232" y1="252" x2="248" y2="252" stroke="white" strokeWidth="2" />

                  {/* Center text */}
                  <text x="150" y="145" textAnchor="middle" className="fill-brand-navy text-[12px] font-semibold">
                    Team
                  </text>
                  <text x="150" y="162" textAnchor="middle" className="fill-brand-navy text-[12px] font-semibold">
                    Sessions
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-6">
                How To Use This Page
              </h2>
              <p className="text-text-secondary mb-4">
                Think of this as a menu, not a curriculum.
              </p>
              <p className="text-text-secondary mb-6">
                You do not have to run every session. You do not have to get fancy.
                Pick one workshop that matches your role, your team, and the problem
                you want to work on next.
              </p>
              <div className="space-y-2 text-text-secondary">
                <p className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Drop an agenda into a calendar invite as-is.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Shorten or stretch timeboxes based on your team.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Combine pieces from two workshops if that fits better.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#E0FBFC] rounded-xl p-6">
                <h3 className="text-lg font-display font-bold text-brand-navy mb-4">
                  Quick Picks
                </h3>
                <div className="space-y-1 mb-4">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Quick Exercises (10-30 min)
                  </p>
                  <QuickLink href="#exercise-stage-check-in" label="Stage Check-In" duration="10-15 min" color="#028393" />
                  <QuickLink href="#exercise-issue-loop-map" label="Issue to Loop Map" duration="15-20 min" color="#028393" />
                </div>
                <div className="space-y-1 mb-4">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    60-Minute Workshops
                  </p>
                  <QuickLink href="#workshop-intro-loops-stages" label="Intro to Loops & Stages" duration="60 min" color="#f65625" />
                  <QuickLink href="#workshop-loop-deep-dive" label="Loop Deep Dive" duration="60 min" color="#f65625" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    90-Minute Workshops
                  </p>
                  <QuickLink href="#workshop-leadership-revops" label="Leadership & RevOps Model" duration="90 min" color="#3D5A80" />
                  <QuickLink href="#workshop-ai-humans" label="AI & Humans Hybrid Lab" duration="90 min" color="#3D5A80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Workshops */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="workshops-foundations"
            title="Foundation Workshops"
            description="Help people understand the Loop Revenue System without drowning in theory."
            color="#142d63"
          />

          <div className="space-y-6">
            <WorkshopCard
              id="workshop-intro-loops-stages"
              title="Intro to Loops & Stages"
              duration="60 minutes"
              audience="Cross-functional team"
              materials="Whiteboard, sticky notes"
              agenda={workshops.introLoopsStages}
              color="#142d63"
              label="Foundation"
            />
            <WorkshopCard
              id="workshop-customer-journey"
              title="Customer Journey as Loops"
              duration="60 minutes"
              audience="Marketing, Sales, Service leads"
              materials="Customer journey map, whiteboard"
              agenda={workshops.customerJourneyLoops}
              color="#142d63"
              label="Foundation"
            />
          </div>
        </div>
      </section>

      {/* Loop-Focused Workshops */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="workshops-loops"
            title="Loop-Focused Workshops"
            description="Dive deep into a single loop or explore how loops connect."
            color="#f65625"
          />

          <div className="space-y-6">
            <WorkshopCard
              id="workshop-loop-deep-dive"
              title="Loop Deep Dive"
              duration="60 minutes"
              audience="Single loop team + RevOps"
              materials="Whiteboard, metrics dashboard"
              agenda={workshops.loopDeepDive}
              color="#f65625"
              label="Loop Focus"
            />
            <WorkshopCard
              id="workshop-loop-interactions"
              title="Loop Interactions"
              duration="75 minutes"
              audience="Reps from all loops + leadership"
              materials="Large whiteboard, colored markers"
              agenda={workshops.loopInteractions}
              color="#f65625"
              label="Loop Focus"
            />
          </div>
        </div>
      </section>

      {/* Stage-Focused Workshops */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="workshops-stages"
            title="Stage-Focused Workshops"
            description="Sprint on one stage to make concrete progress."
            color="#028393"
          />

          <div className="space-y-6">
            <WorkshopCard
              id="workshop-stage-sprint"
              title="Stage Sprint"
              duration="90 minutes"
              audience="Single loop team or cross-functional"
              materials="Whiteboard, timer, templates"
              agenda={workshops.stageSprint}
              color="#028393"
              label="Stage Focus"
            />
          </div>
        </div>
      </section>

      {/* Leadership & AI Workshops */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="workshops-leadership-ai"
            title="Leadership & AI Workshops"
            description="Align leadership, RevOps, and explore AI collaboration safely."
            color="#3D5A80"
          />

          <div className="space-y-6">
            <WorkshopCard
              id="workshop-leadership-revops"
              title="Leadership & RevOps Operating Model"
              duration="90 minutes"
              audience="CEO, GTM leadership, RevOps"
              materials="Whiteboard, current metrics"
              agenda={workshops.leadershipRevOps}
              color="#3D5A80"
              label="Leadership"
            />
            <WorkshopCard
              id="workshop-ai-humans"
              title="AI & Humans Hybrid Lab"
              duration="90 minutes"
              audience="Loop leads + AI experimenters"
              materials="Laptops with AI access, prompts"
              agenda={workshops.aiHumans}
              color="#faaa68"
              label="AI Collaboration"
            />
          </div>
        </div>
      </section>

      {/* Quick Exercises */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="exercises"
            title="Quick Exercises"
            description="Short activities you can fit inside normal meetings."
            color="#028393"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <ExerciseCard
              id="exercise-stage-check-in"
              title={exercises.stageCheckIn.title}
              duration={exercises.stageCheckIn.duration}
              context={exercises.stageCheckIn.context}
              steps={exercises.stageCheckIn.steps}
              color="#028393"
            />
            <ExerciseCard
              id="exercise-issue-loop-map"
              title={exercises.issueLoopMap.title}
              duration={exercises.issueLoopMap.duration}
              context={exercises.issueLoopMap.context}
              steps={exercises.issueLoopMap.steps}
              color="#f65625"
            />
            <ExerciseCard
              id="exercise-loop-handoff"
              title={exercises.loopHandoffReview.title}
              duration={exercises.loopHandoffReview.duration}
              context={exercises.loopHandoffReview.context}
              steps={exercises.loopHandoffReview.steps}
              color="#3D5A80"
            />
            <ExerciseCard
              id="exercise-play-retro"
              title={exercises.playRetro.title}
              duration={exercises.playRetro.duration}
              context={exercises.playRetro.context}
              steps={exercises.playRetro.steps}
              color="#faaa68"
            />
            <ExerciseCard
              id="exercise-ai-quick-test"
              title={exercises.aiUseCaseQuickTest.title}
              duration={exercises.aiUseCaseQuickTest.duration}
              context={exercises.aiUseCaseQuickTest.context}
              steps={exercises.aiUseCaseQuickTest.steps}
              color="#142d63"
            />
          </div>
        </div>
      </section>

      {/* Facilitator Tips */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="facilitator-tips"
            title="Tips for Facilitators"
            description="Make your sessions more effective with these simple habits."
            color="#98C1D9"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#028393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Before the Session
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Send a brief context note: what we're doing and why.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Set up your whiteboard or digital canvas in advance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Have the loops and stages visual ready to share.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Decide who will take notes and capture decisions.
                </li>
              </ul>
            </div>

            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f65625]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                During the Session
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Keep time ruthlessly—it's okay to cut discussions short.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Use "parking lot" for off-topic ideas worth saving.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Make sure quieter voices get heard—call on them directly.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  End with a clear decision, owner, and next step.
                </li>
              </ul>
            </div>

            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3D5A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                After the Session
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#3D5A80]">•</span>
                  Share notes and photos within 24 hours.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3D5A80]">•</span>
                  Follow up on assigned actions within the week.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3D5A80]">•</span>
                  Schedule any agreed follow-up sessions immediately.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3D5A80]">•</span>
                  Ask: What would we do differently next time?
                </li>
              </ul>
            </div>

            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#faaa68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Common Pitfalls
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#faaa68]">•</span>
                  Trying to cover too much in one session.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#faaa68]">•</span>
                  Letting one voice dominate the room.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#faaa68]">•</span>
                  Ending without a clear next step or owner.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#faaa68]">•</span>
                  Never circling back to review what you decided.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#142d63] to-[#1e3a5f]">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Start Small. Run One. Learn.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            You do not need to run every workshop. Pick one that matches where your team
            is stuck, run it, capture what you learn, and improve the format next time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/templates-checklists"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f65625] text-white rounded-lg font-semibold hover:bg-[#e04d1f] transition-colors"
            >
              Get Templates
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/playbooks/system"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Browse Playbooks
            </Link>
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
            name: 'Workshops & Exercises | Loop Revenue System',
            description: 'Ready-to-run workshops and exercises for teams learning the Loop Revenue System.',
            mainEntity: {
              '@type': 'ItemList',
              name: 'Loop Revenue System Workshops',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Foundation Workshops' },
                { '@type': 'ListItem', position: 2, name: 'Loop-Focused Workshops' },
                { '@type': 'ListItem', position: 3, name: 'Stage-Focused Workshops' },
                { '@type': 'ListItem', position: 4, name: 'Leadership & AI Workshops' },
                { '@type': 'ListItem', position: 5, name: 'Quick Exercises' },
              ],
            },
          }),
        }}
      />
    </main>
  )
}
