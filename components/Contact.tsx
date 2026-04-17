'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ContactContent } from '@/lib/types'
import { EmailIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { facebookHref, instagramHref, mailtoHref, whatsappHref } from '@/lib/contact'

export default function Contact({ data }: { data: ContactContent }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current || sending) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('הטופס אינו מוגדר כראוי, אנא צרו קשר בטלפון')
      return
    }

    setSending(true)
    setErrorMessage(null)

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitted(true)
        setSending(false)
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setSending(false)
        setErrorMessage('שגיאה בשליחה, נסה שוב')
      })
  }

  return (
    <section id="contact" className="bg-navy py-20 relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #c9a227 0%, transparent 40%), radial-gradient(circle at 80% 80%, #2a5a8f 0%, transparent 40%)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block w-12 h-1 bg-accent mb-4" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {data.contactTitle}
            </h2>
            <p className="text-white/70 text-lg mb-8">{data.contactSubtitle}</p>

            <div className="space-y-4">
              <a
                href={whatsappHref(data.contactPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <WhatsAppIcon />
                <span>{data.contactPhone}</span>
              </a>
              <a
                href={instagramHref(data.contactInstagram)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <InstagramIcon />
                <span>{data.contactInstagram}</span>
              </a>
              <a
                href={facebookHref(data.contactFacebook)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <FacebookIcon />
                <span>{data.contactFacebook}</span>
              </a>
              <a
                href={mailtoHref(data.contactEmail)}
                className="flex items-center gap-3 text-white hover:text-accent transition-colors"
              >
                <EmailIcon />
                <span>{data.contactEmail}</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl border-t-4 border-accent" role="status" aria-live="polite">
                <p className="text-navy text-2xl font-bold mb-2">תודה!</p>
                <p className="text-gray-600">פרטיך התקבלו, ניצור קשר בהקדם</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-t-4 border-accent space-y-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder={data.formFieldName}
                  required
                  minLength={2}
                  autoComplete="name"
                  className="w-full bg-gray-50 text-navy placeholder-gray-400 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  dir="rtl"
                  placeholder={data.formFieldPhone}
                  required
                  pattern="[0-9\-\+\s()]{7,}"
                  autoComplete="tel"
                  className="w-full bg-gray-50 text-navy placeholder-gray-400 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={data.formFieldEmail}
                  required
                  autoComplete="email"
                  className="w-full bg-gray-50 text-navy placeholder-gray-400 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors"
                />
                {/* Honeypot — should stay empty */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-navy text-white font-bold py-3 rounded-lg hover:bg-navy-light hover:-translate-y-0.5 transition-all text-lg disabled:opacity-50 disabled:hover:translate-y-0 shadow-lg shadow-navy/20"
                >
                  {sending ? '...שולח' : data.contactFormBtn}
                </button>
                {errorMessage && (
                  <p role="alert" className="text-red-600 text-sm text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
