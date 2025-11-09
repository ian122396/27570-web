export type EventStatus = 'upcoming' | 'live' | 'finished' | 'archived'

export interface EventRecord {
  id: string
  season: string
  eventCode?: string
  name_zh: string
  name_en: string
  location?: string
  dateRange?: string
  startDate?: string
  endDate?: string
  rank?: string
  awards?: string[]
  status: EventStatus
  notes_zh?: string
  notes_en?: string
  links?: Record<string, string>
}

export interface Member {
  name: string
  role: string
  role_en: string
  focus?: string
  focus_en?: string
  avatar?: string
}

export interface Mentor {
  name: string
  focus: string
  focus_en: string
}

export interface TeamData {
  teamNumber: string
  teamName: string
  tagline_zh: string
  tagline_en: string
  members: Member[]
  mentors: Mentor[]
  dutyRoster: string
}

export interface SponsorInfo {
  name: string
  tier: string
  website: string
  logo: string
  statement_zh: string
  statement_en: string
}
