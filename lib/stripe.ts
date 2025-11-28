import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as Stripe.LatestApiVersion,
})

export const PLANS = {
  monthly: {
    name: 'Monthly Membership',
    price: 7.77,
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID!,
    interval: 'month' as const,
  },
  annual: {
    name: 'Annual Membership',
    price: 77.77,
    priceId: process.env.STRIPE_ANNUAL_PRICE_ID!,
    interval: 'year' as const,
    savings: 15.47,
  },
}

export async function createCheckoutSession(priceId: string, customerId?: string, customerEmail?: string) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?welcome=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/membership`,
    customer: customerId,
    customer_email: customerId ? undefined : customerEmail,
  })

  return session
}

export async function createPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account`,
  })

  return session
}
