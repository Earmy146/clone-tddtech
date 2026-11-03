import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HERO_TEMPLATES = [
  { id: 1, img: "/media/techrent/kho-giao-dien/v1/1.webp", name: "Modern Enterprise" },
  { id: 3, img: "/media/techrent/kho-giao-dien/v1/3.webp", name: "SaaS Platform" },
  { id: 4, img: "/media/techrent/kho-giao-dien/v1/4.webp", name: "Creative Agency" },
  { id: 5, img: "/media/techrent/kho-giao-dien/v1/5.webp", name: "Corporate Portal" },
  { id: 6, img: "/media/techrent/kho-giao-dien/v1/6.webp", name: "E-Commerce Luxury" },
  { id: 9, img: "/media/techrent/kho-giao-dien/v1/9.webp", name: "FinTech Dashboard" },
  { id: 10, img: "/media/techrent/kho-giao-dien/v1/10.webp", name: "B2B Logistics" },
  { id: 11, img: "/media/techrent/kho-giao-dien/v1/11.webp", name: "Industrial Tech" },
  { id: 12, img: "/media/techrent/kho-giao-dien/v1/12.webp", name: "Medical Healthcare" },
  { id: 15, img: "/media/techrent/kho-giao-dien/v1/15.webp", name: "Real Estate Luxury" },
  { id: 17, img: "/media/techrent/kho-giao-dien/v1/17.webp", name: "Education Academy" },
  { id: 18, img: "/media/techrent/kho-giao-dien/v1/18.webp", name: "Hospitality Resort" },
];

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-scroll carousel
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let animId;
    const speed = 0.8;

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Infinite loop wrap
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <div className="section-herosection">
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200 pb-12 pt-32 dark:border-white/[0.06] sm:pt-36 lg:pb-20 lg:pt-40"
      >
        {/* Background ambient video & lighting */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            playsInline
            preload="metadata"
            muted
            onLoadedData={() => setVideoLoaded(true)}
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-40 dark:opacity-25" : "opacity-0"
            }`}
          >
            <source src="/media/techrent/video/v1/hero/hero-bg-light.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-slate-50/60 dark:bg-[rgba(9,13,21,0.65)] md:bg-gradient-to-r md:from-slate-50/90 md:via-slate-50/50 md:to-transparent md:dark:from-[rgba(9,13,21,0.92)] md:dark:via-[rgba(9,13,21,0.55)] md:dark:to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50 dark:to-[hsl(220_40%_6%)]"></div>
        </div>

        {/* Ambient neon radial glows */}
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/15 blur-[120px]"></div>
        <div className="pointer-events-none absolute right-10 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>
        <div className="pointer-events-none absolute inset-0 opacity-40 max-md:hidden bg-[linear-gradient(to_right,rgba(0,180,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.05)_1px,transparent_1px)]"></div>

        {/* Hero Main Content */}
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-x-16 lg:gap-y-0">
            {/* Left column */}
            <div className="min-w-0">
              <div className="animate-fadeIn">
                <span className="inline-flex items-center gap-2.5 border-b-2 border-slate-900 pb-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-slate-900 dark:border-white dark:text-white sm:text-xs">
                  <span className="text-primary font-black">/</span> Thiết kế &amp; phát triển website
                </span>
              </div>

              <h1 className="mt-6 font-black uppercase leading-[0.96] tracking-[-0.04em] text-slate-900 dark:text-white">
                <span
                  className="block animate-fadeIn"
                  style={{ fontSize: "clamp(2.6rem, 10vw, 6.2rem)" }}
                >
                  Website
                </span>
                <span
                  className="flex flex-wrap items-baseline gap-2 sm:gap-4 animate-fadeIn"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span style={{ fontSize: "clamp(2.6rem, 10vw, 6.2rem)" }}>là</span>
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="absolute rounded-md"
                      style={{
                        inset: "0.08em -0.6rem -0.02em",
                        transform: "rotate(-2deg)",
                        backgroundColor: "rgb(212, 255, 63)",
                      }}
                    ></span>
                    <span
                      className="relative z-10 leading-[0.9] text-slate-950 font-black"
                      style={{
                        fontSize: "clamp(2.6rem, 10vw, 6.2rem)",
                      }}
                    >
                      tài sản
                    </span>
                  </span>
                </span>
                <span
                  className="relative mt-3 inline-block font-extrabold normal-case tracking-tight text-primary animate-fadeIn"
                  style={{
                    fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
                    animationDelay: "0.2s",
                  }}
                >
                  số của doanh nghiệp.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 320 22"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-[0.38em] w-full overflow-visible text-primary/70"
                  >
                    <path
                      d="M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Right column: Philosophy narrative */}
            <div className="min-w-0 lg:flex lg:items-end lg:border-l lg:border-slate-200 lg:pb-8 lg:pl-10 lg:dark:border-white/10">
              <div className="max-w-xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <p className="text-base leading-8 text-slate-600 dark:text-white/70 lg:text-[17px]">
                  Đa số chủ doanh nghiệp coi website là khoản chi làm một lần rồi để đó. TechRent coi
                  đó là tài sản: xây đúng nền móng, anh chị sở hữu 100%, rồi chúng tôi bảo vệ, giữ
                  gìn và phát triển nó mỗi tháng để website mang về khách hàng đều đặn.
                </p>
              </div>
            </div>

            {/* Actions CTA */}
            <div className="min-w-0 lg:pt-8">
              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                <a
                  href="https://zalo.me/0813044817"
                  target="_blank"
                  rel="noreferrer"
                  className="ximi-button group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.5)] transition-all duration-300 hover:scale-[1.02] hover:bg-primary hover:shadow-[0_12px_35px_-6px_rgba(0,212,255,0.6)] dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white"
                >
                  <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                  Trao đổi về dự án
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 dark:bg-slate-950/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </a>

                <Link
                  to="/du-an"
                  className="group inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1.5 text-base font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white"
                >
                  Xem dự án đã thực hiện
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Credibility stats */}
            <div className="min-w-0 lg:border-l lg:border-slate-200 lg:pl-10 lg:pt-8 lg:dark:border-white/10">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-200 pt-6 dark:border-white/10 lg:-mt-8 lg:pt-8">
                <div>
                  <dt className="text-[1.85rem] font-black leading-none text-slate-900 dark:text-white">
                    150+
                  </dt>
                  <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-white/50">
                    dự án đã triển khai chuẩn tài sản
                  </dd>
                </div>
                <div>
                  <dt className="text-[1.85rem] font-black leading-none text-primary">
                    100%
                  </dt>
                  <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-white/50">
                    Mã nguồn, tên miền thuộc sở hữu của anh chị
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* 3D Interactive Infinite Mockup Showcase */}
        <div className="relative mt-12 lg:mt-16 overflow-hidden">
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto py-6 px-4 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              perspective: "1200px",
            }}
          >
            {/* Double the list for seamless infinite wrapping */}
            {[...HERO_TEMPLATES, ...HERO_TEMPLATES].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative flex-none w-[280px] sm:w-[340px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 bg-white/70 shadow-[0_16px_40px_-16px_rgba(15,23,42,0.18)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_50px_-12px_rgba(0,212,255,0.35)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Giao diện mẫu
                    </span>
                    <h3 className="text-base font-bold leading-tight">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
