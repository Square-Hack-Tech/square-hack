// src/ThemeContext.jsx
import React, { createContext, useState, useContext, useMemo } from 'react'
import { darkTheme, lightTheme, multiThem } from '../styles/themes'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => {
      if (prevThemeMode === 'light') return 'dark'
      if (prevThemeMode === 'dark') return 'multiThem'
      return 'light'
    })
  }

  const themeColor = useMemo(() => {
    if (themeMode === 'light') return lightTheme
    if (themeMode === 'dark') return darkTheme
    return multiThem
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, themeColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
