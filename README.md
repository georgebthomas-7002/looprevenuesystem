# Loop Revenue System CMS

A vibe-coded content management system built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## Features

- **Block-based page builder** - Create pages with pre-built section components
- **Blog & Podcast management** - Full CRUD for content types
- **SEO & AEO optimization** - Meta tags, JSON-LD schemas, sitemap generation
- **User-controlled navigation** - Manage sitemap and nav from admin
- **Vibe coding friendly** - Clear TypeScript types for AI-assisted editing
- **Editorial design system** - Fraunces + Source Sans 3 typography

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Vercel Postgres)
- **ORM**: Prisma
- **Auth**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or Vercel Postgres)

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Fill in your environment variables:
```env
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-secure-password"
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Run development server
npm run dev
```

### Deployment to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Vercel will automatically build and deploy

## Project Structure

```
├── app/
│   ├── (public)/        # Public routes (home, blog, podcast, resources)
│   ├── admin/           # Admin CMS interface
│   └── api/             # API routes
├── components/
│   ├── blocks/          # Block-based section components
│   ├── layout/          # Header, Footer, layouts
│   └── ui/              # Base UI components
├── lib/
│   ├── content/         # Content types and queries
│   └── seo/             # SEO helpers and schema generation
├── prisma/
│   └── schema.prisma    # Database schema
└── public/
    └── images/          # Static assets
```

## Content Types

### Pages
Marketing pages with flexible block-based layouts. Each page has:
- Sections (array of typed blocks)
- Navigation settings (show in header/footer)
- SEO fields (meta title, description, OG tags)
- AEO fields (schema type, FAQ items)

### Blog Posts
Articles with rich content:
- Body content (HTML/Markdown)
- Hero image
- Categories and tags
- Author and publish date

### Podcast Episodes
Audio/video content:
- Audio URL
- Optional video URL
- Show notes
- Episode number and duration

## Block Types

Available section types for page building:

- `hero` - Main headline section
- `heroWithDiagram` - Hero with interactive SVG diagram
- `contentBlock` - Text content block
- `highlightList` - Bulleted highlights
- `comparisonSection` - Before/after comparison
- `loopDetailSection` - Loop-specific detail section
- `connectionsGrid` - Grid of connection cards
- `aiSection` - AI vs Human capabilities
- `navigationCards` - Navigation card grid
- `ctaBanner` - Call-to-action banner
- `faqSection` - Expandable FAQ

## Adding New Section Types

1. Add type to `lib/content/sections.ts`:
```typescript
export type SectionType =
  | 'hero'
  | 'yourNewSection'  // Add here
```

2. Create props interface:
```typescript
export interface YourNewSectionProps {
  headline: string
  // ... other props
}
```

3. Add to SectionPropsMap:
```typescript
export interface SectionPropsMap {
  yourNewSection: YourNewSectionProps
  // ...
}
```

4. Create component in `components/blocks/YourNewSection.tsx`

5. Register in `components/blocks/SectionRenderer.tsx`

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | #FDFBF7 | Main background |
| `loop-marketing` | #F59E0B | Marketing accent |
| `loop-sales` | #10B981 | Sales accent |
| `loop-service` | #0EA5E9 | Service accent |
| `loop-ops` | #64748B | Ops accent |

### Typography

- **Display**: Fraunces (serif)
- **Body**: Source Sans 3 (sans-serif)
- **Scale**: Major Third (1.25 ratio)

## Admin Access

Visit `/admin` and sign in with your configured credentials.

## License

[Your License Here]
