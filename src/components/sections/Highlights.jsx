import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, BookOpen, Landmark, UtensilsCrossed } from 'lucide-react'
import Container from '../ui/Container'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

const ICONS = [Leaf, BookOpen, Landmark, UtensilsCrossed]

export default function Highlights() {
  const { lang } = useLang()
  const items = T[lang].highlights.items

  return (
    <section style={{ background: 'var(--color-cream-dark)', padding: '80px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {items.map((f, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(28,10,0,.12)' }}
                style={{
                  background: 'var(--color-cream)',
                  border: '1px solid rgba(201,164,90,.2)',
                  padding: '2rem',
                  transition: 'box-shadow .3s',
                }}
              >
                <div style={{
                  width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(155,27,46,.07)', border: '1px solid rgba(155,27,46,.15)',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={20} style={{ color: 'var(--color-crimson)' }} />
                </div>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={lang + 'hl-title-' + i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: 8 }}
                  >
                    {f.title}
                  </motion.h3>
                </AnimatePresence>
                <div style={{ width: 32, height: 1, background: 'var(--color-gold)', opacity: 0.5, marginBottom: 10 }} />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang + 'hl-desc-' + i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-stone)' }}
                  >
                    {f.desc}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
