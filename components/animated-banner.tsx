"use client"

import { useState, useEffect } from "react"

interface AnimatedBannerProps {
  title: string
  subtitle?: string
}

export default function AnimatedBanner({ title, subtitle }: AnimatedBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div>
      <section className="relative bg-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#204434] to-[#2c5a46] opacity-90"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 text-lg md:text-xl text-center max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {subtitle}
            </p>
          )}
          <div
            className={`w-24 h-1 bg-white mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>
      </section>
    </div>
  )
}
