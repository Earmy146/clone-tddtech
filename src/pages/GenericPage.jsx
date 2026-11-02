import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pagesContent from "../data/pages-content.json";
import faqsList from "../data/faqs.json";

export default function GenericPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const pathname = location.pathname;
  const pageData = pagesContent[pathname] ||
    pagesContent["/"] || {
      title: "TDDTech | Website là tài sản",
      bodyHtml:
        '<div class="py-24 text-center"><h1 class="text-3xl font-bold">Trang đang được cập nhật</h1></div>',
    };

  // Cập nhật Document Title
  useEffect(() => {
    document.title = pageData.title || "TDDTech - Website là tài sản";
  }, [pageData]);

  // Tự động cuộn trang khi đổi route hoặc có hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  // Gắn các tương tác cho DOM rendered (FAQ accordion, internal links, forms)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Chặn reload khi click các thẻ link nội bộ (SPA navigation)
    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Bỏ qua external links, tel, mailto, zalo
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      // Xử lý anchor hash link cùng trang (#pricing, #kho-giao-dien...)
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
        return;
      }

      // Link SPA nội bộ
      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      }
    };

    // 2. Xử lý mở / đóng FAQ Accordion
    const handleFaqClick = (e) => {
      const btn = e.target.closest('button[id*="faq-trigger"]');
      if (!btn) return;

      e.preventDefault();
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const newExpanded = !isExpanded;
      btn.setAttribute("aria-expanded", String(newExpanded));

      // Xoay icon mũi tên
      const svg = btn.querySelector("svg");
      if (svg) {
        svg.style.transform = newExpanded ? "rotate(180deg)" : "rotate(0deg)";
        svg.style.transition = "transform 0.3s ease";
      }

      const panelId = btn.getAttribute("aria-controls") || btn.id.replace("trigger", "panel");
      let panel = document.getElementById(panelId);

      // Nếu panel chưa có trong DOM, tìm câu trả lời trong faqs.json và tạo panel
      if (!panel) {
        const questionText = btn.innerText.replace(/[\n\r]+/g, " ").trim();
        const found = faqsList.find(
          (f) =>
            f.question.trim().includes(questionText) || questionText.includes(f.question.trim())
        ) || {
          answer:
            "TDDTech luôn sẵn sàng tư vấn chi tiết giải pháp phù hợp nhất cho doanh nghiệp của bạn. Vui lòng liên hệ hotline 0393312336 (Zalo).",
        };

        panel = document.createElement("div");
        panel.id = panelId;
        panel.className = "overflow-hidden transition-all duration-300";
        panel.innerHTML = `
          <div class="mx-4 md:mx-6 border-t border-slate-100 dark:border-white/10 pb-5 pt-4 text-sm leading-7 text-slate-600 dark:text-white/65">
            ${found.answer}
          </div>
        `;
        btn.parentNode.appendChild(panel);
      }

      if (panel) {
        panel.style.display = newExpanded ? "block" : "none";
      }
    };

    // 3. Xử lý Form Submit (liên hệ / tư vấn)
    const handleFormSubmit = (e) => {
      const form = e.target.closest("form");
      if (!form) return;

      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Đang gửi...";
      }

      setTimeout(() => {
        alert(
          "Cảm ơn bạn! TDDTech đã nhận được thông tin liên hệ và sẽ phản hồi trong vòng 30 phút."
        );
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText || "Gửi liên hệ";
        }
      }, 700);
    };

    container.addEventListener("click", handleLinkClick);
    container.addEventListener("click", handleFaqClick);
    container.addEventListener("submit", handleFormSubmit);

    return () => {
      container.removeEventListener("click", handleLinkClick);
      container.removeEventListener("click", handleFaqClick);
      container.removeEventListener("submit", handleFormSubmit);
    };
  }, [navigate, pathname]);

  return (
    <div
      ref={containerRef}
      className="page-content-wrapper"
      dangerouslySetInnerHTML={{ __html: pageData.bodyHtml }}
    />
  );
}
