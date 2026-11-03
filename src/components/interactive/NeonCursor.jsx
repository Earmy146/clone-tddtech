import React, { useEffect, useState, useRef } from "react";

export default function NeonCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive target
      const target = e.target;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, .interactive-hover")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let rafId;
    const animateRing = () => {
      // Lerp ring position towards mouse
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Central crisp dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-opacity duration-200"
      />
      {/* Trailing soft glowing ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[99998] rounded-full border border-cyan-400/60 bg-cyan-400/10 backdrop-blur-[1px] transition-all duration-300 ${
          hovered
            ? "-ml-6 -mt-6 h-12 w-12 scale-110 border-cyan-300 bg-cyan-400/20 shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            : "-ml-3.5 -mt-3.5 h-7 w-7 opacity-70 shadow-[0_0_8px_rgba(0,212,255,0.3)]"
        }`}
      />
    </>
  );
}
