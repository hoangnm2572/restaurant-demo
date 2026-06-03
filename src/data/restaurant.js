export const RESTAURANT = {
  name: 'Bếp Hà Thành',
  tagline: 'Ẩm thực thuần Việt',
  since: 1988,
  address: '24 Hàng Bè, Hoàn Kiếm, Hà Nội',
  phone: '024 3926 1988',
  phoneHref: 'tel:02439261988',
  mapsHref: 'https://maps.google.com',

  hours: [
    { day: 'Thứ Hai – Thứ Sáu', time: '07:00 – 22:00' },
    { day: 'Thứ Bảy', time: '06:30 – 22:30' },
    { day: 'Chủ Nhật', time: '06:30 – 23:00' },
  ],

  story: [
    'Bếp Hà Thành tọa lạc giữa lòng 36 phố phường, nơi những mái ngói rêu phong còn lưu giữ linh hồn Hà Nội xưa. Hơn ba thập kỷ, chúng tôi giữ nguyên công thức gia truyền — từ nồi phở hầm 12 tiếng đến mẻ chả giò giòn rụm buổi sáng sớm.',
    'Mỗi món ăn là một câu chuyện, mỗi nguyên liệu được chọn lọc kỹ lưỡng từ chợ Đồng Xuân mỗi buổi sáng. Đây không chỉ là nơi ăn uống — đây là nơi bạn tìm về ký ức.',
  ],

  stats: [
    { value: '35+', label: 'Năm kinh nghiệm' },
    { value: '60+', label: 'Món đặc sản' },
    { value: '200+', label: 'Chỗ ngồi' },
  ],

  social: {
    facebook: '#',
    instagram: '#',
  },

  navLinks: [
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'Đặc sản', href: '#specials' },
    { label: 'Thực đơn', href: '#menu' },
    { label: 'Thư viện', href: '#gallery' },
    { label: 'Đặt bàn', href: '#booking' },
  ],

  bookingTimes: [
    '11:00', '11:30', '12:00', '12:30', '13:00',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
  ],

  bookingGuestOptions: [
    '1 người', '2 người', '3 người', '4 người',
    '5 người', '6 người', '7–10 người', '10+ người',
  ],
}
