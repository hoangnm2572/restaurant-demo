import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Container from '../ui/Container'
import { useLang } from '../../context/LangContext'
import { T } from '../../data/translations'
import { RESTAURANT } from '../../data/restaurant'

const IMGS = {
  bunCha:    '/images/food_bun_cha_2.jpg',
  banhXeo:   '/images/food_banh_xeo_2.jpg',
  chaCa:     '/images/food_banh_xeo.jpg',
  boNuong:   '/images/food_bo_nuong.jpg',
  nemRan:    '/images/food_nem_ran.jpg',
  goiCuon:   '/images/food_goi_cuon_2.jpg',
  goiCuonAlt:'/images/food_goi_cuon.jpg',
  nemLui:    '/images/food_nem_lui_2.jpg',
  nemLuiAlt: '/images/food_nem_lui.jpg',
  nomXoai:   '/images/food_nom_xoai_2.jpg',
  nomXoaiAlt:'/images/food_nom_xoai.jpg',
  phoBo:     '/images/food_pho_bo.jpg',
  phoGa:     '/images/food_pho_ga_2.jpg',
  phoGaAlt:  '/images/food_pho_ga.jpg',
  comRang:   '/images/food_com_rang.jpg',
  bunChaAlt: '/images/food_bun_cha.jpg',
}

const SPREADS = [
  // ── Spread 0: Bìa ──────────────────────────────────────────
  {
    left:  { type: 'cover', variant: 'left' },
    right: { type: 'cover', variant: 'right' },
  },

  // ── Spread 1: Món Đặc Biệt + Khai Vị ──────────────────────
  {
    left: {
      type: 'content', category: 'Món Đặc Biệt', subtitle: 'Highly Recommended',
      items: [
        { name: 'Bún chả Hà Nội',   price: '130.000đ', desc: 'Chả viên & chả miếng nướng than hoa, bún tươi, rau sống thơm', img: IMGS.bunCha,  recommended: true },
        { name: 'Bánh xèo',         price: '130.000đ', desc: 'Vỏ giòn vàng rụm, tôm tươi, giá đỗ, nước chấm đặc biệt',      img: IMGS.banhXeo },
        { name: 'Chả cá Hà Nội',   price: '160.000đ', desc: 'Cá fillet nướng nghệ thì là, mắm tôm, bún sợi, bánh đa bỏng',  img: IMGS.chaCa,  recommended: true },
        { name: 'Bò nướng ống tre', price: '170.000đ', desc: 'Thịt bò tươi nướng trong ống tre, sốt gia vị đặc trưng',       img: IMGS.boNuong },
      ],
    },
    right: {
      type: 'content', category: 'Khai Vị', subtitle: 'Appetizers',
      items: [
        { name: 'Nem rán Hà Nội',     price: '85.000đ',  desc: 'Nhân thịt heo, mộc nhĩ, miến thơm, chiên vàng giòn rụm',     img: IMGS.nemRan,  recommended: true },
        { name: 'Gỏi cuốn tôm thịt', price: '105.000đ', desc: 'Tôm tươi, thịt luộc, bún sợi, rau sống cuốn bánh tráng mỏng', img: IMGS.goiCuon },
        { name: 'Nem lụi',            price: '120.000đ', desc: 'Thịt heo xay ướp sả nướng than hoa, chấm tương đậu phộng',    img: IMGS.nemLui },
        { name: 'Nộm xoài tôm',      price: '130.000đ', desc: 'Xoài xanh chua, tôm tươi, rau thơm, đậu phộng rang giòn',    img: IMGS.nomXoai },
      ],
    },
  },

  // ── Spread 2: Phở & Mì Xào + Cơm Rang ────────────────────
  {
    left: {
      type: 'content', category: 'Phở & Mì Xào', subtitle: 'Noodles',
      items: [
        { name: 'Phở bò tái chín',       price: '110.000đ', desc: 'Nước dùng hầm 12 tiếng từ xương bò, thịt tái chín thơm ngon',  img: IMGS.phoBo,     recommended: true },
        { name: 'Phở gà ta',             price: '110.000đ', desc: 'Gà ta thả vườn, nước dùng trong vắt, hành lá thơm mát',         img: IMGS.phoGa },
        { name: 'Phở chiên phồng',       price: '130.000đ', desc: 'Bánh phở chiên giòn phồng, thịt bò xào sốt dầu hào thơm ngon', img: IMGS.phoGaAlt },
        { name: 'Phở / mì xào hải sản', price: '160.000đ', desc: 'Tôm, mực tươi xào cùng bánh phở hoặc mì trứng, rau củ xanh',   img: IMGS.goiCuonAlt },
      ],
    },
    right: {
      type: 'content', category: 'Cơm Rang', subtitle: 'Fried Rice',
      items: [
        { name: 'Cơm rang hải sản', price: '150.000đ', desc: 'Tôm, mực tươi, trứng gà, cơm rang lửa lớn hạt rời thơm ngon',  img: IMGS.comRang,   recommended: true },
        { name: 'Cơm rang tôm dứa', price: '150.000đ', desc: 'Tôm tươi, dứa thơm, ngô ngọt, cơm rang đặc biệt màu vàng ươm', img: IMGS.nomXoaiAlt },
        { name: 'Cơm rang tôm',     price: '130.000đ', desc: 'Tôm tươi to, trứng gà, hành lá xanh, cơm dẻo hạt rời',         img: IMGS.goiCuon },
        { name: 'Cơm rang bò',      price: '120.000đ', desc: 'Thịt bò mềm, ớt chuông, ngô ngọt, thơm mùi tiêu đen',          img: IMGS.boNuong },
      ],
    },
  },

  // ── Spread 3: Món Bò + Món Gà ─────────────────────────────
  {
    left: {
      type: 'content', category: 'Món Bò', subtitle: 'Beef Dishes',
      items: [
        { name: 'Bò xào lúc lắc',         price: '170.000đ', desc: 'Thịt bò thăn mềm xào lúc lắc, ớt chuông, hành tây, khoai tây chiên', img: IMGS.boNuong,   recommended: true },
        { name: 'Bò nướng sốt tiêu xanh', price: '150.000đ', desc: 'Thịt bò nướng than hoa, sốt tiêu xanh Campuchia thơm cay đặc biệt',   img: IMGS.bunChaAlt },
        { name: 'Bò xào nấm tươi',        price: '150.000đ', desc: 'Thịt bò mềm xào cùng nấm hương tươi, hành tây, sốt dầu hào thơm',    img: IMGS.chaCa },
        { name: 'Cà ri bò',               price: '140.000đ', desc: 'Thịt bò hầm mềm sốt cà ri vàng thơm, khoai tây, ăn kèm bánh mì',     img: IMGS.nomXoai },
      ],
    },
    right: {
      type: 'content', category: 'Món Gà', subtitle: 'Chicken Dishes',
      items: [
        { name: 'Gà nướng ống tre',      price: '150.000đ', desc: 'Gà ta nướng trong ống tre, gia vị thấm đều, thịt mềm thơm đặc biệt', img: IMGS.phoGa,   recommended: true },
        { name: 'Gà kho gừng lá chanh', price: '160.000đ', desc: 'Gà ta kho sánh với gừng tươi và lá chanh, đậm đà thơm mát',            img: IMGS.banhXeo },
        { name: 'Gà xào sả ớt',         price: '140.000đ', desc: 'Gà ta xào sả ớt tươi, thơm cay đặc trưng, ăn kèm cơm trắng',          img: IMGS.nemRan },
        { name: 'Cà ri gà',             price: '130.000đ', desc: 'Gà ta hầm sốt cà ri vàng, khoai tây, nước dừa tươi, ăn kèm bánh mì',   img: IMGS.nomXoaiAlt },
      ],
    },
  },

  // ── Spread 4: Hải Sản + Tráng Miệng ──────────────────────
  {
    left: {
      type: 'content', category: 'Hải Sản', subtitle: 'Seafood',
      items: [
        { name: 'Tôm rim nước dừa',  price: '180.000đ', desc: 'Tôm tươi rim cùng nước dừa tươi thơm ngọt, sốt sánh đặc biệt',      img: IMGS.goiCuon,   recommended: true },
        { name: 'Mực rim nước dừa',  price: '180.000đ', desc: 'Mực lá tươi rim nước dừa béo ngậy, hành lá xanh thơm ngon',          img: IMGS.goiCuonAlt },
        { name: 'Tôm xào hạt điều',  price: '180.000đ', desc: 'Tôm tươi xào cùng hạt điều rang bơ, ớt chuông, hành tây giòn thơm', img: IMGS.nomXoai },
        { name: 'Mực xào dứa thơm',  price: '165.000đ', desc: 'Mực lá xào dứa tươi, cà chua bi, hành tây, sốt chua ngọt đặc biệt', img: IMGS.nomXoaiAlt },
      ],
    },
    right: {
      type: 'content', category: 'Tráng Miệng', subtitle: 'Desserts',
      items: [
        { name: 'Sữa chua nếp cẩm',     price: '65.000đ', desc: 'Nếp cẩm đen hầm dẻo ngọt, sữa chua tươi mát, vị ngọt thanh đặc biệt', img: IMGS.phoGa,   recommended: true },
        { name: 'Bánh mousse chanh leo', price: '65.000đ', desc: 'Mousse chanh leo mát lạnh, lớp thạch trong vắt, vị chua ngọt thanh dịu', img: IMGS.banhXeo },
        { name: 'Hoa quả thập cẩm',     price: '65.000đ', desc: 'Trái cây nhiệt đới tươi theo mùa — xoài, dứa, thanh long, dưa hấu',     img: IMGS.nomXoai },
        { name: 'Bánh caramel',         price: '65.000đ', desc: 'Flan trứng sữa mềm mịn, sốt caramel đắng ngọt, trang trí hoa quả',      img: IMGS.bunCha },
      ],
    },
  },

  // ── Spread 5: Đồ Uống + Bìa sau ──────────────────────────
  {
    left: {
      type: 'content', category: 'Đồ Uống', subtitle: 'Beverages',
      items: [
        { name: 'Cà phê trứng',        price: '75.000đ',        desc: 'Robusta đậm đà Hà Nội, lòng đỏ trứng gà đánh bông mịn, sữa đặc', img: IMGS.nemRan,   recommended: true },
        { name: 'Cà phê dừa',          price: '75.000đ',        desc: 'Robusta pha phin, kem dừa tươi đánh bông, đặc sản Hội An',        img: IMGS.nemLuiAlt },
        { name: 'Sinh tố xoài / chuối', price: '75.000đ',       desc: 'Xoài / chuối tươi xay đặc sánh, sữa tươi không đường, đá mát',   img: IMGS.nomXoai },
        { name: 'Bia Huda · Saigon · Tiger', price: '35.000đ – 45.000đ', desc: 'Huda 35K · Saigon Special 40K · Tiger 45K · Rượu vang theo chai', img: IMGS.bunChaAlt },
      ],
    },
    right: { type: 'cover', variant: 'right' },
  },
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
  return page.type === 'cover'
    ? <CoverPage variant={page.variant} mobile={mobile} />
    : <ContentPage page={page} side={side} mobile={mobile} />
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

/* ── Content page ── */
function ContentPage({ page, side, mobile = false }) {
  const imgSize   = mobile ? 76 : 'clamp(60px, 7.5vw, 88px)'
  const pad       = mobile ? '22px' : 'clamp(18px, 3vw, 36px)'
  const itemGap   = mobile ? 14 : 'clamp(10px, 1.6vw, 18px)'
  const catSize   = mobile ? '1.75rem' : 'clamp(1.25rem, 2.8vw, 2rem)'
  const nameSize  = mobile ? '0.92rem' : 'clamp(.78rem, 1.5vw, 1.02rem)'
  const priceSize = mobile ? '0.88rem' : 'clamp(.75rem, 1.4vw, .98rem)'
  const descSize  = mobile ? '11px' : 'clamp(10px, 1.1vw, 13px)'
  const badgeSize = mobile ? 9 : 7

  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative',
      background: 'linear-gradient(160deg, #fdf4e0 0%, #f5e6c4 100%)',
      overflow: 'hidden',
    }}>
      {/* Ruled lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 33px,rgba(155,27,46,.04) 33px,rgba(155,27,46,.04) 34px)',
      }} />
      {/* Spine shadow */}
      {side === 'right'
        ? <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 28, background: 'linear-gradient(to right, rgba(0,0,0,.13), transparent)', pointerEvents: 'none', zIndex: 2 }} />
        : <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 18, background: 'linear-gradient(to left, rgba(0,0,0,.09), transparent)', pointerEvents: 'none', zIndex: 2 }} />
      }

      <div style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', padding: pad }}>
        {/* Category header */}
        <div style={{ marginBottom: mobile ? 16 : 14, paddingBottom: 10, borderBottom: '1px solid rgba(155,27,46,.2)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: catSize, fontWeight: 700, color: '#9b1b2e', lineHeight: 1, marginBottom: 3 }}>
            {page.category}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(28,10,0,.35)' }}>
            {page.subtitle}
          </p>
        </div>

        {/* Dishes */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: itemGap }}>
          {page.items.map((item) => (
            <div key={item.name} style={{ display: 'flex', gap: mobile ? 12 : 'clamp(7px, 1.2vw, 12px)', alignItems: 'flex-start' }}>
              {/* Thumbnail */}
              <div style={{
                width: imgSize, height: imgSize, flexShrink: 0,
                overflow: 'hidden', border: '1px solid rgba(155,27,46,.12)', borderRadius: 2,
              }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6, marginBottom: 2 }}>
                  {/* Name + badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap', minWidth: 0 }}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: nameSize, color: '#1c0a00', lineHeight: 1.3 }}>
                      {item.name}
                    </p>
                    {item.recommended && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center',
                        background: 'rgba(201,164,90,.88)', color: '#3a0a10',
                        fontSize: badgeSize, fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.08em', padding: '1px 5px',
                        borderRadius: 2, textTransform: 'uppercase',
                        fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        ★ Gợi Ý
                      </span>
                    )}
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: priceSize, color: '#9b1b2e', flexShrink: 0 }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: descSize, color: 'rgba(28,10,0,.45)', lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid rgba(155,27,46,.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 9, color: 'rgba(28,10,0,.2)', fontStyle: 'italic' }}>{RESTAURANT.name}</span>
          <span style={{ color: 'rgba(155,27,46,.22)', fontSize: 10, letterSpacing: 4 }}>✦✦✦</span>
        </div>
      </div>
    </div>
  )
}
