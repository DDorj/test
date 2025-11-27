import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg-secondary border-t border-neutral-200 dark:border-dark-border-default mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              About Us
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Our Story</Link></li>
              <li><Link href="/branches" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Our Branches</Link></li>
              <li><Link href="/careers" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><a href="tel:+97670111111" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">7011-1111</a></li>
              <li><a href="mailto:info@store.mn" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">info@store.mn</a></li>
              <li><Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact Form</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-body-sm text-neutral-600 dark:text-dark-text-secondary">
              <li><Link href="/warranty" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Warranty Policy</Link></li>
              <li><Link href="/returns" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/delivery" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Delivery Info</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary mb-4">
              Newsletter
            </h3>
            <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-body-sm bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium text-body-sm rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-dark-border-default flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
            © 2025 Tech Store. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-body-sm text-neutral-600 dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

