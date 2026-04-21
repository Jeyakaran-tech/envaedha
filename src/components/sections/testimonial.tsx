"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonial-bg.png"
          alt="Technical office environment"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Quote Icon */}
          <div className="mb-8">
            <svg
              width="45"
              height="36"
              viewBox="0 0 45 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white opacity-40"
            >
              <path
                d="M10.125 0V11.25H20.25V36H0V11.25L4.5 0H10.125ZM34.875 0V11.25H45V36H24.75V11.25L29.25 0H34.875Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Testimonial Text */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Envaedha took full ownership of our entire app stack — handling everything from development to deployment. It feels less like working with a vendor and more like having a trusted tech partner who genuinely cares about the outcome. One of the best decisions I&apos;ve made for my business.
          </h2>
        </motion.div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex items-center gap-6 mt-16 md:mt-24 justify-end"
        >
          {/* Social Spectrum Logo Image */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <Image
              src="/images/social-spectrum-logo.png"
              alt="Social Spectrum Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>

          <div className="text-left">
            <div className="font-mono text-sm tracking-[0.2em] text-white font-bold uppercase mb-1">
              Dr. Archana Akhaury
            </div>
            <div className="font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
              Founder and CEO, <br className="md:hidden" /> Social Spectrum
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
