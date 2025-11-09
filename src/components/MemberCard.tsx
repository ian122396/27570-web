interface MemberCardProps {
  name: string
  role: string
  avatar?: string
  focus?: string
}

export function MemberCard({ name, role, avatar, focus }: MemberCardProps) {
  return (
    <article
      className="surface"
      style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'var(--bg-muted)',
          flexShrink: 0,
        }}
      >
        {avatar ? (
          <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--text-muted)',
              fontWeight: 600,
            }}
          >
            {name.slice(0, 1)}
          </div>
        )}
      </div>
      <div>
        <strong>{name}</strong>
        <p style={{ margin: '0.2rem 0', color: 'var(--text-muted)' }}>{role}</p>
        {focus && (
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {focus}
          </p>
        )}
      </div>
    </article>
  )
}
