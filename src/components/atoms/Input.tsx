'use client'

import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-label-sm font-medium text-neutral-700 dark:text-dark-text-primary mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-2.5 text-body text-neutral-900 dark:text-dark-text-primary bg-white dark:bg-dark-bg-secondary border rounded-lg placeholder:text-neutral-400 dark:placeholder:text-dark-text-muted transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-neutral-400 dark:hover:border-dark-border-hover disabled:bg-neutral-50 dark:disabled:bg-dark-bg-primary disabled:cursor-not-allowed',
            error ? 'border-error-500' : 'border-neutral-300 dark:border-dark-border-default',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-body-xs text-error-600 dark:text-error-500 flex items-center gap-1">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-body-xs text-neutral-500 dark:text-dark-text-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

