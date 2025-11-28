export interface User {
  id: string
  email: string
  fullName?: string
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

export interface Subscription {
  id: string
  userId: string
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  planType: 'monthly' | 'annual'
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete'
  currentPeriodStart?: string
  currentPeriodEnd?: string
  cancelAtPeriodEnd: boolean
  createdAt: string
  updatedAt: string
}

export interface JournalEntry {
  id: string
  userId: string
  title?: string
  content: string
  promptId?: string
  mood?: string
  createdAt: string
  updatedAt: string
}

export interface ContentProgress {
  id: string
  userId: string
  contentId: string
  contentType: 'article' | 'podcast' | 'tool' | 'downloadable'
  completed: boolean
  progressPercent: number
  lastAccessed: string
  createdAt: string
}

export type AccessLevel = 'free' | 'members'

export interface ContentItem {
  id: string
  title: string
  slug: string
  excerpt?: string
  featuredImage?: string
  accessLevel: AccessLevel
  publishedAt: string
  category?: string
}
