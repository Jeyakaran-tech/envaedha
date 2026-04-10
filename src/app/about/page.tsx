import { Metadata } from "next";
import AboutPageClient from "./about-client";

export const metadata: Metadata = {
    title: "About Envaedha | AI Engineering Team Melbourne",
    description: "Meet the team behind Envaedha — Melbourne's AI engineering firm helping SMBs harness the power of autonomous agents and intelligent automation.",
    alternates: {
        canonical: "https://www.envaedha.com.au/about",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
