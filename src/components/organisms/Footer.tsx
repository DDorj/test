import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg-secondary border-t border-neutral-200 dark:border-dark-border-default mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Бидний тухай
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Бидний түүх</Link></li>
              <li><Link href="/branches" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Салбарууд</Link></li>
              <li><Link href="/careers" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Ажлын байр</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Холбоо барих
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><a href="tel:+97670111111" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">7011-1111</a></li>
              <li><a href="mailto:info@Techstore.mn" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">info@Techstore.mn</a></li>
              <li><Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Холбоо барих хэсэг</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Үйлчилгээ
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><Link href="/warranty" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Баталгааны бодлого</Link></li>
              <li><Link href="/returns" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Буцаалт, буцаан олголт</Link></li>
              <li><Link href="/delivery" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Хүргэлтийн мэдээлэл</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Мэдээ авах
            </h3>
            <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-4">
              Онцгой санал болон шинэ мэдээлэл авахын тулд бүртгүүлэх
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Таны имэйл"
                className="flex-1 px-4 py-2 text-body-sm bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium text-body-sm rounded-lg transition-colors">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-dark-border-default flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
            © 2025 Tech Store. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Үйлчилгээний нөхцөл
            </Link>
            <Link href="/privacy" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Нууцлалын бодлого
            </Link>
            <Link href="/cookies" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Күүкис
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

