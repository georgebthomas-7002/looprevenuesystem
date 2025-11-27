import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// NOTE: Home page does NOT use CMS sections - it has a dedicated designed component
// We only store SEO metadata for the home page in the CMS

// What Is the Loop Revenue System page content
const whatIsLoopContent = `
<p class="lead"><strong>A simple way to run revenue as a continuous learning system.</strong></p>

<p>Most revenue models were built for a world of straight-line funnels and one-time deals. Buyers don't move that way anymore. They learn, compare, talk to peers, ask AI, buy, use, renew, and refer—in loops.</p>

<p>The Loop Revenue System matches that reality. It treats your revenue engine as four connected loops—Marketing, Sales, Service, and Ops—that all move through the same four stages: <strong>Express</strong>, <strong>Tailor</strong>, <strong>Amplify</strong>, and <strong>Evolve</strong>.</p>

<p>Instead of isolated campaigns and handoffs, you get one system that keeps learning every time you talk to a customer.</p>

<hr />

<h2>Why Funnels Are Not Enough Anymore</h2>

<p>Funnels tell a short story. People go in at the top, some drop out, a few reach the bottom—and that's the end. Useful for a single conversion step. Not so useful for a long relationship.</p>

<p>In real life, your best customers don't stop at the bottom of a funnel. They keep asking questions. They expand or downgrade. They refer others. They leave and sometimes come back. Every time they move, they send you signals.</p>

<p>Traditional funnel thinking misses most of those signals. It splits work into separate stages and departments:</p>

<ul>
  <li>Marketing owns the top</li>
  <li>Sales owns the middle</li>
  <li>Service owns the end</li>
  <li>Ops tries to stitch the tools together after the fact</li>
</ul>

<p>That creates familiar problems:</p>

<ul>
  <li><strong>Teams blame each other</strong> when targets slip</li>
  <li><strong>Important insights never leave</strong> the department that saw them</li>
  <li><strong>Data breaks</strong> and dashboards tell different stories</li>
  <li><strong>AI tools get added on top</strong> of a messy foundation—and make the mess louder</li>
</ul>

<p>The Loop Revenue System solves this by giving you a shared way to think about revenue that matches how people actually move and how modern teams work.</p>

<hr />

<h2>The Loop Revenue System In One Picture</h2>

<p>At the highest level, the Loop Revenue System says this:</p>

<blockquote>
Your revenue engine is made of four loops. Each loop runs the same four stages. All four loops share data, share insights, and share responsibility for revenue.
</blockquote>

<p>In <strong>Express</strong>, each loop decides how it will show up. In <strong>Tailor</strong>, it adapts that plan to real people. In <strong>Amplify</strong>, it scales what works. In <strong>Evolve</strong>, it learns from the results and adjusts.</p>

<p>All four loops run over and over again. When you improve one loop, you help the others spin more smoothly.</p>

<p>Another way to say it: the Loop Revenue System is a playbook for treating revenue as a living system instead of a one-time project.</p>

<hr />

<h2>The Four Loops</h2>

<h3>Loop Marketing</h3>
<p>Loop Marketing is how you learn what to say, who to say it to, and where to show up. It covers brand voice, content, campaigns, channels, and demand generation.</p>

<p>Marketing watches the questions people ask, the content they consume, and the messages that land. It then feeds those learnings into sales, service, and ops so the whole company speaks with more clarity and confidence.</p>

<h3>Loop Sales</h3>
<p>Loop Sales is how you help the right people make clear decisions.</p>

<p>Sales is not only about closing individual deals. In this system, every conversation is a data point. The questions prospects ask, the objections they raise, and the stories that move them all feed the loop.</p>

<p>Sales uses that learning to refine who they target, how they diagnose problems, and how they guide customers toward the best fit.</p>

<h3>Loop Service</h3>
<p>Loop Service is how you keep customers successful after they buy.</p>

<p>Support tickets, onboarding calls, training sessions, and Q&amp;A all reveal what customers really experience. Service teams see where things feel confusing, where value lands fast, and where people get stuck.</p>

<p>That insight feeds new content for marketing, better expectation-setting for sales, and product or process changes for the whole company.</p>

<h3>Loop Ops</h3>
<p>Loop Ops is the backbone. It connects data, tools, and processes so the other loops can work as one system.</p>

<p>Operations defines lifecycle stages, owns the CRM and key integrations, sets up automation, and builds the dashboards. It turns scattered activities into a coherent revenue engine.</p>

<p>When Ops works in a loop, it doesn't only fix broken reports. It studies how the system behaves, then improves it so the next cycle is cleaner, faster, and easier to manage.</p>

<hr />

<h2>The Four Stages</h2>

<p>Every loop passes through the same four stages. That shared pattern is what makes the Loop Revenue System simple to teach and easier to run.</p>

<h3>Express — Decide How You Show Up</h3>
<p>Express is where you clarify what you stand for and how you work.</p>

<ul>
  <li><strong>Marketing Express</strong> sets your point of view, core topics, and content strategy</li>
  <li><strong>Sales Express</strong> defines the ideal customer, your promises, and your deal stages</li>
  <li><strong>Service Express</strong> maps the customer journey after the sale and your support philosophy</li>
  <li><strong>Ops Express</strong> sets data standards, lifecycle definitions, and rules of engagement</li>
</ul>

<p>Without a strong Express stage, everything else feels scattered. With it, your team has a simple answer to "Who are we for?" and "What should we do next?"</p>

<h3>Tailor — Make It Personal and Contextual</h3>
<p>Tailor is where you bring the plan to life for real people.</p>

<ul>
  <li>In <strong>Marketing</strong>, Tailor means segmenting and personalizing campaigns so they match real needs</li>
  <li>In <strong>Sales</strong>, it means adjusting questions, demos, and proposals to each account</li>
  <li>In <strong>Service</strong>, it means responding with context instead of sending canned answers</li>
  <li>In <strong>Ops</strong>, it means configuring fields, workflows, and routing so they fit your business</li>
</ul>

<p>When Tailor is strong, customers feel seen—not processed.</p>

<h3>Amplify — Scale What Works</h3>
<p>Amplify is about reach and leverage.</p>

<ul>
  <li><strong>Marketing</strong> repurposes strong ideas across channels and formats</li>
  <li><strong>Sales</strong> shares winning motions and tools so more reps can use them</li>
  <li><strong>Service</strong> turns good answers into help center articles, videos, and training</li>
  <li><strong>Ops</strong> uses automation and integrations to reduce manual work</li>
</ul>

<p>The goal is simple: take what's working in one corner and make it easy for the rest of the system to use it.</p>

<h3>Evolve — Learn and Improve Every Cycle</h3>
<p>Evolve is where the loop becomes a loop. You look at what happened, connect the dots, and make changes so the next turn is better.</p>

<ul>
  <li><strong>Marketing</strong> reviews performance across channels, then adjusts offers and messages</li>
  <li><strong>Sales</strong> studies win/loss patterns and refines its process</li>
  <li><strong>Service</strong> tracks satisfaction and retention, then improves flows</li>
  <li><strong>Ops</strong> analyzes metrics across the whole system and finds bottlenecks</li>
</ul>

<p>Without Evolve, you repeat the same motions and hope for better results. With Evolve, you gain momentum.</p>

<hr />

<h2>How The Loops Work Together</h2>

<p>The four loops are powerful on their own. They are transformative when they talk to each other.</p>

<ul>
  <li><strong>Marketing</strong> shares what it learns from research, content, and campaigns</li>
  <li><strong>Sales</strong> uses that insight in conversations, then reports back on real objections</li>
  <li><strong>Service</strong> sees what customers actually do, then alerts the team to friction and value</li>
  <li><strong>Ops</strong> keeps the data and process clean so learning can move freely</li>
</ul>

<p>When the loops are healthy and connected:</p>

<ul>
  <li>A question that appears in support inspires a new article and a better sales answer</li>
  <li>A pattern in win/loss data changes your ICP and marketing strategy</li>
  <li>Feedback from service shapes the product and the promises sales makes</li>
  <li>Ops doesn't live in a separate world—it sits inside every decision</li>
</ul>

<p><strong>That's what it means to run revenue as one system instead of a collection of teams.</strong></p>

<hr />

<h2>AI and Humans Inside The Loop</h2>

<p>AI changes how fast loops can spin, but it doesn't replace people.</p>

<p><strong>AI has clear jobs:</strong></p>
<ul>
  <li>Research faster and spot patterns in data</li>
  <li>Draft content and outreach</li>
  <li>Suggest next best actions</li>
  <li>Monitor metrics and alert you when something unusual happens</li>
</ul>

<p><strong>Humans stay in charge of:</strong></p>
<ul>
  <li>Direction and judgment</li>
  <li>Setting guardrails for data and personalization</li>
  <li>Handling sensitive conversations</li>
  <li>Choosing which AI suggestions to accept, change, or reject</li>
</ul>

<p>The Loop Revenue System leans on AI where it adds leverage:</p>

<ul>
  <li>In <strong>Express</strong>, AI summarizes customer feedback so strategy starts with real input</li>
  <li>In <strong>Tailor</strong>, AI suggests segments and drafts personalized messages</li>
  <li>In <strong>Amplify</strong>, AI repurposes content and manages automation</li>
  <li>In <strong>Evolve</strong>, AI helps you see trends across large data sets</li>
</ul>

<blockquote>At every stage, humans stay accountable for outcomes and for how customers feel.</blockquote>

<hr />

<h2>With HubSpot and Without HubSpot</h2>

<p>You can use the Loop Revenue System with HubSpot or without it.</p>

<p><strong>With HubSpot:</strong> The loops and stages map naturally to hubs, objects, and features. Contacts, companies, deals, tickets, custom properties, lists, workflows, playbooks, and dashboards can all support your loops.</p>

<p><strong>Without HubSpot:</strong> You can still build the same system with a general CRM, a help desk, a marketing platform, and some spreadsheets. The principles stay the same.</p>

<p>The key is to <strong>think system first, tools second</strong>.</p>

<hr />

<h2>What This Means For Your Role</h2>

<p>Different people step into this system from different angles.</p>

<p><strong>If you're a CEO or founder:</strong> The Loop Revenue System gives you a clear story for revenue. It helps you see how marketing, sales, service, and ops should support each other.</p>

<p><strong>If you lead RevOps or operations:</strong> This model gives you a blueprint for data, process, and tooling. It helps you separate quick wins from structural fixes.</p>

<p><strong>If you lead marketing, sales, or service:</strong> Loops and stages help you turn your part of the business into a learning lab. Run smaller experiments, share what you learn, and show how your work drives revenue.</p>

<p><strong>If you're a HubSpot admin or system builder:</strong> The Loop Revenue System helps you design fields, workflows, and reports with a clear purpose. You're not just configuring features—you're shaping how the loops run.</p>

<p>No matter your title, the question stays the same: <em>Where can I help my loop Express more clearly, Tailor more thoughtfully, Amplify what works, and Evolve based on what we learn?</em></p>

<hr />

<h2>Get Started</h2>

<p>You don't need to rebuild everything at once. The best way to start is to understand the model, pick one small loop inside your business, and improve how it runs.</p>

<p><strong>Next step for big-picture thinkers:</strong></p>
<p><a href="/overview/stages">Four Loops and Four Stages Overview</a> — Deep dive on how the loops and stages fit together, with concrete examples and diagrams.</p>

<p><strong>Next step for action-oriented readers:</strong></p>
<p><a href="/roles/start-here">Start Here by Role</a> — Get a path tailored to your specific work.</p>

<blockquote>
<strong>If you only do one thing this week:</strong> Pick a single loop and stage, write down how you run it today, and ask one question—<em>What would it look like if this part of our revenue engine behaved like a loop, not a line?</em>
</blockquote>
`

// Section structure for What Is page
const whatIsLoopSections = [
  {
    id: 'what-is-content-1',
    type: 'content',
    props: {
      body: whatIsLoopContent,
      maxWidth: 'default'
    }
  }
]

const pages = [
  // Home - uses dedicated designed component, NOT CMS sections
  // Only SEO metadata is stored in CMS for the home page
  {
    slug: '',
    title: 'Loop Revenue System',
    description: 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
    showInMainNav: false,
    navOrder: 0,
    parentSlug: null,
    // NO sections - home page has a dedicated React component with designed layout
    metaTitle: 'Loop Revenue System | Build a Revenue System That Learns',
    metaDescription: 'The Loop Revenue System helps you run your entire go-to-market engine as one connected, learning system. Free playbooks, templates, and guides.',
  },

  // Overview section (in header dropdown)
  {
    slug: 'overview/loop-revenue-system',
    title: 'What Is the Loop Revenue System',
    description: 'A simple way to run revenue as a continuous learning system. Four connected loops—Marketing, Sales, Service, and Ops—moving through Express, Tailor, Amplify, and Evolve.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'overview',
    sections: whatIsLoopSections,
    metaTitle: 'What Is the Loop Revenue System | Complete Overview',
    metaDescription: 'Learn how the Loop Revenue System transforms your revenue engine into four connected loops (Marketing, Sales, Service, Ops) that share data, insights, and responsibility.',
  },
  { slug: 'overview/stages', title: 'Stages: Express, Tailor, Amplify, Evolve', description: 'Understanding the stages of revenue operations', showInMainNav: false, navOrder: 2, parentSlug: 'overview' },
  { slug: 'overview/data-metrics-governance', title: 'Data, Metrics, and Governance', description: 'Managing data and metrics for revenue success', showInMainNav: false, navOrder: 3, parentSlug: 'overview' },

  // Loops section
  { slug: 'loops', title: 'Four Loops Overview', description: 'Understanding the four interconnected loops of revenue operations', showInMainNav: true, navOrder: 2, parentSlug: null },
  { slug: 'loops/marketing', title: 'Loop Marketing', description: 'Drive awareness and generate demand', showInMainNav: false, navOrder: 1, parentSlug: 'loops' },
  { slug: 'loops/sales', title: 'Loop Sales', description: 'Convert opportunities into customers', showInMainNav: false, navOrder: 2, parentSlug: 'loops' },
  { slug: 'loops/service', title: 'Loop Service', description: 'Deliver value and build relationships', showInMainNav: false, navOrder: 3, parentSlug: 'loops' },
  { slug: 'loops/ops', title: 'Loop Ops', description: 'Optimize processes and enable growth', showInMainNav: false, navOrder: 4, parentSlug: 'loops' },

  // Playbooks section
  { slug: 'playbooks/system', title: 'System Playbooks', description: 'Implementing the Loop Revenue System', showInMainNav: false, navOrder: 1, parentSlug: 'playbooks' },
  { slug: 'playbooks/hubspot', title: 'HubSpot Implementation', description: 'Implementing with HubSpot', showInMainNav: false, navOrder: 2, parentSlug: 'playbooks' },
  { slug: 'playbooks/no-hubspot', title: 'No HubSpot Implementation', description: 'Implementing without HubSpot', showInMainNav: false, navOrder: 3, parentSlug: 'playbooks' },
  { slug: 'playbooks/ai-and-humans', title: 'AI and Humans', description: 'Balancing AI and human collaboration', showInMainNav: false, navOrder: 4, parentSlug: 'playbooks' },

  // Roles section
  { slug: 'roles/start-here', title: 'Start Here', description: 'Getting started with Loop Revenue System', showInMainNav: false, navOrder: 1, parentSlug: 'roles' },
  { slug: 'roles/leadership-revops', title: 'Leadership and RevOps', description: 'For leaders and revenue operations professionals', showInMainNav: false, navOrder: 2, parentSlug: 'roles' },

  // Resources section
  { slug: 'resources/templates-checklists', title: 'Templates and Checklists', description: 'Ready-to-use templates and checklists', showInMainNav: false, navOrder: 1, parentSlug: 'resources' },
  { slug: 'resources/prompts-workflows', title: 'Prompts and Workflows', description: 'AI prompts and workflow templates', showInMainNav: false, navOrder: 2, parentSlug: 'resources' },
  { slug: 'resources/case-studies', title: 'Case Studies', description: 'Real-world success stories', showInMainNav: false, navOrder: 3, parentSlug: 'resources' },
  { slug: 'resources/workshops-exercises', title: 'Workshops and Exercises', description: 'Interactive learning materials', showInMainNav: false, navOrder: 4, parentSlug: 'resources' },
  { slug: 'resources/faq', title: 'FAQ', description: 'Frequently asked questions', showInMainNav: false, navOrder: 5, parentSlug: 'resources' },

  // Legal
  { slug: 'privacy', title: 'Privacy Policy', description: 'Our privacy policy', showInMainNav: false, showInFooterNav: true, navOrder: 1, parentSlug: null },
  { slug: 'terms', title: 'Terms of Use', description: 'Terms of service', showInMainNav: false, showInFooterNav: true, navOrder: 2, parentSlug: null },
]

export async function POST() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { prisma } = await import('@/lib/prisma')

    const results = []

    for (const page of pages) {
      const existing = await prisma.page.findUnique({
        where: { slug: page.slug }
      })

      if (!existing) {
        await prisma.page.create({
          data: {
            slug: page.slug,
            title: page.title,
            description: page.description,
            showInMainNav: page.showInMainNav || false,
            showInFooterNav: page.showInFooterNav || false,
            navOrder: page.navOrder || 0,
            parentSlug: page.parentSlug,
            status: 'published',
            sections: page.sections || [],
            metaTitle: page.metaTitle || null,
            metaDescription: page.metaDescription || null,
          }
        })
        results.push({ page: page.title, status: 'created' })
      } else {
        // Update existing pages with correct data
        // Only update sections if the page has them defined and existing sections are empty
        const shouldUpdateSections = page.sections &&
          (!existing.sections || (Array.isArray(existing.sections) && existing.sections.length === 0))

        // Special case: home page should NEVER have sections (uses dedicated component)
        // Clear any existing sections that may have been added previously
        const isHomePage = page.slug === ''
        const shouldClearSections = isHomePage && existing.sections &&
          Array.isArray(existing.sections) && existing.sections.length > 0

        await prisma.page.update({
          where: { slug: page.slug },
          data: {
            title: page.title,
            description: page.description,
            showInMainNav: page.showInMainNav || false,
            showInFooterNav: page.showInFooterNav || false,
            navOrder: page.navOrder || 0,
            parentSlug: page.parentSlug,
            // Clear sections for home page, otherwise only update if predefined and existing is empty
            ...(shouldClearSections ? { sections: [] } : shouldUpdateSections ? { sections: page.sections } : {}),
            // Update SEO if not already set
            ...(page.metaTitle && !existing.metaTitle && { metaTitle: page.metaTitle }),
            ...(page.metaDescription && !existing.metaDescription && { metaDescription: page.metaDescription }),
          }
        })
        results.push({ page: page.title, status: shouldClearSections ? 'fixed' : 'updated' })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      results
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json({
      error: 'Failed to seed database',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
