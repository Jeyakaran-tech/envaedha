"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDark, setIsDark] = useState(true); // Track if we're on dark or light background
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    // Function to detect background color
    const detectBackground = () => {
        const navbarHeight = 100;
        const elementAtNavbar = document.elementFromPoint(
            window.innerWidth / 2,
            navbarHeight
        );

        let isLightBackground = false;
        let currentElement = elementAtNavbar;

        while (currentElement && currentElement !== document.documentElement) {
            const bgColor = window.getComputedStyle(currentElement).backgroundColor;
            const tagName = currentElement.tagName.toLowerCase();

            // Check section, main, body, or top-level divs with bg-white
            const isRelevantElement =
                tagName === 'section' ||
                tagName === 'main' ||
                tagName === 'body' ||
                (tagName === 'div' && (
                    currentElement.classList.contains('bg-white') ||
                    currentElement.classList.contains('min-h-screen')
                ));

            if (isRelevantElement) {
                if (bgColor === 'rgb(255, 255, 255)' ||
                    bgColor === 'rgba(255, 255, 255, 1)' ||
                    currentElement.classList.contains('bg-white')) {
                    isLightBackground = true;
                    break;
                }

                if (bgColor !== 'rgba(0, 0, 0, 0)' &&
                    bgColor !== 'transparent' &&
                    !bgColor.includes('255, 255, 255')) {
                    isLightBackground = false;
                    break;
                }
            }

            currentElement = currentElement.parentElement;
        }

        setIsDark(!isLightBackground);
    };

    // Initial background detection on mount
    useEffect(() => {
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            detectBackground();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect background on scroll
            detectBackground();
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - move up
                const delta = currentScrollY - lastScrollY;
                setScrollY(prev => Math.min(prev + delta, 100)); // Max 100px up
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - move down
                const delta = lastScrollY - currentScrollY;
                setScrollY(prev => Math.max(prev - delta, 0)); // Min 0px (fully visible)
            }

            // Reset to visible when at top
            if (currentScrollY < 10) {
                setScrollY(0);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className="fixed left-0 right-0 z-50 w-full px-4 py-6 sm:px-6 lg:px-8 transition-all duration-300 ease-out"
            style={{ transform: `translateY(-${scrollY}px)` }}
        >
            <div className="mx-auto flex max-w-[90rem] items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={() => setActiveLink("")}>
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                        {/* Simple Logo Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" className={isDark ? "text-white" : "text-black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" className={isDark ? "text-white" : "text-black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" className={isDark ? "text-white" : "text-black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-black'}`}>EnVaedha</span>
                </Link>

                {/* Desktop Nav - Floating Pill */}
                <div className={`hidden md:flex items-center gap-1 pl-1 pr-1 py-1 backdrop-blur-md rounded-full shadow-lg transition-colors ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                    <div className="flex items-center gap-1 mr-6 relative">
                        {/* Sliding background indicator */}
                        <div
                            className={`absolute rounded-full transition-all duration-300 ease-out ${isDark ? 'bg-white/20' : 'bg-black/20'}`}
                            style={{
                                left: hoveredIndex !== null && navLinksRef.current[hoveredIndex] ? navLinksRef.current[hoveredIndex]?.offsetLeft : 0,
                                width: hoveredIndex !== null && navLinksRef.current[hoveredIndex] ? navLinksRef.current[hoveredIndex]?.offsetWidth : 0,
                                height: hoveredIndex !== null && navLinksRef.current[hoveredIndex] ? navLinksRef.current[hoveredIndex]?.offsetHeight : 0,
                                top: 0,
                                opacity: hoveredIndex !== null ? 1 : 0,
                            }}
                        />
                        <NavLink ref={(el) => { navLinksRef.current[0] = el; }} href="#competences" isActive={activeLink === "#competences"} onClick={() => handleLinkClick("#competences")} isDark={isDark} onMouseEnter={() => setHoveredIndex(0)} onMouseLeave={() => setHoveredIndex(null)}>COMPETENCES</NavLink>
                        <NavLink ref={(el) => { navLinksRef.current[1] = el; }} href="#case-studies" isActive={activeLink === "#case-studies"} onClick={() => handleLinkClick("#case-studies")} isDark={isDark} onMouseEnter={() => setHoveredIndex(1)} onMouseLeave={() => setHoveredIndex(null)}>CASE STUDIES</NavLink>
                        <NavLink ref={(el) => { navLinksRef.current[2] = el; }} href="#about" isActive={activeLink === "#about"} onClick={() => handleLinkClick("#about")} isDark={isDark} onMouseEnter={() => setHoveredIndex(2)} onMouseLeave={() => setHoveredIndex(null)}>ABOUT US</NavLink>
                        <NavLink ref={(el) => { navLinksRef.current[3] = el; }} href="#career" isActive={activeLink === "#career"} onClick={() => handleLinkClick("#career")} isDark={isDark} onMouseEnter={() => setHoveredIndex(3)} onMouseLeave={() => setHoveredIndex(null)}>CAREER</NavLink>
                        <NavLink ref={(el) => { navLinksRef.current[4] = el; }} href="#blog" isActive={activeLink === "#blog"} onClick={() => handleLinkClick("#blog")} isDark={isDark} onMouseEnter={() => setHoveredIndex(4)} onMouseLeave={() => setHoveredIndex(null)}>BLOG</NavLink>
                    </div>

                    <div className={`flex items-center gap-4 pl-6 transition-colors ${isDark ? 'border-l border-white/10' : 'border-l border-black/10'}`}>
                        <Link href="/schedule-a-meeting">
                            <Button className="text-[13px] bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2.5 text-xs font-bold tracking-wide border-none cursor-pointer">
                                FREE CONSULTATION
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 backdrop-blur-md rounded-full transition-colors ${isDark ? 'text-white bg-white/10 border border-white/10' : 'text-black bg-black/5 border border-black/10'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl p-4 shadow-2xl">
                    <div className="flex flex-col gap-4">
                        <MobileNavLink href="#competences" isActive={activeLink === "#competences"} onClick={() => { handleLinkClick("#competences"); setIsOpen(false); }}>COMPETENCES</MobileNavLink>
                        <MobileNavLink href="#case-studies" isActive={activeLink === "#case-studies"} onClick={() => { handleLinkClick("#case-studies"); setIsOpen(false); }}>CASE STUDIES</MobileNavLink>
                        <MobileNavLink href="#about" isActive={activeLink === "#about"} onClick={() => { handleLinkClick("#about"); setIsOpen(false); }}>ABOUT US</MobileNavLink>
                        <MobileNavLink href="#career" isActive={activeLink === "#career"} onClick={() => { handleLinkClick("#career"); setIsOpen(false); }}>CAREER</MobileNavLink>
                        <MobileNavLink href="#blog" isActive={activeLink === "#blog"} onClick={() => { handleLinkClick("#blog"); setIsOpen(false); }}>BLOG</MobileNavLink>
                        <Link href="/schedule-a-meeting">
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-sm font-bold cursor-pointer">
                                FREE CONSULTATION
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

const NavLink = React.forwardRef<HTMLAnchorElement, {
    href: string;
    isActive: boolean;
    onClick: () => void;
    isDark: boolean;
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}>(({ href, isActive, onClick, isDark, onMouseEnter, onMouseLeave, children }, ref) => {
    return (
        <Link
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
                text-[13px] font-bold tracking-wide transition-all duration-300 ease-in-out uppercase px-5 py-2.5 rounded-full relative z-10
                ${isActive
                    ? isDark
                        ? "bg-white/10 text-white shadow-sm"
                        : "bg-black/10 text-black shadow-sm"
                    : isDark
                        ? "text-white/70 hover:text-white"
                        : "text-black/70 hover:text-black"
                }
            `}
        >
            {children}
        </Link>
    );
});

NavLink.displayName = "NavLink";

function MobileNavLink({ href, isActive, onClick, children }: { href: string; isActive: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block text-sm font-bold tracking-wide text-foreground hover:text-primary py-2"
        >
            {children}
        </Link>
    );
}
