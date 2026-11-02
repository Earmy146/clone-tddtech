import React from "react";
import { Link } from "react-router-dom";

export default function FAQSection() {
  return (
    <div className="section-faqsection">
      <section id="faq" className="relative overflow-hidden py-10 md:py-16 lg:py-20">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            src="/bg/office-night.webp"
          />
          <div className="absolute inset-0 bg-slate-50/90 dark:bg-black/70 transition-colors duration-500"></div>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 sm:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white"></span>
        </span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div
              className="lg:col-span-5 lg:sticky lg:top-24"
              data-motion="up"
              style={{ "--motion-delay": "0ms" }}
            >
              <div className=" ">
                <div
                  data-motion="up"
                  className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs  text-slate-500 dark:text-white/45"
                  style={{ "--motion-delay": "0ms" }}
                >
                  <span className="text-primary">07</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                  ></span>
                  <span className="text-balance">CÂU HỎI THƯỜNG GẶP</span>
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
                      Giải<span className="sr-only"> </span>
                    </span>
                    <span className="split-word " style={{ "--i": "1" }}>
                      đáp
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                    <span
                      className="split-word text-slate-500 dark:text-white/55"
                      style={{ "--i": "3" }}
                    >
                      nhanh<span className="sr-only"> </span>
                    </span>
                    <span className="split-word " style={{ "--i": "4" }}>
                      mọi
                    </span>
                    <span className="sr-only"> </span>
                  </span>
                  <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                    <span className="split-word relative inline-block" style={{ "--i": "6" }}>
                      <span className="relative z-10 ">thắc</span>
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
                    <span className="split-word relative inline-block" style={{ "--i": "7" }}>
                      <span className="relative z-10 ">mắc</span>
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
              <div className="mt-7 border-l-2 border-slate-900 pl-5 dark:border-white/25 md:mt-8">
                <div
                  className="max-w-sm text-base text-slate-600 dark:text-gray-400 md:text-lg"
                  style={{ opacity: "0", transform: "translateY(16px)" }}
                >
                  Giải đáp nhanh những thắc mắc phổ biến về thiết kế website, website bán hàng và
                  web app theo yêu cầu
                </div>
              </div>
              <svg
                viewBox="0 0 200 200"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                className="block overflow-visible mt-6 hidden h-36 w-36 text-slate-500 dark:text-white/40 sm:block md:mt-8 md:h-44 md:w-44"
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
                  <rect
                    x="28"
                    y="28"
                    width="144"
                    height="32"
                    rx="8"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="hsl(var(--primary) / 0.12)"
                  />
                  <path
                    d="M 42 44 H 120"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />
                  <path d="M 150 44 H 162" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <path
                    d="M 156 38 V 50"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    opacity="0"
                  />
                </g>
                <g
                  style={{
                    transform: "translate(0px, 8px)",
                    opacity: "0",
                    transition:
                      "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s",
                  }}
                >
                  <rect
                    x="28"
                    y="92"
                    width="144"
                    height="32"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 42 108 H 108"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                  />
                  <path d="M 150 108 H 162" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <path
                    d="M 156 102 V 114"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    opacity="1"
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
                  <rect
                    x="28"
                    y="136"
                    width="144"
                    height="32"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 42 152 H 108"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                  />
                  <path d="M 150 152 H 162" stroke="hsl(var(--primary))" strokeWidth="2" />
                  <path
                    d="M 156 146 V 158"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    opacity="1"
                  />
                </g>
                <path
                  d="M 42 70 H 130 M 42 82 H 104"
                  stroke="hsl(var(--art-neon))"
                  strokeWidth="3"
                  strokeDasharray="150"
                  strokeDashoffset="150"
                  style={{
                    transition: "stroke-dashoffset 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
                  }}
                />
              </svg>
            </div>
            <div
              className="space-y-4 lg:col-span-7"
              data-motion="up"
              style={{ "--motion-delay": "80ms" }}
            >
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-0"
                    aria-expanded="false"
                    aria-controls="faq-panel-0"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      Vì sao TDDTech nói website là tài sản chứ không phải chi phí?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.07s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.07s",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-1"
                    aria-expanded="false"
                    aria-controls="faq-panel-1"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      TDDTech tập trung làm những gì?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.14s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.14s",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-2"
                    aria-expanded="false"
                    aria-controls="faq-panel-2"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      Làm website hết bao nhiêu tiền? Có bao gồm hosting không?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.21s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.21s",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-3"
                    aria-expanded="false"
                    aria-controls="faq-panel-3"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      Gói vận hành hằng tháng gồm những gì?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.28s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.28s",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-4"
                    aria-expanded="false"
                    aria-controls="faq-panel-4"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      TDDTech có cam kết doanh thu không?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  opacity: "0",
                  transform: "translateY(34px)",
                  transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
                  willChange: "transform, opacity",
                }}
              >
                <div className="surface-card bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-md dark:bg-secondary/30 dark:border-primary/10 dark:hover:border-primary/30 transition-all">
                  <button
                    id="faq-trigger-5"
                    aria-expanded="false"
                    aria-controls="faq-panel-5"
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-sky-50/50 dark:hover:bg-primary/5 md:p-6"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      Làm website mất bao lâu? Quy trình như thế nào?
                    </span>
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
                      className="lucide lucide-chevron-down h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ease-out"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-xl border border-dashed border-slate-300 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/15 dark:text-white/70"
              >
                Xem thêm 5 câu hỏi
              </button>
            </div>
          </div>
          <div className="mt-10 text-center md:mt-14">
            <p
              className="mb-3 text-sm text-slate-600 dark:text-gray-400 md:mb-4 md:text-base"
              data-motion="up"
              style={{ "--motion-delay": "0ms" }}
            >
              Còn thắc mắc? Nhắn Zalo để được tư vấn miễn phí
            </p>
            <div className="ContactChannelPair_pair__7IVaN" data-contact-channel-pair="true">
              <a
                href="https://zalo.me/0393312336"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 mt-3 inline-flex h-12 w-60 max-w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all shadow-md"
              >
                <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                Nhắn Zalo
              </a>
              <a
                href="https://www.facebook.com/dungchuche25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Liên hệ qua Facebook"
                className="FacebookContactLink_button__k7FTi mx-1 mt-3 inline-flex h-12 w-60 max-w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all shadow-md"
              >
                <svg
                  className="h-5 w-5 flex-none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.3C17.4 1.1 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z" />
                </svg>
                <span>Nhắn Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
