import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    document.title = `${post.title} | Blog TechRent`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [post]);

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 container mx-auto px-4 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/50 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Trang chủ
        </Link>
        <span>&gt;</span>
        <Link to="/blog" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <span>&gt;</span>
        <span className="text-slate-900 dark:text-white font-medium line-clamp-1">
          {post.title}
        </span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
          / GÓC NHÌN TÀI SẢN SỐ
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-white/40 font-mono pb-6 border-b border-slate-100 dark:border-white/10">
          <span>Tác giả: {post.author}</span>
          <span>•</span>
          <span>Cập nhật: {post.date}</span>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-white/80 leading-relaxed text-base sm:text-lg mb-16"
        dangerouslySetInnerHTML={{
          __html: post.articleHtml || `<p>${post.excerpt}</p>`,
        }}
      />

      {/* CTA Box */}
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center mb-16">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Bạn cần tư vấn chiến lược website cho doanh nghiệp?
        </h3>
        <p className="text-sm text-slate-600 dark:text-white/70 mb-6 max-w-xl mx-auto">
          TechRent sẵn sàng trao đổi trực tiếp, phân tích hiện trạng và đề xuất giải pháp phù hợp với
          mục tiêu kinh doanh của bạn.
        </p>
        <a
          href="https://zalo.me/0813044817"
          target="_blank"
          rel="noreferrer"
          className="ximi-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
        >
          <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
          Chat Zalo trao đổi trực tiếp
        </a>
      </div>

      {/* Other Posts */}
      <div className="border-t border-slate-200 dark:border-white/10 pt-12">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Bài viết liên quan
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {otherPosts.map((item) => (
            <Link
              key={item.slug}
              to={`/blog/${item.slug}`}
              className="group p-4 rounded-xl border border-slate-200/80 bg-white hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.02] transition-all"
            >
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary dark:text-white transition-colors line-clamp-2 mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-white/50 line-clamp-2">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
