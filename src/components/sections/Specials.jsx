import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

const DISHES = [
  {
    id: 'pho',
    name: 'Phở Bò Truyền Thống',
    desc: 'Nước dùng hầm 12 tiếng từ xương bò già, thịt tái chín hoa bày đẹp mắt. Công thức ba thế hệ gìn giữ không đổi.',
    price: '85.000đ',
    tag: 'Bán chạy nhất',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0QwzU7rv1shkqI9Hnwe0lFekRO6CzwUhDkOpVn4Qjv_D64hymt94FdZROCFqMOVbkzUkVZ4lx-niWm8TBZc5qFWFsSXPxhcQ9F6eaqip8TweFgPUfxNETQYyYi2osu75M5AA6kd2xDA3aw2C3ATZoqgtnrxPMoXSLpqAB6VUXG4WwxgW9D0qRtTuKvxQRtS25EiWqwVyBbcI1uKq6uw9Z9J_Qyrdny5p85JUPCbkOZd1YCmiIGDR2E11ZmHd9towem18zIX11tks1',
  },
  {
    id: 'nem',
    name: 'Nem Rán Phố Cổ',
    desc: 'Nem chiên vàng giòn rụm, nhân thịt heo, mộc nhĩ, miến thơm. Chấm cùng nước mắm chua ngọt pha tỏi ớt tươi.',
    price: '55.000đ',
    tag: 'Khai vị số 1',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGm7_KR619QVzjlQNL-RjaU0EvZoAlq4xPrutcwAuDM0PfsJwJJU1LSuR-AIEWWomgyOK2a31whqTMYIDp2OuyLNbyRDzYSlySuX7M_2TcQXqzy-aASR0gKZisJh_jHfCM56Y_1p5DVSgH-67MqMnyW2ITI2KYnQQc0z-UXkhz3uW3AAOeNCIS16E_Ltv5YjHGQ2Egru45UZ1n4vWv1m3AWgapb8EHq99yNfz2Bv4gn1HR1R6HYBWHd3T8gfj14p7HcScQzp2Fs5aM',
  },
  {
    id: 'bungcha',
    name: 'Bún Chả Hà Nội',
    desc: 'Chả viên & chả miếng nướng than hoa, bún tươi, rau sống thơm mát. Nước chấm pha chuẩn công thức Hà Nội gốc.',
    price: '75.000đ',
    tag: 'Đặc sản phố cổ',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtgZ2_F0E7ie2CD1Sc4hp57eBJzW4zfpy8tCm7nRk8qEVMtWj7MpKAbwUTaIls71-CNd5BOEKmkkPYG2Moj7L35_l7lyA5SIZns5ONI-h8KIZvLagUsu4TlqXu6Y6bjgY-0UpoQ11q0gI-6-gnSWLNgro7vARdD3u51H00dIV-qP40NYVAStRPYijWljbq0mnhLHPpk5eRaQgCus41tWZRb9t3vnpzdQp45Ghe0BFIEs6Dv0X2tesZC9NALX5bK8Q-PIHoG_V7PrJk',
  },
]

export default function Specials() {
  const { lang } = useLang()
  const t = T[lang].specials

  return (
    <section id="specials" style={{ background: 'var(--color-ink-mid)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="ambient-orb" style={{ width: 700, height: 700, top: '-15%', right: '-12%', background: 'rgba(155,27,46,.25)', animationDuration: '16s' }} />
      <div className="ambient-orb" style={{ width: 500, height: 500, bottom: '-5%', left: '-8%', background: 'rgba(201,164,90,.18)', animationDuration: '20s', animationDelay: '-8s' }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader pretitle={t.pre} dark>
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + 'specials-h'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block' }}
              >
                {t.h1}<br />
                <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>{t.h2}</em>
              </motion.span>
            </AnimatePresence>
          </SectionHeader>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, perspective: 1200 }}>
          {DISHES.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, rotateX: -3, rotateY: 4, boxShadow: '0 32px 64px rgba(0,0,0,.45), 0 0 0 1px rgba(201,164,90,.35)', transition: { duration: 0.3 } }}
              style={{ overflow: 'hidden', border: '1px solid rgba(201,164,90,.15)', boxShadow: '0 4px 24px rgba(0,0,0,.25)', transformStyle: 'preserve-3d' }}
            >
              <div style={{ position: 'relative', height: 272, overflow: 'hidden' }}>
                <motion.img
                  src={dish.img} alt={dish.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,10,0,.85) 0%, transparent 55%)' }} />
                {/* Tag badge */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.13 + 0.35 }}
                  style={{
                    position: 'absolute', top: 14, left: 14,
                    background: 'var(--color-crimson)', color: '#fff',
                    padding: '4px 12px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                  }}
                >{dish.tag}</motion.span>
              </div>
              <div style={{ padding: '22px 24px', background: 'rgba(255,255,255,.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.18rem', fontWeight: 600, color: 'var(--color-cream)', lineHeight: 1.3 }}>{dish.name}</h3>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-gold)', flexShrink: 0 }}>{dish.price}</span>
                </div>
                <motion.div initial={{ width: 0 }} whileInView={{ width: 28 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.13 + 0.4 }} style={{ height: 1, background: 'rgba(201,164,90,.4)', marginBottom: 10 }} />
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.65, color: 'rgba(253,246,227,.55)' }}>{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Button href="#menu" variant="outline">
            <AnimatePresence mode="wait">
              <motion.span key={lang + 'specials-btn'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {t.btn}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </Container>
    </section>
  )
}
