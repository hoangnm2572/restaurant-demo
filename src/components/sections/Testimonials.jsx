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
    text: 'Phở ở đây đậm đà nhất tôi từng ăn trong 30 năm sống ở Hà Nội. Nước dùng trong vắt, thơm lừng, xương hầm thực sự 12 tiếng — bạn cảm nhận được ngay.',
  },
  {
    id: 2,
    name: 'Nguyễn Minh Khôi',
    location: 'TP. Hồ Chí Minh',
    initials: 'NK',
    rating: 5,
    text: 'Ra Hà Nội công tác, điều đầu tiên tôi làm là đặt bàn Bếp Hà Thành. Chả cá Lã Vọng chuẩn vị, mắm tôm thơm nức. Không khí phố cổ ngay trong nhà hàng.',
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    location: 'United Kingdom',
    initials: 'ST',
    rating: 5,
    text: 'The most authentic Vietnamese dining experience in Hanoi. The egg coffee was life-changing — creamy, rich, unlike anything else. Will visit every trip.',
  },
]

export default function Testimonials() {
  const { lang } = useLang()
  const t = T[lang].testimonials

  return (
    <section style={{ background: 'var(--color-cream-dark)', padding: '112px 0', borderTop: '1px solid rgba(201,164,90,.15)' }}>
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
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                background: 'var(--color-cream)',
                border: '1px solid rgba(201,164,90,.18)',
                padding: '2rem', position: 'relative',
                boxShadow: '0 2px 16px rgba(28,10,0,.06)',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: 18, right: 22, fontFamily: 'Georgia,serif', fontSize: 72,
                lineHeight: 1, color: 'rgba(201,164,90,.1)', userSelect: 'none', pointerEvents: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ color: 'var(--color-gold)', letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>
                {'★'.repeat(r.rating)}
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.8, color: 'rgba(28,10,0,.62)', marginBottom: 24, position: 'relative' }}>
                {r.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(201,164,90,.15)' }}>
                <div style={{
                  width: 36, height: 36, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--color-crimson)', color: '#fff',
                  fontFamily: 'var(--font-serif)', fontSize: '0.8rem', fontWeight: 600, borderRadius: 2,
                }}>
                  {r.initials}
                </div>
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
