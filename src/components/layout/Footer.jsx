import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#05080f] text-white">
      {/* Top Gradient Divider Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-10">
          {/* Column 1: Brand Info & Socials */}
          <div data-motion="up" style={{ "--motion-delay": "0ms" }}>
            <Link to="/" className="inline-block">
              <img
                alt="TechRent"
                width="256"
                height="256"
                className="h-16 w-auto md:h-20"
                loading="lazy"
                src="/brand/logo-dark.png"
              />
            </Link>
            <p className="mt-5 max-w-xs text-xl font-bold leading-snug text-white">
              Website là tài sản. TechRent giữ nó sinh lời.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="https://zalo.me/0813044817"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
              >
                <img alt="" className="h-5 w-5 rounded object-cover" src="/zalo-icon.png" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.3C17.4 1.1 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z"></path>
                </svg>
              </a>
              <a
                href="https://zalo.me/0813044817"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="h-5 w-5"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
              <a
                href="https://zalo.me/0813044817"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="h-5 w-5"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
              <a
                href="https://zalo.me/0813044817"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="h-5 w-5"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Dịch vụ Links */}
          <nav data-motion="up" aria-label="Dịch vụ" style={{ "--motion-delay": "80ms" }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Dịch vụ</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/thiet-ke-website"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Thiết kế Website
                </Link>
              </li>
              <li>
                <Link
                  to="/thiet-ke-website-doanh-nghiep"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Website doanh nghiệp
                </Link>
              </li>
              <li>
                <Link
                  to="/thiet-ke-website-ban-hang"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Website bán hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/thiet-ke-landing-page"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Landing Page
                </Link>
              </li>
              <li>
                <Link
                  to="/lap-trinh-web-app"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Web App Custom
                </Link>
              </li>
              <li>
                <Link
                  to="/dich-vu-seo-website"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  SEO Website
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Công ty Links */}
          <nav data-motion="up" aria-label="Công ty" style={{ "--motion-delay": "160ms" }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Công ty</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              <li>
                <Link
                  to="/gioi-thieu"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/ho-so-nang-luc"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Hồ sơ năng lực
                </Link>
              </li>
              <li>
                <Link
                  to="/du-an"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Dự án tiêu biểu
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/bang-gia-thiet-ke-website"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link
                  to="/quy-trinh-thiet-ke-website"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Quy trình
                </Link>
              </li>
              <li>
                <Link
                  to="/bao-hanh-bao-tri-website"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Bảo hành &amp; bàn giao
                </Link>
              </li>
              <li>
                <Link
                  to="/lien-he"
                  className="text-base text-white/70 transition-colors hover:text-white"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: Liên hệ trực tiếp */}
          <div data-motion="up" style={{ "--motion-delay": "240ms" }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Liên hệ</p>
            <ul className="mt-5 space-y-4 text-base">
              <li>
                <a
                  href="https://zalo.me/0813044817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-bold text-white hover:text-primary transition-colors"
                >
                  <img alt="" className="h-5 w-5 rounded" src="/zalo-icon.png" />
                  Zalo 0813044817
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-inherit transition-colors hover:text-primary hover:underline"
                >
                  <svg className="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.3C17.4 1.1 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z"></path>
                  </svg>
                  <span>Zalo · Cấn Anh Quân</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0813044817"
                  className="flex items-center gap-3 text-white/75 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-none"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  0813044817
                </a>
              </li>
              <li>
                <a
                  href="mailto:quanhuongngai14062004@gmail.com"
                  className="flex items-center gap-3 break-all text-white/75 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary flex-none"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  quanhuongngai14062004@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 text-primary flex-none"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Hà Nội · phục vụ toàn quốc
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large Wordmark "TechRent" Effect */}
      <div
        data-motion="wordmark"
        aria-hidden="true"
        className="footer-wordmark relative mt-14 select-none overflow-hidden px-2 md:mt-20"
      >
        <div className="flex justify-center leading-[0.78]">
          {["T", "D", "D", "T", "e", "c", "h"].map((char, index) => (
            <span key={index} className="fw-letter" style={{ "--i": index }}>
              <span className="fw-lift">
                <span className="fw-outline">{char}</span>
                <span className="fw-fill">{char}</span>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 TechRent · Cấn Anh Quân</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
