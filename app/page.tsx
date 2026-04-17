import content from '@/public/content.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar data={content.navbar} site={content.site} />
      <Hero data={content.hero} />
      <LogoStrip />
      <About data={content.about} />
      <Services data={content.services} />
      <Testimonials data={content.testimonials} />
      <Contact data={content.contact} />
      <Footer site={content.site} navbar={content.navbar} hero={content.hero} />
    </>
  )
}
