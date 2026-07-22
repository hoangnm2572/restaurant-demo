export const RESTAURANT = {
  name: 'Gạo Restaurant',
  tagline: 'Ẩm thực thuần Việt',
  since: 2026,
  address: '59 Hàng Trống, Hoàn Kiếm, Hà Nội',
  phone: '0788 868 8668',
  phoneHref: 'tel:+84788868668',
  email: 'longbui.bui@gmail.com',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=59+H%C3%A0ng+Tr%E1%BB%91ng%2C+Ho%C3%A0n+Ki%E1%BA%BFm%2C+H%C3%A0+N%E1%BB%99i',

  hours: [
    { day: 'Thứ Hai – Thứ Sáu', time: '07:00 – 22:00' },
    { day: 'Thứ Bảy', time: '06:30 – 22:30' },
    { day: 'Chủ Nhật', time: '06:30 – 23:00' },
  ],

  story: [
    'Gạo Restaurant tọa lạc tại 59 Hàng Trống, Hoàn Kiếm — ngay giữa lòng phố cổ Hà Nội. Chúng tôi mang đến không gian ẩm thực thuần Việt đẳng cấp, nơi hương vị truyền thống được tôn vinh trong nội thất Đông Dương tinh tế.',
    'Mỗi món ăn là một câu chuyện về ẩm thực Hà Nội, mỗi nguyên liệu được chọn lọc kỹ lưỡng từ những nguồn chuẩn nhất. Hãy đặt bàn để trở thành những vị khách đầu tiên của chúng tôi.',
  ],

  stats: [
    { value: '60+', label: 'Món ẩm thực' },
    { value: '200+', label: 'Chỗ ngồi' },
    { value: '5★', label: 'Tiêu chuẩn' },
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

  bookingTimes: (() => {
    const times = [];
    for (let h = 10; h <= 23; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 23 && m > 0) break;
        times.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
      }
    }
    return times;
  })(),
}
