"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Link from "next/link"
import ClientOnly from "@/components/client-only"

interface VideoGallerySectionProps {
  showHeading?: boolean;
}

// Wrap the implementation in ClientOnly to avoid hydration issues
export default function VideoGallerySection({ showHeading = true }: VideoGallerySectionProps) {
  return (
    <ClientOnly fallback={<VideoGalleryLoading showHeading={showHeading} />}>
      <VideoGalleryContent showHeading={showHeading} />
    </ClientOnly>
  )
}

// Loading state for VideoGallery
function VideoGalleryLoading({ showHeading }: { showHeading?: boolean }) {
  return (
    <section className={showHeading ? "py-12 bg-gray-50 dark:bg-gray-900" : ""}>
      <div className={showHeading ? "container mx-auto px-4" : ""}>
        {showHeading && (
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Video Archives</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Loading video archives...
            </p>
          </div>
        )}
        <div className="max-w-5xl mx-auto h-[300px] bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    </section>
  )
}

// The actual video gallery content
function VideoGalleryContent({ showHeading = true }: VideoGallerySectionProps) {
  const [activeTab, setActiveTab] = useState("archive")

  return (
    <section className={showHeading ? "py-12 bg-gray-50 dark:bg-gray-900" : ""}>
      <div className={showHeading ? "container mx-auto px-4" : ""}>
        {showHeading && (
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Video Archives</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our school's journey through video footage, from historical aerial views to notable achievements.
            </p>
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="archive" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="archive">Campus Aerial View</TabsTrigger>
              <TabsTrigger value="global-teacher">Global Teacher Prize</TabsTrigger>
            </TabsList>

            {/* Archive Aerial Video */}
            <TabsContent value="archive" className="rounded-lg overflow-hidden">
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <video
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=720&width=1280&text=Archive+Aerial+View"
                    controls
                    playsInline
                  >
                    <source src="/videos/archive-aerialview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 bg-gray-900 text-white">
                  <h3 className="text-lg font-semibold mb-2">Historical Campus Aerial View</h3>
                  <p className="text-sm text-gray-300">
                    This archive footage shows an aerial view of our school campus before recent developments.
                    Compare with our current facilities to see how far we've come.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Peter Tabichi Global Teacher Prize Video */}
            <TabsContent value="global-teacher">
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/i41XlsaDc-w?si=atMFJpIsRk76ZIWM"
                    title="The Kenyan teacher who gives his salary to the poor | Peter Tabichi | Global Teacher Prize"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-900 text-white">
                  <h3 className="text-lg font-semibold mb-2">Global Teacher Prize Feature</h3>
                  <p className="text-sm text-gray-300">
                    This video features Br. Peter Tabichi who won the prestigious Global Teacher Prize in 2019,
                    becoming the first teacher from Africa to receive this honor.
                  </p>
                  <div className="mt-3">
                    <Button asChild variant="secondary" size="sm" className="opacity-100">
                      <Link href="/blog/peter-tabichi-global-teacher">
                        <Info className="mr-2 h-4 w-4" />
                        View Full Story
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
