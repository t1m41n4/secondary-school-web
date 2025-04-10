"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Filter, Check } from "lucide-react"
import type { MediaAsset } from "@/lib/gallery-data"
import { Button } from "@/components/ui/button"
import { getCategories } from "@/lib/gallery-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useImageLoading } from "@/hooks/use-image-loading"
import ClientOnly from "@/components/client-only"
import SafeImage from "@/components/ui/safe-image"

interface GalleryGridProps {
  media: MediaAsset[]
}

// Wrap the entire gallery grid with the ClientOnly component
export default function GalleryGrid(props: GalleryGridProps) {
  return (
    <ClientOnly fallback={<GalleryGridSkeleton />}>
      <GalleryGridContent {...props} />
    </ClientOnly>
  )
}

// Loading skeleton for gallery grid
function GalleryGridSkeleton() {
  return (
    <div className="space-y-8">
      {/* Skeleton header */}
      <div className="flex justify-between items-center">
        <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-60 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Skeleton grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="aspect-[4/3] bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  )
}

// The actual gallery grid content
function GalleryGridContent({ media = [] }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<MediaAsset | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const imagesPerPage = 24 // Increased to show more images per page

  // Use the image loading hook for better error handling
  const { failedImages, handleImageError, getImageSource } = useImageLoading()

  // Get all available categories
  const categories = ["All", ...getCategories()]

  // Add a function to filter out known problematic images
  const filterOutProblematicImages = useCallback((images: MediaAsset[]) => {
    // IDs of known problematic images (you can add specific IDs here)
    const problematicImageIds = [42]; // Add the ID from the error message

    return images.filter(img => !problematicImageIds.includes(img.id));
  }, []);

  // Apply the filter to the input media
  const safeMedia = filterOutProblematicImages(media);

  // Filter images by category if one is selected
  const filteredImages =
    selectedCategory && selectedCategory !== "All"
      ? safeMedia.filter((img) => img.category === selectedCategory)
      : safeMedia;

  // Simple pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredImages.length / imagesPerPage))
  const displayedImages = filteredImages.slice((page - 1) * imagesPerPage, page * imagesPerPage)

  // Reset pagination when category changes
  useEffect(() => {
    setPage(1)
  }, [selectedCategory])

  // Navigation in fullscreen mode
  const goToNextImage = useCallback(() => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedIndex((prev) => prev + 1)
      setSelectedImage(filteredImages[selectedIndex + 1])
    }
  }, [filteredImages, selectedIndex])

  const goToPrevImage = useCallback(() => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1)
      setSelectedImage(filteredImages[selectedIndex - 1])
    }
  }, [filteredImages, selectedIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") {
          goToNextImage()
        } else if (e.key === "ArrowLeft") {
          goToPrevImage()
        } else if (e.key === "Escape") {
          setSelectedImage(null)
          setSelectedIndex(-1)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, goToNextImage, goToPrevImage])

  // When clicking on an image, set both the image and its index
  const openImageViewer = (image: MediaAsset, index: number) => {
    const globalIndex = filteredImages.findIndex((img) => img.id === image.id)
    setSelectedIndex(globalIndex)
    setSelectedImage(image)
  }

  // Wait for component to mount completely
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8">
      {/* Gallery header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">School Gallery</h2>
        <div className="flex flex-col items-end gap-2">
          {/* Mobile filter dropdown */}
          <div className="sm:hidden w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between items-center">
                  <span>{selectedCategory || "All Categories"}</span>
                  <Filter className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedCategory(category === "All" ? null : category)}
                    className="flex items-center justify-between"
                  >
                    {category}
                    {(selectedCategory === category || (category === "All" && !selectedCategory)) && (
                      <Check className="h-4 w-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop filter buttons */}
          <div className="hidden sm:flex flex-wrap justify-end gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center sm:text-right">
            {filteredImages.length} {filteredImages.length === 1 ? "Image" : "Images"}
            {totalPages > 1 && ` (Page ${page} of ${totalPages})`}
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {displayedImages.length > 0 ? (
            <>
              {/* Gallery grid with animation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayedImages.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                    onClick={() => openImageViewer(item, index)}
                  >
                    {/* Category badge */}
                    {item.category && (
                      <div className="absolute top-2 right-2 z-20 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </div>
                    )}

                    {/* Placeholder background while loading */}
                    <div className="absolute inset-0 bg-gray-200"></div>

                    {/* Use SafeImage instead of Image */}
                    <SafeImage
                      src={getImageSource(item)}
                      alt={item.alt || `Image ${item.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      unoptimized={true}
                      fallbackSrc={`/placeholder.svg?height=600&width=800&text=Image+${item.id}`}
                      onImageError={() => handleImageError(item.id)}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>

              {/* More sophisticated pagination controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-1 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                  >
                    First
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center mx-2">
                    {/* Page numbers */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Logic to show current page and nearby pages
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (page <= 3) {
                        pageNum = i + 1;
                      } else if (page >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = page - 2 + i;
                      }

                      return (
                        <Button
                          key={i}
                          variant={page === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPage(pageNum)}
                          className="mx-1 w-10"
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(totalPages)}
                    disabled={page === totalPages}
                  >
                    Last
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-gray-500 mb-4">No images found in this category.</p>
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                View All Images
              </Button>
            </div>
          )}
        </>
      )}

      {/* Fullscreen image viewer with improved UI */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black z-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Fullscreen image */}
            <Image
              src={getImageSource(selectedImage)}
              alt={selectedImage.alt || `Image ${selectedImage.id}`}
              fill
              sizes="100vw"
              className="object-contain p-4"
              priority
              unoptimized={true}
              onError={() => handleImageError(selectedImage.id)}
            />
          </div>

          {/* Image metadata */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent z-20">
            <div className="text-white max-w-[80%]">
              <div className="flex gap-2 text-sm text-white/80 mt-1">
                {selectedImage.category && <span>{selectedImage.category}</span>}
                {/* Removing year display */}
              </div>
            </div>
            <button
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              onClick={() => {
                setSelectedImage(null)
                setSelectedIndex(-1)
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevImage()
            }}
            disabled={selectedIndex <= 0}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation()
              goToNextImage()
            }}
            disabled={selectedIndex >= filteredImages.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm z-20">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

