import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_KEY = 'ftc-27570-theme'

const systemPrefersDark = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') return stored
  return systemPrefersDark() ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button
      aria-label="Toggle theme"
      className="secondary"
      onClick={toggle}
      type="button"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  )
}
