import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Hero from '../components/sections/Hero'
import Highlights from '../components/sections/Highlights'
import About from '../components/sections/About'
import Specials from '../components/sections/Specials'
import Menu from '../components/sections/Menu'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'
import Booking from '../components/sections/Booking'
import ScrollProgress from '../components/ui/ScrollProgress'

function GoldDivider({ dark = false }) {
  const lineColor = dark ? 'rgba(201,164,90,.18)' : 'rgba(155,27,46,.12)'
  const dotColor  = dark ? 'rgba(201,164,90,.45)' : 'rgba(155,27,46,.35)'
  const bg        = dark ? 'var(--color-ink)'     : 'var(--color-cream)'
  return (
    <div style={{ background: bg, display: 'flex', alignItems: 'center', gap: 16, padding: '0 48px' }}>
      <div style={{ flex: 1, height: 1, background: lineColor }} />
      <span style={{ color: dotColor, fontSize: 14, lineHeight: 1, userSelect: 'none' }}>❖</span>
      <div style={{ flex: 1, height: 1, background: lineColor }} />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Specials />
        <Menu />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
