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
    <section style={{ background: 'var(--color-cream-dark)', padding: '52px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {items.map((f, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 28px 56px rgba(28,10,0,.14), 0 0 0 1.5px rgba(201,164,90,.45)',
                  transition: { duration: 0.28 },
                }}
                style={{
                  background: 'var(--color-cream)',
                  border: '1px solid rgba(201,164,90,.2)',
                  padding: '2rem',
                }}
              >
                {/* Icon — bounces in */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.13 + 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{
                    width: 48, height: 48,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(155,27,46,.08)', border: '1px solid rgba(155,27,46,.18)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={22} style={{ color: 'var(--color-crimson)' }} />
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.h3
                    key={lang + 'hl-title-' + i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.12rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: 10 }}
                  >
                    {f.title}
                  </motion.h3>
                </AnimatePresence>

                {/* Gold underline — draws from left */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 36 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.13 + 0.35 }}
                  style={{ height: 2, background: 'var(--color-gold)', marginBottom: 12 }}
                />

                <AnimatePresence mode="wait">
                  <motion.p
                    key={lang + 'hl-desc-' + i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-stone)' }}
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
