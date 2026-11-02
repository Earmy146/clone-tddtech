import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    document.title = "Dự án website và web app tiêu biểu | TDDTech";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = [
    { id: "ALL", label: "Tất cả dự án" },
    { id: "BAN_HANG", label: "Website bán hàng" },
    { id: "DOANH_NGHIEP", label: "Website doanh nghiệp" },
    { id: "WEB_APP", label: "Web App & Hệ thống" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "BAN_HANG") return p.category.toLowerCase().includes("bán hàng");
    if (selectedCategory === "DOANH_NGHIEP")
      return p.category.toLowerCase().includes("doanh nghiệp");
    if (selectedCategory === "WEB_APP")
      return (
        p.category.toLowerCase().includes("app") || p.category.toLowerCase().includes("hệ thống")
      );
    return true;
  });

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 container mx-auto px-4 max-w-7xl">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
          / HƠN 150 DỰ ÁN ĐÃ TRIỂN KHAI
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
          Dự án tiêu biểu qua nhiều ngành
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
          Mỗi website là một tài sản được nghiên cứu kỹ hành vi khách hàng của từng ngành, tối ưu
          chuyển đổi và bàn giao 100% quyền kiểm soát cho doanh nghiệp.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12 border-b border-slate-200 dark:border-white/10 pb-4">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === c.id
                ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/10"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((item) => (
          <Link
            key={item.slug}
            to={`/du-an/${item.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  Xem chi tiết dự án
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
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                {item.category}
              </p>
              <h2 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white mb-3">
                {item.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-white/60 line-clamp-2 leading-relaxed mb-4">
                {item.description ||
                  "Dự án website tiêu biểu được TDDTech tư vấn, thiết kế giao diện độc quyền và tối ưu chuyển đổi."}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                {item.features &&
                  item.features.slice(0, 3).map((f, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-slate-50 dark:bg-white/5 px-2 py-0.5 text-[10px] text-slate-500 dark:text-white/50"
                    >
                      {f}
                    </span>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
