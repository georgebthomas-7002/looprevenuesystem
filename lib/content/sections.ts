/**
 * BLOCK-BASED SECTION SYSTEM
 * ===========================
 *
 * This file defines all available section types for the CMS.
 * Each section has a type and strongly-typed props.
 *
 * HOW TO ADD A NEW SECTION TYPE:
 * 1. Add the type name to SectionType union
 * 2. Create props interface for the section
 * 3. Add to SectionPropsMap
 * 4. Create the React component in components/blocks/
 * 5. Register in the section renderer
 */

// ============================================
// SECTION TYPES
// ============================================

export type SectionType =
  | 'hero'
  | 'heroWithDiagram'
  | 'textWithMedia'
  | 'threeColumnFeatures'
  | 'fourColumnFeatures'
  | 'testimonialStrip'
  | 'ctaBanner'
  | 'contentBlock'
  | 'comparisonSection'
  | 'loopDetailSection'
  | 'connectionsGrid'
  | 'aiSection'
  | 'navigationCards'
  | 'faqSection'
  | 'stageCards'
  | 'highlightList'
  | 'richText'

// ============================================
// COMMON TYPES
// ============================================

export type LoopType = 'marketing' | 'sales' | 'service' | 'ops'

export interface CallToAction {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'marketing' | 'sales' | 'service' | 'ops'
}

export interface MediaItem {
  type: 'image' | 'video' | 'svg'
  src: string
  alt?: string
  caption?: string
}

// ============================================
// SECTION PROPS
// ============================================

export interface HeroProps {
  eyebrow?: string
  headline: string
  subtitle?: string
  body?: string
  primaryCta?: CallToAction
  secondaryCta?: CallToAction
  backgroundVariant?: 'default' | 'alt' | 'cream'
  alignment?: 'left' | 'center'
}

export interface HeroWithDiagramProps extends HeroProps {
  diagram: 'loopDiagram' | 'stageDiagram' | 'custom'
  customSvg?: string
}

export interface TextWithMediaProps {
  eyebrow?: string
  headline: string
  body: string
  bullets?: string[]
  media?: MediaItem
  mediaPosition?: 'left' | 'right'
  cta?: CallToAction
  loopType?: LoopType
}

export interface FeatureItem {
  icon?: string
  title: string
  description: string
  loopType?: LoopType
  link?: CallToAction
}

export interface ThreeColumnFeaturesProps {
  eyebrow?: string
  headline?: string
  subtitle?: string
  features: [FeatureItem, FeatureItem, FeatureItem]
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface FourColumnFeaturesProps {
  eyebrow?: string
  headline?: string
  subtitle?: string
  features: [FeatureItem, FeatureItem, FeatureItem, FeatureItem]
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface TestimonialItem {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
}

export interface TestimonialStripProps {
  testimonials: TestimonialItem[]
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface CtaBannerProps {
  eyebrow?: string
  headline: string
  body?: string
  primaryCta: CallToAction
  secondaryCta?: CallToAction
  backgroundVariant?: 'default' | 'alt' | 'cream' | 'dark'
}

export interface ContentBlockProps {
  headline?: string
  body: string
  maxWidth?: 'narrow' | 'default' | 'wide'
}

export interface ComparisonItem {
  title: string
  items: string[]
}

export interface ComparisonSectionProps {
  headline?: string
  body?: string
  before: ComparisonItem
  after: ComparisonItem
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface StageItem {
  stage: 'express' | 'tailor' | 'amplify' | 'evolve'
  title: string
  description: string
}

export interface LoopDetailSectionProps {
  loopType: LoopType
  headline: string
  subtitle?: string
  purpose: {
    title: string
    body: string
  }
  inputs: {
    title: string
    items: string[]
  }
  outputs: {
    title: string
    items: string[]
  }
  stages: [StageItem, StageItem, StageItem, StageItem]
  cta?: CallToAction
  layout?: 'default' | 'reverse'
}

export interface ConnectionItem {
  loopType: LoopType
  title: string
  description: string
}

export interface ConnectionsGridProps {
  headline?: string
  body?: string
  connections: ConnectionItem[]
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface AiItem {
  loopType: LoopType
  aiCanDo: string
  humanOwns: string
}

export interface AiSectionProps {
  headline?: string
  body?: string
  items: AiItem[]
  closingNote?: string
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface NavigationCardItem {
  title: string
  description: string
  links?: CallToAction[]
  loopLinks?: Array<{ label: string; href: string; loopType: LoopType }>
  cta?: CallToAction
}

export interface NavigationCardsProps {
  headline?: string
  subtitle?: string
  cards: NavigationCardItem[]
  closingNote?: string
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSectionProps {
  headline?: string
  subtitle?: string
  items: FaqItem[]
  backgroundVariant?: 'default' | 'alt' | 'cream'
}

export interface StageCardsProps {
  stages: [StageItem, StageItem, StageItem, StageItem]
  layout?: '2x2' | 'horizontal'
}

export interface HighlightListProps {
  items: string[]
  variant?: 'default' | 'marketing' | 'sales' | 'service' | 'ops'
}

export interface RichTextProps {
  content: string // HTML or Markdown
  maxWidth?: 'narrow' | 'default' | 'wide'
}

// ============================================
// SECTION PROPS MAP
// ============================================

export interface SectionPropsMap {
  hero: HeroProps
  heroWithDiagram: HeroWithDiagramProps
  textWithMedia: TextWithMediaProps
  threeColumnFeatures: ThreeColumnFeaturesProps
  fourColumnFeatures: FourColumnFeaturesProps
  testimonialStrip: TestimonialStripProps
  ctaBanner: CtaBannerProps
  contentBlock: ContentBlockProps
  comparisonSection: ComparisonSectionProps
  loopDetailSection: LoopDetailSectionProps
  connectionsGrid: ConnectionsGridProps
  aiSection: AiSectionProps
  navigationCards: NavigationCardsProps
  faqSection: FaqSectionProps
  stageCards: StageCardsProps
  highlightList: HighlightListProps
  richText: RichTextProps
}

// ============================================
// SECTION DEFINITION
// ============================================

export interface Section<T extends SectionType = SectionType> {
  id: string
  type: T
  props: SectionPropsMap[T]
}

// Helper to create typed sections
export function createSection<T extends SectionType>(
  type: T,
  props: SectionPropsMap[T],
  id?: string
): Section<T> {
  return {
    id: id || `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    props,
  }
}

// ============================================
// DEFAULT SECTION TEMPLATES
// ============================================

export const sectionTemplates: Record<SectionType, () => Section> = {
  hero: () => createSection('hero', {
    headline: 'Your Headline Here',
    subtitle: 'Your subtitle text',
    body: 'Your body content here.',
    alignment: 'left',
  }),
  heroWithDiagram: () => createSection('heroWithDiagram', {
    headline: 'Your Headline Here',
    diagram: 'loopDiagram',
  }),
  textWithMedia: () => createSection('textWithMedia', {
    headline: 'Section Headline',
    body: 'Your content here.',
    mediaPosition: 'right',
  }),
  threeColumnFeatures: () => createSection('threeColumnFeatures', {
    features: [
      { title: 'Feature 1', description: 'Description 1' },
      { title: 'Feature 2', description: 'Description 2' },
      { title: 'Feature 3', description: 'Description 3' },
    ],
  }),
  fourColumnFeatures: () => createSection('fourColumnFeatures', {
    features: [
      { title: 'Feature 1', description: 'Description 1' },
      { title: 'Feature 2', description: 'Description 2' },
      { title: 'Feature 3', description: 'Description 3' },
      { title: 'Feature 4', description: 'Description 4' },
    ],
  }),
  testimonialStrip: () => createSection('testimonialStrip', {
    testimonials: [{ quote: 'Great product!', author: 'Customer Name' }],
  }),
  ctaBanner: () => createSection('ctaBanner', {
    headline: 'Ready to get started?',
    primaryCta: { label: 'Get Started', href: '#' },
  }),
  contentBlock: () => createSection('contentBlock', {
    body: 'Your content here.',
  }),
  comparisonSection: () => createSection('comparisonSection', {
    before: { title: 'Before', items: ['Item 1', 'Item 2'] },
    after: { title: 'After', items: ['Item 1', 'Item 2'] },
  }),
  loopDetailSection: () => createSection('loopDetailSection', {
    loopType: 'marketing',
    headline: 'Loop Marketing',
    purpose: { title: 'Purpose', body: 'Description here.' },
    inputs: { title: 'Inputs', items: ['Input 1'] },
    outputs: { title: 'Outputs', items: ['Output 1'] },
    stages: [
      { stage: 'express', title: 'Express', description: 'Description' },
      { stage: 'tailor', title: 'Tailor', description: 'Description' },
      { stage: 'amplify', title: 'Amplify', description: 'Description' },
      { stage: 'evolve', title: 'Evolve', description: 'Description' },
    ],
  }),
  connectionsGrid: () => createSection('connectionsGrid', {
    connections: [
      { loopType: 'marketing', title: 'Marketing', description: 'Description' },
    ],
  }),
  aiSection: () => createSection('aiSection', {
    items: [
      { loopType: 'marketing', aiCanDo: 'AI capability', humanOwns: 'Human responsibility' },
    ],
  }),
  navigationCards: () => createSection('navigationCards', {
    cards: [{ title: 'Card Title', description: 'Card description' }],
  }),
  faqSection: () => createSection('faqSection', {
    items: [{ question: 'Question?', answer: 'Answer.' }],
  }),
  stageCards: () => createSection('stageCards', {
    stages: [
      { stage: 'express', title: 'Express', description: 'Description' },
      { stage: 'tailor', title: 'Tailor', description: 'Description' },
      { stage: 'amplify', title: 'Amplify', description: 'Description' },
      { stage: 'evolve', title: 'Evolve', description: 'Description' },
    ],
  }),
  highlightList: () => createSection('highlightList', {
    items: ['Item 1', 'Item 2', 'Item 3'],
  }),
  richText: () => createSection('richText', {
    content: '<p>Your rich text content here.</p>',
  }),
}
