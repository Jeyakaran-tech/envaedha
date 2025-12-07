"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                        {/* Simple Logo Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" className="text-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" className="text-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" className="text-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">EnVaedha</span>
                </Link>

                {/* Desktop Nav - Floating Pill */}
                <div className="hidden md:flex items-center gap-1 pl-8 pr-2 py-2 bg-background/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                    <div className="flex items-center gap-6 mr-6">
                        <NavLink href="#competences">COMPETENCES</NavLink>
                        <NavLink href="#case-studies">CASE STUDIES</NavLink>
                        <NavLink href="#about">ABOUT US</NavLink>
                        <NavLink href="#career">CAREER</NavLink>
                        <NavLink href="#blog">BLOG</NavLink>
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <span className="text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground">PL</span>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2.5 text-xs font-bold tracking-wide border-none">
                            FREE CONSULTATION
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground bg-background/10 backdrop-blur-md rounded-full border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 md:hidden rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl p-4 shadow-2xl">
                    <div className="flex flex-col gap-4">
                        <MobileNavLink href="#competences" onClick={() => setIsOpen(false)}>COMPETENCES</MobileNavLink>
                        <MobileNavLink href="#case-studies" onClick={() => setIsOpen(false)}>CASE STUDIES</MobileNavLink>
                        <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>ABOUT US</MobileNavLink>
                        <MobileNavLink href="#career" onClick={() => setIsOpen(false)}>CAREER</MobileNavLink>
                        <MobileNavLink href="#blog" onClick={() => setIsOpen(false)}>BLOG</MobileNavLink>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 text-sm font-bold">
                            FREE CONSULTATION
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-[11px] font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase">
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
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
