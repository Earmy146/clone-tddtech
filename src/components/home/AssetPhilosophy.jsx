import React from "react";
import { Link } from "react-router-dom";

export default function AssetPhilosophy() {
  return (
    <div className="section-assetphilosophy">
      <section
        id="tai-san"
        data-no-motion="true"
        aria-label="Chi phí hay tài sản"
        className="measure-height relative h-[500svh] bg-[#f4f6f9] dark:bg-[#0a0f18] lg:h-[540svh]"
      >
        <h2 className="sr-only">Chi phí hay tài sản?</h2>
        <p className="sr-only">
          Phần lớn chủ doanh nghiệp coi website là chi phí: làm một lần rồi bỏ đó, website chậm dần,
          rớt khỏi Google và phải làm lại. Người coi website là tài sản thì có khách đều mỗi tháng —
          như vàng, nhà đất, cổ phiếu, tài sản được giữ gìn thì sinh lời. TDDTech bảo vệ, giữ gìn và
          phát triển website của anh chị mỗi tháng.
        </p>
        <div aria-hidden="true" className="sticky top-0 h-[100svh] overflow-hidden">
          <div className="absolute inset-0 z-0" style={{ opacity: "1", transform: "none" }}>
            <canvas
              className="absolute inset-0 h-full w-full"
              data-engine="three.js r160"
              width="1720"
              height="1000"
            ></canvas>
          </div>
          <div className="absolute z-10" style={{ left: "72px", top: "154px", width: "597.222px" }}>
            <div className="grid text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-white/50 sm:text-xs">
              <span
                className="col-start-1 row-start-1 flex items-center gap-3"
                style={{ opacity: "0" }}
              >
                <span className="h-px w-8 bg-current"></span>01 — Chi phí
              </span>
              <span
                className="col-start-1 row-start-1 flex items-center gap-3"
                style={{ opacity: "0" }}
              >
                <span className="h-px w-8 bg-current"></span>02 — Bỏ quên
              </span>
            </div>
            <p
              className="mt-4 font-black leading-[1.08] tracking-[-0.035em] text-[#0b1220] dark:text-white"
              style={{ fontSize: "61.92px" }}
            >
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  Phần
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  lớn
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  chủ
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  doanh
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  nghiệp
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  coi
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  website
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  là
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  <span className="relative inline-block text-slate-400 dark:text-white/40">
                    chi phí.
                    <span
                      className="absolute -inset-x-[0.04em] top-[54%] h-[0.085em] origin-left rounded-full bg-[#0b1220] dark:bg-white"
                      style={{ transform: "scaleX(0)" }}
                    ></span>
                  </span>
                </span>
              </span>
            </p>
            <div className="mt-3 grid max-w-md text-[14.5px] leading-[1.55] text-slate-600 dark:text-white/60 sm:mt-5 sm:text-[17px] sm:leading-[1.65]">
              <p
                className="col-start-1 row-start-1"
                style={{ opacity: "0", transform: "translateY(18px)" }}
              >
                Làm một lần cho xong, ghi vào sổ như mọi khoản chi khác — rồi cất đi.
              </p>
              <p
                className="col-start-1 row-start-1"
                style={{ opacity: "0", transform: "translateY(18px)" }}
              >
                Không ai trông nom: năm đầu chậm dần, năm sau rớt khỏi Google, năm thứ ba phải làm
                lại từ đầu.
              </p>
            </div>
          </div>
          <div
            className="absolute z-10 grid text-white"
            style={{ left: "72px", top: "154px", width: "597.222px" }}
          >
            <div className="col-start-1 row-start-1">
              <p
                className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs"
                style={{ opacity: "0" }}
              >
                <span className="h-px w-8 bg-current"></span>03 — Tài sản
              </p>
              <p
                className="mt-4 font-black leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "61.92px" }}
              >
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    Người
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    coi
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    nó
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    là
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    <span className="relative inline-block">
                      tài sản
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 select-none"
                        style={{ clipPath: "inset(-30% 114% -30% -14%)" }}
                      >
                        <span className="absolute -inset-x-[0.12em] bottom-[0.02em] top-[0.14em] -rotate-2 rounded-sm bg-[#d4ff3f]"></span>
                        <span className="relative text-[#0f172a]">tài sản</span>
                      </span>
                    </span>
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    thì
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    có
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    khách
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    đều
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    mỗi
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    tháng.
                  </span>
                </span>
              </p>
              <p
                className="mt-3 max-w-md text-[14.5px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[17px] sm:leading-[1.65]"
                style={{ opacity: "0", transform: "translateY(18px)" }}
              >
                Như vàng, nhà đất, cổ phiếu: tài sản được giữ gìn thì sinh lời. Website đứng tên
                doanh nghiệp anh chị và làm việc 24/7.
              </p>
            </div>
            <div className="col-start-1 row-start-1">
              <p
                className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80 sm:text-xs"
                style={{ opacity: "0" }}
              >
                <span className="h-px w-8 bg-current"></span>04 — Vận hành
              </p>
              <p
                className="mt-4 font-black leading-[1.08] tracking-[-0.035em]"
                style={{ fontSize: "61.92px" }}
              >
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    <span className="text-cyan-300">TDDTech</span>
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    bảo
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    vệ,
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    giữ
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    gìn
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    và
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    phát
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    triển
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    nó
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    —
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    mỗi
                  </span>
                </span>{" "}
                <span className="rise-mask">
                  <span
                    className="inline-block"
                    style={{
                      transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                      transformOrigin: "50% 100% 0px",
                    }}
                  >
                    tháng.
                  </span>
                </span>
              </p>
              <p
                className="mt-3 max-w-md text-[14.5px] leading-[1.55] text-white/70 sm:mt-5 sm:text-[17px] sm:leading-[1.65]"
                style={{ opacity: "0", transform: "translateY(18px)" }}
              >
                Sao lưu, giám sát, cập nhật, SEO và nội dung — báo cáo số liệu thật ngày 1 hằng
                tháng.
              </p>
            </div>
          </div>
          <div
            data-anchor="slabTR"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div className="-translate-x-full -translate-y-full pb-2 pr-1" style={{ opacity: "0" }}>
              <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold shadow-[0_12px_30px_-12px_rgba(15,23,42,0.5)] sm:text-xs bg-white text-slate-800 ring-1 ring-slate-200">
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
                  className="lucide lucide-search h-3.5 w-3.5 text-slate-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                Google
                <span className="relative inline-grid">
                  <span
                    className="col-start-1 row-start-1 text-emerald-600"
                    style={{ opacity: "1" }}
                  >
                    Trang 1
                  </span>
                  <span className="col-start-1 row-start-1 text-rose-600" style={{ opacity: "0" }}>
                    Trang 3 ↓
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            data-anchor="slabTL"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div className="-translate-y-full pb-2" style={{ opacity: "0" }}>
              <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold shadow-[0_12px_30px_-12px_rgba(15,23,42,0.5)] sm:text-xs bg-rose-50 text-rose-600 ring-1 ring-rose-200">
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
                  className="lucide lucide-triangle-alert h-3.5 w-3.5"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                Không bảo mật
              </div>
            </div>
          </div>
          <div
            data-anchor="chartTL"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <p
              className="-translate-y-full whitespace-nowrap pb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-white/45 sm:text-[11px]"
              style={{ opacity: "0" }}
            >
              Giá trị website theo thời gian
            </p>
          </div>
          <div
            data-anchor="y0"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div className="whitespace-nowrap pt-1 " style={{ opacity: "0" }}>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]">
                Bàn giao
              </p>
              <p className="text-[10.5px] leading-tight sm:text-[13px]  text-slate-500 dark:text-white/55 ">
                Mới, nhanh
              </p>
            </div>
          </div>
          <div
            data-anchor="y1"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="whitespace-nowrap pt-1 -translate-x-1/2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]">
                Năm 1
              </p>
              <p className="text-[10.5px] leading-tight sm:text-[13px]  text-slate-500 dark:text-white/55 ">
                Chậm dần
              </p>
            </div>
          </div>
          <div
            data-anchor="y2"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="whitespace-nowrap pt-1 -translate-x-1/2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]">
                Năm 2
              </p>
              <p className="text-[10.5px] leading-tight sm:text-[13px]  text-slate-500 dark:text-white/55 ">
                Rớt Google
              </p>
            </div>
          </div>
          <div
            data-anchor="y3"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="whitespace-nowrap pt-1 -translate-x-full text-right"
              style={{ opacity: "0" }}
            >
              <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-800 dark:text-white/85 sm:text-xs sm:tracking-[0.18em]">
                Năm 3
              </p>
              <p className="text-[10.5px] leading-tight sm:text-[13px]  font-bold text-rose-700 dark:text-rose-300 ">
                Phải làm lại
              </p>
            </div>
          </div>
          <div
            data-anchor="a0"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="-translate-x-1/2 whitespace-nowrap pt-2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[15px] font-extrabold text-white sm:text-[17px]">Vàng</p>
              <p className="text-[11px] text-cyan-100/60 sm:text-xs">Cất giữ an toàn</p>
            </div>
          </div>
          <div
            data-anchor="a1"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="-translate-x-1/2 whitespace-nowrap pt-2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[15px] font-extrabold text-white sm:text-[17px]">Nhà đất</p>
              <p className="text-[11px] text-cyan-100/60 sm:text-xs">Bảo trì, cho thuê</p>
            </div>
          </div>
          <div
            data-anchor="a2"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="-translate-x-1/2 whitespace-nowrap pt-2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[15px] font-extrabold text-white sm:text-[17px]">Cổ phiếu</p>
              <p className="text-[11px] text-cyan-100/60 sm:text-xs">Theo dõi, nắm giữ</p>
            </div>
          </div>
          <div
            data-anchor="a3"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="-translate-x-1/2 whitespace-nowrap pt-2 text-center"
              style={{ opacity: "0" }}
            >
              <p className="text-[15px] font-extrabold text-white sm:text-[17px]">Website</p>
              <p className="text-[11px] text-cyan-100/60 sm:text-xs">Vận hành mỗi tháng</p>
            </div>
          </div>
          <div
            data-anchor="shelfMid"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <p
              className="-translate-x-1/2 whitespace-nowrap text-[10.5px] font-bold uppercase tracking-[0.2em] text-cyan-100/70 sm:text-xs pt-16"
              style={{ opacity: "0" }}
            >
              Được giữ gìn → giá trị tăng dần
            </p>
          </div>
          <div
            data-anchor="n0"
            data-flip="true"
            className="story-flip pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[31]"
          >
            <div className="story-flip-in -translate-y-1/2" style={{ opacity: "0" }}>
              <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#0a1b2e]/90 py-1.5 pl-1.5 pr-4 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-100 text-[#0369a1] sm:h-9 sm:w-9">
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
                    className="lucide lucide-shield-check h-4 w-4"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-extrabold text-white sm:text-[15px]">
                    Bảo vệ
                  </span>
                  <span className="block text-[10.5px] text-cyan-100/60 sm:text-xs">
                    Sao lưu · giám sát 24/7
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            data-anchor="n1"
            data-flip="true"
            className="story-flip pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[31]"
          >
            <div className="story-flip-in -translate-y-1/2" style={{ opacity: "0" }}>
              <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#0a1b2e]/90 py-1.5 pl-1.5 pr-4 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-100 text-[#0369a1] sm:h-9 sm:w-9">
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
                    className="lucide lucide-wrench h-4 w-4"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-extrabold text-white sm:text-[15px]">
                    Giữ gìn
                  </span>
                  <span className="block text-[10.5px] text-cyan-100/60 sm:text-xs">
                    Cập nhật · sửa lỗi
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            data-anchor="n2"
            data-flip="true"
            className="story-flip pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[31]"
          >
            <div className="story-flip-in -translate-y-1/2" style={{ opacity: "0" }}>
              <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-cyan-300/25 bg-[#0a1b2e]/90 py-1.5 pl-1.5 pr-4 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-100 text-[#0369a1] sm:h-9 sm:w-9">
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
                    className="lucide lucide-trending-up h-4 w-4"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-extrabold text-white sm:text-[15px]">
                    Phát triển
                  </span>
                  <span className="block text-[10.5px] text-cyan-100/60 sm:text-xs">
                    SEO · nội dung
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            data-anchor="monthL"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
          >
            <div
              className="whitespace-nowrap pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/60 sm:text-[11px]"
              style={{ opacity: "0" }}
            >
              Khách hỏi qua website · mỗi tháng{" "}
              <span className="ml-2 font-medium normal-case tracking-normal text-white/35">
                minh hoạ
              </span>
            </div>
          </div>
          <div
            data-anchor="slabR"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[35]"
          >
            <div
              className="-translate-x-[40px] -translate-y-[60px]"
              style={{
                width: "268px",
                opacity: "0",
                transform: "translateX(60px)",
              }}
            >
              <div className="flex items-center gap-3 rounded-[14px] bg-white/95 p-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
                <span className="h-8 w-8 flex-none">
                  <img alt="" className="h-full w-full rounded-[7px]" src="/zalo-icon.png" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[12.5px] font-bold text-slate-900 sm:text-[13px]">
                    Khách hỏi giá qua Zalo
                  </span>
                  <span className="block truncate text-[11px] text-slate-500 sm:text-xs">
                    Từ website · vừa xong
                  </span>
                </span>
                <span className="self-start text-[10px] text-slate-400">vừa xong</span>
              </div>
            </div>
          </div>
          <div
            data-anchor="slabR"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[35]"
          >
            <div
              className="-translate-x-[40px] -translate-y-[60px]"
              style={{
                width: "268px",
                opacity: "0",
                transform: "translateX(60px)",
              }}
            >
              <div className="flex items-center gap-3 rounded-[14px] bg-white/95 p-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
                <span className="h-8 w-8 flex-none">
                  <span className="flex h-full w-full items-center justify-center rounded-[7px] bg-emerald-500 text-white">
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
                      className="lucide lucide-shopping-bag h-4 w-4"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </span>
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[12.5px] font-bold text-slate-900 sm:text-[13px]">
                    Đơn hàng mới
                  </span>
                  <span className="block truncate text-[11px] text-slate-500 sm:text-xs">
                    2 sản phẩm · thanh toán khi nhận
                  </span>
                </span>
                <span className="self-start text-[10px] text-slate-400">vừa xong</span>
              </div>
            </div>
          </div>
          <div
            data-anchor="slabR"
            className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform z-[35]"
          >
            <div
              className="-translate-x-[40px] -translate-y-[60px]"
              style={{
                width: "268px",
                opacity: "0",
                transform: "translateX(60px)",
              }}
            >
              <div className="flex items-center gap-3 rounded-[14px] bg-white/95 p-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
                <span className="h-8 w-8 flex-none">
                  <span className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#0369a1] text-white">
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
                      className="lucide lucide-calendar-check h-4 w-4"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </span>
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[12.5px] font-bold text-slate-900 sm:text-[13px]">
                    Lịch hẹn tư vấn
                  </span>
                  <span className="block truncate text-[11px] text-slate-500 sm:text-xs">
                    Đặt qua website · thứ Ba 9:30
                  </span>
                </span>
                <span className="self-start text-[10px] text-slate-400">vừa xong</span>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center"
            style={{ transform: "none" }}
          >
            <img
              alt=""
              width="360"
              height="360"
              className="h-32 w-32 drop-shadow-[0_18px_40px_rgba(0,161,207,0.35)] md:h-[168px] md:w-[168px]"
              src="/brand/mark.png"
              style={{ opacity: "0" }}
            />
            <p
              className="absolute inset-x-0 top-[calc(50%+86px)] px-4 text-center text-2xl font-black tracking-[-0.02em] text-white md:top-[calc(50%+112px)] md:text-4xl"
              style={{ opacity: "0" }}
            >
              Website là tài sản. <span className="accent-serif text-cyan-300">TDDTech</span> giữ nó
              sinh lời.
            </p>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 z-40 px-5 text-center"
            style={{ top: "480px" }}
          >
            <p className="mx-auto max-w-3xl text-[clamp(1.7rem,4.6vw,3.4rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#0b1220] dark:text-white">
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  Ba
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  việc
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  TDDTech
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  làm
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  cho
                </span>
              </span>{" "}
              <span className="rise-mask">
                <span
                  className="inline-block"
                  style={{
                    transform: "perspective(700px) translateY(140%) rotateX(72deg)",
                    transformOrigin: "50% 100% 0px",
                  }}
                >
                  <span className="accent-serif text-primary">anh chị</span>
                </span>
              </span>
            </p>
            <div
              className="mt-6 flex flex-col items-center gap-2 text-slate-500 dark:text-white/55"
              style={{ opacity: "0" }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs">
                Xây dựng · Bán hàng · Vận hành
              </span>
              <span className="story-scroll-cue" aria-hidden="true">
                <i></i>
              </span>
            </div>
          </div>
          <div
            className="pointer-events-none absolute bottom-2.5 left-1/2 z-50 -translate-x-1/2 sm:bottom-7"
            style={{ opacity: "0" }}
          >
            <div className="grid">
              <div
                className="col-start-1 row-start-1 flex gap-2 sm:gap-3 text-slate-700 dark:text-white/80"
                style={{ opacity: "1" }}
              >
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">01 </span>Chi phí
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/15">
                    <div
                      className="h-full origin-left bg-slate-900 dark:bg-white"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">02 </span>Bỏ quên
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/15">
                    <div
                      className="h-full origin-left bg-slate-900 dark:bg-white"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">03 </span>Tài sản
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/15">
                    <div
                      className="h-full origin-left bg-slate-900 dark:bg-white"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">04 </span>Vận hành
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/15">
                    <div
                      className="h-full origin-left bg-slate-900 dark:bg-white"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="col-start-1 row-start-1 flex gap-2 sm:gap-3 text-white/85"
                style={{ opacity: "0" }}
              >
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">01 </span>Chi phí
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full origin-left bg-cyan-300"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">02 </span>Bỏ quên
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full origin-left bg-cyan-300"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">03 </span>Tài sản
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full origin-left bg-cyan-300"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
                <div className="w-[19vw] max-w-[112px] sm:w-[112px]">
                  <p className="mb-1.5 truncate text-[9.5px] font-bold uppercase tracking-[0.14em] sm:text-[10.5px] sm:tracking-[0.16em]">
                    <span className="hidden sm:inline">04 </span>Vận hành
                  </p>
                  <div className="h-[2px] overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full origin-left bg-cyan-300"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
