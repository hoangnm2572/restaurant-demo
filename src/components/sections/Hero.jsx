import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { RESTAURANT } from '../../data/restaurant'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7.3) % 100}%`,
  size: 3 + (i % 4),
  duration: 8 + (i % 6),
  delay: (i * 0.8) % 5,
  color: i % 3 === 0 ? 'var(--color-gold)' : i % 3 === 1 ? 'var(--color-crimson)' : 'rgba(253,246,233,0.4)',
}))

export default function Hero() {
  const { lang } = useLang()
  const t = T[lang].hero

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-160 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="https://lh3.googleusercontent.com/aida/AP1WRLuKPTYJEIg90b1KHcUeR0WcaTYL9Qu465w9UOhpYUUmijTJgsnwQAlkYLpLX3lMIyi7zzEM52j3rhAxfm_IRAvikfqDg_dH_3cZAqBM34I8DqhLX4V4Bd7A-K8TJjRRgfVmoBn_1X_ByqNG7MskJT-JjRdf4Jb2oAvt_wAGvQ7uTwIfNI7Ef3UE8fHWGa6ag0p_FAdr12V4zal2YvU5AaBLaV0UEspuLRhFhmDs400YkVl5J6H0_KFBxhDv"
          alt={`Không gian ${RESTAURANT.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/55 to-ink/85" />
        <div className="absolute inset-0 bg-linear-to-r from-crimson-deep/25 via-transparent to-ink/20" />
      </motion.div>

      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-20 h-px bg-gold/50" />
          <span className="text-gold text-base">✦</span>
          <div className="w-20 h-px bg-gold/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.38em' }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="text-gold/75 text-xs uppercase tracking-[0.38em] mb-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang + 'location'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {t.location} {RESTAURANT.since}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-cream leading-none mb-4"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 600 }}
        >
          {RESTAURANT.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-10 h-px bg-crimson/60" />
          <span className="text-crimson/80 text-xs">❖</span>
          <div className="w-10 h-px bg-crimson/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="text-cream/55 text-lg md:text-xl mb-12 italic"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang + 'tagline'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {t.tagline}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#booking" className="px-10 py-4">
            <AnimatePresence mode="wait">
              <motion.span key={lang + 'cta1'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {t.cta1}
              </motion.span>
            </AnimatePresence>
          </Button>
          <Button href="#menu" variant="outline" className="px-10 py-4">
            <AnimatePresence mode="wait">
              <motion.span key={lang + 'cta2'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {t.cta2}
              </motion.span>
            </AnimatePresence>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang + 'scroll'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-cream/30 text-xs tracking-widest uppercase"
            >
              {t.scroll}
            </motion.span>
          </AnimatePresence>
          <div className="bounce-y w-px h-8 bg-linear-to-b from-gold/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
