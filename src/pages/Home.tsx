import { Hero } from '../components/Hero'
import { Card } from '../components/Card'
import { Timeline } from '../components/Timeline'
import { useI18n, type Localized } from '../hooks/useI18n'
import { teamData, eventData } from '../data'

const updates: Array<{
  title: Localized
  description: Localized
  tag: Localized
}> = [
  {
    title: {
      zh: '成功报名重庆 #1 资格赛',
      en: 'Registration locked for Chongqing Qualifier #1',
    },
    description: {
      zh: '准备包含工程日志、评审资料与最新机器人技术文档的报名包。',
      en: 'Submitted the engineering portfolio, judging packet, and robot documentation.',
    },
    tag: {
      zh: '赛事',
      en: 'Events',
    },
  },
  {
    title: {
      zh: 'DECODE 赛季启动冲刺完成',
      en: 'DECODE season kickoff sprint complete',
    },
    description: {
      zh: '完成底盘 + 抓取臂的快拆验证，并锁定电控布线方案。',
      en: 'Validated quick-swap drive base and manipulator, locked the wiring layout.',
    },
    tag: {
      zh: '工程',
      en: 'Engineering',
    },
  },
  {
    title: {
      zh: '工程日志与品牌素材更新',
      en: 'Engineering log & brand kit refreshed',
    },
    description: {
      zh: '发布 2025 Outreach 计划与合作指引，供导师与赞助方审阅。',
      en: 'Published the 2025 outreach plan and sponsorship deck for mentors and partners.',
    },
    tag: {
      zh: '文档',
      en: 'Docs',
    },
  },
]

const roadmap: Array<{
  title: string
  date: string
  description: Localized
}> = [
  {
    title: 'Prototype',
    date: '2025-09',
    description: {
      zh: '制作基础底盘，绘制shooting CAD模型。',
      en: 'Making Chassis,designing shooting CAD.',
    },
  },
  {
    title: 'Test',
    date: '2025-10',
    description: {
      zh: '制作shooting结构，整车调试',
      en: 'Making shooting structure and debugging.',
    },
  },
  {
    title: 'Vision test',
    date: '2025-10',
    description: {
      zh: 'April Tags识别与自动辅助瞄准调试',
      en: 'April Tags recognization and auto aiming test.',
    },
  },
  {
    title: 'CNCHQ Prep Week',
    date: '2025-11',
    description: {
      zh: 'Driver训练，自动微调',
      en: 'Driver training & autonomous test.',
    },
  },
]

export default function HomePage() {
  const { pick, t } = useI18n()
  const heroSubtitle = pick({
    zh: `${teamData.teamNumber} ${teamData.teamName} · ${teamData.tagline_zh}`,
    en: `${teamData.teamNumber} ${teamData.teamName} · ${teamData.tagline_en}`,
  })

  const featuredEvent = eventData[0]

  return (
    <div className="container">
      <Hero
        eyebrow="FTC 27570 BEAR"
        title={pick({
          zh: '2025-2026 DECODE 赛季',
          en: 'DECODE 2025-2026',
        })}
        subtitle={heroSubtitle}
        actions={[
          { label: t('actions.viewSeason'), href: '#/season' },
          { label: t('actions.join'), href: '#/join', variant: 'secondary' },
          { label: t('actions.sponsor'), href: '#/sponsors', variant: 'secondary' },
        ]}
        highlights={[
          'DECODE 2025-2026',
          'CNCHQ 2025-11-15',
          pick({ zh: '双语工程日志', en: 'Bilingual engineering log' }),
        ]}
      />

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">
          {pick({ zh: '最新动态', en: 'News & Updates' })}
        </h2>
        <p className="section-subtitle">
          {pick({
            zh: '关注训练节奏、工程日志与合作活动。',
            en: 'Track build pace, notebook progress, and outreach efforts.',
          })}
        </p>
        <div className="grid grid-3">
          {updates.map((update) => (
            <Card
              key={update.title.zh}
              title={pick(update.title)}
              description={pick(update.description)}
              tag={pick(update.tag)}
            />
          ))}
        </div>
      </section>

      {featuredEvent && (
        <section style={{ marginBottom: '2rem' }}>
          <h2 className="section-heading">
            {pick({ zh: '下一个赛事', en: 'Next Event' })}
          </h2>
          <div className="surface">
            <p className="pill" style={{ marginBottom: '0.75rem' }}>
              {t(`status.${featuredEvent.status}`)}
            </p>
            <h3>{pick({ zh: featuredEvent.name_zh, en: featuredEvent.name_en })}</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              {featuredEvent.dateRange} · {featuredEvent.location}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {featuredEvent.links &&
                Object.entries(featuredEvent.links).map(([label, url]) => (
                  <a key={label} className="btn secondary" href={url} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '里程碑', en: 'Roadmap' })}</h2>
        <Timeline
          items={roadmap.map((item) => ({
            title: item.title,
            date: item.date,
            description: pick(item.description),
          }))}
        />
      </section>
    </div>
  )
}
