import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, User, Phone, MessageSquare } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { RESTAURANT } from '../../data/restaurant'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

export default function Booking() {
  const { lang } = useLang()
  const t = T[lang].booking

  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '', note: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="booking" style={{ background: 'var(--color-ink)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Bg texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url('/images/z7987836285644_a0998905fab5c35a8697a85971323a2d.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.1, filter: 'grayscale(40%)',
      }} />
      {/* Ambient orbs */}
      <div className="ambient-orb" style={{ width: 800, height: 800, top: '-25%', left: '-18%', background: 'rgba(201,164,90,.18)', animationDuration: '20s' }} />
      <div className="ambient-orb" style={{ width: 600, height: 600, bottom: '-15%', right: '-12%', background: 'rgba(155,27,46,.22)', animationDuration: '15s', animationDelay: '-7s' }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="booking-grid">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <SectionHeader pretitle={t.pre} align="left" dark>
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang + 'book-h'}
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

            <div style={{ width: 40, height: 1, background: 'var(--color-gold)', marginBottom: 20, marginTop: -8 }} />

            <AnimatePresence mode="wait">
              <motion.p
                key={lang + 'book-desc'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.8, color: 'rgba(253,246,227,.5)', marginBottom: 28 }}
              >
                {t.desc}
              </motion.p>
            </AnimatePresence>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { Icon: Clock,  text: t.hours },
                { Icon: Phone,  text: `${t.hotline} ${RESTAURANT.phone}` },
                { Icon: Users,  text: t.group },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(253,246,227,.45)', fontSize: 14 }}>
                  <Icon size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-sans)' }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, paddingLeft: 16, borderLeft: '2px solid rgba(155,27,46,.5)' }}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={lang + 'book-quote'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontStyle: 'italic', color: 'rgba(253,246,227,.38)', lineHeight: 1.75 }}
                >
                  {t.quote}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div style={{
              padding: 'clamp(24px, 4vw, 40px)',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(201,164,90,.15)',
              backdropFilter: 'blur(8px)',
            }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 0', gap: 16 }}
                >
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'rgba(155,27,46,.2)', border: '1px solid rgba(155,27,46,.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, color: 'var(--color-gold)',
                  }}>✦</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-cream)' }}>{t.successTitle}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(253,246,227,.5)', maxWidth: 280 }}>
                    {t.successDesc}
                  </p>
                  <button onClick={() => setSent(false)} style={{ marginTop: 8, background: 'none', border: 'none', color: 'var(--color-gold)', fontSize: 13, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
                    {t.successBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Field icon={<User size={11} />} label={t.name}>
                      <input required type="text" placeholder="Nguyễn Văn A" value={form.name} onChange={set('name')} className="input-field" />
                    </Field>
                    <Field icon={<Phone size={11} />} label={t.phone}>
                      <input required type="tel" placeholder="09xx xxx xxx" value={form.phone} onChange={set('phone')} className="input-field" />
                    </Field>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                    <Field icon={<Calendar size={11} />} label={t.date}>
                      <input required type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().split('T')[0]} className="input-field" />
                    </Field>
                    <Field icon={<Clock size={11} />} label={t.time}>
                      <select required value={form.time} onChange={set('time')} className="input-field">
                        <option value="">{t.timePh}</option>
                        {RESTAURANT.bookingTimes.map((ti) => <option key={ti} value={ti}>{ti}</option>)}
                      </select>
                    </Field>
                    <Field icon={<Users size={11} />} label={t.guests}>
                      <select required value={form.guests} onChange={set('guests')} className="input-field">
                        <option value="">{t.guestPh}</option>
                        {RESTAURANT.bookingGuestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field icon={<MessageSquare size={11} />} label={t.note}>
                    <textarea rows={3} placeholder={t.notePh} value={form.note} onChange={set('note')} className="input-field" style={{ resize: 'none' }} />
                  </Field>
                  <Button type="submit" style={{ marginTop: 4, width: '100%', textAlign: 'center', display: 'block' }}>
                    <AnimatePresence mode="wait">
                      <motion.span key={lang + 'book-submit'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        {t.submit}
                      </motion.span>
                    </AnimatePresence>
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Field({ icon, label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(201,164,90,.7)' }}>
        {icon} {label}
      </span>
      {children}
    </label>
  )
}
