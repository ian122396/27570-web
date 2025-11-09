import { useI18n } from '../hooks/useI18n'
import { externalLinks } from '../data'

const notebookSections = [
  {
    title: { zh: '工程日志模板', en: 'Engineering log template' },
    description: {
      zh: '使用「提出问题→实验→结论→下一步」四段式记录，方便评委快速定位迭代思路。',
      en: 'Uses the question → experiment → conclusion → next-step pattern for fast judging review.',
    },
  },
  {
    title: { zh: 'Outreach 档案', en: 'Outreach archive' },
    description: {
      zh: '包含科普活动 SOP、导师邀约邮件与品牌素材。',
      en: 'Contains outreach SOPs, mentor invite emails, and brand kit assets.',
    },
  },
  {
    title: { zh: '评审 FAQ', en: 'Judging FAQ' },
    description: {
      zh: '整理与裁判、评委沟通时的常见问题与回答要点。',
      en: 'Frequently asked judging questions and concise responses.',
    },
  },
]

export default function PortfolioPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '作品集', en: 'Portfolio' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '工程日志、手册与 Outreach 档案，供评委与合作伙伴查看。',
            en: 'Engineering notebook, playbook excerpts, and outreach files for judges & partners.',
          })}
        </p>

        <div className="surface" style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '0.75rem' }}>
            {pick({
              zh: '下载完整 PDF（占位链接，可替换为最终版）。',
              en: 'Download the full PDF (placeholder link, replace with final version).',
            })}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a className="btn" href={externalLinks['portfolio.pdf']} target="_blank" rel="noreferrer">
              {pick({ zh: '工程手册 PDF', en: 'Engineering Portfolio PDF' })}
            </a>
            <a className="btn secondary" href={externalLinks['handbook.pdf']} target="_blank" rel="noreferrer">
              {pick({ zh: '官方资料', en: 'Official Archive' })}
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-3">
        {notebookSections.map((item) => (
          <article key={item.title.zh} className="surface" style={{ boxShadow: 'none' }}>
            <h3>{pick(item.title)}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{pick(item.description)}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
