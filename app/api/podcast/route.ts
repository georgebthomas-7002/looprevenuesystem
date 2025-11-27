import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET all podcast episodes
export async function GET() {
  try {
    const episodes = await prisma.podcastEpisode.findMany({
      include: {
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
      },
      orderBy: { episodeNumber: 'desc' },
    })
    return NextResponse.json({ episodes })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch episodes' }, { status: 500 })
  }
}

// POST create new podcast episode
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const episode = await prisma.podcastEpisode.create({
      data: {
        slug: data.slug,
        title: data.title,
        episodeNumber: data.episodeNumber,
        description: data.description,
        showNotes: data.showNotes || '',
        audioUrl: data.audioUrl,
        videoUrl: data.videoUrl,
        duration: data.duration,
        sections: data.sections || [],
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        canonicalUrl: data.canonicalUrl,
        ogTitle: data.ogTitle,
        ogDescription: data.ogDescription,
        ogImage: data.ogImage,
        schemaType: data.schemaType || 'PodcastEpisode',
        faqItems: data.faqItems,
        speakableSections: data.speakableSections,
        status: data.status || 'draft',
        featured: data.featured || false,
        publishedAt: data.status === 'published' ? new Date() : null,
      },
    })

    return NextResponse.json({ episode })
  } catch (error) {
    console.error('Error creating episode:', error)
    return NextResponse.json({ error: 'Failed to create episode' }, { status: 500 })
  }
}
