import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'
import { RESTAURANT } from '../../data/restaurant'

export default function Navbar() {
  const { lang, setLang } = useLang()
  const t = T[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { href: '#about',    label: t.about },
    { href: '#specials', label: t.specials },
    { href: '#menu',     label: t.menu },
    { href: '#gallery',  label: t.gallery },
    { href: '#booking',  label: t.booking },
  ]

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all 0.4s ease',
    background: scrolled ? 'rgba(18,5,0,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(201,164,90,.15)' : '1px solid transparent',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,.4)' : 'none',
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={navStyle}
      >
        <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 3 }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem,2.5vw,1.7rem)', color: 'var(--color-gold)', letterSpacing: '0.04em', fontWeight: 600 }}>
              {RESTAURANT.name}
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(253,246,227,.35)' }}>
              {RESTAURANT.tagline}
            </span>
          </a>

          {/* Desktop nav — hidden on mobile via class */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '0.05em', color: 'rgba(253,246,227,.72)', textDecoration: 'none', transition: 'color .25s', paddingBottom: 2 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-gold)'
                  e.currentTarget.querySelector('.nav-underline').style.transform = 'scaleX(1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(253,246,227,.72)'
                  e.currentTarget.querySelector('.nav-underline').style.transform = 'scaleX(0)'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lang + l.href}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {l.label}
                  </motion.span>
                </AnimatePresence>
                <span
                  className="nav-underline"
                  style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 1, background: 'var(--color-gold)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .3s ease' }}
                />
              </a>
            ))}
          </nav>

          {/* Right: lang toggle + book button + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Language toggle */}
            <div style={{ position: 'relative', display: 'flex', border: '1px solid rgba(201,164,90,.3)', borderRadius: 3, overflow: 'hidden', fontSize: 11, fontFamily: 'var(--font-sans)', letterSpacing: '0.1em' }}>
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  position: 'absolute', top: 0, bottom: 0,
                  left: lang === 'vi' ? 0 : '50%',
                  width: '50%',
                  background: 'var(--color-gold)',
                  zIndex: 0,
                }}
              />
              {['vi', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    position: 'relative', zIndex: 1,
                    padding: '5px 12px', background: 'transparent', border: 'none', cursor: 'pointer',
                    color: lang === l ? '#1c0a00' : 'rgba(201,164,90,.6)',
                    fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontWeight: lang === l ? 700 : 400,
                    transition: 'color .25s',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Book button — desktop only via class */}
            <a
              href="#booking"
              className="book-btn-desktop"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '9px 20px', background: 'var(--color-crimson)', color: 'var(--color-cream)',
                textDecoration: 'none', border: '1px solid rgba(155,27,46,.5)',
                transition: 'background .25s, box-shadow .25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-crimson-deep)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(155,27,46,.35)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-crimson)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {t.book}
                </motion.span>
              </AnimatePresence>
            </a>

            {/* Hamburger — mobile only via class */}
            <button
              onClick={() => setOpen(!open)}
              className="hamburger-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5, zIndex: 60 }}
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 9 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block', width: 22, height: 1.5, background: 'var(--color-cream)', transformOrigin: 'center' }}
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'block', width: 16, height: 1.5, background: 'var(--color-cream)', transformOrigin: 'center' }}
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -9 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block', width: 22, height: 1.5, background: 'var(--color-cream)', transformOrigin: 'center' }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 49,
              background: 'rgba(12,3,0,0.97)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ textAlign: 'center', marginBottom: 8 }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>{RESTAURANT.name}</p>
              <div style={{ width: 60, height: 1, background: 'rgba(201,164,90,.3)', margin: '8px auto' }} />
            </motion.div>

            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem,5vw,2.4rem)', color: 'rgba(253,246,227,.75)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color .2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(253,246,227,.75)'}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
            >
              {/* Lang toggle in mobile */}
              <div style={{ display: 'flex', border: '1px solid rgba(201,164,90,.3)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  style={{ position: 'absolute', top: 0, bottom: 0, left: lang === 'vi' ? 0 : '50%', width: '50%', background: 'var(--color-gold)' }}
                />
                {['vi', 'en'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{ position: 'relative', zIndex: 1, padding: '8px 24px', background: 'transparent', border: 'none', cursor: 'pointer', color: lang === l ? '#1c0a00' : 'rgba(201,164,90,.6)', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: lang === l ? 700 : 400, transition: 'color .25s' }}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <a
                href="#booking"
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '12px 36px', background: 'var(--color-crimson)', color: 'var(--color-cream)', textDecoration: 'none', border: '1px solid rgba(155,27,46,.5)' }}
              >
                {t.book}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
