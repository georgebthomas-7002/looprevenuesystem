import { getPageBySlug } from '@/lib/content/queries'
import { SectionRenderer } from '@/components/blocks/SectionRenderer'
import { JsonLd, generateWebPageSchema, generateOrganizationSchema } from '@/lib/seo'
import type { Section } from '@/lib/content/sections'

// Example home page sections for initial display (before CMS is populated)
const defaultHomeSections: Section[] = [
  {
    id: 'hero-1',
    type: 'heroWithDiagram',
    props: {
      headline: 'The Four Loops Of The Loop Revenue System',
      subtitle: 'How Marketing, Sales, Service, And Ops Become One Continuous System',
      body: 'Most organizations know they have marketing, sales, service, and operations. Fewer see them as four parts of one learning engine.\n\nThe Loop Revenue System gives each of these areas its own loop. Each loop has a clear purpose, clear inputs and outputs, and the same four stages: Express, Tailor, Amplify, and Evolve.',
      diagram: 'loopDiagram',
    },
  },
  {
    id: 'nav-1',
    type: 'navigationCards',
    props: {
      headline: 'Where To Go Next',
      subtitle: 'Now that you have the high level picture, you can dive deeper where it matters most.',
      cards: [
        {
          title: 'Loop Deep Dives',
          description: 'Study each loop in detail, including workflows, metrics, and examples.',
          loopLinks: [
            { label: 'Marketing', href: '/loops/marketing', loopType: 'marketing' },
            { label: 'Sales', href: '/loops/sales', loopType: 'sales' },
            { label: 'Service', href: '/loops/service', loopType: 'service' },
            { label: 'Ops', href: '/loops/ops', loopType: 'ops' },
          ],
        },
        {
          title: 'Understand The Stages',
          description: 'Learn about the four stages that repeat inside every loop.',
          cta: { label: 'Stages: Express, Tailor, Amplify, Evolve', href: '/overview/stages', variant: 'primary' },
        },
        {
          title: 'Role-Based Guidance',
          description: 'Get guidance for your specific role, including which loop to focus on first.',
          cta: { label: 'Start Here', href: '/roles/start-here', variant: 'secondary' },
        },
      ],
      closingNote: 'Use the four loops as a shared map. Once your whole team sees revenue this way, it becomes much easier to decide what to change next and how to measure whether your loops are getting stronger with every cycle.',
    },
  },
]

export default async function HomePage() {
  // Try to fetch home page from CMS
  const page = await getPageBySlug('home')
  const sections = (page?.sections as Section[]) || defaultHomeSections

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'

  return (
    <>
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema({
            title: page?.title || 'Loop Revenue System',
            description: page?.description || 'One system. Four loops. Continuous learning.',
            url: siteUrl,
            datePublished: page?.publishedAt,
            dateModified: page?.updatedAt,
          }),
        ]}
      />
      <SectionRenderer sections={sections} />
    </>
  )
}
