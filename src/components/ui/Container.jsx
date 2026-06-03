export default function Container({ children, style = {} }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 clamp(16px, 5vw, 48px)',
      ...style,
    }}>
      {children}
    </div>
  )
}
