"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#pricing">Pricing</NavLink>
                    <NavLink href="#resources">Resources</NavLink>
                    <NavLink href="#community">Community</NavLink>
                    <NavLink href="#download">Download</NavLink>

                    <div className="flex items-center gap-4 ml-4">
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Star Us</Link>
                        <Button className="bg-foreground border border-border text-background hover:opacity-90 rounded-full px-4 py-1.5 text-xs font-medium">
                            SIGN IN
                        </Button>

                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background p-4">
                    <div className="flex flex-col gap-4">
                        <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
                        <MobileNavLink href="#resources" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
                        <MobileNavLink href="#community" onClick={() => setIsOpen(false)}>Community</MobileNavLink>

                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {children}
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block text-base font-medium text-muted-foreground hover:text-foreground"
        >
            {children}
        </Link>
    );
}
