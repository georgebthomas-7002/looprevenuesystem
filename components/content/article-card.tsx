import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ArticleCardProps {
  title: string
  slug: string
  excerpt: string
  category?: string
  accessLevel: 'free' | 'members'
  publishedAt: string
  featuredImage?: string
}

export function ArticleCard({ title, slug, excerpt, category, accessLevel, publishedAt, featuredImage }: ArticleCardProps) {
  return (
    <Link href={`/resources/articles/${slug}`}>
      <Card hover padding="none" className="overflow-hidden h-full">
        {featuredImage && (
          <div className="aspect-video bg-warm-gray/10">
            <img src={featuredImage} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {category && <Badge variant="default">{category}</Badge>}
            <Badge variant={accessLevel === 'members' ? 'locked' : 'success'}>
              {accessLevel === 'members' ? 'Members' : 'Free'}
            </Badge>
          </div>
          <h3 className="text-xl mb-2 line-clamp-2">{title}</h3>
          <p className="text-warm-gray text-sm mb-4 line-clamp-3">{excerpt}</p>
          <time className="text-xs text-warm-gray">
            {new Date(publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
      </Card>
    </Link>
  )
}
