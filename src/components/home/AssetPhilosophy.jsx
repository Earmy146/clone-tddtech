import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";

const STAGES = [
  {
    id: "01",
    tag: "Chi phí",
    title: "Làm một lần rồi bỏ đó",
    desc: "Phần lớn chủ doanh nghiệp coi website là khoản chi phí bắt buộc phải có, giao dịch xong là hết việc. Không ai cập nhật nội dung, không ai theo dõi lỗi hay đo lường chuyển đổi.",
    metric: "0 Đơn",
    metricLabel: "Khách hàng mới phát sinh",
    statusBadge: "Lãng phí ngân sách",
    badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    id: "02",
    tag: "Bỏ quên",
    title: "Chậm dần & rớt khỏi Google",
    desc: "Hệ thống không được bảo trì sẽ phát sinh lỗi bảo mật, tốc độ tải trang chậm chạp, thứ hạng SEO rơi tự do. Sau 1-2 năm, doanh nghiệp buộc phải đập đi xây lại từ đầu.",
    metric: "-80%",
    metricLabel: "Lưu lượng truy cập tự nhiên",
    statusBadge: "Rủi ro bảo mật & SEO",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    id: "03",
    tag: "Tài sản",
    title: "Doanh nghiệp sở hữu 100%",
    desc: "TechRent bàn giao trọn vẹn toàn bộ mã nguồn sạch, database, tên miền và hạ tầng đám mây đứng tên pháp lý công ty. Không bị trói buộc, không phụ thuộc nền tảng đóng.",
    metric: "100%",
    metricLabel: "Quyền sở hữu pháp lý & mã nguồn",
    statusBadge: "Tài sản số an toàn",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "04",
    tag: "Vận hành",
    title: "Sinh lời bền vững mỗi tháng",
    desc: "Như vàng hay bất động sản, website được chăm sóc, tối ưu tốc độ, giám sát 24/7 và nâng cấp liên tục sẽ trở thành cỗ máy tự động thu hút khách hàng tiềm năng về cho doanh nghiệp.",
    metric: "+142%",
    metricLabel: "Tăng trưởng khách hàng mỗi quý",
    statusBadge: "Vận hành sinh lời",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
];

export default function AssetPhilosophy() {
  const [activeStage, setActiveStage] = useState(2); // Default to 'Tài sản'
  const canvasContainerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Real Three.js 3D WebGL Particle Sphere & Cyber Globe
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Cyber Particle Sphere
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 80;
    const colorCyan = new THREE.Color("#00d4ff");
    const colorLime = new THREE.Color("#d4ff3f");

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x + (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 4;

      const mixedColor = colorCyan.clone().lerp(colorLime, Math.random() * 0.4);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Glowing Orbital Ring
    const ringGeo = new THREE.RingGeometry(88, 89, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Mouse parallax tracking
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 4. Render loop
    let animId;
    const animate = () => {
      particles.rotation.y += 0.0035;
      particles.rotation.x += 0.001;
      ring.rotation.z += 0.002;

      // Subtle mouse follow
      camera.position.x += (mouseRef.current.x * 20 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 20 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  const cur = STAGES[activeStage];

  return (
    <div className="section-assetphilosophy">
      <section
        id="tai-san"
        aria-label="Chi phí hay tài sản"
        className="relative overflow-hidden py-20 sm:py-28 bg-[#f4f6f9] dark:bg-[#0a0f18] border-b border-slate-200 dark:border-white/[0.06]"
      >
        <div className="container relative mx-auto px-4 z-10">
          {/* Header titles */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
              Góc nhìn khác biệt
            </span>
            <h2 className="mt-4 text-3xl font-black leading-[1.1] tracking-[-0.03em] text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              Website là <span className="text-primary underline decoration-primary/30 decoration-wavy">Chi phí</span> hay{" "}
              <span className="text-[#d4ff3f] bg-slate-900 px-3 py-1 rounded-lg dark:bg-white dark:text-slate-950 inline-block rotate-[-1deg]">
                Tài sản
              </span>?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-white/70 sm:text-lg">
              Người coi website là chi phí thì tốn tiền làm lại mỗi năm. Người coi website là tài sản thì
              được bảo vệ, giữ gìn và có khách hàng mới mang về doanh thu mỗi tháng.
            </p>
          </div>

          {/* Main Interactive Stage Grid */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: 4 Stages Interactive Selectors & Active Card (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tab selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {STAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`flex flex-col text-left p-3.5 rounded-xl border transition-all duration-300 ${
                      activeStage === idx
                        ? "border-primary bg-white shadow-lg dark:bg-white/10 dark:border-primary text-slate-900 dark:text-white scale-102"
                        : "border-slate-200/80 bg-white/50 hover:bg-white dark:border-white/5 dark:bg-white/[0.03] text-slate-500 dark:text-white/45 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span className="text-[11px] font-black tracking-widest uppercase opacity-70">
                      {s.id}
                    </span>
                    <span className="text-sm font-bold mt-1">{s.tag}</span>
                  </button>
                ))}
              </div>

              {/* Active stage details card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[hsl(220_40%_8%_/_0.9)] animate-fadeIn">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${cur.badgeColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></span>
                    {cur.statusBadge}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest">
                    Giai đoạn {cur.id} / 04
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                  {cur.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-white/70">
                  {cur.desc}
                </p>

                {/* Highlight Metric */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/[0.08] flex items-baseline gap-4">
                  <span className="text-3xl sm:text-4xl font-black text-primary">
                    {cur.metric}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-white/60">
                    {cur.metricLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Three.js 3D WebGL Canvas Interactive Viewport (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div
                ref={canvasContainerRef}
                className="relative h-[340px] sm:h-[420px] w-full max-w-[440px] rounded-3xl overflow-hidden border border-slate-200/60 bg-gradient-to-b from-white/40 to-slate-100/30 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:from-white/[0.05] dark:to-transparent"
                style={{ cursor: "crosshair" }}
              >
                {/* Overlay helper badges */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-primary backdrop-blur dark:bg-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                    WebGL Three.js 3D Sphere
                  </span>
                </div>
                <div className="absolute bottom-4 inset-x-4 z-10 pointer-events-none text-center">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-white/40">
                    Rê chuột để xoay và tương tác với quả cầu dữ liệu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
