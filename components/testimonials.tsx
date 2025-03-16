"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Keriko Secondary School provided me with the foundation I needed to pursue my dreams. The teachers are dedicated and truly care about their students' success.",
    name: "John Kamau",
    role: "Former Student, Class of 2018",
  },
  {
    id: 2,
    quote:
      "The science program at Keriko Secondary School is exceptional. My children have developed a love for learning and critical thinking that will serve them well in the future.",
    name: "Mary Wanjiku",
    role: "Parent",
  },
  {
    id: 3,
    quote:
      "As a community leader, I've witnessed the positive impact Keriko Secondary School has had on our youth. The school's commitment to excellence is transforming lives.",
    name: "James Odhiambo",
    role: "Community Leader",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What People Say</h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Quote className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-center text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-colors md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

