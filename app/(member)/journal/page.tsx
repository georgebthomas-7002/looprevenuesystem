import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function JournalPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-primary mb-2">Your Journal</h1>
          <p className="text-warm-gray">A private space for reflection and growth</p>
        </div>
        <Button>New Entry</Button>
      </div>

      <Card>
        <CardContent className="text-center py-12">
          <p className="text-warm-gray mb-4">You have not created any journal entries yet.</p>
          <Button>Write Your First Entry</Button>
        </CardContent>
      </Card>
    </>
  )
}
