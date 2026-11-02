import React from "react";
import { Link } from "react-router-dom";

export default function VideoShowcase() {
  return (
    <div className="section-videoshowcase">
      <section
        id="phim-gioi-thieu"
        data-no-motion="true"
        aria-label="Phim giới thiệu TDDTech"
        className="relative h-[290svh] bg-slate-50 dark:bg-[hsl(220_40%_6%)]"
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 px-4 pt-24 text-center will-change-transform md:pt-28"
            style={{ opacity: "1", transform: "translate3d(0px, 0px, 0px)" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary sm:text-sm">
              Cách TDDTech làm việc
            </p>
            <h2
              data-scroll="read"
              data-no-motion="true"
              aria-label="Từ yêu cầu đến sản phẩm doanh nghiệp có thể vận hành"
              className="mx-auto mt-3 max-w-4xl text-balance text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl sm:leading-[1.15] lg:text-6xl lg:leading-[1.12]"
              style={{ "--n": "12", "--p": "0" }}
            >
              <span aria-hidden="true" className="read-word" style={{ "--i": "0" }}>
                Từ
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "1" }}>
                yêu
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "2" }}>
                cầu
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "3" }}>
                đến
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "4" }}>
                sản
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "5" }}>
                phẩm
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "6" }}>
                doanh
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "7" }}>
                nghiệp
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "8" }}>
                có
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "9" }}>
                thể
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "10" }}>
                vận
              </span>{" "}
              <span aria-hidden="true" className="read-word" style={{ "--i": "11" }}>
                hành
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base">
              Cuộn xuống để xem 66 giây về cách TDDTech làm việc.
            </p>
          </div>
          <div
            className="absolute inset-0 overflow-hidden bg-[#071224] will-change-transform"
            style={{
              transformOrigin: "50% 62%",
              transform: "translate3d(0px, 160px, 0px) scale(0.42)",
              borderRadius: "66.6667px",
            }}
          >
            <video
              playsInline
              loop
              preload="auto"
              className="h-full w-full object-cover"
              poster="/media/tddtech/video/v1/film/brand-film-16x9.jpg"
              src="/media/tddtech/video/v1/film/brand-film-16x9.mp4"
            ></video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-opacity duration-500 opacity-0"></div>
            <div className="absolute bottom-6 right-6 flex items-center gap-3 transition-opacity duration-500 md:bottom-10 md:right-10 pointer-events-none opacity-0">
              <span className="hidden text-sm font-semibold text-white/80 sm:inline">
                Chạm để bật tiếng
              </span>
              <button
                type="button"
                aria-label="Bật tiếng phim"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg backdrop-blur transition-transform hover:scale-105"
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
                  className="lucide lucide-volume-x h-6 w-6"
                >
                  <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                  <line x1="22" x2="16" y1="9" y2="15" />
                  <line x1="16" x2="22" y1="9" y2="15" />
                </svg>
              </button>
            </div>
            <div
              className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm font-semibold text-white/75 transition-opacity duration-500 md:bottom-12"
              style={{ opacity: "0" }}
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
                className="lucide lucide-arrow-down h-4 w-4 animate-bounce"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>{" "}
              Cuộn tiếp để bỏ qua
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
