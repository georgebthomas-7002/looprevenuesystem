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
  const pageData = {
    id: page.id,
    slug: page.slug,
    title: page.title,
    description: page.description,
    body: (page.sections as unknown as { body?: string })?.body || '',
    status: page.status,
    showInMainNav: page.showInMainNav,
    showInFooterNav: page.showInFooterNav,
    navOrder: page.navOrder,
    parentSlug: page.parentSlug,
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
