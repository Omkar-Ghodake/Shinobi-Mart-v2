'use client'

import { Theme, ThemeContextType } from '@/types/dataTypes'
import React, { createContext, ReactNode, useContext, useState } from 'react'

const ThemeContext = createContext<ThemeContextType>(null)

const ThemeState = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.classList.add('dark')
    } else {
      setTheme('light')
      document.body.classList.remove('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context) return context

  throw new Error('Use useTheme inside ThemeContext Provider!')
}

export default ThemeState
