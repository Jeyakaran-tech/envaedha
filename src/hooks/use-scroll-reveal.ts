"use client";

import { useEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

/**
 * Returns a ref to attach to a container element.
 * When that element enters the viewport, the class 'in-view' is added.
 * Use with CSS: .reveal { opacity: 0; transform: translateY(24px); ... }
 *               .reveal.in-view { opacity: 1; transform: translateY(0); ... }
 */
export function useScrollReveal<T extends Element = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
): RefObject<T> {
    const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options;
    const ref = useRef<T>(null!);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return ref;
}
