"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { galleryImages } from "@/lib/gallery-data"
import Link from "next/link"
import { useImageLoading } from "@/hooks/use-image-loading"
import ClientOnly from "@/components/client-only"

// Get only a selection of the best/featured recent highlights for the slideshow
const getFeaturedImages = () => {
  // Filter to recent highlights category and take the first 15 images
  const recentImages = galleryImages
    .filter((img) => img.category === "Recent Highlights")
    .slice(0, 15) // Take just 15 for the slideshow for better performance

  return recentImages.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
    category: img.category,
    // Removing year from the mapped data
  }))
}

const slides = getFeaturedImages()

// Loading placeholder UI
function LoadingSlideshow() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-2xl h-[400px] md:h-[600px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400">Loading gallery...</div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedGallery() {
  return (
    <ClientOnly fallback={<LoadingSlideshow />}>
      <FeaturedSlideshow />
    </ClientOnly>
  )
}

// Move the actual slideshow implementation to a separate component
function FeaturedSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { failedImages, handleImageError, getImageSource } = useImageLoading()

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-full mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-2xl h-[400px] md:h-[500px] bg-gray-100">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-5000 ease-linear"
            style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }}
          />
        </div>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <Image
              src={getImageSource(slide)}
              alt={slide.alt || `Gallery image ${slide.id}`}
              fill
              className="object-cover"
              priority={index === currentSlide}
              onError={() => handleImageError(slide.id)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
              <div className="flex flex-wrap gap-2 mb-2">
                {slide.category && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">{slide.category}</span>
                )}
                {/* Removing the year display */}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-primary/80 flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-primary/80 flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentSlide(index)
                  setTimeout(() => setIsTransitioning(false), 500)
                }
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <Button asChild className="bg-primary hover:bg-primary/90" size="sm">
          <Link href="#gallery-grid" className="flex items-center gap-2">
            Browse All Photos <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
