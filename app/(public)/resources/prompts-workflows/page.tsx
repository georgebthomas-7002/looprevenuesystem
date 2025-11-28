import { Metadata } from 'next'
import Link from 'next/link'
import { PromptBlock, WorkflowCard } from './components'

export const metadata: Metadata = {
  title: 'Prompts & Workflows | Loop Revenue System',
  description: 'AI prompt patterns and hybrid workflows for the Loop Revenue System. Copy-and-paste prompts for Express, Tailor, Amplify, Evolve stages and all four loops.',
  openGraph: {
    title: 'Prompts & Workflows | Loop Revenue System',
    description: 'AI prompt patterns and hybrid workflows for the Loop Revenue System. Copy-and-paste prompts for Express, Tailor, Amplify, Evolve stages and all four loops.',
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

// Stage Badge Component
function StageBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex px-3 py-1 rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
  )
}

// Prompt content strings
const prompts = {
  // Stage-based prompts
  expressClarity: `You are helping me with the Express stage of the Loop Revenue System.

Context:
- Loop: (Marketing, Sales, Service, Ops)
- Audience:
- Offer or motion:
- Any existing messaging or notes:

Tasks:
1. Summarize, in plain language, how this audience describes their problem today.
2. Summarize how we currently describe what we do and how we help.
3. Highlight any gaps, jargon, or fuzzy claims in our current messaging.
4. Suggest 2 to 3 clearer ways to express our value that:
   - Use the audience's language.
   - Avoid overpromising.
   - Stay under 2 short paragraphs each.

Ask me 3 clarifying questions before you answer if anything is missing.`,

  expressICP: `You are helping me define or refine our Ideal Customer Profile (ICP) for the Express stage.

Context:
- Our product/service:
- Current target description:
- What we know about successful customers:
- What we know about unsuccessful customers:

Tasks:
1. Based on this context, draft a clear ICP statement (2-3 sentences).
2. List 5-7 qualifying signals we should look for.
3. List 3-5 disqualifying signals we should watch out for.
4. Suggest how this ICP might differ across our loops (Marketing, Sales, Service).

Format the output so I can paste it into a team document.`,

  tailorSegment: `You are helping me with the Tailor stage of the Loop Revenue System.

Context:
- Loop: (Marketing, Sales, Service, Ops)
- Segment or persona we are tailoring for:
- What makes this segment different:
- Current generic experience they receive:
- Data we have about them:

Tasks:
1. Identify 3 specific ways we could tailor the experience for this segment.
2. For each suggestion:
   - Describe what changes.
   - Explain why it matters to this segment.
   - Note any data or signals we would need.
3. Flag any personalization that might feel intrusive or creepy.
4. Suggest one "quick win" we could implement this week.

Keep suggestions practical for a small team.`,

  tailorContent: `You are helping me tailor content for a specific audience segment.

Context:
- Original content (paste below):
- Target segment:
- What we know about this segment:
- Tone and voice guidelines:

Tasks:
1. Rewrite the content for this specific segment.
2. Keep the core message but adjust:
   - Language and vocabulary
   - Examples and references
   - Pain points emphasized
   - Benefits highlighted
3. Note what you changed and why.
4. Flag anything that might not resonate with this segment.

Output the tailored version first, then your notes.`,

  amplifyScale: `You are helping me with the Amplify stage of the Loop Revenue System.

Context:
- Loop: (Marketing, Sales, Service, Ops)
- Motion or process we want to scale:
- Current volume/frequency:
- Current manual effort required:
- Evidence it works (data, stories):

Tasks:
1. Identify the repeatable core of this motion that we should protect.
2. Suggest 2-3 ways to amplify this without losing quality:
   - What gets automated
   - What stays human
   - Tools or workflows involved
3. Describe quality checks we should put in place.
4. Flag risks of scaling too fast.

Be specific about where AI can help vs. where humans should stay involved.`,

  amplifyAutomation: `You are helping me design an automation for a proven process.

Context:
- Process name:
- Current manual steps:
- Trigger event:
- Expected output:
- Volume we need to handle:

Tasks:
1. Map the current process into automation-friendly steps.
2. For each step, recommend:
   - Automate fully
   - Automate with human review
   - Keep manual
3. Suggest a specific workflow structure (trigger → actions → conditions → outcomes).
4. Identify integration points with our tools.
5. Describe the "kill switch" – how do we pause or revert if something goes wrong?

Output as a numbered workflow I can implement.`,

  evolveReview: `You are helping me with the Evolve stage of the Loop Revenue System.

Context:
- Loop: (Marketing, Sales, Service, Ops)
- What we set out to do:
- What actually happened (data, outcomes):
- Surprises or unexpected results:
- Feedback from team or customers:

Tasks:
1. Summarize what worked and what didn't in 2-3 sentences each.
2. Identify the root cause of any underperformance.
3. Suggest 3 specific changes we should consider:
   - One quick fix
   - One process improvement
   - One strategic question to revisit
4. Recommend what to do next:
   - Double down
   - Iterate
   - Pivot
   - Stop

Be honest about what the data actually says.`,

  evolveExperiment: `You are helping me design the next experiment based on what we learned.

Context:
- What we just tested:
- What we learned:
- Hypothesis for the next test:
- Resources available:
- Constraints:

Tasks:
1. Sharpen the hypothesis into a testable statement.
2. Define:
   - What we will change
   - What we will measure
   - How long we will run it
   - What success looks like
3. Identify the smallest viable version of this experiment.
4. List risks and how we'll mitigate them.
5. Draft a brief experiment card I can share with the team.

Keep it simple enough to start this week.`,

  // Loop-based prompts
  marketingCampaign: `You are helping me plan a marketing campaign aligned with the Loop Revenue System.

Context:
- Campaign goal:
- Target segment:
- Key message:
- Channels we're considering:
- Budget/resource constraints:

Tasks:
1. Review the campaign through each stage:
   - Express: Is our message clear and differentiated?
   - Tailor: How will we personalize by segment?
   - Amplify: What can we automate vs. keep manual?
   - Evolve: How will we measure and learn?
2. Identify gaps in the current plan.
3. Suggest 2-3 improvements for each stage.
4. Recommend the single most important thing to get right.

Format as a campaign review I can share with my team.`,

  marketingContent: `You are helping me create marketing content that fits the Loop Revenue System.

Context:
- Content type: (blog, email, landing page, social, etc.)
- Audience segment:
- Stage in their journey:
- Key message or offer:
- Tone/voice guidelines:

Tasks:
1. Draft the content with clear structure.
2. Ensure it:
   - Uses audience language (Express)
   - Speaks to their specific situation (Tailor)
   - Is optimized for the channel (Amplify)
   - Includes clear next steps (Evolve)
3. Suggest a headline and 2 alternatives.
4. Note any claims that need proof points.

Output the draft first, then your notes.`,

  salesDiscovery: `You are helping me prepare for a sales discovery call.

Context:
- Prospect company:
- Prospect role:
- What we know so far:
- Our hypothesis about their problem:
- Our relevant offering:

Tasks:
1. Suggest 5-7 discovery questions that:
   - Uncover their real problem (not just symptoms)
   - Understand their current state
   - Clarify decision-making process
   - Identify timeline and urgency
2. For each question, note what we're trying to learn.
3. Suggest 2-3 tailored proof points to share if relevant.
4. Draft a brief agenda for the call.

Keep questions conversational, not interrogative.`,

  salesProposal: `You are helping me draft a proposal for a qualified opportunity.

Context:
- Company name:
- Their stated problem:
- What we learned in discovery:
- Our recommended solution:
- Pricing approach:
- Key stakeholders:

Tasks:
1. Draft an executive summary (3-4 sentences) that reflects their words.
2. Structure the proposal:
   - Their situation (in their language)
   - Our recommendation
   - Expected outcomes
   - Investment
   - Next steps
3. Tailor language for the decision-maker's priorities.
4. Flag any gaps in our understanding.

Make it feel like a conversation, not a template.`,

  serviceOnboarding: `You are helping me improve our customer onboarding process.

Context:
- Customer segment:
- Product/service they purchased:
- Current onboarding steps:
- Time to first value (current):
- Common friction points:

Tasks:
1. Review the current onboarding through each stage:
   - Express: Are expectations clear from day one?
   - Tailor: Are we adapting to their specific needs?
   - Amplify: What can we standardize vs. customize?
   - Evolve: How do we capture feedback and improve?
2. Identify the biggest bottleneck.
3. Suggest 3 improvements with estimated effort.
4. Recommend success metrics to track.

Focus on time-to-value and customer experience.`,

  serviceHealth: `You are helping me analyze customer health and plan next steps.

Context:
- Customer name:
- Time as customer:
- Health signals (usage, tickets, engagement, NPS):
- Recent interactions:
- Contract details (renewal date, value):

Tasks:
1. Assess overall health: Healthy, At Risk, or Critical.
2. Explain the key factors driving this assessment.
3. Recommend 3 specific actions:
   - Immediate (this week)
   - Short-term (this month)
   - Strategic (this quarter)
4. Draft talking points for the next customer conversation.
5. Identify expansion opportunities if relevant.

Be direct about risks and opportunities.`,

  opsProcess: `You are helping me document and improve an operational process.

Context:
- Process name:
- Current steps (describe or paste):
- Who's involved:
- Tools used:
- Known pain points:

Tasks:
1. Map the current process into clear stages.
2. Identify:
   - Steps that add value
   - Steps that are waste or friction
   - Handoff points where things break
3. Suggest improvements through each stage:
   - Express: Is the process clearly defined?
   - Tailor: Does it adapt to different scenarios?
   - Amplify: What should be automated?
   - Evolve: How do we review and improve it?
4. Draft a simplified process flow.

Make the output usable for documentation.`,

  opsData: `You are helping me improve data quality and governance.

Context:
- Data domain: (contacts, deals, products, etc.)
- Current state (describe issues):
- Tools/systems involved:
- Who uses this data:
- Impact of poor data:

Tasks:
1. Diagnose the root causes of data quality issues.
2. Recommend data governance improvements:
   - Definitions and standards
   - Validation rules
   - Ownership and accountability
   - Audit and cleanup cadence
3. Prioritize fixes by impact and effort.
4. Suggest metrics to track data health.

Be practical for a team without dedicated data engineers.`,

  // Role-based prompts
  leadershipDecision: `You are helping me as a leader think through a decision.

Context:
- Decision to make:
- Options we're considering:
- Constraints (time, budget, people):
- What we know:
- What we don't know:

Tasks:
1. Clarify the decision in one sentence.
2. Map each option to potential outcomes (best case, likely case, worst case).
3. Identify what we need to believe for each option to work.
4. Recommend which option to pursue and why.
5. Suggest how to communicate the decision to the team.

Help me think, not just decide.`,

  leadershipReview: `You are helping me prepare for a leadership review meeting.

Context:
- Review type: (monthly, quarterly, annual)
- Key metrics to present:
- What's going well:
- What's challenging:
- Decisions needed:

Tasks:
1. Structure a clear narrative for the review.
2. Suggest how to present metrics in context (vs. target, vs. last period).
3. Recommend 2-3 insights that go beyond the numbers.
4. Identify questions the audience might ask and how to answer them.
5. Draft 3-5 key points for the executive summary.

Make it honest and action-oriented.`,

  revopsAudit: `You are helping me audit our systems and processes.

Context:
- System/tool to audit:
- Known issues or complaints:
- Last audit date:
- Key stakeholders:

Tasks:
1. Create an audit checklist covering:
   - Data health
   - Integration health
   - Workflow health
   - User adoption
   - Reporting accuracy
2. Suggest questions to ask stakeholders.
3. Identify quick wins vs. longer-term fixes.
4. Recommend a format for the audit report.

Output a checklist I can use immediately.`,

  revopsChange: `You are helping me plan a system or process change.

Context:
- What's changing:
- Why:
- Who's affected:
- Timeline:
- Risks:

Tasks:
1. Draft a change management plan:
   - Communication (who, what, when)
   - Training (what, who, how)
   - Rollout (phased vs. big bang)
   - Support (how to get help)
2. Identify potential resistance and how to address it.
3. Recommend success metrics for the change.
4. Draft the announcement message.

Make it practical for a small team.`,
}

// Workflow data
const workflows = {
  contentReview: {
    title: 'Content Creation & Review Workflow',
    description: 'A hybrid workflow for creating marketing content with AI assistance and human quality control.',
    color: '#028393',
    steps: [
      { title: 'Brief the content need', description: 'Human defines the content type, audience, message, and constraints.', actor: 'human' as const },
      { title: 'Generate first draft', description: 'AI creates initial draft based on the brief using the marketing content prompt.', actor: 'ai' as const },
      { title: 'Review and refine', description: 'Human reviews for accuracy, tone, and brand alignment. Provides feedback.', actor: 'human' as const },
      { title: 'Revise based on feedback', description: 'AI incorporates feedback and generates revised version.', actor: 'ai' as const },
      { title: 'Final approval and publish', description: 'Human makes final edits, approves, and publishes content.', actor: 'human' as const },
    ],
  },
  dealAnalysis: {
    title: 'Deal Analysis & Coaching Workflow',
    description: 'A workflow for sales leaders to analyze deals and coach reps using AI-assisted insights.',
    color: '#f65625',
    steps: [
      { title: 'Export deal data', description: 'Human exports deal details from CRM including notes, activities, and stage history.', actor: 'human' as const },
      { title: 'Analyze deal health', description: 'AI reviews deal data and identifies strengths, risks, and gaps in the sales process.', actor: 'ai' as const },
      { title: 'Generate coaching points', description: 'AI suggests specific coaching questions and next steps for the rep.', actor: 'ai' as const },
      { title: 'Coach the rep', description: 'Manager uses insights to have a productive 1:1 coaching conversation.', actor: 'human' as const },
      { title: 'Update deal strategy', description: 'Rep and manager agree on updated approach and next actions.', actor: 'both' as const },
    ],
  },
  customerHealth: {
    title: 'Customer Health Review Workflow',
    description: 'A monthly workflow for reviewing customer health and planning proactive interventions.',
    color: '#faaa68',
    steps: [
      { title: 'Gather health signals', description: 'Human compiles usage data, support tickets, NPS scores, and engagement metrics.', actor: 'human' as const },
      { title: 'Assess health status', description: 'AI analyzes signals and categorizes customers as Healthy, At Risk, or Critical.', actor: 'ai' as const },
      { title: 'Generate action recommendations', description: 'AI suggests specific interventions for at-risk and critical accounts.', actor: 'ai' as const },
      { title: 'Review and prioritize', description: 'CSM team reviews recommendations and prioritizes based on impact and effort.', actor: 'human' as const },
      { title: 'Execute outreach', description: 'CSMs conduct personalized outreach with AI-suggested talking points.', actor: 'both' as const },
      { title: 'Document outcomes', description: 'Human records results and feeds back into health model for improvement.', actor: 'human' as const },
    ],
  },
  processImprovement: {
    title: 'Process Improvement Workflow',
    description: 'A workflow for RevOps to continuously improve operational processes using data and AI insights.',
    color: '#3D5A80',
    steps: [
      { title: 'Identify friction point', description: 'Human identifies a process that is causing problems based on feedback or metrics.', actor: 'human' as const },
      { title: 'Document current state', description: 'Human maps current process steps, handoffs, and pain points.', actor: 'human' as const },
      { title: 'Analyze and recommend', description: 'AI reviews process documentation and suggests improvements for each stage.', actor: 'ai' as const },
      { title: 'Design improved process', description: 'Human and AI collaborate to design the new process flow.', actor: 'both' as const },
      { title: 'Plan implementation', description: 'Human creates change management plan with training and communication.', actor: 'human' as const },
      { title: 'Roll out and measure', description: 'Human implements changes and tracks improvement metrics.', actor: 'human' as const },
    ],
  },
}

export default function PromptsWorkflowsPage() {
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
                Prompts & Workflows
              </h1>
              <p className="text-xl text-[#3D5A80] mb-6">
                Use AI on purpose with prompts and workflows that match your loops.
              </p>
              <p className="text-text-secondary mb-4">
                The Loop Revenue System gives you the model. This page gives you the words and the steps.
              </p>
              <p className="text-text-secondary">
                Here you will find prompt patterns you can copy into your AI tools and lightweight
                workflows you can run with your team. Each one is tied to loops and stages so AI
                supports the system you want instead of inventing one for you.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Human-AI-Human Loop Visual */}
              <div className="relative w-full max-w-sm">
                <svg viewBox="0 0 300 300" className="w-full h-auto">
                  {/* Central loop */}
                  <circle cx="150" cy="150" r="80" fill="none" stroke="#E0FBFC" strokeWidth="40" />

                  {/* Stage segments */}
                  <path d="M 150 70 A 80 80 0 0 1 230 150" fill="none" stroke="#028393" strokeWidth="8" />
                  <path d="M 230 150 A 80 80 0 0 1 150 230" fill="none" stroke="#faaa68" strokeWidth="8" />
                  <path d="M 150 230 A 80 80 0 0 1 70 150" fill="none" stroke="#f65625" strokeWidth="8" />
                  <path d="M 70 150 A 80 80 0 0 1 150 70" fill="none" stroke="#3D5A80" strokeWidth="8" />

                  {/* Human icon - top */}
                  <circle cx="150" cy="40" r="25" fill="#142d63" />
                  <text x="150" y="45" textAnchor="middle" className="fill-white text-[10px] font-semibold">Human</text>

                  {/* AI icon - right */}
                  <circle cx="260" cy="150" r="25" fill="#028393" />
                  <text x="260" y="155" textAnchor="middle" className="fill-white text-[10px] font-semibold">AI</text>

                  {/* Human icon - bottom */}
                  <circle cx="150" cy="260" r="25" fill="#142d63" />
                  <text x="150" y="265" textAnchor="middle" className="fill-white text-[10px] font-semibold">Human</text>

                  {/* Arrows */}
                  <path d="M 170 45 L 235 130" stroke="#142d63" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <path d="M 255 175 L 175 250" stroke="#028393" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#142d63" />
                    </marker>
                  </defs>

                  {/* Center label */}
                  <text x="150" y="155" textAnchor="middle" className="fill-brand-navy text-[11px] font-semibold">Loop</text>
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
                You can use this page three ways:
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#028393] font-bold">1.</span>
                  <span><strong>Start by stage.</strong> Look at Express, Tailor, Amplify, or Evolve and grab a prompt that fits where you are stuck.</span>
                </p>
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#f65625] font-bold">2.</span>
                  <span><strong>Start by loop.</strong> Choose Marketing, Sales, Service, or Ops and copy the prompts for your world.</span>
                </p>
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#3D5A80] font-bold">3.</span>
                  <span><strong>Start by workflow.</strong> Pick one hybrid flow and map it into your tools.</span>
                </p>
              </div>
              <p className="text-text-secondary">
                Take one prompt. Run it with real data. Adjust the language until it sounds like
                you and supports how you want your customers and your team to flourish.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#E0FBFC] rounded-xl p-6">
                <h3 className="text-lg font-display font-bold text-brand-navy mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <QuickLink href="#prompts-stages" label="Stage-Based Prompts" color="#028393" />
                  <QuickLink href="#prompts-loops" label="Loop-Based Prompts" color="#f65625" />
                  <QuickLink href="#prompts-roles" label="Role-Based Prompts" color="#3D5A80" />
                  <QuickLink href="#workflows-examples" label="Example Workflows" color="#142d63" />
                  <QuickLink href="#prompts-guardrails" label="Guardrails & Good Habits" color="#faaa68" />
                  <QuickLink href="#prompts-tools" label="Mapping to Tools" color="#98C1D9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage-Based Prompts */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="prompts-stages"
            title="Stage-Based Prompt Patterns"
            description="Tell AI where you are in the loop and what kind of help you want."
            color="#028393"
          />

          <div className="space-y-8">
            {/* Express */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Express" color="#028393" />
                <span className="text-text-secondary text-sm">Clarify POV and messaging</span>
              </div>
              <div className="space-y-4">
                <PromptBlock
                  title="Clarify Messaging"
                  description="Sharpen what you are saying and who it is for."
                  content={prompts.expressClarity}
                  color="#028393"
                  label="Express"
                />
                <PromptBlock
                  title="Define or Refine ICP"
                  description="Create a clear Ideal Customer Profile with qualifying signals."
                  content={prompts.expressICP}
                  color="#028393"
                  label="Express"
                />
              </div>
            </div>

            {/* Tailor */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Tailor" color="#faaa68" />
                <span className="text-text-secondary text-sm">Personalize and adapt</span>
              </div>
              <div className="space-y-4">
                <PromptBlock
                  title="Tailor by Segment"
                  description="Identify ways to personalize experiences for specific segments."
                  content={prompts.tailorSegment}
                  color="#faaa68"
                  label="Tailor"
                />
                <PromptBlock
                  title="Tailor Content"
                  description="Rewrite content for a specific audience segment."
                  content={prompts.tailorContent}
                  color="#faaa68"
                  label="Tailor"
                />
              </div>
            </div>

            {/* Amplify */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Amplify" color="#f65625" />
                <span className="text-text-secondary text-sm">Scale what works</span>
              </div>
              <div className="space-y-4">
                <PromptBlock
                  title="Scale a Motion"
                  description="Identify what to automate vs. keep human when scaling."
                  content={prompts.amplifyScale}
                  color="#f65625"
                  label="Amplify"
                />
                <PromptBlock
                  title="Design Automation"
                  description="Turn a proven process into an automation workflow."
                  content={prompts.amplifyAutomation}
                  color="#f65625"
                  label="Amplify"
                />
              </div>
            </div>

            {/* Evolve */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Evolve" color="#3D5A80" />
                <span className="text-text-secondary text-sm">Learn and improve</span>
              </div>
              <div className="space-y-4">
                <PromptBlock
                  title="Review Results"
                  description="Analyze what worked and didn't, find root causes."
                  content={prompts.evolveReview}
                  color="#3D5A80"
                  label="Evolve"
                />
                <PromptBlock
                  title="Design Next Experiment"
                  description="Create a testable hypothesis and experiment plan."
                  content={prompts.evolveExperiment}
                  color="#3D5A80"
                  label="Evolve"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loop-Based Prompts */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="prompts-loops"
            title="Loop-Based Prompt Patterns"
            description="Prompts designed for the specific work of each loop."
            color="#f65625"
          />

          <div className="space-y-8">
            {/* Marketing */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#028393] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#028393]" />
                Loop Marketing
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="Campaign Planning"
                  description="Plan a campaign with stage alignment."
                  content={prompts.marketingCampaign}
                  color="#028393"
                  label="Marketing"
                />
                <PromptBlock
                  title="Content Creation"
                  description="Create content that fits the Loop Revenue System."
                  content={prompts.marketingContent}
                  color="#028393"
                  label="Marketing"
                />
              </div>
            </div>

            {/* Sales */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#f65625] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f65625]" />
                Loop Sales
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="Discovery Preparation"
                  description="Prepare for a discovery call with tailored questions."
                  content={prompts.salesDiscovery}
                  color="#f65625"
                  label="Sales"
                />
                <PromptBlock
                  title="Proposal Drafting"
                  description="Draft a proposal that reflects the customer's words."
                  content={prompts.salesProposal}
                  color="#f65625"
                  label="Sales"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#faaa68] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#faaa68]" />
                Loop Service
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="Onboarding Improvement"
                  description="Review and improve the customer onboarding process."
                  content={prompts.serviceOnboarding}
                  color="#faaa68"
                  label="Service"
                />
                <PromptBlock
                  title="Customer Health Analysis"
                  description="Analyze customer health and plan interventions."
                  content={prompts.serviceHealth}
                  color="#faaa68"
                  label="Service"
                />
              </div>
            </div>

            {/* Ops */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#3D5A80] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#3D5A80]" />
                Loop Ops
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="Process Documentation"
                  description="Document and improve operational processes."
                  content={prompts.opsProcess}
                  color="#3D5A80"
                  label="Ops"
                />
                <PromptBlock
                  title="Data Quality Improvement"
                  description="Diagnose and fix data quality issues."
                  content={prompts.opsData}
                  color="#3D5A80"
                  label="Ops"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Prompts */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="prompts-roles"
            title="Role-Based Prompt Patterns"
            description="Prompts for leadership and RevOps decision-making."
            color="#3D5A80"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-display font-bold text-[#142d63] mb-4">
                Leadership
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="Decision Framework"
                  description="Think through a decision with structured analysis."
                  content={prompts.leadershipDecision}
                  color="#142d63"
                  label="Leadership"
                />
                <PromptBlock
                  title="Review Preparation"
                  description="Prepare for a leadership review meeting."
                  content={prompts.leadershipReview}
                  color="#142d63"
                  label="Leadership"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-[#3D5A80] mb-4">
                RevOps
              </h3>
              <div className="space-y-4">
                <PromptBlock
                  title="System Audit"
                  description="Create an audit checklist for systems and processes."
                  content={prompts.revopsAudit}
                  color="#3D5A80"
                  label="RevOps"
                />
                <PromptBlock
                  title="Change Management"
                  description="Plan a system or process change."
                  content={prompts.revopsChange}
                  color="#3D5A80"
                  label="RevOps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Workflows */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="workflows-examples"
            title="Example Hybrid Workflows"
            description="Lightweight workflows that blend human judgment with AI assistance."
            color="#142d63"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <WorkflowCard {...workflows.contentReview} />
            <WorkflowCard {...workflows.dealAnalysis} />
            <WorkflowCard {...workflows.customerHealth} />
            <WorkflowCard {...workflows.processImprovement} />
          </div>
        </div>
      </section>

      {/* Guardrails Section */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="prompts-guardrails"
            title="Guardrails & Good Habits"
            description="Keep AI helpful without letting it take over."
            color="#faaa68"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-display font-bold text-[#028393] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Good Habits
              </h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Always provide context about your loop and stage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Ask AI to clarify before it answers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Review AI output before acting on it
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Use AI for drafts, humans for decisions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Keep sensitive data out of prompts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Adjust prompts until they sound like your team
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-display font-bold text-[#f65625] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Watch Out For
              </h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  AI making up facts or statistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Generic advice that doesn't fit your context
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Over-automating things that need human judgment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Using AI output without attribution when needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Letting AI replace customer conversations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f65625]">•</span>
                  Skipping the feedback loop after using AI
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
            <p className="text-text-secondary flex items-center gap-2">
              <svg className="w-5 h-5 text-[#faaa68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              For the full AI collaboration framework, see{' '}
              <Link href="/playbooks/ai-and-humans" className="text-[#028393] hover:underline font-medium">
                AI And Humans
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Mapping to Tools */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="prompts-tools"
            title="Mapping to Tools"
            description="How to use these prompts and workflows in your stack."
            color="#98C1D9"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-3">
                AI Assistants
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                ChatGPT, Claude, Gemini, etc.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Copy prompts directly into chat</li>
                <li>• Save prompts as custom instructions</li>
                <li>• Create folders by loop or stage</li>
                <li>• Share effective prompts with your team</li>
              </ul>
            </div>

            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-3">
                CRM & Marketing Tools
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                HubSpot, Salesforce, etc.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Use prompts in AI writing assistants</li>
                <li>• Build workflows from the examples</li>
                <li>• Create playbooks with prompt steps</li>
                <li>• Set up AI-assisted sequences</li>
              </ul>
            </div>

            <div className="bg-[#E0FBFC] rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-3">
                Documentation & Notes
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Notion, Confluence, etc.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Save prompts in a team wiki</li>
                <li>• Create prompt templates by use case</li>
                <li>• Document which prompts work best</li>
                <li>• Build a prompt improvement log</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#142d63] to-[#1e3a5f]">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Start With One Prompt
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            You do not need every pattern. You just need one that fits the work in front of you.
            Pick a prompt, run it with real data, and adjust until it sounds like you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/templates-checklists"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f65625] text-white rounded-lg font-semibold hover:bg-[#e04d1f] transition-colors"
            >
              Browse Templates
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/playbooks/ai-and-humans"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              AI Collaboration Guide
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
            name: 'Prompts & Workflows | Loop Revenue System',
            description: 'AI prompt patterns and hybrid workflows for the Loop Revenue System.',
            mainEntity: {
              '@type': 'ItemList',
              name: 'AI Prompt Patterns',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Stage-Based Prompts' },
                { '@type': 'ListItem', position: 2, name: 'Loop-Based Prompts' },
                { '@type': 'ListItem', position: 3, name: 'Role-Based Prompts' },
                { '@type': 'ListItem', position: 4, name: 'Example Workflows' },
              ],
            },
          }),
        }}
      />
    </main>
  )
}
