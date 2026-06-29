import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { GALLERY_IMAGES } from '../../data/gallery'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

export default function Gallery() {
  const { lang } = useLang()
  const t = T[lang].gallery
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" style={{ background: 'var(--color-cream)', padding: '72px 0' }}>
      <Container>
        <SectionHeader pretitle={t.pre}>
          <AnimatePresence mode="wait">
            <motion.span
              key={lang + 'gallery-h'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block' }}
            >
              {t.h1}<br />
              <em style={{ color: 'var(--color-crimson)', fontStyle: 'italic' }}>{t.h2}</em>
            </motion.span>
          </AnimatePresence>
        </SectionHeader>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 10 }}>
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(img)}
              style={{
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                gridRow:    i === 0 ? 'span 2' : 'span 1',
                aspectRatio: i === 0 ? '4/3' : '1/1',
              }}
            >
              <motion.img
                src={img.src} alt={img.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Overlay with corner accents on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,10,0,.92) 0%, rgba(28,10,0,.12) 55%, transparent 100%)' }} />
                {/* Gold corner lines */}
                <div style={{ position: 'absolute', top: 10, left: 10, width: 22, height: 22, borderTop: '1.5px solid rgba(201,164,90,.75)', borderLeft: '1.5px solid rgba(201,164,90,.75)' }} />
                <div style={{ position: 'absolute', top: 10, right: 10, width: 22, height: 22, borderTop: '1.5px solid rgba(201,164,90,.75)', borderRight: '1.5px solid rgba(201,164,90,.75)' }} />
                <div style={{ position: 'absolute', bottom: 10, left: 10, width: 22, height: 22, borderBottom: '1.5px solid rgba(201,164,90,.75)', borderLeft: '1.5px solid rgba(201,164,90,.75)' }} />
                <div style={{ position: 'absolute', bottom: 10, right: 10, width: 22, height: 22, borderBottom: '1.5px solid rgba(201,164,90,.75)', borderRight: '1.5px solid rgba(201,164,90,.75)' }} />
                {/* Caption */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-cream)', fontSize: i === 0 ? '1rem' : '0.88rem', fontWeight: 500 }}>{img.label}</p>
                  <div style={{ width: 28, height: 1, background: 'var(--color-gold)', marginTop: 5 }} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(10,4,2,.93)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24, cursor: 'zoom-out',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.img
              src={active.src} alt={active.label}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: '90vw', maxHeight: '88vh', objectFit: 'contain', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,.65)' }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
                fontFamily: 'var(--font-serif)', color: 'rgba(201,164,90,.7)',
                fontSize: '0.9rem', letterSpacing: '0.1em', textAlign: 'center',
              }}
            >
              {active.label}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              onClick={() => setActive(null)}
              style={{
                position: 'absolute', top: 20, right: 24,
                background: 'none', border: '1px solid rgba(201,164,90,.35)',
                color: 'rgba(201,164,90,.7)', width: 36, height: 36,
                fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
