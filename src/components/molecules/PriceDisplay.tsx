import { formatPrice, calculateDiscount } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface PriceDisplayProps {
  price: number
  compareAtPrice?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function PriceDisplay({ price, compareAtPrice, size = 'md', className }: PriceDisplayProps) {
  const discount = compareAtPrice ? calculateDiscount(compareAtPrice, price) : 0

  const sizes = {
    sm: { price: 'text-h5', compare: 'text-body-sm' },
    md: { price: 'text-h4', compare: 'text-body' },
    lg: { price: 'text-display-lg', compare: 'text-h4' },
  }

  return (
    <div className={cn('flex items-baseline gap-3', className)}>
      <span className={cn(sizes[size].price, 'font-bold text-neutral-900 dark:text-dark-text-primary')}>
        {formatPrice(price)}
      </span>
      {compareAtPrice && (
        <>
          <span className={cn(sizes[size].compare, 'text-neutral-400 dark:text-dark-text-muted line-through')}>
            {formatPrice(compareAtPrice)}
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-sale-600 text-white text-label font-bold rounded-md">
            Save {discount}%
          </span>
        </>
      )}
    </div>
  )
}

