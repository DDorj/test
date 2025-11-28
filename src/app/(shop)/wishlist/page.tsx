'use client'

import Image from 'next/image'
import { sampleProducts } from '@/lib/data'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/atoms/Button'
import { TrashIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)

  const wishlistProducts = sampleProducts.filter(p => items.includes(p.id))

  const handleAddToCart = (product: typeof sampleProducts[0]) => {
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    })
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="container py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center">
            <span className="text-5xl">❤️</span>
          </div>
          <h1 className="text-h2 font-bold text-neutral-900 dark:text-dark-text-primary mb-4">
            Таны хүслийн жагсаалт хоосон байна
          </h1>
          <p className="text-body text-neutral-600 dark:text-dark-text-secondary mb-8">
            Таалагдсан бүтээгдэхүүнүүдээ хүслийн жагсаалтанд нэмж эхлээрэй
          </p>
          <Link href="/">
            <Button size="lg">Бүтээгдэхүүн үзэх</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-h1 font-bold text-neutral-900 dark:text-dark-text-primary mb-2">
        Хүслийн жагсаалт
      </h1>
      <p className="text-body text-neutral-600 dark:text-dark-text-secondary mb-8">
        {wishlistProducts.length} бүтээгдэхүүн хадгалсан
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl overflow-hidden"
          >
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

            <div className="p-4">
              <Link href={`/product/${product.slug}`}>
                <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-2">
                  {product.name}
                </h3>
              </Link>

              <p className="text-h4 font-bold text-neutral-900 dark:text-dark-text-primary mb-4">
                {formatPrice(product.price)}
              </p>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCartIcon className="w-4 h-4" />
                  Сагслах
                </Button>
                <button
                  onClick={() => removeItem(product.id)}
                  className="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-error-50 dark:bg-dark-bg-tertiary dark:hover:bg-error-900/20 text-neutral-600 hover:text-error-600 dark:text-dark-text-secondary dark:hover:text-error-500 rounded-lg transition-colors"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

