"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={() => setActiveLink("")}>
                    <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                        {/* Simple Logo Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" className="text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" className="text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" className="text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Envaedha</span>
                </Link>

                {/* Desktop Nav - Floating Pill */}
                <div className="hidden md:flex items-center gap-1 pl-1 pr-1 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                    <div className="flex items-center gap-1 mr-6">
                        <NavLink href="#competences" isActive={activeLink === "#competences"} onClick={() => handleLinkClick("#competences")}>COMPETENCES</NavLink>
                        <NavLink href="#case-studies" isActive={activeLink === "#case-studies"} onClick={() => handleLinkClick("#case-studies")}>CASE STUDIES</NavLink>
                        <NavLink href="#about" isActive={activeLink === "#about"} onClick={() => handleLinkClick("#about")}>ABOUT US</NavLink>
                        <NavLink href="#career" isActive={activeLink === "#career"} onClick={() => handleLinkClick("#career")}>CAREER</NavLink>
                        <NavLink href="#blog" isActive={activeLink === "#blog"} onClick={() => handleLinkClick("#blog")}>BLOG</NavLink>
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <Button className="text-[13px] bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2.5 text-xs font-bold tracking-wide border-none">
                            FREE CONSULTATION
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10"
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 text-sm font-bold">
                            FREE CONSULTATION
                        </Button>
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
                text-[13px] font-bold tracking-wide transition-all uppercase px-5 py-2.5 rounded-full
                ${isActive
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }
            `}
        >
            {children}
        </Link>
    );
}

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
