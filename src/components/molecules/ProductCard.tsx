'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Product } from '@/types'
import Badge from '../atoms/Badge'
import RatingStars from './RatingStars'
import PriceDisplay from './PriceDisplay'
import Button from '../atoms/Button'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { calculateDiscount } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, toggle } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)
  const inWishlist = isInWishlist(product.id)
  const discount = product.compareAtPrice ? calculateDiscount(product.compareAtPrice, product.price) : 0

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    })
  }

  return (
    <div className="group relative bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.onSale && discount > 0 && (
          <Badge variant="discount">-{discount}%</Badge>
        )}
        {product.isNew && (
          <Badge variant="new">ШИНЭ</Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => toggle(product.id)}
        className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-dark-bg-secondary"
      >
        {inWishlist ? (
          <HeartSolidIcon className="w-5 h-5 text-sale-600" />
        ) : (
          <HeartIcon className="w-5 h-5 text-neutral-600 dark:text-dark-text-secondary" />
        )}
      </button>

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-neutral-50 dark:bg-dark-bg-primary p-6 relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <p className="text-body-sm text-neutral-500 dark:text-dark-text-muted capitalize">
          {product.category}
        </p>

        {/* Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <RatingStars rating={product.rating} count={product.reviewCount} size="sm" />

        {/* Price */}
        <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} size="sm" />

        {/* Stock Status */}
        {product.stock > 0 ? (
          <div className="flex items-center gap-1.5 text-body-sm text-success-600 dark:text-success-500">
            <div className="w-2 h-2 rounded-full bg-success-500" />
            Нөөцөд байгаа
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-body-sm text-error-600 dark:text-error-500">
            <div className="w-2 h-2 rounded-full bg-error-500" />
            Дууссан
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Сагслах
          </Button>
          <Link href={`/product/${product.slug}`}>
            <button className="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated text-neutral-700 dark:text-dark-text-primary rounded-lg transition-colors duration-150">
              <EyeIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

