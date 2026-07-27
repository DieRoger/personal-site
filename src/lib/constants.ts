export const SITE_CONFIG = {
  name: 'Runjie Luo',
  description: 'AI Engineer Portfolio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Runjie Luo',
  locale: 'en_US',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const
