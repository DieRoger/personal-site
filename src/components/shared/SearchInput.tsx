'use client'

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索作品、文章、笔记..."
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 
          bg-white dark:bg-gray-900 text-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition-all"
      />
    </form>
  )
}
