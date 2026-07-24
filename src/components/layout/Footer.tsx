import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="/rss.xml" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">RSS</a>
          <a href="/sitemap.xml" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
