export const HOTEL = {
  name:     'The Grand Hanoi',
  since:    1996,
  phone:    '+84 24 3825 1996',
  phoneHref:'tel:+842438251996',
  email:    'reservations@thegrandhanoi.com',
  address:  { en: '12 Hàng Bạc Street, Hoàn Kiếm, Hanoi, Vietnam', vi: '12 Hàng Bạc, Hoàn Kiếm, Hà Nội, Việt Nam' },
  mapsHref: 'https://maps.google.com',
  social:   { facebook: '#', instagram: '#', tripadvisor: '#' },

  navLinks: [
    { key: 'rooms',     href: '#rooms' },
    { key: 'amenities', href: '#amenities' },
    { key: 'gallery',   href: '#gallery' },
    { key: 'contact',   href: '#booking' },
  ],

  amenities: [
    {
      id: 'pool',
      icon: '🏊',
      en: { title: 'Infinity Pool',     desc: 'Rooftop pool overlooking the ancient rooftops of the Old Quarter.' },
      vi: { title: 'Hồ Bơi Vô Cực',   desc: 'Hồ bơi trên sân thượng nhìn ra mái ngói Phố Cổ.' },
    },
    {
      id: 'spa',
      icon: '💆',
      en: { title: 'Spa & Wellness',    desc: 'Traditional Vietnamese therapies and modern treatments.' },
      vi: { title: 'Spa & Sức Khỏe',   desc: 'Liệu pháp Việt truyền thống và phương pháp hiện đại.' },
    },
    {
      id: 'restaurant',
      icon: '🍽️',
      en: { title: 'Fine Dining',       desc: 'Contemporary Vietnamese cuisine with a panoramic view.' },
      vi: { title: 'Nhà Hàng Fine Dining', desc: 'Ẩm thực Việt đương đại với tầm nhìn toàn cảnh.' },
    },
    {
      id: 'concierge',
      icon: '🎩',
      en: { title: '24/7 Concierge',   desc: 'Dedicated service to curate your perfect Hanoi experience.' },
      vi: { title: 'Concierge 24/7',   desc: 'Dịch vụ tận tâm sắp xếp trải nghiệm Hà Nội hoàn hảo.' },
    },
    {
      id: 'wifi',
      icon: '📶',
      en: { title: 'High-Speed WiFi',  desc: 'Complimentary ultra-fast internet throughout the hotel.' },
      vi: { title: 'WiFi Tốc Độ Cao', desc: 'Internet tốc độ cao miễn phí toàn khách sạn.' },
    },
    {
      id: 'transfer',
      icon: '🚗',
      en: { title: 'Airport Transfer', desc: 'Seamless private car transfers from Noi Bai Airport.' },
      vi: { title: 'Đưa Đón Sân Bay', desc: 'Xe riêng đưa đón từ Sân bay Nội Bài.' },
    },
    {
      id: 'fitness',
      icon: '🏋️',
      en: { title: 'Fitness Centre',   desc: 'State-of-the-art equipment open 24 hours a day.' },
      vi: { title: 'Phòng Tập Gym',   desc: 'Thiết bị hiện đại, mở cửa 24 giờ mỗi ngày.' },
    },
    {
      id: 'breakfast',
      icon: '☕',
      en: { title: 'Gourmet Breakfast',desc: 'Lavish buffet with Vietnamese and international favourites.' },
      vi: { title: 'Bữu Sáng Sang Trọng', desc: 'Buffet phong phú với món Việt và quốc tế.' },
    },
  ],

  reviews: [
    {
      id: 1,
      name: 'Sarah Mitchell',
      country: '🇬🇧 United Kingdom',
      rating: 5,
      en: 'Absolutely breathtaking hotel. The views from the rooftop pool are unlike anything I\'ve seen in Southeast Asia. Staff were incredibly attentive — made our anniversary truly unforgettable.',
      vi: 'Khách sạn tuyệt vời. Tầm nhìn từ hồ bơi trên sân thượng không nơi nào ở Đông Nam Á sánh bằng. Nhân viên nhiệt tình — kỳ nghỉ kỷ niệm của chúng tôi thật không thể quên.',
    },
    {
      id: 2,
      name: 'Nguyễn Minh Tuấn',
      country: '🇻🇳 Việt Nam',
      rating: 5,
      en: 'Best hotel I\'ve stayed at in Hanoi, and I\'ve tried many. The location is perfect — walking distance to Hoan Kiem Lake. The spa treatments are genuinely world-class.',
      vi: 'Khách sạn tốt nhất tôi từng ở tại Hà Nội, và tôi đã thử rất nhiều nơi. Vị trí hoàn hảo — đi bộ đến Hồ Hoàn Kiếm. Dịch vụ spa đẳng cấp thế giới thực sự.',
    },
    {
      id: 3,
      name: 'Thomas Müller',
      country: '🇩🇪 Germany',
      rating: 5,
      en: 'The perfect blend of traditional Vietnamese architecture and modern luxury. Our suite had the most comfortable bed I\'ve ever slept in. Will absolutely return.',
      vi: 'Sự kết hợp hoàn hảo giữa kiến trúc Việt truyền thống và sang trọng hiện đại. Chiếc giường trong suite của chúng tôi là thoải mái nhất tôi từng ngủ. Chắc chắn sẽ quay lại.',
    },
  ],

  galleryImages: [
    {
      id: 'lobby',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
      en: 'Grand Lobby',   vi: 'Sảnh Chính',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 'pool',
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
      en: 'Rooftop Pool',  vi: 'Hồ Bơi Sân Thượng',
      span: '',
    },
    {
      id: 'room',
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
      en: 'Deluxe Room',   vi: 'Phòng Deluxe',
      span: '',
    },
    {
      id: 'restaurant',
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
      en: 'Fine Dining',   vi: 'Nhà Hàng',
      span: '',
    },
    {
      id: 'spa',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
      en: 'Spa & Wellness', vi: 'Spa & Sức Khỏe',
      span: '',
    },
    {
      id: 'exterior',
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=700&q=80',
      en: 'Hotel Exterior', vi: 'Ngoại Thất',
      span: '',
    },
  ],
}
