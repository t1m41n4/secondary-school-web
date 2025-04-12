"use client"

import { useState, useEffect } from "react"

interface AnimatedHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  gradientColors?: {
    from: string
    to: string
  }
}

export default function AnimatedHero({
  title,
  subtitle,
  backgroundImage,
  gradientColors = { from: "#204434", to: "#2c5a46" }
}: AnimatedHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Initialize the animation as soon as possible to avoid delay
  useEffect(() => {
    // Use requestAnimationFrame to ensure the animation happens on the next paint
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
    // Clean up
    return () => setIsVisible(false)
  }, [])

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <section className="relative bg-primary/90 text-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20" style={backgroundStyle}></div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-r from-[${gradientColors.from}] to-[${gradientColors.to}] opacity-90`}></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`w-24 h-1 bg-white mx-auto mt-6 transition-all duration-700 delay-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        ></div>
      </div>
    </section>
  )
}
