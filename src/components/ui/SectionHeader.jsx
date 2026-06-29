import { motion } from 'framer-motion'

export default function SectionHeader({ pretitle, children, align = 'center', dark = false, className = '' }) {
  const isCenter = align === 'center'
  return (
    <div style={{ marginBottom: '1.75rem', textAlign: isCenter ? 'center' : 'left' }} className={className}>
      {pretitle && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16,
          justifyContent: isCenter ? 'center' : 'flex-start',
        }}>
          {isCenter && (
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.05 }}
              style={{ flex: 1, maxWidth: 72, height: 1, transformOrigin: 'right',
                background: dark ? 'rgba(201,164,90,.55)' : 'rgba(155,27,46,.4)' }}
            />
          )}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.55em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 11,
              letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0,
              color: dark ? 'var(--color-crimson-light)' : 'var(--color-crimson)',
            }}
          >
            <span className="pretitle-glow">✦</span> {pretitle}
          </motion.p>
          {isCenter && (
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.05 }}
              style={{ flex: 1, maxWidth: 72, height: 1, transformOrigin: 'left',
                background: dark ? 'rgba(201,164,90,.55)' : 'rgba(155,27,46,.4)' }}
            />
          )}
        </div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 600, lineHeight: 1.15,
          color: dark ? 'var(--color-cream)' : 'var(--color-ink)',
        }}
      >
        {children}
      </motion.h2>
    </div>
  )
}
