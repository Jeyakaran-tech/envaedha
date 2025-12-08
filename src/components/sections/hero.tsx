"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../ui/button";


export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "We build the tech";
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; // Slow down slightly for better effect
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setText("");
                        let i = 0;
                        const interval = setInterval(() => {
                            setText(fullText.slice(0, i + 1));
                            i++;
                            if (i > fullText.length) {
                                clearInterval(interval);
                            }
                        }, 100);
                        // Cleanup interval when element leaves view or component unmounts
                        return () => clearInterval(interval);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        const section = document.getElementById("hero-section");
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (

        <section id="hero-section" className="relative h-dvh flex items-center justify-center overflow-hidden isolate">

            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                data-webkit-playsinline="true"
                className="absolute inset-0 h-full w-full object-cover z-0"
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

                <div className="mx-auto max-w-5xl">
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 drop-shadow-sm min-h-[160px] sm:min-h-[200px]">
                        <span className="font-mono text-primary mr-2">&gt;</span>
                        {text}
                        <span className="animate-blink text-primary">_</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                            so you can build the{" "}
                            <span className="relative whitespace-nowrap text-primary">
                                business
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-[6px] text-white"
                                    viewBox="0 0 100 10"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 2 Q 90 12 98 2"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            .
                        </span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-neutral-200 max-w-3xl mx-auto">
                        We combine deep technical expertise with strategic business insight to engineer scalable, high-impact software solutions for forward-thinking enterprises worldwide.
                    </p>

                    <div className="mt-12 flex items-center justify-center gap-x-6">
                        <Button className="rounded-full px-8 py-4 text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Lets connect →
                        </Button>
                    </div>
                </div>

            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </section>
    );
}
