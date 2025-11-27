import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const pages = [
  // Home
  { slug: '', title: 'Home', description: 'Loop Revenue System - Transform your revenue operations', showInMainNav: false, navOrder: 0 },

  // Loops section
  { slug: 'loops', title: 'The Four Loops', description: 'Understanding the four interconnected loops of revenue operations', showInMainNav: true, navOrder: 1 },
  { slug: 'loops/marketing', title: 'Marketing Loop', description: 'Drive awareness and generate demand', showInMainNav: false, navOrder: 0 },
  { slug: 'loops/sales', title: 'Sales Loop', description: 'Convert opportunities into customers', showInMainNav: false, navOrder: 0 },
  { slug: 'loops/service', title: 'Service Loop', description: 'Deliver value and build relationships', showInMainNav: false, navOrder: 0 },
  { slug: 'loops/ops', title: 'Operations Loop', description: 'Optimize processes and enable growth', showInMainNav: false, navOrder: 0 },

  // Overview section
  { slug: 'overview/loop-revenue-system', title: 'Loop Revenue System Overview', description: 'Complete overview of the Loop Revenue System', showInMainNav: true, navOrder: 2 },
  { slug: 'overview/stages', title: 'Stages', description: 'Understanding the stages of revenue operations', showInMainNav: false, navOrder: 0 },
  { slug: 'overview/data-metrics-governance', title: 'Data, Metrics & Governance', description: 'Managing data and metrics for revenue success', showInMainNav: false, navOrder: 0 },

  // Playbooks section
  { slug: 'playbooks/system', title: 'System Playbook', description: 'Implementing the Loop Revenue System', showInMainNav: true, navOrder: 3 },
  { slug: 'playbooks/hubspot', title: 'HubSpot Playbook', description: 'Implementing with HubSpot', showInMainNav: false, navOrder: 0 },
  { slug: 'playbooks/no-hubspot', title: 'Non-HubSpot Playbook', description: 'Implementing without HubSpot', showInMainNav: false, navOrder: 0 },
  { slug: 'playbooks/ai-and-humans', title: 'AI and Humans', description: 'Balancing AI and human collaboration', showInMainNav: false, navOrder: 0 },

  // Resources section
  { slug: 'resources/case-studies', title: 'Case Studies', description: 'Real-world success stories', showInMainNav: false, navOrder: 0 },
  { slug: 'resources/faq', title: 'FAQ', description: 'Frequently asked questions', showInMainNav: false, navOrder: 0 },
  { slug: 'resources/prompts-workflows', title: 'Prompts & Workflows', description: 'AI prompts and workflow templates', showInMainNav: false, navOrder: 0 },
  { slug: 'resources/templates-checklists', title: 'Templates & Checklists', description: 'Ready-to-use templates and checklists', showInMainNav: false, navOrder: 0 },
  { slug: 'resources/workshops-exercises', title: 'Workshops & Exercises', description: 'Interactive learning materials', showInMainNav: false, navOrder: 0 },

  // Roles section
  { slug: 'roles/start-here', title: 'Start Here', description: 'Getting started with Loop Revenue System', showInMainNav: true, navOrder: 4 },
  { slug: 'roles/leadership-revops', title: 'Leadership & RevOps', description: 'For leaders and revenue operations professionals', showInMainNav: false, navOrder: 0 },

  // Legal
  { slug: 'privacy', title: 'Privacy Policy', description: 'Our privacy policy', showInFooterNav: true, navOrder: 1 },
  { slug: 'terms', title: 'Terms of Service', description: 'Terms of service', showInFooterNav: true, navOrder: 2 },
]

async function main() {
  console.log('Seeding database...')

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
          status: 'published',
          sections: [],
        }
      })
      console.log(`Created page: ${page.title}`)
    } else {
      console.log(`Page already exists: ${page.title}`)
    }
  }

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
