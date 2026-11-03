import React, { useState } from "react";
import faqsData from "../../data/faqs.json";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0); // Open first item by default
  const faqs = faqsData.slice(0, 8); // Top 8 most important questions

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="section-faqsection">
      <section
        id="faq"
        aria-label="Câu hỏi thường gặp"
        className="relative overflow-hidden py-20 sm:py-28 bg-white dark:bg-[#070b13] border-b border-slate-200 dark:border-white/[0.06]"
      >
        <div className="container relative mx-auto px-4 z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Header info (5 cols) */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Câu hỏi thường gặp
              </span>
              <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Minh bạch mọi thông tin trước khi bắt đầu
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-white/70">
                Giải đáp nhanh những thắc mắc phổ biến về quyền sở hữu mã nguồn, quy trình bàn giao, bảo hành 5 năm và kế hoạch vận hành hằng tháng.
              </p>

              {/* Consultation Card */}
              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Chưa tìm thấy câu hỏi của bạn?
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-white/50">
                  Đội ngũ kỹ sư TechRent luôn sẵn sàng tư vấn trực tiếp qua Zalo 24/7.
                </p>
                <a
                  href="https://zalo.me/0813044817"
                  target="_blank"
                  rel="noreferrer"
                  className="ximi-button mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
                >
                  <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
                  Chat Zalo: 0393.312.336
                </a>
              </div>
            </div>

            {/* Right Accordion List (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-primary/60 bg-white shadow-md dark:border-primary/50 dark:bg-white/[0.04]"
                        : "border-slate-200/80 bg-white/70 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/15"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors"
                    >
                      <span className="pr-4 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 border-primary bg-primary text-white"
                            : "border-slate-200 text-slate-500 dark:border-white/10 dark:text-white/60"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-600 dark:text-white/70 border-t border-slate-100 dark:border-white/[0.05] animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
