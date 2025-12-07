"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./button";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <Button
                variant="outline"
                className="rounded-full bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center p-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
