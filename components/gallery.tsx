"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    caption:
      "March 24th 2019, TSC CEO and Staff at TSC HQ together with Nakuru TSC County Director, Keriko Secondary School Principal Mr. Daniel Mwariri and Br. Peter Tabichi.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    caption:
      "April 2019, Education CS with Keriko Secondary School Principal Mr. Daniel Mwariri and other Guests in Dubai for the Global Teacher Prize Award Event.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    caption:
      "February 6th 2020, Deputy Ambassador of Israel to Kenya (middle) paid a Visit to Keriko Secondary School.",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=600&width=1200",
    caption:
      "April 2019, Nakuru County Governor with Br. Peter Tabichi during his welcoming after Winning the Global Teacher Prize Award.",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=600&width=1200",
    caption: "April 2019, Br. Peter Tabichi Homecoming.",
  },
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Gallery</h2>

        <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Gallery image ${slide.id}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 z-20">
                <p className="text-white text-sm md:text-base">{slide.caption}</p>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/gallery">View All Photos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

