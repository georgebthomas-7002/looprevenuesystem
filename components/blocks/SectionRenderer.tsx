/**
 * SECTION RENDERER
 * ================
 *
 * This component takes an array of sections and renders each one
 * using the appropriate block component.
 *
 * HOW TO ADD A NEW SECTION TYPE:
 * 1. Create the component in components/blocks/
 * 2. Add it to the sectionComponents map below
 * 3. The section will automatically be renderable
 */

import type { Section, SectionType } from '@/lib/content/sections'
import {
  Hero,
  HeroWithDiagram,
  ContentBlock,
  HighlightList,
  ComparisonSection,
  LoopDetailSection,
  ConnectionsGrid,
  AiSection,
  NavigationCards,
  CtaBanner,
  FaqSection,
} from '@/components/blocks'

// Map section types to their React components
const sectionComponents: Record<SectionType, React.ComponentType<any>> = {
  hero: Hero,
  heroWithDiagram: HeroWithDiagram,
  textWithMedia: ContentBlock, // Placeholder - create TextWithMedia component if needed
  threeColumnFeatures: ContentBlock, // Placeholder
  fourColumnFeatures: ContentBlock, // Placeholder
  testimonialStrip: ContentBlock, // Placeholder
  ctaBanner: CtaBanner,
  contentBlock: ContentBlock,
  comparisonSection: ComparisonSection,
  loopDetailSection: LoopDetailSection,
  connectionsGrid: ConnectionsGrid,
  aiSection: AiSection,
  navigationCards: NavigationCards,
  faqSection: FaqSection,
  stageCards: ContentBlock, // Placeholder
  highlightList: HighlightList,
  richText: ContentBlock, // Placeholder
}

interface SectionRendererProps {
  sections: Section[]
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <>
      {sections.map((section) => {
        const Component = sectionComponents[section.type]

        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`)
          return null
        }

        return <Component key={section.id} {...section.props} />
      })}
    </>
  )
}

// Export for use in page components
export { sectionComponents }
