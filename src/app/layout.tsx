import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import { ThemeProvider } from 'next-themes'
import { SITE_CONFIG } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Runjie Luo',
    template: `%s — Runjie Luo`,
  },
  description: 'AI Engineer Portfolio — Building production-level AI systems with LLMs, Agents, and modern software engineering.',
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: 'Runjie Luo',
    description: 'AI Engineer Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
