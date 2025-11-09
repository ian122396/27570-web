import { useI18n } from '../hooks/useI18n'
import { externalLinks } from '../data'

const steps = [
  { title: '报名表', detail: '提交基本信息、兴趣方向与作品。' },
  { title: '面试', detail: '30 分钟技术 + 行为面试，可远程。' },
  { title: '试训周', detail: '参与 1 周训练，完成小型交付。' },
]

const faq = [
  {
    q: { zh: '是否需要编程或机械基础？', en: 'Do I need prior experience?' },
    a: {
      zh: '没有硬性要求，我们会提供训练计划，但希望你愿意投入时间。',
      en: 'No strict requirements; we offer training plans but expect commitment.',
    },
  },
  {
    q: { zh: '训练时间如何安排？', en: 'How is the schedule arranged?' },
    a: {
      zh: '学期内每周两晚 + 周末半天，赛前会增加强度。',
      en: 'Two evenings plus half-day weekend during school terms; more near events.',
    },
  },
]

export default function JoinPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '加入我们', en: 'Join Us' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '2025 招新窗口：6 月 ~ 9 月，支持机械、电控、算法、媒体方向。',
            en: 'Recruiting window: June–September 2025 for mech, control, software, media.',
          })}
        </p>
        <a className="btn" href={externalLinks['apply.form']} target="_blank" rel="noreferrer">
          {pick({ zh: '填写报名表', en: 'Apply now' })}
        </a>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading">{pick({ zh: '流程', en: 'Process' })}</h2>
        <div className="grid grid-3">
          {steps.map((step, index) => (
            <article key={step.title} className="surface" style={{ boxShadow: 'none' }}>
              <p className="pill">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading">FAQ</h2>
        <div className="grid grid-2">
          {faq.map((item) => (
            <article key={item.q.zh} className="surface" style={{ boxShadow: 'none' }}>
              <h3>{pick(item.q)}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{pick(item.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
