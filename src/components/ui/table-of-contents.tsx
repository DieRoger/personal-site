'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = document.querySelectorAll('article h2, article h3')
    const tocItems: TocItem[] = Array.from(headings).map((h) => ({
      id: h.id || h.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: h.textContent || '',
      level: h.tagName === 'H2' ? 2 : 3,
    }))

    // Assign IDs to headings that don't have them
    headings.forEach((h, i) => {
      if (!h.id && tocItems[i]) {
        h.id = tocItems[i].id
      }
    })

    setItems(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (items.length < 2) return null

  return (
    <nav className="hidden lg:block sticky top-24 w-56 shrink-0">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        On this page
      </h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'block text-xs transition-colors py-0.5 border-l-2 pl-3',
                item.level === 3 && 'pl-6',
                activeId === item.id
                  ? 'text-primary border-primary font-medium'
                  : 'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
