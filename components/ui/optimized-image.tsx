"use client"

import { useState, useEffect } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  retryCount?: number
  cacheKey?: string | null
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=600&width=800&text=Image+Unavailable",
  retryCount = 1,
  cacheKey = null,
  className,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [retries, setRetries] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Process source with cache key if needed
  useEffect(() => {
    let processedSrc = src
    if (cacheKey && typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      const url = new URL(src.toString(), window.location.origin)
      url.searchParams.set('cache', cacheKey)
      processedSrc = url.toString()
    }
    setImgSrc(processedSrc.toString())
  }, [src, cacheKey])

  const handleError = () => {
    if (retries < retryCount) {
      setRetries(prev => prev + 1)
      // Add a small delay before retry
      setTimeout(() => {
        const timestamp = new Date().getTime()
        setImgSrc(`${src.toString()}?retry=${timestamp}`)
      }, 1000)
    } else {
      console.warn(`Image failed to load after ${retryCount} retries: ${src}`)
      setError(true)
    }
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  if (!imgSrc) return null

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={error ? fallbackSrc : imgSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  )
}
