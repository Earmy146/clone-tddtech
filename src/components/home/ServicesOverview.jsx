import React from "react";
import { Link } from "react-router-dom";

export default function ServicesOverview() {
  return (
    <div className="section-servicesoverview">
      <section id="services" className="relative overflow-hidden py-10 md:py-20 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            src="/bg/office-night.webp"
          />
        </div>
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-black/60 z-10 transition-colors duration-500"></div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 bottom-0 z-10 h-32 w-32"
          style={{
            backgroundColor: "rgb(212, 255, 63)",
            borderTopLeftRadius: "100%",
          }}
        ></span>
        <div className="container mx-auto px-4 relative z-20">
          <div className="mb-7 grid items-end gap-6 md:mb-12 md:grid-cols-12 md:gap-10 lg:mb-16">
            <div
              className=" md:col-span-7 lg:col-span-8"
              data-motion="up"
              style={{ "--motion-delay": "0ms" }}
            >
              <div
                data-motion="up"
                className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs  text-slate-500 dark:text-white/45"
                style={{ "--motion-delay": "0ms" }}
              >
                <span className="text-primary">01</span>
                <span
                  aria-hidden="true"
                  className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                ></span>
                <span className="text-balance">DỊCH VỤ CỦA CHÚNG TÔI</span>
              </div>
              <h2
                data-motion="split"
                className="font-black uppercase leading-[1.18] tracking-[-0.04em] text-slate-900 dark:text-white"
                style={{
                  fontSize: "var(--eh-size, clamp(1.65rem, 5.6vw, 4.4rem))",
                  overflowWrap: "break-word",
                  "--motion-delay": "80ms",
                }}
              >
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span className="split-word " style={{ "--i": "0" }}>
                    Xây<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "1" }}>
                    đúng,
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "3" }}
                  >
                    vận<span className="sr-only"> </span>
                  </span>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "4" }}
                  >
                    hành
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span className="split-word " style={{ "--i": "6" }}>
                    mỗi<span className="sr-only"> </span>
                  </span>
                  <span className="split-word relative inline-block" style={{ "--i": "7" }}>
                    <span
                      aria-hidden="true"
                      className="absolute rounded-sm"
                      style={{
                        inset: "0.06em -0.16em -0.04em",
                        rotate: "-2deg",
                        backgroundColor: "rgb(212, 255, 63)",
                      }}
                    ></span>
                    <span
                      className="relative z-10 "
                      style={{
                        color: "rgb(15, 23, 42)",
                        paintOrder: "stroke",
                        WebkittextStroke: "0.055em rgb(212, 255, 63)",
                      }}
                    >
                      tháng
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div
              className="md:col-span-5 lg:col-span-4 md:border-l md:border-slate-300 md:pl-6 md:dark:border-white/15"
              data-motion="up"
              style={{ "--motion-delay": "80ms" }}
            >
              <div
                className="text-base md:text-[0.95rem] lg:text-base text-slate-600 dark:text-white/70"
                style={{ opacity: "1", transform: "none" }}
              >
                Một website chỉ là tài sản khi nó được giữ gìn và tạo ra giá trị. TechRent xây nền
                móng, rồi đồng hành vận hành để website mang về traffic, khách hàng và đơn hàng.
              </div>
              <svg
                viewBox="0 0 200 200"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="block overflow-visible mt-5 h-28 w-28 text-slate-500 dark:text-white/40 md:mt-6 md:h-36 md:w-36"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="26"
                  y="40"
                  width="148"
                  height="120"
                  rx="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M 26 60 H 174" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="38" cy="50" r="2.5" fill="currentColor" stroke="none" />
                <circle cx="47" cy="50" r="2.5" fill="currentColor" stroke="none" />
                <circle cx="56" cy="50" r="2.5" fill="currentColor" stroke="none" />
                <g
                  style={{
                    transform: "none",
                    opacity: "1",
                  }}
                >
                  <rect
                    x="38"
                    y="72"
                    width="72"
                    height="38"
                    rx="5"
                    fill="hsl(var(--primary) / 0.28)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                </g>
                <g
                  style={{
                    transform: "none",
                    opacity: "1",
                  }}
                >
                  <rect
                    x="120"
                    y="72"
                    width="42"
                    height="38"
                    rx="5"
                    stroke="hsl(var(--primary) / 0.45)"
                    strokeWidth="1.5"
                    fill="hsl(var(--primary) / 0.12)"
                  />
                </g>
                <g
                  style={{
                    transform: "none",
                    opacity: "1",
                  }}
                >
                  <path d="M 38 124 H 110" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <path
                    d="M 38 136 H 162"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M 38 148 H 134"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.35"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <a
              href="/thiet-ke-website-doanh-nghiep"
              data-motion="card"
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-34px_rgba(0,161,207,0.55)] dark:border-white/10 dark:bg-white/[0.04]"
              style={{ "--motion-delay": "0ms" }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-white/[0.03]">
                <div
                  role="img"
                  aria-label="Minh hoạ: khách tìm 'thiết kế website doanh nghiệp' trên Google, vào TechRent, bấm Nhận tư vấn và để lại số điện thoại — yêu cầu chuyển thẳng vào Zalo TechRent."
                  data-live="0"
                  className="x-scene aspect-[16/11] bg-gradient-to-br from-sky-50 to-slate-100 dark:from-[#0b1424] dark:to-[#071019]"
                  data-stage="start"
                >
                  <div className="x-stage" aria-hidden="true">
                    <div className="absolute inset-[5%] overflow-hidden rounded-[2cqw] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0f1a2b]">
                      <div
                        data-cue-out="site"
                        className="absolute inset-0 bg-white dark:bg-[#0f1a2b]"
                      >
                        <p className="absolute left-[6%] top-[5%] text-[3.4cqw] font-bold tracking-tight">
                          <span className="text-[#4285f4]">G</span>
                          <span className="text-[#ea4335]">o</span>
                          <span className="text-[#fbbc05]">o</span>
                          <span className="text-[#4285f4]">g</span>
                          <span className="text-[#34a853]">l</span>
                          <span className="text-[#ea4335]">e</span>
                        </p>
                        <div className="absolute left-[6%] right-[6%] top-[17%] flex h-[11%] items-center gap-[1.5cqw] rounded-full border border-slate-200 px-[2.5cqw] shadow-sm dark:border-white/15">
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
                            className="lucide lucide-search h-[2.6cqw] w-[2.6cqw] flex-none text-slate-400"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                          <span
                            data-cue="type"
                            data-type="thiết kế website doanh nghiệp"
                            className="x-stay x-caret text-[2.7cqw] text-slate-800 dark:text-white/90"
                          ></span>
                        </div>
                        <div
                          data-cue="results"
                          className="x-fade absolute left-[6%] right-[6%] top-[33%] space-y-[2.2cqw]"
                        >
                          <div
                            data-cue="picked"
                            className="x-stay -mx-[1.5cqw] rounded-[1.2cqw] px-[1.5cqw] py-[1cqw] [&.on]:bg-sky-500/15"
                          >
                            <p className="text-[2cqw] text-emerald-700 dark:text-emerald-400">
                              TechRent › thiet-ke-website
                            </p>
                            <p className="text-[2.9cqw] font-semibold leading-tight text-[#1a0dab] dark:text-sky-400">
                              TechRent — Website là tài sản của doanh nghiệp
                            </p>
                            <p className="text-[2cqw] text-slate-500 dark:text-white/50">
                              Xây đúng nền móng, anh chị sở hữu 100%, vận hành mỗi tháng.
                            </p>
                          </div>
                          <div className="space-y-[1cqw] opacity-60">
                            <span className="block h-[1.3cqw] w-[28%] rounded bg-slate-200 dark:bg-white/10"></span>
                            <span className="block h-[2cqw] w-[68%] rounded bg-slate-200 dark:bg-white/10"></span>
                            <span className="block h-[1.3cqw] w-[86%] rounded bg-slate-100 dark:bg-white/5"></span>
                          </div>
                          <div className="space-y-[1cqw] opacity-60">
                            <span className="block h-[1.3cqw] w-[28%] rounded bg-slate-200 dark:bg-white/10"></span>
                            <span className="block h-[2cqw] w-[68%] rounded bg-slate-200 dark:bg-white/10"></span>
                            <span className="block h-[1.3cqw] w-[86%] rounded bg-slate-100 dark:bg-white/5"></span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-cue="site"
                        className="x-zoom absolute inset-0 bg-white dark:bg-[#0f1a2b]"
                      >
                        <div className="flex h-[9%] items-center gap-[1.5cqw] border-b border-slate-100 px-[2cqw] dark:border-white/5">
                          <span className="flex gap-[0.7cqw]">
                            <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-slate-300 dark:bg-white/20"></span>
                            <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-slate-300 dark:bg-white/20"></span>
                            <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-slate-300 dark:bg-white/20"></span>
                          </span>
                          <span className="rounded-full bg-slate-100 px-[2cqw] py-[0.3cqw] text-[1.8cqw] text-slate-500 dark:bg-white/5 dark:text-white/50">
                            TechRent
                          </span>
                        </div>
                        <div className="absolute left-[5%] right-[5%] top-[12%] flex items-center justify-between">
                          <span className="flex items-center gap-[0.8cqw] text-[2.6cqw] font-black text-slate-900 dark:text-white">
                            <img
                              alt=""
                              className="h-[3.6cqw] w-[3.6cqw] dark:hidden"
                              src="/brand/logo-light.png"
                            />
                            <img
                              alt=""
                              className="hidden h-[3.6cqw] w-[3.6cqw] dark:block"
                              src="/brand/logo-dark.png"
                            />
                            TechRent
                          </span>
                          <span className="flex gap-[2.5cqw] text-[1.9cqw] text-slate-500 dark:text-white/50">
                            <span>Dịch vụ</span>
                            <span>Dự án</span>
                            <span>Liên hệ</span>
                          </span>
                        </div>
                        <div className="absolute left-[5%] top-[23%] w-[52%]">
                          <p
                            data-cue="h1"
                            className="text-[4.4cqw] font-black leading-[1.1] text-slate-900 dark:text-white"
                          >
                            Website là tài sản của doanh nghiệp
                          </p>
                          <p
                            data-cue="sub"
                            className="mt-[1.2cqw] text-[2cqw] leading-snug text-slate-500 dark:text-white/55"
                          >
                            Xây đúng · anh chị sở hữu 100% · vận hành mỗi tháng
                          </p>
                        </div>
                        <span
                          data-cue="sub"
                          data-press="cta"
                          className="absolute left-[5%] top-[49%] flex h-[8%] w-[25%] items-center justify-center rounded-full bg-primary text-[2.1cqw] font-bold text-white shadow-lg shadow-primary/30"
                        >
                          Nhận tư vấn
                        </span>
                        <div
                          data-cue="h1"
                          className="x-zoom absolute left-[60%] top-[22%] h-[34%] w-[35%] overflow-hidden rounded-[1.4cqw] border border-slate-200 shadow-lg dark:border-white/10"
                        >
                          <img
                            alt=""
                            className="h-full w-full object-cover object-top"
                            src="/media/techrent/projects/v2/vinfast-huy-hieu-640.webp"
                          />
                          <span className="absolute bottom-[6%] left-[6%] rounded-full bg-slate-950/75 px-[1.2cqw] py-[0.3cqw] text-[1.5cqw] font-bold text-white">
                            Dự án: VinFast Huy Hiệu
                          </span>
                        </div>
                        <div className="absolute left-[5%] right-[5%] top-[62%] flex gap-[6cqw]">
                          <div data-cue="stats">
                            <p
                              data-cue="stats"
                              data-count="0:150"
                              data-suffix="+"
                              className="x-stay text-[3.4cqw] font-black leading-none text-slate-900 dark:text-white"
                            >
                              0+
                            </p>
                            <p className="mt-[0.5cqw] text-[1.7cqw] text-slate-500 dark:text-white/50">
                              dự án đã làm*
                            </p>
                          </div>
                          <div data-cue="stats">
                            <p
                              data-cue="stats"
                              data-count="0:40"
                              data-suffix=""
                              className="x-stay text-[3.4cqw] font-black leading-none text-slate-900 dark:text-white"
                            >
                              0
                            </p>
                            <p className="mt-[0.5cqw] text-[1.7cqw] text-slate-500 dark:text-white/50">
                              dự án công khai
                            </p>
                          </div>
                          <div data-cue="stats">
                            <p
                              data-cue="stats"
                              data-count="0:5"
                              data-suffix=" năm"
                              className="x-stay text-[3.4cqw] font-black leading-none text-slate-900 dark:text-white"
                            >
                              0 năm
                            </p>
                            <p className="mt-[0.5cqw] text-[1.7cqw] text-slate-500 dark:text-white/50">
                              chỉnh sửa miễn phí
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-[5%] right-[5%] top-[77%] grid h-[16%] grid-cols-3 gap-[2cqw]">
                          <span
                            data-cue="c1"
                            className="flex items-center justify-center gap-[1cqw] rounded-[1cqw] border border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/5"
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
                              className="lucide lucide-building2 h-[2.6cqw] w-[2.6cqw] text-primary"
                            >
                              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                              <path d="M10 6h4" />
                              <path d="M10 10h4" />
                              <path d="M10 14h4" />
                              <path d="M10 18h4" />
                            </svg>
                            <span className="text-[2cqw] font-semibold text-slate-700 dark:text-white/75">
                              Doanh nghiệp
                            </span>
                          </span>
                          <span
                            data-cue="c2"
                            className="flex items-center justify-center gap-[1cqw] rounded-[1cqw] border border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/5"
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
                              className="lucide lucide-shopping-bag h-[2.6cqw] w-[2.6cqw] text-primary"
                            >
                              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                              <path d="M3 6h18" />
                              <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            <span className="text-[2cqw] font-semibold text-slate-700 dark:text-white/75">
                              Bán hàng
                            </span>
                          </span>
                          <span
                            data-cue="c3"
                            className="flex items-center justify-center gap-[1cqw] rounded-[1cqw] border border-slate-100 bg-slate-50 dark:border-white/10 dark:bg-white/5"
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
                              className="lucide lucide-wrench h-[2.6cqw] w-[2.6cqw] text-primary"
                            >
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                            <span className="text-[2cqw] font-semibold text-slate-700 dark:text-white/75">
                              Vận hành
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        data-cue="form"
                        data-cue-out="sent"
                        className="x-fade absolute inset-0 z-10 bg-slate-950/35"
                      ></div>
                      <div
                        data-cue="form"
                        data-cue-out="sent"
                        className="x-pop absolute left-[24%] top-[13%] z-20 h-[74%] w-[52%] rounded-[1.6cqw] bg-white p-[2.4cqw] shadow-2xl dark:bg-[#16233a]"
                      >
                        <p className="text-[2.7cqw] font-black text-slate-900 dark:text-white">
                          Nhận tư vấn miễn phí
                        </p>
                        <p className="text-[1.7cqw] text-slate-500 dark:text-white/50">
                          TechRent gọi lại qua Zalo
                        </p>
                        <div className="mt-[2cqw]">
                          <p className="text-[1.7cqw] font-semibold text-slate-600 dark:text-white/60">
                            Họ tên
                          </p>
                          <div className="mt-[0.6cqw] flex h-[5.4cqw] items-center rounded-[1cqw] border border-slate-200 px-[1.5cqw] dark:border-white/15">
                            <span
                              data-cue="fname"
                              data-type="Anh Minh"
                              className="x-stay x-caret text-[2.2cqw] text-slate-900 dark:text-white"
                            ></span>
                          </div>
                        </div>
                        <div className="mt-[2cqw]">
                          <p className="text-[1.7cqw] font-semibold text-slate-600 dark:text-white/60">
                            Số điện thoại
                          </p>
                          <div className="mt-[0.6cqw] flex h-[5.4cqw] items-center rounded-[1cqw] border border-slate-200 px-[1.5cqw] dark:border-white/15">
                            <span
                              data-cue="fphone"
                              data-type="0901 234 567"
                              className="x-stay x-caret text-[2.2cqw] text-slate-900 dark:text-white"
                            ></span>
                          </div>
                        </div>
                        <span
                          data-press="send"
                          className="absolute bottom-[8%] left-[6%] right-[6%] flex h-[14%] items-center justify-center rounded-full bg-primary text-[2.2cqw] font-bold text-white"
                        >
                          Gửi yêu cầu
                        </span>
                      </div>
                      <div
                        data-cue="toast"
                        data-sfx="ping"
                        className="x-right absolute bottom-[4%] right-[3%] z-20 flex items-center gap-[1.4cqw] rounded-[1.4cqw] bg-slate-900 px-[2cqw] py-[1.3cqw] text-white shadow-2xl dark:bg-white dark:text-slate-900"
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
                          className="lucide lucide-circle-check h-[3.4cqw] w-[3.4cqw] flex-none text-emerald-400 dark:text-emerald-500"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span className="text-[1.8cqw] leading-tight">
                          <b className="block text-[2.1cqw]">Yêu cầu tư vấn mới · Anh Minh</b>
                          Đã chuyển vào Zalo TechRent · vừa xong
                        </span>
                      </div>
                      <span
                        data-move="start:88,92 pick:30,44,c mcta:17.5,53,c msend:50,76,c toast:hide"
                        className="x-mover x-cursor"
                        style={{ left: "88%", top: "92%" }}
                      >
                        <svg viewBox="0 0 24 24" className="h-full w-full drop-shadow-md">
                          <path
                            d="M4 2.5 19.5 13l-7 1.4-3.6 6.6z"
                            fill="#0f172a"
                            stroke="#fff"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="font-mono text-xs font-bold text-primary">01</p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white md:text-2xl">
                    Website doanh nghiệp
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-white/60 md:text-base">
                    Bộ mặt chính thức trên Google — khách tìm hiểu rồi quyết định.
                  </p>
                </div>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-white/15 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="h-4 w-4"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="/thiet-ke-website-ban-hang"
              data-motion="card"
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-34px_rgba(0,161,207,0.55)] dark:border-white/10 dark:bg-white/[0.04]"
              style={{ "--motion-delay": "80ms" }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-white/[0.03]">
                <div
                  role="img"
                  aria-label="Minh hoạ: khách thêm 3 sản phẩm vào giỏ, đặt hàng 1.050.000đ — đơn được xác nhận và chủ shop nhận thông báo qua Zalo, không qua sàn."
                  data-live="0"
                  className="x-scene aspect-[16/11] bg-gradient-to-br from-amber-50 to-rose-50 dark:from-[#1a1022] dark:to-[#0b1020]"
                  data-stage="start"
                >
                  <div className="x-stage" aria-hidden="true">
                    <div className="absolute inset-[5%] overflow-hidden rounded-[2cqw] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0f1a2b]">
                      <div className="absolute inset-x-0 top-0 flex h-[12%] items-center gap-[2cqw] border-b border-slate-100 px-[3%] dark:border-white/5">
                        <span className="flex items-center gap-[0.8cqw] text-[2.6cqw] font-black text-slate-900 dark:text-white">
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
                            className="lucide lucide-shopping-bag h-[2.8cqw] w-[2.8cqw] text-rose-500"
                          >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                          Shop của anh chị
                        </span>
                        <span className="flex h-[55%] w-[34%] items-center gap-[1cqw] rounded-full bg-slate-100 px-[1.6cqw] text-[1.7cqw] text-slate-400 dark:bg-white/5">
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
                            className="lucide lucide-search h-[2cqw] w-[2cqw]"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                          Tìm sản phẩm
                        </span>
                      </div>
                      <span
                        data-press="cart"
                        className="absolute right-[3%] top-[2%] z-20 flex h-[7cqw] w-[7cqw] items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
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
                          className="lucide lucide-shopping-bag h-[3.2cqw] w-[3.2cqw]"
                        >
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span
                          data-text="a1:1 a2:2 a3:3"
                          className="absolute -right-[1cqw] -top-[1cqw] flex h-[3.4cqw] min-w-[3.4cqw] items-center justify-center rounded-full bg-rose-500 px-[0.6cqw] text-[1.8cqw] font-black text-white"
                          data-text0="0"
                        >
                          0
                        </span>
                      </span>
                      <div
                        className="absolute bottom-[4%] top-[16%] w-[21%] rounded-[1.2cqw] border border-slate-100 p-[1cqw] dark:border-white/10"
                        style={{ left: "4%" }}
                      >
                        <div className="flex h-[50%] items-center justify-center rounded-[1cqw] bg-gradient-to-br from-rose-200 to-rose-300 dark:from-rose-900/60 dark:to-rose-700/60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-shirt h-[6cqw] w-[6cqw] text-white"
                          >
                            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                          </svg>
                        </div>
                        <p className="mt-[1cqw] truncate text-[2.1cqw] font-bold text-slate-900 dark:text-white">
                          Áo linen
                        </p>
                        <p className="text-[2cqw] font-bold text-rose-500">350k</p>
                        <p className="flex text-amber-400">
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                        </p>
                        <span
                          data-press="a1"
                          className="absolute bottom-[5%] left-[7%] right-[7%] flex h-[13%] items-center justify-center rounded-[0.8cqw] bg-slate-900 text-[1.6cqw] font-bold text-white dark:bg-white dark:text-slate-900"
                        >
                          Thêm vào giỏ
                        </span>
                      </div>
                      <div
                        className="absolute bottom-[4%] top-[16%] w-[21%] rounded-[1.2cqw] border border-slate-100 p-[1cqw] dark:border-white/10"
                        style={{ left: "27.5%" }}
                      >
                        <div className="flex h-[50%] items-center justify-center rounded-[1cqw] bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-900/60 dark:to-amber-700/60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-backpack h-[6cqw] w-[6cqw] text-white"
                          >
                            <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                            <path d="M8 10h8" />
                            <path d="M8 18h8" />
                            <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                          </svg>
                        </div>
                        <p className="mt-[1cqw] truncate text-[2.1cqw] font-bold text-slate-900 dark:text-white">
                          Balo da
                        </p>
                        <p className="text-[2cqw] font-bold text-rose-500">420k</p>
                        <p className="flex text-amber-400">
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                        </p>
                        <span
                          data-press="a2"
                          className="absolute bottom-[5%] left-[7%] right-[7%] flex h-[13%] items-center justify-center rounded-[0.8cqw] bg-slate-900 text-[1.6cqw] font-bold text-white dark:bg-white dark:text-slate-900"
                        >
                          Thêm vào giỏ
                        </span>
                      </div>
                      <div
                        className="absolute bottom-[4%] top-[16%] w-[21%] rounded-[1.2cqw] border border-slate-100 p-[1cqw] dark:border-white/10"
                        style={{ left: "51%" }}
                      >
                        <div className="flex h-[50%] items-center justify-center rounded-[1cqw] bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-900/60 dark:to-sky-700/60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-watch h-[6cqw] w-[6cqw] text-white"
                          >
                            <circle cx="12" cy="12" r="6" />
                            <polyline points="12 10 12 12 13 13" />
                            <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
                            <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
                          </svg>
                        </div>
                        <p className="mt-[1cqw] truncate text-[2.1cqw] font-bold text-slate-900 dark:text-white">
                          Đồng hồ
                        </p>
                        <p className="text-[2cqw] font-bold text-rose-500">280k</p>
                        <p className="flex text-amber-400">
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                        </p>
                        <span
                          data-press="a3"
                          className="absolute bottom-[5%] left-[7%] right-[7%] flex h-[13%] items-center justify-center rounded-[0.8cqw] bg-slate-900 text-[1.6cqw] font-bold text-white dark:bg-white dark:text-slate-900"
                        >
                          Thêm vào giỏ
                        </span>
                      </div>
                      <div
                        className="absolute bottom-[4%] top-[16%] w-[21%] rounded-[1.2cqw] border border-slate-100 p-[1cqw] dark:border-white/10"
                        style={{ left: "74.5%" }}
                      >
                        <div className="flex h-[50%] items-center justify-center rounded-[1cqw] bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-900/60 dark:to-emerald-700/60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-glasses h-[6cqw] w-[6cqw] text-white"
                          >
                            <circle cx="6" cy="15" r="4" />
                            <circle cx="18" cy="15" r="4" />
                            <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                            <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
                            <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
                          </svg>
                        </div>
                        <p className="mt-[1cqw] truncate text-[2.1cqw] font-bold text-slate-900 dark:text-white">
                          Kính mát
                        </p>
                        <p className="text-[2cqw] font-bold text-rose-500">190k</p>
                        <p className="flex text-amber-400">
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
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
                            className="lucide lucide-star h-[1.6cqw] w-[1.6cqw] fill-current"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                        </p>
                        <span className="absolute bottom-[5%] left-[7%] right-[7%] flex h-[13%] items-center justify-center rounded-[0.8cqw] bg-slate-900 text-[1.6cqw] font-bold text-white dark:bg-white dark:text-slate-900">
                          Thêm vào giỏ
                        </span>
                      </div>
                      <span
                        data-cue="a1"
                        className="x-fly h-[6cqw] w-[6cqw] rounded-[1cqw] bg-gradient-to-br from-rose-200 to-rose-300 dark:from-rose-900/60 dark:to-rose-700/60"
                        style={{
                          "--x0": "11%",
                          "--y0": "28%",
                          "--x1": "90%",
                          "--y1": "3%",
                        }}
                      ></span>
                      <span
                        data-cue="a2"
                        className="x-fly h-[6cqw] w-[6cqw] rounded-[1cqw] bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-900/60 dark:to-amber-700/60"
                        style={{
                          "--x0": "34.5%",
                          "--y0": "28%",
                          "--x1": "90%",
                          "--y1": "3%",
                        }}
                      ></span>
                      <span
                        data-cue="a3"
                        className="x-fly h-[6cqw] w-[6cqw] rounded-[1cqw] bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-900/60 dark:to-sky-700/60"
                        style={{
                          "--x0": "58%",
                          "--y0": "28%",
                          "--x1": "90%",
                          "--y1": "3%",
                        }}
                      ></span>
                      <div
                        data-cue="cart"
                        className="x-drawer absolute bottom-0 right-0 top-0 z-20 w-[46%] border-l border-slate-100 bg-white p-[3%] shadow-2xl dark:border-white/10 dark:bg-[#1a1f31]"
                      >
                        <p className="text-[2.6cqw] font-black text-slate-900 dark:text-white">
                          Giỏ hàng (3)
                        </p>
                        <div className="mt-[1.6cqw] flex items-center gap-[1.2cqw]">
                          <span className="flex h-[4.6cqw] w-[4.6cqw] items-center justify-center rounded-[0.8cqw] bg-gradient-to-br from-rose-200 to-rose-300 dark:from-rose-900/60 dark:to-rose-700/60">
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
                              className="lucide lucide-shirt h-[2.6cqw] w-[2.6cqw] text-white"
                            >
                              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                            </svg>
                          </span>
                          <span className="flex-1 text-[2cqw] text-slate-700 dark:text-white/80">
                            Áo linen
                          </span>
                          <span className="text-[2cqw] font-bold text-slate-900 dark:text-white">
                            350k
                          </span>
                        </div>
                        <div className="mt-[1.6cqw] flex items-center gap-[1.2cqw]">
                          <span className="flex h-[4.6cqw] w-[4.6cqw] items-center justify-center rounded-[0.8cqw] bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-900/60 dark:to-amber-700/60">
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
                              className="lucide lucide-backpack h-[2.6cqw] w-[2.6cqw] text-white"
                            >
                              <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                              <path d="M8 10h8" />
                              <path d="M8 18h8" />
                              <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
                              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                            </svg>
                          </span>
                          <span className="flex-1 text-[2cqw] text-slate-700 dark:text-white/80">
                            Balo da
                          </span>
                          <span className="text-[2cqw] font-bold text-slate-900 dark:text-white">
                            420k
                          </span>
                        </div>
                        <div className="mt-[1.6cqw] flex items-center gap-[1.2cqw]">
                          <span className="flex h-[4.6cqw] w-[4.6cqw] items-center justify-center rounded-[0.8cqw] bg-gradient-to-br from-sky-200 to-sky-300 dark:from-sky-900/60 dark:to-sky-700/60">
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
                              className="lucide lucide-watch h-[2.6cqw] w-[2.6cqw] text-white"
                            >
                              <circle cx="12" cy="12" r="6" />
                              <polyline points="12 10 12 12 13 13" />
                              <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
                              <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
                            </svg>
                          </span>
                          <span className="flex-1 text-[2cqw] text-slate-700 dark:text-white/80">
                            Đồng hồ
                          </span>
                          <span className="text-[2cqw] font-bold text-slate-900 dark:text-white">
                            280k
                          </span>
                        </div>
                        <div className="mt-[2cqw] flex items-center justify-between border-t border-slate-100 pt-[1.6cqw] dark:border-white/10">
                          <span className="text-[2cqw] text-slate-500 dark:text-white/55">
                            Tổng cộng
                          </span>
                          <b
                            data-cue="total"
                            data-count="0:1050000"
                            data-vnd="true"
                            data-suffix="đ"
                            data-ms="800"
                            className="x-stay text-[2.7cqw] text-slate-900 dark:text-white"
                          >
                            0đ
                          </b>
                        </div>
                        <span
                          data-press="order"
                          className="absolute bottom-[18%] left-[7%] right-[7%] flex h-[11%] items-center justify-center rounded-full bg-rose-500 text-[2.2cqw] font-bold text-white shadow-lg shadow-rose-500/30"
                        >
                          Đặt hàng
                        </span>
                        <p
                          data-cue="done"
                          data-sfx="bell"
                          className="absolute bottom-[6%] left-[7%] right-[7%] flex items-center gap-[0.8cqw] text-[1.9cqw] font-bold text-emerald-600 dark:text-emerald-400"
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
                            className="lucide lucide-circle-check h-[2.4cqw] w-[2.4cqw]"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Đơn #1025 · Đã xác nhận
                        </p>
                      </div>
                      <div
                        data-cue="zalo"
                        data-sfx="ping"
                        className="x-down absolute left-[3%] top-[15%] z-30 flex w-[48%] items-center gap-[1.4cqw] rounded-[1.4cqw] border border-slate-100 bg-white p-[1.6cqw] shadow-2xl dark:border-white/10 dark:bg-[#1e2638]"
                      >
                        <img
                          alt=""
                          className="h-[5cqw] w-[5cqw] rounded-[1cqw]"
                          src="/zalo-icon.png"
                        />
                        <span className="text-[1.8cqw] leading-tight text-slate-600 dark:text-white/70">
                          <b className="block text-[2cqw] text-slate-900 dark:text-white">
                            Đơn mới từ website
                          </b>
                          3 sản phẩm · 1.050.000đ
                        </span>
                      </div>
                      <div
                        data-cue="rev"
                        className="x-pop absolute bottom-[6%] left-[3%] z-30 rounded-full bg-emerald-500 px-[2cqw] py-[1cqw] text-[1.9cqw] font-bold text-white shadow-xl"
                      >
                        Đơn về thẳng chủ shop · không mất phí sàn
                      </div>
                      <span
                        data-move="start:50,98 m1:14.5,88,c m2:38,88,c m3:61.5,88,c mcart:93,7.6,c morder:77,76.5,c zalo:hide"
                        className="x-mover x-cursor"
                        style={{ left: "50%", top: "98%" }}
                      >
                        <svg viewBox="0 0 24 24" className="h-full w-full drop-shadow-md">
                          <path
                            d="M4 2.5 19.5 13l-7 1.4-3.6 6.6z"
                            fill="#0f172a"
                            stroke="#fff"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="font-mono text-xs font-bold text-primary">02</p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white md:text-2xl">
                    Website bán hàng
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-white/60 md:text-base">
                    Kênh bán riêng đứng tên anh chị — bớt phụ thuộc sàn.
                  </p>
                </div>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-white/15 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="h-4 w-4"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="/bang-gia-thiet-ke-website"
              data-motion="card"
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-34px_rgba(0,161,207,0.55)] dark:border-white/10 dark:bg-white/[0.04]"
              style={{ "--motion-delay": "160ms" }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-white/[0.03]">
                <div
                  role="img"
                  aria-label="Ví dụ báo cáo tháng: lượt truy cập, khách liên hệ và đơn hàng tăng đều qua 8 tháng, kèm danh sách việc TechRent đã làm trong tháng."
                  data-live="0"
                  className="x-scene aspect-[16/11] bg-gradient-to-br from-sky-50 to-cyan-100 dark:from-slate-950 dark:to-[#0b2a3d]"
                  data-stage="start"
                >
                  <div className="x-stage" aria-hidden="true">
                    <div className="absolute inset-[5%] overflow-hidden rounded-[2cqw] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0f1a2b]">
                      <div className="absolute left-[4%] right-[4%] top-[4%] flex items-start justify-between">
                        <p className="text-[2.7cqw] font-black leading-tight text-slate-900 dark:text-white">
                          Báo cáo tháng 8
                          <span className="block text-[1.7cqw] font-medium text-slate-400 dark:text-white/45">
                            website của anh chị
                          </span>
                        </p>
                        <span className="rounded-full bg-slate-100 px-[1.4cqw] py-[0.4cqw] text-[1.5cqw] text-slate-500 dark:bg-white/10 dark:text-white/50">
                          Ví dụ minh hoạ
                        </span>
                      </div>
                      <div className="absolute left-[4%] right-[4%] top-[17%] grid h-[15%] grid-cols-3 gap-[1.6cqw]">
                        <div className="rounded-[1cqw] border border-slate-100 px-[1.4cqw] py-[0.8cqw] dark:border-white/10">
                          <p className="text-[1.6cqw] text-slate-500 dark:text-white/50">
                            Lượt truy cập
                          </p>
                          <p className="flex items-baseline gap-[0.8cqw]">
                            <b
                              data-cue="k"
                              data-count="1.2:1.6"
                              data-dec="1"
                              data-suffix="k"
                              data-ms="1600"
                              className="x-stay text-[3.2cqw] text-slate-900 dark:text-white"
                            >
                              1.2k
                            </b>
                            <span
                              data-cue="k"
                              className="x-fade text-[1.6cqw] font-bold text-emerald-500"
                            >
                              +33%
                            </span>
                          </p>
                        </div>
                        <div className="rounded-[1cqw] border border-slate-100 px-[1.4cqw] py-[0.8cqw] dark:border-white/10">
                          <p className="text-[1.6cqw] text-slate-500 dark:text-white/50">
                            Khách liên hệ
                          </p>
                          <p className="flex items-baseline gap-[0.8cqw]">
                            <b
                              data-cue="k"
                              data-count="12:17"
                              data-ms="1600"
                              className="x-stay text-[3.2cqw] text-slate-900 dark:text-white"
                            >
                              12
                            </b>
                            <span
                              data-cue="k"
                              className="x-fade text-[1.6cqw] font-bold text-emerald-500"
                            >
                              +42%
                            </span>
                          </p>
                        </div>
                        <div className="rounded-[1cqw] border border-slate-100 px-[1.4cqw] py-[0.8cqw] dark:border-white/10">
                          <p className="text-[1.6cqw] text-slate-500 dark:text-white/50">
                            Đơn hàng
                          </p>
                          <p className="flex items-baseline gap-[0.8cqw]">
                            <b
                              data-cue="k"
                              data-count="6:8"
                              data-ms="1600"
                              className="x-stay text-[3.2cqw] text-slate-900 dark:text-white"
                            >
                              6
                            </b>
                            <span
                              data-cue="k"
                              className="x-fade text-[1.6cqw] font-bold text-emerald-500"
                            >
                              +33%
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-[4%] top-[37%] h-[57%] w-[58%]">
                        <div className="relative h-[86%]">
                          <div className="flex h-full items-end">
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b1"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "42%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b2"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "44%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b3"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "47%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b4"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "49%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b5"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "54%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b6"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "57%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b7"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "61%" }}
                              ></span>
                            </div>
                            <div className="flex h-full flex-1 items-end justify-center">
                              <span
                                data-cue="b8"
                                className="x-grow-y block w-[66%] rounded-t-[0.6cqw] bg-gradient-to-t from-primary/50 to-primary dark:to-cyan-300"
                                style={{ height: "66%" }}
                              ></span>
                            </div>
                          </div>
                          <svg
                            data-cue="line"
                            className="x-wipe pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.25 54 L18.75 52 L31.25 49 L43.75 47 L56.25 42 L68.75 39 L81.25 35 L93.75 30"
                              fill="none"
                              stroke="#f59e0b"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                          <span
                            data-cue="call"
                            className="x-pop absolute right-[-4%] top-[-14%] rounded-full bg-amber-400 px-[1.2cqw] py-[0.4cqw] text-[1.6cqw] font-black text-slate-900 shadow-lg"
                          >
                            Tăng đều từng tháng
                          </span>
                        </div>
                        <div className="flex h-[14%] items-end">
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T1
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T2
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T3
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T4
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T5
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T6
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T7
                          </span>
                          <span className="flex-1 text-center text-[1.5cqw] text-slate-400 dark:text-white/40">
                            T8
                          </span>
                        </div>
                      </div>
                      <div className="absolute left-[66%] right-[4%] top-[37%]">
                        <p className="text-[1.9cqw] font-black text-slate-900 dark:text-white">
                          Việc đã làm tháng này
                        </p>
                        <p
                          data-cue="t1"
                          className="x-left mt-[1.4cqw] flex items-center gap-[0.8cqw] text-[1.75cqw] text-slate-700 dark:text-white/75"
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
                            className="lucide lucide-circle-check h-[2.2cqw] w-[2.2cqw] flex-none text-emerald-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          4 bài viết SEO
                        </p>
                        <p
                          data-cue="t2"
                          className="x-left mt-[1.4cqw] flex items-center gap-[0.8cqw] text-[1.75cqw] text-slate-700 dark:text-white/75"
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
                            className="lucide lucide-circle-check h-[2.2cqw] w-[2.2cqw] flex-none text-emerald-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Tối ưu form liên hệ
                        </p>
                        <p
                          data-cue="t3"
                          className="x-left mt-[1.4cqw] flex items-center gap-[0.8cqw] text-[1.75cqw] text-slate-700 dark:text-white/75"
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
                            className="lucide lucide-circle-check h-[2.2cqw] w-[2.2cqw] flex-none text-emerald-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Sao lưu 30/30 ngày
                        </p>
                        <p
                          data-cue="t4"
                          className="x-left mt-[1.4cqw] flex items-center gap-[0.8cqw] text-[1.75cqw] text-slate-700 dark:text-white/75"
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
                            className="lucide lucide-circle-check h-[2.2cqw] w-[2.2cqw] flex-none text-emerald-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          Landing khuyến mãi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-5 md:p-6">
                <div>
                  <p className="font-mono text-xs font-bold text-primary">03</p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.02em] text-slate-950 dark:text-white md:text-2xl">
                    Vận hành hằng tháng
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-white/60 md:text-base">
                    Bảo vệ, giữ gìn, phát triển — website mang về khách mỗi tháng.
                  </p>
                </div>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-white/15 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-4 w-4"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
