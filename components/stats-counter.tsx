"use client"

import { useEffect, useState, useRef } from "react"
import { Users, UserRound, UserCircle, GraduationCap } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 605,
    label: "Total Students",
    suffix: "",
  },
  {
    id: 2,
    icon: <UserRound className="h-8 w-8 text-primary" />,
    value: 298,
    label: "Boys",
    suffix: "",
  },
  {
    id: 3,
    icon: <UserCircle className="h-8 w-8 text-primary" />,
    value: 307,
    label: "Girls",
    suffix: "",
  },
  {
    id: 4,
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: 28,
    label: "Teachers",
    suffix: "",
  },
]

export default function StatsCounter() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const counters = stats.map((stat) => ({ start: 0, end: stat.value, current: 0 }))

    const counter = setInterval(() => {
      frame++

      const progress = frame / totalFrames
      const easeOutQuad = (t: number) => t * (2 - t) // Easing function
      const easedProgress = easeOutQuad(progress)

      const newCounts = counters.map((counter) => {
        const value = Math.floor(counter.start + (counter.end - counter.start) * easedProgress)
        counter.current = value
        return value
      })

      setCounts(newCounts)

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [inView])

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

