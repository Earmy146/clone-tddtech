import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";

export default function BlogListPage() {
  useEffect(() => {
    document.title = "Blog TDDTech: xây dựng và phát triển tài sản website | TDDTech";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 container mx-auto px-4 max-w-7xl">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
          / KIẾN THỨC & GÓC NHÌN
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6">
          Blog phát triển tài sản website
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
          Những bài phân tích thực tế về tư duy coi website là tài sản, cách vận hành sau bàn giao
          và phương pháp đo lường hiệu quả kinh doanh từ kênh số.
        </p>
      </div>

      {/* Grid Posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-white/40 mb-3 font-mono">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white mb-3 leading-snug">
              {post.title}
            </h2>

            <p className="text-xs text-slate-600 dark:text-white/60 line-clamp-3 leading-relaxed mb-6">
              {post.excerpt ||
                "Bài viết phân tích chuyên sâu của TDDTech về chiến lược đầu tư và phát triển website bền vững."}
            </p>

            <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-primary">
              <span>Đọc tiếp</span>
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
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
