'use client'

import { lazy, Suspense } from 'react'

const Studio = lazy(() => import('./Studio'))

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Studio...</div>}>
      <Studio />
    </Suspense>
  )
}
