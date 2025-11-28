import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AccountPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl text-primary mb-2">Account Settings</h1>
        <p className="text-warm-gray">Manage your profile and subscription</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Full Name" defaultValue="Member Name" />
            <Input label="Email" type="email" defaultValue="member@example.com" disabled />
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="success">Active</Badge>
              <span className="text-warm-gray">Monthly Plan</span>
            </div>
            <p className="text-sm text-warm-gray mb-2">$7.77/month</p>
            <p className="text-sm text-warm-gray">Next billing date: February 1, 2024</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Manage Subscription</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Current Password" type="password" />
            <Input label="New Password" type="password" />
            <Input label="Confirm New Password" type="password" />
          </CardContent>
          <CardFooter>
            <Button>Update Password</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
