/**
 * DESIGNED PAGES REGISTRY
 *
 * This file maintains a list of pages that have dedicated React components
 * with hardcoded content. These pages DO NOT use CMS sections for content.
 *
 * HOW THE SYSTEM WORKS:
 *
 * 1. DESIGNED PAGES (listed below):
 *    - Have dedicated page.tsx files in app/(public)/
 *    - Content is hardcoded in React components
 *    - Database only stores SEO metadata (title, description, metaTitle, metaDescription)
 *    - Changes require code updates and deployment
 *
 * 2. PLACEHOLDER PAGES (not listed below):
 *    - Use the catch-all [...slug]/page.tsx
 *    - Show "Coming Soon" template with metadata from database
 *    - Will be converted to designed pages when content is ready
 *
 * WHEN YOU ADD A NEW DESIGNED PAGE:
 * 1. Create the page component at app/(public)/[path]/page.tsx
 * 2. Add the slug to this registry
 * 3. Run `npm run dev` or rebuild for Next.js to recognize the new route
 * 4. The seed button only needs to run if you want to update SEO metadata
 */

export const DESIGNED_PAGE_SLUGS = [
  // Home page
  '',

  // Overview section
  'overview/loop-revenue-system',
  'overview/stages',
  'overview/data-metrics-governance',

  // Loops section
  'loops', // Four Loops Overview page
  'loops/marketing', // Loop Marketing page

  // Add more designed pages here as they are created
  // 'loops/sales',
  // 'loops/service',
  // 'loops/ops',
  // etc.
] as const

export type DesignedPageSlug = typeof DESIGNED_PAGE_SLUGS[number]

/**
 * Check if a slug has a dedicated designed page component
 */
export function hasDesignedPage(slug: string): boolean {
  return DESIGNED_PAGE_SLUGS.includes(slug as DesignedPageSlug)
}

/**
 * Get info about a designed page for debugging
 */
export function getDesignedPageInfo(slug: string) {
  const isDesigned = hasDesignedPage(slug)
  const componentPath = slug === ''
    ? 'app/(public)/page.tsx'
    : `app/(public)/${slug}/page.tsx`

  return {
    slug,
    isDesigned,
    componentPath: isDesigned ? componentPath : null,
    source: isDesigned ? 'React Component (hardcoded content)' : 'Database + Coming Soon Template',
  }
}
