import historyContent from '../../content/history/2024-2025-into-the-deep.md?raw'
import { MDXContent } from '../components/MDXContent'
import { Timeline } from '../components/Timeline'
import { useI18n } from '../hooks/useI18n'
import { hydrateLinks } from '../lib/links'

const archiveTimeline = [
  {
    title: 'League Meet #1',
    date: '2024-10',
    description: {
      zh: '首次部署浮筒抓取，完成 6 场排位赛。',
      en: 'First deployment of buoy grabber, 6 qualification matches completed.',
    },
  },
  {
    title: 'League Meet #3',
    date: '2024-12',
    description: {
      zh: '更新定位算法并挺进联盟决赛。',
      en: 'Updated localization stack and advanced to alliance finals.',
    },
  },
  {
    title: 'Championship',
    date: '2025-03',
    description: {
      zh: '拿下 Inspire Award Finalist 与 Motivate Award。',
      en: 'Won Inspire Award Finalist and Motivate Award.',
    },
  },
  {
    title: 'Off-season Outreach',
    date: '2025-04',
    description: {
      zh: '与 5 所学校合作，触达 600+ 学生。',
      en: 'Partnered with five schools, reached 600+ students.',
    },
  },
]

export default function HistoryPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">
          {pick({ zh: '历史与成就', en: 'Archive & Achievements' })}
        </h1>
        <p className="section-subtitle">
          {pick({
            zh: '复盘 INTO THE DEEP 赛季，沉淀资料与经验，为 DECODE 做准备。',
            en: 'Capturing INTO THE DEEP lessons learned and resources for DECODE.',
          })}
        </p>
      </section>

      <MDXContent source={hydrateLinks(historyContent)} />

      <section style={{ marginTop: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '赛季节点', en: 'Season Highlights' })}</h2>
        <Timeline
          items={archiveTimeline.map((item) => ({
            title: item.title,
            date: item.date,
            description: pick(item.description),
          }))}
        />
      </section>
    </div>
  )
}
