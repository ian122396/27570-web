import team from '../../data/team.json'
import results from '../../data/results.json'
import sponsors from '../../data/sponsors.json'
import links from '../../data/links.json'

import type { TeamData, EventRecord, SponsorInfo } from '../types'

export const teamData = team as TeamData
export const eventData = results as unknown as EventRecord[]
export const sponsorData = sponsors as SponsorInfo[]
export const externalLinks = links as Record<string, string>
