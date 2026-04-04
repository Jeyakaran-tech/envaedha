"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiCpu, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button";

const SOLUTIONS = [
    { title: "AI AGENTS", href: "/ai-agents-melbourne", desc: "Digital employees for autonomous operations." },
    { title: "CUSTOM LLM", href: "/llm-fine-tuning", desc: "Fine-tuned models on your unique data." },
    { title: "WORKFLOWS", href: "/workflow-automation", desc: "Intelligent pipeline automation." },
    { title: "STRATEGY", href: "/ai-consulting-melbourne", desc: "Roadmaps for business transformation." },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Check if we've scrolled past a threshold to change the styling
            setScrolled(currentScrollY > 20);

            // Handle visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide
                setVisible(false);
            } else {
                // Scrolling up - show
                setVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsOpen(false);
        setIsSolutionsOpen(false);
    };

    return (
        <nav
            className={`fixed left-0 right-0 z-50 w-full px-4 py-6 sm:px-6 lg:px-8 transition-all duration-700 ease-in-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-[-20px]"
            }`}
        >
            <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
                scrolled ? "bg-[#111111]/90 backdrop-blur-xl border border-white/[0.06] shadow-2xl" : "bg-transparent"
            }`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setActiveLink("")}>
                    <span className="text-xl font-bold tracking-tighter text-white">
                        Envaedha
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1 font-mono text-[14px] tracking-widest text-neutral-400">
                        
                        {/* Solutions Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setIsSolutionsOpen(true)}
                            onMouseLeave={() => setIsSolutionsOpen(false)}
                        >
                            <button 
                                className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-white uppercase ${isSolutionsOpen || SOLUTIONS.some(s => s.href === activeLink) ? "text-white" : "text-white/50"}`}
                            >
                                SOLUTIONS <FiChevronDown className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                            </button>
                            
                            <AnimatePresence>
                                {isSolutionsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 pt-4"
                                    >
                                        <div className="w-[280px] bg-[#020d1a]/95 backdrop-blur-2xl border border-blue-900/40 rounded-2xl p-4 shadow-2xl">
                                            <div className="grid gap-2">
                                                {SOLUTIONS.map((s) => (
                                                    <Link
                                                        key={s.href}
                                                        href={s.href}
                                                        onClick={() => handleLinkClick(s.href)}
                                                        className="group p-3 rounded-xl hover:bg-blue-500/10 transition-all text-left"
                                                    >
                                                        <p className="text-white text-xs font-bold tracking-widest mb-1 group-hover:text-blue-400">{s.title}</p>
                                                        <p className="text-[10px] text-white/50 leading-tight group-hover:text-white/70">{s.desc}</p>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink href="/#case-studies" isActive={activeLink === "#case-studies"} onClick={() => handleLinkClick("#case-studies")}>CASE STUDIES</NavLink>
                        <NavLink href="/#why-us" isActive={activeLink === "#why-us"} onClick={() => handleLinkClick("#why-us")}>WHY US</NavLink>
                        <NavLink href="/blog" isActive={activeLink === "/blog"} onClick={() => handleLinkClick("/blog")}>BLOG</NavLink>
                        <NavLink href="/#who-we-are" isActive={activeLink === "#who-we-are"} onClick={() => handleLinkClick("#who-we-are")}>ABOUT</NavLink>
                        <NavLink href="/contact" isActive={activeLink === "/contact"} onClick={() => handleLinkClick("/contact")}>CONTACT</NavLink>
                    </div>

                    <div className="flex items-center gap-4 pl-6 border-l border-white/10 ml-4">
                        <Link href="/schedule-a-meeting">
                            <Button className="bg-white text-black hover:bg-white rounded-full px-7 py-3 text-sm font-extrabold font-sans tracking-tight border-none transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-24 left-4 right-4 md:hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl p-6 shadow-2xl animate-slow-fade">
                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-[10px] tracking-[0.3em] text-blue-500 mb-2">// SOLUTIONS</p>
                        {SOLUTIONS.map((s) => (
                            <Link 
                                key={s.href} 
                                href={s.href} 
                                onClick={() => handleLinkClick(s.href)}
                                className={`text-lg font-bold tracking-tight transition-all ${activeLink === s.href ? "text-blue-500" : "text-white/70"}`}
                            >
                                {s.title}
                            </Link>
                        ))}
                        <div className="h-[1px] w-full bg-white/10 my-2" />
                        <MobileNavLink href="/#case-studies" isActive={activeLink === "#case-studies"} onClick={() => handleLinkClick("#case-studies")}>CASE STUDIES</MobileNavLink>
                        <MobileNavLink href="/#why-us" isActive={activeLink === "#why-us"} onClick={() => handleLinkClick("#why-us")}>WHY US</MobileNavLink>
                        <MobileNavLink href="/blog" isActive={activeLink === "/blog"} onClick={() => handleLinkClick("/blog")}>BLOG</MobileNavLink>
                        <MobileNavLink href="/#who-we-are" isActive={activeLink === "#who-we-are"} onClick={() => handleLinkClick("#who-we-are")}>ABOUT</MobileNavLink>
                        <MobileNavLink href="/contact" isActive={activeLink === "/contact"} onClick={() => handleLinkClick("/contact")}>CONTACT</MobileNavLink>
                        <Link href="/schedule-a-meeting" className="pt-4">
                            <Button className="w-full bg-primary text-white rounded-full py-4 text-sm font-extrabold font-sans shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, isActive, onClick, children }: { href: string; isActive: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`
                px-4 py-2 transition-all duration-300 hover:text-white relative group
                ${isActive ? "text-white" : "text-white/50"}
            `}
        >
            {children}
            <span className={`absolute bottom-0 left-4 right-4 h-[1px] bg-blue-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`} />
        </Link>
    );
}

function MobileNavLink({ href, isActive, onClick, children }: { href: string; isActive: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-xl font-bold tracking-tight transition-all ${isActive ? "text-blue-500" : "text-white/70"}`}
        >
            {children}
        </Link>
    );
}
