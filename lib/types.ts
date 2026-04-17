export interface SiteContent {
  siteTitle: string
  ownerName: string
  logoAlt: string
  copyrightText: string
}

export interface NavbarContent {
  navLinks: string
  phoneNumber: string
  instagramHandle: string
  facebookPage: string
  email: string
}

export interface HeroContent {
  heroHeadline: string
  heroSubline: string
  heroBody: string
  heroCta: string
  heroWatermark: string
}

export interface AboutContent {
  aboutTitle: string
  aboutName: string
  aboutJobTitle: string
  aboutBio: string
  aboutCta: string
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
}

export interface ServicesContent {
  servicesTitle: string
  services: ServiceItem[]
}

export interface TestimonialItem {
  clientName: string
  clientTitle: string
  quote: string
}

export interface TestimonialsContent {
  testimonialsTitle: string
  testimonials: TestimonialItem[]
}

export interface ContactContent {
  contactTitle: string
  contactSubtitle: string
  contactPhone: string
  contactInstagram: string
  contactFacebook: string
  contactEmail: string
  contactFormBtn: string
  formFieldName: string
  formFieldPhone: string
  formFieldEmail: string
}

export interface ContentData {
  site: SiteContent
  navbar: NavbarContent
  hero: HeroContent
  about: AboutContent
  services: ServicesContent
  testimonials: TestimonialsContent
  contact: ContactContent
}
