import Image from 'next/image'

const logos: { src: string; alt: string }[] = [
  { src: '/images/logos/phoenix.jpg', alt: 'הפניקס' },
  { src: '/images/logos/yelin.jpg', alt: 'ילין לפידות' },
  { src: '/images/logos/harel.svg', alt: 'הראל ביטוח ופיננסים' },
  { src: '/images/logos/more.webp', alt: 'MORE בית השקעות' },
  { src: '/images/logos/altshuler.png', alt: 'אלטשולר שחם' },
  { src: '/images/logos/ayalon.jpg', alt: 'איילון ביטוח ופיננסים' },
  { src: '/images/logos/hachshara.svg', alt: 'הכשרה חברה לביטוח' },
  { src: '/images/logos/migdal.png', alt: 'מגדל ביטוח ופיננסים' },
  { src: '/images/logos/analyst.png', alt: 'אנליסט' },
  { src: '/images/logos/clal.png', alt: 'כלל ביטוח ופיננסים' },
  { src: '/images/logos/menora.png', alt: 'מנורה מבטחים' },
  { src: '/images/logos/meitav.svg', alt: 'מיטב בית השקעות' },
]

const marqueeMask =
  'linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)'

export default function LogoStrip() {
  const loop = [...logos, ...logos]

  return (
    <section className="relative bg-white py-16 border-y border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <p className="text-navy/70 text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
            שותפים מובילים בתעשייה
          </p>
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
        </div>
        <p className="text-center text-navy/50 text-sm mb-10">
          אנו עובדים עם מיטב חברות הביטוח, הפנסיה והפיננסים בישראל
        </p>

        {/* Marquee */}
        <div
          className="group relative overflow-hidden"
          style={{ maskImage: marqueeMask, WebkitMaskImage: marqueeMask }}
          dir="ltr"
        >
          <div className="flex w-max items-center gap-12 md:gap-16 animate-scroll-logos group-hover:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-14 md:h-16 w-32 md:w-36"
                aria-hidden={i >= logos.length}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="max-h-full w-auto object-contain mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-105 transition duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
