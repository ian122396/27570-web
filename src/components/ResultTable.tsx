import { useI18n } from '../hooks/useI18n'
import type { EventRecord } from '../types'
import { getEventNameByLocale, getStatusColor } from '../lib/events'

interface ResultTableProps {
  events: EventRecord[]
}

export function ResultTable({ events }: ResultTableProps) {
  const { lang, t } = useI18n()

  return (
    <div className="surface" style={{ padding: 0, overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            <th>{lang === 'zh' ? '赛事' : 'Event'}</th>
            <th>{lang === 'zh' ? '时间' : 'Date'}</th>
            <th>{lang === 'zh' ? '状态' : 'Status'}</th>
            <th>{lang === 'zh' ? '排名 / 奖项' : 'Rank / Awards'}</th>
            <th>{lang === 'zh' ? '链接' : 'Links'}</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>
                <strong>{getEventNameByLocale(event, lang)}</strong>
                {event.location && (
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {event.location}
                  </p>
                )}
              </td>
              <td>{event.dateRange ?? '-'}</td>
              <td>
                <span
                  className="tag"
                  style={{
                    background: getStatusColor(event.status),
                    color: '#fff',
                  }}
                >
                  {t(`status.${event.status}`)}
                </span>
              </td>
              <td>
                {event.rank || event.awards?.length
                  ? (
                      <>
                        {event.rank && <div>{event.rank}</div>}
                        {event.awards?.map((award) => (
                          <div key={award} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            {award}
                          </div>
                        ))}
                      </>
                    )
                  : '—'}
              </td>
              <td>
                {event.links ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {Object.entries(event.links).map(([label, url]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--brand)' }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                ) : (
                  '—'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
