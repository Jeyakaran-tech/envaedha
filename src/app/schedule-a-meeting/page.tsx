"use client";

import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

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
        // Handle form submission
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
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column - Text Content */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-6">
                                How can we help you?
                            </h1>

                            <p className="text-lg text-neutral-600 mb-6">
                                Share the challenge you are facing and we will find effective solutions.
                            </p>

                            <p className="text-lg text-neutral-600 mb-8">
                                Leave your contact number in the form – we promise that we will call you back to discuss how we can achieve your goal together.
                            </p>

                            {/* Account Manager Card */}
                            <div className="flex items-center gap-4 p-6 bg-neutral-50 rounded-2xl">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                    JK
                                </div>
                                <div>
                                    <p className="font-semibold text-black text-lg">Jeyakaran Karnan</p>
                                    <p className="text-neutral-600">Account Manager</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name & Company Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-black mb-2">
                                            FULL NAME <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-semibold text-black mb-2">
                                            COMPANY NAME
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                                            E-MAIL ADDRESS <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                                            PHONE NUMBER <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                                        MESSAGE <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-black"
                                    />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-neutral-600 hover:text-black transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                        SELECT FILES
                                    </button>
                                </div>

                                {/* Consent Checkbox */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="consent"
                                        required
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="consent" className="text-sm text-neutral-600">
                                        *I consent to the processing of my personal data by EnVaedha. I declare that I have read the information clause available in the{" "}
                                        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                    </label>
                                </div>

                                {/* reCAPTCHA Notice */}
                                <p className="text-xs text-neutral-500">
                                    The website uses reCAPTCHA.{" "}
                                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> Google's{" "}
                                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
                                </p>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
