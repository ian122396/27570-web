import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './hooks/useI18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <I18nProvider>
          <App />
        </I18nProvider>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
)
