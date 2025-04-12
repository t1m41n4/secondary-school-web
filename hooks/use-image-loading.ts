import { useState, useCallback, useEffect } from 'react'

export function useImageLoading() {
  // Track images that failed to load
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  // Remove the cacheBuster state that uses random values during SSR/hydration
  // Instead, we'll apply cache busting only after hydration is complete
  const [isHydrated, setIsHydrated] = useState(false)

  // Set hydration flag after component mounts (client-side only)
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Handle image loading errors with more detailed logging
  const handleImageError = useCallback((imageId: number) => {
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

    // Only add cache busting query parameter client-side after hydration
    if (isHydrated && process.env.NODE_ENV === 'development') {
      // Use a stable parameter that won't change during the session
      return `${image.src}?_t=${encodeURIComponent(window.sessionStorage.getItem('cache_token') || '')}`
    }

    // Default case: return the original source
    return image.src
  }, [failedImages, isHydrated])

  // Generate and store a cache token in session storage - only runs client-side after hydration
  useEffect(() => {
    if (isHydrated && process.env.NODE_ENV === 'development' && !window.sessionStorage.getItem('cache_token')) {
      window.sessionStorage.setItem('cache_token', Date.now().toString())
    }
  }, [isHydrated])

  return {
    failedImages,
    handleImageError,
    getImageSource,
  }
}
