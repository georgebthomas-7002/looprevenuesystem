import { NextResponse } from 'next/server'
import { getUnifiedResources } from '@/lib/content/queries'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type') as 'page' | 'blog' | 'podcast' | null
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const limit = searchParams.get('limit')

  try {
    const resources = await getUnifiedResources({
      type: type || undefined,
      categorySlug: category || undefined,
      search: search || undefined,
      limit: limit ? parseInt(limit) : undefined,
    })

    return NextResponse.json({ resources })
  } catch (error) {
    console.error('Error fetching resources:', error)
    return NextResponse.json({ resources: [] })
  }
}
