import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Header({ onOpenMenu }) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(false);

  // Procedural Web Audio synthesizer
  const playSynthesizerNote = (freq = 587.33, duration = 0.35) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Web Audio not allowed without user interaction", e);
    }
  };

  const toggleSound = () => {
    const nextState = !isSoundActive;
    setIsSoundActive(nextState);
    if (nextState) {
      // Play harmonic chime
      playSynthesizerNote(587.33, 0.3);
      setTimeout(() => playSynthesizerNote(880.0, 0.4), 120);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Trang chủ", path: "/" },
    {
      title: "Dịch vụ",
      path: "/thiet-ke-website",
      hasDropdown: true,
      subItems: [
        { title: "Thiết kế website tổng quan", path: "/thiet-ke-website" },
        {
          title: "Thiết kế website doanh nghiệp",
          path: "/thiet-ke-website-doanh-nghiep",
        },
        {
          title: "Thiết kế website bán hàng",
          path: "/thiet-ke-website-ban-hang",
        },
        { title: "Thiết kế Landing Page", path: "/thiet-ke-landing-page" },
        { title: "Lập trình Web App", path: "/lap-trinh-web-app" },
        { title: "Dịch vụ SEO website", path: "/dich-vu-seo-website" },
        { title: "Bảo hành & Bảo trì", path: "/bao-hanh-bao-tri-website" },
        { title: "Bảng giá dịch vụ", path: "/bang-gia-thiet-ke-website" },
        { title: "Quy trình triển khai", path: "/quy-trinh-thiet-ke-website" },
      ],
    },
    { title: "Kho giao diện", path: "/#kho-giao-dien" },
    { title: "Dự án", path: "/du-an" },
    { title: "Blog", path: "/blog" },
    { title: "Bảng giá", path: "/bang-gia-thiet-ke-website" },
    { title: "Hồ sơ năng lực", path: "/ho-so-nang-luc" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 transition-[transform,opacity] duration-500 translate-y-0 opacity-100">
      <div className={`transition-all duration-300 ${isScrolled ? "py-1.5" : "py-3"}`}>
        <div className="container mx-auto px-4 transition-all duration-500 max-w-full">
          <div
            className={`relative flex items-center justify-between px-6 transition-all duration-500 rounded-2xl ${
              isScrolled
                ? "h-16 border border-slate-200/80 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[hsl(220_40%_8%_/_0.85)]"
                : "h-20 border border-transparent bg-transparent"
            }`}
          >
            {/* Top Scroll Indicator Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary origin-left z-50 pointer-events-none transition-transform duration-75"
              style={{ transform: `scaleX(${scrollProgress})` }}
            />

            {/* Brand Logo */}
            <Link to="/" className="flex items-center cursor-pointer z-10 py-1">
              <img
                alt="TechRent Logo"
                className="w-auto object-contain transition-all duration-300 block dark:hidden h-14 md:h-16 lg:h-18"
                src="/brand/logo-light.png"
              />
              <img
                alt="TechRent Logo"
                className="w-auto object-contain transition-all duration-300 hidden dark:block h-12 md:h-14 lg:h-16"
                src="/brand/logo-dark.png"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center overflow-visible z-10 transition-all duration-500 xl:flex max-w-[900px] gap-5 opacity-100 2xl:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.title}
                      className="relative group py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`ximi-link inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold transition-all ${
                          isActive
                            ? "text-primary font-bold"
                            : "text-slate-700 hover:text-primary dark:text-white/80 dark:hover:text-primary"
                        }`}
                      >
                        {link.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-200 group-hover:rotate-180"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div className="w-64 rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[hsl(220_40%_10%_/_0.95)]">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-primary"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.title}
                    to={link.path}
                    className={`ximi-link whitespace-nowrap text-sm font-semibold transition-all ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-slate-700 hover:text-primary dark:text-white/80 dark:hover:text-primary"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-2.5 lg:gap-3.5 z-10">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-sky-50/50 hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 dark:hover:bg-white/10 dark:hover:text-primary"
                aria-label={
                  theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"
                }
                title={
                  theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"
                }
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-500"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                )}
              </button>

              {/* Sound Equalizer Icon Button with procedural audio */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isSoundActive ? "Tắt âm thanh tương tác" : "Bật âm thanh tương tác"}
                  title={isSoundActive ? "Âm thanh: BẬT (Bấm để tắt)" : "Âm thanh: TẮT (Bấm để bật)"}
                  className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 md:h-10 md:w-10 ${
                    isSoundActive
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,212,255,0.4)]"
                      : "border-slate-200/90 bg-white/80 p-2 text-slate-400 shadow-sm backdrop-blur-md hover:border-primary/50 hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white/50"
                  }`}
                >
                  <span
                    className="sound-eq flex items-center justify-center gap-[2px]"
                    aria-hidden="true"
                  >
                    <i
                      className={`inline-block w-[2px] rounded-full transition-all ${
                        isSoundActive ? "bg-primary animate-pulse h-3" : "bg-slate-400 dark:bg-white/40 h-1.5"
                      }`}
                    ></i>
                    <i
                      className={`inline-block w-[2px] rounded-full transition-all ${
                        isSoundActive ? "bg-primary animate-bounce h-4" : "bg-slate-400 dark:bg-white/40 h-2"
                      }`}
                    ></i>
                    <i
                      className={`inline-block w-[2px] rounded-full transition-all ${
                        isSoundActive ? "bg-primary animate-pulse h-2" : "bg-slate-400 dark:bg-white/40 h-1"
                      }`}
                    ></i>
                    <i
                      className={`inline-block w-[2px] rounded-full transition-all ${
                        isSoundActive ? "bg-primary h-3" : "bg-slate-400 dark:bg-white/40 h-1.5"
                      }`}
                    ></i>
                  </span>
                </button>
              </div>

              {/* Liên hệ ngay (Desktop) */}
              <a
                href="https://zalo.me/0813044817"
                target="_blank"
                rel="noreferrer"
                className="ximi-button items-center justify-center gap-2 whitespace-nowrap rounded-md py-2 hidden md:inline-flex bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all font-bold h-10 px-5 text-sm"
              >
                <img alt="" className="mr-1.5 h-4 w-4 rounded-sm" src="/zalo-icon.png" />
                Liên hệ ngay
              </a>

              {/* Menu Hamburger Button (Desktop) */}
              <button
                type="button"
                onClick={onOpenMenu}
                className="group hidden md:flex items-center gap-2 rounded-full py-2 pl-3 pr-2 transition-all hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Mở menu"
              >
                <span className="overflow-hidden whitespace-nowrap text-sm font-bold text-slate-700 transition-all duration-300 group-hover:text-primary dark:text-white/80">
                  Menu
                </span>
                <span className="flex h-9 w-9 flex-col items-end justify-center gap-[4px] p-1">
                  <span className="block h-[2px] w-6 rounded-full bg-slate-800 transition-all group-hover:bg-primary dark:bg-white dark:group-hover:bg-primary"></span>
                  <span className="block h-[2px] w-4 rounded-full bg-slate-600 transition-all group-hover:w-6 group-hover:bg-primary dark:bg-white/70 dark:group-hover:bg-primary"></span>
                  <span className="block h-[2px] w-5 rounded-full bg-slate-400 transition-all group-hover:w-6 group-hover:bg-primary dark:bg-white/50 dark:group-hover:bg-primary"></span>
                </span>
              </button>

              {/* Zalo Button (Mobile) */}
              <div className="flex md:hidden items-center gap-1.5">
                <a
                  href="https://zalo.me/0813044817"
                  target="_blank"
                  rel="noreferrer"
                  className="ximi-button justify-center whitespace-nowrap h-8 px-2.5 text-[11px] font-bold bg-primary hover:bg-primary/90 text-white rounded-full shadow-md flex items-center gap-1"
                >
                  <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
                  Zalo
                </a>
              </div>

              {/* Hamburger Button (Mobile) */}
              <button
                type="button"
                onClick={onOpenMenu}
                aria-label="Mở menu"
                className="md:hidden relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-sky-50/70 hover:text-primary active:scale-95 dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-primary/50 dark:hover:bg-white/10 dark:hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
