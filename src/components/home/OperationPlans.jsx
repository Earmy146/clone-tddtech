import React, { useState } from "react";

const WEEKS = [
  {
    week: "Tuần 1",
    code: "01",
    title: "Bảo vệ & Giám sát 24/7",
    summary: "Giám sát liên tục, sao lưu tự động mỗi đêm, chặn lưu lượng mã độc.",
    points: [
      "Sao lưu dữ liệu tự động 03 bản độc lập mỗi đêm.",
      "Cảnh báo gián đoạn dịch vụ ngay lập tức qua Telegram / Email.",
      "Tường lửa Cloudflare WAF ngăn chặn tấn công DDoS & bot spam.",
      "Kiểm tra chứng chỉ bảo mật SSL và gia hạn tự động.",
    ],
    metric: "99.98%",
    metricLabel: "Uptime cam kết",
  },
  {
    week: "Tuần 2",
    code: "02",
    title: "Giữ gìn & Tối ưu kỹ thuật",
    summary: "Xử lý sự cố trong vài giờ, bảo trì mã nguồn, cập nhật plugin định kỳ.",
    points: [
      "Tiếp nhận và phản hồi yêu cầu kỹ thuật trong vòng 30 phút.",
      "Kiểm toán tốc độ Core Web Vitals định kỳ trên di động.",
      "Khắc phục link gãy, lỗi 404 và hình ảnh hiển thị sai định dạng.",
      "Tối ưu lại bộ nhớ cache và truy vấn cơ sở dữ liệu.",
    ],
    metric: "< 2h",
    metricLabel: "Thời gian xử lý sự cố",
  },
  {
    week: "Tuần 3",
    code: "03",
    title: "Phát triển & Tối ưu SEO",
    summary: "SEO onpage và cấu trúc dữ liệu giúp website leo top bền vững trên Google.",
    points: [
      "Cập nhật thẻ meta title, description và schema chuẩn Google.",
      "Tối ưu sitemap.xml, robots.txt và chỉ mục tìm kiếm Search Console.",
      "Đo lường từ khóa ngành và tư vấn cụm chủ đề nội dung tiếp cận khách.",
      "Nâng cấp tính năng nhỏ theo phản hồi thực tế của khách hàng.",
    ],
    metric: "+35%",
    metricLabel: "Tăng trưởng hiển thị SEO",
  },
  {
    week: "Tuần 4",
    code: "04",
    title: "Báo cáo & Đề xuất cải tiến",
    summary: "Báo cáo chuyển đổi minh bạch, phân tích hành vi người dùng và chiến lược tháng tới.",
    points: [
      "Báo cáo chi tiết số lượng khách hàng gửi form, gọi hotline, click Zalo.",
      "Bản đồ nhiệt (heat map) theo dõi hành vi cuộn và click của khách.",
      "Họp đánh giá định kỳ trực tiếp hoặc online cùng chủ doanh nghiệp.",
      "Lên kế hoạch nâng cấp và cải thiện tỷ lệ chuyển đổi cho tháng tiếp theo.",
    ],
    metric: "100%",
    metricLabel: "Minh bạch số liệu",
  },
];

export default function OperationPlans() {
  const [activeWeek, setActiveWeek] = useState(0);
  const cur = WEEKS[activeWeek];

  return (
    <div className="section-operationplans">
      <section
        id="ke-hoach-van-hanh"
        aria-label="Kế hoạch vận hành mỗi tháng"
        className="relative overflow-hidden py-20 sm:py-28 bg-[#05080f] text-white border-b border-white/[0.06]"
      >
        {/* Background blueprint grid */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="pointer-events-none absolute left-10 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]"></div>

        <div className="container relative mx-auto px-4 z-10">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></span>
              Chu kỳ 30 ngày đồng hành
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.03em] text-white sm:text-4xl md:text-5xl">
              Bảo vệ. Giữ gìn.{" "}
              <span className="text-cyan-400">Phát triển.</span>
            </h2>
            <p className="mt-4 text-base text-white/60 sm:text-lg">
              Trách nhiệm của TechRent không dừng ở ngày bàn giao — đây là quy trình vận hành và bảo vệ liên tục mỗi tháng dành cho website của anh chị.
            </p>
          </div>

          {/* 30-Day Timeline Bar */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-3">
              <span>NGÀY 01</span>
              <span>NGÀY 10</span>
              <span>NGÀY 20</span>
              <span>NGÀY 30 (KẾT THÚC CHU KỲ)</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 transition-all duration-500 ease-out"
                style={{ width: `${((activeWeek + 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Interactive Week Selectors & Content Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Week buttons (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {WEEKS.map((w, idx) => (
                <button
                  key={w.code}
                  type="button"
                  onClick={() => setActiveWeek(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    activeWeek === idx
                      ? "border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,212,255,0.15)] scale-[1.01]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 opacity-70"
                  }`}
                >
                  <span className="font-mono text-sm font-black text-cyan-300 pt-0.5">
                    {w.code}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white">{w.title}</span>
                      <span className="text-[11px] font-semibold text-cyan-300/80 uppercase px-2 py-0.5 rounded bg-cyan-400/10">
                        {w.week}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/50 line-clamp-2">{w.summary}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Week Detail Display Card (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300">
                    Giai đoạn {cur.code} • {cur.week}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1 sm:text-3xl">
                    {cur.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black text-cyan-400">
                    {cur.metric}
                  </span>
                  <span className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider">
                    {cur.metricLabel}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-base leading-7 text-white/70">
                {cur.summary}
              </p>

              {/* Action checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-200/90 mb-3">
                  Nhiệm vụ trọng tâm được thực hiện:
                </h4>
                <ul className="space-y-3">
                  {cur.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="flex-none mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs text-white/45">
                  Báo cáo trực tiếp qua nhóm Zalo chuyên trách của doanh nghiệp
                </span>
                <a
                  href="https://zalo.me/0813044817"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-transform hover:scale-105"
                >
                  Tư vấn gói vận hành
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
