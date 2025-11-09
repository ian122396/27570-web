import { MemberCard } from '../components/MemberCard'
import { useI18n } from '../hooks/useI18n'
import { teamData } from '../data'
import { resolveLink } from '../lib/links'

export default function TeamPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '团队', en: 'Team' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '跨学科成员覆盖机械、电控、算法、视觉与品牌运营。',
            en: 'Cross-disciplinary students covering mechanical, control, software, vision, and brand.',
          })}
        </p>
        <a className="btn secondary" href={resolveLink(teamData.dutyRoster)} target="_blank" rel="noreferrer">
          {pick({ zh: '下载值班表', en: 'Download duty roster' })}
        </a>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '队员', en: 'Members' })}</h2>
        <div className="grid grid-2">
          {teamData.members.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={pick({ zh: member.role, en: member.role_en })}
              focus={pick({
                zh: member.focus ?? '',
                en: member.focus_en ?? member.focus ?? '',
              })}
              avatar={member.avatar}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading">{pick({ zh: '导师', en: 'Mentors' })}</h2>
        <div className="grid grid-2">
          {teamData.mentors.map((mentor) => (
            <MemberCard
              key={mentor.name}
              name={mentor.name}
              role={pick({ zh: mentor.focus, en: mentor.focus_en })}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
