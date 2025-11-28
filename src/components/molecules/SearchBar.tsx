'use client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Бүтээгдэхүүн, брэнд хайх..."
        className="w-full pl-12 pr-12 py-3 text-sm text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

