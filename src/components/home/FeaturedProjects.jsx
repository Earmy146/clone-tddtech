import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("all");
  const [hoveredSlug, setHoveredSlug] = useState(null);

  // Extract real structured project items (skip empty or invalid)
  const projects = projectsData.slice(0, 8); // Highlight top 8 projects

  return (
    <div className="section-featuredprojects">
      <section
        id="du-an-noi-bat"
        aria-label="Dự án tiêu biểu qua nhiều ngành"
        className="relative overflow-hidden py-20 sm:py-28 bg-[#eef2f6] dark:bg-[#05080f] border-b border-slate-200 dark:border-white/[0.06]"
      >
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/10 blur-[140px]"></div>

        <div className="container relative mx-auto px-4 z-10">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Dự án tiêu biểu
              </span>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Sản phẩm thực tế TechRent đã bàn giao
              </h2>
              <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-white/70">
                100% website được đo ni đóng giày theo ngành nghề kinh doanh, chuẩn SEO và tối ưu chuyển đổi di động.
              </p>
            </div>

            <Link
              to="/du-an"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-primary dark:hover:text-white"
            >
              Xem tất cả 15+ dự án
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Projects Responsive Grid (2 columns on tablet/desktop) */}
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {projects.map((proj, idx) => (
              <div
                key={proj.slug}
                onMouseEnter={() => setHoveredSlug(proj.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(0,180,216,0.3)] dark:border-white/10 dark:bg-[hsl(220_40%_8%)] dark:shadow-none"
              >
                {/* Mockup Image Container */}
                <Link
                  to={`/du-an/${proj.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-900"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                  {/* Corner View Project Pill */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                      Chi tiết dự án
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
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </span>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {proj.category || "Website doanh nghiệp"}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 dark:text-white/40">
                        Dự án 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-black text-slate-900 transition-colors group-hover:text-primary dark:text-white sm:text-2xl">
                      <Link to={`/du-an/${proj.slug}`}>{proj.title}</Link>
                    </h3>

                    {/* Features checklist preview */}
                    {proj.features && proj.features.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 dark:border-white/[0.06]">
                        {proj.features.slice(0, 2).map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-white/60"
                          >
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
                              className="mt-0.5 text-primary flex-none"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/[0.06]">
                    <span className="text-xs font-medium text-slate-500 dark:text-white/50">
                      Bàn giao 100% mã nguồn
                    </span>
                    <Link
                      to={`/du-an/${proj.slug}`}
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Xem hồ sơ bàn giao &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
