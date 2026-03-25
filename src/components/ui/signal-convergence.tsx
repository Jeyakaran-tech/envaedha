"use client";

import { useEffect, useRef } from "react";

/**
 * SignalConvergence Canvas Animation
 *
 * Concept: Hundreds of luminous "data signal" particles stream in from the left
 * side of the canvas along elegant bezier-curved paths, converging toward a
 * central "intelligence core" on the right. The paths vary in opacity and
 * width, creating a sense of depth and complex data flowing into unified insight.
 *
 * This is unique to EnVaedha — it represents AI synthesis, not decoration.
 */

interface Signal {
  // Origin: random point on the left edge
  ox: number;
  oy: number;
  // Control points for bezier curve
  cp1x: number;
  cp1y: number;
  cp2x: number;
  cp2y: number;
  // Destination: convergence core
  dx: number;
  dy: number;
  // Animation progress 0→1
  progress: number;
  speed: number;
  opacity: number;
  width: number;
  hue: number; // slight color variation within blue family
  trail: { x: number; y: number }[];
  trailLength: number;
}

export default function SignalConvergence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let signals: Signal[] = [];
    let coreX = 0;
    let coreY = 0;
    let corePulse = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      coreX = canvas.width * 0.72;
      coreY = canvas.height * 0.5;
    };

    const spawnSignal = (): Signal => {
      const oy = Math.random() * canvas.height;
      const spread = canvas.height * 0.6;

      // Control points create elegant sweeping curves
      const cp1x = canvas.width * 0.15 + Math.random() * canvas.width * 0.2;
      const cp1y = oy + (Math.random() - 0.5) * spread;
      const cp2x = canvas.width * 0.45 + Math.random() * canvas.width * 0.15;
      const cp2y = coreY + (Math.random() - 0.5) * (spread * 0.3);

      return {
        ox: 0,
        oy,
        cp1x,
        cp1y,
        cp2x,
        cp2y,
        dx: coreX,
        dy: coreY,
        progress: Math.random(), // stagger on init
        speed: 0.0015 + Math.random() * 0.002,
        opacity: 0.1 + Math.random() * 0.5,
        width: 0.3 + Math.random() * 1.2,
        hue: 205 + Math.random() * 25, // 205–230 = blue spectrum
        trail: [],
        trailLength: 60 + Math.floor(Math.random() * 80),
      };
    };

    const cubicBezier = (t: number, p0: number, p1: number, p2: number, p3: number) => {
      const mt = 1 - t;
      return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
    };

    const init = () => {
      resize();
      signals = Array.from({ length: 120 }, spawnSignal);
    };

    const drawCore = () => {
      corePulse += 0.025;

      // Outer glow rings
      for (let r = 3; r >= 0; r--) {
        const radius = 20 + r * 18 + Math.sin(corePulse) * 4;
        const alpha = (0.06 - r * 0.012) * (0.7 + 0.3 * Math.sin(corePulse + r));
        const grd = ctx!.createRadialGradient(coreX, coreY, 0, coreX, coreY, radius);
        grd.addColorStop(0, `hsla(210, 100%, 70%, ${alpha * 3})`);
        grd.addColorStop(1, `hsla(210, 100%, 60%, 0)`);
        ctx!.beginPath();
        ctx!.arc(coreX, coreY, radius, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();
      }

      // Core dot
      const coreGrd = ctx!.createRadialGradient(coreX, coreY, 0, coreX, coreY, 6);
      coreGrd.addColorStop(0, "rgba(200, 230, 255, 1)");
      coreGrd.addColorStop(0.5, "rgba(100, 180, 255, 0.8)");
      coreGrd.addColorStop(1, "rgba(60, 130, 255, 0)");
      ctx!.beginPath();
      ctx!.arc(coreX, coreY, 5, 0, Math.PI * 2);
      ctx!.fillStyle = coreGrd;
      ctx!.fill();
    };

    const drawSignal = (s: Signal) => {
      const x = cubicBezier(s.progress, s.ox, s.cp1x, s.cp2x, s.dx);
      const y = cubicBezier(s.progress, s.oy, s.cp1y, s.cp2y, s.dy);

      s.trail.push({ x, y });
      if (s.trail.length > s.trailLength) s.trail.shift();

      if (s.trail.length < 2) return;

      // Draw trail as gradient fading line
      for (let i = 1; i < s.trail.length; i++) {
        const ratio = i / s.trail.length;
        const alpha = ratio * s.opacity * (0.8 + 0.2 * Math.sin(s.progress * Math.PI));
        ctx!.beginPath();
        ctx!.moveTo(s.trail[i - 1].x, s.trail[i - 1].y);
        ctx!.lineTo(s.trail[i].x, s.trail[i].y);
        ctx!.strokeStyle = `hsla(${s.hue}, 85%, 68%, ${alpha})`;
        ctx!.lineWidth = s.width * ratio;
        ctx!.lineCap = "round";
        ctx!.stroke();
      }

      // Leading bright dot
      const dGrd = ctx!.createRadialGradient(x, y, 0, x, y, s.width * 3);
      dGrd.addColorStop(0, `hsla(${s.hue}, 100%, 85%, ${s.opacity})`);
      dGrd.addColorStop(1, "transparent");
      ctx!.beginPath();
      ctx!.arc(x, y, s.width * 3, 0, Math.PI * 2);
      ctx!.fillStyle = dGrd;
      ctx!.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawCore();

      for (const s of signals) {
        drawSignal(s);
        s.progress += s.speed;
        if (s.progress >= 1) {
          // Recycle: reset with new random origin
          Object.assign(s, spawnSignal());
          s.progress = 0;
          s.trail = [];
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
