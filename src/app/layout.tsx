import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const officeCodePro = localFont({
  src: [
    {
      path: "../../public/fonts/OfficeCodePro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OfficeCodePro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OfficeCodePro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://envaedha.com.au"),
  title: {
    default: "Envaedha | AI Consulting Melbourne | Agentic Workflows & LLMs",
    template: "%s | Envaedha",
  },
  description: "Melbourne-based AI engineering firm. We build autonomous agents, fine-tune LLMs, and automate complex workflows for production-ready intelligence.",
  keywords: ["AI Consulting Melbourne", "AI Agents", "LLM Fine-Tuning", "Workflow Automation", "Enterprise AI", "Machine Learning Melbourne"],
  authors: [{ name: "Envaedha team" }],
  creator: "Envaedha",
  publisher: "Envaedha",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://envaedha.com.au",
    siteName: "Envaedha",
    title: "Envaedha | AI Consulting Melbourne",
    description: "Production-grade AI engineering. From model fine-tuning to autonomous agentic workflows.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envaedha | AI Consulting Melbourne",
    description: "Accelerating enterprise intelligence with custom neural architectures.",
    images: ["/og-image.png"],
    creator: "@envaedha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://envaedha.com.au/#organization",
      "name": "Envaedha",
      "image": "https://envaedha.com.au/logo.png",
      "url": "https://envaedha.com.au",
      "telephone": "+61 400 000 000", // Placeholder - adjust if real number exists
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5a Dianna Ct",
        "addressLocality": "Hampton Park",
        "addressRegion": "VIC",
        "postalCode": "3976",
        "addressCountry": "AU",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -38.0433,
        "longitude": 145.2808,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      "sameAs": [
        "https://www.linkedin.com/company/envaedha",
        "https://twitter.com/envaedha",
      ],
    },
    {
      "@type": "Service",
      "name": "AI Consulting Melbourne",
      "provider": { "@id": "https://envaedha.com.au/#organization" },
      "description": "Strategic AI consulting and architecture for Melbourne businesses.",
      "areaServed": "Melbourne, VIC",
    },
    {
      "@type": "WebSite",
      "@id": "https://envaedha.com.au/#website",
      "url": "https://envaedha.com.au",
      "name": "Envaedha",
      "publisher": { "@id": "https://envaedha.com.au/#organization" }
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-black text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

