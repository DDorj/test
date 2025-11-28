import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Бидний тухай
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Бидний түүх
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Салбарууд
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Ажлын байр
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Холбоо барих
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+97670111111" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  7011-1111
                </a>
              </li>
              <li>
                <a href="mailto:info@Techstore.mn" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  info@Techstore.mn
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Холбоо барих хэсэг
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Үйлчилгээ
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/warranty" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Баталгааны бодлого
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Буцаалт, буцаан олголт
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Хүргэлтийн мэдээлэл
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Мэдээ авах
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Онцгой санал болон шинэ мэдээлэл авахын тулд бүртгүүлэх
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Таны имэйл"
                className="flex-1 px-4 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-md">
                Бүртгүүлэх
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © 2025 Tech Store. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Үйлчилгээний нөхцөл
            </Link>
            <Link href="/privacy" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Нууцлалын бодлого
            </Link>
            <Link href="/cookies" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Күүкис
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

