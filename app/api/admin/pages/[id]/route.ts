import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { prisma } = await import('@/lib/prisma')

    const page = await prisma.page.findUnique({
      where: { id }
    })

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    return NextResponse.json(page)
  } catch (error) {
    console.error('Error fetching page:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const data = await request.json()
    const { prisma } = await import('@/lib/prisma')

    // Check if page exists
    const existing = await prisma.page.findUnique({
      where: { id }
    })

    if (!existing) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    // Build sections with body content
    const sections = data.body
      ? [{ type: 'content', body: data.body }]
      : (existing.sections as unknown[]) || []

    // Update page
    const page = await prisma.page.update({
      where: { id },
      data: {
        slug: data.slug,
        title: data.title,
        description: data.description,
        sections: sections as object[],
        status: data.status,
        showInMainNav: data.showInMainNav,
        showInFooterNav: data.showInFooterNav,
        navOrder: data.navOrder,
        parentSlug: data.parentSlug,
        // SEO
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        canonicalUrl: data.canonicalUrl,
        ogTitle: data.ogTitle,
        ogDescription: data.ogDescription,
        ogImage: data.ogImage,
        // AEO
        schemaType: data.schemaType,
        faqItems: data.faqItems,
        // Update timestamp
        updatedAt: new Date(),
        // Set published date if publishing
        publishedAt: data.status === 'published' && !existing.publishedAt
          ? new Date()
          : existing.publishedAt,
      }
    })

    return NextResponse.json(page)
  } catch (error) {
    console.error('Error updating page:', error)
    return NextResponse.json(
      { error: 'Failed to update page', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { prisma } = await import('@/lib/prisma')

    await prisma.page.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { error: 'Failed to delete page' },
      { status: 500 }
    )
  }
}
