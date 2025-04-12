import GalleryHero from "@/components/gallery-hero"
import FeaturedGallery from "@/components/featured-gallery"
import GalleryGrid from "@/components/gallery-grid"
import VideoGallerySection from "@/components/video-gallery-section"
import { Separator } from "@/components/ui/separator"
import { galleryImages } from "@/lib/gallery-data"

export const metadata = {
  title: "School Gallery | Keriko Secondary School",
  description: "Browse through our collection of school memories, events, and achievements.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryHero />

      {/* Featured Moments and Video Archive in a side-by-side layout */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Slideshow */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Featured Moments</h2>
              <FeaturedGallery />
            </div>

            {/* Video Gallery Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Video Archives</h2>
              <VideoGallerySection showHeading={false} />
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Gallery Grid */}
      <section id="gallery-grid" className="bg-white dark:bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <GalleryGrid media={galleryImages} />
        </div>
      </section>
    </main>
  )
}
