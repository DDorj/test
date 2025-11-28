import Link from 'next/link'
import Image from 'next/image'
import { sampleProducts, categories } from '@/lib/data'
import ProductGrid from '@/components/product/ProductGrid'
import Button from '@/components/ui/Button'
import { ChevronRightIcon, TruckIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const featuredProducts = sampleProducts.filter(p => p.featured)
  const saleProducts = sampleProducts.filter(p => p.onSale)
  const newProducts = sampleProducts.filter(p => p.isNew)

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner/herobanner-desktop-2x.webp"
            alt="Gift Card Banner"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-bold mb-6">
              iPhone 15 Pro Max
            </h1>
            <p className="text-h3 mb-4">
              Энэ долоо хоногт 30% хөнгөлөлттэй
            </p>
            <p className="text-body-lg mb-8 text-white/90">
              Титан загвар, A17 Pro чип, дэвшилтэт камер системтэй хамгийн шилдэг iPhone
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                Худалдаж авах
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Дэлгэрэнгүй
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Ангилалаар хайх
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-4xl">
                {category.slug === 'smartphones' && '📱'}
                {category.slug === 'tablets' && '💻'}
                {category.slug === 'laptops' && '🖥️'}
                {category.slug === 'watches' && '⌚'}
                {category.slug === 'accessories' && '🎧'}
              </div>
              <h3 className="text-base font-semibold text-center text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-center text-neutral-500 dark:text-neutral-400 mt-2">
                {category.productCount} бүтээгдэхүүн
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <span>⚡</span>
            Онцлох бүтээгдэхүүн
          </h2>
          <Link href="/category/all">
            <Button variant="ghost" className="gap-2">
              Бүгдийг үзэх
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Sale Products */}
      {saleProducts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>🔥</span>
              Хямдралтай бүтээгдэхүүн
            </h2>
            <Link href="/category/sale">
              <Button variant="ghost" className="gap-2">
                Бүгдийг үзэх
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={saleProducts} />
        </section>
      )}

      {/* Installment Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              💳 Хүссэн төхөөрөмжөө 0% хүүгийн лизингээр авах
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
              36 сар хүртэл • Хүүгүй • Хурдан баталгаажуулалт
            </p>
            <Button size="lg">Тооцоолох</Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <span>🆕</span>
              Шинэ бүтээгдэхүүн
            </h2>
            <Link href="/category/new">
              <Button variant="ghost" className="gap-2">
                Бүгдийг үзэх
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={newProducts} />
        </section>
      )}

      {/* Brands */}
      {/*<section className="container py-12">*/}
      {/*  <h2 className="text-h2 font-bold text-neutral-900 dark:text-dark-text-primary mb-6">*/}
      {/*    Shop by Brand*/}
      {/*  </h2>*/}
      {/*  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">*/}
      {/*    {brands.map((brand) => (*/}
      {/*      <Link*/}
      {/*        key={brand.id}*/}
      {/*        href={`/brand/${brand.slug}`}*/}
      {/*        className="p-8 bg-white dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border-default rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"*/}
      {/*      >*/}
      {/*        <span className="text-h4 font-bold text-neutral-900 dark:text-dark-text-primary">*/}
      {/*          {brand.name}*/}
      {/*        </span>*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Trust Badges */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-center transition-all duration-300 hover:shadow-md">
            <TruckIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Үнэгүй хүргэлт
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Улаанбаатар хот даяар
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-center transition-all duration-300 hover:shadow-md">
            <CheckBadgeIcon className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              100% Оригнал
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Бүх бүтээгдэхүүн баталгаатай
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-center transition-all duration-300 hover:shadow-md">
            <ShieldCheckIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
              Найдвартай төлбөр
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              SSL шифрлэлттэй
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

