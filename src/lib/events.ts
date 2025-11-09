import eventsData from '../../data/results.json'
import { resolveLink } from './links'
import type { EventRecord, EventStatus } from '../types'

const statusOrder: Record<EventStatus, number> = {
  upcoming: 0,
  live: 1,
  finished: 2,
  archived: 3,
}

export const events: EventRecord[] = (eventsData as unknown as EventRecord[])
  .map((event) => {
    const resolvedEntries = Object.entries(event.links ?? {})
      .map(([key, value]) => [key, resolveLink(value)] as const)
      .filter(([, value]) => Boolean(value)) as Array<[string, string]>

    return {
      ...event,
      links: resolvedEntries.length ? Object.fromEntries(resolvedEntries) : undefined,
    }
  })
  .sort((a, b) => {
    const orderDiff = statusOrder[a.status] - statusOrder[b.status]
    if (orderDiff !== 0) return orderDiff
    return (b.startDate ?? '').localeCompare(a.startDate ?? '')
  })

export function getStatusColor(status: EventStatus) {
  switch (status) {
    case 'upcoming':
      return '#1d4ed8'
    case 'live':
      return '#16a34a'
    case 'finished':
      return '#475569'
    default:
      return '#94a3b8'
  }
}

export function getEventNameByLocale(event: EventRecord, lang: 'zh' | 'en') {
  return lang === 'zh' ? event.name_zh : event.name_en
}

export function getEventsBySeason(season: string) {
  return events.filter((event) => event.season === season)
}
