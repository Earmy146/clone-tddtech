# TechRent Clone — High-Performance React Web Experience

Dự án tái hiện trọn vẹn 100% giao diện, hiệu ứng chuyển động tương tác và đồ họa 3D WebGL của website **[TechRent.vn](https://techrent.click/)** — đơn vị tiên phong về tư vấn, thiết kế website chuẩn tài sản số và hệ thống web doanh nghiệp cao cấp.

Toàn bộ dự án đã được chuyển đổi và tái cấu trúc hoàn toàn sang **React 19 + Vite 8 + React Router 7**, áp dụng mô hình **Component-Driven Architecture** và **Page-Based Routing** sạch sẽ, dễ bảo trì, dễ mở rộng.

---

## 🌟 Điểm nổi bật & Kỹ thuật đỉnh cao

- **3D WebGL Three.js Canvas (r160)**: Hiển thị đồ họa tương tác 3D mượt mà với hiệu năng tối ưu.
- **Lenis Smooth Scroll & Sticky Timeline**: Trải nghiệm cuộn trang cao cấp với hiệu ứng ghim tiến trình (sticky timeline 500svh / 290svh).
- **Zero-FOUC Dark / Light Theme**: Bộ chuyển đổi giao diện sáng/tối đồng bộ `localStorage` (`techrent-ui-theme`) và thuộc tính `dark` không gây nhấp nháy giao diện khi tải trang.
- **Procedural Web Audio API**: Hiệu ứng âm thanh phản hồi tương tác cùng thanh visualizer sóng nhạc Equalizer trên Header.
- **Glassmorphism & Modern Design Tokens**: Hiệu ứng kính mờ (blur backdrop), gradient màu sắc chuyển đổi tinh tế theo chủ đề.
- **100% Responsive**: Tương thích hoàn hảo từ màn hình di động đến màn hình Ultra-wide 4K.
- **Zero Console Errors**: Đã qua kiểm toán tự động bằng Playwright, đạt chuẩn 0 runtime error / 0 console warning trên mọi tuyến trang.

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

### 1. Yêu cầu hệ thống
- **Node.js**: Phiên bản `>= 18.x` hoặc mới hơn.
- **npm** (hoặc `pnpm`, `yarn`).

### 2. Các bước khởi chạy

```bash
# 1. Clone repository về máy
git clone https://github.com/Earmy146/clone-techrent.git

# 2. Di chuyển vào thư mục dự án
cd clone-techrent

# 3. Cài đặt các gói phụ thuộc
npm install

# 4. Khởi động môi trường phát triển (Dev Server)
npm run dev
```

Sau khi chạy lệnh trên, mở trình duyệt và truy cập:
👉 **`http://localhost:3001`** (hoặc cổng hiển thị trên Terminal).

---

## 🛠️ Các lệnh script có sẵn

| Lệnh | Chức năng |
| :--- | :--- |
| `npm run dev` | Khởi động server với đầy đủ hiệu ứng 3D WebGL, video stream và Lenis mượt mà (cổng 3001) |
| `npm start` | Chạy production server |
| `npm run dev:vite` | Khởi chạy Vite dev server thử nghiệm |
| :--- | :--- |
| `npm run dev` | Khởi chạy Vite dev server với tính năng Hot Module Replacement (HMR). |
| `npm run build` | Đóng gói sản phẩm tối ưu hóa cho Production vào thư mục `dist/`. |
| `npm run preview` | Khởi chạy máy chủ nội bộ để xem trước bản build production. |
| `npm run format` | Tự động định dạng toàn bộ mã nguồn theo chuẩn Prettier. |

---

## 📁 Cấu trúc thư mục dự án

```text
clone-techrent/
├── public/                 # Tài nguyên tĩnh: video, âm thanh, fonts, ảnh mockup, chunks
│   ├── bg/                 # Background canvas & pattern
│   ├── brand/              # Logo và ấn phẩm nhận diện
│   ├── media/              # Video gốc (brand-film-16x9.mp4) & mockup dự án v2
│   └── _next/              # Chunks WebGL 3D và Smooth Scroll engine
├── src/
│   ├── components/         # Hệ thống React Components
│   │   ├── home/           # 12 Sections độc lập của trang chủ
│   │   │   ├── HeroSection.jsx
│   │   │   ├── VideoShowcase.jsx
│   │   │   ├── AssetPhilosophy.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   ├── TeamAbout.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── TemplateStore.jsx
│   │   │   ├── OperationPlans.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── AIAdvisorSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── layout/         # Header sticky, Footer, Menu modal
│   │   └── interactive/    # Floating widgets (Zalo pulse, Back to top)
│   ├── context/            # React Context (ThemeContext quản lý Dark/Light mode)
│   ├── data/               # Dữ liệu JSON tách bạch (projects, blogs, faqs)
│   ├── pages/              # Trang hoàn chỉnh (Home, Projects, ProjectDetail, Blog,...)
│   ├── styles/             # Tùy biến CSS bổ trợ
│   ├── App.jsx             # Cấu hình Router React Router v7
│   └── main.jsx            # Entry point của React SPA
├── .prettierrc             # Cấu hình chuẩn định dạng mã nguồn Prettier
├── index.html              # HTML template gốc
├── package.json            # Danh sách dependencies và npm scripts
├── SKILLS-SHOWCASE.md      # Tài liệu phân tích chuyên sâu 8 kỹ thuật cao cấp của dự án
└── vite.config.js          # Cấu hình Vite React SPA
```

---

## 💡 Tài liệu kỹ thuật chuyên sâu

Để tìm hiểu chi tiết về cách bóc tách và tích hợp các kỹ thuật cao cấp (Three.js WebGL, Lenis scroll timeline, Audio oscillator, Zero-FOUC theme engine), vui lòng tham khảo file:
👉 **[`SKILLS-SHOWCASE.md`](./SKILLS-SHOWCASE.md)**

---

## 📄 Bản quyền & Tuyên bố từ chối trách nhiệm

Dự án này được thực hiện vì mục đích học tập, nghiên cứu và nâng cao kỹ năng phát triển Frontend / UI-UX Engineering. Mọi nội dung thương hiệu, hình ảnh và video thuộc bản quyền của **TechRent**.
