import { useLanguage } from '../context/LanguageContext'
import { siteContent } from '../data/siteContent'

export function useSiteContent() {
  const { locale } = useLanguage()
  return siteContent[locale]
}