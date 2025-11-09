import seasonOverview from '../../content/season/2025-2026/index.md?raw'
import cnchqOverview from '../../content/season/2025-2026/events/cnchq.md?raw'
import { MDXContent } from '../components/MDXContent'
import { Timeline } from '../components/Timeline'
import { ResultTable } from '../components/ResultTable'
import { useI18n } from '../hooks/useI18n'
import { hydrateLinks } from '../lib/links'
import { eventData } from '../data'
import { getEventsBySeason } from '../lib/events'

const subsystems = [
  {
    title: { zh: '机械', en: 'Mechanical' },
    description: {
      zh: '模块化抓取臂、差速滑轨、快拆驱动底盘。',
      en: 'Modular manipulator, differential slide system, quick-swap drivebase.',
    },
  },
  {
    title: { zh: '电控', en: 'Electrical' },
    description: {
      zh: '集中配电面板与传感器分层，提供线上布线图。',
      en: 'Centralized power board with layered sensor harness and shared schematics.',
    },
  },
  {
    title: { zh: '算法', en: 'Algorithms' },
    description: {
      zh: '自动路径生成器、状态机调度以及 CI 测试脚本。',
      en: 'Trajectory generator, task state machine, and CI test scripts.',
    },
  },
  {
    title: { zh: '视觉', en: 'Vision' },
    description: {
      zh: '多摄像头 + AprilTag 融合定位，提供仿真数据。',
      en: 'Multi-camera + AprilTag fusion with synthetic datasets.',
    },
  },
]

const timelineItems = [
  {
    title: 'Kickoff Workshop',
    date: '2025-05-18',
    description: {
      zh: '规则深度解读与子系统 Brainstorm。',
      en: 'Rules deep dive and subsystem brainstorm.',
    },
  },
  {
    title: 'Prototype Sprint',
    date: '2025-06-12',
    description: {
      zh: '完成抓取与打分执行器原型。',
      en: 'Finish intake + scoring arm prototypes.',
    },
  },
  {
    title: 'Software Freeze',
    date: '2025-08-25',
    description: {
      zh: '稳定控制堆栈并上线遥测面板。',
      en: 'Stabilize control stack and enable telemetry dashboards.',
    },
  },
  {
    title: 'Scrimmage Week',
    date: '2025-09-21',
    description: {
      zh: '与重庆联盟友队合练。',
      en: 'Joint practice with Chongqing alliance teams.',
    },
  },
  {
    title: 'CNCHQ Travel',
    date: '2025-11-14',
    description: {
      zh: '发运器材、Pit 彩排、最终 QA。',
      en: 'Ship crate, run pit rehearsals, final QA.',
    },
  },
]

export default function SeasonPage() {
  const { pick } = useI18n()
  const seasonEvents = getEventsBySeason('2025-2026')

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '本赛季', en: 'Current Season' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: 'DECODE 2025-2026 赛季规划、子系统进展与赛事日程。',
            en: 'DECODE 2025-2026 roadmap, subsystem progress, and events.',
          })}
        </p>
        <MDXContent source={hydrateLinks(seasonOverview)} />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '子系统进展', en: 'Subsystems' })}</h2>
        <div className="grid grid-2">
          {subsystems.map((subsystem) => (
            <article key={subsystem.title.zh} className="surface" style={{ boxShadow: 'none' }}>
              <h3>{pick(subsystem.title)}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{pick(subsystem.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '里程碑时间轴', en: 'Season Timeline' })}</h2>
        <Timeline
          items={timelineItems.map((item) => ({
            title: item.title,
            date: item.date,
            description: pick(item.description),
          }))}
        />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">
          {pick({ zh: '重庆 #1 资格赛', en: 'Chongqing Qualifier #1' })}
        </h2>
        <MDXContent source={hydrateLinks(cnchqOverview)} />
      </section>

      <section>
        <h2 className="section-heading">{pick({ zh: '赛事列表', en: 'Events' })}</h2>
        <ResultTable events={seasonEvents.length ? seasonEvents : eventData} />
      </section>
    </div>
  )
}
