"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AnimatedGradient = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "relative flex h-full w-full items-center justify-center overflow-hidden bg-background",
                className
            )}
        >
            <div className="absolute inset-0 z-0 opacity-30 blur-3xl">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/40 mix-blend-multiply filter blur-3xl",
                        "dark:bg-purple-800/30 dark:mix-blend-screen"
                    )}
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className={cn(
                        "absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/40 mix-blend-multiply filter blur-3xl",
                        "dark:bg-blue-800/30 dark:mix-blend-screen"
                    )}
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -100, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 4,
                    }}
                    className={cn(
                        "absolute -bottom-8 left-20 h-[500px] w-[500px] rounded-full bg-pink-500/40 mix-blend-multiply filter blur-3xl",
                        "dark:bg-pink-800/30 dark:mix-blend-screen"
                    )}
                />
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
