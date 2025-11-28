/**
 * PAGE CONTENT SLOTS SYSTEM
 *
 * This system allows designed pages (React components) to have editable text content
 * that can be modified through the admin panel without changing code.
 *
 * HOW IT WORKS:
 * 1. Each designed page defines "slots" - named pieces of text content
 * 2. Slots have default values hardcoded in the component
 * 3. The database can override slot values via the page's `contentSlots` field
 * 4. Admin panel shows these slots as editable fields
 * 5. Page components read from database first, fall back to defaults
 *
 * SLOT TYPES:
 * - text: Single line text (titles, labels)
 * - paragraph: Multi-line text
 * - richText: HTML content (for sections with formatting)
 * - list: Array of items
 */

export type SlotType = 'text' | 'paragraph' | 'richText' | 'list'

export interface ContentSlot {
  id: string
  label: string
  type: SlotType
  section: string // Group slots by section for better UX
  description?: string
  defaultValue: string | string[]
}

export interface PageSlotConfig {
  slug: string
  pageName: string
  componentPath: string
  slots: ContentSlot[]
}

/**
 * Content slot configurations for all designed pages
 */
export const PAGE_SLOT_CONFIGS: PageSlotConfig[] = [
  // Home page slots
  {
    slug: '',
    pageName: 'Home',
    componentPath: 'app/(public)/page.tsx',
    slots: [
      {
        id: 'hero_title',
        label: 'Hero Title',
        type: 'text',
        section: 'Hero',
        defaultValue: 'Build a Revenue System That Learns From Every Conversation',
      },
      {
        id: 'hero_subtitle',
        label: 'Hero Subtitle',
        type: 'paragraph',
        section: 'Hero',
        defaultValue: 'Turn marketing, sales, service, and ops into one continuous loop. Free playbooks, templates, and guides to help your business flourish.',
      },
    ],
  },

  // What Is the Loop Revenue System page
  {
    slug: 'overview/loop-revenue-system',
    pageName: 'What Is the Loop Revenue System',
    componentPath: 'app/(public)/overview/loop-revenue-system/page.tsx',
    slots: [
      {
        id: 'hero_title',
        label: 'Hero Title',
        type: 'text',
        section: 'Hero',
        defaultValue: 'What Is The Loop Revenue System?',
      },
      {
        id: 'hero_tagline',
        label: 'Hero Tagline',
        type: 'text',
        section: 'Hero',
        defaultValue: 'A simple way to run revenue as a continuous learning system.',
      },
      {
        id: 'hero_intro',
        label: 'Introduction Paragraph',
        type: 'paragraph',
        section: 'Hero',
        defaultValue: 'Most revenue models were built for a world of straight-line funnels and one-time deals. Buyers don\'t move that way anymore. They learn, compare, talk to peers, ask AI, buy, use, renew, and refer—in loops.',
      },
      {
        id: 'funnel_section_title',
        label: 'Funnel Problem Title',
        type: 'text',
        section: 'Why Funnels Aren\'t Enough',
        defaultValue: 'Why Funnels Are Not Enough Anymore',
      },
      {
        id: 'cta_title',
        label: 'CTA Section Title',
        type: 'text',
        section: 'Call to Action',
        defaultValue: 'Get Started',
      },
      {
        id: 'cta_text',
        label: 'CTA Description',
        type: 'paragraph',
        section: 'Call to Action',
        defaultValue: 'You don\'t need to rebuild everything at once. Pick one small loop and improve how it runs.',
      },
    ],
  },

  // Stages page
  {
    slug: 'overview/stages',
    pageName: 'The Four Stages',
    componentPath: 'app/(public)/overview/stages/page.tsx',
    slots: [
      {
        id: 'hero_title',
        label: 'Hero Title',
        type: 'text',
        section: 'Hero',
        defaultValue: 'The Four Stages of the Loop Revenue System',
      },
      {
        id: 'hero_subtitle',
        label: 'Hero Subtitle',
        type: 'text',
        section: 'Hero',
        defaultValue: 'One simple pattern for every loop in your revenue engine.',
      },
      {
        id: 'why_stages_title',
        label: 'Why Stages Title',
        type: 'text',
        section: 'Why Stages Matter',
        defaultValue: 'Why Stages Matter More Than Departments',
      },
      {
        id: 'express_title',
        label: 'Express Section Title',
        type: 'text',
        section: 'Express Stage',
        defaultValue: 'Express',
      },
      {
        id: 'tailor_title',
        label: 'Tailor Section Title',
        type: 'text',
        section: 'Tailor Stage',
        defaultValue: 'Tailor',
      },
      {
        id: 'amplify_title',
        label: 'Amplify Section Title',
        type: 'text',
        section: 'Amplify Stage',
        defaultValue: 'Amplify',
      },
      {
        id: 'evolve_title',
        label: 'Evolve Section Title',
        type: 'text',
        section: 'Evolve Stage',
        defaultValue: 'Evolve',
      },
    ],
  },

  // Data, Metrics, and Governance page
  {
    slug: 'overview/data-metrics-governance',
    pageName: 'Data, Metrics, and Governance',
    componentPath: 'app/(public)/overview/data-metrics-governance/page.tsx',
    slots: [
      {
        id: 'hero_title',
        label: 'Hero Title',
        type: 'text',
        section: 'Hero',
        defaultValue: 'Data, Metrics, And Governance For The Loop Revenue System',
      },
      {
        id: 'hero_subtitle',
        label: 'Hero Subtitle',
        type: 'text',
        section: 'Hero',
        defaultValue: 'The Nervous System Behind Your Revenue Loops',
      },
      {
        id: 'hero_intro',
        label: 'Hero Introduction',
        type: 'paragraph',
        section: 'Hero',
        defaultValue: 'Loops do not run on good intentions alone. They run on information.',
      },
      {
        id: 'why_data_title',
        label: 'Why Data Matters Title',
        type: 'text',
        section: 'Why Data Matters',
        defaultValue: 'Why Data And Metrics Matter More In A Loop',
      },
      {
        id: 'data_foundations_title',
        label: 'Data Foundations Title',
        type: 'text',
        section: 'Data Foundations',
        defaultValue: 'Data Foundations For The Loop Revenue System',
      },
      {
        id: 'metrics_title',
        label: 'Metrics Section Title',
        type: 'text',
        section: 'Metrics',
        defaultValue: 'Metrics That Matter By Loop And Stage',
      },
      {
        id: 'governance_title',
        label: 'Governance Section Title',
        type: 'text',
        section: 'Governance',
        defaultValue: 'Governance That Keeps The Loops Aligned',
      },
    ],
  },
]

/**
 * Get slot config for a page by slug
 */
export function getPageSlotConfig(slug: string): PageSlotConfig | null {
  return PAGE_SLOT_CONFIGS.find(config => config.slug === slug) || null
}

/**
 * Check if a page has slot configuration
 */
export function hasSlotConfig(slug: string): boolean {
  return PAGE_SLOT_CONFIGS.some(config => config.slug === slug)
}

/**
 * Get all slot configs
 */
export function getAllSlotConfigs(): PageSlotConfig[] {
  return PAGE_SLOT_CONFIGS
}

/**
 * Merge database values with default slot values
 */
export function getSlotValues(
  slug: string,
  dbContentSlots: Record<string, string | string[]> | null
): Record<string, string | string[]> {
  const config = getPageSlotConfig(slug)
  if (!config) return {}

  const values: Record<string, string | string[]> = {}

  for (const slot of config.slots) {
    // Use database value if exists, otherwise use default
    values[slot.id] = dbContentSlots?.[slot.id] ?? slot.defaultValue
  }

  return values
}

/**
 * Group slots by section for UI display
 */
export function groupSlotsBySection(slots: ContentSlot[]): Record<string, ContentSlot[]> {
  return slots.reduce((groups, slot) => {
    const section = slot.section
    if (!groups[section]) {
      groups[section] = []
    }
    groups[section].push(slot)
    return groups
  }, {} as Record<string, ContentSlot[]>)
}
