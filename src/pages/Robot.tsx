import robotContent from '../../content/robot/architecture.md?raw'
import { MDXContent } from '../components/MDXContent'
import { useI18n } from '../hooks/useI18n'
import { hydrateLinks } from '../lib/links'

const systemHighlights = [
  { title: { zh: '机械结构', en: 'Mechanical structure' }, metric: '2.4s cycle' },
  { title: { zh: '自动路径', en: 'Autonomous paths' }, metric: '3 lines ready' },
  { title: { zh: '视觉定位', en: 'Vision localization' }, metric: '±2cm error' },
]

export default function RobotPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '机器人系统', en: 'Robot Systems' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '分享机械、电控、软件与视觉的核心设计。',
            en: 'Mechanical, electrical, software, and vision architecture at a glance.',
          })}
        </p>
        <div className="grid grid-3">
          {systemHighlights.map((item) => (
            <div key={item.title.zh} className="surface" style={{ textAlign: 'center', boxShadow: 'none' }}>
              <p className="pill" style={{ marginBottom: '0.75rem' }}>{pick(item.title)}</p>
              <strong style={{ fontSize: '1.5rem' }}>{item.metric}</strong>
            </div>
          ))}
        </div>
      </section>

      <MDXContent source={hydrateLinks(robotContent)} />
    </div>
  )
}
