import React, { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "Tất cả mẫu" },
  { id: "enterprise", label: "Doanh nghiệp & Tập đoàn" },
  { id: "ecommerce", label: "Bán hàng & Thời trang" },
  { id: "tech", label: "Công nghệ & SaaS" },
  { id: "service", label: "Dịch vụ & Spa / Bida" },
  { id: "realestate", label: "Bất động sản & Nội thất" },
];

const TEMPLATES = [
  { id: 1, title: "Modern Enterprise", cat: "enterprise", img: "/media/techrent/kho-giao-dien/v1/1.webp", desc: "Chuẩn nhận diện thương hiệu doanh nghiệp, giới thiệu năng lực & dịch vụ." },
  { id: 3, title: "SaaS Cloud Platform", cat: "tech", img: "/media/techrent/kho-giao-dien/v1/3.webp", desc: "Giao diện hiện đại cho sản phẩm công nghệ, bảng giá & tính năng." },
  { id: 4, title: "Creative Agency", cat: "service", img: "/media/techrent/kho-giao-dien/v1/4.webp", desc: "Phong cách tối giản, tôn vinh hình ảnh và dự án sáng tạo." },
  { id: 5, title: "Corporate Portal B2B", cat: "enterprise", img: "/media/techrent/kho-giao-dien/v1/5.webp", desc: "Tổ chức thông tin công ty mẹ - công ty con, hồ sơ nhà đầu tư." },
  { id: 6, title: "Luxury Fashion Store", cat: "ecommerce", img: "/media/techrent/kho-giao-dien/v1/6.webp", desc: "Tối ưu trải nghiệm mua sắm, giỏ hàng tinh gọn chuẩn mobile." },
  { id: 9, title: "FinTech & Banking", cat: "tech", img: "/media/techrent/kho-giao-dien/v1/9.webp", desc: "Bảo mật cao, giao diện tin cậy cho tài chính, bảo hiểm & fintech." },
  { id: 10, title: "Logistics & Vận tải", cat: "enterprise", img: "/media/techrent/kho-giao-dien/v1/10.webp", desc: "Tra cứu lộ trình, báo giá cước vận tải trực tuyến thuận tiện." },
  { id: 11, title: "Industrial & Manufacturing", cat: "enterprise", img: "/media/techrent/kho-giao-dien/v1/11.webp", desc: "Catalog sản phẩm nhà máy, chứng chỉ ISO và năng lực sản xuất." },
  { id: 12, title: "Healthcare & Clinic", cat: "service", img: "/media/techrent/kho-giao-dien/v1/12.webp", desc: "Đặt lịch khám thông minh, đội ngũ bác sĩ và bảng giá dịch vụ y tế." },
  { id: 15, title: "Real Estate Luxury", cat: "realestate", img: "/media/techrent/kho-giao-dien/v1/15.webp", desc: "Mặt bằng 3D, tiện ích dự án căn hộ và form đăng ký xem nhà mẫu." },
  { id: 17, title: "Academy & Education", cat: "service", img: "/media/techrent/kho-giao-dien/v1/17.webp", desc: "Khóa học trực tuyến, đăng ký tư vấn tuyển sinh và lộ trình học tập." },
  { id: 18, title: "Hospitality Resort", cat: "service", img: "/media/techrent/kho-giao-dien/v1/18.webp", desc: "Trải nghiệm nghỉ dưỡng cao cấp, đặt phòng trực tiếp không qua sàn." },
];

export default function TemplateStore() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredTemplates =
    selectedCat === "all"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.cat === selectedCat);

  return (
    <div className="section-templatestore">
      <section
        id="kho-giao-dien"
        aria-label="Kho giao diện website"
        className="relative overflow-hidden py-20 sm:py-28 bg-slate-50 dark:bg-[hsl(220_40%_6%)] border-b border-slate-200 dark:border-white/[0.06]"
      >
        <div className="container relative mx-auto px-4 z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Kho giao diện mẫu
              </span>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Cảm hứng thiết kế theo từng ngành nghề
              </h2>
              <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-white/70">
                Chọn ngành nghề của anh chị để được tư vấn cấu trúc giao diện tối ưu nhất cho hoạt động kinh doanh.
              </p>
            </div>

            <a
              href="https://zalo.me/0813044817"
              target="_blank"
              rel="noreferrer"
              className="ximi-button group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <img alt="" className="h-4 w-4 rounded-sm" src="/zalo-icon.png" />
              Yêu cầu mẫu riêng cho ngành của bạn
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCat(c.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedCat === c.id
                    ? "bg-slate-900 text-white shadow dark:bg-white dark:text-slate-950 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Template Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTemplates.map((t) => (
              <div
                key={t.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-[hsl(220_40%_8%)]"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3">
                    <a
                      href="https://zalo.me/0813044817"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 shadow-md transition-transform hover:scale-105"
                    >
                      <img alt="" className="h-3.5 w-3.5" src="/zalo-icon.png" />
                      Nhận tư vấn mẫu này
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Mẫu 0{t.id}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-white/50 line-clamp-2">
                      {t.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-white/40">
                      Chuẩn tài sản số
                    </span>
                    <a
                      href="https://zalo.me/0813044817"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Chọn mẫu &rarr;
                    </a>
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
