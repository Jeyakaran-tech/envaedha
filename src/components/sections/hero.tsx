"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DiamondMatrix from "../ui/diamond-matrix";

const WORDS = ["Intelligence", "Autonomy", "Convergence", "Reasoning", "Perception"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("Intelligence");
  const [deleting, setDeleting] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const target = WORDS[wordIdx];
    const delay = deleting ? 38 : 68;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = target.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === target) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = displayed.slice(0, -1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % WORDS.length);
        }
      }
      setTick((n) => n + 1);
    }, delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, displayed, deleting]);

  return (
    <section
      id="hero-section"
      className="relative h-dvh flex items-center overflow-hidden"
      style={{ background: "#020d1a" }}
    >
      {/*
        ─────────────────────────────────────────────────────────
        LAYOUT: two halves
          Left  half → the full-viewport diamond matrix canvas
          Right half → text content (positioned via absolute)
        ─────────────────────────────────────────────────────────
      */}

      {/* Canvas fills the whole section — the diamond itself only
          occupies the left ~55% by design of the animation */}
      <div className="absolute inset-0 z-0">
        <DiamondMatrix />
      </div>

      {/* Right-side fade so text is always legible */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #020d1a 0%, #020d1a 38%, transparent 62%)",
        }}
      />

      {/* Text content — right half */}
      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex justify-end">
          <div className="w-full max-w-lg">

            {/* Eyebrow */}
            {/* <p
              className="font-mono text-[13px] tracking-[0.25em] mb-8"
              style={{ color: "#3b82f6" }}
            >
              // ENVAEDHA.AI
            </p> */}

            {/* Headline */}
            <h1 className="mb-6 leading-[1.08]">
              <span
                className="block text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight"
                style={{ color: "#e2eeff" }}
              >
                Engineering
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight min-h-[1.15em]"
                style={{
                  color: "#93c5fd",
                  filter: "drop-shadow(0 0 24px rgba(147,197,253,0.2))",
                }}
              >
                {displayed}
                <span
                  style={{ color: "#3b82f6", opacity: 0.9 }}
                  className="animate-blink"
                >
                  |
                </span>
              </span>
            </h1>

            {/* Sub */}
            <p
              className="mb-10 text-lg leading-relaxed font-mono max-w-sm"
              style={{ color: "#cbd5e1" }}
            >
              Use EnVaedha to architect, deploy, and scale
              production-grade AI systems across your enterprise.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link href="/schedule-a-meeting">
                <button
                  className="px-8 py-3.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95"
                  style={{ background: "#e2eeff", color: "#020d1a" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "#e2eeff")
                  }
                >
                  Start Building
                </button>
              </Link>
              <Link href="#services">
                <button
                  className="px-8 py-3.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-95"
                  style={{
                    background: "transparent",
                    color: "#93c5fd",
                    border: "1px solid rgba(147,197,253,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(147,197,253,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(147,197,253,0.2)";
                  }}
                >
                  Get a Demo
                </button>
              </Link>
            </div>

            {/* Descriptor */}
            <p
              className="max-w-xs text-base leading-relaxed font-mono"
              style={{ color: "#94a3b8" }}
            >
              The pure-AI consulting platform to improve every phase
              of your enterprise intelligence lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(147,197,253,0.25), transparent)",
        }}
      />
    </section>
  );
}
