'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { Product } from '@/types'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { calculateDiscount, formatPrice } from '@/lib/utils'
import ProductImageViewer from './ProductImageViewer'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

// Normalize image URL to ensure it works with Next.js Image component
function normalizeImageUrl(url: string | undefined): string {
  if (!url) return '/placeholder.png'

  // If URL is already a full URL (http/https), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  // If URL starts with //, add https:
  if (url.startsWith('//')) {
    return `https:${url}`
  }

  // If URL is relative, use API URL or return as-is for local images
  if (url.startsWith('/')) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    return apiUrl ? `${apiUrl}${url}` : url
  }

  // Default: return as-is
  return url
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [viewerOpen, setViewerOpen] = useState(false)
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
      image: normalizeImageUrl(product.images[0]),
    })
  }

  // Get normalized image URL
  const imageUrl = normalizeImageUrl(product?.images?.[0])
  const normalizedImages = product?.images?.map(img => normalizeImageUrl(img)) || [imageUrl]

  return (
    <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
        {product.onSale && discount > 0 && (
          <span className="inline-flex items-center px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-md shadow-sm">
            -{discount}%
          </span>
        )}
        {product.isNew && (
          <span className="inline-flex items-center px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-md shadow-sm">
            ШИНЭ
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => toggle(product.id)}
        className="absolute top-2 right-2 z-10 w-9 h-9 flex items-center justify-center bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-sm"
      >
        {inWishlist ? (
          <HeartSolidIcon className="w-5 h-5 text-red-600" />
        ) : (
          <HeartIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
        )}
      </button>

      {/* Image */}
      <div className="relative">
        <Link href={`/product/${product?.slug}`} className="relative block">
          <div className="aspect-square bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
            {imageUrl && imageUrl !== '/placeholder.png' ? (
              <div className="relative w-full h-full p-6">
                <Image
                  src={imageUrl}
                  alt={product?.name || 'Product image'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 75vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority={priority}
                  unoptimized={imageUrl.includes('scene7.com')}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        </Link>

        {/*/!* Zoom Icon Overlay *!/*/}
        {/*{imageUrl && imageUrl !== '/placeholder.png' && (*/}
        {/*  <button*/}
        {/*    onClick={(e) => {*/}
        {/*      e.preventDefault()*/}
        {/*      setViewerOpen(true)*/}
        {/*    }}*/}
        {/*    className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"*/}
        {/*    aria-label="View full size image"*/}
        {/*  >*/}
        {/*    <div className="w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full shadow-lg">*/}
        {/*      <svg className="w-6 h-6 text-neutral-900 dark:text-neutral-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />*/}
        {/*      </svg>*/}
        {/*    </div>*/}
        {/*  </button>*/}
        {/*)}*/}
      </div>


      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
          {product.category}
        </p>

        {/* Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2 mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 min-h-[48px]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-neutral-300 dark:text-neutral-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-neutral-600 dark:text-neutral-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        {product.stock > 0 ? (
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Нөөцөд байгаа</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm font-medium text-red-600 dark:text-red-400">Дууссан</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-md disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Сагслах
          </button>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ProductImageViewer
        images={normalizedImages}
        currentIndex={0}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        productName={product.name}
      />
    </div>
  )
}

