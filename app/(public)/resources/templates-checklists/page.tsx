import { Metadata } from 'next'
import Link from 'next/link'
import { CopyButton, TemplateBlock } from './components'

export const metadata: Metadata = {
  title: 'Templates & Checklists | Loop Revenue System',
  description: 'Practical templates and checklists to implement the Loop Revenue System. Copy-and-paste tools for stages, loops, leadership, data governance, and AI collaboration.',
  openGraph: {
    title: 'Templates & Checklists | Loop Revenue System',
    description: 'Practical templates and checklists to implement the Loop Revenue System. Copy-and-paste tools for stages, loops, leadership, data governance, and AI collaboration.',
  },
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

// Template content strings
const templates = {
  expressBrief: `## Express Stage Brief

**Loop:** (Marketing, Sales, Service, Ops)
**Owner:**
**Date:**

### 1. Who is this for?
- Role or persona:
- Segment or account type:
- Stage in their journey:

### 2. What problem do they think they have?
- Their words:
- Common triggers or situations:

### 3. What problem do we believe they actually have?
- Our diagnosis:
- Why this matters for them and for us:

### 4. What are we trying to express?
- Core message:
- Supporting points:
- Boundaries (what we will not promise):

### 5. Success looks like:
- For them:
- For us:
- How we will know:`,

  tailorPlan: `## Tailor Stage Plan

**Loop:** (Marketing, Sales, Service, Ops)
**Owner:**
**Date:**

### 1. Segment or Context
- Who are we tailoring for?
- What makes this segment different?
- What signals tell us someone belongs here?

### 2. Current Experience
- What do they see/receive today?
- Where does it feel generic or misaligned?

### 3. Tailored Experience
- What will change for this segment?
- Content adjustments:
- Process adjustments:
- Timing adjustments:

### 4. Personalization Inputs
- What data do we need?
- Where does it live?
- How do we keep it accurate?

### 5. Guardrails
- What should we NOT personalize?
- Privacy and consent considerations:

### 6. Success Metrics
- How do we know tailoring is working?
- Metric to watch:
- Comparison baseline:`,

  amplifyReview: `## Amplify Stage Review

**Loop:** (Marketing, Sales, Service, Ops)
**Owner:**
**Date:**

### 1. What are we amplifying?
- Process, content, or motion:
- Origin (who built it, when):

### 2. Why does it deserve scale?
- Evidence it works (data, stories):
- Who benefits when we scale it?

### 3. Current reach
- Volume or frequency today:
- Manual effort required:

### 4. Amplification plan
- Automation or workflow to add:
- Tools involved:
- Owner of the build:

### 5. Quality checks
- How do we prevent quality loss at scale?
- Review cadence:
- Kill switch if it breaks:

### 6. Expected impact
- Volume or frequency after:
- Time or effort saved:
- Revenue or experience improvement:`,

  evolveRetrospective: `## Evolve Stage Retrospective

**Loop:** (Marketing, Sales, Service, Ops)
**Owner:**
**Date:**

### 1. What did we set out to do?
- Original goal:
- Timeframe:
- Success criteria we defined:

### 2. What actually happened?
- Outcomes:
- Surprises (good and bad):
- Data snapshot:

### 3. What did we learn?
- About our customers:
- About our process:
- About our assumptions:

### 4. What will we change?
- Keep doing:
- Stop doing:
- Start doing:

### 5. Who needs to know?
- Teams to share with:
- Documentation to update:
- Training or onboarding changes:

### 6. Next experiment
- Based on this learning, what's the next test?
- Hypothesis:
- Owner:`,

  marketingCampaignBrief: `## Marketing Loop: Campaign Brief

**Campaign Name:**
**Owner:**
**Launch Date:**

### Audience
- Primary segment:
- Secondary segment:
- Exclusions:

### Message
- Core value proposition:
- Key proof points:
- Call to action:

### Channels
- [ ] Email
- [ ] Social (organic)
- [ ] Social (paid)
- [ ] Website/Landing page
- [ ] Events/Webinars
- [ ] Partners
- [ ] Other:

### Stage Alignment
- Express: What are we saying about who we are?
- Tailor: How are we personalizing by segment?
- Amplify: What's automated vs. manual?
- Evolve: How will we measure and learn?

### Success Metrics
- Primary KPI:
- Target:
- Tracking method:

### Handoff to Sales
- Lead qualification criteria:
- SLA for follow-up:
- Materials for Sales:`,

  salesDealReview: `## Sales Loop: Deal Review Template

**Account Name:**
**Owner:**
**Stage:**
**Close Date (Expected):**

### Deal Snapshot
- Deal size:
- Products/Services:
- Contract length:

### Qualification Check
- Budget confirmed: [ ] Yes [ ] No [ ] Unknown
- Decision maker identified: [ ] Yes [ ] No
- Timeline clear: [ ] Yes [ ] No
- Pain validated: [ ] Yes [ ] No

### Stage Progress
- Express: Do they understand what we do?
- Tailor: Have we customized our pitch to their needs?
- Amplify: Are we using our best materials and processes?
- Evolve: What have we learned from this deal?

### Risks & Blockers
- Top risk:
- Mitigation plan:

### Next Steps
- Action:
- Owner:
- Due date:

### Win/Loss Notes (after close)
- Outcome:
- Primary reason:
- Learning for future deals:`,

  serviceOnboardingChecklist: `## Service Loop: Onboarding Checklist

**Customer Name:**
**Owner:**
**Start Date:**
**Target First Value Date:**

### Pre-Kickoff
- [ ] Contract signed and processed
- [ ] Handoff notes received from Sales
- [ ] Internal team assigned
- [ ] Customer contacts confirmed
- [ ] Kickoff meeting scheduled

### Kickoff
- [ ] Introductions complete
- [ ] Goals and success criteria defined
- [ ] Timeline and milestones agreed
- [ ] Communication cadence set
- [ ] Access and permissions granted

### Implementation
- [ ] Technical setup complete
- [ ] Data migration (if applicable)
- [ ] Initial configuration done
- [ ] Training sessions scheduled
- [ ] Documentation shared

### First Value
- [ ] Customer achieved first meaningful outcome
- [ ] Feedback collected
- [ ] Adjustments made based on feedback
- [ ] Success shared internally

### Transition to Ongoing
- [ ] CSM/Support handoff complete
- [ ] Health score baseline set
- [ ] Renewal/expansion timeline noted
- [ ] Feedback loop established

### Stage Notes
- Express: Did we set clear expectations?
- Tailor: Did we adapt to their specific context?
- Amplify: Did we use our best onboarding motions?
- Evolve: What do we need to improve for next time?`,

  serviceHealthReview: `## Service Loop: Customer Health Review

**Customer Name:**
**CSM/Owner:**
**Review Date:**

### Health Signals
| Signal | Status | Notes |
|--------|--------|-------|
| Product usage | Green/Yellow/Red | |
| Support tickets | Green/Yellow/Red | |
| Engagement (meetings, responses) | Green/Yellow/Red | |
| NPS/CSAT | Green/Yellow/Red | |
| Payment status | Green/Yellow/Red | |

### Overall Health: [ ] Healthy [ ] At Risk [ ] Critical

### What's Working
-
-

### What's Concerning
-
-

### Actions
| Action | Owner | Due |
|--------|-------|-----|
| | | |
| | | |

### Expansion Opportunities
- Upsell potential:
- Cross-sell potential:
- Timeline:

### Renewal Notes
- Renewal date:
- Risk level:
- Prep needed:`,

  opsProcessDoc: `## Ops Loop: Process Documentation

**Process Name:**
**Owner:**
**Last Updated:**

### Purpose
- What problem does this process solve?
- Who benefits?

### Trigger
- What starts this process?
- Frequency:

### Steps
1. Step:
   - Who:
   - Tool:
   - Output:

2. Step:
   - Who:
   - Tool:
   - Output:

3. Step:
   - Who:
   - Tool:
   - Output:

(Add more steps as needed)

### Outputs
- What gets created or updated?
- Where does it go?

### Dependencies
- Upstream processes:
- Downstream processes:
- Tools required:

### Failure Modes
- What can go wrong?
- How do we detect it?
- Who to notify?

### Stage Lens
- Express: Is the process clearly defined and understood?
- Tailor: Does it adapt to different contexts?
- Amplify: Is it automated where it should be?
- Evolve: When do we review and improve it?`,

  opsChangeRequest: `## Ops Loop: Change Request

**Change Name:**
**Requester:**
**Date:**
**Priority:** [ ] Low [ ] Medium [ ] High [ ] Critical

### What's Changing?
- System/Tool:
- Current state:
- Proposed state:

### Why?
- Problem being solved:
- Impact if we don't change:
- Benefit of the change:

### Who's Affected?
- Teams:
- Processes:
- Customers (if any):

### Dependencies
- Other systems impacted:
- Data migrations needed:
- Training required:

### Rollout Plan
- [ ] Staging/test environment
- [ ] Limited pilot
- [ ] Full rollout
- Timeline:

### Rollback Plan
- If it fails, how do we revert?
- Owner of rollback:

### Approvals
- [ ] RevOps
- [ ] IT/Security
- [ ] Affected team leads
- [ ] Leadership (if needed)

### Post-Change Review
- Date:
- Outcome:
- Learnings:`,

  leadershipLoopReview: `## Leadership: Monthly Loop Review

**Date:**
**Attendees:**

### Loop Health Snapshot

| Loop | Health | Top Signal | Focus Area |
|------|--------|------------|------------|
| Marketing | Green/Yellow/Red | | |
| Sales | Green/Yellow/Red | | |
| Service | Green/Yellow/Red | | |
| Ops | Green/Yellow/Red | | |

### Current Bottleneck
- Which loop?
- Which stage (Express, Tailor, Amplify, Evolve)?
- Evidence:

### Decisions Made This Month
1.
2.
3.

### Decisions Needed
1. Decision:
   - Options:
   - Owner:
   - Due:

### Plays In Progress
| Play | Loop | Stage | Status | Next Step |
|------|------|-------|--------|-----------|
| | | | | |
| | | | | |

### Next Month Focus
- Primary loop:
- Primary stage:
- Key metric to move:

### Notes for the Team
-`,

  leadershipQuarterlyReset: `## Leadership: Quarterly Loop & Stage Reset

**Quarter:**
**Date:**
**Attendees:**

### Last Quarter Review

#### What We Said We'd Focus On
-
-

#### What Actually Happened
-
-

#### Key Metrics
| Metric | Target | Actual | Trend |
|--------|--------|--------|-------|
| | | | |
| | | | |

#### Biggest Wins
1.
2.

#### Biggest Misses
1.
2.

### This Quarter Planning

#### Loop Priorities
Rank loops by investment priority (1 = highest):
- [ ] Marketing
- [ ] Sales
- [ ] Service
- [ ] Ops

Rationale:

#### Stage Focus by Loop
| Loop | Primary Stage | Why |
|------|---------------|-----|
| Marketing | | |
| Sales | | |
| Service | | |
| Ops | | |

#### Plays to Run
| Play | Loop | Stage | Owner | Timeline |
|------|------|-------|-------|----------|
| | | | | |
| | | | | |
| | | | | |

#### Resource Decisions
- Hiring:
- Budget shifts:
- Tool changes:

#### Success Criteria for Next Quarter
1.
2.
3.

### Communication Plan
- Who needs to know:
- How we'll share:
- When:`,

  revopsSystemAudit: `## RevOps: System Audit Checklist

**System/Tool:**
**Owner:**
**Audit Date:**

### Data Health
- [ ] Core objects have required fields populated
- [ ] Lifecycle stages are accurate
- [ ] Duplicates are under control
- [ ] Data hygiene processes are running

Issues found:

### Integration Health
- [ ] All integrations are active
- [ ] Data is syncing correctly
- [ ] Error logs are clean
- [ ] API limits are not being hit

Issues found:

### Workflow Health
- [ ] Active workflows are documented
- [ ] No conflicting automations
- [ ] Error rates are acceptable
- [ ] Notifications are reaching the right people

Issues found:

### User Health
- [ ] Active users match current team
- [ ] Permissions are appropriate
- [ ] Inactive users are deactivated
- [ ] Training needs are identified

Issues found:

### Reporting Health
- [ ] Key dashboards are accurate
- [ ] Reports match business questions
- [ ] Data sources are correct
- [ ] No broken reports

Issues found:

### Loop & Stage Alignment
- [ ] System supports Express clarity (definitions, templates)
- [ ] System supports Tailor (segmentation, personalization)
- [ ] System supports Amplify (automation, scale)
- [ ] System supports Evolve (analytics, feedback loops)

### Action Items
| Issue | Priority | Owner | Due |
|-------|----------|-------|-----|
| | | | |
| | | | |`,

  dataGovernanceChecklist: `## Data Governance Checklist

**Review Date:**
**Owner:**

### Data Collection
- [ ] We only collect data we actually use
- [ ] Collection methods are documented
- [ ] Consent is captured where required
- [ ] Data sources are known and trusted

### Data Storage
- [ ] Sensitive data is identified and protected
- [ ] Access is limited to those who need it
- [ ] Retention policies are defined
- [ ] Backup and recovery processes exist

### Data Quality
- [ ] Required fields are enforced
- [ ] Validation rules catch errors
- [ ] Duplicate detection is active
- [ ] Regular audits are scheduled

### Data Usage
- [ ] Dashboards reflect real business questions
- [ ] Metrics have clear definitions
- [ ] Teams trust the data they see
- [ ] Data informs decisions (not just reports)

### Data Sharing
- [ ] Internal sharing rules are clear
- [ ] External sharing is controlled
- [ ] Customer data requests are handled properly
- [ ] Third-party access is documented

### Compliance
- [ ] Privacy policies are current
- [ ] Deletion requests can be fulfilled
- [ ] Audit trails exist for sensitive data
- [ ] Team is trained on data handling

### Loop & Stage Notes
- Express: Are our data definitions clear and shared?
- Tailor: Can we segment without violating privacy?
- Amplify: Do our automations respect data rules?
- Evolve: Do we review and improve governance regularly?

### Issues & Actions
| Issue | Risk Level | Action | Owner |
|-------|------------|--------|-------|
| | | | |`,

  metricsDefinition: `## Metrics Definition Template

**Metric Name:**
**Owner:**
**Created:**
**Last Reviewed:**

### Definition
- What does this metric measure?
- Formula or calculation:
- Data source(s):

### Why It Matters
- Business question it answers:
- Decisions it informs:
- Loop it belongs to:
- Stage it reflects:

### How to Read It
- Higher is: [ ] Better [ ] Worse [ ] Depends
- Target or benchmark:
- Acceptable range:

### Segments
- How should this be broken down?
- (e.g., by team, segment, time period)

### Caveats & Limitations
- What this metric does NOT tell you:
- Known data quality issues:
- Edge cases:

### Related Metrics
- Leading indicators:
- Lagging indicators:
- Often confused with:

### Review Cadence
- How often do we look at this?
- Who reviews it?
- When do we update the definition?`,

  aiUseCaseReview: `## AI Use Case Review Checklist

**Use Case Name:**
**Owner:**
**Review Date:**

### Basics
- What is the AI doing?
- Which loop does it support?
- Which stage does it support?
- Who uses the output?

### Data & Privacy
- [ ] Training data is appropriate and consented
- [ ] Input data is clean and relevant
- [ ] Output does not expose sensitive information
- [ ] Data handling complies with our policies

### Accuracy & Quality
- [ ] Output quality is tested regularly
- [ ] Error rate is acceptable for this use case
- [ ] Edge cases are documented
- [ ] Fallback exists when AI fails

### Human Oversight
- [ ] Human reviews output before action (if needed)
- [ ] Clear escalation path for errors
- [ ] Users know when they're interacting with AI
- [ ] Override or correction process exists

### Customer Experience
- [ ] AI improves (not harms) customer experience
- [ ] Tone and language match our brand
- [ ] We would be comfortable explaining this to a customer
- [ ] Opt-out is available where appropriate

### Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Wrong output | Low/Med/High | | |
| Bias | Low/Med/High | | |
| Data leak | Low/Med/High | | |
| Customer complaint | Low/Med/High | | |

### Approval
- [ ] Data/Privacy review
- [ ] Quality review
- [ ] Leadership sign-off (if needed)

### Review Schedule
- Next review date:
- Trigger for immediate review:`,

  aiHumanHandoff: `## AI-Human Handoff Protocol

**Process Name:**
**Owner:**
**Last Updated:**

### When AI Handles
Conditions for AI to proceed without human:
-
-
-

### When Human Takes Over
Triggers for human handoff:
-
-
-

### Handoff Process
1. AI flags the situation:
   - Signal/tag:
   - Notification method:

2. Human receives context:
   - Information provided:
   - Where to find it:

3. Human takes action:
   - Expected response time:
   - Escalation if missed:

4. Resolution recorded:
   - Where:
   - What to capture:

### Quality Checks
- [ ] AI correctly identifies handoff triggers
- [ ] Humans receive timely notifications
- [ ] Context is sufficient for human action
- [ ] Handoffs are tracked and measured

### Metrics
- Volume of AI-handled vs. human-handled:
- Handoff accuracy rate:
- Time to human response:
- Customer satisfaction difference:

### Improvement Loop
- How do we learn from handoffs?
- How do we reduce unnecessary handoffs?
- How do we catch missed handoffs?`,

  adaptingTemplate: `## Adapting Templates To Your Stack

### CRM (HubSpot, Salesforce, etc.)
- Use templates as custom field structures or object designs
- Create saved views that match template sections
- Build workflows that follow checklist sequences
- Store completed templates as notes or linked documents

### Project Management (Asana, Monday, Notion, etc.)
- Convert templates into project or task templates
- Use checklist items as subtasks
- Create custom fields for key data points
- Set up recurring tasks for regular reviews

### Documentation (Confluence, Google Docs, Notion, etc.)
- Create template libraries for easy access
- Use headings as structured outlines
- Enable comments for collaborative completion
- Version control for improvements over time

### Spreadsheets (Excel, Google Sheets, etc.)
- Convert structured templates into row/column formats
- Create dropdown lists for common fields
- Use conditional formatting for status tracking
- Build summary dashboards from completed templates

### Whiteboard (Miro, FigJam, etc.)
- Use templates as facilitation guides
- Create visual versions with sticky notes
- Add timer boxes for workshop sessions
- Export completed boards as records

### Tips for Any Tool
1. Start with one template, not all of them
2. Remove sections you don't need
3. Add fields specific to your context
4. Review and improve after each use
5. Share improvements back with your team`,
}

export default function TemplatesChecklistsPage() {
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
                Templates & Checklists
              </h1>
              <p className="text-xl text-[#3D5A80] mb-6">
                Practical tools to put the Loop Revenue System to work.
              </p>
              <p className="text-text-secondary mb-4">
                This page is your kit. Templates and checklists help you go from
                "I like this model" to "We used it in a meeting and made a decision."
              </p>
              <p className="text-text-secondary">
                You will not see fancy PDFs or locked formats here. Just simple outlines,
                prompts, and checklists you can copy into your doc tool, whiteboard,
                project system, or CRM.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Template Library Visual */}
              <div className="relative w-full max-w-sm">
                <div className="grid grid-cols-3 gap-3">
                  {/* Template cards representing the library */}
                  {[
                    { color: '#028393', label: 'Express' },
                    { color: '#faaa68', label: 'Tailor' },
                    { color: '#f65625', label: 'Amplify' },
                    { color: '#3D5A80', label: 'Evolve' },
                    { color: '#142d63', label: 'Loops' },
                    { color: '#98C1D9', label: 'Data' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="aspect-[3/4] rounded-lg shadow-md flex flex-col items-center justify-center p-2"
                      style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}30` }}
                    >
                      <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke={item.color}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: item.color }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Central loop icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#142d63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
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
              <p className="text-text-secondary mb-6">
                Treat this page like a shelf of starting points.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Scroll until you see a template that fits your current challenge.
                </p>
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Click "Copy" to grab the template and paste it into your tool.
                </p>
                <p className="text-text-secondary flex items-start gap-2">
                  <span className="text-[#028393]">•</span>
                  Remove anything you do not need and add details from your world.
                </p>
              </div>
              <p className="text-text-secondary">
                You do not have to fill every field or use every checklist item.
                Make these lighter or heavier based on your team and your tools.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#E0FBFC] rounded-xl p-6">
                <h3 className="text-lg font-display font-bold text-brand-navy mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <QuickLink href="#templates-stages" label="Stage-Based Templates" color="#028393" />
                  <QuickLink href="#templates-loops" label="Loop-Specific Templates" color="#f65625" />
                  <QuickLink href="#templates-leadership-revops" label="Leadership & RevOps" color="#3D5A80" />
                  <QuickLink href="#templates-data-metrics" label="Data & Governance" color="#142d63" />
                  <QuickLink href="#templates-ai-humans" label="AI & Humans Guardrails" color="#faaa68" />
                  <QuickLink href="#templates-adapting" label="Adapting to Your Stack" color="#98C1D9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage-Based Templates */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="templates-stages"
            title="Stage-Based Templates"
            description="Shape work across all four loops with a stage lens for planning, reviews, or experiments."
            color="#028393"
          />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Express" color="#028393" />
              </div>
              <TemplateBlock
                title="Express Stage Brief"
                description="Clarify who you are serving and what you are trying to express before you build anything."
                content={templates.expressBrief}
                color="#028393"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Tailor" color="#faaa68" />
              </div>
              <TemplateBlock
                title="Tailor Stage Plan"
                description="Plan how to personalize experiences for specific segments or contexts."
                content={templates.tailorPlan}
                color="#faaa68"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Amplify" color="#f65625" />
              </div>
              <TemplateBlock
                title="Amplify Stage Review"
                description="Evaluate what deserves scale and plan how to amplify without losing quality."
                content={templates.amplifyReview}
                color="#f65625"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <StageBadge name="Evolve" color="#3D5A80" />
              </div>
              <TemplateBlock
                title="Evolve Stage Retrospective"
                description="Capture learnings and decide what to change based on real results."
                content={templates.evolveRetrospective}
                color="#3D5A80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loop-Specific Templates */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="templates-loops"
            title="Loop-Specific Templates"
            description="Templates designed for the unique needs of each loop."
            color="#f65625"
          />

          <div className="space-y-8">
            {/* Marketing */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#028393] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#028393]" />
                Marketing Loop
              </h3>
              <TemplateBlock
                title="Campaign Brief"
                description="Plan campaigns with stage alignment and clear handoffs to sales."
                content={templates.marketingCampaignBrief}
                color="#028393"
              />
            </div>

            {/* Sales */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#f65625] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#f65625]" />
                Sales Loop
              </h3>
              <TemplateBlock
                title="Deal Review Template"
                description="Review deals with qualification checks and stage progress tracking."
                content={templates.salesDealReview}
                color="#f65625"
              />
            </div>

            {/* Service */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#faaa68] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#faaa68]" />
                Service Loop
              </h3>
              <div className="space-y-4">
                <TemplateBlock
                  title="Onboarding Checklist"
                  description="Guide new customers from kickoff to first value with stage notes."
                  content={templates.serviceOnboardingChecklist}
                  color="#faaa68"
                />
                <TemplateBlock
                  title="Customer Health Review"
                  description="Assess customer health signals and plan actions."
                  content={templates.serviceHealthReview}
                  color="#faaa68"
                />
              </div>
            </div>

            {/* Ops */}
            <div>
              <h3 className="text-xl font-display font-bold text-[#3D5A80] mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#3D5A80]" />
                Ops Loop
              </h3>
              <div className="space-y-4">
                <TemplateBlock
                  title="Process Documentation"
                  description="Document processes with clear triggers, steps, and failure modes."
                  content={templates.opsProcessDoc}
                  color="#3D5A80"
                />
                <TemplateBlock
                  title="Change Request"
                  description="Request and track system changes with proper approvals and rollback plans."
                  content={templates.opsChangeRequest}
                  color="#3D5A80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & RevOps Templates */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="templates-leadership-revops"
            title="Leadership & RevOps Templates"
            description="Templates for cross-loop reviews, quarterly planning, and system audits."
            color="#3D5A80"
          />

          <div className="space-y-6">
            <TemplateBlock
              title="Monthly Loop Review"
              description="Leadership agenda for monthly cross-loop health check and decision making."
              content={templates.leadershipLoopReview}
              color="#3D5A80"
            />
            <TemplateBlock
              title="Quarterly Loop & Stage Reset"
              description="Comprehensive quarterly planning template for loop priorities and plays."
              content={templates.leadershipQuarterlyReset}
              color="#142d63"
            />
            <TemplateBlock
              title="RevOps System Audit"
              description="Checklist for auditing system health across data, integrations, workflows, and users."
              content={templates.revopsSystemAudit}
              color="#3D5A80"
            />
          </div>
        </div>
      </section>

      {/* Data, Metrics & Governance */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="templates-data-metrics"
            title="Data, Metrics & Governance"
            description="Templates and checklists for data quality, metric definitions, and governance."
            color="#142d63"
          />

          <div className="space-y-6">
            <TemplateBlock
              title="Data Governance Checklist"
              description="Review your data collection, storage, quality, usage, and compliance practices."
              content={templates.dataGovernanceChecklist}
              color="#142d63"
            />
            <TemplateBlock
              title="Metrics Definition Template"
              description="Define metrics clearly with formulas, context, caveats, and review cadence."
              content={templates.metricsDefinition}
              color="#3D5A80"
            />
          </div>

          <div className="mt-8 p-6 bg-[#98C1D9]/10 rounded-xl border border-[#98C1D9]/30">
            <p className="text-text-secondary flex items-center gap-2">
              <svg className="w-5 h-5 text-[#3D5A80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              For more context on data practices, see{' '}
              <Link href="/overview/data-metrics-governance" className="text-[#028393] hover:underline font-medium">
                Data, Metrics & Governance
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* AI & Humans Guardrails */}
      <section className="section-padding bg-[#E0FBFC]">
        <div className="container-content">
          <SectionHeader
            id="templates-ai-humans"
            title="AI & Humans Guardrails"
            description="Checklists for responsible AI use and human-AI collaboration."
            color="#faaa68"
          />

          <div className="space-y-6">
            <TemplateBlock
              title="AI Use Case Review Checklist"
              description="Evaluate AI use cases for data handling, accuracy, oversight, and customer impact."
              content={templates.aiUseCaseReview}
              color="#faaa68"
            />
            <TemplateBlock
              title="AI-Human Handoff Protocol"
              description="Define when AI handles vs. when humans take over, with clear handoff processes."
              content={templates.aiHumanHandoff}
              color="#3D5A80"
            />
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

      {/* Adapting Templates */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            id="templates-adapting"
            title="Adapting Templates To Your Stack"
            description="How to use these templates in your specific tools and systems."
            color="#98C1D9"
          />

          <TemplateBlock
            title="Stack Adaptation Guide"
            description="Tips for using templates in CRMs, project tools, docs, spreadsheets, and whiteboards."
            content={templates.adaptingTemplate}
            color="#98C1D9"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-[#142d63] to-[#1e3a5f]">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Start With One
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            You do not need all of these templates. You need one that matches where
            you are in your loop and in your week. Pick one, use it, adjust it,
            then come back for more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/playbooks/system"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f65625] text-white rounded-lg font-semibold hover:bg-[#e04d1f] transition-colors"
            >
              Explore System Playbooks
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/roles/start-here"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Find Your Path
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
            name: 'Templates & Checklists | Loop Revenue System',
            description: 'Practical templates and checklists to implement the Loop Revenue System.',
            mainEntity: {
              '@type': 'ItemList',
              name: 'Loop Revenue System Templates',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Stage-Based Templates' },
                { '@type': 'ListItem', position: 2, name: 'Loop-Specific Templates' },
                { '@type': 'ListItem', position: 3, name: 'Leadership & RevOps Templates' },
                { '@type': 'ListItem', position: 4, name: 'Data & Governance Checklists' },
                { '@type': 'ListItem', position: 5, name: 'AI & Humans Guardrails' },
              ],
            },
          }),
        }}
      />
    </main>
  )
}
