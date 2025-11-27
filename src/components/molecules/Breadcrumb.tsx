import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-primary-600 dark:text-dark-text-secondary dark:hover:text-primary-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 dark:text-dark-text-primary font-medium">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
          )}
        </div>
      ))}
    </nav>
  )
}

