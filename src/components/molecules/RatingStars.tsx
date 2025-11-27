import { StarIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating: number
  count?: number
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
  className?: string
}

export default function RatingStars({ rating, count, size = 'md', showCount = true, className }: RatingStarsProps) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={cn(
              sizes[size],
              i < Math.floor(rating)
                ? 'fill-warning-500 text-warning-500'
                : 'fill-neutral-200 text-neutral-200 dark:fill-neutral-700 dark:text-neutral-700'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
          ({count})
        </span>
      )}
    </div>
  )
}

