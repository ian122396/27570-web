import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/Home'
import SeasonPage from './pages/Season'
import HistoryPage from './pages/History'
import TeamPage from './pages/Team'
import RobotPage from './pages/Robot'
import ResultsPage from './pages/Results'
import PortfolioPage from './pages/Portfolio'
import GalleryPage from './pages/Gallery'
import SponsorsPage from './pages/Sponsors'
import JoinPage from './pages/Join'
import ContactPage from './pages/Contact'
import { LangSwitch } from './components/LangSwitch'
import { ThemeToggle } from './components/ThemeToggle'
import { Seo } from './components/Seo'
import { useI18n } from './hooks/useI18n'
import { externalLinks } from './data'

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/season', label: 'nav.season' },
  { path: '/history', label: 'nav.history' },
  { path: '/team', label: 'nav.team' },
  { path: '/robot', label: 'nav.robot' },
  { path: '/results', label: 'nav.results' },
  { path: '/portfolio', label: 'nav.portfolio' },
  { path: '/gallery', label: 'nav.gallery' },
  { path: '/sponsors', label: 'nav.sponsors' },
  { path: '/join', label: 'nav.join' },
  { path: '/contact', label: 'nav.contact' },
]

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])
  return null
}

function AppShell() {
  const { t } = useI18n()

  return (
    <div className="app-shell">
      <Seo />
      <ScrollToTop />
      <header style={{ padding: '1.5rem 0' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavLink to="/" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            {t('brand.full')}
          </NavLink>
          <nav style={{ flex: 1, minWidth: '100%' }}>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                margin: 0,
                padding: 0,
                listStyle: 'none',
              }}
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    style={({ isActive }) => ({
                      padding: '0.35rem 0.75rem',
                      borderRadius: '999px',
                      background: isActive ? 'var(--bg-muted)' : 'transparent',
                      color: 'inherit',
                    })}
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <LangSwitch />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/season" element={<SeasonPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/robot" element={<RobotPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>
            {t('brand.full')} · {t('footer.madeBy')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={externalLinks['team.github']} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={externalLinks['team.instagram']} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={externalLinks['team.bilibili']} target="_blank" rel="noreferrer">
              Bilibili
            </a>
            <a href={externalLinks['team.email']}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return <AppShell />
}
