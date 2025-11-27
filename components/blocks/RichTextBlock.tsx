import { cn } from '@/lib/utils/cn'

interface RichTextBlockProps {
  body: string
  maxWidth?: 'narrow' | 'default' | 'wide'
  className?: string
}

const maxWidthVariants = {
  narrow: 'max-w-narrow',
  default: 'max-w-3xl',
  wide: 'max-w-content',
}

/**
 * RichTextBlock renders HTML content from the WYSIWYG editor.
 * It applies consistent prose styling to the content.
 */
export function RichTextBlock({
  body,
  maxWidth = 'default',
  className,
}: RichTextBlockProps) {
  if (!body) {
    return null
  }

  return (
    <section className="section-padding">
      <div className="container-content">
        <div
          className={cn(
            'mx-auto prose prose-lg',
            // Headings
            'prose-headings:font-display prose-headings:font-semibold prose-headings:text-text-primary',
            'prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-0',
            'prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10',
            'prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8',
            'prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6',
            // Paragraphs
            'prose-p:font-body prose-p:text-text-secondary prose-p:leading-loose prose-p:mb-4',
            // Links
            'prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline prose-a:font-medium',
            // Lists
            'prose-ul:my-4 prose-ul:pl-6 prose-li:text-text-secondary prose-li:mb-2',
            'prose-ol:my-4 prose-ol:pl-6',
            // Blockquotes
            'prose-blockquote:border-l-4 prose-blockquote:border-brand-teal prose-blockquote:pl-6 prose-blockquote:italic',
            'prose-blockquote:text-text-secondary prose-blockquote:my-6 prose-blockquote:bg-bg-alt prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r',
            // Strong/Bold
            'prose-strong:text-text-primary prose-strong:font-semibold',
            // Code
            'prose-code:bg-bg-alt prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm',
            // Max width
            maxWidthVariants[maxWidth],
            className
          )}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </section>
  )
}
