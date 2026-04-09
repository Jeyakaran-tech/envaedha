"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface SubService {
    label: string;
    title: string;
    description: string;
}

interface SubServicesStackProps {
    services: SubService[];
}

// Diamond/V pattern offsets (px) — col 0 highest, col 1 & 2 lowest, col 3 mid
// This creates the "V" shape like webisoft
const ROW_OFFSETS = [0, 120, 200, 80];

export default function SubServicesStack({ services }: SubServicesStackProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(() => {
        if (!sectionRef.current || services.length === 0) return;

        const rows = sectionRef.current.querySelectorAll<HTMLElement>(".sub-row");

        rows.forEach((row) => {
            const cards = Array.from(row.querySelectorAll<HTMLElement>(".sub-card"));

            // Apply initial offsets
            cards.forEach((card, i) => {
                gsap.set(card, { y: ROW_OFFSETS[i % 4] ?? 0 });
            });

            // Animate to y=0 as this row scrolls into view — no pin
            gsap.to(cards, {
                y: 0,
                ease: "none",
                stagger: 0,
                scrollTrigger: {
                    trigger: row,
                    start: "top 90%",
                    end: "top 20%",
                    scrub: true,
                },
            });
        });

    }, { scope: sectionRef, dependencies: [services.length] });

    // Split into rows of 4
    const rows: SubService[][] = [];
    for (let i = 0; i < services.length; i += 4) {
        rows.push(services.slice(i, i + 4));
    }

    return (
        <section
            ref={sectionRef}
            className="relative bg-black overflow-hidden px-6 lg:px-16 pt-24 pb-32"
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-32">
                <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter">
                    Services
                </h2>
                <span className="text-4xl lg:text-7xl font-bold text-white italic">
                    ({services.length})
                </span>
            </div>

            {/* Card rows */}
            <div className="flex flex-col gap-8">
                {rows.map((row, ri) => (
                    <div
                        key={ri}
                        className="sub-row grid grid-cols-4 gap-4 lg:gap-5 items-start"
                    >
                        {/* Pad to always 4 cols */}
                        {Array.from({ length: 4 }).map((_, ci) => {
                            const s = row[ci];
                            if (!s) {
                                return <div key={ci} />;
                            }
                            const globalIndex = ri * 4 + ci;
                            const isHovered = hoveredIndex === globalIndex;
                            return (
                                <div
                                    key={ci}
                                    className="sub-card bg-white rounded-[1.5rem] flex flex-col p-6 lg:p-8 cursor-pointer"
                                    style={{ height: "340px" }}
                                    data-index={globalIndex}
                                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Label + dot */}
                                    <div className="flex justify-between items-start mb-auto">
                                        <div className="flex flex-col">
                                            <span className="font-mono text-[9px] text-black/30 font-bold uppercase tracking-[0.2em]">
                                                {s.label.split(" ")[0]}
                                            </span>
                                            <span className="font-mono text-[10px] text-black font-bold uppercase tracking-[0.2em] leading-none mt-0.5">
                                                {s.label.split(" ")[1]}
                                            </span>
                                        </div>
                                        <div
                                            className="w-2.5 h-2.5 rounded-full mt-1 transition-colors duration-300"
                                            style={{ backgroundColor: isHovered ? "#000" : "rgba(0,0,0,0.1)" }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className="flex-1 flex items-center">
                                        <h3 className="text-xl lg:text-2xl font-bold text-black tracking-tight leading-tight">
                                            {s.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-auto">
                                        <p className="text-black/50 text-xs lg:text-sm leading-relaxed line-clamp-2">
                                            {s.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
}
