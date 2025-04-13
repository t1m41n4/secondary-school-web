"use client"

import { useState, useEffect } from "react"

interface AnimatedBannerProps {
  title: string
  subtitle?: string
}

// Update the component to accept and use the props
export default function AnimatedBanner({ title, subtitle }: AnimatedBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
  }, [])

  return (
    <div className="relative bg-primary text-white py-16 md:py-20 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r from-[#204434] to-[#2c5a46] opacity-90`}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-3 text-lg md:text-xl text-white/90 max-w-2xl mx-auto transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {subtitle}
          </p>
        )}
        <div
          className={`w-20 h-1 bg-white mx-auto mt-5 transition-all duration-700 delay-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        ></div>
      </div>
    </div>
  )
}
