export interface TimelineItem {
  title: string
  date: string
  description: string
  status?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: '1.25rem',
      }}
    >
      {items.map((item) => (
        <li
          key={`${item.date}-${item.title}`}
          className="surface"
          style={{ padding: '1.25rem 1.5rem', boxShadow: 'none' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <strong>{item.title}</strong>
            <span className="pill">{item.date}</span>
            {item.status && <span className="tag">{item.status}</span>}
          </div>
          <p style={{ margin: '0.75rem 0 0', color: 'var(--text-muted)' }}>{item.description}</p>
        </li>
      ))}
    </ol>
  )
}
