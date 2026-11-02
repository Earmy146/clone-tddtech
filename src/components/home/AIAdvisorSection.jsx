import React from "react";
import { Link } from "react-router-dom";

export default function AIAdvisorSection() {
  return (
    <div className="section-aiadvisorsection">
      <section
        id="ai-advisor"
        className="relative overflow-hidden bg-slate-50 transition-colors duration-500 dark:bg-[hsl(220_40%_4%)]"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 dark:from-[hsl(220_40%_6%)] dark:via-[hsl(220_35%_8%)] dark:to-[hsl(220_40%_6%)]"></div>
          <div className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-t from-primary/10 via-cyan-500/5 to-transparent dark:from-primary/20 dark:via-cyan-500/10 blur-[120px]"></div>
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/5 dark:bg-purple-500/8 blur-[100px]"></div>
          <div className="absolute left-1/4 top-1/3 h-48 w-48 rounded-full bg-primary/5 dark:bg-primary/8 blur-[80px]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <div className="text-center ">
              <div
                data-motion="up"
                className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs justify-center text-slate-500 dark:text-white/45"
                style={{ "--motion-delay": "0ms" }}
              >
                <span className="text-primary">08</span>
                <span
                  aria-hidden="true"
                  className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                ></span>
                <span className="text-balance">TRỢ LÝ THÔNG TIN TDDTech</span>
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
                    Mô<span className="sr-only"> </span>
                  </span>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "1" }}
                  >
                    tả<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "2" }}>
                    website
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span
                  className="flex flex-wrap items-baseline justify-center"
                  style={{ gap: "0.02em 0.26em" }}
                >
                  <span className="split-word relative inline-block" style={{ "--i": "3" }}>
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
                      bạn
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="split-word relative inline-block" style={{ "--i": "4" }}>
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
                      cần
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <p
              className="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-white/50 md:text-base"
              style={{
                opacity: "0",
                transform: "translateY(15px)",
                "--motion-delay": "80ms",
              }}
              data-motion="up"
            >
              Hỏi nhanh về phạm vi, cách triển khai, bàn giao hoặc dự án tham khảo
            </p>
            <svg
              viewBox="0 0 200 200"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              className="block overflow-visible mx-auto mt-5 h-28 w-28 text-slate-500 dark:text-white/40 md:mt-6 md:h-36 md:w-36"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g
                style={{
                  transform: "translate(0px, 8px)",
                  opacity: "0",
                  transition:
                    "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
                }}
              >
                <path
                  d="M 36 58 H 132 A 10 10 0 0 1 142 68 V 92 A 10 10 0 0 1 132 102 H 52 L 40 114 V 102 H 36 A 10 10 0 0 1 26 92 V 68 A 10 10 0 0 1 36 58 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="hsl(var(--primary) / 0.12)"
                />
                <path
                  d="M 42 74 H 122"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.55"
                  strokeDasharray="80"
                  strokeDashoffset="80"
                  style={{
                    transition: "stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
                  }}
                />
                <path
                  d="M 42 88 H 94"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                />
              </g>
              <g
                style={{
                  transform: "translate(0px, 8px)",
                  opacity: "0",
                  transition:
                    "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
                }}
              >
                <path
                  d="M 168 120 H 100 A 10 10 0 0 0 90 130 V 150 A 10 10 0 0 0 100 160 H 148 L 160 172 V 160 H 168 A 10 10 0 0 0 178 150 V 130 A 10 10 0 0 0 168 120 Z"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="hsl(var(--primary) / 0.28)"
                />
                <circle cx="118" cy="140" r="4" fill="hsl(var(--primary))" stroke="none" />
                <circle cx="130" cy="140" r="4" fill="hsl(var(--primary))" stroke="none" />
                <circle cx="142" cy="140" r="4" fill="hsl(var(--primary))" stroke="none" />
              </g>
            </svg>
          </div>
          <div className="mx-auto max-w-2xl" style={{ opacity: "1", transform: "none" }}>
            <form className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all focus-within:border-primary/40 focus-within:shadow-primary/5 dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-2xl dark:shadow-black/20 dark:focus-within:border-white/15 dark:focus-within:bg-white/[0.06]">
              <textarea
                rows="3"
                placeholder="Hỏi về gói dịch vụ, tính năng, SEO, quy trình hoặc mô tả website anh/chị cần..."
                className="w-full resize-none bg-transparent px-5 pb-14 pt-5 text-[15px] leading-relaxed text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/30 md:px-6 md:pt-6 md:text-base"
              ></textarea>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between md:left-5 md:right-5">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-slate-500 dark:text-white/35">Online</span>
                </div>
                <button
                  type="submit"
                  disabled
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:scale-110 hover:shadow-primary/30 disabled:opacity-30 disabled:shadow-none disabled:hover:scale-100"
                  aria-label="Gửi câu hỏi"
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
                    className="lucide lucide-arrow-up h-4 w-4"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80"
              >
                Chọn gói phù hợp
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80"
              >
                Website là tài sản?
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80"
              >
                Website bán hàng
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80"
              >
                Web App
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary disabled:opacity-40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/15 dark:hover:bg-white/[0.06] dark:hover:text-white/80"
              >
                SEO Google
              </button>
            </div>
            <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-white/20">
              AI có thể nhầm lẫn. Báo giá và cam kết chính thức được xác nhận bằng văn bản.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
