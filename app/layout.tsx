import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Sales Agents — AI Agent Studio",
  description:
    "Nine connected AI agents that capture every enquiry across Website, WhatsApp, Instagram, phone, and lead lists — then qualify, follow up, and book appointments automatically.",
  openGraph: {
    title: "AI Sales Agents — AI Agent Studio",
    description:
      "Capture, qualify, follow up, and book appointments automatically across all your lead channels.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-[var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
