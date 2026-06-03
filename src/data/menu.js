export const MENU_PAGES = [
  {
    id: 'cover',
    type: 'cover',
  },
  {
    id: 'khai-vi',
    type: 'page',
    category: 'Khai Vị',
    subtitle: 'Appetizers',
    emoji: '🥢',
    items: [
      { name: 'Nem cuốn tươi',      price: '45.000đ', desc: 'Tôm tươi, thịt luộc, bún, rau sống, bánh tráng' },
      { name: 'Chả giò chiên vàng', price: '55.000đ', desc: 'Nhân thịt heo, mộc nhĩ, miến, chiên giòn' },
      { name: 'Bánh cuốn Hà Nội',   price: '65.000đ', desc: 'Nhân thịt xay, hành phi thơm, nước chấm' },
      { name: 'Gỏi ngó sen',        price: '60.000đ', desc: 'Tôm thịt, rau thơm, đậu phộng, dấm tỏi' },
    ],
  },
  {
    id: 'mon-chinh',
    type: 'page',
    category: 'Món Chính',
    subtitle: 'Main Course',
    emoji: '🍜',
    items: [
      { name: 'Phở bò truyền thống', price: '85.000đ', desc: 'Nước dùng hầm 12 tiếng, thịt tái chín, quẩy' },
      { name: 'Bún chả Hà Nội',     price: '75.000đ', desc: 'Chả viên, chả miếng, bún tươi, rau sống' },
      { name: 'Bún bò Huế',         price: '80.000đ', desc: 'Giò heo, thịt bò, chả cua, sả tươi, ớt' },
      { name: 'Cơm bình dân',       price: '70.000đ', desc: 'Cơm tẻ thơm, 3 món tùy chọn theo ngày' },
    ],
  },
  {
    id: 'dac-san',
    type: 'page',
    category: 'Đặc Sản',
    subtitle: 'House Specials',
    emoji: '⭐',
    items: [
      { name: 'Chả cá Lã Vọng', price: '145.000đ', desc: 'Cá lăng tươi, nghệ, thì là, mắm tôm Thanh Hóa' },
      { name: 'Bún thang',      price: '95.000đ',  desc: 'Giò lụa, gà ta, trứng tráng, nước dùng trong vắt' },
      { name: 'Xôi xéo',       price: '55.000đ',  desc: 'Nếp cái hoa vàng, đậu xanh, hành phi giòn, mỡ' },
      { name: 'Bánh đúc nóng', price: '50.000đ',  desc: 'Mộc nhĩ, thịt bằm, hành lá, nước mắm tỏi ớt' },
    ],
  },
  {
    id: 'do-uong',
    type: 'page',
    category: 'Đồ Uống',
    subtitle: 'Beverages',
    emoji: '☕',
    items: [
      { name: 'Cà phê trứng',   price: '55.000đ', desc: 'Cà phê Robusta Hà Nội, lòng đỏ trứng gà, sữa đặc' },
      { name: 'Bia hơi Hà Nội', price: '25.000đ', desc: 'Bia tươi chính gốc, lạnh ngon' },
      { name: 'Nước mía tươi',  price: '20.000đ', desc: 'Mía ép nguyên chất, tắc, đá viên' },
      { name: 'Trà sen Tây Hồ', price: '35.000đ', desc: 'Trà ướp hoa sen cổ truyền, thơm nức' },
    ],
  },
]
