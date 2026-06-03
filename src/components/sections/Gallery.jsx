import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { GALLERY_IMAGES } from '../../data/gallery'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

export default function Gallery() {
  const { lang } = useLang()
  const t = T[lang].gallery

  return (
    <section id="gallery" style={{ background: 'var(--color-cream)', padding: '72px 0' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
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
        </motion.div>

        {/* Masonry-style grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 12 }}>
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
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
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.28 }}
                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,10,0,.88) 0%, transparent 55%)' }}
              >
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-cream)', fontSize: '0.9rem', fontWeight: 500 }}>{img.label}</p>
                  <div style={{ width: 28, height: 1, background: 'var(--color-gold)', marginTop: 5 }} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
