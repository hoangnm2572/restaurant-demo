import { useRef, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { RESTAURANT } from '../../data/restaurant'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

function CountUp({ value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseInt(value)
    const suffix = value.replace(String(num), '')
    let cur = 0
    const step = Math.max(1, Math.floor(num / 60))
    const id = setInterval(() => {
      cur = Math.min(cur + step, num)
      setDisplay(cur + suffix)
      if (cur >= num) clearInterval(id)
    }, 20)
    return () => clearInterval(id)
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}

export default function About() {
  const { lang } = useLang()
  const t = T[lang].about

  const statLabels = [t.stat1, t.stat2, t.stat3]

  return (
    <section id="about" style={{ background: 'var(--color-cream)', padding: '72px 0', borderTop: '1px solid rgba(201,164,90,.18)' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}
          className="md-grid-2col">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: -14, left: -14, width: '65%', height: '65%', border: '1px solid rgba(201,164,90,.22)', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: -14, right: -14, width: '65%', height: '65%', border: '1px solid rgba(155,27,46,.15)', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
              <img
                src="/images/z7987836290602_3f4ef2ca8063482b1b0a741089422f59.jpg"
                alt={`Không gian ${RESTAURANT.name}`}
                style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,10,0,.25), transparent 60%)' }} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                position: 'absolute', bottom: 28, right: -18, zIndex: 2,
                background: 'var(--color-crimson)', padding: '18px 22px',
                boxShadow: '0 20px 50px rgba(0,0,0,.35)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>59</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(253,246,227,.6)', marginTop: 5 }}>
                Hàng Trống
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <SectionHeader pretitle={t.pre} align="left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + 'h1'}
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

            <div style={{ width: 48, height: 2, background: 'var(--color-gold)', marginBottom: 24, marginTop: -8 }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={lang + 'story'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85, color: 'rgba(28,10,0,.62)', marginBottom: 16 }}>
                  {t.story1}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.85, color: 'rgba(28,10,0,.62)', marginBottom: 16 }}>
                  {t.story2}
                </p>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, padding: '24px 0', borderTop: '1px solid rgba(28,10,0,.09)', borderBottom: '1px solid rgba(28,10,0,.09)', margin: '28px 0' }}>
              {RESTAURANT.stats.map((s, i) => (
                <div key={s.value} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', fontWeight: 600, color: 'var(--color-crimson)' }}>
                    <CountUp value={s.value} />
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={lang + 'stat' + i}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'rgba(28,10,0,.45)', marginTop: 4 }}
                    >
                      {statLabels[i]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { Icon: MapPin, text: RESTAURANT.address },
                { Icon: Clock,  text: `${RESTAURANT.hours[0].time} (${lang === 'vi' ? 'các ngày trong tuần' : 'daily'})` },
                { Icon: Phone,  text: RESTAURANT.phone },
                { Icon: Mail,   text: RESTAURANT.email },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(28,10,0,.55)' }}>
                  <Icon size={14} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-sans)' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
