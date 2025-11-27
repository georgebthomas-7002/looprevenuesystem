import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET all pages
export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: { updatedAt: 'desc' },
    })
    return NextResponse.json({ pages })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 })
  }
}

// POST create new page
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const page = await prisma.page.create({
      data: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        sections: data.sections || [],
        showInMainNav: data.showInMainNav || false,
        showInFooterNav: data.showInFooterNav || false,
        navOrder: data.navOrder || 0,
        parentSlug: data.parentSlug,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        canonicalUrl: data.canonicalUrl,
        ogTitle: data.ogTitle,
        ogDescription: data.ogDescription,
        ogImage: data.ogImage,
        schemaType: data.schemaType || 'WebPage',
        faqItems: data.faqItems,
        speakableSections: data.speakableSections,
        status: data.status || 'draft',
        publishedAt: data.status === 'published' ? new Date() : null,
      },
    })

    return NextResponse.json({ page })
  } catch (error) {
    console.error('Error creating page:', error)
    return NextResponse.json({ error: 'Failed to create page' }, { status: 500 })
  }
}
