'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, HeartIcon, UserCircleIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
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
    setItemCount(useCartStore.getState().itemCount())
    setWishlistCount(useWishlistStore.getState().items.length)

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
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/Tech-ZONE-logo-hundlun-black-2.webp"
              alt="Tech Store"
              width={160}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5 text-neutral-200" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-neutral-700" />
                )}
              </button>
            )}

            {/* Wishlist */}
            <Link href="/wishlist">
              <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                <HeartIcon className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
                {mounted && wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <button className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300">
                <ShoppingCartIcon className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
                {mounted && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Account */}
            <button
              onClick={() => alert('Хэрэглэгчийн хуудас удахгүй!')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
            >
              <UserCircleIcon className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Нэвтрэх
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="lg:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors duration-300"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

