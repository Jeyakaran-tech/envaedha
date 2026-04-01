import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const cothamSans = localFont({
  src: "../../public/fonts/CothamSans.otf",
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
  title: "Envaedha | AI Consulting",
  description: "Accelerating enterprise intelligence with custom neural architectures and LLM solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${cothamSans.variable} ${newsreader.variable} ${officeCodePro.variable} antialiased font-sans bg-black text-white`}
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
