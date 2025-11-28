import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface PodcastCardProps {
  title: string
  slug: string
  episodeNumber: number
  description: string
  duration: string
  accessLevel: 'free' | 'members'
  featuredImage?: string
}

export function PodcastCard({ title, slug, episodeNumber, description, duration, accessLevel, featuredImage }: PodcastCardProps) {
  return (
    <Link href={`/resources/podcasts/${slug}`}>
      <Card hover padding="none" className="overflow-hidden h-full">
        <div className="flex">
          <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-primary/10">
            {featuredImage ? (
              <img src={featuredImage} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            )}
          </div>
          <div className="p-4 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="primary">Ep. {episodeNumber}</Badge>
              <Badge variant={accessLevel === 'members' ? 'locked' : 'success'}>
                {accessLevel === 'members' ? 'Members' : 'Free'}
              </Badge>
            </div>
            <h3 className="text-lg mb-1 line-clamp-1">{title}</h3>
            <p className="text-warm-gray text-sm mb-2 line-clamp-2">{description}</p>
            <span className="text-xs text-warm-gray">{duration}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
