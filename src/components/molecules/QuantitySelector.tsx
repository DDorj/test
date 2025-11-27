'use client'

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99, className }: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1)
  }

  const handleIncrease = () => {
    if (value < max) onChange(value + 1)
  }

  return (
    <div className={cn('inline-flex items-center', className)}>
      <button
        onClick={handleDecrease}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated text-neutral-700 dark:text-dark-text-primary rounded-l-lg border border-r-0 border-neutral-300 dark:border-dark-border-default transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MinusIcon className="w-5 h-5" />
      </button>

      <input
        type="number"
        value={value}
        onChange={(e) => {
          const num = parseInt(e.target.value)
          if (!isNaN(num) && num >= min && num <= max) {
            onChange(num)
          }
        }}
        min={min}
        max={max}
        className="w-16 h-10 text-center text-body font-medium text-neutral-900 dark:text-dark-text-primary bg-white dark:bg-dark-bg-secondary border-y border-neutral-300 dark:border-dark-border-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10"
      />

      <button
        onClick={handleIncrease}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated text-neutral-700 dark:text-dark-text-primary rounded-r-lg border border-l-0 border-neutral-300 dark:border-dark-border-default transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

