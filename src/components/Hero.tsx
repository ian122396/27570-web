interface HeroAction {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  actions?: HeroAction[]
  highlights?: string[]
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions = [],
  highlights = [],
}: HeroProps) {
  return (
    <section className="surface" style={{ marginBottom: '2rem' }}>
      {eyebrow && <p className="pill">{eyebrow}</p>}
      <h1 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {title}
      </h1>
      <p className="section-subtitle" style={{ fontSize: '1.1rem' }}>
        {subtitle}
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`btn ${action.variant === 'secondary' ? 'secondary' : ''}`}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {action.label}
          </a>
        ))}
      </div>
      {highlights.length > 0 && (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {highlights.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
