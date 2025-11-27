import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const pages = [
  // Home
  { slug: '', title: 'Home', description: 'Loop Revenue System - Transform your revenue operations', showInMainNav: false, navOrder: 0, parentSlug: null },

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
            sections: [],
          }
        })
        results.push({ page: page.title, status: 'created' })
      } else {
        // Update existing pages with correct data
        await prisma.page.update({
          where: { slug: page.slug },
          data: {
            title: page.title,
            description: page.description,
            showInMainNav: page.showInMainNav || false,
            showInFooterNav: page.showInFooterNav || false,
            navOrder: page.navOrder || 0,
            parentSlug: page.parentSlug,
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
