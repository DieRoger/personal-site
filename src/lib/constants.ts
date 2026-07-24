export const SITE_CONFIG = {
  name: '个人网站',
  description: '作品集 · 博客 · 数字花园',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: '',
  locale: 'zh-CN',
}

export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '作品集', href: '/portfolio' },
  { label: '博客', href: '/blog' },
  { label: '数字花园', href: '/garden' },
  { label: '关于', href: '/about' },
] as const
