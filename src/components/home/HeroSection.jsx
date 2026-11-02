import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="section-herosection">
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200 pb-16 pt-36 dark:border-white/[0.06] sm:pt-40 lg:pb-24 lg:pt-44"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            playsInline
            preload="auto"
            disablePictureInPicture=""
            className="h-full w-full object-cover transition-opacity duration-1000"
            muted
            style={{ opacity: "0" }}
          >
            <source src="/media/tddtech/video/v1/hero/hero-bg-dark.webm" type="video/webm" />
            <source src="/media/tddtech/video/v1/hero/hero-bg-dark.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-50/45 dark:bg-[rgba(9,13,21,0.45)] md:bg-transparent md:bg-gradient-to-r md:from-slate-50/80 md:via-slate-50/35 md:to-transparent md:dark:bg-transparent md:dark:from-[rgba(9,13,21,0.8)] md:dark:via-[rgba(9,13,21,0.3)] md:dark:to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-slate-50 dark:to-[hsl(220_40%_6%)]"></div>
        </div>
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="pointer-events-none absolute inset-0 opacity-50 max-md:hidden bg-[linear-gradient(to_right,rgba(0,180,216,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.04)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.05)_1px,transparent_1px)]"></div>
        <div className="container relative mx-auto px-4">
          <div className="grid gap-9 lg:grid-cols-[1.35fr_1fr] lg:gap-x-16 lg:gap-y-0">
            <div className="min-w-0">
              <div style={{ opacity: "1", transform: "none" }}>
                <span className="inline-flex items-center gap-2.5 border-b-2 border-slate-900 pb-2 text-[0.7rem] font-black uppercase tracking-[0.24em] text-slate-900 dark:border-white dark:text-white sm:text-xs  ">
                  <span className="text-primary">/</span>Thiết kế & phát triển
                </span>
              </div>
              <h1 className="mt-7 font-black uppercase leading-[0.96] tracking-[-0.04em] text-slate-900 dark:text-white">
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(2.6rem, 11vw, 6.4rem)",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  Website
                </span>
                <span
                  className="flex flex-wrap items-baseline"
                  style={{
                    gap: "0.25rem clamp(0.75rem, 2.5vw, 2rem)",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <span style={{ fontSize: "clamp(2.6rem, 11vw, 6.4rem)" }}>là</span>
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="absolute rounded-sm"
                      style={{
                        inset: "0.04em -0.75rem -0.02em",
                        rotate: "-2deg",
                        backgroundColor: "rgb(212, 255, 63)",
                      }}
                    ></span>
                    <span
                      className="relative z-10 leading-[0.9]"
                      style={{
                        fontSize: "clamp(2.6rem, 11vw, 6.4rem)",
                        color: "rgb(15, 23, 42)",
                        paintOrder: "stroke",
                        WebkittextStroke: "0.05em rgb(212, 255, 63)",
                      }}
                    >
                      tài sản
                    </span>
                  </span>
                </span>
                <span
                  className="relative mt-4 inline-block font-extrabold normal-case tracking-tight text-primary"
                  style={{
                    fontSize: "clamp(1.5rem, 5.5vw, 3rem)",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  số của doanh nghiệp.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 320 22"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute -bottom-1 left-0 h-[0.42em] w-full overflow-visible"
                  >
                    <path
                      d="M4 13.5C42 6.5 96 4.2 148 6.1c42 1.5 88 5.4 126 10.4C240 13.8 196 11.2 152 10.6c-48-.7-102 1.4-148 7.2"
                      fill="currentColor"
                      className="text-primary/70"
                      opacity="1"
                      pathLength="1"
                      strokeDashoffset="0px"
                      strokeDasharray="1px 1px"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div className="min-w-0 lg:flex lg:items-end lg:border-l lg:border-slate-200 lg:pb-10 lg:pl-10 lg:dark:border-white/10">
              <div className="max-w-xl" style={{ opacity: "1", transform: "none" }}>
                <p className="text-base leading-8 text-slate-600 dark:text-white/60 lg:text-[17px]">
                  Đa số chủ doanh nghiệp coi website là khoản chi làm một lần rồi để đó. TDDTech coi
                  đó là tài sản: xây đúng nền móng, anh chị sở hữu 100%, rồi chúng tôi bảo vệ, giữ
                  gìn và phát triển nó mỗi tháng để website mang về khách hàng.
                </p>
              </div>
            </div>
            <div className="min-w-0 lg:pt-10">
              <div
                className="flex flex-wrap items-center"
                style={{ gap: "1rem 2.5rem", opacity: "1", transform: "none" }}
              >
                <button className="ximi-button inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 group h-14 gap-3 rounded-full bg-slate-900 px-8 text-base font-bold text-white shadow-[0_10px_30px_-8px_rgba(15,23,42,0.5)] transition-colors hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white">
                  <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                  Trao đổi về dự án
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 dark:bg-slate-950/10">
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
                  </span>
                </button>
                <a
                  href="/du-an"
                  className="group inline-flex items-center gap-2 border-b-2 border-slate-900 pb-1.5 text-base font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white"
                >
                  Xem dự án đã thực hiện
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
                    className="lucide lucide-arrow-up-right h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="min-w-0 lg:border-l lg:border-slate-200 lg:pl-10 lg:pt-10 lg:dark:border-white/10">
              <dl
                className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-200 pt-7 dark:border-white/10 lg:-mt-10 lg:pt-10"
                style={{ opacity: "1", transform: "none" }}
              >
                <div>
                  <dt className="text-[1.75rem] font-black leading-none text-slate-900 dark:text-white">
                    150+
                  </dt>
                  <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-white/45">
                    dự án đã triển khai, tính cả trước khi lập công ty
                  </dd>
                </div>
                <div>
                  <dt className="text-[1.75rem] font-black leading-none text-slate-900 dark:text-white">
                    100%
                  </dt>
                  <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-white/45">
                    Mã nguồn, tên miền, dữ liệu đứng tên doanh nghiệp
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-20" aria-hidden="true">
          <div
            className="relative select-none overflow-hidden "
            style={{
              height: "350px",
              perspective: "2288px",
              perspectiveOrigin: "50% 20%",
              touchAction: "pan-y",
              cursor: "grab",
            }}
          >
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-1232px, 61.3913px, -383.696px) rotateY(-40.077deg) rotateZ(-2.7979deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/5.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.408504" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-908.369px, 27.4111px, -171.319px) rotateY(-26.4719deg) rotateZ(-1.84808deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/8.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.277904" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-543.866px, 6.5646px, -41.0288px) rotateY(-12.8667deg) rotateZ(-0.898268deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/18.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.147304" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-158.943px, 0.021709px, -0.135681px) rotateY(0.738371deg) rotateZ(0.051548deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/12.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.0308802" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(224.798px, 8.14961px, -50.9351px) rotateY(14.3435deg) rotateZ(1.00136deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/20.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.16148" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(585.822px, 30.4922px, -190.576px) rotateY(27.9486deg) rotateZ(1.95118deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/4.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.29208" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(903.868px, 65.7955px, -411.222px) rotateY(41.5537deg) rotateZ(2.901deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/3.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.422679" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(1161.09px, 112.078px, -700.49px) rotateY(55.1588deg) rotateZ(3.85081deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/6.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.553279" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/13.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/17.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/15.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/7.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/9.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/2.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/19.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/1.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-1584.36px, 127.792px, -798.701px) rotateY(-59.2563deg) rotateZ(-4.13687deg) skewX(-1.90253deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/11.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.644921" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-1595.42px, 130.814px, -817.585px) rotateY(-60.0237deg) rotateZ(-4.19044deg) skewX(-1.36233deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/10.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.630679" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "hidden",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-1596.32px, 131.061px, -819.134px) rotateY(-60.0864deg) rotateZ(-4.19482deg) skewX(-0.854098deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/14.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.610952" }}
              ></span>
            </div>
            <div
              className="absolute left-1/2 top-6"
              style={{
                width: "360px",
                height: "270px",
                willChange: "transform",
                visibility: "visible",
                backfaceVisibility: "hidden",
                transform:
                  "translate3d(-1496.58px, 106.598px, -666.239px) rotateY(-53.6821deg) rotateZ(-3.74772deg) skewX(-0.594808deg)",
              }}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_50px_-22px_rgba(15,23,42,0.45)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(0,180,216,0.5)] dark:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  src="/media/tddtech/kho-giao-dien/v1/16.webp"
                />
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(15, 23, 42, 0.08)" }}
                ></span>
              </figure>
              <span
                className="pointer-events-none absolute inset-0 rounded-[14px] bg-slate-950"
                style={{ opacity: "0.539104" }}
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
          <div className="container mx-auto px-4">
            <a
              href="/#kho-giao-dien"
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-slate-900 pb-1.5 text-sm font-bold text-slate-900 transition-colors hover:border-primary hover:text-primary dark:border-white dark:text-white"
            >
              Xem kho mẫu giao diện
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
                className="lucide lucide-arrow-down h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
