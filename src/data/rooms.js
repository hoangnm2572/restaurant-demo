export const ROOMS = [
  {
    id: 'superior',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    priceUSD: 89,
    priceVND: '2.100.000',
    size: 26,
    maxGuests: 2,
    beds: 1,
    en: {
      name:  'Superior Room',
      view:  'City View',
      desc:  'Elegant room with warm wood tones and a private balcony overlooking Hanoi\'s bustling streets.',
      features: ['City view balcony', 'Rain shower', 'King bed', 'Smart TV', 'Minibar', 'Free WiFi'],
    },
    vi: {
      name:  'Phòng Superior',
      view:  'Hướng phố',
      desc:  'Phòng sang trọng với gam gỗ ấm và ban công riêng nhìn ra phố phường Hà Nội sôi động.',
      features: ['Ban công hướng phố', 'Vòi tắm mưa', 'Giường King', 'Smart TV', 'Minibar', 'WiFi miễn phí'],
    },
  },
  {
    id: 'deluxe',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    priceUSD: 139,
    priceVND: '3.300.000',
    size: 36,
    maxGuests: 2,
    beds: 1,
    badge: { en: 'Most Popular', vi: 'Được chọn nhiều nhất' },
    en: {
      name:  'Deluxe Room',
      view:  'Pool View',
      desc:  'Spacious room with a wrap-around view of the rooftop pool and the old quarter\'s skyline.',
      features: ['Pool & city view', 'Soaking tub', 'King bed', '55" Smart TV', 'Nespresso', 'Free WiFi'],
    },
    vi: {
      name:  'Phòng Deluxe',
      view:  'Hướng hồ bơi',
      desc:  'Phòng rộng rãi với tầm nhìn toàn cảnh hồ bơi trên sân thượng và đường chân trời Phố Cổ.',
      features: ['View hồ bơi & phố', 'Bồn tắm ngâm', 'Giường King', 'Smart TV 55"', 'Nespresso', 'WiFi miễn phí'],
    },
  },
  {
    id: 'suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    priceUSD: 249,
    priceVND: '5.900.000',
    size: 72,
    maxGuests: 3,
    beds: 1,
    en: {
      name:  'Executive Suite',
      view:  'Panoramic View',
      desc:  'The pinnacle of luxury — a full floor suite with a private terrace, butler service and panoramic Hanoi views.',
      features: ['Panoramic private terrace', 'Butler service', 'King bed + sofa', 'Jacuzzi', 'Living room', 'Free minibar'],
    },
    vi: {
      name:  'Suite Executive',
      view:  'Toàn cảnh',
      desc:  'Đỉnh cao sang trọng — suite toàn tầng với sân thượng riêng, dịch vụ butler và view Hà Nội toàn cảnh.',
      features: ['Sân thượng riêng toàn cảnh', 'Dịch vụ butler', 'Giường King + sofa', 'Jacuzzi', 'Phòng khách', 'Minibar miễn phí'],
    },
  },
]

export const ROOM_TYPE_OPTIONS = {
  en: [
    { value: '',         label: 'Any Room' },
    { value: 'superior', label: 'Superior Room' },
    { value: 'deluxe',   label: 'Deluxe Room' },
    { value: 'suite',    label: 'Executive Suite' },
  ],
  vi: [
    { value: '',         label: 'Tất cả' },
    { value: 'superior', label: 'Phòng Superior' },
    { value: 'deluxe',   label: 'Phòng Deluxe' },
    { value: 'suite',    label: 'Suite Executive' },
  ],
}
