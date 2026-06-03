export default function SectionHeader({ pretitle, children, align = 'center', dark = false, className = '' }) {
  return (
    <div style={{ marginBottom: '1.75rem', textAlign: align === 'center' ? 'center' : 'left' }} className={className}>
      {pretitle && (
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: 12,
          color: dark ? 'var(--color-crimson-light)' : 'var(--color-crimson)',
        }}>
          ✦ {pretitle}
        </p>
      )}
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 600,
        lineHeight: 1.15,
        color: dark ? 'var(--color-cream)' : 'var(--color-ink)',
      }}>
        {children}
      </h2>
    </div>
  )
}
