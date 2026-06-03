import { MapPin, Phone, Clock } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import { RESTAURANT } from '../../data/restaurant'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

const IconFB = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconIG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Footer() {
  const { lang } = useLang()
  const t = T[lang].footer
  const navT = T[lang].nav
  const year = new Date().getFullYear()

  const navLinks = [
    { label: navT.about,    href: '#about' },
    { label: navT.specials, href: '#specials' },
    { label: navT.menu,     href: '#menu' },
    { label: navT.gallery,  href: '#gallery' },
    { label: navT.booking,  href: '#booking' },
  ]

  return (
    <footer style={{ background: '#0e0400', borderTop: '1px solid rgba(201,164,90,.12)' }}>
      {/* Top decorative bar */}
      <div style={{ height: 3, background: 'linear-gradient(to right, transparent, var(--color-crimson), var(--color-gold), var(--color-crimson), transparent)' }} />

      <Container>
        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', padding: '64px 0 48px' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <a href="#" style={{ display: 'block', marginBottom: 12, textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-gold)', letterSpacing: '0.04em', lineHeight: 1 }}>
                {RESTAURANT.name}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(253,246,227,.3)', marginTop: 6 }}>
                {RESTAURANT.tagline}
              </p>
            </a>
            <div style={{ width: 40, height: 1, background: 'rgba(201,164,90,.3)', margin: '16px 0' }} />
            <AnimatePresence mode="wait">
              <motion.p
                key={lang + 'footer-tagline'}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.75, color: 'rgba(253,246,227,.38)', maxWidth: 240, marginBottom: 24 }}
              >
                {t.tagline} {RESTAURANT.since}.
              </motion.p>
            </AnimatePresence>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: RESTAURANT.social.facebook,  Icon: IconFB, label: 'Facebook' },
                { href: RESTAURANT.social.instagram, Icon: IconIG, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label} href={href} aria-label={label}
                  style={{
                    width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(201,164,90,.2)', color: 'rgba(253,246,227,.4)',
                    textDecoration: 'none', transition: 'all .25s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,164,90,.2)'; e.currentTarget.style.color = 'rgba(253,246,227,.4)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(201,164,90,.7)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--color-gold)' }}>✦</span>
              <AnimatePresence mode="wait">
                <motion.span key={lang + 'fnav'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {t.nav}
                </motion.span>
              </AnimatePresence>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((l) => (
                <a
                  key={l.href} href={l.href}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(253,246,227,.4)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.4)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(201,164,90,.7)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--color-gold)' }}>✦</span>
              <AnimatePresence mode="wait">
                <motion.span key={lang + 'fhours'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {t.hours}
                </motion.span>
              </AnimatePresence>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {RESTAURANT.hours.map((row) => (
                <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'rgba(253,246,227,.38)' }}>{row.day}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'rgba(201,164,90,.65)', flexShrink: 0 }}>{row.time}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, paddingTop: 12, borderTop: '1px solid rgba(201,164,90,.1)' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + 'fopen'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--color-gold)', opacity: 0.6 }}
                  >
                    {t.openDaily}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(201,164,90,.7)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--color-gold)' }}>✦</span>
              <AnimatePresence mode="wait">
                <motion.span key={lang + 'fcontact'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  {t.contact}
                </motion.span>
              </AnimatePresence>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={RESTAURANT.mapsHref} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(253,246,227,.38)', textDecoration: 'none', fontSize: 13.5, transition: 'color .2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.7)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.38)'}
              >
                <MapPin size={14} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-sans)' }}>{RESTAURANT.address}</span>
              </a>
              <a href={RESTAURANT.phoneHref}
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(253,246,227,.38)', textDecoration: 'none', fontSize: 13.5, transition: 'color .2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.7)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.38)'}
              >
                <Phone size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-sans)' }}>{RESTAURANT.phone}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(253,246,227,.38)', fontSize: 13.5 }}>
                <Clock size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-sans)' }}>07:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '20px 0' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(253,246,227,.2)' }}>
              © {year} {RESTAURANT.name}. All rights reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <AnimatePresence mode="wait">
                <motion.span key={lang + 'fbottom'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ display: 'flex', gap: 16 }}>
                  {[t.privacy, t.terms].map((label) => (
                    <a key={label} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(253,246,227,.2)', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.5)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.2)'}
                    >{label}</a>
                  ))}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
