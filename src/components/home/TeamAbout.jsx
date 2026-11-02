import React from "react";
import { Link } from "react-router-dom";

export default function TeamAbout() {
  return (
    <div className="section-teamabout">
      <section
        id="about"
        className="relative scroll-mt-40 overflow-hidden bg-slate-50 py-10 transition-colors duration-500 dark:bg-[hsl(220_38%_7%)] md:scroll-mt-36 md:py-20 lg:py-24"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"></div>
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[150px]"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-6 lg:mb-8">
            <div className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 -z-10 hidden h-24 w-24 md:block"
                style={{
                  backgroundColor: "rgb(212, 255, 63)",
                  borderBottomLeftRadius: "100%",
                }}
              ></span>
              <div className=" max-w-4xl">
                <div
                  data-motion="up"
                  className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs  text-slate-500 dark:text-white/45"
                  style={{ "--motion-delay": "0ms" }}
                >
                  <span className="text-primary">02</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                  ></span>
                  <span className="text-balance">TẦM NHÌN · SỨ MỆNH · NHIỆM VỤ</span>
                </div>
                <h2
                  data-motion="split"
                  className="font-black uppercase leading-[1.18] tracking-[-0.04em] text-slate-900 dark:text-white"
                  style={{
                    fontSize: "var(--eh-size, clamp(1.45rem, 4.5vw, 3.4rem))",
                    overflowWrap: "break-word",
                    "--motion-delay": "80ms",
                  }}
                >
                  <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                    <span className="split-word " style={{ "--i": "0" }}>
                      Website<span className="sr-only"> </span>
                    </span>
                    <span className="split-word " style={{ "--i": "1" }}>
                      là<span className="sr-only"> </span>
                    </span>
                    <span className="split-word " style={{ "--i": "2" }}>
                      tài<span className="sr-only"> </span>
                    </span>
                    <span className="split-word " style={{ "--i": "3" }}>
                      sản.
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                    <span
                      className="split-word text-slate-500 dark:text-white/55"
                      style={{ "--i": "3" }}
                    >
                      TDDTech<span className="sr-only"> </span>
                    </span>
                    <span
                      className="split-word text-slate-500 dark:text-white/55"
                      style={{ "--i": "4" }}
                    >
                      giữ
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                    <span className="split-word " style={{ "--i": "6" }}>
                      nó<span className="sr-only"> </span>
                    </span>
                    <span className="split-word relative inline-block" style={{ "--i": "7" }}>
                      <span className="relative z-10 ">sinh</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 320 22"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute -bottom-1 left-0 h-[0.3em] w-full overflow-visible text-primary/70"
                      >
                        <path
                          d="M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2"
                          fill="currentColor"
                          opacity="0"
                          pathLength="1"
                          strokeDashoffset="0px"
                          strokeDasharray="0px 1px"
                        />
                      </svg>
                      <span className="sr-only"> </span>
                    </span>
                    <span className="split-word relative inline-block" style={{ "--i": "8" }}>
                      <span className="relative z-10 ">lời.</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 320 22"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute -bottom-1 left-0 h-[0.3em] w-full overflow-visible text-primary/70"
                      >
                        <path
                          d="M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2"
                          fill="currentColor"
                          opacity="0"
                          pathLength="1"
                          strokeDashoffset="0px"
                          strokeDasharray="0px 1px"
                        />
                      </svg>
                    </span>
                  </span>
                </h2>
              </div>
              <div className="mt-6 flex flex-col gap-4 md:mt-8 md:pl-[18%] sm:flex-row sm:items-center sm:gap-5">
                <p className="min-w-0 max-w-md flex-1 border-l-2 border-slate-300 pl-4 text-sm leading-relaxed text-slate-600 dark:border-white/20 dark:text-white/65 md:pl-5 md:text-base">
                  Anh chị sở hữu 100%. TDDTech bảo vệ, giữ gìn và phát triển để website mang về
                  khách hàng.
                </p>
                <svg
                  viewBox="0 0 200 200"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  className="block overflow-visible h-32 w-32 flex-none self-start text-slate-500 dark:text-white/40 sm:h-40 sm:w-40 sm:self-center"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    style={{
                      transform: "translate(0px, 12px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
                    }}
                  >
                    <rect
                      x="46"
                      y="128"
                      width="32"
                      height="32"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="hsl(var(--primary) / 0.12)"
                    />
                  </g>
                  <g
                    style={{
                      transform: "translate(0px, 12px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s",
                    }}
                  >
                    <rect
                      x="84"
                      y="128"
                      width="32"
                      height="32"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="hsl(var(--primary) / 0.12)"
                    />
                  </g>
                  <g
                    style={{
                      transform: "translate(0px, 12px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
                    }}
                  >
                    <rect
                      x="122"
                      y="128"
                      width="32"
                      height="32"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="hsl(var(--primary) / 0.12)"
                    />
                  </g>
                  <g
                    style={{
                      transform: "translate(0px, 12px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.45s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.45s",
                    }}
                  >
                    <rect
                      x="65"
                      y="94"
                      width="32"
                      height="32"
                      rx="5"
                      stroke="hsl(var(--primary) / 0.45)"
                      strokeWidth="1.5"
                      fill="hsl(var(--primary) / 0.28)"
                    />
                  </g>
                  <g
                    style={{
                      transform: "translate(0px, 12px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.55s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.55s",
                    }}
                  >
                    <rect
                      x="103"
                      y="94"
                      width="32"
                      height="32"
                      rx="5"
                      stroke="hsl(var(--primary) / 0.45)"
                      strokeWidth="1.5"
                      fill="hsl(var(--primary) / 0.28)"
                    />
                  </g>
                  <g
                    style={{
                      transform: "translate(0px, 16px)",
                      opacity: "0",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.65s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.65s",
                    }}
                  >
                    <g>
                      <rect
                        x="84"
                        y="60"
                        width="32"
                        height="32"
                        rx="5"
                        fill="hsl(var(--art-neon-fill))"
                        stroke="none"
                      />
                      <path
                        d="M 92 76 L 98 82 L 110 70"
                        stroke="hsl(var(--art-on-neon-fill))"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                  <path
                    d="M 38 168 H 162"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="124"
                    strokeDashoffset="124"
                    style={{
                      transition: "stroke-dashoffset 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-10 md:mb-16">
            <div className="grid gap-3 border-t border-slate-200 py-8 dark:border-white/10 md:grid-cols-[180px_1fr] md:gap-10 md:py-12">
              <p
                className="flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-[0.22em] text-primary"
                data-motion="up"
                style={{ "--motion-delay": "0ms" }}
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
                  className="lucide lucide-compass h-4 w-4"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>{" "}
                Tầm nhìn
              </p>
              <p
                data-scroll="read"
                data-no-motion="true"
                aria-label="Đến 2030, là nơi chủ doanh nghiệp Việt tin giao website như giao một tài sản."
                className="text-balance text-3xl font-black leading-[1.15] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl sm:leading-[1.2] lg:text-5xl lg:leading-[1.18]"
                style={{ "--n": "16", "--p": "0" }}
              >
                <span aria-hidden="true" className="read-word" style={{ "--i": "0" }}>
                  Đến
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "1" }}>
                  2030,
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "2" }}>
                  là
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "3" }}>
                  nơi
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "4" }}>
                  chủ
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "5" }}>
                  doanh
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "6" }}>
                  nghiệp
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "7" }}>
                  Việt
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "8" }}>
                  tin
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "9" }}>
                  giao
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "10" }}>
                  website
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "11" }}>
                  như
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "12" }}>
                  giao
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "13" }}>
                  một
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "14" }}>
                  tài
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "15" }}>
                  sản.
                </span>
              </p>
            </div>
            <div className="grid gap-3 border-t border-slate-200 py-8 dark:border-white/10 md:grid-cols-[180px_1fr] md:gap-10 md:py-12">
              <p
                className="flex items-center gap-2 pt-2 text-xs font-bold uppercase tracking-[0.22em] text-primary"
                data-motion="up"
                style={{ "--motion-delay": "0ms" }}
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
                  className="lucide lucide-flag h-4 w-4"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </svg>{" "}
                Sứ mệnh
              </p>
              <p
                data-scroll="read"
                data-no-motion="true"
                aria-label="Biến website từ khoản chi làm một lần thành tài sản đứng tên doanh nghiệp, sinh lời mỗi tháng."
                className="text-balance text-3xl font-black leading-[1.15] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl sm:leading-[1.2] lg:text-5xl lg:leading-[1.18]"
                style={{ "--n": "19", "--p": "0" }}
              >
                <span aria-hidden="true" className="read-word" style={{ "--i": "0" }}>
                  Biến
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "1" }}>
                  website
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "2" }}>
                  từ
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "3" }}>
                  khoản
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "4" }}>
                  chi
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "5" }}>
                  làm
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "6" }}>
                  một
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "7" }}>
                  lần
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "8" }}>
                  thành
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "9" }}>
                  tài
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "10" }}>
                  sản
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "11" }}>
                  đứng
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "12" }}>
                  tên
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "13" }}>
                  doanh
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "14" }}>
                  nghiệp,
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "15" }}>
                  sinh
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "16" }}>
                  lời
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "17" }}>
                  mỗi
                </span>{" "}
                <span aria-hidden="true" className="read-word" style={{ "--i": "18" }}>
                  tháng.
                </span>
              </p>
            </div>
            <div className="grid gap-3 border-t border-slate-200 pt-8 dark:border-white/10 md:grid-cols-[180px_1fr] md:gap-10 md:pt-12">
              <p
                className="pt-1 text-xs font-bold uppercase tracking-[0.22em] text-primary"
                data-motion="up"
                style={{ "--motion-delay": "0ms" }}
              >
                Nhiệm vụ
              </p>
              <ol
                className="flex flex-wrap gap-2.5"
                data-motion="up"
                style={{ "--motion-delay": "80ms" }}
              >
                <li
                  data-motion="card"
                  title="Bắt đầu từ mục tiêu kinh doanh và hành trình mua của khách, đo lường được từ ngày đầu tiên."
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base"
                  style={{ "--motion-delay": "0ms" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950">
                    01
                  </span>
                  Xây đúng nền móng
                </li>
                <li
                  data-motion="card"
                  title="Mã nguồn, tên miền, dữ liệu và tài khoản quản trị đứng tên doanh nghiệp."
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base"
                  style={{ "--motion-delay": "80ms" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950">
                    02
                  </span>
                  Trao quyền sở hữu 100%
                </li>
                <li
                  data-motion="card"
                  title="Theo dõi, sao lưu, xử lý sự cố để tài sản không xuống cấp theo thời gian."
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base"
                  style={{ "--motion-delay": "160ms" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950">
                    03
                  </span>
                  Bảo vệ và giữ gìn
                </li>
                <li
                  data-motion="card"
                  title="Nội dung, SEO, tối ưu chuyển đổi và chiến dịch để website mang về khách hàng, đơn hàng."
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base"
                  style={{ "--motion-delay": "240ms" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950">
                    04
                  </span>
                  Phát triển tài sản
                </li>
                <li
                  data-motion="card"
                  title="Số liệu thật từ công cụ đo lường, gửi đều đặn — anh chị biết tài sản của mình đang làm việc ra sao."
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-5 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white sm:text-base"
                  style={{ "--motion-delay": "320ms" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 font-mono text-xs text-white dark:bg-white dark:text-slate-950">
                    05
                  </span>
                  Báo cáo minh bạch
                </li>
              </ol>
            </div>
          </div>
          <dl className="mb-12 grid gap-px overflow-hidden rounded-[14px] border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:mb-16 md:grid-cols-3">
            <div
              data-motion="up"
              className="flex items-center gap-4 bg-white px-5 py-4 dark:bg-[hsl(220_38%_8%)]"
              style={{ "--motion-delay": "0ms" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="h-5 w-5 flex-none text-primary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z" />
              </svg>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
                  Pháp nhân
                </dt>
                <dd className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                  TDDTech
                </dd>
              </div>
            </div>
            <div
              data-motion="up"
              className="flex items-center gap-4 bg-white px-5 py-4 dark:bg-[hsl(220_38%_8%)]"
              style={{ "--motion-delay": "80ms" }}
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
                className="lucide lucide-phone h-5 w-5 flex-none text-primary"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
                  Liên hệ
                </dt>
                <dd className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                  <a href="tel:0393312336" className="hover:text-primary hover:underline">
                    0393312336
                  </a>
                </dd>
              </div>
            </div>
            <div
              data-motion="up"
              className="flex items-center gap-4 bg-white px-5 py-4 dark:bg-[hsl(220_38%_8%)]"
              style={{ "--motion-delay": "160ms" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                className="h-5 w-5 flex-none text-primary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
              <div className="min-w-0">
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
                  Trụ sở · phục vụ
                </dt>
                <dd className="truncate text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                  Hà Nội · phục vụ toàn quốc
                </dd>
              </div>
            </div>
          </dl>
          <div className="mb-10 md:mb-14">
            <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
              <div>
                <span className="inline-flex items-center gap-2.5 border-b-2 border-slate-900 pb-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-slate-900 dark:border-white dark:text-white sm:text-xs  ">
                  <span className="text-primary">/</span>Đội ngũ phụ trách
                </span>
                <h3 className="mt-1 text-balance text-2xl font-bold text-slate-900 dark:text-white md:mt-2 md:text-3xl">
                  Người đứng sau mỗi dự án
                </h3>
              </div>
            </div>
            <div
              className="relative mx-auto max-w-5xl px-1 pb-11 sm:px-0 md:pb-0"
              role="region"
              aria-roledescription="carousel"
            >
              <div className="overflow-hidden">
                <div className="flex -ml-3" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-[88%] pl-3 sm:basis-[72%] md:basis-1/2"
                  >
                    <article
                      className="surface-card group relative grid h-full grid-cols-[108px_1fr] gap-4 overflow-hidden rounded-[8px] border border-slate-200 bg-card p-4 shadow-md dark:border-white/10 sm:grid-cols-[128px_1fr]"
                      data-motion="card"
                      style={{ "--motion-delay": "0ms" }}
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-cyan-400"></div>
                      <div className="relative h-36 overflow-hidden rounded-[6px] bg-slate-100 dark:bg-[#252a32] sm:h-40">
                        <img
                          alt="Đội ngũ XimiTech - Giám đốc điều hành XimiTech TDDTech"
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] object-cover"
                          loading="lazy"
                          decoding="async"
                          src="/media/tddtech/company-profile/v1/tranthanhdo.webp"
                          style={{ objectPosition: "center bottom" }}
                        />
                      </div>
                      <div className="min-w-0 py-1">
                        <div className="mb-2 flex items-start gap-2">
                          <div className="mt-0.5 hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-[6px] border border-primary/25 bg-primary/10 sm:flex">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 448 512"
                              className="h-4 w-4 text-primary"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-base font-extrabold leading-tight text-slate-900 dark:text-white sm:text-lg">
                              Đội ngũ XimiTech
                            </h4>
                            <p className="mt-1 text-xs font-semibold leading-snug text-primary sm:text-sm">
                              Giám đốc điều hành XimiTech
                            </p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-white/60 sm:text-base">
                          Định hướng sản phẩm, chịu trách nhiệm chất lượng bàn giao.
                        </p>
                      </div>
                    </article>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-[88%] pl-3 sm:basis-[72%] md:basis-1/2"
                  >
                    <article
                      className="surface-card group relative grid h-full grid-cols-[108px_1fr] gap-4 overflow-hidden rounded-[8px] border border-slate-200 bg-card p-4 shadow-md dark:border-white/10 sm:grid-cols-[128px_1fr]"
                      data-motion="card"
                      style={{ "--motion-delay": "0ms" }}
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-cyan-400"></div>
                      <div className="relative h-36 overflow-hidden rounded-[6px] bg-slate-100 dark:bg-[#252a32] sm:h-40">
                        <img
                          alt="Đội ngũ TDDTech - Tech Team & Founder TDDTech TDDTech"
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] object-contain object-bottom px-1 pt-2"
                          loading="lazy"
                          decoding="async"
                          src="/media/tddtech/company-profile/v1/myavatar.png"
                          style={{ objectPosition: "center bottom" }}
                        />
                      </div>
                      <div className="min-w-0 py-1">
                        <div className="mb-2 flex items-start gap-2">
                          <div className="mt-0.5 hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-[6px] border border-primary/25 bg-primary/10 sm:flex">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 448 512"
                              className="h-4 w-4 text-primary"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-base font-extrabold leading-tight text-slate-900 dark:text-white sm:text-lg">
                              Đội ngũ TDDTech
                            </h4>
                            <p className="mt-1 text-xs font-semibold leading-snug text-primary sm:text-sm">
                              Tech Team & Founder TDDTech
                            </p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-white/60 sm:text-base">
                          Định hướng sản phẩm, chịu trách nhiệm chất lượng bàn giao.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <button
                className="ximi-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:bg-accent absolute h-8 w-8 rounded-full -bottom-1 left-[calc(50%-2.5rem)] top-auto translate-y-0 border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white disabled:opacity-30 md:hidden"
                disabled
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
                  className="lucide lucide-arrow-left h-4 w-4"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>
              <button
                className="ximi-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:bg-accent absolute h-8 w-8 rounded-full -bottom-1 left-[calc(50%+0.5rem)] right-auto top-auto translate-y-0 border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white disabled:opacity-30 md:hidden"
                disabled
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
                  className="lucide lucide-arrow-right h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <span className="sr-only">Next slide</span>
              </button>
            </div>
            <div className="relative mt-6 overflow-hidden rounded-[14px] border border-slate-800 bg-[#07101c] text-white shadow-[0_30px_90px_-40px_rgba(2,6,23,0.8)]">
              <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]"></div>
              <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
                <div
                  className="flex flex-col justify-between gap-8"
                  data-motion="up"
                  style={{ "--motion-delay": "0ms" }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                      Đội ngũ phía sau
                    </p>
                    <h3 className="mt-3 text-balance text-2xl font-black leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                      8 kỹ sư phát triển và vận hành
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                      Đội ngũ phối hợp theo từng giai đoạn của dự án: hoàn thiện tính năng, kiểm
                      thử, triển khai và hỗ trợ sau bàn giao. Phạm vi công việc và đầu mối phụ trách
                      được thống nhất từ đầu.
                    </p>
                  </div>
                  <dl className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                    <div>
                      <dt className="sr-only">kỹ sư phát triển & vận hành</dt>
                      <dd className="text-3xl font-black tabular-nums text-white sm:text-4xl">8</dd>
                      <dd className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">
                        kỹ sư phát triển & vận hành
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">
                        dự án đã triển khai (gồm cả trước khi lập công ty)
                      </dt>
                      <dd className="text-3xl font-black tabular-nums text-white sm:text-4xl">
                        150+
                      </dd>
                      <dd className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">
                        dự án đã triển khai (gồm cả trước khi lập công ty)
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">tiếp nhận & xử lý sự cố</dt>
                      <dd className="text-3xl font-black tabular-nums text-white sm:text-4xl">
                        24/7
                      </dd>
                      <dd className="mt-1 text-xs leading-5 text-white/55 sm:text-sm">
                        tiếp nhận & xử lý sự cố
                      </dd>
                    </div>
                  </dl>
                </div>
                <div
                  className="rounded-[10px] border border-white/10 bg-white/[0.03] p-4 sm:p-5"
                  aria-label="Mô phỏng đội ngũ kỹ thuật đang phối hợp vận hành"
                  data-motion="up"
                  style={{ "--motion-delay": "80ms" }}
                >
                  <div className="flex items-center justify-between gap-3 text-xs text-white/55 sm:text-sm">
                    <span className="inline-flex items-center gap-2 font-semibold text-white/80">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                      </span>
                      150+ hệ thống đang chạy
                    </span>
                    <span className="font-mono tabular-nums">09:55:25</span>
                  </div>
                  <div
                    className="mt-4 grid gap-[4px]"
                    style={{
                      gridTemplateColumns: "repeat(25, minmax(0px, 1fr))",
                    }}
                  >
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "296ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "592ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "925ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "999ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "1406ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "1665ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2220ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2405ms" }}
                    ></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2442ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2627ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2738ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2960ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "34ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "441ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "737ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "811ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "1144ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "1292ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "1477ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span
                      className="aspect-square rounded-[3px] transition-all duration-700 support-dot-beat bg-white/[0.14]"
                      style={{ animationDelay: "2217ms" }}
                    ></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                    <span className="aspect-square rounded-[3px] transition-all duration-700 bg-white/[0.07]"></span>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-0" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-0)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-0)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Frontend
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Sao lưu dữ liệu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-1)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-1)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Backend
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Xử lý yêu cầu hỗ trợ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-2)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-2)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Dữ liệu
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Kiểm thử bản cập nhật
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-3)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-3)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Tích hợp
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Kiểm tra form & đơn hàng
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-4" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-4)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-4)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Kiểm thử
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Giám sát uptime
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-5" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-5)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-5)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Hạ tầng
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Tối ưu tốc độ tải trang
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-6" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-6)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-6)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Bảo mật
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Rà soát nhật ký lỗi
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-[8px] border p-2.5 transition-colors duration-500 border-white/10 bg-white/[0.02]">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-10 w-10 flex-none sm:h-11 sm:w-11"
                        aria-hidden="true"
                      >
                        <defs>
                          <lineargradient id="st-face-7" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#334155" />
                            <stop offset="1" stopColor="#1e293b" />
                          </lineargradient>
                        </defs>
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0b1624"
                          stroke="#1f2a3a"
                          strokeWidth="1.5"
                        />
                        <circle cx="24" cy="19" r="7.5" fill="url(#st-face-7)" />
                        <path d="M10 41c1.8-8 7.4-12 14-12s12.2 4 14 12" fill="url(#st-face-7)" />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                          Vận hành
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </p>
                        <div className="relative mt-0.5 h-6 overflow-hidden">
                          <p
                            className="absolute inset-x-0 top-0 truncate text-sm font-semibold text-white/75"
                            style={{ opacity: "1", transform: "none" }}
                          >
                            Cập nhật bản vá bảo mật
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:mt-10">
            <a
              href="/ho-so-nang-luc"
              className="inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1.5 text-sm font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white"
            >
              Xem hồ sơ năng lực và cách triển khai <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
