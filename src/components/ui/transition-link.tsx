"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

/**
 * On click:
 *  1. A dark curtain SWEEPS UP from the bottom, covering the screen (exit).
 *  2. After the sweep completes, we navigate to the new route.
 *  3. template.tsx handles the ENTRY animation on the new page.
 */
export default function TransitionLink({ href, children, className }: TransitionLinkProps) {
    const router = useRouter();
    const isAnimating = useRef(false);

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            if (isAnimating.current) return;
            isAnimating.current = true;

            // ── Build the exit curtain ──
            const curtain = document.createElement("div");
            curtain.style.cssText = `
                position: fixed;
                inset: 0;
                background: #020d1a;
                z-index: 9999;
                transform: scaleY(0);
                transform-origin: bottom;
                will-change: transform;
                pointer-events: all;
            `;
            document.body.appendChild(curtain);

            // Force reflow so the initial state is applied before transition starts
            curtain.getBoundingClientRect();

            // Apply transition AFTER initial state is committed
            curtain.style.transition = "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)";
            curtain.style.transform = "scaleY(1)";

            // Navigate when curtain has fully covered the screen
            setTimeout(() => {
                router.push(href);
                // Remove curtain after navigation starts (template.tsx takes over entry)
                setTimeout(() => {
                    curtain.remove();
                    isAnimating.current = false;
                }, 200);
            }, 520);
        },
        [href, router]
    );

    return (
        <span
            onClick={handleClick}
            className={`cursor-pointer ${className ?? ""}`}
        >
            {children}
        </span>
    );
}
