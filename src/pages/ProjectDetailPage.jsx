import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  useEffect(() => {
    document.title = `${project.title} - Dự án TechRent đã thực hiện`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project]);

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 container mx-auto px-4 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/50 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Trang chủ
        </Link>
        <span>&gt;</span>
        <Link to="/du-an" className="hover:text-primary transition-colors">
          Dự án
        </Link>
        <span>&gt;</span>
        <span className="text-slate-900 dark:text-white font-medium">{project.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center mb-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
            {project.category}
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-8 max-w-2xl">
            {project.description ||
              "Website giải pháp số được thiết kế chuyên biệt, mang lại trải nghiệm thương hiệu cao cấp và thu hút khách hàng tiềm năng bền vững."}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="ximi-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm shadow-md hover:opacity-90 transition-all"
              >
                Truy cập website
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}

            <a
              href="https://zalo.me/0813044817"
              target="_blank"
              rel="noreferrer"
              className="ximi-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
            >
              <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
              Làm website như thế này
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="ximi-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1877f2] text-white font-bold text-sm shadow-md hover:bg-[#1877f2]/90 transition-all"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.3C17.4 1.1 16.3 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z"></path>
              </svg>
              Trao đổi thiết kế Web
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
            Đặc điểm triển khai nổi bật
          </h2>
          <ul className="space-y-3">
            {project.features &&
              project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-white/70"
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
                    className="text-primary mt-0.5 flex-none"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Big Mockup Showcase */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-[#07101c] mb-20">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3 dark:border-white/5 dark:bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
            <span className="h-3 w-3 rounded-full bg-amber-400/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-400/80"></span>
          </div>
          <span className="mx-auto text-xs text-slate-400 dark:text-white/40 font-mono">
            https://techrent.click/du-an/{project.slug}
          </span>
        </div>
        <img src={project.image} alt={project.title} className="w-full object-contain" />
      </div>

      {/* Related Projects */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Các dự án tiêu biểu khác
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {otherProjects.map((item) => (
            <Link
              key={item.slug}
              to={`/du-an/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  {item.category}
                </p>
                <h3 className="font-bold text-slate-900 group-hover:text-primary dark:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
