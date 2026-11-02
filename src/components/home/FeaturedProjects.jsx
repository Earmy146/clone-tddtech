import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <div className="section-featuredprojects">
      <section
        id="du-an-noi-bat"
        aria-label="Dự án tiêu biểu qua nhiều ngành"
        data-immersive=""
        className="measure-height relative bg-[#eef2f6] dark:bg-[#05080f]"
        style={{ height: "calc(5442px + 100svh)" }}
      >
        <div
          className="sticky top-0 h-[100svh] select-none overflow-hidden outline-none"
          tabIndex="0"
          role="region"
          aria-roledescription="carousel"
          aria-label="Cuộn, kéo hoặc dùng phím mũi tên để xem dự án. Enter để mở dự án đang ở giữa."
          style={{ touchAction: "pan-y", cursor: "grab" }}
        >
          <canvas
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            data-engine="three.js r160"
            width="1720"
            height="1000"
          ></canvas>
          <div
            className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
            aria-hidden="true"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 transition-[opacity,transform] duration-300 ease-out scale-50 opacity-0">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-center text-[13px] font-bold leading-tight text-white shadow-[0_18px_50px_-12px_rgba(0,161,207,0.75)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right mb-0.5 h-5 w-5"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                Xem dự án
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-4 pb-5 pt-24 text-slate-950 dark:text-white sm:px-8 md:pb-8 md:pt-28 lg:px-12"
            style={{ opacity: "1" }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                  03 / Dự án công khai
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                  Dự án tiêu biểu qua nhiều ngành
                </h2>
              </div>
              <a
                href="/du-an"
                className="pointer-events-auto inline-flex items-center gap-2 self-start rounded-full border border-slate-950/15 bg-white/60 px-4 py-2 text-sm font-bold backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/[0.05]"
              >
                Xem tất cả 40 dự án{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-4 w-4"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
            <div className="md:pr-20">
              <div className="flex items-end justify-between gap-6">
                <div className="grid min-w-0 flex-1">
                  <div aria-hidden="true" className="invisible col-start-1 row-start-1">
                    <p className="truncate text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-white/50 sm:text-sm">
                      X
                      <span className="block truncate font-mono normal-case tracking-normal sm:inline">
                        x
                      </span>
                    </p>
                    <p className="mt-2 truncate pb-[0.14em] pt-[0.2em] font-black leading-[0.95] tracking-[-0.045em] [margin-bottom:-0.14em] [margin-top:calc(0.5rem-0.2em)] text-[length:min(2.25rem,calc((100vw_-_2rem)/(var(--n,12)*0.57)))] sm:text-6xl lg:text-8xl">
                      X
                    </p>
                  </div>
                  <div className="col-start-1 row-start-1 min-w-0">
                    <div style={{ opacity: "1", transform: "none" }}>
                      <p className="truncate text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-white/50 sm:text-sm">
                        Website đại lý xe máy điện{" "}
                        <span className="mx-1.5 hidden opacity-40 sm:inline">/</span>{" "}
                        <span className="block truncate font-mono normal-case tracking-normal sm:inline">
                          xemaydienvinfast.vn
                        </span>
                      </p>
                      <h3
                        className="mt-2 truncate pb-[0.14em] pt-[0.2em] font-black leading-[0.95] tracking-[-0.045em] [margin-bottom:-0.14em] [margin-top:calc(0.5rem-0.2em)] text-[length:min(2.25rem,calc((100vw_-_2rem)/(var(--n,12)*0.57)))] sm:text-6xl lg:text-8xl"
                        style={{ "--n": "16" }}
                      >
                        VinFast Huy Hiệu
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="hidden flex-none items-end gap-5 md:flex">
                  <button
                    type="button"
                    aria-label="Tắt âm thanh"
                    title="Tắt âm thanh"
                    className="pointer-events-auto mb-1 flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/15 bg-white/60 text-slate-800 backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-volume2 h-4 w-4"
                    >
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                      <path d="M16 9a5 5 0 0 1 0 6" />
                      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                    </svg>
                  </button>
                  <p className="font-mono text-sm tabular-nums text-slate-500 dark:text-white/50">
                    <span className="text-3xl font-bold text-slate-950 dark:text-white">01</span> /
                    15
                  </p>
                  <button
                    type="button"
                    className="pointer-events-auto inline-flex h-14 items-center gap-2 rounded-full bg-primary px-6 font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                  >
                    Xem dự án{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right h-5 w-5"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-white/50 md:hidden">
                  01 / 15
                </span>
                <button
                  type="button"
                  aria-label="Tắt âm thanh"
                  className="pointer-events-auto flex h-8 w-8 flex-none items-center justify-center rounded-full border border-slate-950/15 text-slate-700 dark:border-white/15 dark:text-white/80 md:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-volume2 h-3.5 w-3.5"
                  >
                    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                    <path d="M16 9a5 5 0 0 1 0 6" />
                    <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                  </svg>
                </button>
                <div className="relative h-px flex-1 bg-slate-950/15 dark:bg-white/15">
                  <div
                    className="absolute inset-y-0 left-0 -top-px h-[3px] bg-primary"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <p className="text-xs font-medium text-slate-500 transition-opacity duration-500 dark:text-white/50 sm:text-sm opacity-100">
                  <span className="hidden md:inline">Cuộn hoặc kéo để xem · Bấm để mở</span>
                  <span className="md:hidden">Vuốt để xem · Chạm để mở</span>
                </p>
              </div>
            </div>
          </div>
          <div
            data-page-loading=""
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#eef2f6] px-6 text-center text-slate-950 dark:bg-[#05080f] dark:text-white"
            role="status"
            aria-live="polite"
          >
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary sm:text-sm">
              Đang mở bộ sưu tập dự án
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
              <div className="relative aspect-[16/10] w-24 overflow-hidden rounded-[8px] bg-slate-300/50 dark:bg-white/[0.06] sm:w-28 lg:w-32">
                <span
                  className="work-loader-shimmer absolute inset-0"
                  style={{ animationDelay: "0ms" }}
                ></span>
              </div>
              <div className="relative aspect-[16/10] w-24 overflow-hidden rounded-[8px] bg-slate-300/50 dark:bg-white/[0.06] sm:w-28 lg:w-32">
                <span
                  className="work-loader-shimmer absolute inset-0"
                  style={{ animationDelay: "120ms" }}
                ></span>
              </div>
              <div className="relative aspect-[16/10] w-24 overflow-hidden rounded-[8px] bg-slate-300/50 dark:bg-white/[0.06] sm:w-28 lg:w-32">
                <span
                  className="work-loader-shimmer absolute inset-0"
                  style={{ animationDelay: "240ms" }}
                ></span>
              </div>
            </div>
            <p className="mt-8 font-mono text-6xl font-bold tabular-nums tracking-tight sm:text-7xl">
              12%
            </p>
            <div className="mt-4 h-1 w-64 overflow-hidden rounded-full bg-slate-300/60 dark:bg-white/10 sm:w-80">
              <div className="h-full rounded-full bg-primary" style={{ width: "12%" }}></div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500 dark:text-white/55">
              Đang tải ảnh giao diện thật của 15 website (0/3). Chỉ mất vài giây.
            </p>
          </div>
        </div>
        <nav className="sr-only" aria-label="Danh sách: Dự án tiêu biểu qua nhiều ngành">
          <a href="/du-an/vinfast-huy-hieu">
            VinFast Huy Hiệu — Website bán hàng của đại lý xe máy điện VinFast Huy Hiệu tại Hà Nội:
            33 mẫu xe kèm thông số và giá, xem xe 360°, đặt lịch lái thử, giỏ hàng và hệ thống cửa
            hàng, xưởng dịch vụ.
          </a>
          <a href="/du-an/aplus-billiards">
            Aplus Billiards — Website dành cho mô hình kinh doanh bida, hỗ trợ giới thiệu thương
            hiệu, dịch vụ, không gian và tiếp cận khách hàng trực tuyến.
          </a>
          <a href="/du-an/miea-noi-that">
            MIEA Nội thất — Website thương hiệu nội thất MIEA tại TP.HCM: bàn mặt đá tự nhiên chân
            inox mạ titan, ghế văn phòng, ghế ăn, két sắt nhập khẩu và cửa — bán giá tận xưởng cho
            gia đình, kiến trúc sư và đại lý.
          </a>
          <a href="/du-an/dastin-hullor">
            Dastin Hullor — Website thương mại thời trang nam tối giản, tập trung vào hình ảnh bộ
            sưu tập, trải nghiệm khám phá sản phẩm và mua hàng trên mobile.
          </a>
          <a href="/du-an/asteraceae">
            Asteraceae Studio — Website thương hiệu thời trang nữ Việt Nam theo phong cách Y2K, tập
            trung vào bộ sưu tập chân váy và các nhóm sản phẩm đi kèm, có bán hàng trong nước và
            quốc tế.
          </a>
          <a href="/du-an/hqn-group">
            HQN Group — Website doanh nghiệp ngành xây dựng, giới thiệu hệ sinh thái công ty, lĩnh
            vực hoạt động và năng lực thi công theo phong cách hiện đại.
          </a>
          <a href="/du-an/ppf-dong-nai">
            PPF Đồng Nai — Website trung tâm dán phim bảo vệ sơn, phim cách nhiệt và độ xe, có thư
            viện dự án phân loại theo thương hiệu phim và luồng đặt lịch kiểm tra xe.
          </a>
          <a href="/du-an/farmstay-viet-nam">
            Farmstay Việt Nam — Website chính thức tại Việt Nam của thương hiệu mỹ phẩm Hàn Quốc
            Farmstay — "Smart Naturalism": catalogue các dòng Tea Tree Biome, Collagen, Hyaluronic
            Acid, Retinol, Black Snail & Peptide9, nối thẳng tới gian hàng trên sàn.
          </a>
          <a href="/du-an/lumine-cloud">
            LumineCloud — Website dịch vụ thuê server Minecraft đặt tại Việt Nam, gồm bảng cấu hình
            phần cứng, bảng giá theo gói, panel quản trị, kiểm tra tương thích phiên bản và khởi tạo
            server trong 60 giây.
          </a>
          <a href="/du-an/engmind-study">
            EngMind Study — Nền tảng luyện thi tiếng Anh THPTQG, TOEIC, ĐGNL, HSA và V-SAT, gồm lớp
            học trực tuyến, đề thi thử, khu vực xem lại lỗi sai, thư viện e-book và bộ công cụ tập
            trung học.
          </a>
          <a href="/du-an/court-vision">
            Court Vision — Website thương hiệu vợt pickleball cao cấp, bán trực tiếp tới người dùng,
            có hệ thống xác thực hàng chính hãng bằng chip NFC gắn trong cán vợt.
          </a>
          <a href="/du-an/tcs-global">
            TCS Global — Website dịch vụ vận chuyển hàng hóa và mua hộ tuyến Mỹ - Việt Nam, có công
            cụ tính cước theo trọng lượng, tra cứu đơn hàng và khu vực quản lý vận đơn.
          </a>
          <a href="/du-an/hoc-nghe-truc-tuyen">
            Trường Dạy Nghề Bách Khoa — Nền tảng dạy nghề kỹ thuật trực tuyến gồm điện lạnh, điện tử
            ô tô, sửa tivi và phần cứng máy tính, phân theo bốn cấp độ từ cơ bản đến chuyên sâu.
          </a>
          <a href="/du-an/md-decor-pro">
            MD Decor Pro — Website song ngữ Việt – Anh của MD Decor Pro tại Đà Nẵng — "The art of
            finishing": sơn hiệu ứng đá travertine, marble, bê tông, kim loại, venetian và bề mặt
            theo yêu cầu cho nhà ở, cửa hàng, văn phòng, nhà hàng.
          </a>
          <a href="/du-an/do-hai-vuong-nam">
            Đỗ Hải Vương Nam — Website profile và thương hiệu cá nhân, kết hợp hồ sơ chuyên môn, câu
            chuyện, phong thủy ứng dụng và di sản kim hoàn.
          </a>
        </nav>
      </section>
    </div>
  );
}
