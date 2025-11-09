import { useI18n } from '../hooks/useI18n'
import { externalLinks } from '../data'

const contactChannels = [
  { label: 'Email', value: 'ftc27570bear@gmail.com', href: 'team.email' },
  { label: 'GitHub', value: 'ftc27570-bear', href: 'team.github' },
  { label: 'Instagram', value: '@ftc27570bear', href: 'team.instagram' },
  { label: 'Bilibili', value: '27570 BEAR', href: 'team.bilibili' },
]

export default function ContactPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '联系我们', en: 'Contact' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '欢迎媒体、学校、企业与我们建立合作。',
            en: 'Media, schools, and industry partners are welcome to collaborate.',
          })}
        </p>
      </section>

      <div className="grid grid-2">
        {contactChannels.map((channel) => (
          <article key={channel.label} className="surface" style={{ boxShadow: 'none' }}>
            <h3>{channel.label}</h3>
            <a
              href={externalLinks[channel.href]}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--brand)', fontWeight: 600 }}
            >
              {channel.value}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
