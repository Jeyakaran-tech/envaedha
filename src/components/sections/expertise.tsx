"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const CATEGORIES = [
    "ALL",
    "LANGUAGE",
    "MODEL",
    "CLOUD",
    "DATA",
    "INTERFACE",
    "PIPELINE",
];

const EXPERTISE_DATA = [
    { name: "Python", category: "LANGUAGE", label: "Logic" },
    { name: "Rust", category: "LANGUAGE", label: "Performance" },
    { name: "PyTorch", category: "MODEL", label: "Core Model" },
    { name: "TensorFlow", category: "MODEL", label: "Neural Net" },
    { name: "LangChain", category: "PIPELINE", label: "Reasoning" },
    { name: "LlamaIndex", category: "DATA", label: "Retrieval" },
    { name: "PostgreSQL", category: "DATA", label: "Storage" },
    { name: "Pinecone", category: "DATA", label: "Vector Index" },
    { name: "AWS", category: "CLOUD", label: "Infra" },
    { name: "Next.js", category: "INTERFACE", label: "Experience" },
    { name: "Docker", category: "PIPELINE", label: "Operations" },
];

export default function Expertise() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredData = activeCategory === "ALL" 
        ? EXPERTISE_DATA 
        : EXPERTISE_DATA.filter(item => item.category === activeCategory);

    return (
        <section id="expertise" className="bg-[#0c0c0c] py-32 sm:py-48 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    
                    {/* Left Side: Title & Filters */}
                    <div className="flex flex-col gap-14 sticky top-10 self-start py-10">
                        <div>
                            <h2 className="text-[54px] sm:text-[90px] font-bold tracking-tight text-[#f1f1f1] leading-[0.85] mb-12">
                                Neural<br />
                                Stacks
                            </h2>
                            <p className="text-[#a1a1a1] text-lg sm:text-xl leading-relaxed max-w-sm">
                                Envaedha leverages an elite toolbox of battle-tested technologies to build autonomous intelligence at scale.
                            </p>
                        </div>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border rounded-md transition-all duration-300 ${
                                        activeCategory === cat 
                                            ? "bg-white text-black border-white" 
                                            : "text-white/40 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: List */}
                    <div className="flex flex-col">
                        <div className="border-t border-white/10">
                            <AnimatePresence mode="popLayout">
                                {filteredData.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group flex items-center justify-between py-8 border-b border-white/10 hover:bg-white/[0.01] px-2 transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span className="text-white text-3xl sm:text-5xl font-bold tracking-tight group-hover:pl-2 transition-all duration-300">
                                                {item.name}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-12">
                                            <span className="hidden md:block font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase group-hover:text-white/50 transition-colors">
                                                {item.category}
                                            </span>
                                            <div className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-full group-hover:border-white/20 group-hover:bg-white/5 transition-all duration-300">
                                                <FiPlus className="text-white/20 group-hover:text-white group-hover:rotate-90 transition-all duration-500" size={20} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
