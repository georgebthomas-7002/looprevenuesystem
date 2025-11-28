interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeatureSectionProps {
  headline?: string
  subheadline?: string
  features: Feature[]
}

export function FeatureSection({ headline, subheadline, features }: FeatureSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {(headline || subheadline) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {headline && <h2 className="text-primary mb-4">{headline}</h2>}
            {subheadline && <p className="text-lg text-warm-gray">{subheadline}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              {feature.icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-warm-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
