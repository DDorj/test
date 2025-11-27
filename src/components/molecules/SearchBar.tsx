'use client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setQuery('')
  }

  return (
    <div className="relative w-full max-w-2xl">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products, brands..."
        className="w-full pl-12 pr-12 py-3.5 text-body text-neutral-900 dark:text-dark-text-primary bg-white dark:bg-dark-bg-secondary border border-neutral-300 dark:border-dark-border-default rounded-full placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-600 dark:hover:text-dark-text-primary rounded-full hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors duration-150"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

