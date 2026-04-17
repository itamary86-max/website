'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TestimonialsContent } from '@/lib/types'

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-4" aria-label="דירוג 5 מתוך 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0)
  return (
    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg ring-2 ring-accent">
      {initial}
    </div>
  )
}

export default function Testimonials({ data }: { data: TestimonialsContent }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const items = data.testimonials

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 4000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    startAutoplay()
  }

  return (
    <section id="testimonials" className="bg-[#f5f6f8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="block w-12 h-1 bg-accent mb-4" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">{data.testimonialsTitle}</h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="px-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto border-t-4 border-accent">
                <span className="text-6xl text-accent leading-none block mb-2" aria-hidden="true">&ldquo;</span>
                <StarRow />
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-6">
                  {items[activeIndex].quote}
                </p>
                <div className="flex items-center gap-4">
                  <Avatar name={items[activeIndex].clientName} />
                  <div>
                    <p className="text-navy font-bold text-lg">{items[activeIndex].clientName}</p>
                    <p className="text-gray-500 text-sm">{items[activeIndex].clientTitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-accent w-8' : 'bg-navy/20 hover:bg-navy/40 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
