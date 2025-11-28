'use client'

import { useState, useEffect, use } from 'react'
import Image from 'next/image'
import { sampleProducts } from '@/lib/data'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import PriceDisplay from '@/components/molecules/PriceDisplay'
import RatingStars from '@/components/molecules/RatingStars'
import QuantitySelector from '@/components/molecules/QuantitySelector'
import Button from '@/components/atoms/Button'
import ProductGrid from '@/components/organisms/ProductGrid'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { HeartIcon, TruckIcon, ArrowPathIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = sampleProducts.find(p => p.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [mounted, setMounted] = useState(false)
  const [inWishlist, setInWishlist] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (product) {
      setInWishlist(useWishlistStore.getState().isInWishlist(product.id))

      const unsubscribe = useWishlistStore.subscribe((state) => {
        setInWishlist(state.items.includes(product.id))
      })

      return () => unsubscribe()
    }
  }, [product])

  if (!product) {
    return <div className="container py-20 text-center">Бүтээгдэхүүн олдсонгүй</div>
  }

  const relatedProducts = sampleProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    useCartStore.getState().addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
    })
  }

  const handleToggleWishlist = () => {
    useWishlistStore.getState().toggle(product.id)
  }


  return (
    <div className="container py-8">
      <Breadcrumb
        items={[
          { label: 'Нүүр', href: '/' },
          { label: product.category, href: `/category/${product.category}` },
          { label: product.name },
        ]}
      />

      {/* Product Section */}
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-square bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-200 dark:border-dark-border-default rounded-2xl overflow-hidden p-8 relative group mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-contain p-8"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 bg-neutral-100 dark:bg-dark-bg-primary border-2 rounded-lg overflow-hidden transition-colors ${
                    selectedImage === index
                      ? 'border-primary-600 dark:border-primary-500'
                      : 'border-transparent hover:border-neutral-300 dark:hover:border-dark-border-hover'
                  }`}
                >
                  <Image src={image} alt="" width={80} height={80} className="object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-6 lg:mt-0">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-h1 font-bold text-neutral-900 dark:text-dark-text-primary mb-2">
                {product.name}
              </h1>
              <RatingStars rating={product.rating} count={product.reviewCount} />
            </div>
            {mounted && (
              <button
                onClick={handleToggleWishlist}
                className="w-12 h-12 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated rounded-full transition-colors"
              >
                {inWishlist ? (
                  <HeartSolidIcon className="w-6 h-6 text-sale-600" />
                ) : (
                  <HeartIcon className="w-6 h-6 text-neutral-600 dark:text-dark-text-secondary" />
                )}
              </button>
            )}
          </div>

          <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />

          {/* Installment Info */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary">
                💳 Лизингээр авах боломжтой
              </span>
            </div>
            <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-3">
              Сард <span className="font-bold text-primary-600 dark:text-primary-400">₮187,458</span> төлөлтөөр 24 сар
            </p>
            <button className="text-label-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
              Лизинг тооцоолох →
            </button>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <label className="block text-label font-medium text-neutral-900 dark:text-dark-text-primary mb-2">
              Тоо ширхэг
            </label>
            <QuantitySelector value={quantity} onChange={setQuantity} max={product.stock} />
          </div>

          {/* Stock Status */}
          <div className="mt-6 flex items-center justify-between p-4 bg-success-50 dark:bg-success-900/20 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-success-600 dark:text-success-400" />
              <span className="text-body font-medium text-success-700 dark:text-success-400">
                Нөөцөд байгаа
              </span>
            </div>
            <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              {product.stock} ширхэг боломжтой
            </span>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              Сагслах
            </Button>
            <Button size="lg" className="flex-1 bg-neutral-900 text-neutral-400 hover:bg-neutral-800">
              Худалдаж авах
            </Button>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <TruckIcon className="w-5 h-5" />
              Үнэгүй хүргэлт
            </div>
            <div className="flex items-center gap-3 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <ArrowPathIcon className="w-5 h-5" />
              7 хоногийн буцаалтын бодлого
            </div>
            <div className="flex items-center gap-3 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <ShieldCheckIcon className="w-5 h-5" />
              1 жилийн албан ёсны баталгаа
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex items-center gap-1 border-b border-neutral-200 dark:border-dark-border-default mb-6">
          {[
            { en: 'Description', mn: 'Тайлбар' },
            { en: 'Specifications', mn: 'Техникийн үзүүлэлт' },
            { en: 'Reviews', mn: 'Үнэлгээ' }
          ].map((tab) => (
            <button
              key={tab.en}
              onClick={() => setActiveTab(tab.en.toLowerCase())}
              className={`px-6 py-3 text-label font-medium border-b-2 transition-colors ${
                activeTab === tab.en.toLowerCase()
                  ? 'border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-dark-text-secondary hover:text-neutral-900 dark:hover:text-dark-text-primary'
              }`}
            >
              {tab.mn}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl p-6">
          {activeTab === 'description' && (
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-body text-neutral-600 dark:text-dark-text-secondary">
                {product.description}
              </p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-3">
              <div className="flex py-3 border-b border-neutral-200 dark:border-dark-border-default">
                <span className="w-48 text-body-sm font-medium text-neutral-900 dark:text-dark-text-primary">Брэнд</span>
                <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">{product.brand}</span>
              </div>
              <div className="flex py-3 border-b border-neutral-200 dark:border-dark-border-default">
                <span className="w-48 text-body-sm font-medium text-neutral-900 dark:text-dark-text-primary">Ангилал</span>
                <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary capitalize">{product.category}</span>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <p className="text-body text-neutral-600 dark:text-dark-text-secondary">
                Одоогоор үнэлгээ байхгүй байна. Эхний үнэлэгч болоорой!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-h2 font-bold text-neutral-900 dark:text-dark-text-primary mb-6">
            Танд таалагдаж магадгүй
          </h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  )
}

