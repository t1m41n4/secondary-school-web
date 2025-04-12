"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  onImageError?: (error: Error) => void
  className?: string
  responsiveSizes?: string
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=600&width=800&text=Image+Unavailable",
  onImageError,
  className,
  responsiveSizes,
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = (e: any) => {
    setError(true)
    if (onImageError) {
      onImageError(new Error(`Failed to load image: ${src}`))
    } else {
      console.warn(`Image failed to load: ${src}. Using fallback.`)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onError={handleError}
        onLoad={handleLoad}
        sizes={responsiveSizes || sizes}
        {...props}
      />
    </div>
  )
}
