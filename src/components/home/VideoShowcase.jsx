import React, { useState, useRef, useEffect } from "react";

export default function VideoShowcase() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scale, setScale] = useState(0.85);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Scroll driven subtle zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of section through viewport
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));

      // Scale between 0.82 and 1.0
      const currentScale = 0.82 + Math.sin(progress * Math.PI) * 0.18;
      setScale(currentScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="section-videoshowcase">
      <section
        id="phim-gioi-thieu"
        ref={sectionRef}
        aria-label="Phim giới thiệu TechRent"
        className="relative overflow-hidden py-16 sm:py-24 bg-slate-50 dark:bg-[hsl(220_40%_6%)] border-b border-slate-200 dark:border-white/[0.06]"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary sm:text-sm">
            Cách TechRent làm việc
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-balance text-2xl font-black leading-[1.15] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Từ yêu cầu đến sản phẩm doanh nghiệp có thể vận hành
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base">
            Khám phá quy trình tư vấn kiến trúc, thiết kế UI/UX độc bản và bàn giao 100% mã nguồn chuẩn tài sản số.
          </p>

          {/* Interactive Responsive Video Theater */}
          <div className="relative mx-auto mt-10 max-w-5xl">
            <div
              className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out border border-slate-200/50 dark:border-white/10"
              style={{
                transform: `scale(${scale})`,
                aspectRatio: "16/9",
              }}
            >
              <video
                ref={videoRef}
                playsInline
                loop
                autoPlay
                muted={isMuted}
                preload="metadata"
                className="h-full w-full object-cover cursor-pointer"
                onClick={togglePlay}
                poster="/media/techrent/video/v1/film/brand-film-16x9.jpg"
                src="/media/techrent/video/v1/film/brand-film-16x9.mp4"
              ></video>

              {/* Ambient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

              {/* Control Buttons (Bottom Right) */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 z-20">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                  title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-xl backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
                >
                  {isMuted ? (
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
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                      <line x1="22" x2="16" y1="9" y2="15" />
                      <line x1="16" x2="22" y1="9" y2="15" />
                    </svg>
                  ) : (
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
                      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Status Indicator (Bottom Left) */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 z-20 pointer-events-none">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                  Brand Film 4K
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
