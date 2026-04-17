'use client'

import { useState, useEffect } from 'react'
import { NavbarContent, SiteContent } from '@/lib/types'
import { EmailIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { facebookHref, instagramHref, mailtoHref, whatsappHref } from '@/lib/contact'

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Navbar({ data, site }: { data: NavbarContent; site: SiteContent }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = data.navLinks.split('\n').map((line) => {
    const [label, sectionId] = line.split('|')
    return { label, sectionId }
  })

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-3 group" aria-label={site.ownerName}>
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-lg ring-2 ring-accent ring-offset-2 ring-offset-transparent group-hover:ring-offset-white transition-all">
              {site.ownerName.charAt(0)}
            </div>
            <span className="text-navy font-bold text-lg hidden sm:block">{site.ownerName}</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                className="text-navy font-semibold hover:opacity-70 transition-opacity text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-navy">
            <a href={mailtoHref(data.email)} aria-label="Email" className="hover:opacity-70 transition-opacity">
              <EmailIcon />
            </a>
            <a href={facebookHref(data.facebookPage)} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <FacebookIcon />
            </a>
            <a href={instagramHref(data.instagramHandle)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <InstagramIcon />
            </a>
            <a href={whatsappHref(data.phoneNumber)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity">
              <WhatsAppIcon />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                className="block text-navy font-semibold text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t text-navy">
              <a href={mailtoHref(data.email)} aria-label="Email"><EmailIcon /></a>
              <a href={facebookHref(data.facebookPage)} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href={instagramHref(data.instagramHandle)} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href={whatsappHref(data.phoneNumber)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
