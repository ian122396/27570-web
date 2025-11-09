interface CardProps {
  title: string
  description: string
  href?: string
  tag?: string
  meta?: string
}

export function Card({ title, description, href, tag, meta }: CardProps) {
  const content = (
    <article className="surface" style={{ padding: '1.5rem', boxShadow: 'none' }}>
      {tag && <span className="pill" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{tag}</span>}
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--text-muted)' }}>{description}</p>
      {meta && (
        <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {meta}
        </p>
      )}
    </article>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    )
  }

  return content
}
