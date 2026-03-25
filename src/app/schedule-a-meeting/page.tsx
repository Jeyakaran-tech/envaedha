"use client";

import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiMail, FiUser, FiBriefcase, FiPhone, FiMessageSquare, FiPaperclip } from "react-icons/fi";

export default function ScheduleMeeting() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    return (
        <div className="min-h-screen" style={{ background: "#020d1a" }}>
            <Navbar />

            {/* Content Container */}
            <div className="pt-40 pb-24 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        
                        {/* Left Column: Context */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-8 inline-flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <span className="font-mono text-[13px] tracking-[0.3em] text-blue-400">// CONNECT.ENGINEER.SCALE</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05]" style={{ color: "#e2eeff" }}>
                                How can we <br /><span className="text-blue-400">help you?</span>
                            </h1>

                            <div className="space-y-6 max-w-lg">
                                <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
                                    Share the technical challenges you're facing. Whether it's model fine-tuning, agentic orchestration, or infrastructure scaling, our engineering team is ready to assist.
                                </p>

                                <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
                                    Leave your contact details and we'll reach out within 24 hours to discuss how we can achieve your objectives together.
                                </p>
                            </div>

                            {/* Personnel Card — Deep Tech Style */}
                            <div className="mt-12 p-6 rounded-2xl border border-blue-900/20 bg-blue-950/10 backdrop-blur-sm flex items-center gap-5 group transition-all hover:border-blue-500/30">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-[#0a1a2f] border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl font-bold font-mono group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                                        JK
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#020d1a] rounded-full" title="Online" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg" style={{ color: "#e2eeff" }}>Jeyakaran Karnan</p>
                                    <p className="text-sm font-mono tracking-wider" style={{ color: "#3b82f6" }}>FOUNDER & LEAD ARCHITECT</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Premium Form */}
                        <div className="relative group">
                            {/* Form decorative border glow */}
                            <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-3xl blur-[2px] opacity-75" />
                            
                            <div className="relative bg-[#000a18] border border-blue-900/30 rounded-3xl p-8 lg:p-12 shadow-2xl transition-all group-hover:border-blue-500/20">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-blue-400/70">
                                                <FiUser /> FULL_NAME*
                                            </label>
                                            <input
                                                type="text" id="fullName" name="fullName" required
                                                value={formData.fullName} onChange={handleChange}
                                                className="w-full bg-[#020d1a] border border-blue-900/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {/* Company Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="companyName" className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-blue-400/70">
                                                <FiBriefcase /> COMPANY_NAME
                                            </label>
                                            <input
                                                type="text" id="companyName" name="companyName"
                                                value={formData.companyName} onChange={handleChange}
                                                className="w-full bg-[#020d1a] border border-blue-900/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                                                placeholder="Acme AI Corp"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-blue-400/70">
                                                <FiMail /> EMAIL_ADDRESS*
                                            </label>
                                            <input
                                                type="email" id="email" name="email" required
                                                value={formData.email} onChange={handleChange}
                                                className="w-full bg-[#020d1a] border border-blue-900/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-blue-400/70">
                                                <FiPhone /> PHONE_NUMBER*
                                            </label>
                                            <input
                                                type="tel" id="phone" name="phone" required
                                                value={formData.phone} onChange={handleChange}
                                                className="w-full bg-[#020d1a] border border-blue-900/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                                                placeholder="+61 400 000 000"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-blue-400/70">
                                            <FiMessageSquare /> PROMPT_OR_MESSAGE*
                                        </label>
                                        <textarea
                                            id="message" name="message" required rows={5}
                                            value={formData.message} onChange={handleChange}
                                            className="w-full bg-[#020d1a] border border-blue-900/40 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans resize-none"
                                            placeholder="Tell us about your AI goals..."
                                        />
                                    </div>

                                    {/* File Attachment */}
                                    <button type="button" className="group/file flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 hover:text-blue-400 transition-colors uppercase">
                                        <FiPaperclip size={14} className="group-hover/file:rotate-45 transition-transform" />
                                        ATTACH_SPECIFICATIONS_OR_NDA
                                    </button>

                                    {/* Consent */}
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-900/10">
                                        <input
                                            type="checkbox" id="consent" name="consent" required
                                            checked={formData.consent} onChange={handleChange}
                                            className="mt-1 w-4 h-4 rounded-md bg-[#020d1a] border border-blue-900 text-blue-500 focus:ring-blue-500 transition-all cursor-pointer"
                                        />
                                        <label htmlFor="consent" className="text-[12px] leading-relaxed text-neutral-500 select-none cursor-pointer">
                                            By submitting this form, I acknowledge that my data will be processed according to the 
                                            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 underline decoration-blue-900/40 underline-offset-4">Privacy Policy</a>.
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="group relative w-full overflow-hidden rounded-full p-[1px] transition-all hover:scale-[1.01] active:scale-[0.98]"
                                    >
                                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent top-0" />
                                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent bottom-0" />
                                        
                                        <div className="bg-white text-black py-4 px-8 rounded-full font-bold text-center tracking-tight transition-all group-hover:bg-blue-50">
                                            INITIALIZE CONNECTION
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
