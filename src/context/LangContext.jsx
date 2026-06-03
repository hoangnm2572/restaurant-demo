import { createContext, useContext, useState } from 'react'

const LangCtx = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('vi')
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}
