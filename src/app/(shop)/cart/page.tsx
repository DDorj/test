'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/atoms/Button'
import QuantitySelector from '@/components/molecules/QuantitySelector'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore()
  const subtotal = total()
  const shipping = 0 // Free shipping
  const totalAmount = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="container py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center">
            <span className="text-5xl">🛒</span>
          </div>
          <h1 className="text-h2 font-bold text-neutral-900 dark:text-dark-text-primary mb-4">
            Your cart is empty
          </h1>
          <p className="text-body text-neutral-600 dark:text-dark-text-secondary mb-8">
            Start shopping and add products to your cart
          </p>
          <Link href="/">
            <Button size="lg">Browse Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="text-h1 font-bold text-neutral-900 dark:text-dark-text-primary mb-8">
        Shopping Cart
      </h1>

      <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-8">
        {/* Cart Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-body text-neutral-600 dark:text-dark-text-secondary">
              {items.length} {items.length === 1 ? 'item' : 'items'} in cart
            </p>
            <button
              onClick={clearCart}
              className="text-body-sm text-error-600 dark:text-error-500 hover:underline"
            >
              Clear All
            </button>
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl"
            >
              {/* Image */}
              <div className="relative w-24 h-24 bg-neutral-50 dark:bg-dark-bg-primary rounded-lg flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <Link href={`/product/${item.productId}`}>
                  <h3 className="text-body font-medium text-neutral-900 dark:text-dark-text-primary line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-1">
                    {item.name}
                  </h3>
                </Link>
                {item.variant && (
                  <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-2">
                    {item.variant}
                  </p>
                )}

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity */}
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(qty) => updateQuantity(item.productId, qty)}
                  />

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-h5 font-bold text-neutral-900 dark:text-dark-text-primary">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-body-xs text-neutral-500 dark:text-dark-text-muted">
                        {formatPrice(item.price)} each
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.productId)}
                className="self-start w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-50 dark:hover:bg-error-900/20 text-neutral-400 hover:text-error-600 dark:hover:text-error-500 transition-colors"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          ))}

          <Link href="/">
            <Button variant="ghost" className="mt-4">
              ← Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl p-6 sticky top-24">
            <h2 className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary mb-6">
              Order Summary
            </h2>

            {/* Promo Code */}
            <div className="mb-6">
              <label className="block text-label-sm font-medium text-neutral-900 dark:text-dark-text-primary mb-2">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-4 py-2.5 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button variant="secondary">Apply</Button>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-body">
                <span className="text-neutral-600 dark:text-dark-text-secondary">Subtotal</span>
                <span className="font-medium text-neutral-900 dark:text-dark-text-primary">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-body">
                <span className="text-neutral-600 dark:text-dark-text-secondary">Shipping</span>
                <span className="font-medium text-success-600 dark:text-success-500">Free</span>
              </div>
              <div className="pt-3 border-t border-neutral-200 dark:border-dark-border-default">
                <div className="flex items-center justify-between">
                  <span className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary">
                    Total
                  </span>
                  <span className="text-h3 font-bold text-neutral-900 dark:text-dark-text-primary">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Installment Info */}
            <div className="mb-6 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
                💳 Installment Available
              </p>
              <p className="text-body-sm font-medium text-primary-600 dark:text-primary-400 mt-1">
                From {formatPrice(Math.floor(totalAmount / 24))}/month
              </p>
            </div>

            <Button size="lg" className="w-full mb-3" onClick={() => alert('Checkout page coming soon!')}>
              Proceed to Checkout
            </Button>

            <button className="w-full text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-neutral-900 dark:hover:text-dark-text-primary transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

