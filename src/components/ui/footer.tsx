import Link from "next/link";
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Top Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">

                    {/* Column 1: Logo */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-black/5 flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" className="text-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" className="text-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" className="text-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-black">Envaedha</span>
                        </Link>
                    </div>

                    {/* Column 2: Main Links */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        {["Career", "Case studies", "About us", "Blog", "Contact"].map((item) => (
                            <Link key={item} href="#" className="text-2xl md:text-3xl text-neutral-500 hover:text-black transition-colors font-medium group flex items-center gap-2">
                                <svg
                                    className="group-hover:opacity-100 group-hover:w-5 opacity-0 w-0 transition-all duration-300 h-10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Column 3: Development */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <h3 className="text-[18px] font-bold tracking-wider text-black uppercase mb-2">DEVELOPMENT</h3>
                        <ul className="flex flex-col gap-3">
                            {["Websites", "WordPress development", "E-commerce", "Web applications", "Maintenance and development (SLA)"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[18px] text-neutral-500 hover:text-black transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Performance */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h3 className="text-[18px] font-bold tracking-wider text-black uppercase mb-2">PERFORMANCE</h3>
                        <ul className="flex flex-col gap-3">
                            {["Marketing strategy", "Google Ads campaigns", "Social media management", "Social media campaigns", "SEO Performance & Ranking"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[18px] text-neutral-500 hover:text-black transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Design */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <h3 className="text-[18px] font-bold tracking-wider text-black uppercase mb-2">DESIGN</h3>
                        <ul className="flex flex-col gap-3">
                            {["Branding", "UI/UX Design"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[18px] text-neutral-500 hover:text-black transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/5">

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
                            <FaBehance size={20} />
                        </Link>
                        <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
                            <FaBehance size={20} className="hidden" /> {/* Placeholder if needed, but using actual icons */}
                            <span className="font-bold text-lg">Bē</span>
                        </Link>
                        <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
                            <FaFacebookF size={18} />
                        </Link>
                        <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
                            <FaInstagram size={20} />
                        </Link>
                        <Link href="#" className="text-neutral-500 hover:text-black transition-colors">
                            <FaLinkedinIn size={20} />
                        </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-sm text-neutral-500 hover:text-black underline underline-offset-4">
                            Privacy policy
                        </Link>
                        <Link href="#" className="text-sm text-neutral-500 hover:text-black underline underline-offset-4">
                            Cookie consent
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-neutral-500">
                        &copy; Envaedha. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
