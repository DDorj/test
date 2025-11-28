'use client'

import { use, useState } from 'react'
import { sampleProducts } from '@/lib/data'
import ProductGrid from '@/components/organisms/ProductGrid'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [onSaleOnly, setOnSaleOnly] = useState(false)
  const [sortBy, setSortBy] = useState('best-selling')

  // Filter products
  let categoryProducts = sampleProducts.filter(p => p.category === slug)
  
  // Apply filters
  if (inStockOnly) {
    categoryProducts = categoryProducts.filter(p => p.stock > 0)
  }
  if (onSaleOnly) {
    categoryProducts = categoryProducts.filter(p => p.onSale)
  }
  categoryProducts = categoryProducts.filter(
    p => p.price >= priceRange[0] && p.price <= priceRange[1]
  )
  
  // Apply sorting
  switch (sortBy) {
    case 'newest':
      categoryProducts = categoryProducts.filter(p => p.isNew)
      break
    case 'price-low':
      categoryProducts = [...categoryProducts].sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      categoryProducts = [...categoryProducts].sort((a, b) => b.price - a.price)
      break
    case 'rating':
      categoryProducts = [...categoryProducts].sort((a, b) => b.rating - a.rating)
      break
  }
  
  const clearFilters = () => {
    setPriceRange([0, 10000000])
    setInStockOnly(false)
    setOnSaleOnly(false)
    setSortBy('best-selling')
  }

  return (
    <div className="container py-8">
      <Breadcrumb
        items={[
          { label: 'Нүүр', href: '/' },
          { label: 'Ангилал', href: '/category' },
          { label: slug },
        ]}
      />

      <div className="mt-6 mb-8">
        <h1 className="text-h1 font-bold mb-2 capitalize">{slug}</h1>
        <p className="text-body text-neutral-600 dark:text-dark-text-secondary">
          {categoryProducts.length} бүтээгдэхүүн олдлоо
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
        {/* Filter Sidebar - Desktop */}
        <aside className="hidden lg:block">
          <div className="bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl p-6 space-y-6 sticky top-24">
            <div className="flex items-center justify-between">
              <h3 className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary">
                Шүүлтүүр
              </h3>
              <button 
                onClick={clearFilters}
                className="text-body-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
              >
                Бүгдийг арилгах
              </button>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
                Үнийн хязгаар
              </h4>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 accent-primary-600 dark:accent-primary-500 cursor-pointer"
                />
                <div className="space-y-3">
                  <div>
                    <label className="block text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-1.5">
                      Доод
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2.5 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-1.5">
                      Дээд
                    </label>
                    <input
                      type="number"
                      placeholder="10000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000000])}
                      className="w-full px-3 py-2.5 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
                Нөөцийн байдал
              </h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
                  />
                  <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Нөөцөд байгаа
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                    className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
                  />
                  <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Хямдралтай
                  </span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        {showFilters && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
            
            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white dark:bg-dark-bg-secondary z-50 overflow-y-auto lg:hidden">
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary">
                    Шүүлтүүр
                  </h3>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Price Range - Mobile */}
                <div>
                  <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
                    Үнийн хязгаар
                  </h4>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="10000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full h-2 accent-primary-600 dark:accent-primary-500 cursor-pointer"
                    />
                    <div className="space-y-3">
                      <div>
                        <label className="block text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-1.5">
                          Доод үнэ
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                          className="w-full px-4 py-3 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[48px]"
                        />
                      </div>
                      <div>
                        <label className="block text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-1.5">
                          Дээд үнэ
                        </label>
                        <input
                          type="number"
                          placeholder="10000000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000000])}
                          className="w-full px-4 py-3 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[48px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stock Status - Mobile */}
                <div>
                  <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
                    Нөөцийн байдал
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
                      />
                      <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Нөөцөд байгаа
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={onSaleOnly}
                        onChange={(e) => setOnSaleOnly(e.target.checked)}
                        className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
                      />
                      <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        Хямдралтай
                      </span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-neutral-200 dark:border-dark-border-default">
                  <button
                    onClick={clearFilters}
                    className="flex-1 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated text-neutral-900 dark:text-dark-text-primary font-medium rounded-lg transition-colors"
                  >
                    Арилгах
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 px-4 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Хэрэглэх
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Main Content */}
        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-bg-secondary border border-neutral-300 dark:border-dark-border-default rounded-lg hover:bg-neutral-50 dark:hover:bg-dark-bg-tertiary transition-colors"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              <span className="text-body font-medium">Шүүлтүүр</span>
              {(inStockOnly || onSaleOnly || priceRange[0] > 0 || priceRange[1] < 10000000) && (
                <span className="ml-1 px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full">
                  •
                </span>
              )}
            </button>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-dark-bg-secondary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
              >
                <option value="best-selling">Эрэлттэй</option>
                <option value="newest">Шинэ</option>
                <option value="price-low">Үнэ: Багаас их</option>
                <option value="price-high">Үнэ: Ихээс бага</option>
                <option value="rating">Үнэлгээ</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid products={categoryProducts} />
        </div>
      </div>
    </div>
  )
}

