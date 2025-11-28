import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl text-primary mb-2">Welcome Back</h1>
        <p className="text-warm-gray">Continue your spiritual leadership journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Library</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-warm-gray text-sm mb-4">Access all articles, podcasts, and downloads.</p>
            <Link href="/library">
              <Button variant="outline" size="sm">Browse Library</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-warm-gray text-sm mb-4">Assessments, frameworks, and reflections.</p>
            <Link href="/tools">
              <Button variant="outline" size="sm">View Tools</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Journal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-warm-gray text-sm mb-4">Your private space for reflection.</p>
            <Link href="/journal">
              <Button variant="outline" size="sm">Open Journal</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg italic text-warm-gray border-l-4 border-accent pl-4 mb-4">
            &quot;The greatest leader is not the one who does the greatest things, but the one who gets people to do the greatest things.&quot;
          </blockquote>
          <p className="text-sm text-warm-gray mb-4">
            Consider: How are you empowering others to lead today?
          </p>
          <Link href="/journal">
            <Button size="sm">Journal Your Response</Button>
          </Link>
        </CardContent>
      </Card>
    </>
  )
}
