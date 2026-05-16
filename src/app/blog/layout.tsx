import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Blog | Melbourne SMB Insights | Envaedha",
  description: "AI consulting insights for Melbourne small businesses. Automation, agents, and strategy — practical guides and frontier tech news from Envaedha.",
  alternates: {
    canonical: "https://www.envaedha.com.au/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
