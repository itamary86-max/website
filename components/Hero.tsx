'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroContent } from '@/lib/types'

export default function Hero({ data }: { data: HeroContent }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to left, #e8ecf0, #f5f7fa, #ffffff)',
      }}
    >
      {/* Watermark text */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none select-none">
        <span
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold whitespace-nowrap"
          style={{
            color: 'rgba(33, 75, 123, 0.07)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          {data.heroWatermark}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-4">
              {data.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-navy font-semibold mb-4">
              {data.heroSubline}
            </p>
            <div className="text-navy/80 text-lg leading-relaxed mb-8 whitespace-pre-line">
              {data.heroBody}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-md font-bold text-lg shadow-lg shadow-navy/20 hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              {data.heroCta}
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
              <div className="absolute -inset-3 bg-accent/20 rounded-2xl -rotate-2" aria-hidden="true" />
              <Image
                src="/images/hero.jpg"
                alt="איתמר יעקבא"
                fill
                className="relative object-cover object-top rounded-2xl ring-4 ring-white shadow-2xl"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
