import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr')

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
      toggleLanguage: () => {
        setLocale((prev) => (prev === 'fr' ? 'en' : 'fr'))
      },
    }
  }, [locale])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}