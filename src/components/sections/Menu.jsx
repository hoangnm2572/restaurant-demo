import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'
import { RESTAURANT } from '../../data/restaurant'

const M = (n) => `/images/menu/Slide${n}.JPG`

const SPREADS = [
  { left: { type: 'cover', variant: 'left' },  right: { type: 'image', src: M(1),  alt: 'Bìa thực đơn' } },
  { left: { type: 'image', src: M(2),  alt: 'Hướng dẫn' },          right: { type: 'image', src: M(3),  alt: 'Món Đặc Biệt' } },
  { left: { type: 'image', src: M(4),  alt: 'Khai Vị' },            right: { type: 'image', src: M(5),  alt: 'Nộm – Salad' } },
  { left: { type: 'image', src: M(6),  alt: 'Súp' },                right: { type: 'image', src: M(7),  alt: 'Món Phụ' } },
  { left: { type: 'image', src: M(8),  alt: 'Món Gà' },             right: { type: 'image', src: M(9),  alt: 'Món Vịt' } },
  { left: { type: 'image', src: M(10), alt: 'Món Cá' },             right: { type: 'image', src: M(11), alt: 'Món Bò' } },
  { left: { type: 'image', src: M(12), alt: 'Hải Sản' },            right: { type: 'image', src: M(13), alt: 'Món Lợn' } },
  { left: { type: 'image', src: M(14), alt: 'Phở & Mì Xào' },      right: { type: 'image', src: M(15), alt: 'Cơm Rang' } },
  { left: { type: 'image', src: M(16), alt: 'Súp Chay' },           right: { type: 'image', src: M(17), alt: 'Khai Vị Chay' } },
  { left: { type: 'image', src: M(18), alt: 'Món Chính Chay' },     right: { type: 'image', src: M(19), alt: 'Tráng Miệng' } },
  { left: { type: 'image', src: M(20), alt: 'Nước Hoa Quả' },       right: { type: 'image', src: M(21), alt: 'Cà Phê' } },
  { left: { type: 'image', src: M(22), alt: 'Trà Việt Nam' },       right: { type: 'image', src: M(23), alt: 'Bia' } },
  { left: { type: 'image', src: M(24), alt: 'Nước Ngọt' },          right: { type: 'image', src: M(25), alt: 'Rượu Truyền Thống' } },
  { left: { type: 'image', src: M(26), alt: 'Vang Đỏ' },            right: { type: 'image', src: M(27), alt: 'Vang Trắng' } },
  { left: { type: 'image', src: M(28), alt: 'Cảm ơn' },             right: { type: 'cover', variant: 'right' } },
]

/* Flatten spreads into individual pages for mobile single-page view */
const PAGES = SPREADS.flatMap(s => [s.left, s.right])

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = e => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export default function Menu() {
  const { lang } = useLang()
  const t = T[lang].menu
  const isMobile = useIsMobile()

  /* Desktop state */
  const [current, setCurrent] = useState(0)
  const [flipState, setFlipState] = useState(null)

  /* Mobile state */
  const [mobilePage, setMobilePage] = useState(0)
  const [mobileFlip, setMobileFlip] = useState(null)

  function flip(dir) {
    if (flipState) return
    const to = dir === 'forward' ? current + 1 : current - 1
    if (to < 0 || to >= SPREADS.length) return
    setFlipState({ dir, to })
  }
  function onFlipComplete() {
    if (!flipState) return
    setCurrent(flipState.to)
    setFlipState(null)
  }

  function flipMobile(dir) {
    if (mobileFlip) return
    const to = dir === 'forward' ? mobilePage + 1 : mobilePage - 1
    if (to < 0 || to >= PAGES.length) return
    setMobileFlip({ dir, to })
  }
  function onMobileFlipComplete() {
    if (!mobileFlip) return
    setMobilePage(mobileFlip.to)
    setMobileFlip(null)
  }

  const baseLeft  = flipState?.dir === 'backward' ? SPREADS[flipState.to].left  : SPREADS[current].left
  const baseRight = flipState?.dir === 'forward'  ? SPREADS[flipState.to].right : SPREADS[current].right
  const canPrev = current > 0 && !flipState
  const canNext = current < SPREADS.length - 1 && !flipState

  const mobileBase = mobileFlip ? PAGES[mobileFlip.to] : PAGES[mobilePage]
  const mobileCanPrev = mobilePage > 0 && !mobileFlip
  const mobileCanNext = mobilePage < PAGES.length - 1 && !mobileFlip

  const arrowBtnStyle = (disabled) => ({
    width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid rgba(201,164,90,.22)',
    color: disabled ? 'rgba(201,164,90,.2)' : 'rgba(253,246,227,.5)',
    background: 'transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all .25s',
    pointerEvents: disabled ? 'none' : 'auto',
  })

  const navBtnStyle = (disabled) => ({
    display: 'flex', alignItems: 'center', gap: 8,
    background: 'none', border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? 'rgba(201,164,90,.2)' : 'rgba(253,246,227,.55)',
    fontFamily: 'var(--font-sans)', fontSize: 13,
  })

  return (
    <section id="menu" style={{ background: 'var(--color-ink)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background restaurant photo */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url('/images/z7987836278188_6294d9e333a3f668f28729f599542512.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.09, filter: 'blur(2px)',
      }} />
      {/* Ambient glow orbs */}
      <div className="ambient-orb" style={{
        width: 700, height: 700, top: '-5%', left: '-12%',
        background: 'rgba(201,164,90,.22)',
        animationDuration: '14s',
      }} />
      <div className="ambient-orb" style={{
        width: 600, height: 600, bottom: '5%', right: '-10%',
        background: 'rgba(155,27,46,.28)',
        animationDuration: '18s', animationDelay: '-6s',
      }} />
      <div className="ambient-orb" style={{
        width: 350, height: 350, top: '45%', left: '45%',
        background: 'rgba(201,164,90,.12)',
        animationDuration: '22s', animationDelay: '-10s',
      }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeader pretitle={t.pre} dark>
            <AnimatePresence mode="wait">
              <motion.span
                key={lang + 'menu-h'}
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

        {isMobile ? (
          /* ── Mobile: single-page 3D book ── */
          <div>
            <div style={{ perspective: '1000px', perspectiveOrigin: 'center 45%' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(500px, 80vh, 640px)',
                boxShadow: '0 30px 70px rgba(0,0,0,.75), 0 10px 30px rgba(0,0,0,.5)',
              }}>
                {/* Base — shows destination page (or current if idle) */}
                <div style={{ position: 'absolute', inset: 0 }}>
                  <Page page={mobileBase} side="right" mobile />
                </div>
                {/* Flip overlay */}
                {mobileFlip && (
                  <MobileFlipPage
                    dir={mobileFlip.dir}
                    frontPage={PAGES[mobilePage]}
                    onComplete={onMobileFlipComplete}
                  />
                )}
              </div>
            </div>

            {/* Mobile navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginTop: 28 }}>
              <div style={{ display: 'flex', gap: 32 }}>
                <button onClick={() => flipMobile('backward')} disabled={!mobileCanPrev} style={navBtnStyle(!mobileCanPrev)}>
                  <ChevronLeft size={16} /> {t.prev}
                </button>
                <button onClick={() => flipMobile('forward')} disabled={!mobileCanNext} style={navBtnStyle(!mobileCanNext)}>
                  {t.next} <ChevronRight size={16} />
                </button>
              </div>
              {/* 6 dots — one per page */}
              <div style={{ display: 'flex', gap: 6 }}>
                {PAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!mobileFlip && i !== mobilePage) setMobileFlip({ dir: i > mobilePage ? 'forward' : 'backward', to: i }) }}
                    style={{
                      width: i === mobilePage ? 28 : 6, height: 6,
                      background: i === mobilePage ? 'var(--color-gold)' : 'rgba(201,164,90,.25)',
                      border: 'none', cursor: 'pointer', borderRadius: 3, transition: 'all .3s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ── Desktop: two-page book ── */
          <div>
            <div style={{ position: 'relative' }}>
              {/* Left arrow */}
              <button
                onClick={() => flip('backward')} disabled={!canPrev}
                style={{ ...arrowBtnStyle(!canPrev), position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
                onMouseEnter={(e) => { if (canPrev) { e.currentTarget.style.color = 'var(--color-gold)'; e.currentTarget.style.borderColor = 'var(--color-gold)' }}}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(253,246,227,.5)'; e.currentTarget.style.borderColor = 'rgba(201,164,90,.22)' }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Book */}
              <div style={{ perspective: '1600px', perspectiveOrigin: 'center 45%' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(560px, 62vw, 800px)',
                  boxShadow: '0 50px 100px rgba(0,0,0,.75), 0 20px 40px rgba(0,0,0,.5)',
                }}>
                  {/* Base left page */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 'calc(50% - 4px)', height: '100%' }}>
                    <Page page={baseLeft} side="left" />
                  </div>
                  {/* Spine */}
                  <div style={{
                    position: 'absolute', top: 0, left: 'calc(50% - 4px)', width: 8, height: '100%', zIndex: 5,
                    background: 'linear-gradient(to right, #0b0203, #6f1020, #3a080e, #6f1020, #0b0203)',
                    boxShadow: '0 0 14px rgba(0,0,0,.8)',
                  }} />
                  {/* Base right page */}
                  <div style={{ position: 'absolute', top: 0, left: 'calc(50% + 4px)', width: 'calc(50% - 4px)', height: '100%' }}>
                    <Page page={baseRight} side="right" />
                  </div>
                  {/* Flipping page */}
                  {flipState && (
                    <FlipPage
                      dir={flipState.dir}
                      frontPage={flipState.dir === 'forward' ? SPREADS[current].right    : SPREADS[current].left}
                      backPage={flipState.dir  === 'forward' ? SPREADS[flipState.to].left : SPREADS[flipState.to].right}
                      onComplete={onFlipComplete}
                    />
                  )}
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={() => flip('forward')} disabled={!canNext}
                style={{ ...arrowBtnStyle(!canNext), position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}
                onMouseEnter={(e) => { if (canNext) { e.currentTarget.style.color = 'var(--color-gold)'; e.currentTarget.style.borderColor = 'var(--color-gold)' }}}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(253,246,227,.5)'; e.currentTarget.style.borderColor = 'rgba(201,164,90,.22)' }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Desktop dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
              {SPREADS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (!flipState && i !== current) setFlipState({ dir: i > current ? 'forward' : 'backward', to: i }) }}
                  style={{
                    width: i === current ? 32 : 8, height: 8,
                    background: i === current ? 'var(--color-gold)' : 'rgba(201,164,90,.25)',
                    border: 'none', cursor: 'pointer', borderRadius: 4, transition: 'all .3s',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

/* ── Mobile 3D flip page (full-width single page) ── */
function MobileFlipPage({ dir, frontPage, onComplete }) {
  const isForward = dir === 'forward'
  return (
    <motion.div
      style={{
        position: 'absolute', inset: 0,
        transformOrigin: isForward ? '0% 50%' : '100% 50%',
        transformStyle: 'preserve-3d',
        zIndex: 10,
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isForward ? -180 : 180 }}
      transition={{ duration: 0.72, ease: [0.45, 0, 0.55, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Front: current page */}
      <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
        <Page page={frontPage} side="right" mobile />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: isForward
            ? 'linear-gradient(to right, transparent 65%, rgba(0,0,0,.18))'
            : 'linear-gradient(to left,  transparent 65%, rgba(0,0,0,.18))',
        }} />
      </div>
      {/* Back: transparent — base (destination) shows through */}
      <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} />
    </motion.div>
  )
}

/* ── Desktop 3D flip page ── */
function FlipPage({ dir, frontPage, backPage, onComplete }) {
  const isForward = dir === 'forward'
  return (
    <motion.div
      style={{
        position: 'absolute', top: 0,
        left: isForward ? 'calc(50% + 4px)' : 0,
        width: 'calc(50% - 4px)', height: '100%',
        transformOrigin: isForward ? '0% 50%' : '100% 50%',
        transformStyle: 'preserve-3d',
        zIndex: 10,
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isForward ? -180 : 180 }}
      transition={{ duration: 0.72, ease: [0.45, 0, 0.55, 1] }}
      onAnimationComplete={onComplete}
    >
      <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
        <Page page={frontPage} side={isForward ? 'right' : 'left'} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: isForward
            ? 'linear-gradient(to right, transparent 65%, rgba(0,0,0,.2))'
            : 'linear-gradient(to left,  transparent 65%, rgba(0,0,0,.2))',
        }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        <Page page={backPage} side={isForward ? 'left' : 'right'} />
      </div>
    </motion.div>
  )
}

/* ── Page dispatcher ── */
function Page({ page, side, mobile = false }) {
  if (page.type === 'cover') return <CoverPage variant={page.variant} mobile={mobile} />
  if (page.type === 'image') return <ImagePage page={page} side={side} />
  return null
}

/* ── Menu slide image page ── */
function ImagePage({ page, side }) {
  return (
    <div style={{
      width: '100%', height: '100%', overflow: 'hidden',
      background: '#1a0608', position: 'relative',
    }}>
      <img
        src={page.src}
        alt={page.alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        loading="lazy"
      />
      {/* Spine shadow */}
      {side === 'right'
        ? <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 20, background: 'linear-gradient(to right, rgba(0,0,0,.25), transparent)', pointerEvents: 'none' }} />
        : <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 14, background: 'linear-gradient(to left, rgba(0,0,0,.15), transparent)', pointerEvents: 'none' }} />
      }
    </div>
  )
}

/* ── Cover page ── */
function CoverPage({ variant, mobile = false }) {
  const isLeft = variant === 'left'
  return (
    <div style={{
      width: '100%', height: '100%',
      background: isLeft
        ? 'linear-gradient(150deg, #4a0a14, #2d0509)'
        : 'linear-gradient(150deg, #5c0e1a, #3a0a10)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Restaurant photo texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/images/z7987836301273_48434644939dbf020b999f3d422e6623.jpg')`,
        backgroundSize: 'cover', backgroundPosition: isLeft ? 'left center' : 'center',
        opacity: isLeft ? 0.1 : 0.18,
        mixBlendMode: 'luminosity',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: isLeft
          ? 'linear-gradient(150deg, rgba(74,10,20,.92), rgba(45,5,9,.95))'
          : 'linear-gradient(150deg, rgba(92,14,26,.85), rgba(58,10,16,.92))',
      }} />
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.12,
        backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 18px,rgba(201,164,90,.12) 18px,rgba(201,164,90,.12) 19px),repeating-linear-gradient(-45deg,transparent,transparent 18px,rgba(201,164,90,.12) 18px,rgba(201,164,90,.12) 19px)',
      }} />
      <div style={{ position: 'absolute', inset: 14, border: `1px solid rgba(201,164,90,${isLeft ? '.15' : '.2'})`, pointerEvents: 'none' }} />
      {!isLeft && (
        <>
          <span style={{ position: 'absolute', top: 8, left: 8,  color: 'rgba(201,164,90,.35)', fontSize: 13 }}>✦</span>
          <span style={{ position: 'absolute', top: 8, right: 8, color: 'rgba(201,164,90,.35)', fontSize: 13 }}>✦</span>
          <span style={{ position: 'absolute', bottom: 8, left: 8,  color: 'rgba(201,164,90,.35)', fontSize: 13 }}>✦</span>
          <span style={{ position: 'absolute', bottom: 8, right: 8, color: 'rgba(201,164,90,.35)', fontSize: 13 }}>✦</span>
        </>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {isLeft ? (
          <>
            <div style={{ width: 36, height: 1, background: 'rgba(201,164,90,.4)', margin: '0 auto 18px' }} />
            <p style={{ fontFamily: 'var(--font-serif)', color: 'rgba(253,246,227,.4)', fontSize: mobile ? '1.05rem' : 'clamp(.85rem,1.8vw,1.05rem)', fontStyle: 'italic', lineHeight: 1.85 }}>
              "Vị ngon gốc rễ<br />từ lòng phố cổ"
            </p>
            <div style={{ width: 36, height: 1, background: 'rgba(201,164,90,.4)', margin: '18px auto 0' }} />
            <p style={{ marginTop: 22, fontFamily: 'var(--font-sans)', color: 'rgba(201,164,90,.5)', fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase' }}>59 Hàng Trống</p>
          </>
        ) : (
          <>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(201,164,90,.6)', fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: 18 }}>
              Nhà hàng ẩm thực
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: mobile ? '3rem' : 'clamp(1.8rem,4.5vw,3.5rem)', fontWeight: 700, color: '#fdf6e3', lineHeight: 1, marginBottom: 8 }}>
              {RESTAURANT.name}
            </h2>
            <div style={{ width: 56, height: 1, background: 'rgba(201,164,90,.5)', margin: '16px auto' }} />
            <p style={{ fontFamily: 'var(--font-serif)', color: 'rgba(201,164,90,.8)', fontSize: mobile ? '1.2rem' : 'clamp(.9rem,1.8vw,1.2rem)', fontStyle: 'italic' }}>Thực Đơn</p>
            <p style={{ marginTop: 28, fontFamily: 'var(--font-sans)', color: 'rgba(253,246,227,.18)', fontSize: 10, letterSpacing: '0.22em' }}>
              {RESTAURANT.address}
            </p>
          </>
        )}
      </div>
      {isLeft
        ? <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 18, background: 'linear-gradient(to left, rgba(0,0,0,.15), transparent)', pointerEvents: 'none' }} />
        : <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 18, background: 'linear-gradient(to right, rgba(0,0,0,.2), transparent)', pointerEvents: 'none' }} />
      }
    </div>
  )
}

