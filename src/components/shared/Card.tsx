import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  href: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ title, description, href, children, className = '' }: CardProps) {
  return (
    <Link
      href={href}
      className={`group block p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
        hover:border-indigo-300 dark:hover:border-indigo-600 
        hover:shadow-lg hover:shadow-indigo-500/5 
        transition-all duration-300 ${className}`}
    >
      {children}
      <h3 className="text-lg font-semibold mt-3 group-hover:text-indigo-500 transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {description}
        </p>
      )}
    </Link>
  )
}
