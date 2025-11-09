export interface SeoConfig {
  title: string
  description: string
  url?: string
  image?: string
}

export const baseSEO: SeoConfig = {
  title: '27570 BEAR · FTC Team',
  description:
    'FTC 27570 BEAR — Chongqing based robotics team focusing on DECODE 2025-2026 with open engineering logs, outreach, and modern robot systems.',
  url: 'https://ftc27570-bear.github.io',
  image: '/gallery/2025-06-lab-night.jpg',
}

export function buildSeo(config?: Partial<SeoConfig>) {
  return { ...baseSEO, ...config }
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FTC 27570 BEAR',
    url: baseSEO.url,
    sameAs: [
      'https://www.instagram.com/ftc27570bear',
      'https://github.com/ftc27570-bear',
      'https://www.bilibili.com',
    ],
    logo: `${baseSEO.url}/gallery/2025-07-chassis-lin.jpg`,
  }
}

export function buildEventSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIRST Tech Challenge Chongqing Qualifier #1',
    startDate: '2025-11-15',
    endDate: '2025-11-16',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Chongqing International Expo Center',
      address: 'Chongqing, China',
    },
    organizer: {
      '@type': 'Organization',
      name: 'FTC 27570 BEAR',
      url: baseSEO.url,
    },
  }
}
