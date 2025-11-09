import { ResultTable } from '../components/ResultTable'
import { useI18n } from '../hooks/useI18n'
import { events } from '../lib/events'

export default function ResultsPage() {
  const { pick } = useI18n()
  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '战绩总览', en: 'Results' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '集中展示 FTC 27570 BEAR 的赛事表现与获奖记录。',
            en: 'Consolidated view of FTC 27570 BEAR match performance and awards.',
          })}
        </p>
      </section>

      <ResultTable events={events} />
    </div>
  )
}
