'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, HeartIcon, UserCircleIcon, MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline'
import SearchBar from '../molecules/SearchBar'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [itemCount, setItemCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Update counts only on client side
    setItemCount(useCartStore.getState().itemCount())
    setWishlistCount(useWishlistStore.getState().items.length)

    // Subscribe to store updates
    const unsubscribeCart = useCartStore.subscribe((state) => {
      setItemCount(state.itemCount())
    })

    const unsubscribeWishlist = useWishlistStore.subscribe((state) => {
      setWishlistCount(state.items.length)
    })

    return () => {
      unsubscribeCart()
      unsubscribeWishlist()
    }
  }, [])

    const categories = [
        { id: '1', slug: 'smartphones', name: 'Ухаалаг утас', productCount: 120 },
        { id: '2', slug: 'tablets', name: 'Таблет', productCount: 45 },
        { id: '3', slug: 'laptops', name: 'Зөөврийн компьютер', productCount: 78 },
        { id: '4', slug: 'watches', name: 'Ухаалаг цаг', productCount: 32 },
        { id: '5', slug: 'accessories', name: 'Дагалдах хэрэгсэл', productCount: 200 },
    ]

    return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-dark-bg-secondary/95 backdrop-blur-md border-b border-neutral-200 dark:border-dark-border-default">

      {/* Main Navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo/Tech-ZONE-logo-hundlun-black-2.webp"
              alt="Tech Store"
              width={180}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-2xl">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5 text-dark-text-primary" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-neutral-700" />
                )}
              </button>
            )}

            {/* Wishlist */}
            <Link href="/wishlist">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors relative">
                <HeartIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
                {mounted && wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-sale-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors relative">
                <ShoppingCartIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
                {mounted && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 dark:bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Account */}
            <button
              onClick={() => alert('Хэрэглэгчийн хуудас удахгүй!')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors"
            >
              <UserCircleIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
              <span className="text-body font-medium text-neutral-700 dark:text-dark-text-primary">
                Нэвтрэх
              </span>
            </button>

            {/* Mobile Menu */}
            <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
              <Bars3Icon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
            </button>
          </div>
        </div>

        {/* Category Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 mt-4 border-t border-neutral-200 dark:border-dark-border-default pt-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug.toLowerCase()}`}
              className="px-4 py-2 text-body font-medium text-neutral-700 dark:text-dark-text-primary hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-lg transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden mt-4">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

