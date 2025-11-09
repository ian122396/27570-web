export interface Sponsor {
  name: string
  tier: string
  website: string
  logo: string
  statement: string
}

interface SponsorGridProps {
  data: Sponsor[]
}

const tierOrder = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Partner']

export function SponsorGrid({ data }: SponsorGridProps) {
  const grouped = tierOrder
    .map((tier) => ({
      tier,
      sponsors: data.filter((sponsor) => sponsor.tier === tier),
    }))
    .filter((group) => group.sponsors.length > 0)

  return (
    <div className="grid" style={{ gap: '2rem' }}>
      {grouped.map((group) => (
        <section key={group.tier}>
          <h3 style={{ marginBottom: '0.5rem' }}>{group.tier}</h3>
          <div className="grid grid-3">
            {group.sponsors.map((sponsor) => (
              <a
                className="surface"
                style={{ padding: '1rem', textAlign: 'center', boxShadow: 'none' }}
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  style={{ maxHeight: 80, objectFit: 'contain', margin: '0 auto 0.75rem' }}
                />
                <strong>{sponsor.name}</strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sponsor.statement}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
