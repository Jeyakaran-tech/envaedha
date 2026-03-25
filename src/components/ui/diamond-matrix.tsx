"use client";

import { useEffect, useRef } from "react";

/**
 * DiamondMatrix Canvas Animation
 *
 * A diamond/rhombus grid of glowing dots on the left half of the canvas.
 * Dot size and brightness increases toward the left edge and the dots
 * converge into a horizontal beam that shoots to the right — representing
 * intelligence crystallising from distributed data into a single signal.
 */

export default function DiamondMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const COLS = 28;
    const ROWS = 22;
    const SPACING = 28;
    const BEAM_Y_FRACTION = 0.5; // vertical center of canvas

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    /**
     * For each grid cell (col, row), compute whether it falls inside the
     * diamond shape.  The diamond is widest at the left and tapers to a
     * point (the "beam origin") on the right.
     *
     * Diamond equation: |row - centerRow| / maxHalfHeight <= 1 - col/maxCol
     */
    const inDiamond = (col: number, row: number, maxCol: number, maxRow: number) => {
      const cx = maxCol;          // convergence point = rightmost col
      const cy = maxRow / 2;      // vertical centre
      const halfH = maxRow / 2;   // maximum half-height (at left edge)

      // normalised horizontal position 0 (left) → 1 (right / tip)
      const nx = col / cx;
      // allowed half-height shrinks linearly toward the tip
      const allowedHalf = halfH * (1 - nx);
      return Math.abs(row - cy) <= allowedHalf;
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;

      const maxCol = COLS - 1;
      const maxRow = ROWS - 1;

      // ── Grid dots ──────────────────────────────────────────────────────
      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          if (!inDiamond(col, row, maxCol, maxRow)) continue;

          const x = col * SPACING + SPACING / 2;
          const y = row * SPACING + SPACING / 2;

          // Horizontal position 0→1 (left→right converging tip)
          const nx = col / maxCol;
          // Closeness to vertical centre 0→1
          const distFromCentre = Math.abs(row - maxRow / 2) / (maxRow / 2);
          const focusFactor = 1 - distFromCentre; // brighter near centre

          // Base brightness: outer left = big bright, closer to tip = tiny dim
          const sizeBase = (1 - nx) * 2.8 + 0.3;
          const alphaBase = (1 - nx) * 0.55 + focusFactor * 0.25 + 0.05;

          // Subtle breathing animation
          const breathe = 0.5 + 0.5 * Math.sin(t + col * 0.35 + row * 0.28);

          const radius = sizeBase * (0.85 + 0.15 * breathe);
          const alpha = Math.min(1, alphaBase * (0.8 + 0.2 * breathe));

          // Colour: near the beam tip dots lighten toward white-blue
          const lightness = 58 + focusFactor * nx * 22;
          const sat = 80 + focusFactor * 15;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.3, radius), 0, Math.PI * 2);
          ctx.fillStyle = `hsla(210, ${sat}%, ${lightness}%, ${alpha})`;
          ctx.fill();
        }
      }

      // ── Convergence beam line ──────────────────────────────────────────
      const beamOriginX = (maxCol) * SPACING + SPACING / 2;
      const beamOriginY = (maxRow / 2) * SPACING + SPACING / 2;
      const beamEnd = canvas.width + 20;

      // Outer soft glow
      const beamGrd = ctx.createLinearGradient(beamOriginX, 0, beamEnd, 0);
      beamGrd.addColorStop(0, "rgba(147, 197, 253, 0.25)");
      beamGrd.addColorStop(0.4, "rgba(96, 165, 250, 0.15)");
      beamGrd.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.beginPath();
      ctx.moveTo(beamOriginX, beamOriginY);
      ctx.lineTo(beamEnd, beamOriginY);
      ctx.strokeStyle = beamGrd;
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.stroke();

      // Crisp bright core line
      const coreGrd = ctx.createLinearGradient(beamOriginX, 0, beamEnd, 0);
      coreGrd.addColorStop(0, "rgba(200, 225, 255, 0.9)");
      coreGrd.addColorStop(0.25, "rgba(147, 197, 253, 0.5)");
      coreGrd.addColorStop(0.7, "rgba(96, 165, 250, 0.15)");
      coreGrd.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.beginPath();
      ctx.moveTo(beamOriginX, beamOriginY);
      ctx.lineTo(beamEnd, beamOriginY);
      ctx.strokeStyle = coreGrd;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glowing node at origin
      const pulse = 0.6 + 0.4 * Math.sin(t * 2);
      const dotGrd = ctx.createRadialGradient(beamOriginX, beamOriginY, 0, beamOriginX, beamOriginY, 10 * pulse);
      dotGrd.addColorStop(0, "rgba(230, 240, 255, 1)");
      dotGrd.addColorStop(0.4, "rgba(147, 197, 253, 0.8)");
      dotGrd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(beamOriginX, beamOriginY, 10 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = dotGrd;
      ctx.fill();

      // Solid centre dot
      ctx.beginPath();
      ctx.arc(beamOriginX, beamOriginY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(220, 238, 255, 1)";
      ctx.fill();

      animId = requestAnimationFrame(drawFrame);
    };

    resize();
    drawFrame();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
