import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Meeting | Envaedha",
  description: "Book a consultation with Envaedha's AI engineering team. Discuss your automation, agent, or LLM project with Melbourne's leading AI consultants.",
  alternates: {
    canonical: "https://www.envaedha.com.au/schedule-a-meeting",
  },
};

export default function ScheduleMeetingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
