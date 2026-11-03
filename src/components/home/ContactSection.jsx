import React from "react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <div className="section-contactsection">
      <section id="contact-section" className="relative overflow-hidden py-10 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            src="/bg/contact-bg.webp"
          />
          <div className="absolute inset-0 bg-slate-50/90 dark:bg-black/75 transition-colors duration-500"></div>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-20 w-20 sm:block"
          style={{
            backgroundColor: "rgb(212, 255, 63)",
            borderBottomLeftRadius: "100%",
          }}
        ></span>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-7 grid grid-cols-1 items-end gap-6 md:mb-12 md:grid-cols-12 md:gap-10">
            <div className=" md:col-span-7" data-motion="up" style={{ "--motion-delay": "0ms" }}>
              <div
                data-motion="up"
                className="mb-5 flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-[0.24em] sm:text-xs  text-slate-500 dark:text-white/45"
                style={{ "--motion-delay": "0ms" }}
              >
                <span className="text-primary">09</span>
                <span
                  aria-hidden="true"
                  className="h-px w-7 flex-none bg-slate-300 dark:bg-white/20"
                ></span>
                <span className="text-balance">LIÊN HỆ</span>
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
                    Trao<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "1" }}>
                    đổi<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "2" }}>
                    dự<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "3" }}>
                    án
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span
                    className="split-word text-slate-500 dark:text-white/55"
                    style={{ "--i": "3" }}
                  >
                    website<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "4" }}>
                    &
                  </span>
                  <span className="sr-only"> </span>
                </span>
                <span className="flex flex-wrap items-baseline " style={{ gap: "0.02em 0.26em" }}>
                  <span className="split-word " style={{ "--i": "6" }}>
                    web<span className="sr-only"> </span>
                  </span>
                  <span className="split-word " style={{ "--i": "7" }}>
                    app
                  </span>
                </span>
              </h2>
            </div>
            <div
              className="flex flex-col gap-4 md:col-span-5 md:border-l md:border-slate-300 md:pl-6 md:dark:border-white/15 sm:flex-row sm:items-center sm:gap-5"
              data-motion="up"
              style={{ "--motion-delay": "80ms" }}
            >
              <p className="min-w-0 max-w-sm flex-1 text-base text-slate-600 dark:text-gray-400 md:text-lg">
                Một tin nhắn là đủ để bắt đầu.
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
                <path
                  d="M 84 120 C 102 100 124 96 138 82"
                  stroke="hsl(var(--primary) / 0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                  opacity="1"
                />
                <g style={{ opacity: "1" }}>
                  <g>
                    <path
                      d="M 78 124 L 34 146 L 52 150 L 46 162 Z"
                      fill="hsl(var(--primary))"
                      stroke="none"
                    />
                    <path
                      d="M 78 124 L 52 150"
                      stroke="hsl(var(--primary-foreground))"
                      strokeWidth="1.5"
                      strokeOpacity="0.5"
                    />
                  </g>
                </g>
                <g
                  style={{
                    transformOrigin: "150px 56px",
                    transform: "none",
                    opacity: "1",
                  }}
                >
                  <g transform="translate(150, 56)">
                    <g>
                      <g transform="translate(-150, -56)">
                        <rect
                          x="122"
                          y="38"
                          width="56"
                          height="36"
                          rx="10"
                          fill="hsl(var(--primary) / 0.2)"
                          stroke="none"
                        />
                        <path
                          d="M 134 74 L 134 84 L 146 74 Z"
                          fill="hsl(var(--primary) / 0.2)"
                          stroke="none"
                        />
                        <path
                          d="M 134 50 H 166 M 134 62 H 154"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <text
                  x="46"
                  y="172"
                  fill="currentColor"
                  stroke="none"
                  fontSize="16"
                  fontWeight="800"
                  letterSpacing="-0.3"
                  style={{ opacity: "1" }}
                >
                  5 phút
                </text>
              </svg>
            </div>
          </div>
          <div
            data-motion="card"
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-900/20 sm:px-10 md:px-14 md:py-14"
            style={{ "--motion-delay": "80ms" }}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[120px]"></div>
            <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                  Bắt đầu trong 5 phút
                </p>
                <h3 className="mt-3 text-balance text-3xl font-black leading-[1.15] tracking-[-0.02em] md:text-5xl md:leading-[1.1]">
                  Gửi website hiện tại hoặc ý tưởng của anh chị.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/60 md:text-base">
                  TechRent xem trước, rồi đề xuất hướng làm và báo giá riêng.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-wrap">
                <div className="ContactChannelPair_pair__7IVaN" data-contact-channel-pair="true">
                  <a
                    href="https://zalo.me/0813044817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
                  >
                    <img alt="" className="h-6 w-6 rounded-sm" src="/zalo-icon.png" /> Trao đổi qua
                    Zalo
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Liên hệ qua Facebook"
                    className="FacebookContactLink_button__k7FTi inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
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
                    <span>Trao đổi qua Facebook</span>
                  </a>
                </div>
                <a
                  href="tel:0813044817"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-white/20 px-6 text-base font-bold text-white transition-colors hover:bg-white/10"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                  </svg>{" "}
                  Gọi 0813044817
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
