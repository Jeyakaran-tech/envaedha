"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero3D from "../ui/hero-3d";

const WORDS = ["Automation", "AI Agents", "Efficiency", "Growth", "Insights"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      ref={containerRef}
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/*
        ─────────────────────────────────────────────────────────
        LAYOUT: 3D HEADLINE ZOOM (ONE-SCREEN JOURNEY)
        ─────────────────────────────────────────────────────────
      */}

      <Hero3D displayed={displayed} scrollTarget={containerRef} />

      {/* Fade overlay as we approach Who We Are */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #020d1a)",
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{
          opacity: useTransform(useScroll().scrollYProgress, [0, 0.05], [1, 0])
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400/60 uppercase">Zoom In</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400/60 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-300"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
