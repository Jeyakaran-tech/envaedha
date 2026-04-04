"use client";

import { motion } from "framer-motion";

/**
 * Next.js App Router template.tsx — re-mounts on every navigation.
 * Plays the PAGE ENTRY animation: dark curtain sweeps down off-screen,
 * revealing the page underneath.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Entry curtain — starts fully covering the screen and sweeps down */}
            <motion.div
                className="fixed inset-0 z-[9998] pointer-events-none"
                style={{ background: "#0c0c0c", transformOrigin: "top" }}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            />
            {children}
        </>
    );
}
