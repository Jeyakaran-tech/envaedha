"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 font-sans">
            <Navbar />

            <main className="flex-1 pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-12 md:py-20 text-center">
                    <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-500 uppercase mb-6">
                        We are Envaedha
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                        Full stack digital agency <br className="hidden md:block" />
                        for <span className="font-serif italic font-normal">the discerning</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
                        For 18 years, we have been successfully delivering measurable results for
                        brands from all industries and different corners of the world. Our
                        activities are based on carefully developed standards and are driven by
                        creativity and passion for digital.
                    </p>
                </section>

                {/* Team Photo Section */}
                <section className="w-full max-w-[95rem] mx-auto px-4 mb-24 md:mb-32">
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50/50 to-transparent border border-blue-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-blue-600 font-medium text-lg">Team Photo Placeholder</p>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="container mx-auto px-4 py-16 text-center mb-24">
                    <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed max-w-5xl mx-auto mb-16 text-gray-900">
                        &ldquo;Envaedha&rsquo;s mission is to implement effective and engaging
                        digital marketing experiences.&rdquo;
                    </blockquote>

                    <div className="flex flex-col items-center gap-6">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden shadow-lg ring-1 ring-black/5">
                            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-blue-600">
                                MS
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-xl mb-1 text-gray-900">Michal Sękara</div>
                            <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">CEO</div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="container mx-auto px-4 py-16 mb-24">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-5">
                            <div className="sticky top-32">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                                    Envaedha Values
                                </h3>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
                                    The foundation <br />
                                    of our cooperation
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">Results</h4>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        We are effective. We focus on actions that deliver results. From
                                        strategy, to every line of code, to the last detail of the design.
                                        We create effective solutions for our Partners.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">Honesty</h4>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        We are transparent. We focus on good communication and ensure a
                                        clear process of project development. We believe successful
                                        collaboration is built on honesty, mutual trust, and strong
                                        relationships.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">Responsibility</h4>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        We have been in business for 18 years. Over 400 clients have
                                        already trusted us. Envaedha is primarily about people and their
                                        unique skills. It is also about the processes and tools that we
                                        are constantly improving.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-gray-900">Security</h4>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        We deliver peace of mind. By staying ahead of the innovation
                                        curve, we identify opportunities and select the optimal solutions.
                                        We execute flawlessly, ensuring on-time delivery with
                                        uncompromised security and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Grid Section */}
                <section className="container mx-auto px-4 py-16 mb-24">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Exceptional team</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Behind every success of our clients are the people. It is through
                            their dedication that we turn business challenges into real successes.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Michal Sękara", role: "CEO & Co-Founder" },
                            { name: "Maciej Bozik", role: "CTO & Co-Founder" },
                            { name: "Monika Nowicka", role: "Account Manager" },
                            { name: "Yaryna Onishechko", role: "Project Management Team Lead" }
                        ].map((member, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-blue-100 to-blue-50 mb-6 overflow-hidden relative transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                                    {/* Placeholder Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-blue-200/50 group-hover:scale-110 transition-transform duration-500">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
