import { useState, useCallback, useEffect } from 'react'

export function useImageLoading() {
  // Track images that failed to load
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  // Instead of using Date.now() directly when rendering, use a stable state value
  const [cacheBuster, setCacheBuster] = useState<string | null>(null)

  // Initialize cache buster after component mounts to avoid hydration mismatch
  useEffect(() => {
    // Only set the cache buster after initial hydration, client-side only
    if (typeof window !== 'undefined') {
      setCacheBuster(`cb=${Math.floor(Math.random() * 1000000)}`)
    }
  }, [])

  // Handle image loading errors with more detailed logging
  const handleImageError = useCallback((imageId: number) => {
    // More informative logging that doesn't break the app
    console.warn(`Image with ID ${imageId} failed to load. Using fallback.`)

    // Add to failed images set
    setFailedImages(prev => {
      // Only log once per image
      if (!prev.has(imageId)) {
        const newSet = new Set([...prev, imageId])
        return newSet
      }
      return prev
    })
  }, [])

  // Get appropriate image source with more robust fallback handling
  const getImageSource = useCallback((image: { id: number, src: string, fallbackSrc?: string }) => {
    // If image failed to load, use provided fallback or generate a placeholder
    if (failedImages.has(image.id)) {
      // Use the fallbackSrc if provided, otherwise generate a placeholder
      return image.fallbackSrc || `/placeholder.svg?height=600&width=800&text=Image+${image.id}`
    }

    // If in development mode, add cache buster to avoid caching issues
    if (cacheBuster && typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      return `${image.src}?${cacheBuster}`
    }

    // Default case: return the original source
    return image.src
  }, [failedImages, cacheBuster])

  return {
    failedImages,
    handleImageError,
    getImageSource,
  }
}
