import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

const REVIEWS = [
  {
    id: 1,
    name: 'Trần Thị Hương',
    location: 'Hà Nội',
    initials: 'TH',
    rating: 5,
    text: 'Phở ở đây đậm đà nhất tôi từng ăn. Nước dùng trong vắt, thơm lừng, xương hầm thực sự 12 tiếng. Không gian đèn lồng, gỗ tối rất có hồn — chuẩn phố cổ Hà Nội.',
  },
  {
    id: 2,
    name: 'Nguyễn Minh Khôi',
    location: 'TP. Hồ Chí Minh',
    initials: 'NK',
    rating: 5,
    text: 'Ra Hà Nội công tác, điều đầu tiên tôi làm là đặt bàn Gạo Restaurant. Chả cá Lã Vọng chuẩn vị, mắm tôm thơm nức. Không khí phố cổ ngay trong nhà hàng.',
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    initials: 'ST',
    rating: 5,
    text: 'The most authentic Vietnamese dining experience in Hanoi. Stunning Indochine interior, attentive service. The egg coffee was life-changing. Will visit every single trip.',
  },
]

function Stars({ rating, delay = 0 }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
      {Array.from({ length: rating }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: delay + i * 0.09, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ color: 'var(--color-gold)', fontSize: 15 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { lang } = useLang()
  const t = T[lang].testimonials

  return (
    <section style={{ background: 'var(--color-cream-dark)', padding: '72px 0', borderTop: '1px solid rgba(201,164,90,.15)' }}>
      <Container>
        <SectionHeader pretitle={t.pre}>
          <AnimatePresence mode="wait">
            <motion.span
              key={lang + 'test-h'}
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 24px 52px rgba(28,10,0,.11)', transition: { duration: 0.28 } }}
              style={{
                background: 'var(--color-cream)',
                border: '1px solid rgba(201,164,90,.18)',
                padding: '2rem', position: 'relative',
                boxShadow: '0 2px 16px rgba(28,10,0,.06)',
              }}
            >
              {/* Quote mark — scales in */}
              <motion.div
                initial={{ scale: 0, rotate: 20, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.13 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  position: 'absolute', top: 14, right: 20,
                  fontFamily: 'Georgia,serif', fontSize: 80, lineHeight: 1,
                  color: 'rgba(201,164,90,.18)', userSelect: 'none', pointerEvents: 'none',
                }}
              >
                "
              </motion.div>

              <Stars rating={r.rating} delay={i * 0.13 + 0.1} />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.13 + 0.4 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.82, color: 'rgba(28,10,0,.62)', marginBottom: 24, position: 'relative' }}
              >
                {r.text}
              </motion.p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(201,164,90,.15)' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.13 + 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{
                    width: 38, height: 38, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--color-crimson)', color: '#fff',
                    fontFamily: 'var(--font-serif)', fontSize: '0.85rem', fontWeight: 600, borderRadius: 2,
                  }}
                >
                  {r.initials}
                </motion.div>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-ink)' }}>{r.name}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--color-stone)', marginTop: 2 }}>{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
