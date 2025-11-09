import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Locale = 'zh' | 'en'

type Dictionary = Record<
  Locale,
  Record<string, string | Record<string, string>>
>

export type Localized<T = string> = Record<Locale, T>

interface I18nContextValue {
  lang: Locale
  setLang: (next: Locale) => void
  t: (key: string) => string
  pick: <T>(localized: Localized<T>) => T
}

const STORAGE_KEY = 'ftc-27570-lang'

const dictionary: Dictionary = {
  zh: {
    'brand.full': '27570 BEAR',
    'brand.tagline': 'Decode the game. Rebuild the future.',
    'nav.home': '首页',
    'nav.season': '本赛季',
    'nav.history': '历史与成就',
    'nav.team': '团队',
    'nav.robot': '机器人',
    'nav.results': '战绩',
    'nav.portfolio': '作品集',
    'nav.gallery': '图库',
    'nav.sponsors': '赞助',
    'nav.join': '加入我们',
    'nav.contact': '联系我们',
    'actions.join': '加入我们',
    'actions.sponsor': '赞助我们',
    'actions.viewSeason': '查看本赛季',
    'status.upcoming': '未开始',
    'status.live': '进行中',
    'status.finished': '已结束',
    'status.archived': '历史',
    'footer.rights': '版权所有',
    'footer.madeBy': '由 FTC 27570 BEAR 构建',
  },
  en: {
    'brand.full': '27570 BEAR',
    'brand.tagline': 'Decode the game. Rebuild the future.',
    'nav.home': 'Home',
    'nav.season': 'Season',
    'nav.history': 'Archive',
    'nav.team': 'Team',
    'nav.robot': 'Robot',
    'nav.results': 'Results',
    'nav.portfolio': 'Portfolio',
    'nav.gallery': 'Gallery',
    'nav.sponsors': 'Sponsors',
    'nav.join': 'Join',
    'nav.contact': 'Contact',
    'actions.join': 'Join Us',
    'actions.sponsor': 'Support Us',
    'actions.viewSeason': 'Season Overview',
    'status.upcoming': 'Upcoming',
    'status.live': 'Live',
    'status.finished': 'Finished',
    'status.archived': 'Archived',
    'footer.rights': 'All rights reserved',
    'footer.madeBy': 'Built by FTC 27570 BEAR',
  },
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const resolveDefaultLocale = (): Locale => {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === 'zh' || stored === 'en') return stored
  const browser = navigator.language.toLowerCase()
  return browser.startsWith('zh') ? 'zh' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>(() => resolveDefaultLocale())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en'
  }, [lang])

  const t = useCallback(
    (key: string) => {
      const value = dictionary[lang][key]
      if (!value) return key
      return typeof value === 'string' ? value : key
    },
    [lang],
  )

  const pick = useCallback(
    <T,>(localized: Localized<T>) => {
      return localized[lang] ?? localized.zh
    },
    [lang],
  )

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t,
      pick,
    }),
    [lang, pick, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
