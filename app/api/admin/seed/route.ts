import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { DESIGNED_PAGE_SLUGS } from '@/lib/content/designed-pages'

/**
 * SEED DATABASE ROUTE
 *
 * WHAT THIS DOES:
 * - Creates/updates page METADATA in the database (titles, descriptions, SEO fields)
 * - Sets navigation settings (showInMainNav, navOrder, parentSlug)
 *
 * WHAT THIS DOES NOT DO:
 * - Does NOT create or modify page CONTENT
 * - Does NOT affect designed page components
 * - Does NOT require rebuilding the app
 *
 * PAGE CONTENT ARCHITECTURE:
 * - Designed pages (What Is, Stages, Data/Metrics) have content hardcoded in React components
 * - These pages are listed in: lib/content/designed-pages.ts
 * - To update content on designed pages, edit the page.tsx file and redeploy
 * - The database only stores metadata for SEO and navigation purposes
 */

const pages = [
  // Home page - has dedicated designed component at app/(public)/page.tsx
  {
    slug: '',
    title: 'Loop Revenue System',
    description: 'Build a revenue system that learns from every conversation. Turn marketing, sales, service, and ops into one continuous loop.',
    showInMainNav: false,
    navOrder: 0,
    parentSlug: null,
    metaTitle: 'Loop Revenue System | Build a Revenue System That Learns',
    metaDescription: 'The Loop Revenue System helps you run your entire go-to-market engine as one connected, learning system. Free playbooks, templates, and guides.',
  },

  // Overview section - "What Is" page has dedicated component at app/(public)/overview/loop-revenue-system/page.tsx
  {
    slug: 'overview/loop-revenue-system',
    title: 'What Is the Loop Revenue System',
    description: 'A simple way to run revenue as a continuous learning system. Four connected loops (Marketing, Sales, Service, and Ops) moving through Express, Tailor, Amplify, and Evolve.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'overview',
    metaTitle: 'What Is the Loop Revenue System | Complete Overview',
    metaDescription: 'Learn how the Loop Revenue System transforms your revenue engine into four connected loops (Marketing, Sales, Service, Ops) that share data, insights, and responsibility.',
  },
  {
    slug: 'overview/stages',
    title: 'Stages: Express, Tailor, Amplify, Evolve',
    description: 'The four stages every loop passes through. Learn how to Express your strategy, Tailor it to real people, Amplify what works, and Evolve based on results.',
    showInMainNav: false,
    navOrder: 2,
    parentSlug: 'overview',
    metaTitle: 'The Four Stages | Express, Tailor, Amplify, Evolve',
    metaDescription: 'Understanding the four stages of the Loop Revenue System: Express, Tailor, Amplify, and Evolve. A shared pattern that makes revenue operations simple.',
  },
  {
    slug: 'overview/data-metrics-governance',
    title: 'Data, Metrics, and Governance',
    description: 'How to manage data quality, define shared metrics, and establish governance across your revenue loops.',
    showInMainNav: false,
    navOrder: 3,
    parentSlug: 'overview',
    metaTitle: 'Data, Metrics & Governance | Loop Revenue System',
    metaDescription: 'Learn how to manage data, metrics, and governance across your revenue loops for better alignment and decision-making.',
  },

  // Loops section
  {
    slug: 'loops',
    title: 'The Four Loops',
    description: 'Your revenue engine is made of four connected loops: Marketing, Sales, Service, and Ops. Each shares data, insights, and responsibility for revenue.',
    showInMainNav: true,
    navOrder: 2,
    parentSlug: null,
    metaTitle: 'The Four Loops | Marketing, Sales, Service, Ops',
    metaDescription: 'Explore the four loops of the Loop Revenue System: Marketing, Sales, Service, and Ops. Learn how they work together.',
  },
  {
    slug: 'loops/marketing',
    title: 'Loop Marketing',
    description: 'Learn what to say, who to say it to, and where to show up. Marketing discovers, tests, and shares insights across the revenue system.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'loops',
    metaTitle: 'Loop Marketing | Content, Campaigns & Demand Generation',
    metaDescription: 'Loop Marketing is how you learn what to say, who to say it to, and where to show up. Discover the marketing loop of the Loop Revenue System.',
  },
  {
    slug: 'loops/sales',
    title: 'Loop Sales',
    description: 'Help the right people make clear decisions. Every conversation is a data point that feeds back into the system.',
    showInMainNav: false,
    navOrder: 2,
    parentSlug: 'loops',
    metaTitle: 'Loop Sales | Helping Buyers Decide with Confidence',
    metaDescription: 'Loop Sales helps the right people make clear decisions. Learn how the sales loop captures insights and improves targeting.',
  },
  {
    slug: 'loops/service',
    title: 'Loop Service',
    description: 'Keep customers successful after they buy. Support tickets, onboarding, and Q&A reveal what customers really experience.',
    showInMainNav: false,
    navOrder: 3,
    parentSlug: 'loops',
    metaTitle: 'Loop Service | Customer Success & Support',
    metaDescription: 'Loop Service keeps customers successful after they buy. Learn how service insights feed back into marketing and sales.',
  },
  {
    slug: 'loops/ops',
    title: 'Loop Ops',
    description: 'Connect data, tools, and processes so the loops work as one system. Operations is the backbone of the revenue engine.',
    showInMainNav: false,
    navOrder: 4,
    parentSlug: 'loops',
    metaTitle: 'Loop Ops | Data, Tools & Process Integration',
    metaDescription: 'Loop Ops connects data, tools, and processes so the other loops work as one system. The backbone of the Loop Revenue System.',
  },

  // Playbooks section
  {
    slug: 'playbooks/system',
    title: 'System Playbooks',
    description: 'Practical playbooks for implementing the Loop Revenue System in your organization. Start small, learn fast, and scale what works.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'playbooks',
    metaTitle: 'System Playbooks | Loop Revenue Implementation',
    metaDescription: 'Practical playbooks for implementing the Loop Revenue System. Step-by-step guides to get started.',
  },
  {
    slug: 'playbooks/hubspot',
    title: 'HubSpot Implementation',
    description: 'How to implement the Loop Revenue System using HubSpot. Map loops and stages to hubs, objects, workflows, and dashboards.',
    showInMainNav: false,
    navOrder: 2,
    parentSlug: 'playbooks',
    metaTitle: 'HubSpot Implementation | Loop Revenue System',
    metaDescription: 'Implement the Loop Revenue System with HubSpot. Map loops to hubs, stages to workflows, and build connected dashboards.',
  },
  {
    slug: 'playbooks/no-hubspot',
    title: 'Implementation Without HubSpot',
    description: 'Build the Loop Revenue System with other tools. The principles work with any CRM, help desk, and marketing platform.',
    showInMainNav: false,
    navOrder: 3,
    parentSlug: 'playbooks',
    metaTitle: 'No HubSpot? No Problem | Loop Revenue System',
    metaDescription: 'Implement the Loop Revenue System without HubSpot. Use any CRM, help desk, or marketing platform.',
  },
  {
    slug: 'playbooks/ai-and-humans',
    title: 'AI and Humans in the Loop',
    description: 'Where AI can safely assist and where humans must stay in charge. Find the balance for your revenue system.',
    showInMainNav: false,
    navOrder: 4,
    parentSlug: 'playbooks',
    metaTitle: 'AI and Humans | Balancing Automation and Judgment',
    metaDescription: 'Learn where AI can assist in the Loop Revenue System and where humans must stay in charge. Balance automation with judgment.',
  },

  // Roles section
  {
    slug: 'roles/start-here',
    title: 'Start Here',
    description: 'Not sure where to begin? Find your path based on your role and what you want to accomplish.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'roles',
    metaTitle: 'Start Here | Find Your Path in the Loop Revenue System',
    metaDescription: 'New to the Loop Revenue System? Start here to find guidance based on your role and goals.',
  },
  {
    slug: 'roles/leadership-revops',
    title: 'For Leaders and RevOps',
    description: 'How executives and revenue operations professionals can use the Loop Revenue System to align teams and drive results.',
    showInMainNav: false,
    navOrder: 2,
    parentSlug: 'roles',
    metaTitle: 'For Leaders & RevOps | Loop Revenue System',
    metaDescription: 'How executives and RevOps professionals can use the Loop Revenue System to align teams and drive revenue.',
  },

  // Resources section
  {
    slug: 'resources/templates-checklists',
    title: 'Templates and Checklists',
    description: 'Ready-to-use templates and checklists to implement the Loop Revenue System in your organization.',
    showInMainNav: false,
    navOrder: 1,
    parentSlug: 'resources',
    metaTitle: 'Templates & Checklists | Loop Revenue Resources',
    metaDescription: 'Download ready-to-use templates and checklists for implementing the Loop Revenue System.',
  },
  {
    slug: 'resources/prompts-workflows',
    title: 'AI Prompts and Workflows',
    description: 'AI prompts and automation workflows to accelerate your Loop Revenue System implementation.',
    showInMainNav: false,
    navOrder: 2,
    parentSlug: 'resources',
    metaTitle: 'AI Prompts & Workflows | Loop Revenue Resources',
    metaDescription: 'AI prompts and automation workflows for the Loop Revenue System. Speed up implementation with ready-to-use resources.',
  },
  {
    slug: 'resources/case-studies',
    title: 'Case Studies',
    description: 'Real-world examples of companies implementing the Loop Revenue System and the results they achieved.',
    showInMainNav: false,
    navOrder: 3,
    parentSlug: 'resources',
    metaTitle: 'Case Studies | Loop Revenue System in Action',
    metaDescription: 'See how companies implement the Loop Revenue System and the results they achieve. Real-world examples and lessons.',
  },
  {
    slug: 'resources/workshops-exercises',
    title: 'Workshops and Exercises',
    description: 'Interactive workshops and exercises to help your team learn and apply the Loop Revenue System.',
    showInMainNav: false,
    navOrder: 4,
    parentSlug: 'resources',
    metaTitle: 'Workshops & Exercises | Loop Revenue Training',
    metaDescription: 'Interactive workshops and exercises for learning the Loop Revenue System. Train your team on loops and stages.',
  },
  {
    slug: 'resources/faq',
    title: 'FAQ',
    description: 'Frequently asked questions about the Loop Revenue System, implementation, and getting started.',
    showInMainNav: false,
    navOrder: 5,
    parentSlug: 'resources',
    metaTitle: 'FAQ | Loop Revenue System Questions Answered',
    metaDescription: 'Answers to frequently asked questions about the Loop Revenue System. Get clarity on concepts, implementation, and more.',
  },

  // Legal pages
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your information.',
    showInMainNav: false,
    showInFooterNav: true,
    navOrder: 1,
    parentSlug: null,
    metaTitle: 'Privacy Policy | Loop Revenue System',
    metaDescription: 'Loop Revenue System privacy policy. How we collect, use, and protect your information.',
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    description: 'Terms and conditions for using the Loop Revenue System website.',
    showInMainNav: false,
    showInFooterNav: true,
    navOrder: 2,
    parentSlug: null,
    metaTitle: 'Terms of Use | Loop Revenue System',
    metaDescription: 'Terms and conditions for using the Loop Revenue System website and resources.',
  },
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
            sections: [], // Pages use designed components, not CMS sections
            metaTitle: page.metaTitle || null,
            metaDescription: page.metaDescription || null,
          }
        })
        results.push({ slug: page.slug, page: page.title, status: 'created' })
      } else {
        // Update existing page metadata
        // Always clear sections - pages should use designed components
        await prisma.page.update({
          where: { slug: page.slug },
          data: {
            title: page.title,
            description: page.description,
            showInMainNav: page.showInMainNav || false,
            showInFooterNav: page.showInFooterNav || false,
            navOrder: page.navOrder || 0,
            parentSlug: page.parentSlug,
            sections: [], // Clear any existing sections
            // Update SEO if not already set
            ...(page.metaTitle && !existing.metaTitle && { metaTitle: page.metaTitle }),
            ...(page.metaDescription && !existing.metaDescription && { metaDescription: page.metaDescription }),
          }
        })
        results.push({ slug: page.slug, page: page.title, status: 'updated' })
      }
    }

    // Count designed vs placeholder pages
    const designedCount = results.filter(r => DESIGNED_PAGE_SLUGS.includes(r.slug as any)).length
    const placeholderCount = results.length - designedCount

    return NextResponse.json({
      success: true,
      message: 'Page metadata updated successfully',
      summary: {
        total: results.length,
        designedPages: designedCount,
        placeholderPages: placeholderCount,
      },
      note: 'This only updates metadata (titles, descriptions, SEO). Page CONTENT is in React components - edit the page.tsx files to change content.',
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
