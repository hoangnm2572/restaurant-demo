const VARIANTS = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost:   'text-cream/70 hover:text-gold border border-transparent transition-colors duration-300',
}

export default function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button', disabled = false, ...props }) {
  const base = [
    'inline-block px-8 py-3 text-sm tracking-[0.18em] uppercase font-medium',
    'cursor-pointer select-none',
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
