"use client"

import { useState, useEffect } from "react"

export default function GalleryHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/banners/gallery-banner.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          SCHOOL GALLERY
        </h1>
        <div
          className={`w-24 h-1 bg-white mx-auto mt-6 transition-all duration-1000 delay-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        ></div>
      </div>
    </section>
  )
}

