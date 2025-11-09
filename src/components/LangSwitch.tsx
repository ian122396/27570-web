import { useI18n } from '../hooks/useI18n'

export function LangSwitch() {
  const { lang, setLang } = useI18n()

  const toggle = () => setLang(lang === 'zh' ? 'en' : 'zh')

  return (
    <button
      aria-label="Toggle language"
      className="secondary"
      onClick={toggle}
      type="button"
    >
      {lang === 'zh' ? '中文 / EN' : 'EN / 中文'}
    </button>
  )
}
