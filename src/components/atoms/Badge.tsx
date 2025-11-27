import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'status' | 'discount' | 'new' | 'category'
  className?: string
}

export default function Badge({ children, variant = 'status', className }: BadgeProps) {
  const variants = {
    status: 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-400',
    discount: 'bg-sale-600 text-white',
    new: 'bg-primary-600 text-white shadow-sm',
    category: 'bg-neutral-100 text-neutral-700 dark:bg-dark-bg-tertiary dark:text-dark-text-primary border border-neutral-200 dark:border-dark-border-default hover:bg-neutral-200 dark:hover:bg-dark-bg-elevated cursor-pointer',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-1 text-label-sm font-medium rounded-md transition-colors duration-150',
        variants[variant],
        className
      )}
    >
      {variant === 'status' && <span className="w-1.5 h-1.5 rounded-full bg-success-500" />}
      {children}
    </span>
  )
}

