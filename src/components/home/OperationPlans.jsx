import React from "react";
import { Link } from "react-router-dom";

export default function OperationPlans() {
  return (
    <div className="section-operationplans">
      <section
        id="van-hanh"
        data-no-motion="true"
        aria-label="Một tháng TDDTech vận hành website"
        className="measure-height relative bg-[#05080f] text-white"
      >
        <div className="relative overflow-hidden pb-2 pt-20 sm:pt-24 lg:hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_85%_0%,rgba(56,189,248,0.16),transparent_70%)]"
          ></div>
          <div className="container relative mx-auto px-4">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-200/80 sm:text-xs">
              <span className="font-mono text-cyan-300">05</span>
              <span className="h-px w-8 flex-none bg-current"></span>
              <span className="text-balance">Một tháng TDDTech vận hành website</span>
            </p>
            <div className="mt-3">
              <h2 className="font-black uppercase tracking-[-0.04em] text-white text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.14]">
                Bảo vệ.
                <br />
                Giữ gìn.
                <br />
                <span className="accent-serif normal-case tracking-[-0.02em] text-cyan-300 mt-[0.06em] inline-block">
                  Phát triển.
                </span>
              </h2>
            </div>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-6 text-white/60 sm:text-base">
              Trách nhiệm của TDDTech không dừng ở ngày bàn giao — đây là những việc diễn ra mỗi
              tháng với website của anh chị.
            </p>
          </div>
        </div>
        <div className="relative h-[320svh]">
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            <div className="absolute inset-0" style={{ opacity: "0" }}>
              <canvas
                aria-hidden="true"
                className="Dark3DBanner_canvas__xRM_u "
                data-dark-3d-banner="true"
                width="1720"
                height="1000"
                style={{ opacity: "1" }}
              ></canvas>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_30%,transparent_80%)]"
            ></div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#05080f] to-transparent"
            ></div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05080f] to-transparent"
            ></div>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
            >
              <path
                d="M 723.9 466.7 C 743.9 466.7, 743.9 620.7, 763.9 620.7"
                fill="none"
                stroke="#67e8f9"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                opacity="1"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              />
              <circle
                r="3.5"
                fill="#a5f3fc"
                style={{
                  filter: "drop-shadow(rgb(103, 232, 249) 0px 0px 6px)",
                }}
              >
                <animatemotion
                  dur="1.8s"
                  repeatCount="indefinite"
                  path="M 723.9 466.7 C 743.9 466.7, 743.9 620.7, 763.9 620.7"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines="0.65 0 0.35 1"
                ></animatemotion>
              </circle>
            </svg>
            <div className="container relative z-20 mx-auto flex h-full flex-col justify-center px-4 pb-6 pt-[84px] lg:pb-8 lg:pt-[92px]">
              <div className="lg:hidden">
                <div className="flex items-end gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Ngày
                  </p>
                  <p className="font-mono text-3xl font-bold leading-none tracking-tight text-white lg:text-[2.6rem]">
                    <span>01</span>
                    <span className="text-white/30">/30</span>
                  </p>
                  <div className="relative mb-2 h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="absolute inset-0 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
                      style={{ transform: "scaleX(0)" }}
                    ></div>
                    <span
                      className="absolute top-0 h-full w-px bg-[#05080f]"
                      style={{ left: "25%" }}
                    ></span>
                    <span
                      className="absolute top-0 h-full w-px bg-[#05080f]"
                      style={{ left: "50%" }}
                    ></span>
                    <span
                      className="absolute top-0 h-full w-px bg-[#05080f]"
                      style={{ left: "75%" }}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
                <div>
                  <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-200/80 sm:text-xs">
                    <span className="font-mono text-cyan-300">05</span>
                    <span className="h-px w-8 flex-none bg-current"></span>
                    <span className="text-balance">Một tháng TDDTech vận hành website</span>
                  </p>
                  <div className="mt-4">
                    <h2 className="font-black uppercase tracking-[-0.04em] text-white text-[clamp(2rem,3.7vw,3.5rem)] leading-[0.95]">
                      Bảo vệ. Giữ gìn.{" "}
                      <span className="accent-serif normal-case tracking-[-0.02em] text-cyan-300 ">
                        Phát triển.
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="max-w-md text-pretty text-[17px] leading-7 text-white/60">
                    Trách nhiệm của TDDTech không dừng ở ngày bàn giao — đây là những việc diễn ra
                    mỗi tháng với website của anh chị.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-end gap-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        Ngày
                      </p>
                      <p className="font-mono text-3xl font-bold leading-none tracking-tight text-white lg:text-[2.6rem]">
                        <span>01</span>
                        <span className="text-white/30">/30</span>
                      </p>
                      <div className="relative mb-2 h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="absolute inset-0 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
                          style={{ transform: "scaleX(0)" }}
                        ></div>
                        <span
                          className="absolute top-0 h-full w-px bg-[#05080f]"
                          style={{ left: "25%" }}
                        ></span>
                        <span
                          className="absolute top-0 h-full w-px bg-[#05080f]"
                          style={{ left: "50%" }}
                        ></span>
                        <span
                          className="absolute top-0 h-full w-px bg-[#05080f]"
                          style={{ left: "75%" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
                <div className="hidden flex-col gap-1 lg:flex">
                  <button
                    type="button"
                    aria-current="true"
                    className="relative rounded-2xl px-4 py-2.5 text-left"
                  >
                    <span
                      className="ops-hi absolute inset-0 rounded-2xl"
                      style={{ opacity: "1" }}
                    ></span>
                    <span className="relative flex items-baseline gap-3 transition-opacity duration-500 opacity-100">
                      <span className="font-mono text-sm text-cyan-300">01</span>
                      <span>
                        <span className="block text-lg font-black">
                          Bảo vệ{" "}
                          <span className="ml-1 align-middle text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            Tuần 1
                          </span>
                        </span>
                        <span className="block text-[14.5px] leading-6 text-white/65">
                          Giám sát liên tục, sao lưu mỗi đêm, chặn truy cập lạ.
                        </span>
                      </span>
                    </span>
                    <span className="absolute inset-x-4 bottom-1 h-px overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full origin-left bg-cyan-300"
                        style={{ transform: "scaleX(0)" }}
                      ></span>
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-current="false"
                    className="relative rounded-2xl px-4 py-2.5 text-left"
                  >
                    <span className="relative flex items-baseline gap-3 transition-opacity duration-500 opacity-40">
                      <span className="font-mono text-sm text-cyan-300">02</span>
                      <span>
                        <span className="block text-lg font-black">
                          Giữ gìn{" "}
                          <span className="ml-1 align-middle text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            Tuần 2
                          </span>
                        </span>
                        <span className="block text-[14.5px] leading-6 text-white/65">
                          Sự cố được tiếp nhận và xử lý trong vài giờ.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-current="false"
                    className="relative rounded-2xl px-4 py-2.5 text-left"
                  >
                    <span className="relative flex items-baseline gap-3 transition-opacity duration-500 opacity-40">
                      <span className="font-mono text-sm text-cyan-300">03</span>
                      <span>
                        <span className="block text-lg font-black">
                          Phát triển{" "}
                          <span className="ml-1 align-middle text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            Tuần 3
                          </span>
                        </span>
                        <span className="block text-[14.5px] leading-6 text-white/65">
                          SEO và nội dung giúp website lên dần trên Google.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-current="false"
                    className="relative rounded-2xl px-4 py-2.5 text-left"
                  >
                    <span className="relative flex items-baseline gap-3 transition-opacity duration-500 opacity-40">
                      <span className="font-mono text-sm text-cyan-300">04</span>
                      <span>
                        <span className="block text-lg font-black">
                          Minh bạch{" "}
                          <span className="ml-1 align-middle text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            Cuối tháng
                          </span>
                        </span>
                        <span className="block text-[14.5px] leading-6 text-white/65">
                          Báo cáo số liệu thật gửi về tận tay mỗi tháng.
                        </span>
                      </span>
                    </span>
                  </button>
                  <div className="flex flex-col gap-3 sm:flex-row mt-5">
                    <div
                      className="ContactChannelPair_pair__7IVaN"
                      data-contact-channel-pair="true"
                    >
                      <a
                        href="https://zalo.me/0393312336"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
                      >
                        <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                        Tư vấn gói vận hành
                      </a>
                      <a
                        href="https://www.facebook.com/dungchuche25"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Liên hệ qua Facebook"
                        className="FacebookContactLink_button__k7FTi inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
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
                        <span>Trao đổi thiết kế Web</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:hidden">
                  <span className="relative rounded-full py-2 text-center text-[12.5px] font-bold">
                    <span
                      className="absolute inset-0 rounded-full bg-white"
                      style={{ opacity: "1" }}
                    ></span>
                    <span className="relative text-slate-950">Bảo vệ</span>
                  </span>
                  <span className="relative rounded-full py-2 text-center text-[12.5px] font-bold">
                    <span className="relative text-white/55">Giữ gìn</span>
                  </span>
                  <span className="relative rounded-full py-2 text-center text-[12.5px] font-bold">
                    <span className="relative text-white/55">Phát triển</span>
                  </span>
                  <span className="relative rounded-full py-2 text-center text-[12.5px] font-bold">
                    <span className="relative text-white/55">Minh bạch</span>
                  </span>
                </div>
                <div className="mt-4 min-w-0 lg:mt-0">
                  <div
                    className="ops-panel relative ml-auto w-full rounded-[22px] p-2 sm:p-2.5"
                    style={{
                      perspective: "1400px",
                      maxWidth: "max(300px, -528px + 160svh)",
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between px-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                        Đang chạy · Tuần 1
                      </span>
                      <span className="font-mono text-cyan-300/80">01/04</span>
                    </div>
                    <div
                      style={{
                        transformStyle: "preserve-3d",
                        opacity: "1",
                        transform: "none",
                      }}
                    >
                      <div
                        role="img"
                        aria-label="Bảo vệ: website được giám sát liên tục từng ngày, truy cập lạ bị chặn tự động, dữ liệu sao lưu mỗi đêm và bản vá bảo mật được cập nhật ngay."
                        data-live="0"
                        className="x-scene aspect-[4/3] rounded-[16px] bg-[#09101c] bg-[radial-gradient(110%_80%_at_0%_0%,rgba(56,189,248,0.09),transparent_60%)] font-label shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-inset ring-white/[0.07] sm:aspect-[16/10]"
                        data-stage="start"
                      >
                        <div className="x-stage" aria-hidden="true">
                          <div className="absolute inset-0 flex flex-col p-[4.2cqw]">
                            <div className="flex items-center justify-between gap-[2cqw]">
                              <span className="flex min-w-0 items-center gap-[1.2cqw] text-[clamp(11px,2.1cqw,15px)] leading-[1.3] font-medium text-white/90">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-radar h-[2.5cqw] w-[2.5cqw] min-h-[12px] min-w-[12px] flex-none text-cyan-300"
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
                                <span className="truncate">Giám sát website của anh chị</span>
                              </span>
                              <span className="flex flex-none items-center gap-[0.9cqw] text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35] text-emerald-300/85">
                                <span className="relative flex h-[0.9cqw] w-[0.9cqw] min-h-[5px] min-w-[5px]">
                                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50"></span>
                                  <span className="relative h-full w-full rounded-full bg-emerald-400"></span>
                                </span>
                                Đang hoạt động
                              </span>
                            </div>
                            <div className="mt-[2.4cqw] grid min-h-0 flex-1 grid-cols-[0.85fr_1fr] items-center gap-[3.5cqw]">
                              <div className="grid h-full place-items-center">
                                <div className="relative aspect-square w-[31cqw]">
                                  <svg
                                    viewBox="0 0 100 100"
                                    className="absolute inset-0 h-full w-full overflow-visible"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      cx="50"
                                      cy="50"
                                      r="49.5"
                                      fill="none"
                                      stroke="rgb(255 255 255 / 0.09)"
                                      vectorEffect="non-scaling-stroke"
                                    />
                                    <circle
                                      cx="50"
                                      cy="50"
                                      r="20"
                                      fill="none"
                                      stroke="rgb(255 255 255 / 0.07)"
                                      vectorEffect="non-scaling-stroke"
                                    />
                                    <path
                                      d="M50 0.5V99.5M0.5 50H99.5"
                                      stroke="rgb(255 255 255 / 0.05)"
                                      vectorEffect="non-scaling-stroke"
                                    />
                                    <circle
                                      cx="50"
                                      cy="50"
                                      r="35"
                                      fill="none"
                                      stroke="rgb(103 232 249 / 0.5)"
                                      strokeWidth="1.25"
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                  <div className="guard-sweep absolute inset-[0.5%] rounded-full"></div>
                                  <div className="absolute inset-[35%] grid place-items-center rounded-full bg-cyan-400/10 shadow-[0_0_5cqw_rgba(34,211,238,0.3)] ring-1 ring-inset ring-cyan-300/35">
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
                                      className="lucide lucide-shield-check h-1/2 w-1/2 text-cyan-100"
                                    >
                                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                      <path d="m9 12 2 2 4-4" />
                                    </svg>
                                  </div>
                                  <div data-cue="l3" className="x-fade absolute inset-0">
                                    <span
                                      className="guard-probe"
                                      style={{
                                        transform: "rotate(-32deg)",
                                        "--r0": "18.5cqw",
                                        "--r1": "11.5cqw",
                                      }}
                                    >
                                      <i style={{ animationDelay: "0s" }}></i>
                                      <b style={{ animationDelay: "0s" }}></b>
                                    </span>
                                    <span
                                      className="guard-probe"
                                      style={{
                                        transform: "rotate(204deg)",
                                        "--r0": "18.5cqw",
                                        "--r1": "11.5cqw",
                                      }}
                                    >
                                      <i style={{ animationDelay: "1.2s" }}></i>
                                      <b style={{ animationDelay: "1.2s" }}></b>
                                    </span>
                                    <span
                                      className="guard-probe"
                                      style={{
                                        transform: "rotate(118deg)",
                                        "--r0": "18.5cqw",
                                        "--r1": "11.5cqw",
                                      }}
                                    >
                                      <i style={{ animationDelay: "2.4s" }}></i>
                                      <b style={{ animationDelay: "2.4s" }}></b>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-0">
                                <div
                                  data-cue="l1"
                                  data-sfx="tick"
                                  className="flex items-center gap-[1.6cqw] border-t border-white/[0.06] first:border-t-0 py-[1.3cqw]"
                                >
                                  <span className="grid flex-none place-items-center rounded-[1cqw] bg-white/[0.04] ring-1 ring-inset ring-white/[0.08] h-[4.2cqw] w-[4.2cqw] min-h-[18px] min-w-[18px]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.75"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-database-backup h-[55%] w-[55%] text-cyan-200/90"
                                    >
                                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                                      <path d="M3 12a9 3 0 0 0 5 2.69" />
                                      <path d="M21 9.3V5" />
                                      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
                                      <path d="M12 12v4h4" />
                                      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
                                    </svg>
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block text-balance text-[clamp(11px,2.1cqw,15px)] leading-[1.3] text-white/85">
                                      Sao lưu dữ liệu
                                    </span>
                                    <span className="block text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35] text-white/40">
                                      Mỗi đêm
                                    </span>
                                  </span>
                                  <svg
                                    viewBox="0 0 20 20"
                                    className="h-[2.5cqw] w-[2.5cqw] min-h-[12px] min-w-[12px] flex-none text-emerald-300/90"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      cx="10"
                                      cy="10"
                                      r="8.6"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeOpacity="0.25"
                                      strokeWidth="1.3"
                                    />
                                    <path
                                      data-cue="l1"
                                      className="x-draw"
                                      pathLength="100"
                                      d="M6.3 10.3 8.9 12.9 13.9 7.5"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{
                                        transitionDuration: "0.6s",
                                        transitionDelay: "0.3s",
                                      }}
                                    />
                                  </svg>
                                </div>
                                <div
                                  data-cue="l2"
                                  data-sfx="tick"
                                  className="flex items-center gap-[1.6cqw] border-t border-white/[0.06] first:border-t-0 py-[1.3cqw]"
                                >
                                  <span className="grid flex-none place-items-center rounded-[1cqw] bg-white/[0.04] ring-1 ring-inset ring-white/[0.08] h-[4.2cqw] w-[4.2cqw] min-h-[18px] min-w-[18px]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.75"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-refresh-cw h-[55%] w-[55%] text-cyan-200/90"
                                    >
                                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                      <path d="M21 3v5h-5" />
                                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                      <path d="M8 16H3v5" />
                                    </svg>
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block text-balance text-[clamp(11px,2.1cqw,15px)] leading-[1.3] text-white/85">
                                      Vá lỗi bảo mật
                                    </span>
                                    <span className="block text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35] text-white/40">
                                      Ngay khi có bản vá
                                    </span>
                                  </span>
                                  <svg
                                    viewBox="0 0 20 20"
                                    className="h-[2.5cqw] w-[2.5cqw] min-h-[12px] min-w-[12px] flex-none text-emerald-300/90"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      cx="10"
                                      cy="10"
                                      r="8.6"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeOpacity="0.25"
                                      strokeWidth="1.3"
                                    />
                                    <path
                                      data-cue="l2"
                                      className="x-draw"
                                      pathLength="100"
                                      d="M6.3 10.3 8.9 12.9 13.9 7.5"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{
                                        transitionDuration: "0.6s",
                                        transitionDelay: "0.3s",
                                      }}
                                    />
                                  </svg>
                                </div>
                                <div
                                  data-cue="l3"
                                  data-sfx="tick"
                                  className="flex items-center gap-[1.6cqw] border-t border-white/[0.06] first:border-t-0 py-[1.3cqw]"
                                >
                                  <span className="grid flex-none place-items-center rounded-[1cqw] bg-white/[0.04] ring-1 ring-inset ring-white/[0.08] h-[4.2cqw] w-[4.2cqw] min-h-[18px] min-w-[18px]">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.75"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-shield-ban h-[55%] w-[55%] text-cyan-200/90"
                                    >
                                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                      <path d="m4.243 5.21 14.39 12.472" />
                                    </svg>
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block text-balance text-[clamp(11px,2.1cqw,15px)] leading-[1.3] text-white/85">
                                      Chặn truy cập lạ
                                    </span>
                                    <span className="block text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35] text-white/40">
                                      Tự động, liên tục
                                    </span>
                                  </span>
                                  <svg
                                    viewBox="0 0 20 20"
                                    className="h-[2.5cqw] w-[2.5cqw] min-h-[12px] min-w-[12px] flex-none text-emerald-300/90"
                                    aria-hidden="true"
                                  >
                                    <circle
                                      cx="10"
                                      cy="10"
                                      r="8.6"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeOpacity="0.25"
                                      strokeWidth="1.3"
                                    />
                                    <path
                                      data-cue="l3"
                                      className="x-draw"
                                      pathLength="100"
                                      d="M6.3 10.3 8.9 12.9 13.9 7.5"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{
                                        transitionDuration: "0.6s",
                                        transitionDelay: "0.3s",
                                      }}
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="mt-[2.4cqw]">
                              <p className="flex items-baseline justify-between text-[clamp(9px,1.5cqw,11.5px)] leading-[1.35] text-white/40">
                                <span>Nhật ký giám sát trong tháng</span>
                                <span>Ngày 1 → 30</span>
                              </p>
                              <div className="mt-[1.1cqw] flex justify-between">
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    data-sfx="shimmer"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "0ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "40ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "80ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "120ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "160ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "200ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "240ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "280ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "320ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "360ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "400ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "440ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "480ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "520ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "560ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "600ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "640ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "680ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "720ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "760ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "800ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "840ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "880ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "920ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "960ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "1000ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "1040ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "1080ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "1120ms" }}
                                  ></span>
                                </span>
                                <span className="relative h-[2.6cqw] min-h-[8px] w-[0.55cqw] min-w-[2px] rounded-full bg-white/[0.09]">
                                  <span
                                    data-cue="days"
                                    className="x-fade absolute inset-0 rounded-full bg-emerald-300/90 shadow-[0_0_0.9cqw_rgba(110,231,183,0.55)]"
                                    style={{ transitionDelay: "1160ms" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 lg:hidden">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      <span className="font-mono">01</span> · Tuần 1
                    </p>
                    <p className="text-lg font-black">Bảo vệ</p>
                    <p className="text-[14.5px] text-white/65">
                      Giám sát liên tục, sao lưu mỗi đêm, chặn truy cập lạ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-14 pt-2 lg:hidden">
          <div className="flex flex-col gap-3 sm:flex-row ">
            <div className="ContactChannelPair_pair__7IVaN" data-contact-channel-pair="true">
              <a
                href="https://zalo.me/0393312336"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
              >
                <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
                Tư vấn gói vận hành
              </a>
              <a
                href="https://www.facebook.com/dungchuche25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Liên hệ qua Facebook"
                className="FacebookContactLink_button__k7FTi inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
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
                <span>Trao đổi thiết kế Web</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
