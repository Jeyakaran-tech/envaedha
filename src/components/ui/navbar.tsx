"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiCpu } from "react-icons/fi";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed left-0 right-0 z-50 w-full px-4 py-6 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${scrolled ? "translate-y-[-10px]" : "translate-y-0"
                }`}
        >
            <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? "bg-[#020d1a]/80 backdrop-blur-xl border border-blue-900/40 shadow-2xl" : "bg-transparent"
                }`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setActiveLink("")}>
                    <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <FiCpu className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white font-mono">
                        Envaedha
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center gap-1 font-mono text-[14px] tracking-widest text-neutral-400">
                        <NavLink href="/#services" isActive={activeLink === "#services"} onClick={() => handleLinkClick("#services")}>SERVICES</NavLink>
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
                    <div className="flex flex-col gap-6">
                        <MobileNavLink href="/#services" isActive={activeLink === "#services"} onClick={() => handleLinkClick("#services")}>SERVICES</MobileNavLink>
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
