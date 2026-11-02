import React from "react";
import { Link } from "react-router-dom";

export default function TemplateStore() {
  return (
    <div className="section-templatestore">
      <section
        id="kho-giao-dien"
        className="relative py-14 md:py-18 lg:py-22 bg-slate-50 transition-colors duration-500 dark:bg-[hsl(220_40%_6%)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-10 hidden h-16 w-16 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 sm:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white"></span>
        </span>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-10 md:mb-12 grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
            <div className=" md:col-span-8" data-motion="up" style={{ "--motion-delay": "0ms" }}>
              <div
                data-motion="up"
                className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs  text-slate-500 dark:text-white/45"
                style={{ "--motion-delay": "0ms" }}
              >
                <span className="text-primary">04</span>
                <span
                  aria-hidden="true"
                  className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                ></span>
                <span className="text-balance">KHO GIAO DIỆN</span>
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
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "0" }}
                  >
                    Kho<span className="sr-only"> </span>
                  </span>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "1" }}
                  >
                    mẫu<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "2" }}>
                    giao
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span className="split-word " style={{ "--i": "3" }}>
                    diện<span className="sr-only"> </span>
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
                      Website
                    </span>
                  </span>
                </span>
              </h2>
            </div>
            <div
              className="flex flex-col gap-4 md:col-span-4 md:col-start-9 md:self-end md:border-l md:border-slate-300 md:pl-5 md:dark:border-white/15 sm:flex-row sm:items-center sm:gap-5"
              data-motion="up"
              style={{ "--motion-delay": "80ms" }}
            >
              <div className="min-w-0 flex-1">
                <div
                  className="text-sm md:text-base text-slate-600 dark:text-white/55"
                  style={{ opacity: "0", transform: "translateY(16px)" }}
                >
                  Chọn ngành để tư vấn mẫu phù hợp — bấm vào sẽ kết nối Zalo ngay
                </div>
              </div>
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
                    transformOrigin: "100px 160px",
                    transform: "none",
                    opacity: "0",
                    transition:
                      "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
                  }}
                >
                  <rect
                    x="66"
                    y="44"
                    width="68"
                    height="112"
                    rx="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </g>
                <g
                  style={{
                    transformOrigin: "100px 160px",
                    transform: "none",
                    opacity: "0",
                    transition:
                      "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.25s, opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.25s",
                  }}
                >
                  <rect
                    x="66"
                    y="44"
                    width="68"
                    height="112"
                    rx="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
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
                  <g>
                    <rect
                      x="66"
                      y="44"
                      width="68"
                      height="112"
                      rx="9"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      fill="hsl(var(--primary) / 0.12)"
                    />
                    <rect
                      x="76"
                      y="56"
                      width="48"
                      height="30"
                      rx="4"
                      fill="hsl(var(--primary) / 0.28)"
                      stroke="none"
                    />
                    <path d="M 76 98 H 124" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                    <path
                      d="M 76 108 H 110"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M 76 118 H 118"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="76"
                      y="132"
                      width="30"
                      height="12"
                      rx="6"
                      fill="hsl(var(--art-neon-fill))"
                      stroke="none"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 max-w-5xl mx-auto mb-10 md:mb-12">
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 bg-primary text-white shadow-lg shadow-primary/20 opacity-0 translate-y-4"
              style={{ transitionDelay: "0ms" }}
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
                className="lucide lucide-layout-grid h-4 w-4 text-white"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Tất cả
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "30ms" }}
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
                className="lucide lucide-shopping-bag h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Bán hàng
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "60ms" }}
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
                className="lucide lucide-building2 h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
              Công ty
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "90ms" }}
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
                className="lucide lucide-house h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Bất động sản
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "120ms" }}
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
                className="lucide lucide-sofa h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
                <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                <path d="M4 18v2" />
                <path d="M20 18v2" />
                <path d="M12 4v9" />
              </svg>
              Nội thất
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "150ms" }}
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
                className="lucide lucide-hotel h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M10 22v-6.57" />
                <path d="M12 11h.01" />
                <path d="M12 7h.01" />
                <path d="M14 15.43V22" />
                <path d="M15 16a5 5 0 0 0-6 0" />
                <path d="M16 11h.01" />
                <path d="M16 7h.01" />
                <path d="M8 11h.01" />
                <path d="M8 7h.01" />
                <rect x="4" y="2" width="16" height="20" rx="2" />
              </svg>
              Khách sạn
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "180ms" }}
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
                className="lucide lucide-utensils-crossed h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                <path d="m2.1 21.8 6.4-6.3" />
                <path d="m19 5-7 7" />
              </svg>
              Nhà hàng
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "210ms" }}
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
                className="lucide lucide-plane h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              Du lịch
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "240ms" }}
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
                className="lucide lucide-car h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              Ôtô - Xe máy
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "270ms" }}
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
                className="lucide lucide-graduation-cap h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              Giáo dục
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "300ms" }}
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
                className="lucide lucide-newspaper h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
              Tin tức
            </button>
            <button
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-primary/40 hover:bg-sky-50/60 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60 dark:hover:border-primary/30 dark:hover:bg-primary/10 dark:hover:text-white opacity-0 translate-y-4"
              style={{ transitionDelay: "330ms" }}
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
                className="lucide lucide-file-text h-4 w-4 text-slate-400 group-hover:text-primary dark:text-white/40 dark:group-hover:text-primary"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              Landing Page
            </button>
          </div>
          <div className="-mx-4 [--marquee-bg:theme(colors.slate.50)] dark:[--marquee-bg:hsl(220_40%_6%)]">
            <div
              className="relative select-none overflow-hidden "
              style={{
                height: "365px",
                perspective: "1862px",
                perspectiveOrigin: "50% 20%",
                touchAction: "pan-y",
                cursor: "grab",
              }}
            >
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(-190px, 0px, 0px) rotateY(0deg) rotateZ(0deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 1 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 1"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/1.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 1 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(211.631px, 9.9346px, -62.0912px) rotateY(17.5764deg) rotateZ(1.22707deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 2 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 2"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/2.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 2 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.168722" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(575.761px, 38.8108px, -242.567px) rotateY(35.1529deg) rotateZ(2.45414deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 3 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 3"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/3.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 3 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.337444" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(868.392px, 83.9324px, -524.577px) rotateY(52.7293deg) rotateZ(3.6812deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 4 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 4"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/4.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 4 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.506165" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 5 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 5"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/5.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 5 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 6 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 6"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/6.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 6 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 7 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 7"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/7.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 7 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 8 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 8"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/8.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 8 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 9 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 9"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/9.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 9 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 10 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 10"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/10.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 10 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 11 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 11"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/11.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 11 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 12 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 12"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/12.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 12 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 13 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 13"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/13.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 13 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 14 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 14"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/14.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 14 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 15 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 15"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/15.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 15 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 16 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 16"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/16.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 16 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 17 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 17"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/17.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 17 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(-1248.39px, 83.9324px, -524.577px) rotateY(-52.7293deg) rotateZ(-3.6812deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 18 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 18"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/18.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 18 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.506165" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(-955.761px, 38.8108px, -242.567px) rotateY(-35.1529deg) rotateZ(-2.45414deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 19 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 19"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/19.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 19 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.337444" }}
                ></span>
              </div>
              <div
                className="absolute left-1/2 top-6"
                style={{
                  width: "380px",
                  height: "285px",
                  willChange: "transform",
                  visibility: "visible",
                  backfaceVisibility: "hidden",
                  transform:
                    "translate3d(-591.631px, 9.9346px, -62.0912px) rotateY(-17.5764deg) rotateZ(-1.22707deg) skewX(0deg)",
                }}
              >
                <a
                  href="https://zalo.me/0393312336"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Xem mẫu giao diện 20 — nhắn Zalo tư vấn"
                  className="group relative block h-full w-full overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-colors hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <img
                    alt="Mẫu giao diện website 20"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    src="/media/tddtech/kho-giao-dien/v1/20.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-white/90">
                      Mẫu 20 · nhắn Zalo tư vấn
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
                      className="lucide lucide-external-link h-3.5 w-3.5 text-white/80"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                  style={{ opacity: "0.168722" }}
                ></span>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32"
                style={{
                  background:
                    "linear-gradient(to right, var(--marquee-bg, hsl(var(--background))), transparent)",
                }}
              ></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32"
                style={{
                  background:
                    "linear-gradient(to left, var(--marquee-bg, hsl(var(--background))), transparent)",
                }}
              ></span>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-12 transition-all duration-500 opacity-0">
            <a
              href="https://zalo.me/0393312336"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
              Tư vấn thiết kế riêng
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
