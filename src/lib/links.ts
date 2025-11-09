import rawLinks from '../../data/links.json'

export const linkMap = rawLinks as Record<string, string>

export function resolveLink(value?: string) {
  if (!value) return undefined
  if (value.startsWith('@links.')) {
    const key = value.replace('@links.', '')
    return linkMap[key] ?? value
  }
  return value
}

export function hydrateLinks(markdown: string) {
  return markdown.replace(/@links\.([a-z0-9._-]+)/gi, (_, key: string) => {
    const url = linkMap[key] ?? `https://example.com/${key}`
    return `<${url}>`
  })
}
