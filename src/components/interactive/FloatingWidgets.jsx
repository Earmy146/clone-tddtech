import React, { useState, useEffect } from "react";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          title="Cuộn lên đầu trang"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white/90 text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-[hsl(220_40%_10%_/_0.9)] dark:text-white/80 dark:hover:text-primary"
        >
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
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}

      {/* Floating Zalo Chat Button with Pulse Ring */}
      <a
        href="https://zalo.me/0393312336"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với TDDTech"
        title="Chat Zalo với TDDTech: 0393312336"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-primary/50 group"
      >
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30"></span>
        <img
          alt="Zalo"
          className="h-8 w-8 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
          src="/zalo-icon.png"
        />
      </a>
    </div>
  );
}
