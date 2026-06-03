const VARIANTS = {
  primary: 'bg-crimson hover:bg-crimson-deep text-cream border border-crimson/50 hover:shadow-lg hover:shadow-crimson/30',
  outline: 'border border-gold/50 hover:border-gold text-gold hover:text-gold-light',
  ghost:   'text-cream/70 hover:text-gold border border-transparent',
}

export default function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button', disabled = false, ...props }) {
  const base = [
    'inline-block px-8 py-3 text-sm tracking-[0.2em] uppercase font-medium',
    'transition-all duration-300 cursor-pointer',
    VARIANTS[variant],
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return <a href={href} className={base} style={{ fontFamily: 'var(--font-sans)' }} {...props}>{children}</a>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} style={{ fontFamily: 'var(--font-sans)' }} {...props}>
      {children}
    </button>
  )
}
