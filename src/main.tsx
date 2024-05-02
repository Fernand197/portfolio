import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from 'i18next'
import common_en from './translations/en/common.json'
import common_fr from './translations/fr/common.json'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: common_en
    },
    fr: {
      translation: common_fr
    }
  },
  interpolation: {
    escapeValue: false
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
