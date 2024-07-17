import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState(getStoredTheme())

  function getStoredTheme() {
    return localStorage.getItem('theme')
  }

  function setStoredTheme(theme: string) {
    localStorage.setItem('theme', theme)
  }

  function getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function setTheme(theme: string) {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  useEffect(() => {
    const storedTheme = getStoredTheme()
    const preferredTheme = getPreferredTheme()
    setTheme(storedTheme || preferredTheme)
    setSelectedTheme(storedTheme || preferredTheme)

    const listener = () => {
      const storedTheme = getStoredTheme()
      if (!storedTheme || storedTheme === 'auto') {
        setTheme(getPreferredTheme())
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener)
    }
  }, [])

  const handleThemeChange = (event: any) => {
    const theme = event.target.value
    setStoredTheme(theme)
    setSelectedTheme(theme)
    setTheme(theme)
  }

  return (
    <select className="form-select" value={selectedTheme ?? 'auto'} onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="auto">Auto</option>
    </select>
  )
}

export default ThemeSwitcher
