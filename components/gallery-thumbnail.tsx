"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { MediaAsset } from "@/lib/gallery-data"

interface GalleryThumbnailProps {
  image: MediaAsset
  onClick: () => void
  priority?: boolean
}

export default function GalleryThumbnail({ image, onClick, priority = false }: GalleryThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  // Simple intersection observer implementation without the library
  useEffect(() => {
    // Skip if component has priority loading
    if (priority) {
      setIsInView(true)
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )

    if (thumbnailRef.current) {
      observer.observe(thumbnailRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority])

  // Generate both low-quality and high-quality image URLs
  const thumbnailUrl = image.fallbackSrc || `/placeholder.svg?height=200&width=200&text=Loading...`
  const fullImageUrl = hasError ? (image.fallbackSrc || `/placeholder.svg?height=600&width=800&text=Image+${image.id}`) : image.src

  return (
    <div
      ref={thumbnailRef}
      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
      onClick={onClick}
    >
      {/* Category badge */}
      {image.category && (
        <div className="absolute top-2 right-2 z-20 bg-primary text-white text-xs px-2 py-1 rounded-full">
          {image.category}
        </div>
      )}

      {/* Low-quality placeholder */}
      <Image
        src={thumbnailUrl}
        alt={`Loading ${image.alt || `Image ${image.id}`}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
        priority={priority}
      />

      {/* Main image (only loaded when in view) */}
      {(isInView || priority) && (
        <Image
          src={fullImageUrl}
          alt={image.alt || `Image ${image.id}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-opacity duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
    </div>
  )
}
