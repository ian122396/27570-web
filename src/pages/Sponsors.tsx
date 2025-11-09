import { SponsorGrid } from '../components/SponsorGrid'
import { useI18n } from '../hooks/useI18n'
import { sponsorData, externalLinks } from '../data'

const tiers = [
  { name: 'Platinum', benefits: ['Logo on robot', 'Pit banner', 'Judging shout-out'] },
  { name: 'Gold', benefits: ['Logo on outreach deck', 'Social media feature'] },
  { name: 'Silver', benefits: ['Website logo', 'Workshop invitation'] },
  { name: 'Bronze', benefits: ['Thank-you certificate', 'Newsletter mention'] },
]

export default function SponsorsPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '赞助计划', en: 'Sponsors' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '现金、物资、场地与导师支持都能帮助我们在 DECODE 赛季走得更远。',
            en: 'Funding, materials, venue, and mentorship keep us competitive throughout DECODE.',
          })}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a className="btn" href={externalLinks['sponsor.form']} target="_blank" rel="noreferrer">
            {pick({ zh: '填写赞助意向表', en: 'Sponsor inquiry form' })}
          </a>
          <a className="btn secondary" href="#/portfolio">
            {pick({ zh: '下载赞助资料', en: 'Download sponsor deck' })}
          </a>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '支持方式', en: 'Ways to support' })}</h2>
        <div className="grid grid-2">
          {[
            { zh: '现金', en: 'Funding' },
            { zh: '物资', en: 'Materials' },
            { zh: '场地', en: 'Venue' },
            { zh: '导师', en: 'Mentorship' },
          ].map((item) => (
            <article key={item.zh} className="surface" style={{ boxShadow: 'none' }}>
              <h3>{pick(item)}</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                {pick({
                  zh: '协助我们补齐零件、工具、训练场地与技术顾问。',
                  en: 'Help us cover parts, tools, training venues, and technical coaching.',
                })}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '回报权益', en: 'Benefits' })}</h2>
        <div className="grid grid-2">
          {tiers.map((tier) => (
            <article key={tier.name} className="surface" style={{ boxShadow: 'none' }}>
              <h3>{tier.name}</h3>
              <ul>
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading">{pick({ zh: '现有赞助商', en: 'Current sponsors' })}</h2>
        <SponsorGrid
          data={sponsorData.map((sponsor) => ({
            ...sponsor,
            statement: pick({
              zh: sponsor.statement_zh,
              en: sponsor.statement_en,
            }),
          }))}
        />
      </section>
    </div>
  )
}
