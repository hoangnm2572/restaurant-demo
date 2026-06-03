import { useLang } from '../context/LanguageContext'
import { TRANSLATIONS } from '../data/i18n'

export function useT() {
  const { lang } = useLang()
  return TRANSLATIONS[lang]
}
