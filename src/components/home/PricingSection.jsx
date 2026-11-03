import React from "react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <div className="section-pricingsection">
      <section
        id="pricing"
        className="measure-height relative overflow-clip bg-slate-100/70 py-16 transition-colors duration-500 dark:bg-[hsl(220_35%_8%)] md:py-28 lg:py-36"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50"></div>
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
            <div className="text-center ">
              <div
                data-motion="up"
                className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs justify-center text-slate-500 dark:text-white/45"
                style={{ "--motion-delay": "0ms" }}
              >
                <span className="text-primary">06</span>
                <span
                  aria-hidden="true"
                  className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                ></span>
                <span className="text-balance">MÔ HÌNH DỊCH VỤ</span>
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
                <span
                  className="flex flex-wrap items-baseline justify-center"
                  style={{ gap: "0.02em 0.26em" }}
                >
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "0" }}
                  >
                    Xây<span className="sr-only"> </span>
                  </span>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "1" }}
                  >
                    một<span className="sr-only"> </span>
                  </span>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "2" }}
                  >
                    lần,
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span
                  className="flex flex-wrap items-baseline justify-center"
                  style={{ gap: "0.02em 0.26em" }}
                >
                  <span className="split-word " style={{ "--i": "3" }}>
                    vận<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "4" }}>
                    hành<span className="sr-only"> </span>
                  </span>
                  <span className="split-word relative inline-block" style={{ "--i": "5" }}>
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
                      mỗi
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="split-word relative inline-block" style={{ "--i": "6" }}>
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
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/60 md:mt-6 md:text-xl"
              data-motion="up"
              style={{ "--motion-delay": "80ms" }}
            >
              Website là tài sản: một lần đầu tư để xây đúng nền móng, rồi vận hành mỗi tháng để tài
              sản không xuống cấp và tiếp tục mang về khách hàng.
            </p>
          </div>
          <div>
            <article
              data-motion="card"
              className="relative overflow-hidden rounded-[22px] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/25 sm:p-10 lg:p-14"
              style={{ "--motion-delay": "0ms" }}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-[110px]"></div>
              <div className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                      Tầng 01 · Đầu tư một lần
                    </p>
                    <h3 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                      Gói Setup
                    </h3>
                    <p className="mt-3 text-lg text-white/70">
                      Xây nền móng tài sản — đầu tư một lần
                    </p>
                  </div>
                  <div className="max-w-xs">
                    <a
                      href="https://zalo.me/0813044817"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors bg-white text-slate-950 hover:bg-white/90"
                    >
                      <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                      Nhận báo giá Setup
                    </a>
                  </div>
                </div>
                <ol className="relative space-y-5 pl-12 sm:space-y-6">
                  <span
                    aria-hidden="true"
                    data-motion="draw-y"
                    className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-cyan-300 via-primary to-transparent"
                    style={{ "--motion-delay": "0ms" }}
                  ></span>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "80ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      01
                    </span>
                    Làm rõ mục tiêu kinh doanh, khách hàng và hành trình mua
                  </li>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "160ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      02
                    </span>
                    Cấu trúc nội dung và thiết kế theo thương hiệu
                  </li>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "240ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      03
                    </span>
                    Lập trình website doanh nghiệp hoặc website bán hàng
                  </li>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "320ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      04
                    </span>
                    SEO kỹ thuật nền tảng, tốc độ tải và hiển thị trên điện thoại
                  </li>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "400ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      05
                    </span>
                    Cài đo lường: GA4, Search Console, sự kiện chuyển đổi
                  </li>
                  <li
                    data-motion="left"
                    className="relative text-base leading-7 text-white/85 sm:text-lg"
                    style={{ "--motion-delay": "480ms" }}
                  >
                    <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-xs font-bold text-cyan-300">
                      06
                    </span>
                    Bàn giao 100% mã nguồn, tên miền, dữ liệu và quyền quản trị
                  </li>
                </ol>
              </div>
            </article>
            <div className="mt-20 md:mt-28">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Tầng 02 · Vận hành hằng tháng
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.025em] text-slate-950 dark:text-white sm:text-[2.6rem] sm:leading-[1.1]">
                    Bảo vệ, giữ gìn và <span className="accent-serif text-primary">phát triển</span>{" "}
                    tài sản
                  </h3>
                </div>
                <p className="max-w-md text-base leading-7 text-slate-600 dark:text-white/60">
                  Chọn theo mục tiêu của doanh nghiệp. Có thể nâng gói bất cứ lúc nào khi website
                  bắt đầu mang về khách.
                </p>
              </div>
              <div data-plan-builder="true" className="relative mt-8 h-[260svh]">
                <div className="sticky top-0 flex h-[100svh] items-center py-4 pt-[76px] sm:pt-[84px] [@media(max-height:620px)]:pb-2 [@media(max-height:620px)]:pt-[68px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#05080f] text-white shadow-[0_30px_60px_-40px_rgba(2,6,23,0.55)] ring-1 ring-white/10">
                    <div className="absolute inset-0 opacity-90">
                      <canvas
                        aria-hidden="true"
                        className="Dark3DBanner_canvas__xRM_u "
                        data-dark-3d-banner="true"
                        width="1120"
                        height="900"
                        style={{ opacity: "1" }}
                      ></canvas>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_50%,#000_25%,transparent_80%)]"
                    ></div>
                    <div className="relative flex h-full flex-col p-4 sm:p-7 [@media(max-height:620px)]:p-3">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
                          <span className="relative rounded-full px-2 py-1.5 text-center text-[10px] font-black tracking-[0.06em] sm:px-5 sm:text-xs sm:tracking-[0.14em]">
                            <span
                              className="absolute inset-0 rounded-full bg-white shadow-[0_0_24px_rgba(103,232,249,0.45)]"
                              style={{ opacity: "1" }}
                            ></span>
                            <span className="relative uppercase text-slate-950">Basic</span>
                          </span>
                          <span className="relative rounded-full px-2 py-1.5 text-center text-[10px] font-black tracking-[0.06em] sm:px-5 sm:text-xs sm:tracking-[0.14em]">
                            <span className="relative uppercase text-white/40">Growth</span>
                          </span>
                          <span className="relative rounded-full px-2 py-1.5 text-center text-[10px] font-black tracking-[0.06em] sm:px-5 sm:text-xs sm:tracking-[0.14em]">
                            <span className="relative uppercase text-white/40">Performance</span>
                          </span>
                        </div>
                        <p
                          className="flex items-baseline gap-2 font-mono text-white/60"
                          style={{ opacity: "1" }}
                        >
                          <span className="text-3xl font-bold text-white sm:text-4xl [@media(max-height:620px)]:text-2xl">
                            0
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.18em] sm:text-xs">
                            việc mỗi tháng
                          </span>
                        </p>
                      </div>
                      <div className="relative mt-2 min-h-0 flex-1">
                        <svg
                          className="absolute inset-0 h-full w-full overflow-visible"
                          aria-hidden="true"
                        >
                          <ellipse
                            cx="532"
                            cy="366"
                            rx="234.08"
                            ry="212.27999999999997"
                            fill="none"
                            stroke="rgba(148,197,255,0.12)"
                            strokeDasharray="2 6"
                            opacity="0.25"
                          />
                          <ellipse
                            cx="532"
                            cy="366"
                            rx="383.03999999999996"
                            ry="263.52"
                            fill="none"
                            stroke="rgba(148,197,255,0.12)"
                            strokeDasharray="2 6"
                            opacity="0.25"
                          />
                          <ellipse
                            cx="532"
                            cy="366"
                            rx="500.08"
                            ry="314.76"
                            fill="none"
                            stroke="rgba(148,197,255,0.12)"
                            strokeDasharray="2 6"
                            opacity="0.25"
                          />
                          <g>
                            <path
                              d="M 532.0 366.0 Q 496.2 265.6 397.7 192.1"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 496.2 265.6 397.7 192.1"
                              fill="none"
                              stroke="#67e8f9"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.6s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 496.2 265.6 397.7 192.1"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 630.4 292.5 666.3 192.1"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 630.4 292.5 666.3 192.1"
                              fill="none"
                              stroke="#67e8f9"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.85s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 630.4 292.5 666.3 192.1"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 567.8 466.4 666.3 539.9"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 567.8 466.4 666.3 539.9"
                              fill="none"
                              stroke="#67e8f9"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.1s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 567.8 466.4 666.3 539.9"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 433.6 439.5 397.7 539.9"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 433.6 439.5 397.7 539.9"
                              fill="none"
                              stroke="#67e8f9"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.35s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 433.6 439.5 397.7 539.9"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 364.5 288.9 167.7 284.6"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 364.5 288.9 167.7 284.6"
                              fill="none"
                              stroke="#38bdf8"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.6s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 364.5 288.9 167.7 284.6"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 728.8 361.7 896.3 284.6"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 728.8 361.7 896.3 284.6"
                              fill="none"
                              stroke="#38bdf8"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.85s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 728.8 361.7 896.3 284.6"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 699.5 443.1 896.3 447.4"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 699.5 443.1 896.3 447.4"
                              fill="none"
                              stroke="#38bdf8"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.1s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 699.5 443.1 896.3 447.4"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 335.2 370.3 167.7 447.4"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 335.2 370.3 167.7 447.4"
                              fill="none"
                              stroke="#38bdf8"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.35s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 335.2 370.3 167.7 447.4"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 376.9 226.5 148.9 163.7"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 376.9 226.5 148.9 163.7"
                              fill="none"
                              stroke="#a78bfa"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.6s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 376.9 226.5 148.9 163.7"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 760.0 303.1 915.1 163.7"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 760.0 303.1 915.1 163.7"
                              fill="none"
                              stroke="#a78bfa"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="1.85s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 760.0 303.1 915.1 163.7"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 687.1 505.5 915.1 568.3"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 687.1 505.5 915.1 568.3"
                              fill="none"
                              stroke="#a78bfa"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.1s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 687.1 505.5 915.1 568.3"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                          <g>
                            <path
                              d="M 532.0 366.0 Q 304.0 428.9 148.9 568.3"
                              fill="none"
                              stroke="rgba(255,255,255,0.06)"
                              strokeWidth="1"
                            />
                            <path
                              d="M 532.0 366.0 Q 304.0 428.9 148.9 568.3"
                              fill="none"
                              stroke="#a78bfa"
                              strokeOpacity="0.75"
                              strokeWidth="1.4"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="0px 1px"
                            />
                            <circle
                              r="2.6"
                              fill="#e0f2fe"
                              opacity="0"
                              style={{
                                filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 5px)",
                              }}
                            >
                              <animatemotion
                                dur="2.35s"
                                repeatCount="indefinite"
                                path="M 532.0 366.0 Q 304.0 428.9 148.9 568.3"
                                keyPoints="1;0"
                                keyTimes="0;1"
                                calcMode="linear"
                              ></animatemotion>
                            </circle>
                          </g>
                        </svg>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "397.737px",
                            top: "192.11px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-cyan-300/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200 h-7 w-7">
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
                                className="lucide lucide-cloud h-3.5 w-3.5"
                              >
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Hosting · SSL</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "666.263px",
                            top: "192.11px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-cyan-300/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200 h-7 w-7">
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
                                className="lucide lucide-hard-drive-download h-3.5 w-3.5"
                              >
                                <path d="M12 2v8" />
                                <path d="m16 6-4 4-4-4" />
                                <rect width="20" height="8" x="2" y="14" rx="2" />
                                <path d="M6 18h.01" />
                                <path d="M10 18h.01" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Sao lưu</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "666.263px",
                            top: "539.89px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-cyan-300/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200 h-7 w-7">
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
                                className="lucide lucide-radar h-3.5 w-3.5"
                              >
                                <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
                                <path d="M4 6h.01" />
                                <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
                                <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
                                <path d="M12 18h.01" />
                                <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="m13.41 10.59 5.66-5.66" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Theo dõi 24/7</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "397.737px",
                            top: "539.89px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-cyan-300/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200 h-7 w-7">
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
                                className="lucide lucide-chart-column h-3.5 w-3.5"
                              >
                                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                                <path d="M18 17V9" />
                                <path d="M13 17V5" />
                                <path d="M8 17v-3" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Báo cáo tháng</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "167.707px",
                            top: "284.568px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-sky-400/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-sky-400/15 text-sky-200 h-7 w-7">
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
                                className="lucide lucide-search h-3.5 w-3.5"
                              >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">SEO</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "896.293px",
                            top: "284.568px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-sky-400/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-sky-400/15 text-sky-200 h-7 w-7">
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
                                className="lucide lucide-file-text h-3.5 w-3.5"
                              >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Nội dung</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "896.293px",
                            top: "447.432px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-sky-400/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-sky-400/15 text-sky-200 h-7 w-7">
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
                                className="lucide lucide-mouse-pointer-click h-3.5 w-3.5"
                              >
                                <path d="M14 4.1 12 6" />
                                <path d="m5.1 8-2.9-.8" />
                                <path d="m6 12-1.9 2" />
                                <path d="M7.2 2.2 8 5.1" />
                                <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Chuyển đổi</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "167.707px",
                            top: "447.432px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-sky-400/30 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-sky-400/15 text-sky-200 h-7 w-7">
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
                                className="lucide lucide-gauge h-3.5 w-3.5"
                              >
                                <path d="m12 14 4-4" />
                                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Landing page</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "148.916px",
                            top: "163.676px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-violet-400/35 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-violet-400/15 text-violet-200 h-7 w-7">
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
                                className="lucide lucide-megaphone h-3.5 w-3.5"
                              >
                                <path d="m3 11 18-5v12L3 14v-3z" />
                                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">Quảng cáo</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "915.084px",
                            top: "163.676px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-violet-400/35 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-violet-400/15 text-violet-200 h-7 w-7">
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
                                className="lucide lucide-flask-conical h-3.5 w-3.5"
                              >
                                <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                                <path d="M8.5 2h7" />
                                <path d="M7 16h10" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">A/B test</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "915.084px",
                            top: "568.324px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-violet-400/35 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-violet-400/15 text-violet-200 h-7 w-7">
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
                                className="lucide lucide-message-circle h-3.5 w-3.5"
                              >
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">CRM · Zalo</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "148.916px",
                            top: "568.324px",
                            opacity: "1",
                            transform: "scale(1)",
                          }}
                        >
                          <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-[#0a1424]/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] border-violet-400/35 py-1.5 pl-1.5 pr-3 text-[13px]">
                            <span className="flex items-center justify-center rounded-full bg-violet-400/15 text-violet-200 h-7 w-7">
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
                                className="lucide lucide-target h-3.5 w-3.5"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="6" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            </span>
                            <span className="font-semibold text-white/90">KPI doanh thu</span>
                          </div>
                        </div>
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: "532px",
                            top: "366px",
                            opacity: "1",
                            transform: "scale(0.8)",
                          }}
                        >
                          <div className="relative">
                            <span className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.35),transparent)]"></span>
                            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white shadow-[0_20px_60px_-20px_rgba(34,211,238,0.6)] w-[168px]">
                              <div className="flex items-center gap-1 border-b border-slate-100 px-2 py-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                              </div>
                              <div className="space-y-1 p-2">
                                <span className="block h-1.5 w-1/3 rounded bg-primary/70"></span>
                                <span className="block h-2 w-5/6 rounded bg-slate-800"></span>
                                <span className="block h-2 w-2/3 rounded bg-slate-800"></span>
                                <div className="grid grid-cols-3 gap-1 pt-1">
                                  <span className="h-4 rounded bg-gradient-to-br from-sky-100 to-cyan-200"></span>
                                  <span className="h-4 rounded bg-gradient-to-br from-sky-100 to-cyan-200"></span>
                                  <span className="h-4 rounded bg-gradient-to-br from-sky-100 to-cyan-200"></span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-1.5 whitespace-nowrap text-center text-[9px] font-bold uppercase tracking-[0.14em] text-white/70 sm:mt-2 sm:text-[11px] sm:tracking-[0.16em]">
                              Website của anh chị
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:gap-3 [@media(max-height:620px)]:mt-1 [@media(max-height:620px)]:gap-1">
                        <div
                          className="max-w-xl"
                          style={{
                            opacity: "1",
                            filter: "blur(0px)",
                            transform: "none",
                          }}
                        >
                          <p className="text-lg font-black sm:text-2xl [@media(max-height:620px)]:text-base">
                            Basic —{" "}
                            <span className="accent-serif text-cyan-300">Giữ gìn tài sản</span>
                          </p>
                          <p className="mt-1 text-[13.5px] leading-6 text-white/65 sm:text-base [@media(max-height:620px)]:text-[12.5px] [@media(max-height:620px)]:leading-5">
                            Website đã chạy ổn, cần người trông và cập nhật đều đặn.
                          </p>
                        </div>
                        <span
                          className="inline-flex w-fit items-center gap-2 text-[12px] font-bold text-cyan-100 sm:rounded-full sm:border sm:border-cyan-300/30 sm:bg-cyan-300/10 sm:px-4 sm:py-2 sm:text-[13px]"
                          style={{ opacity: "1" }}
                        >
                          Nâng gói bất cứ lúc nào — website không gián đoạn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-16 grid gap-5 lg:grid-cols-3 lg:gap-6">
              <article
                data-motion="card"
                className="plan-card relative flex flex-col rounded-[22px] border p-7 sm:p-9 lg:p-7 xl:p-9 border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                style={{ "--motion-delay": "0ms" }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary lg:text-[12.5px] lg:tracking-[0.12em] xl:text-sm xl:tracking-[0.16em]">
                  Giữ gìn tài sản
                </p>
                <h4 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Basic
                </h4>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-white/60">
                  Website đã chạy ổn, cần người trông và cập nhật đều đặn.
                </p>
                <p className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:border-white/10 dark:text-white/40">
                  <span>Bao gồm</span>
                  <span className="font-mono tracking-[0.06em]">4 hạng mục</span>
                </p>
                <ul className="mt-4 flex-1 space-y-3.5">
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "0ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Quản lý hosting, tên miền, chứng chỉ SSL
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "80ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sao lưu định kỳ và theo dõi website hoạt động
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "160ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Cập nhật nội dung, hình ảnh, thông tin sản phẩm
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "240ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Báo cáo hằng tháng: lượt truy cập, liên hệ, đơn hàng
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://zalo.me/0813044817"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
                  >
                    <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                    Nhận báo giá Basic
                  </a>
                </div>
              </article>
              <article
                data-motion="card"
                className="plan-card relative flex flex-col rounded-[22px] border p-7 sm:p-9 lg:p-7 xl:p-9 plan-featured border-primary/50 bg-gradient-to-b from-sky-50 to-white shadow-xl shadow-primary/10 dark:from-primary/[0.12] dark:to-transparent"
                style={{ "--motion-delay": "80ms" }}
              >
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
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
                    className="lucide lucide-sparkles h-3.5 w-3.5"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>{" "}
                  Đề xuất cho đa số doanh nghiệp
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary lg:text-[12.5px] lg:tracking-[0.12em] xl:text-sm xl:tracking-[0.16em]">
                  Phát triển tài sản
                </p>
                <h4 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Growth
                </h4>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-white/60">
                  Doanh nghiệp muốn website đều đặn mang về khách mới.
                </p>
                <p className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:border-white/10 dark:text-white/40">
                  <span>Bao gồm</span>
                  <span className="font-mono tracking-[0.06em]">5 hạng mục</span>
                </p>
                <ul className="mt-4 flex-1 space-y-3.5">
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "0ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Toàn bộ hạng mục Basic
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "80ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Nội dung và SEO tăng trưởng hằng tháng
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "160ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Tối ưu tỷ lệ chuyển đổi: form, nút gọi, Zalo, giỏ hàng
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "240ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Landing page cho chiến dịch và mùa bán hàng
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "320ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Họp đánh giá hằng tháng, đề xuất bước tiếp theo
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://zalo.me/0813044817"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                    Nhận báo giá Growth
                  </a>
                </div>
              </article>
              <article
                data-motion="card"
                className="plan-card relative flex flex-col rounded-[22px] border p-7 sm:p-9 lg:p-7 xl:p-9 border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                style={{ "--motion-delay": "160ms" }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary lg:text-[12.5px] lg:tracking-[0.12em] xl:text-sm xl:tracking-[0.16em]">
                  Tăng trưởng doanh thu
                </p>
                <h4 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                  Performance
                </h4>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-white/60">
                  Doanh nghiệp coi website là kênh bán hàng chính.
                </p>
                <p className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:border-white/10 dark:text-white/40">
                  <span>Bao gồm</span>
                  <span className="font-mono tracking-[0.06em]">5 hạng mục</span>
                </p>
                <ul className="mt-4 flex-1 space-y-3.5">
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "0ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Toàn bộ hạng mục Growth
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "80ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Vận hành quảng cáo dẫn về website (chưa gồm ngân sách quảng cáo)
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "160ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Thử nghiệm A/B, kết nối CRM và Zalo
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "240ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    KPI khách hàng tiềm năng và doanh thu thống nhất từ đầu
                  </li>
                  <li
                    data-motion="up"
                    className="flex gap-3 text-base leading-7 text-slate-700 dark:text-white/75"
                    style={{ "--motion-delay": "320ms" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="plan-check mt-1.5 h-4 w-4 flex-none text-primary"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5 6.5 12 13 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Báo cáo hằng tuần, nhân sự phụ trách riêng
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://zalo.me/0813044817"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-colors bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
                  >
                    <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                    Nhận báo giá Performance
                  </a>
                </div>
              </article>
            </div>
            <div
              data-motion="up"
              className="mt-12 grid gap-5 rounded-[22px] border border-primary/20 bg-primary/[0.07] p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-center"
              style={{ "--motion-delay": "240ms" }}
            >
              <div className="space-y-2 text-base leading-7 text-slate-700 dark:text-white/70">
                <p>
                  <strong className="text-slate-950 dark:text-white">
                    Vì sao không niêm yết giá?
                  </strong>{" "}
                  Chi phí được báo riêng sau khi TechRent hiểu mục tiêu và hiện trạng của anh chị.
                  Nhắn Zalo hoặc gọi để nhận báo giá.
                </p>
                <p className="text-slate-500 dark:text-white/50">
                  TechRent không cam kết một con số doanh thu. Chúng tôi cam kết đầu việc rõ ràng,
                  KPI thống nhất từ đầu và báo cáo minh bạch.
                </p>
              </div>
              <a
                href="tel:0813044817"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
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
                  className="lucide lucide-phone h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>{" "}
                0813044817
              </a>
            </div>
          </div>
          <p
            className="mt-4 text-center text-xs leading-6 text-slate-500 dark:text-white/45 md:text-left"
            data-motion="up"
            style={{ "--motion-delay": "160ms" }}
          >
            Điều kiện bàn giao và bảo hành áp dụng theo phạm vi dự án.{" "}
            <a
              href="/bao-hanh-bao-tri-website"
              className="font-semibold text-primary hover:underline"
            >
              Xem chính sách bàn giao và bảo hành
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
