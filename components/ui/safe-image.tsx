"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  onImageError?: (error: Error) => void
  className?: string
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=600&width=800&text=Image+Unavailable",
  onImageError,
  className,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)

  const handleError = (e: any) => {
    setError(true)
    if (onImageError) {
      onImageError(new Error(`Failed to load image: ${src}`))
    } else {
      console.warn(`Image failed to load: ${src}. Using fallback.`)
    }
  }

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      className={cn("transition-opacity duration-300", className)}
      onError={handleError}
      {...props}
    />
  )
}
