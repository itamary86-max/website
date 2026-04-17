import { ContentData } from '@/lib/types'
import { EmailIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons'
import { facebookHref, instagramHref, mailtoHref, whatsappHref } from '@/lib/contact'

type FooterProps = {
  site: ContentData['site']
  navbar: ContentData['navbar']
  hero: ContentData['hero']
}

export default function Footer({ site, navbar, hero }: FooterProps) {
  const navLinks = navbar.navLinks.split('\n').map((line) => {
    const [label, sectionId] = line.split('|')
    return { label, sectionId }
  })

  return (
    <footer className="bg-navy border-t-4 border-accent" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-extrabold text-xl mb-2">{site.ownerName}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{hero.heroSubline}</p>
          </div>

          {/* Nav */}
          <nav aria-label="ניווט תחתון">
            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-3">ניווט</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.sectionId}>
                  <a href={`#${link.sectionId}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-3">צור קשר</h4>
            <div className="flex items-center gap-3 text-white">
              <a href={mailtoHref(navbar.email)} aria-label="Email" className="hover:text-accent transition-colors">
                <EmailIcon />
              </a>
              <a href={whatsappHref(navbar.phoneNumber)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                <WhatsAppIcon />
              </a>
              <a href={instagramHref(navbar.instagramHandle)} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <InstagramIcon />
              </a>
              <a href={facebookHref(navbar.facebookPage)} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
                <FacebookIcon />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-3" dir="ltr">{navbar.phoneNumber}</p>
            <p className="text-white/60 text-sm">{navbar.email}</p>
          </div>
        </div>

        <p className="text-center text-white/50 text-sm pt-6 border-t border-white/10">
          {site.copyrightText}
        </p>
      </div>
    </footer>
  )
}
