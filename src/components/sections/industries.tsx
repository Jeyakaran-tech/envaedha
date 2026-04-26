"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ENGAGEMENTS = [
    {
        num: "I/001",
        title: "Startups",
        desc: "Empowering startups with agile development and cost-effective solutions, we excel in product thinking, rapid prototyping, MVP development, and comprehensive mobile and SaaS solutions.",
        btnText: "BUILD WITH US",
        image: "/startup-engagement.png",
        link: "/contact",
    },
    {
        num: "I/002",
        title: "Small and Medium business",
        desc: "Accelerating growth for established enterprises through intelligent automation and custom AI architectures. We specialize in scaling operations, fine-tuning proprietary models, and integrating agentic workflows into existing stacks.",
        btnText: "SCALE WITH US",
        image: "/smb_engagement.png",
        link: "/contact",
    },
];

export default function Industries() {
    const [[activeIndex, direction], setActiveStep] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const nextIndex = activeIndex + newDirection;
        if (nextIndex >= 0 && nextIndex < ENGAGEMENTS.length) {
            setActiveStep([nextIndex, newDirection]);
        }
    };

    const variants = {
        enter: (d: number) => ({
            x: d > 0 ? "100%" : d < 0 ? "-100%" : 0,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (d: number) => ({
            x: d > 0 ? "-30%" : d < 0 ? "30%" : 0,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section id="industries" className="bg-[#0c0c0c] text-white border-t border-white/10 overflow-hidden font-sans relative group/sec">
            <CustomCursor />
            <div className="w-full">
                {/* Header Section */}
                <div className="px-6 lg:px-16 py-16 border-b border-white/10">
                    <div className="mx-auto flex items-start justify-between">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                                / OUR CLIENTS
                            </span>
                            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                                We engage with:
                            </h2>
                        </div>
                        <div className="hidden sm:flex flex-col items-end gap-6 h-full justify-between">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                                /00{ENGAGEMENTS.length}
                            </span>
                            <Link
                                href="/contact"
                                className="text-[11px] font-bold tracking-[0.2em] text-[#ff4d4d] uppercase flex items-center gap-2 hover:opacity-70 transition-opacity"
                            >
                                VIEW ALL <span className="text-[16px]">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Draggable Layout */}
                <div id="drag-zone" className="relative h-[720px] lg:h-[700px] overflow-hidden group/dragger cursor-none">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset }) => {
                            const swipe = offset.x;
                            if (swipe < -100) {
                                paginate(1);
                            } else if (swipe > 100) {
                                paginate(-1);
                            }
                        }}
                        className="h-full w-full active:cursor-grabbing"
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.8,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                                className="absolute inset-0 flex flex-col lg:flex-row w-full h-full items-stretch"
                            >
                                {/* Image Container - Full Half */}
                                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden group select-none pointer-events-none">
                                    <div className="absolute inset-0 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000">
                                        <img
                                            src={ENGAGEMENTS[activeIndex].image}
                                            alt={ENGAGEMENTS[activeIndex].title}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                                    </div>
                                    <span className="absolute top-12 left-6 lg:left-16 font-mono text-[11px] font-bold tracking-[0.1em] text-white/50 z-20">
                                        {ENGAGEMENTS[activeIndex].num}
                                    </span>
                                </div>

                                {/* Text Content Area - Other Half */}
                                <div className="w-full lg:w-1/2 bg-[#111111] flex flex-col justify-center px-6 lg:px-24 py-20 relative select-none">
                                    <h3 className="text-[60px] font-bold tracking-tight text-white mb-10 leading-[0.95]">
                                        {ENGAGEMENTS[activeIndex].title}
                                    </h3>

                                    <p className="text-[16px] lg:text-[18px] text-white/50 font-light leading-relaxed mb-12 max-w-xl">
                                        {ENGAGEMENTS[activeIndex].desc}
                                    </p>

                                    <div className="flex justify-start pointer-events-auto">
                                        <Link href={ENGAGEMENTS[activeIndex].link}>
                                            <button className="px-10 py-4 border border-white/20 rounded-[2px] text-[11px] font-bold tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 uppercase flex items-center gap-4 group">
                                                {ENGAGEMENTS[activeIndex].btnText} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Pagination Controls - Fixed outside the transition container to avoid overlap/z-index issues */}
                    <div className="absolute bottom-12 right-6 lg:right-16 flex items-center gap-8 z-30 pointer-events-auto">
                        <div className="flex gap-2">
                            {ENGAGEMENTS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const dir = i > activeIndex ? 1 : -1;
                                        setActiveStep([i, dir]);
                                    }}
                                    className={`w-12 h-[1px] transition-all duration-500 ${activeIndex === i ? "bg-white" : "bg-white/10"}`}
                                />
                            ))}
                        </div>
                        <span className="font-mono text-[11px] text-white/30 tracking-widest">
                            {activeIndex + 1} / {ENGAGEMENTS.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleEnter = () => setIsVisible(true);
        const handleLeave = () => setIsVisible(false);

        const target = document.getElementById("drag-zone");
        if (target) {
            target.addEventListener("mousemove", handleMouseMove);
            target.addEventListener("mouseenter", handleEnter);
            target.addEventListener("mouseleave", handleLeave);
        }

        return () => {
            if (target) {
                target.removeEventListener("mousemove", handleMouseMove);
                target.removeEventListener("mouseenter", handleEnter);
                target.removeEventListener("mouseleave", handleLeave);
            }
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[100] hidden lg:flex"
            animate={{
                x: mousePos.x - 60,
                y: mousePos.y - 25,
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.2 }}
        >
            <div className="bg-black/80 border border-white/20 text-white px-5 py-2 rounded-full flex items-center gap-3 shadow-2xl backdrop-blur-md">
                <span className="text-[10px] font-bold tracking-[0.2em] whitespace-nowrap uppercase">
                    ← DRAG →
                </span>
            </div>
        </motion.div>
    );
}
