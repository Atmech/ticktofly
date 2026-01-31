import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TickToFly Inc. | Where Every Journey Becomes a Tailored Adventure",
  description:
    "Specializing in vacation packages and complex itineraries, TickToFly offers travelers the freedom to explore the globe. Custom vacations, group travel coordination, and 24/7 VIP support.",
  keywords: [
    "travel agency",
    "vacation packages",
    "luxury travel",
    "concierge service",
    "group travel",
    "honeymoon packages",
    "adventure tours",
  ],
  authors: [{ name: "TickToFly Inc." }],
  openGraph: {
    title: "TickToFly Inc. | Elite Travel. Personal Service.",
    description:
      "Where Every Journey Becomes a Tailored Adventure. Custom vacation packages, complex itinerary management, and 24/7 VIP support.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-[#111318]`}
      >
        {children}
      </body>
    </html>
  );
}
