import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function MenuModal({ isOpen, onClose }) {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { num: "01", title: "Trang chủ", path: "/" },
    { num: "02", title: "Dịch vụ", path: "/thiet-ke-website" },
    { num: "03", title: "Kho giao diện", path: "/#kho-giao-dien" },
    { num: "04", title: "Dự án", path: "/du-an" },
    { num: "05", title: "Blog", path: "/blog" },
    { num: "06", title: "Bảng giá", path: "/bang-gia-thiet-ke-website" },
    { num: "07", title: "Hồ sơ năng lực", path: "/ho-so-nang-luc" },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] md:flex md:items-center md:justify-center animate-fadeIn"
      data-menu-overlay="true"
    >
      {/* Scrim backdrop */}
      <div
        className="menu-scrim absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Decorative Glows */}
      <div className="menu-glow pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,180,216,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.05)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.06)_1px,transparent_1px)]" />
      <div className="menu-glow pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      {/* Modal Dialog Content */}
      <div className="menu-glass relative mx-auto flex max-h-[92vh] w-[min(94vw,980px)] flex-col overflow-y-auto rounded-[28px] border border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-[#07101c] dark:text-white shadow-2xl backdrop-blur-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-7 border-b border-slate-100 dark:border-white/10">
          <Link to="/" onClick={onClose} className="flex items-center">
            <img
              alt="TDDTech Logo"
              className="h-10 w-auto object-contain md:h-12 block dark:hidden"
              src="/brand/logo-light.png"
            />
            <img
              alt="TDDTech Logo"
              className="h-11 w-auto object-contain md:h-14 hidden dark:block"
              src="/brand/logo-dark.png"
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-primary"
              aria-label={
                theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"
              }
              title={theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}
            >
              {theme === "dark" ? (
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
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-500"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="group flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/10 dark:text-white"
              aria-label="Đóng menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-90"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid flex-1 gap-10 px-6 py-8 md:px-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          {/* Main Navigation Links */}
          <nav className="flex flex-col justify-center divide-y divide-slate-100 dark:divide-white/[0.08]">
            {navLinks.map((item) => (
              <Link
                key={item.num}
                to={item.path}
                onClick={onClose}
                className="group flex items-baseline gap-3 py-3 sm:gap-4 sm:py-3.5 md:py-4 transition-all"
              >
                <span className="w-7 flex-none font-mono text-xs text-slate-400 dark:text-white/40">
                  {item.num}
                </span>
                <span className="text-[24px] font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary dark:text-white sm:text-3xl md:text-4xl lg:text-[40px]">
                  {item.title}
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
                  className="lucide lucide-arrow-up-right ml-auto h-6 w-6 flex-none translate-x-[-8px] text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Right Column: Brand Info & Contacts */}
          <div className="flex flex-col gap-6">
            <div className="hidden lg:block h-32 w-full">
              <img
                alt="TDDTech"
                className="h-full w-auto object-contain block dark:hidden"
                src="/brand/logo-light.png"
              />
              <img
                alt="TDDTech"
                className="h-full w-auto object-contain hidden dark:block"
                src="/brand/logo-dark.png"
              />
            </div>

            <div>
              <h2 className="text-xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-2xl">
                Website là tài sản.
                <br />
                <span className="text-primary">TDDTech giữ nó sinh lời.</span>
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-white/40">
                Thông tin liên hệ
              </p>
              <a
                href="tel:0393312336"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-white/70"
              >
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
                  className="flex-none text-primary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>0393312336 (Zalo / Hotline)</span>
              </a>
              <a
                href="mailto:thieuducdung254@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-white/70"
              >
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
                  className="flex-none text-primary"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>thieuducdung254@gmail.com</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/70">
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
                  className="mt-0.5 flex-none text-primary"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Hà Nội · phục vụ doanh nghiệp toàn quốc</span>
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://zalo.me/0393312336"
              target="_blank"
              rel="noreferrer"
              className="ximi-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-12 w-full rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              <img alt="" className="h-5 w-5 rounded-sm" src="/zalo-icon.png" />
              Chat Zalo nhận báo giá ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
