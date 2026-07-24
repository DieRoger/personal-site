import Image from 'next/image'
import { urlForImage } from '@/lib/sanity/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface SanityImageProps {
  source: SanityImageSource
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SanityImage({
  source,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
}: SanityImageProps) {
  const imageUrl = source ? urlForImage(source).width(width).height(height).url() : null

  if (!imageUrl) return null

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
