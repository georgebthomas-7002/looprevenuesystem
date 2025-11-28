import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ResourceCardProps {
  title: string
  slug: string
  description: string
  fileType: string
  accessLevel: 'free' | 'members'
  featuredImage?: string
}

export function ResourceCard({ title, slug, description, fileType, accessLevel }: ResourceCardProps) {
  return (
    <Link href={`/resources/downloads/${slug}`}>
      <Card hover className="h-full">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="accent">{fileType}</Badge>
          <Badge variant={accessLevel === 'members' ? 'locked' : 'success'}>
            {accessLevel === 'members' ? 'Members' : 'Free'}
          </Badge>
        </div>
        <h3 className="text-lg mb-2">{title}</h3>
        <p className="text-warm-gray text-sm line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </div>
      </Card>
    </Link>
  )
}
