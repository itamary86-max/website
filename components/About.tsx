'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AboutContent } from '@/lib/types'

export default function About({ data }: { data: AboutContent }) {
  return (
    <section id="about" className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="block w-12 h-1 bg-accent mb-4" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">{data.aboutTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              <div className="absolute -inset-3 border-2 border-accent rounded-2xl rotate-3" aria-hidden="true" />
              <Image
                src="/images/about.jpg"
                alt="איתמר יעקבא"
                fill
                className="relative object-cover object-top rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-1">{data.aboutName}</h3>
            <p className="text-white/70 text-lg mb-6">{data.aboutJobTitle}</p>
            <div className="text-white/90 text-lg leading-relaxed whitespace-pre-line mb-8">
              {data.aboutBio}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-navy px-6 py-3 rounded-md font-bold hover:bg-accent-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/20"
            >
              {data.aboutCta}
              <span aria-hidden="true">&larr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
