"use client";

import { useState, useEffect } from "react";
import Button from "../ui/button";


export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "We build the tech";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-48">

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

                <div className="mx-auto max-w-5xl">
                    <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-8 drop-shadow-sm min-h-[160px] sm:min-h-[200px]">
                        <span className="font-mono text-primary mr-2">&gt;</span>
                        {text}
                        <span className="animate-pulse text-primary">_</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-neutral-400">
                            so you can build the business.
                        </span>
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
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
