import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
