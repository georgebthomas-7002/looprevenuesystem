import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// Home page content as HTML for WYSIWYG editor
const homePageContent = `
<h2>Build a Revenue System That Learns From Every Conversation</h2>

<p><em>Turn Marketing, Sales, Service, and Ops Into One Continuous Loop</em></p>

<p>The Loop Revenue System helps you run your entire go-to-market engine as one connected, learning system. Instead of separate funnels and handoffs, you get four loops that share data, insights, and responsibility for revenue.</p>

<p>This site teaches you how to build that system in your own world. There is nothing to buy here—just clear explanations, examples, and playbooks you can take back to your team.</p>

<h2>You Are In The Right Place If You Own Revenue</h2>

<p>You care about revenue, relationships, and repeatable growth. You are tired of seeing marketing, sales, service, and ops pull in different directions.</p>

<p>You might be a CEO who wants a system that makes revenue more predictable and less reactive. You might own RevOps and feel stuck translating between teams and tools. You might run marketing, sales, or service and feel that your part of the engine works, but the whole machine still jerks and stalls.</p>

<p>You could be the HubSpot admin or systems builder who lives in the CRM all day and wishes there were a clearer blueprint behind every field, workflow, and dashboard.</p>

<h3>For Leaders</h3>
<p>Learn how to talk about revenue as one system, not separate departments. Set direction, define shared metrics, and sponsor change without getting lost in tool jargon.</p>

<h3>For Operators &amp; Admins</h3>
<p>Get practical guidance on data models, lifecycle stages, automation, and governance. Connect what the business wants to what the tools actually do.</p>

<h3>For Team Members</h3>
<p>Find plain-language playbooks you can apply in your next campaign, deal cycle, or onboarding sequence—without waiting for a full reorg.</p>

<h2>What Is The Loop Revenue System?</h2>

<p>A way to run revenue as a continuous loop instead of a one-way funnel. Four loops work together, each moving through the same four stages.</p>

<h3>The Four Loops</h3>
<ul>
  <li><strong>Loop Marketing</strong> — Discovers what to say, who to say it to, and where to show up</li>
  <li><strong>Loop Sales</strong> — Helps the right people decide with confidence</li>
  <li><strong>Loop Service</strong> — Keeps customers successful, supported, and ready to stay</li>
  <li><strong>Loop Ops</strong> — Connects the tools, data, and processes that make this possible</li>
</ul>

<h3>The Four Stages</h3>
<ul>
  <li><strong>Express</strong> — Decide how you show up. Each team gets clear on its strategy, voice, and process.</li>
  <li><strong>Tailor</strong> — Make it personal and contextual. Stop acting like every contact is the same.</li>
  <li><strong>Amplify</strong> — Scale what works. Take what is working and help it reach more people.</li>
  <li><strong>Evolve</strong> — Learn and improve every cycle. Look honestly at what happened and change the system so the next loop is stronger.</li>
</ul>

<h2>Built For AI And Humans, Not One Or The Other</h2>

<p>AI is part of the world your revenue engine now lives in. Ignoring it slows you down. Trusting it blindly puts your customers and your brand at risk.</p>

<p>The Loop Revenue System helps you find the balance. AI can help you research faster, spot patterns in your data, personalize at scale, and keep an eye on your numbers in the background. Humans set the strategy, choose the trade-offs, handle exceptions, and build the relationships.</p>

<p>This site shows you where AI can safely assist in each stage of each loop, and where a human must stay in the loop.</p>

<blockquote>The system comes first. AI and tools serve the system, not the other way around.</blockquote>

<h2>How To Use This Site</h2>

<p>You do not need to read every page before you act. Move from insight to implementation in short steps.</p>

<ol>
  <li><strong>Learn the Model</strong> — Start by understanding why the Loop Revenue System exists, how it compares to funnels and flywheels, and why it matters now.</li>
  <li><strong>Follow Your Path</strong> — Get guidance for your specific role. See what to care about, which loops to focus on, and which pages to read in what order.</li>
  <li><strong>Apply and Improve</strong> — Ready to build? The playbooks walk you through concrete workflows, metrics, and experiments you can implement today.</li>
</ol>

<p><em>The pattern stays the same: Learn a piece of the system. Apply it in your context. Watch what happens. Adjust. Then move to the next piece.</em></p>

<h2>Choose Your Next Step</h2>

<p>You came here for a reason. Maybe you want more predictable revenue. Maybe you want less friction between teams. Maybe you want your data and tools to finally feel like they belong to one system.</p>

<p>You do not need a hundred new ideas. You need one clear next move.</p>

<p><a href="/overview/loop-revenue-system">Understand the Full Model</a> — If you want to understand the system before you change anything, start with the complete overview.</p>

<p><a href="/roles/start-here">Get a Guided Path</a> — If you know your role and want a path that speaks directly to your work, start here.</p>

<p><em>Pick the path that feels most useful right now. You can explore the rest of the Loop Revenue System once you have taken that next step.</em></p>
`

// Section structure for home page with rich content
const homePageSections = [
  {
    id: 'home-content-1',
    type: 'content',
    props: {
      body: homePageContent,
      maxWidth: 'default'
    }
  }
]

const pages = [
  // Home - with pre-populated content
  {
    slug: '',
    title: 'Loop Revenue System',
    description: 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
    showInMainNav: false,
    navOrder: 0,
    parentSlug: null,
    sections: homePageSections,
    metaTitle: 'Loop Revenue System | Build a Revenue System That Learns',
    metaDescription: 'The Loop Revenue System helps you run your entire go-to-market engine as one connected, learning system. Free playbooks, templates, and guides.',
  },

  // Overview section (in header dropdown)
  { slug: 'overview/loop-revenue-system', title: 'What Is the Loop Revenue System', description: 'Complete overview of the Loop Revenue System', showInMainNav: false, navOrder: 1, parentSlug: 'overview' },
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

        await prisma.page.update({
          where: { slug: page.slug },
          data: {
            title: page.title,
            description: page.description,
            showInMainNav: page.showInMainNav || false,
            showInFooterNav: page.showInFooterNav || false,
            navOrder: page.navOrder || 0,
            parentSlug: page.parentSlug,
            // Only update sections if they're predefined and existing is empty
            ...(shouldUpdateSections && { sections: page.sections }),
            // Update SEO if not already set
            ...(page.metaTitle && !existing.metaTitle && { metaTitle: page.metaTitle }),
            ...(page.metaDescription && !existing.metaDescription && { metaDescription: page.metaDescription }),
          }
        })
        results.push({ page: page.title, status: 'updated' })
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
