"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// This would be replaced with your actual gallery images
const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=400&width=600&text=Gallery+Image+${i + 1}`,
  alt: `Gallery image ${i + 1}`,
  caption: `This is the caption for gallery image ${i + 1}. Replace with actual captions.`,
}))

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Click on an image to view details</p>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">CLICK ON IMAGE TO ZOOM IN FOR CAPTION</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video w-full">
                {selectedImage && (
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {selectedImage && (
                <div className="bg-black/80 p-4 text-white">
                  <p>{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

