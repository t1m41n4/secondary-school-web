"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { galleryImages } from "@/lib/gallery-data"
import Link from "next/link"

// Get a mix of featured images from both categories
const getFeaturedImages = () => {
  // Get only recent highlights for the slideshow (limit to 20)
  const recentImages = galleryImages
    .filter((img) => img.category === "Recent Highlights")
    .slice(0, 20)

  return recentImages.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
    category: img.category,
  }))
}

const slides = getFeaturedImages()

export default function EnhancedGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [failedSlideImages, setFailedSlideImages] = useState<Set<number>>(new Set())
  const [isPaused, setIsPaused] = useState(false)
  const slideContainerRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [currentSlide, isTransitioning])

  // Error handling function with fallback
  const handleImageError = (slideId: number) => {
    console.error(`Failed to load slide image with ID: ${slideId}`);
    setFailedSlideImages(prev => new Set([...prev, slideId]));
  };

  // Get appropriate image source with fallback
  const getSlideImageSource = (slide: {id: number, src: string}) => {
    if (failedSlideImages.has(slide.id)) {
      return "/placeholder.svg?height=1080&width=1920&text=Image+Not+Available";
    }
    return slide.src;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only respond to keyboard events if focused within the component
      if (slideContainerRef.current?.contains(document.activeElement)) {
        if (e.key === "ArrowLeft") {
          prevSlide();
          e.preventDefault();
        } else if (e.key === "ArrowRight") {
          nextSlide();
          e.preventDefault();
        } else if (e.key === "Space") {
          setIsPaused(prev => !prev);
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay with pause functionality
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }

    if (!isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Pause autoplay when tab becomes inactive
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div
        ref={slideContainerRef}
        className="relative overflow-hidden rounded-xl shadow-2xl h-[400px] md:h-[600px] bg-gray-100"
        aria-roledescription="carousel"
        aria-label="Featured gallery images"
        tabIndex={0}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-gray-200">
          <div
            className="h-full bg-primary transition-all ease-linear"
            style={{
              width: `${(currentSlide / (slides.length - 1)) * 100}%`,
              transitionDuration: isPaused ? '0s' : '5000ms'
            }}
          />
        </div>

        {/* Slides */}
        <div
          className="relative h-full"
          aria-live="polite"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.alt || `Image ${slide.id}`}`}
              aria-hidden={index !== currentSlide}
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <Image
                src={getSlideImageSource(slide)}
                alt={slide.alt || `Gallery image ${slide.id}`}
                fill
                className="object-cover"
                priority={index === currentSlide}
                onError={() => handleImageError(slide.id)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                <div className="flex flex-wrap gap-2 mb-2">
                  {slide.category && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {slide.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <Button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-primary/80 flex items-center justify-center text-white transition-colors p-0"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-primary/80 flex items-center justify-center text-white transition-colors p-0"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Pause/Play button */}
        <Button
          onClick={() => setIsPaused(prev => !prev)}
          className="absolute top-4 right-4 z-30 h-8 w-8 rounded-full bg-black/30 hover:bg-primary/80 flex items-center justify-center text-white transition-colors p-0"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? "▶" : "⏸"}
        </Button>

        {/* Slide indicators */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-3"
          role="tablist"
          aria-label="Select a slide to show"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              disabled={isTransitioning}
              tabIndex={0}
            />
          ))}
        </div>
      </div>

      {/* Link button */}
      <div className="text-center mt-8">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="#gallery-grid" className="flex items-center gap-2">
            Browse All Photos <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
