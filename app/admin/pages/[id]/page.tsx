import { notFound } from 'next/navigation'
import { PageEditor } from '@/components/admin/editors/PageEditor'

async function getPage(id: string) {
  try {
    const { prisma } = await import('@/lib/prisma')
    const page = await prisma.page.findUnique({
      where: { id }
    })
    return page
  } catch {
    return null
  }
}

export default async function EditPagePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const page = await getPage(id)

  if (!page) {
    notFound()
  }

  // Transform page data for the editor
  // sections is stored as an array: [{ type: 'content', body: '...' }]
  const sectionsArray = page.sections as Array<{ type?: string; body?: string }> | null
  const bodyContent = sectionsArray && sectionsArray.length > 0 && sectionsArray[0]?.body
    ? sectionsArray[0].body
    : ''

  const pageData = {
    id: page.id,
    slug: page.slug,
    title: page.title,
    description: page.description,
    body: bodyContent,
    status: page.status,
    showInMainNav: page.showInMainNav,
    showInFooterNav: page.showInFooterNav,
    navOrder: page.navOrder,
    parentSlug: page.parentSlug,
    // Content slots for designed pages
    contentSlots: page.contentSlots as Record<string, string | string[]> | null,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    canonicalUrl: page.canonicalUrl,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogImage: page.ogImage,
    schemaType: page.schemaType,
    faqItems: page.faqItems as Array<{ question: string; answer: string }> | null,
  }

  return <PageEditor page={pageData} />
}
