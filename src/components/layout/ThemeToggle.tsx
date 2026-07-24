'use client'

import { useState } from 'react'

// 在模块作用域中读取主题，不需要 effect
function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = saved ? saved === 'dark' : prefersDark
  if (isDark) {
    document.documentElement.classList.add('dark')
  }
  return isDark
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme)

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={dark ? '切换亮色模式' : '切换暗色模式'}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
