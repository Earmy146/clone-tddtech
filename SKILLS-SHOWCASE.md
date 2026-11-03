# TỔNG HỢP CÁC KỸ THUẬT & SKILLS ĐỈNH CAO TRONG CAQTECH

Tài liệu này đúc kết toàn bộ các kỹ thuật chuyên sâu (Skills), kiến trúc và bí quyết công nghệ mà website **TechRent** đã ứng dụng để tạo nên trải nghiệm đồ họa 3D, hiệu ứng chuyển động mượt mà và giao diện hiện đại hàng đầu.

---

## 1. Skill 1: WebGL & Three.js 3D Interactive Canvas
- **Mục đích**: Tạo quả cầu không gian mạng 3D xoay tròn và các mô hình giao diện lơ lửng phát sáng neon.
- **Cách thức hoạt động**:
  - Tích hợp thẻ `<canvas data-engine="three.js r160">` lồng trong một container `sticky top-0 h-[100svh]`.
  - Khởi tạo `PerspectiveCamera`, `Scene`, và `WebGLRenderer` với `alpha: true` (để nền trong suốt hòa quyện vào màu nền trang web).
  - Sử dụng hạt `Points` và `BufferGeometry` để vẽ mạng lưới hạt hình cầu xoay tròn theo vòng lặp `requestAnimationFrame`.
  - Gắn sự kiện `mousemove` và `scroll` để tính toán góc nghiêng 3D của các khối mockup theo độ trễ quán tính (*lerp*).
- **Điểm mấu chốt**: Khi cuộn trang, thay vì re-render DOM nặng nề, chỉ cần cập nhật góc quay `rotation.y += speed` và tọa độ `camera.position.z` của Three.js, giúp hiệu ứng đạt mốc **60–120 FPS** cực kỳ mượt mà.

---

## 2. Skill 2: Inertial Smooth Scrolling với Lenis
- **Mục đích**: Loại bỏ hiện tượng cuộn giật khấc của trình duyệt mặc định, tạo cảm giác lướt êm ái như bơ (tương tự các trang web đoạt giải Awwwards).
- **Cách thức hoạt động**:
  - Gắn class `.lenis` lên thẻ `<html>`.
  - Chặn sự kiện cuộn mặc định và tính toán lại vị trí cuộn dựa trên phương trình làm mượt quán tính:
    $$\text{current} = \text{current} + (\text{target} - \text{current}) \times \text{easing}$$
  - Đồng bộ hóa tiến trình cuộn với vòng lặp vẽ của Three.js và Motion Timeline.
- **Lợi ích**: Khi người dùng dừng lăn chuột, trang không dừng đột ngột mà trôi nhẹ nhàng một đoạn ngắn, tạo cảm giác cao cấp và chuyên nghiệp.

---

## 3. Skill 3: Scroll-Driven Pinned Presentation (Sticky Timeline 500svh)
- **Mục đích**: Tạo màn trình diễn thuyết trình lật slide theo từng nấc lăn chuột mà màn hình vẫn đứng yên.
- **Cách thức hoạt động**:
  - Container cha được đặt chiều cao siêu dài: `height: 500svh` (gấp 5 lần chiều cao màn hình) hoặc `290svh`.
  - Container con bên trong được đặt `position: sticky; top: 0; height: 100svh; overflow: hidden;`.
  - Khi cuộn qua container cha, khung nhìn con sẽ bị ghim cố định (*pin*) tại đỉnh màn hình trong suốt quãng đường 500svh.
  - Tiến trình cuộn từ 0% đến 100% của container được chia thành 4 mốc (0-25%, 25-50%, 50-75%, 75-100%):
    - **Slide 01**: Chi phí (Mockup hóa đơn, trạng thái tốn tiền)
    - **Slide 02**: Bỏ quên (Website bị chậm, rớt khỏi Google)
    - **Slide 03**: Tài sản (Mã nguồn, dữ liệu đứng tên doanh nghiệp)
    - **Slide 04**: Vận hành (Quả cầu 3D phát sáng, các tag "Bảo vệ", "Phát triển", "Đơn hàng mới" bay ra)
  - Mỗi mốc sẽ kích hoạt hiệu ứng `opacity` từ 0 ➔ 1 và `translate3d` tương ứng.

---

## 4. Skill 4: Interactive Custom Neon Cursor & Trailing Pointer
- **Mục đích**: Tạo con trỏ chuột công nghệ với chấm sáng neon phát sáng bay theo vị trí chuột.
- **Cách thức hoạt động**:
  - Ẩn con trỏ chuột mặc định: `* { cursor: none !important; }`.
  - Tạo một phần tử cố định trên cùng:
    `<div class="fixed pointer-events-none z-[99999]" style="width: 10px; height: 10px; border-radius: 50%; background-color: rgb(34, 211, 238); box-shadow: rgba(34, 211, 238, 0.6) 0px 0px 8px;">`
  - Lắng nghe `pointermove` và dùng `requestAnimationFrame` để cập nhật tọa độ trôi theo quán tính (*damping trail*).
  - Khi hover vào các thẻ `<a>`, `<button>` hoặc interactive elements, kích thước chấm tròn nở rộng thành vòng tròn lớn bao bọc phần tử.

---

## 5. Skill 5: Procedural 3D Audio Synthesis (Web Audio API)
- **Mục đích**: Tạo âm thanh tương tác 3D độc đáo mà không cần tải bất kỳ file MP3/WAV tĩnh nào (tiết kiệm băng thông 100%).
- **Cách thức hoạt động**:
  - Sử dụng `AudioContext` có sẵn trong trình duyệt.
  - Khi người dùng bấm bật âm thanh hoặc click vào các menu/nút, tạo một `OscillatorNode` (sóng sin hoặc sóng tam giác tần số 440Hz - 880Hz) kết hợp với `GainNode` để tạo hiệu ứng âm lượng giảm dần mượt mà (*exponential decay*):
    ```javascript
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // Nốt D5
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
    ```
  - Kết hợp với animation Sound Equalizer trên Header tạo cảm giác website đang phát âm thanh không gian sống động.

---

## 6. Skill 6: Kính mờ cao cấp (Frosted Glassmorphism) & Tokens
- **Mục đích**: Tạo chiều sâu không gian đa lớp hiện đại.
- **Cách thức hoạt động**:
  - Sử dụng các lớp phủ `backdrop-blur-xl`, `bg-white/80` (Light) và `bg-[hsl(220_40%_8%_/_0.85)]` (Dark).
  - Đường viền phản quang siêu mảnh: `border border-slate-200/80` hoặc `border border-white/10`.
  - Hiệu ứng đổ bóng nhiều tầng: `shadow-[0_24px_80px_-12px_rgba(15,23,42,0.35)]`.
  - Lưới trang trí nền dạng blueprint:
    `bg-[linear-gradient(to_right,rgba(0,180,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[size:64px_64px]`
  - Footer Wordmark khổng lồ với 2 lớp Outline (`-webkit-text-stroke`) và Fill (`color: #00d4ff`) nâng lên khi hover.

---

## 7. Skill 7: Zero-FOUC Theme Switcher (Sáng / Tối không giật)
- **Mục đích**: Chuyển đổi toàn diện giữa Dark Mode và Light Mode tức thì, không bị nhấp nháy trắng đen khi tải trang.
- **Cách thức hoạt động**:
  - Nhúng script đồng bộ ngay dòng đầu tiên của `<head>` trước khi DOM body bắt đầu parse:
    ```html
    <script>
      (function() {
        try {
          var saved = localStorage.getItem('techrent-ui-theme');
          var dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
          document.documentElement.className = dark ? 'dark' : 'light';
        } catch(e) {}
      })();
    </script>
    ```
  - Quản lý trạng thái qua React Context và áp dụng quy tắc CSS biến màu nền cho cả Three.js canvas, Header, Modal, Footer và hình ảnh logo tương ứng.

---

## 8. Skill 8: Reverse Engineering & Hydration Architecture
- **Mục đích**: Tái lập một dự án Next.js Server Components phức tạp thành ứng dụng chạy độc lập mượt mà trên môi trường Vite/React.
- **Bí quyết thực hiện**:
  - Ánh xạ đường dẫn URL-encoded `%5B%5B...slug%5D%5D` (App Router wildcard slug) sang thư mục file vật lý `[[...slug]]` để triệt tiêu lỗi 404 loading chunk.
  - Sử dụng Middleware thông minh phục vụ SSR Snapshot kết hợp với Client Hydration Runtime, giúp giữ lại 100% hiệu ứng mà tác giả gốc đã dày công xây dựng.

