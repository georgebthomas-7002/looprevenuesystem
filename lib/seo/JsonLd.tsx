/**
 * JSON-LD Script Component
 * Renders structured data as a script tag
 */

interface JsonLdProps {
  data: object | object[] | null
}

export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null

  // Handle array of schemas
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
